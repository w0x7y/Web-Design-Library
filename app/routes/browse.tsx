import { useEffect, useRef, useState, type ReactNode } from 'react'
import { data, isRouteErrorResponse, type ShouldRevalidateFunctionArgs } from 'react-router'
import { ComponentCard } from '~/components/ComponentCard'
import { EmptyState } from '~/components/EmptyState'
import { Hero } from '~/components/Hero'
import { NotFoundView } from '~/components/NotFoundView'
import { CategoryScroller, Sidebar } from '~/components/Sidebar'
import { TagFilter } from '~/components/TagFilter'
import { browseResults, NO_FILTERS, parseFilters, type Filters } from '~/lib/filters'
import { pageMeta } from '~/lib/page-meta'
import { useFilters } from '~/lib/use-filters'
import { useHydrated } from '~/lib/use-hydrated'
import { SITE } from '~/site'
import { allMetas } from '../../src/library/registry'
import { CATEGORY_LABELS, isCategoryId } from '../../src/library/taxonomy'
import { browsePath } from '../../src/library/urls'
import type { Route } from './+types/browse'

// Serves "/" (index) and "/browse/:category" (id browse-category).

export function loader({ params }: Route.LoaderArgs) {
  const { category } = params
  if (category === undefined) return { category: null }
  if (!isCategoryId(category)) throw data(null, { status: 404 })
  return { category }
}

// ?q and ?tags are applied client-side; the loader only depends on the path.
export function shouldRevalidate({ currentUrl, nextUrl, defaultShouldRevalidate }: ShouldRevalidateFunctionArgs) {
  return currentUrl.pathname === nextUrl.pathname ? false : defaultShouldRevalidate
}

const isUnknownCategory = (category: string | undefined) => category !== undefined && !isCategoryId(category)

export const meta: Route.MetaFunction = ({ loaderData, error, params }) => {
  if (error) return [{ title: `${isUnknownCategory(params.category) ? 'Category not found' : 'Something went wrong'} — ${SITE.name}` }]
  const category = loaderData?.category
  return pageMeta({
    title: category ? `${CATEGORY_LABELS[category]} components — ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`,
    description: category ? `Browse ${CATEGORY_LABELS[category]} components to copy as React + Tailwind, HTML + CSS, AI briefs, or PNG references.` : SITE.tagline,
    path: browsePath(category ?? null),
  })
}

const ALL = allMetas()

export default function Browse({ loaderData }: Route.ComponentProps) {
  const { category } = loaderData
  const { filters, setFilters } = useFilters()
  const hydrated = useHydrated()
  // Tag links skip the intro. Applying tags while already browsing keeps the chips stationary.
  // During hydration filters are empty on both sides, so this browser-only initial choice cannot change the markup.
  const [keepIntroWithTags, setKeepIntroWithTags] = useState(() =>
    typeof window === 'undefined' || parseFilters(new URLSearchParams(window.location.search)).tags.length === 0,
  )
  const headingRef = useRef<HTMLHeadingElement>(null)
  const { inView, results, filtered } = browseResults(ALL, category, filters)

  // Filtered links lead with their results. The head script hides the static intro until React knows the filters.
  const showHero = !category && filters.q === '' && (filters.tags.length === 0 || keepIntroWithTags)
  // The hero holds the home page's h1; without it (a category, or a search) this heading is the h1.
  const Heading = showHero ? 'h2' : 'h1'

  useEffect(() => {
    if (!hydrated) return
    document.documentElement.removeAttribute('data-browse-filtered')
  }, [hydrated])

  function applyFilters(next: Filters) {
    if (!filtered || (next.q === '' && next.tags.length === 0)) setKeepIntroWithTags(true)
    setFilters(next)
  }

  // Clear filters removes the button that had focus, so focus moves to the heading. Clearing a search
  // brings the hero back and turns this <h1> into an <h2> (a new element), so focus waits until the
  // cleared filters have rendered.
  const focusHeadingOnClear = useRef(false)
  useEffect(() => {
    if (!focusHeadingOnClear.current || filtered) return
    focusHeadingOnClear.current = false
    headingRef.current?.focus()
  })

  return (
    // One <main> holds the hero (and its h1) and the grid, so jumping to the main landmark lands on the page's heading.
    <main>
      {showHero && <Hero count={ALL.length} />}
      <div className="mx-auto flex w-full max-w-(--breakpoint-2xl) gap-10 px-4 sm:px-6 lg:px-8">
        <Sidebar active={category} />
        <div className="min-w-0 flex-1 pt-0 pb-24 lg:pt-10">
          <CategoryScroller active={category} />
          {/* The hero's "Browse components" lands here (the page's scroll padding clears the sticky header). */}
          <div id="components" className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <Heading ref={headingRef} tabIndex={-1} className="text-2xl font-semibold tracking-tight text-zinc-950 focus-visible:outline-hidden dark:text-white">
              {category ? CATEGORY_LABELS[category] : 'All components'}
            </Heading>
            <p aria-live="polite" className="text-sm text-zinc-500 tabular-nums dark:text-zinc-400">
              {filtered ? `${results.length} of ${inView.length}` : inView.length}
              <span className="sr-only"> {inView.length === 1 ? 'component' : 'components'}</span>
            </p>
          </div>
          <div className="mt-5">
            <TagFilter filters={filters} onChange={applyFilters} />
          </div>
          {!showHero && <h2 className="sr-only">Components</h2>}
          <div className="mt-8">
            {results.length > 0 ? (
              <ul role="list" className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((meta, index) => (
                  <GridItem key={meta.slug} index={index}>
                    <ComponentCard meta={meta} />
                  </GridItem>
                ))}
              </ul>
            ) : (
              <EmptyState
                filtered={filtered}
                onClear={() => {
                  focusHeadingOnClear.current = true
                  applyFilters(NO_FILTERS)
                }}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

/** How many cards, from the top of the grid, rise in one after another: three rows at the widest. */
const RISING = 9
const STAGGER_MS = 30

/**
 * A grid cell. A card that arrives near the top of the grid after the page has loaded (with a filter
 * or category change) rises into place, each a beat after the one before. The pre-rendered grid, a
 * card that stays put as the filters change, and the cards further down (off screen, and up to
 * hundreds at once) appear as they are.
 */
function GridItem({ index, children }: { index: number; children: ReactNode }) {
  const hydrated = useHydrated()
  // Fixed at mount, so a card that later moves up or down the grid doesn't rise again.
  const [delay] = useState(hydrated && index < RISING ? index * STAGGER_MS : null)
  if (delay === null) return <li>{children}</li>
  return (
    <li className="animate-shell-rise motion-reduce:animate-shell-fade" style={{ animationDelay: `${delay}ms` }}>
      {children}
    </li>
  )
}

export function ErrorBoundary({ error, params }: Route.ErrorBoundaryProps) {
  // An unknown category is a 404 however it surfaced: a missing .data file, or a
  // host answering it with the HTML fallback instead.
  if (isUnknownCategory(params.category) || (isRouteErrorResponse(error) && error.status === 404)) {
    return <NotFoundView title="Category not found" />
  }
  throw error
}
