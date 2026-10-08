import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { filtersSearch } from '~/lib/filters'
import { useFilters } from '~/lib/use-filters'
import { allMetas, categoryCounts } from '../../src/library/registry'
import { CATEGORY_LABELS, GROUPS, type CategoryId } from '../../src/library/taxonomy'

interface Entry {
  id: CategoryId
  label: string
  count: number
}

const COUNTS = categoryCounts()
const TOTAL = allMetas().length
// Groups → categories that have at least one component; empty ones stay out of the nav.
const NAV_GROUPS = GROUPS.map((group) => ({
  id: group.id,
  label: group.label,
  entries: group.categories.flatMap((id): Entry[] => {
    const count = COUNTS[id] ?? 0
    return count > 0 ? [{ id, label: CATEGORY_LABELS[id], count }] : []
  }),
})).filter((group) => group.entries.length > 0)

const plural = (count: number) => (count === 1 ? 'component' : 'components')

/** Category links carry the current ?q and ?tags along. */
function useLinkSearch() {
  return filtersSearch(useFilters().filters)
}

const FOCUS_RING =
  'focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100'

function SidebarLink({ to, label, count, current }: { to: string; label: string; count: number; current: boolean }) {
  return (
    <Link
      to={to}
      aria-current={current ? 'page' : undefined}
      className={`flex h-8 items-center justify-between gap-3 rounded-md px-3 text-sm transition-colors duration-150 ${FOCUS_RING} ${
        current
          ? 'bg-zinc-100 font-medium text-zinc-950 dark:bg-zinc-900 dark:text-white'
          : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900/60 dark:hover:text-white'
      }`}
    >
      <span className="truncate">{label}</span>
      <span className={`text-xs tabular-nums ${current ? 'text-zinc-600 dark:text-zinc-300' : 'text-zinc-500 dark:text-zinc-400'}`}>
        {count}
        <span className="sr-only"> {plural(count)}</span>
      </span>
    </Link>
  )
}

/** Desktop category navigation (lg and up). */
export function Sidebar({ active }: { active: CategoryId | null }) {
  const search = useLinkSearch()
  return (
    <nav aria-label="Categories" className="hidden w-60 shrink-0 lg:block">
      <div className="sticky top-14 -ml-3 max-h-[calc(100dvh-3.5rem)] overflow-y-auto pt-10 pb-12 [scrollbar-color:var(--color-zinc-300)_transparent] [scrollbar-width:thin] dark:[scrollbar-color:var(--color-zinc-700)_transparent]">
        <SidebarLink to={`/${search}`} label="All components" count={TOTAL} current={active === null} />
        {NAV_GROUPS.map((group) => (
          <div key={group.id} className="mt-6">
            <p id={`nav-group-${group.id}`} className="px-3 pb-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {group.label}
            </p>
            <ul role="list" aria-labelledby={`nav-group-${group.id}`} className="space-y-px">
              {group.entries.map((entry) => (
                <li key={entry.id}>
                  <SidebarLink to={`/browse/${entry.id}${search}`} label={entry.label} count={entry.count} current={entry.id === active} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  )
}

/** The same links below lg: one horizontal, scrollable row of tabs. */
export function CategoryScroller({ active }: { active: CategoryId | null }) {
  const search = useLinkSearch()
  const listRef = useRef<HTMLUListElement>(null)

  // Bring the current category into view, e.g. after landing on /browse/buttons.
  useEffect(() => {
    const list = listRef.current
    const current = list?.querySelector<HTMLElement>('[aria-current="page"]')
    if (!list || !current) return
    list.scrollLeft = current.offsetLeft - (list.clientWidth - current.offsetWidth) / 2
  }, [active])

  const entries = [
    { id: null, label: 'All', count: TOTAL },
    ...NAV_GROUPS.flatMap((group) => group.entries),
  ]
  return (
    <nav aria-label="Categories" className="-mx-4 mb-8 border-b border-zinc-200 sm:-mx-6 lg:hidden dark:border-zinc-800">
      <ul
        ref={listRef}
        role="list"
        className="relative flex gap-6 overflow-x-auto px-4 [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden"
      >
        {entries.map((entry) => {
          const current = entry.id === active
          return (
            <li key={entry.id ?? 'all'} className="shrink-0">
              <Link
                to={entry.id ? `/browse/${entry.id}${search}` : `/${search}`}
                aria-current={current ? 'page' : undefined}
                className={`-mb-px flex h-11 items-center gap-1.5 border-b-2 text-sm whitespace-nowrap transition-colors duration-150 ${FOCUS_RING} ${
                  current
                    ? 'border-zinc-900 font-medium text-zinc-950 dark:border-zinc-100 dark:text-white'
                    : 'border-transparent text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                {entry.label}
                <span className="text-xs text-zinc-500 tabular-nums dark:text-zinc-400">
                  {entry.count}
                  <span className="sr-only"> {plural(entry.count)}</span>
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
