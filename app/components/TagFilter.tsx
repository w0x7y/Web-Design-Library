import { useId } from 'react'
import type { Filters } from '~/lib/filters'
import { useHydrated } from '~/lib/use-hydrated'
import { LAYOUT_TAGS, TAG_GROUPS, type LayoutTag } from '../../src/library/taxonomy'
import { chip } from './ui'

/** One toggle per layout tag, clustered by TAG_GROUPS; the selection lives in ?tags. A component must carry every selected tag. */
export function TagFilter({ filters, onChange }: { filters: Filters; onChange(next: Filters): void }) {
  const id = useId()
  // A click before hydration would be lost, so the chips open up once React is live.
  const hydrated = useHydrated()

  function toggle(tag: LayoutTag) {
    const selected = new Set(filters.tags)
    if (selected.has(tag)) selected.delete(tag)
    else selected.add(tag)
    onChange({ ...filters, tags: LAYOUT_TAGS.filter((t) => selected.has(t)) })
  }

  return (
    <div
      role="group"
      aria-label="Filter by layout"
      className="space-y-3"
    >
      {TAG_GROUPS.map((group) => (
        <div key={group.label} role="group" aria-labelledby={`${id}-${group.label}`} className="flex flex-col gap-1.5 sm:flex-row sm:gap-3">
          <p id={`${id}-${group.label}`} className="text-xs font-medium text-zinc-500 sm:flex sm:h-7 sm:w-24 sm:shrink-0 sm:items-center dark:text-zinc-400">
            {group.label}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {group.tags.map((tag) => {
              const pressed = filters.tags.includes(tag)
              return (
                <button
                  key={tag}
                  type="button"
                  aria-pressed={pressed}
                  disabled={!hydrated}
                  onClick={() => toggle(tag)}
                  className={chip(pressed ? 'on' : 'off')}
                >
                  {tag}
                </button>
              )
            })}
          </div>
        </div>
      ))}
      {filters.tags.length > 0 && (
        <button
          type="button"
          onClick={() => onChange({ ...filters, tags: [] })}
          aria-label="Clear layout filters"
          className={chip('bare')}
        >
          <svg aria-hidden="true" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="size-3">
            <path d="m3 3 6 6M9 3 3 9" />
          </svg>
          Clear
        </button>
      )}
    </div>
  )
}
