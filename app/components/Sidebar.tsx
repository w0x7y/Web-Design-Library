import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { filtersSearch } from '~/lib/filters'
import { useFilters } from '~/lib/use-filters'
import { groupMetas } from '../../src/library/catalog'
import { allMetas } from '../../src/library/registry'
import { groupOf, type CategoryId } from '../../src/library/taxonomy'
import { browsePath } from '../../src/library/urls'

const ALL = allMetas()
const TOTAL = ALL.length
// Groups → categories that have at least one component; empty ones stay out of the nav.
const NAV_GROUPS = groupMetas(ALL).map((group) => ({
  id: group.id,
  label: group.label,
  entries: group.categories.map(({ id, label, metas }) => ({ id, label, count: metas.length })),
  count: group.categories.reduce((total, category) => total + category.metas.length, 0),
}))

type GroupId = (typeof NAV_GROUPS)[number]['id']

const plural = (count: number) => (count === 1 ? 'component' : 'components')

/** Category links carry the current ?q and ?tags along. */
function useLinkSearch() {
  return filtersSearch(useFilters().filters)
}

const FOCUS_RING =
  'focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus'

/** `hideOne`: a row holding a single component shows no count (screen readers still hear it), so a column of 1s doesn't crowd the list. */
function SidebarLink({ to, label, count, current, hideOne = false }: { to: string; label: string; count: number; current: boolean; hideOne?: boolean }) {
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
        {hideOne && count === 1 ? <span className="sr-only">1 component</span> : (
          <>
            {count}
            <span className="sr-only"> {plural(count)}</span>
          </>
        )}
      </span>
    </Link>
  )
}

/** The group a page opens with: the current category's, or the first group on "All components". */
const openingGroup = (active: CategoryId | null): GroupId => (active ? groupOf(active).id : NAV_GROUPS[0].id)

/**
 * Desktop category navigation (lg and up): a collapsible block per group, headed by its total. The
 * current category's group starts open (the first group on "All components"). Moving between
 * categories opens the new one's group and leaves the others as the reader set them. "All components"
 * and the category pages are separate routes, so crossing between them starts afresh. Native
 * <details>, so the pre-rendered page opens and closes before hydration too.
 */
export function Sidebar({ active }: { active: CategoryId | null }) {
  const search = useLinkSearch()
  const [open, setOpen] = useState<ReadonlySet<GroupId>>(() => new Set([openingGroup(active)]))
  // Navigating to another category opens its group: adjust state during render, not in an effect.
  const [seenActive, setSeenActive] = useState(active)
  if (active !== seenActive) {
    setSeenActive(active)
    if (!open.has(openingGroup(active))) setOpen(new Set(open).add(openingGroup(active)))
  }

  function toggle(id: GroupId, isOpen: boolean) {
    if (isOpen === open.has(id)) return // the toggle event also fires when React sets `open` itself
    const next = new Set(open)
    if (isOpen) next.add(id)
    else next.delete(id)
    setOpen(next)
  }

  return (
    <nav aria-label="Categories" className="hidden w-60 shrink-0 lg:block">
      <div className="sticky top-14 -ml-3 max-h-[calc(100dvh-3.5rem)] overflow-y-auto pt-10 pb-12 [scrollbar-color:var(--color-zinc-300)_transparent] [scrollbar-width:thin] dark:[scrollbar-color:var(--color-zinc-700)_transparent]">
        <SidebarLink to={browsePath(null, search)} label="All components" count={TOTAL} current={active === null} />
        <div className="mt-4 space-y-0.5">
          {NAV_GROUPS.map((group) => (
            <details
              key={group.id}
              open={open.has(group.id)}
              onToggle={(event) => toggle(group.id, event.currentTarget.open)}
              // data-nav-group: app.css slides the group open and shut.
              data-nav-group=""
              className="group"
            >
              <summary
                className={`flex h-8 cursor-pointer list-none items-center justify-between gap-3 rounded-md px-3 text-sm font-medium text-zinc-900 transition-colors duration-150 select-none hover:bg-zinc-50 dark:text-zinc-100 dark:hover:bg-zinc-900/60 [&::-webkit-details-marker]:hidden ${FOCUS_RING}`}
              >
                <span id={`nav-group-${group.id}`} className="flex items-center gap-1.5">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="-ml-1 size-3.5 text-zinc-400 transition-transform duration-200 ease-shell-out group-open:rotate-90 motion-reduce:transition-none dark:text-zinc-500"
                  >
                    <path d="m6 3.5 4.5 4.5L6 12.5" />
                  </svg>
                  {group.label}
                </span>
                <span className="text-xs font-normal text-zinc-500 tabular-nums dark:text-zinc-400">
                  {group.count}
                  <span className="sr-only"> {plural(group.count)}</span>
                </span>
              </summary>
              <ul
                role="list"
                aria-labelledby={`nav-group-${group.id}`}
                // The rail runs under the chevron; the rows keep their text in line with the group label above.
                className="mt-0.5 mb-2 ml-[0.9375rem] space-y-px border-l border-zinc-200 pl-3 dark:border-zinc-800"
              >
                {group.entries.map((entry) => (
                  <li key={entry.id}>
                    <SidebarLink to={browsePath(entry.id, search)} label={entry.label} count={entry.count} current={entry.id === active} hideOne />
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
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
                to={browsePath(entry.id, search)}
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
