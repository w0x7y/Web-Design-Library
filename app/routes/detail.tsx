import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { flushSync } from 'react-dom'
import { data, isRouteErrorResponse, Link } from 'react-router'
import { ActionBar } from '~/components/ActionBar'
import { CodeView, type CodeViewHandle } from '~/components/CodeView'
import { ComponentCard } from '~/components/ComponentCard'
import { NotFoundView } from '~/components/NotFoundView'
import { PreviewFrame } from '~/components/PreviewFrame'
import { chip, TEXT_LINK } from '~/components/ui'
import { ViewportToggle } from '~/components/ViewportToggle'
import { useComponentActions } from '~/lib/component-actions'
import { filtersSearch } from '~/lib/filters'
import { useFormat } from '~/lib/format-preference'
import { highlight } from '~/lib/highlight.server'
import { relatedMetas } from '~/lib/related'
import { useHydrated } from '~/lib/use-hydrated'
import { useMediaQuery } from '~/lib/use-media-query'
import type { ViewportId } from '~/lib/viewports'
import { SITE } from '~/site'
import { allMetas, metaBySlug } from '../../src/library/registry'
import { sourcesFor } from '../../src/library/sources.server'
import { CATEGORY_LABELS, groupOf } from '../../src/library/taxonomy'
import { absoluteUrl, browsePath, componentPath } from '../../src/library/urls'
import type { Route } from './+types/detail'

// "/c/:slug". The loader runs at build time only (every slug is pre-rendered),
// so raw sources and Shiki stay out of the client bundle.

export async function loader({ params }: Route.LoaderArgs) {
  const meta = metaBySlug(params.slug)
  const sources = meta && sourcesFor(meta.slug)
  if (!meta || !sources) throw data(null, { status: 404 })
  const [tsx, html, css] = await Promise.all([
    highlight(sources.tsx, 'tsx'),
    highlight(sources.html, 'html'),
    highlight(sources.css, 'css'),
  ])
  return { meta, sources, highlighted: { tsx, html, css } }
}

const isUnknownSlug = (slug: string | undefined) => slug === undefined || metaBySlug(slug) === undefined

export const meta: Route.MetaFunction = ({ loaderData, error, params }) => {
  if (error || !loaderData) {
    return [{ title: `${isUnknownSlug(params.slug) ? 'Component not found' : 'Something went wrong'} — ${SITE.name}` }]
  }
  const { name, slug, description } = loaderData.meta
  const title = `${name} — ${SITE.name}`
  const url = absoluteUrl(componentPath(slug))
  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: url },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
  ]
}

const ALL = allMetas()

const TABS = [
  { id: 'preview', label: 'Preview' },
  { id: 'code', label: 'Code' },
] as const

type TabId = (typeof TABS)[number]['id']

const FOCUS_RING =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus'

/** Below Tailwind's sm breakpoint. */
const SMALL_SCREEN = '(width < 40rem)'

export default function Detail({ loaderData }: Route.ComponentProps) {
  // Keyed by slug: opening another component (e.g. a related card) starts on its Preview, like a full page load.
  return <ComponentDetail key={loaderData.meta.slug} {...loaderData} />
}

function ComponentDetail({ meta: component, sources, highlighted }: Route.ComponentProps['loaderData']) {
  const format = useFormat()
  const [tab, setTab] = useState<TabId>('preview')
  // Until a width is picked, the preview shows Desktop, or Mobile on a phone, where a 1440px layout shrunk to fit can't be read.
  const [chosenViewport, setViewport] = useState<ViewportId | null>(null)
  const smallScreen = useMediaQuery(SMALL_SCREEN)
  const viewport = chosenViewport ?? (smallScreen ? 'mobile' : 'desktop')
  const id = useId()
  const codeView = useRef<CodeViewHandle>(null)
  // Unmounting (opening another component remounts this) aborts a running capture and silences its toasts.
  const { actions, busy } = useComponentActions(component, sources)
  const related = relatedMetas(component, ALL)
  const categoryLabel = CATEGORY_LABELS[component.category]

  // After a refused clipboard write: show the Code tab and select a file (the first, or the one just
  // copied), so Ctrl/⌘+C still works.
  function revealCode(fileName?: string) {
    flushSync(() => setTab('code')) // the panel is hidden until the tab switches, and a hidden node can't be selected
    codeView.current?.select(fileName)
  }

  return (
    <main className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 pt-8 pb-24 sm:px-6 lg:px-8 lg:pt-10">
      {/* From xl the actions sit beside the title block, level with the tags, instead of on a row of their own. */}
      <div className="xl:flex xl:items-end xl:justify-between xl:gap-10">
        <div className="min-w-0 xl:flex-1">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
              <li>{groupOf(component.category).label}</li>
              <li className="flex items-center gap-1.5">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 text-zinc-300 dark:text-zinc-600">
                  <path d="m6 3.5 4.5 4.5L6 12.5" />
                </svg>
                <Link
                  to={browsePath(component.category)}
                  className={`-mx-0.5 rounded-sm px-0.5 text-zinc-600 underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:text-zinc-950 hover:decoration-zinc-300 dark:text-zinc-300 dark:hover:text-white dark:hover:decoration-zinc-600 ${FOCUS_RING}`}
                >
                  {categoryLabel}
                </Link>
              </li>
            </ol>
          </nav>

          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-3xl dark:text-white">
            {component.name}
          </h1>
          <p className="mt-2.5 max-w-2xl text-pretty text-zinc-600 dark:text-zinc-400">{component.description}</p>
          <ul role="list" aria-label="Style tags" className="mt-4 flex flex-wrap gap-1.5">
            {component.tags.map((tag) => (
              <li key={tag}>
                <Link
                  to={browsePath(null, filtersSearch({ q: '', tags: [tag] }))}
                  className={chip()}
                >
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 xl:mt-0 xl:shrink-0">
          <ActionBar actions={actions} busy={busy} onCopyRefused={() => revealCode()} />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center">
        {/* On sm+ the tabs and the viewport toggle share one hairline; below sm the toggle wraps under it. */}
        <DetailTabs id={id} active={tab} onSelect={setTab} />
        {tab === 'preview' && (
          <div className="mt-3 flex w-full items-center gap-2 sm:mt-0 sm:h-11 sm:w-auto sm:border-b sm:border-zinc-200 sm:pl-4 dark:sm:border-zinc-800">
            <ViewportToggle value={viewport} onChange={setViewport} />
          </div>
        )}
      </div>

      <div role="tabpanel" id={`${id}-preview`} aria-labelledby={`${id}-preview-tab`} hidden={tab !== 'preview'} className="mt-4">
        <PreviewFrame slug={component.slug} name={component.name} kind={component.preview.kind} viewport={viewport} />
      </div>
      <div role="tabpanel" id={`${id}-code`} aria-labelledby={`${id}-code-tab`} hidden={tab !== 'code'} className="mt-4">
        <CodeView
          ref={codeView}
          highlighted={highlighted}
          sources={sources}
          onCopyFile={(file) =>
            void actions.copyFile(format, file).then((result) => {
              if (result === 'refused') revealCode(file.name)
            })
          }
        />
      </div>

      {related.length > 0 && (
        <section aria-labelledby={`${id}-related`} className="mt-20">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id={`${id}-related`} className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-white">
              More in {categoryLabel}
            </h2>
            <Link
              to={browsePath(component.category)}
              className={TEXT_LINK}
            >
              View all<span className="sr-only"> {categoryLabel} components</span>
            </Link>
          </div>
          <ul role="list" className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
            {related.map((meta) => (
              <li key={meta.slug}>
                <ComponentCard meta={meta} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  )
}

/** Preview | Code. Arrow keys, Home and End move between tabs; selection follows focus. */
function DetailTabs({ id, active, onSelect }: { id: string; active: TabId; onSelect(tab: TabId): void }) {
  const hydrated = useHydrated()
  const listRef = useRef<HTMLDivElement>(null)

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.altKey || event.ctrlKey || event.metaKey) return // chords belong to the browser and the OS (Alt+← is Back)
    const index = TABS.findIndex((tab) => tab.id === active)
    const next = {
      ArrowRight: (index + 1) % TABS.length,
      ArrowLeft: (index - 1 + TABS.length) % TABS.length,
      Home: 0,
      End: TABS.length - 1,
    }[event.key]
    if (next === undefined) return
    event.preventDefault()
    onSelect(TABS[next].id)
    listRef.current?.querySelectorAll<HTMLElement>('[role="tab"]')[next]?.focus()
  }

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label="View"
      onKeyDown={onKeyDown}
      className="flex h-11 flex-1 basis-full gap-6 border-b border-zinc-200 sm:basis-auto dark:border-zinc-800"
    >
      {TABS.map((tab) => {
        const selected = tab.id === active
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`${id}-${tab.id}-tab`}
            aria-selected={selected}
            aria-controls={`${id}-${tab.id}`}
            tabIndex={selected ? 0 : -1}
            // Clicks before hydration would be lost; the tabs open up once React is live.
            disabled={!hydrated}
            onClick={() => onSelect(tab.id)}
            className={`group -mb-px border-b-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-hidden ${
              selected
                ? 'border-zinc-900 text-zinc-950 dark:border-zinc-100 dark:text-white'
                : 'border-transparent text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
            }`}
          >
            <span className="-mx-1.5 rounded-md px-1.5 py-1 group-focus-visible:outline-2 group-focus-visible:outline-focus">
              {tab.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export function ErrorBoundary({ error, params }: Route.ErrorBoundaryProps) {
  // An unknown slug is a 404 however it surfaced: a missing .data file, or a
  // host answering it with the HTML fallback instead.
  if (isUnknownSlug(params.slug) || (isRouteErrorResponse(error) && error.status === 404)) {
    return <NotFoundView title="Component not found" />
  }
  throw error
}
