import { domToBlob } from 'modern-screenshot'
import type { ComponentMeta } from '../../src/library/types'
import { SITE } from '../site'
import { previewPath, type PreviewState } from './preview-ready'
import { ELEMENT_FRAME_HEIGHT, VIEWPORTS } from './viewports'

export type CaptureViewport = 'desktop' | 'mobile'

export const CAPTURE_SCALE = 2
export const CAPTURE_TIMEOUT_MS = 10_000

const POLL_MS = 50

export function pngFileName(slug: string, viewport: CaptureViewport): string {
  return `${SITE.slug}-${slug}-${viewport}.png`
}

/** The size of the hidden iframe, which is also the viewport the component lays out in. */
export function frameSize(kind: ComponentMeta['preview']['kind'], viewport: CaptureViewport) {
  const { width, height } = VIEWPORTS[viewport]
  return { width, height: kind === 'element' ? ELEMENT_FRAME_HEIGHT : height }
}

/** Rejects with "Capture timed out" if `work` has not settled after `ms`. */
export function withTimeout<T>(work: Promise<T>, ms: number): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new Error('Capture timed out')), ms)
  })
  return Promise.race([work, timeout]).finally(() => clearTimeout(timer))
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/** Polls until `read` returns something truthy. Throws the signal's reason once it is aborted. */
async function until<T>(read: () => T | null | undefined | false, signal: AbortSignal): Promise<T> {
  for (;;) {
    signal.throwIfAborted()
    const value = read()
    if (value) return value
    await sleep(POLL_MS)
  }
}

function createFrame(meta: ComponentMeta, viewport: CaptureViewport) {
  const { width, height } = frameSize(meta.preview.kind, viewport)
  const frame = document.createElement('iframe')
  frame.setAttribute('data-capture-frame', '')
  frame.setAttribute('aria-hidden', 'true')
  frame.tabIndex = -1
  // A page taller than the frame would get a scrollbar that, where scrollbars take layout width, narrows the layout below the target width.
  frame.setAttribute('scrolling', 'no')
  frame.style.cssText = 'position:fixed;left:-100000px;top:0;border:0'
  frame.width = String(width)
  frame.height = String(height)
  frame.src = previewPath(meta.slug, { capture: true })
  return frame
}

async function render(frame: HTMLIFrameElement, meta: ComponentMeta, transparent: boolean, signal: AbortSignal) {
  const loaded = new Promise((resolve) => frame.addEventListener('load', resolve, { once: true }))
  document.body.append(frame)
  await loaded
  // An error page (the request failed) belongs to another origin, so its document can't be read.
  if (!frame.contentDocument) throw new Error('The preview page did not load')

  // The page reports ready once its component has rendered with its fonts and images, and freezes motion
  // (data-capture) once hydrated; a capture needs both. The document is read afresh on every poll, in
  // case the frame swaps documents while it loads.
  const backdrop = await until(() => {
    const el = frame.contentDocument?.querySelector<HTMLElement>('[data-preview-backdrop]')
    const state = el?.dataset.previewState as PreviewState | undefined
    if (state === 'failed') throw new Error('The preview page failed to render')
    return state === 'ready' && el?.hasAttribute('data-capture') ? el : null
  }, signal)
  const root = backdrop.querySelector<HTMLElement>('[data-capture-root]')!

  const target = meta.preview.kind === 'element' && !transparent ? backdrop : root
  return domToBlob(target, {
    scale: CAPTURE_SCALE,
    backgroundColor: transparent ? null : '#ffffff',
    timeout: CAPTURE_TIMEOUT_MS,
    type: 'image/png',
  })
}

/**
 * Renders the component's own preview page (/preview/<slug>?capture=1) in a hidden iframe at the
 * target width and captures it as a PNG at CAPTURE_SCALE. Transparent mode drops the preview
 * page's padding and backdrop, keeping only the component (a section's own background stays).
 * Rejects after CAPTURE_TIMEOUT_MS; the iframe is always removed.
 */
export async function captureComponent(
  meta: ComponentMeta,
  { viewport, transparent }: { viewport: CaptureViewport; transparent: boolean },
): Promise<Blob> {
  const abort = new AbortController()
  const frame = createFrame(meta, viewport)
  try {
    return await withTimeout(render(frame, meta, transparent, abort.signal), CAPTURE_TIMEOUT_MS)
  } finally {
    abort.abort()
    frame.remove()
  }
}
