import { useState } from 'react'
import type { ComponentActions, CopyResult } from '~/lib/component-actions'
import { useFormat } from '~/lib/format-preference'
import { useHydrated } from '~/lib/use-hydrated'
import { DownloadMenu } from './DownloadMenu'
import { CopyIcon, DownloadIcon, ImageIcon, SparkleIcon } from './icons'
import { button } from './ui'
import { FormatSwitch } from './FormatSwitch'

// Unavailable buttons are aria-disabled rather than disabled, so a focused button keeps focus while a
// capture runs; the actions themselves ignore a capture asked for while one is running.
const PRIMARY = button({ variant: 'primary', size: 'sm' })
const SECONDARY = button({ variant: 'secondary', size: 'sm' })
// Below sm the secondary actions share a row in equal columns: they fill their column and drop the
// leading icon (a running capture's spinner still shows) so three labels fit on a 390px screen.
const SECONDARY_FIT = 'w-full max-sm:px-2 max-sm:[&>svg:first-child:not(.animate-spin)]:hidden sm:w-auto'

/**
 * Format switch, Copy code, Copy for AI, Download menu and Copy image, in the picked format. The two
 * image actions show as unavailable while a capture runs (`busy`); `onCopyRefused` lets the page
 * reveal the code for a manual copy.
 */
export function ActionBar({
  actions,
  busy,
  onCopyRefused,
}: {
  actions: ComponentActions
  busy: boolean
  onCopyRefused(): void
}) {
  const format = useFormat()
  const copy = (run: () => Promise<CopyResult>) =>
    void run().then((result) => {
      if (result === 'refused') onCopyRefused()
    })
  // Before hydration the buttons have no handlers yet, so they show as unavailable too.
  const hydrated = useHydrated()
  const [transparent, setTransparent] = useState(false)

  return (
    // Below sm: the format switch and Copy code on one row, the other actions in a grid under them. From sm, one wrapping row.
    <div role="group" aria-label="Component actions" className="grid grid-cols-[auto_1fr] gap-2 sm:flex sm:flex-wrap sm:items-center">
      <FormatSwitch />
      <button
        type="button"
        aria-disabled={!hydrated}
        onClick={() => copy(() => actions.copyCode(format))}
        className={PRIMARY}
      >
        <CopyIcon />
        Copy code
      </button>
      <div className="col-span-2 grid grid-cols-[repeat(auto-fit,minmax(6.5rem,1fr))] gap-2 sm:contents">
        <button
          type="button"
          aria-disabled={!hydrated}
          onClick={() => copy(() => actions.copyBrief(format))}
          className={`${SECONDARY} ${SECONDARY_FIT}`}
        >
          <SparkleIcon />
          Copy for AI
        </button>
        <DownloadMenu
          busy={!hydrated || busy}
          transparent={transparent}
          onTransparentChange={setTransparent}
          onDownload={(viewport) => void actions.download(viewport, transparent)}
          buttonClassName={`${SECONDARY} ${SECONDARY_FIT}`}
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
          className={`${SECONDARY} ${SECONDARY_FIT}`}
        >
          {busy ? <Spinner /> : <ImageIcon />}
          Copy image
        </button>
      </div>
    </div>
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
