import { useFilters } from '~/lib/use-filters'
import { useHydrated } from '~/lib/use-hydrated'
import { STYLE_TAGS, type StyleTag } from '../../src/library/taxonomy'

const CHIP =
  'inline-flex h-7 shrink-0 items-center rounded-full border px-3 text-[13px] whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus'

/** One toggle per style tag; the selection lives in ?tags. A component must carry every selected tag. */
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
      className="-mx-4 flex gap-1.5 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
    >
      {STYLE_TAGS.map((tag) => {
        const pressed = filters.tags.includes(tag)
        return (
          <button
            key={tag}
            type="button"
            aria-pressed={pressed}
            disabled={!hydrated}
            onClick={() => toggle(tag)}
            className={`${CHIP} ${
              pressed
                ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950'
                : 'border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-white'
            }`}
          >
            {tag}
          </button>
        )
      })}
      {filters.tags.length > 0 && (
        <button
          type="button"
          onClick={() => setFilters({ ...filters, tags: [] })}
          aria-label="Clear style filters"
          className={`${CHIP} gap-1 border-transparent text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white`}
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
