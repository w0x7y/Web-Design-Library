import { Suspense, useCallback, useEffect, useRef, useState, type RefObject } from 'react'
import { data, useSearchParams } from 'react-router'
import { PreviewSurface } from '~/components/PreviewSurface'
import { isCaptureRequest, settleDocument, type PreviewState } from '~/lib/preview-ready'
import { useHydrated } from '~/lib/use-hydrated'
import type { DocumentHandle } from '~/root'
import { SITE } from '~/site'
import { lazyComponent, metaBySlug } from '../../src/library/registry'
import type { Route } from './+types/preview'

// The component renders in the stage document: none of the site's theme, fonts, toasts or analytics.
export const handle: DocumentHandle = { document: 'stage' }

export function loader({ params }: Route.LoaderArgs) {
  if (!metaBySlug(params.slug)) throw data(null, { status: 404 })
  return { slug: params.slug }
}

export const meta: Route.MetaFunction = ({ loaderData }) => {
  const component = loaderData && metaBySlug(loaderData.slug)
  return [
    { title: component ? `${component.name} preview — ${SITE.name}` : `Component not found — ${SITE.name}` },
    { name: 'robots', content: 'noindex' },
  ]
}

export default function Preview({ loaderData }: Route.ComponentProps) {
  const [searchParams] = useSearchParams()
  const hydrated = useHydrated() // ?capture=1 is only readable once hydrated
  const [state, setState] = useState<PreviewState>('loading')
  const root = useRef<HTMLDivElement>(null)
  const settled = useCallback(() => setState('ready'), [])
  const component = metaBySlug(loaderData.slug)
  if (!component) throw new Error(`Unknown component: ${loaderData.slug}`) // the loader 404s unknown slugs first
  const Lazy = lazyComponent(component.slug)
  return (
    <PreviewSurface
      ref={root}
      kind={component.preview.kind}
      fonts={component.fonts}
      mode="page"
      capture={hydrated && isCaptureRequest(searchParams)}
      state={state}
    >
      <Suspense>
        {/* oxlint-disable-next-line react/static-components -- lazyComponent() memoizes per slug, so the type is stable across renders */}
        <Lazy />
        <Settle root={root} onSettled={settled} />
      </Suspense>
    </PreviewSurface>
  )
}

// Whatever stops the page rendering lands here, so it reports failed instead of looking like it is
// still loading: the component's code failing to load, or a slug that isn't in the library.
export function ErrorBoundary() {
  return <div data-preview-backdrop="" data-preview-state={'failed' satisfies PreviewState} />
}

/**
 * Sits after the component in its Suspense boundary, so its effect runs only once the component has
 * committed (on a pre-rendered page, once it has hydrated); then it settles the page.
 */
function Settle({ root, onSettled }: { root: RefObject<HTMLDivElement | null>; onSettled(): void }) {
  useEffect(() => {
    let current = true
    void settleDocument(root.current!).then(() => {
      if (current) onSettled()
    })
    return () => {
      current = false
    }
  }, [root, onSettled])
  return null
}
