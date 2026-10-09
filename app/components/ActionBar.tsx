import { useState } from 'react'
import type { ComponentActions } from '~/lib/component-actions'
import { useHydrated } from '~/lib/use-hydrated'
import type { Format } from '../../src/library/types'
import { DownloadMenu } from './DownloadMenu'
import { FormatSwitch } from './FormatSwitch'

// Unavailable buttons are aria-disabled rather than disabled, so a focused button keeps focus while a
// capture runs; the actions themselves ignore a capture asked for while one is running.
const BUTTON =
  'inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg border px-3 text-[13px] font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus aria-disabled:cursor-default aria-disabled:opacity-60'
const PRIMARY =
  'border-zinc-900 bg-zinc-900 text-white not-aria-disabled:hover:bg-zinc-700 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 dark:not-aria-disabled:hover:bg-zinc-300'
const SECONDARY =
  'border-zinc-200 bg-white text-zinc-800 not-aria-disabled:hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:not-aria-disabled:hover:bg-zinc-900'

/**
 * Format switch, Copy code, Copy for AI, Download menu and Copy image. The two image actions show
 * as unavailable while a capture runs (`busy`); `onCopyRefused` lets the page reveal the code for a manual copy.
 */
export function ActionBar({
  actions,
  busy,
  format,
  onFormatChange,
  onCopyRefused,
}: {
  actions: ComponentActions
  busy: boolean
  format: Format
  onFormatChange(format: Format): void
  onCopyRefused(): void
}) {
  // Before hydration the buttons have no handlers yet, so they show as unavailable too.
  const hydrated = useHydrated()
  const [transparent, setTransparent] = useState(false)

  return (
    <div role="group" aria-label="Component actions" className="flex flex-wrap items-center gap-2">
      <FormatSwitch value={format} onChange={onFormatChange} />
      <button
        type="button"
        aria-disabled={!hydrated}
        onClick={() => void actions.copyCode(format, onCopyRefused)}
        className={`${BUTTON} ${PRIMARY}`}
      >
        <CopyIcon />
        Copy code
      </button>
      <button
        type="button"
        aria-disabled={!hydrated}
        onClick={() => void actions.copyBrief(format, onCopyRefused)}
        className={`${BUTTON} ${SECONDARY}`}
      >
        <SparkleIcon />
        Copy for AI
      </button>
      <DownloadMenu
        busy={!hydrated || busy}
        transparent={transparent}
        onTransparentChange={setTransparent}
        onDownload={(viewport) => void actions.download(viewport, transparent)}
        buttonClassName={`${BUTTON} ${SECONDARY}`}
      >
        {busy ? <Spinner /> : <DownloadIcon />}
        Download
        <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="-mr-1 size-3.5 opacity-60">
          <path d="m4 6 4 4 4-4" />
        </svg>
      </DownloadMenu>
      <button
        type="button"
        aria-disabled={!hydrated || busy}
        // Synchronous inside the click: Safari only accepts the clipboard write within it.
        onClick={() => void actions.copyImage(transparent)}
        className={`${BUTTON} ${SECONDARY}`}
      >
        {busy ? <Spinner /> : <ImageIcon />}
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
