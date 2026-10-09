import { useFilters } from '~/lib/use-filters'
import { useHydrated } from '~/lib/use-hydrated'
import { STYLE_TAGS, TAG_GROUPS, type StyleTag } from '../../src/library/taxonomy'
import { chip } from './ui'

/** One toggle per style tag, clustered by TAG_GROUPS; the selection lives in ?tags. A component must carry every selected tag. */
export function TagFilter() {
  const { filters, setFilters } = useFilters()
  // A click before hydration would be lost, so the chips open up once React is live.
  const hydrated = useHydrated()

  function toggle(tag: StyleTag) {
    const selected = new Set(filters.tags)
    if (selected.has(tag)) selected.delete(tag)
    else selected.add(tag)
    setFilters({ ...filters, tags: STYLE_TAGS.filter((t) => selected.has(t)) })
  }

  return (
    <div
      role="group"
      aria-label="Filter by style"
      className="-mx-4 -my-1 flex gap-1.5 overflow-x-auto px-4 py-1 [scrollbar-width:none] sm:mx-0 sm:my-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:py-0 [&::-webkit-scrollbar]:hidden"
    >
      {TAG_GROUPS.map((group, index) => (
        // display: contents keeps every chip a flex item of the row, so the chips wrap as one list.
        <div key={group.label} role="group" aria-label={group.label} className="contents">
          {index > 0 && <span aria-hidden="true" className="mx-1.5 h-4 w-px shrink-0 self-center bg-zinc-200 dark:bg-zinc-800" />}
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
      ))}
      {filters.tags.length > 0 && (
        <button
          type="button"
          onClick={() => setFilters({ ...filters, tags: [] })}
          aria-label="Clear style filters"
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
