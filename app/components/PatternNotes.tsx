import { useId } from 'react'
import type { ComponentMeta } from '../../src/library/types'

const NOTES = [
  { field: 'usage', label: 'When to use' },
  { field: 'hierarchy', label: 'Hierarchy' },
  { field: 'responsive', label: 'Responsive' },
  { field: 'layout', label: 'Layout' },
  { field: 'states', label: 'States' },
] as const

/** The brief and desktop diagram are part of the prerendered page, in either code format. */
export function PatternNotes({ brief, wireframe }: Pick<ComponentMeta, 'brief' | 'wireframe'>) {
  const id = useId()
  return (
    <section aria-labelledby={`${id}-notes`} className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
      <h2 id={`${id}-notes`} className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-white">Pattern notes</h2>
      <div className="mt-6 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
        <dl className="min-w-0 space-y-6">
          {NOTES.map(({ field, label }) => (
            <div key={field}>
              <dt className="text-sm font-medium text-zinc-950 dark:text-zinc-100">{label}</dt>
              <dd className="mt-1.5 text-sm/relaxed text-pretty text-zinc-600 dark:text-zinc-400">{brief[field]}</dd>
            </div>
          ))}
        </dl>
        <figure className="min-w-0">
          <figcaption id={`${id}-wireframe`} className="text-sm font-medium text-zinc-950 dark:text-zinc-100">Desktop wireframe</figcaption>
          <pre
            role="region"
            aria-labelledby={`${id}-wireframe`}
            tabIndex={0}
            className="mt-3 overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-shell-mono text-xs/6 text-zinc-700 [scrollbar-width:thin] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300"
          >
            <code className="font-shell-mono">{wireframe}</code>
          </pre>
        </figure>
      </div>
    </section>
  )
}
