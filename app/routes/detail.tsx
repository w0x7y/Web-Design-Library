import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { flushSync } from 'react-dom'
import { data, isRouteErrorResponse, Link } from 'react-router'
import { ActionBar } from '~/components/ActionBar'
import { CodeView } from '~/components/CodeView'
import { ComponentCard } from '~/components/ComponentCard'
import { NotFoundView } from '~/components/NotFoundView'
import { PreviewFrame } from '~/components/PreviewFrame'
import { ViewportToggle } from '~/components/ViewportToggle'
import { copyWithFeedback } from '~/lib/copy-feedback'
import { filtersSearch } from '~/lib/filters'
import { useFormatPreference } from '~/lib/format-preference'
import { highlight } from '~/lib/highlight.server'
import { relatedMetas } from '~/lib/related'
import { useHydrated } from '~/lib/use-hydrated'
import type { ViewportId } from '~/lib/viewports'
import { SITE } from '~/site'
import { allMetas, metaBySlug } from '../../src/library/registry'
import { sourcesFor } from '../../src/library/sources.server'
import { CATEGORY_LABELS, groupOf } from '../../src/library/taxonomy'
import type { Format } from '../../src/library/types'
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
  const url = `${SITE.url}/c/${slug}`
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
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100'

export default function Detail({ loaderData }: Route.ComponentProps) {
  // The format is a site-wide preference, so it lives above the key and survives moving between components.
  const [format, setFormat] = useFormatPreference()
  // Keyed by slug: opening another component (e.g. a related card) starts on its Preview at Desktop, like a full page load.
  return <ComponentDetail key={loaderData.meta.slug} {...loaderData} format={format} onFormatChange={setFormat} />
}

function ComponentDetail({
  meta: component,
  sources,
  highlighted,
  format,
  onFormatChange,
}: Route.ComponentProps['loaderData'] & { format: Format; onFormatChange(format: Format): void }) {
  const [tab, setTab] = useState<TabId>('preview')
  const [viewport, setViewport] = useState<ViewportId>('desktop')
  const id = useId()
  const codeRef = useRef<HTMLDivElement>(null)
  const related = relatedMetas(component, ALL)
  const categoryLabel = CATEGORY_LABELS[component.category]

  // After a refused clipboard write: show the Code tab and select a file (the first, or the one just
  // copied), so Ctrl/⌘+C still works.
  function revealCode(fileName?: string) {
    flushSync(() => setTab('code')) // the panel is hidden until the tab switches, and a hidden node can't be selected
    const pre = codeRef.current?.querySelector(fileName ? `[data-code-file="${fileName}"] pre` : '[data-code-file] pre')
    const selection = getSelection()
    if (!pre || !selection) return
    const range = document.createRange()
    range.selectNodeContents(pre)
    selection.removeAllRanges()
    selection.addRange(range)
  }

  function copyFile({ name, code }: { name: string; code: string }) {
    void copyWithFeedback(code, {
      // Component.tsx is the whole React code; a single HTML or CSS file is not "HTML + CSS", so it is named.
      message: format === 'react' ? 'Copied React code' : `Copied ${name}`,
      event: { name: 'copy_code', slug: component.slug, format },
      onFailure: () => revealCode(name),
    })
  }

  return (
    <main className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 pt-8 pb-24 sm:px-6 lg:px-8 lg:pt-10">
      <nav aria-label="Breadcrumb">
        <ol role="list" className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
          <li>{groupOf(component.category).label}</li>
          <li className="flex items-center gap-1.5">
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 text-zinc-300 dark:text-zinc-600">
              <path d="m6 3.5 4.5 4.5L6 12.5" />
            </svg>
            <Link
              to={`/browse/${component.category}`}
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
              to={`/${filtersSearch({ q: '', tags: [tag] })}`}
              className={`inline-flex h-7 items-center rounded-full border border-zinc-200 px-3 text-[13px] text-zinc-600 transition-colors duration-150 hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-white ${FOCUS_RING}`}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <ActionBar meta={component} sources={sources} format={format} onFormatChange={onFormatChange} onCopyFailed={() => revealCode()} />
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
      <div ref={codeRef} role="tabpanel" id={`${id}-code`} aria-labelledby={`${id}-code-tab`} hidden={tab !== 'code'} className="mt-4">
        <CodeView format={format} highlighted={highlighted} sources={sources} onCopyFile={copyFile} />
      </div>

      {related.length > 0 && (
        <section aria-labelledby={`${id}-related`} className="mt-20">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id={`${id}-related`} className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-white">
              More in {categoryLabel}
            </h2>
            <Link
              to={`/browse/${component.category}`}
              className={`rounded-sm text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors duration-150 hover:text-zinc-950 hover:decoration-zinc-500 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-white dark:hover:decoration-zinc-400 ${FOCUS_RING}`}
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
            className={`group -mb-px border-b-2 text-sm font-medium transition-colors duration-150 outline-none ${
              selected
                ? 'border-zinc-900 text-zinc-950 dark:border-zinc-100 dark:text-white'
                : 'border-transparent text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
            }`}
          >
            <span className="-mx-1.5 rounded-md px-1.5 py-1 group-focus-visible:outline-2 group-focus-visible:outline-zinc-900 dark:group-focus-visible:outline-zinc-100">
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
