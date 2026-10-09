import { useState } from 'react'
import { toast } from 'sonner'
import { trackEvent } from '~/lib/analytics'
import { captureComponent, pngFileName } from '~/lib/capture'
import { copyImage } from '~/lib/clipboard'
import { copyWithFeedback } from '~/lib/copy-feedback'
import { useHydrated } from '~/lib/use-hydrated'
import type { CaptureViewport } from '~/lib/viewports'
import { buildBrief, codeForFormat } from '../../src/library/brief'
import type { ComponentMeta, ComponentSources, Format } from '../../src/library/types'
import { DownloadMenu } from './DownloadMenu'
import { FormatSwitch } from './FormatSwitch'

const COPIED_CODE: Record<Format, string> = { react: 'Copied React code', html: 'Copied HTML + CSS' }

const BUTTON =
  'inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg border px-3 text-[13px] font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 disabled:cursor-default disabled:opacity-60 dark:focus-visible:outline-zinc-100'
const PRIMARY =
  'border-zinc-900 bg-zinc-900 text-white enabled:hover:bg-zinc-700 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 dark:enabled:hover:bg-zinc-300'
const SECONDARY =
  'border-zinc-200 bg-white text-zinc-800 enabled:hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:enabled:hover:bg-zinc-900'

/** Starts a download of `blob` as `fileName`. The object URL is released once the browser has taken the file. */
function saveBlob(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  link.click()
  setTimeout(() => URL.revokeObjectURL(url), 10_000)
}

/**
 * Format switch, Copy code, Copy for AI, Download menu and Copy image. The two image actions
 * lock while a capture runs; `onCopyFailed` lets the page reveal the code for a manual copy.
 */
export function ActionBar({
  meta,
  sources,
  format,
  onFormatChange,
  onCopyFailed,
}: {
  meta: ComponentMeta
  sources: ComponentSources
  format: Format
  onFormatChange(format: Format): void
  onCopyFailed(): void
}) {
  const hydrated = useHydrated()
  const [capturing, setCapturing] = useState(false)
  const [transparent, setTransparent] = useState(false)
  const { slug } = meta

  const captureFailed = (retry: () => void) =>
    toast.error("Couldn't create image", { action: { label: 'Retry', onClick: retry } })

  function download(viewport: CaptureViewport, isTransparent: boolean) {
    const fileName = pngFileName(slug, viewport)
    setCapturing(true)
    captureComponent(meta, { viewport, transparent: isTransparent })
      .then(
        (png) => {
          saveBlob(png, fileName)
          toast.success(`Downloaded ${fileName}`)
          trackEvent({ name: 'download_png', slug, viewport })
        },
        () => captureFailed(() => download(viewport, isTransparent)),
      )
      .finally(() => setCapturing(false))
  }

  // Runs inside the click handler (and the Retry click): copyImage must build its ClipboardItem synchronously.
  function copyImageToClipboard(isTransparent: boolean) {
    setCapturing(true)
    let captureRejected = false
    const png = captureComponent(meta, { viewport: 'desktop', transparent: isTransparent })
    png.catch(() => {
      captureRejected = true
    })
    void copyImage(png)
      .then((copied) => {
        if (copied) {
          toast.success('Copied image')
          trackEvent({ name: 'copy_image', slug })
        } else if (captureRejected) {
          captureFailed(() => copyImageToClipboard(isTransparent))
        } else {
          toast.error("Couldn't copy", { description: 'Your browser blocked clipboard access. Use Download to save the PNG instead.' })
        }
      })
      .finally(() => setCapturing(false))
  }

  return (
    <div role="group" aria-label="Component actions" className="flex flex-wrap items-center gap-2">
      <FormatSwitch value={format} onChange={onFormatChange} />
      <button
        type="button"
        disabled={!hydrated}
        onClick={() =>
          copyWithFeedback(codeForFormat(meta, sources, format), {
            message: COPIED_CODE[format],
            event: { name: 'copy_code', slug, format },
            onFailure: onCopyFailed,
          })
        }
        className={`${BUTTON} ${PRIMARY}`}
      >
        <CopyIcon />
        Copy code
      </button>
      <button
        type="button"
        disabled={!hydrated}
        onClick={() =>
          copyWithFeedback(buildBrief(meta, sources, format), {
            message: 'Copied AI brief',
            event: { name: 'copy_ai', slug, format },
            onFailure: onCopyFailed,
          })
        }
        className={`${BUTTON} ${SECONDARY}`}
      >
        <SparkleIcon />
        Copy for AI
      </button>
      <DownloadMenu
        disabled={!hydrated || capturing}
        transparent={transparent}
        onTransparentChange={setTransparent}
        onDownload={(viewport) => download(viewport, transparent)}
        buttonClassName={`${BUTTON} ${SECONDARY}`}
      >
        {capturing ? <Spinner /> : <DownloadIcon />}
        Download
        <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="-mr-1 size-3.5 opacity-60">
          <path d="m4 6 4 4 4-4" />
        </svg>
      </DownloadMenu>
      <button
        type="button"
        disabled={!hydrated || capturing}
        onClick={() => copyImageToClipboard(transparent)}
        className={`${BUTTON} ${SECONDARY}`}
      >
        {capturing ? <Spinner /> : <ImageIcon />}
        Copy image
      </button>
    </div>
  )
}

const ICON = { 'aria-hidden': true, viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round', className: 'size-4' } as const

function CopyIcon() {
  return (
    <svg {...ICON}>
      <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
      <path d="M10.5 5.5V4A1.5 1.5 0 0 0 9 2.5H4A1.5 1.5 0 0 0 2.5 4v5A1.5 1.5 0 0 0 4 10.5h1.5" />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg {...ICON}>
      <path d="M6.5 2.5c.5 2.6 1.4 3.5 4 4-2.6.5-3.5 1.4-4 4-.5-2.6-1.4-3.5-4-4 2.6-.5 3.5-1.4 4-4Z" />
      <path d="M12 10.5c.2 1.1.6 1.5 1.7 1.7-1.1.2-1.5.6-1.7 1.7-.2-1.1-.6-1.5-1.7-1.7 1.1-.2 1.5-.6 1.7-1.7Z" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg {...ICON}>
      <path d="M8 2.5v7.5M4.75 7 8 10.25 11.25 7M3 13h10" />
    </svg>
  )
}

function ImageIcon() {
  return (
    <svg {...ICON}>
      <rect x="2.5" y="3" width="11" height="10" rx="1.5" />
      <circle cx="6" cy="6.75" r="1" />
      <path d="m2.75 11.5 3-3 2.5 2.5 1.75-1.75 3.25 3.25" />
    </svg>
  )
}

function Spinner() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="size-4 animate-spin motion-reduce:animate-none">
      <circle cx="8" cy="8" r="5.5" className="opacity-25" />
      <path d="M13.5 8A5.5 5.5 0 0 0 8 2.5" />
    </svg>
  )
}
