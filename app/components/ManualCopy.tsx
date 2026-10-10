import { useEffect, useId, useRef } from 'react'
import type { CopyRefusal } from '~/lib/component-actions'
import { button } from './ui'

/** One manual-copy field for the exact text the browser refused to write. */
export function ManualCopy({ payload, onDismiss }: { payload: CopyRefusal; onDismiss(): void }) {
  const id = useId()
  const field = useRef<HTMLTextAreaElement>(null)
  const previousFocus = useRef<HTMLElement | null>(null)
  useEffect(() => {
    if (!previousFocus.current && document.activeElement instanceof HTMLElement) {
      previousFocus.current = document.activeElement
    }
    field.current?.focus()
    field.current?.select()
  }, [payload])

  return (
    <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
      <label htmlFor={id} className="text-sm font-medium text-zinc-950 dark:text-zinc-100">
        Copy manually: {payload.label}
      </label>
      <p id={`${id}-hint`} className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        Your browser blocked clipboard access. Press Ctrl/⌘+C to copy the selected text.
      </p>
      <textarea
        ref={field}
        id={id}
        aria-describedby={`${id}-hint`}
        readOnly
        value={payload.text}
        rows={6}
        spellCheck={false}
        className="mt-3 block w-full resize-y rounded-lg border border-zinc-200 bg-white p-3 font-shell-mono text-[13px]/[1.7] text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
      />
      <button
        type="button"
        aria-label="Dismiss manual copy"
        onClick={() => {
          previousFocus.current?.focus()
          onDismiss()
        }}
        className={`mt-3 ${button({ variant: 'secondary', size: 'sm' })}`}
      >
        Dismiss
      </button>
    </div>
  )
}
