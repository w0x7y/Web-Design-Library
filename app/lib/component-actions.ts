import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { buildBrief, codeForFormat } from '../../src/library/brief'
import type { ComponentMeta, ComponentSources, Format } from '../../src/library/types'
import { SITE } from '../site'
import type { AnalyticsEvent } from './analytics'
import { captureComponent, type CaptureOptions } from './capture'
import { copyImage } from './clipboard'
import { browserTextCopyPorts, COPY_REFUSED, copyTextAction, type CopyResult, type TextCopyPorts } from './copy-action'
import type { CaptureViewport } from './viewports'

export type { CopyRefusal, CopyResult, ToastOptions } from './copy-action'

// The detail page's actions: copy code, copy for AI, copy one file, download a PNG and copy the image.
// Text copying uses copy-action; image toasts, analytics and capture rules live here.

// Toast text. The smoke tests assert it, so keep it in step with them.
const COPIED_CODE: Record<Format, string> = { react: 'Copied React code', html: 'Copied HTML + CSS' }
const COPIED_BRIEF = 'Copied AI brief'
const COPIED_IMAGE = 'Copied image'
const IMAGE_REFUSED_HINT = 'Your browser blocked clipboard access. Use Download to save the PNG instead.'
const CAPTURE_FAILED = "Couldn't create image"
const downloaded = (fileName: string) => `Downloaded ${fileName}`
const saveFailed = (fileName: string) => `Couldn't download ${fileName}`

const pngFileName = (slug: string, viewport: CaptureViewport) => `${SITE.slug}-${slug}-${viewport}.png`

/** What the actions need from the outside world. The browser adapter is `browserPorts`; tests pass fakes. */
export interface ActionPorts extends TextCopyPorts {
  /** Writes the PNG while it is still being made. Resolves false when refused or when `png` rejects. */
  copyImage(png: Promise<Blob>): Promise<boolean>
  /** Rejects on failure, and once `signal` aborts. */
  capture(meta: ComponentMeta, options: CaptureOptions): Promise<Blob>
  /** Hands the PNG to the browser as a download. May throw. */
  save(png: Blob, fileName: string): void
}

/**
 * Each action ends in exactly one toast and records its analytics event only on success. The
 * returned promises never reject. At most one capture (Download or Copy image) runs at a time,
 * Retry included: a capture asked for while busy is dropped.
 */
export interface ComponentActions {
  /** True from the start of a capture until it, and any clipboard write of its image, has settled. */
  isBusy(): boolean
  /** Calls `listener` whenever isBusy() changes. Returns the unsubscribe function. */
  subscribe(listener: () => void): () => void
  copyCode(format: Format): Promise<CopyResult>
  copyBrief(format: Format): Promise<CopyResult>
  copyFile(format: Format, file: { name: string; code: string }): Promise<CopyResult>
  download(viewport: CaptureViewport, transparent: boolean): Promise<void>
  /** Call it synchronously inside the click: it starts the clipboard write before it returns, as Safari requires. */
  copyImage(transparent: boolean): Promise<void>
  /** Aborts the running capture. Nothing started before or after does anything more: no saves, toasts or events. */
  dispose(): void
}

export function createComponentActions(meta: ComponentMeta, sources: ComponentSources, ports: ActionPorts): ComponentActions {
  const { slug } = meta
  const { notify } = ports
  const listeners = new Set<() => void>()
  let running: AbortController | null = null
  let disposed = false

  function setRunning(capture: AbortController | null) {
    running = capture
    for (const listener of listeners) listener()
  }

  const copy = (text: string, label: string, message: string, event: AnalyticsEvent) =>
    copyTextAction({ text, label, message, event, isDisposed: () => disposed }, ports)

  /** Runs `work` as the only capture, or drops it if one is already running. */
  function exclusive(work: (signal: AbortSignal) => Promise<void>): Promise<void> {
    if (disposed || running) return Promise.resolve()
    const capture = new AbortController()
    setRunning(capture)
    return work(capture.signal).finally(() => setRunning(null))
  }

  function download(viewport: CaptureViewport, transparent: boolean): Promise<void> {
    const fileName = pngFileName(slug, viewport)
    const retry = { label: 'Retry', onClick: () => void download(viewport, transparent) }
    return exclusive(async (signal) => {
      let png: Blob
      try {
        png = await ports.capture(meta, { viewport, transparent, signal })
      } catch {
        if (!disposed) notify.error(CAPTURE_FAILED, { action: retry })
        return
      }
      if (disposed) return
      try {
        ports.save(png, fileName)
      } catch {
        notify.error(saveFailed(fileName), { action: retry })
        return
      }
      notify.success(downloaded(fileName))
      ports.track({ name: 'download_png', slug, viewport })
    })
  }

  function copyImageAction(transparent: boolean): Promise<void> {
    const retry = { label: 'Retry', onClick: () => void copyImageAction(transparent) }
    return exclusive(async (signal) => {
      // Both ports are called before the first await: Safari only accepts a ClipboardItem built inside the click.
      const png = ports.capture(meta, { viewport: 'desktop', transparent, signal })
      const copied = ports.copyImage(png)
      // Busy until both settle: a clipboard that refuses at once must not free the buttons mid-capture.
      const [captured, written] = await Promise.allSettled([png, copied])
      if (disposed) return
      if (captured.status === 'rejected') {
        notify.error(CAPTURE_FAILED, { action: retry })
      } else if (written.status === 'fulfilled' && written.value) {
        notify.success(COPIED_IMAGE)
        ports.track({ name: 'copy_image', slug })
      } else {
        notify.error(COPY_REFUSED, { description: IMAGE_REFUSED_HINT })
      }
    })
  }

  return {
    isBusy: () => running !== null,
    subscribe(listener) {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
    copyCode: (format) => copy(codeForFormat(meta, sources, format), format === 'react' ? 'React code' : 'HTML + CSS', COPIED_CODE[format], { name: 'copy_code', slug, format }),
    copyBrief: (format) => copy(buildBrief(meta, sources, format), 'AI brief', COPIED_BRIEF, { name: 'copy_ai', slug, format }),
    copyFile: (format, { name, code }) =>
      // Component.tsx is the whole React code; a single HTML or CSS file is not "HTML + CSS", so it is named.
      copy(code, name, format === 'react' ? COPIED_CODE.react : `Copied ${name}`, { name: 'copy_code', slug, format }),
    download,
    copyImage: copyImageAction,
    dispose() {
      disposed = true
      running?.abort()
    },
  }
}

/** Starts a download of `blob` as `fileName`. The object URL is released once the browser has taken the file. */
function saveBlob(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  link.click()
  setTimeout(() => URL.revokeObjectURL(url), 10_000)
}

/** The real adapters: the clipboard, the hidden-iframe capture, an <a download>, Sonner and Vercel Analytics. */
export const browserPorts: ActionPorts = {
  ...browserTextCopyPorts,
  copyImage,
  capture: captureComponent,
  save: saveBlob,
}

/**
 * The actions for one component, bound to the browser, and whether a capture is running. Unmounting
 * aborts the running capture and silences everything still pending.
 */
export function useComponentActions(meta: ComponentMeta, sources: ComponentSources): { actions: ComponentActions; busy: boolean } {
  const [actions, setActions] = useState(() => createComponentActions(meta, sources, browserPorts))
  const disposed = useRef<ComponentActions>(null)
  useEffect(() => {
    // Already disposed: development StrictMode remounted the component, or meta or sources changed. Start afresh.
    if (disposed.current === actions) {
      setActions(createComponentActions(meta, sources, browserPorts))
      return
    }
    return () => {
      actions.dispose()
      disposed.current = actions
    }
  }, [actions, meta, sources])
  const busy = useSyncExternalStore(actions.subscribe, actions.isBusy, () => false)
  return { actions, busy }
}
