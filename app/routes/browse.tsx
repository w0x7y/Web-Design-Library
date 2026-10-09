import { useRef } from 'react'
import { data, isRouteErrorResponse, type ShouldRevalidateFunctionArgs } from 'react-router'
import { ComponentCard } from '~/components/ComponentCard'
import { EmptyState } from '~/components/EmptyState'
import { NotFoundView } from '~/components/NotFoundView'
import { CategoryScroller, Sidebar } from '~/components/Sidebar'
import { TagFilter } from '~/components/TagFilter'
import { filterMetas, NO_FILTERS } from '~/lib/filters'
import { useFilters } from '~/lib/use-filters'
import { SITE } from '~/site'
import { allMetas } from '../../src/library/registry'
import { CATEGORY_LABELS, isCategoryId } from '../../src/library/taxonomy'
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
  return [
    { title: category ? `${CATEGORY_LABELS[category]} components — ${SITE.name}` : `${SITE.name} — ${SITE.tagline}` },
    { name: 'description', content: SITE.tagline },
  ]
}

const ALL = allMetas()

export default function Browse({ loaderData }: Route.ComponentProps) {
  const { category } = loaderData
  const { filters, setFilters } = useFilters()
  const headingRef = useRef<HTMLHeadingElement>(null)
  const inView = category ? ALL.filter((meta) => meta.category === category) : ALL
  const results = filterMetas(inView, filters)
  const filtered = filters.q !== '' || filters.tags.length > 0

  return (
    <div className="mx-auto flex w-full max-w-(--breakpoint-2xl) gap-10 px-4 sm:px-6 lg:px-8">
      <Sidebar active={category} />
      <main className="min-w-0 flex-1 pt-0 pb-24 lg:pt-10">
        <CategoryScroller active={category} />
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h1 ref={headingRef} tabIndex={-1} className="text-2xl font-semibold tracking-tight text-zinc-950 focus-visible:outline-hidden dark:text-white">
            {category ? CATEGORY_LABELS[category] : 'All components'}
          </h1>
          <p aria-live="polite" className="text-sm text-zinc-500 tabular-nums dark:text-zinc-400">
            {filtered ? `${results.length} of ${inView.length}` : inView.length}
            <span className="sr-only"> {inView.length === 1 ? 'component' : 'components'}</span>
          </p>
        </div>
        {!category && <p className="mt-2 max-w-prose text-pretty text-zinc-600 dark:text-zinc-400">{SITE.tagline}</p>}
        <div className="mt-6">
          <TagFilter />
        </div>
        <h2 className="sr-only">Components</h2>
        <div className="mt-8">
          {results.length > 0 ? (
            <ul role="list" className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((meta) => (
                <li key={meta.slug}>
                  <ComponentCard meta={meta} />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              filtered={filtered}
              onClear={() => {
                setFilters(NO_FILTERS)
                headingRef.current?.focus() // the button is about to disappear; keep keyboard users in place
              }}
            />
          )}
        </div>
      </main>
    </div>
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
