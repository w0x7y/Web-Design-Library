import { Suspense, useSyncExternalStore } from 'react'
import { data, useSearchParams } from 'react-router'
import { PreviewSurface } from '~/components/PreviewSurface'
import { SITE } from '~/site'
import { lazyComponent, metaBySlug } from '../../src/library/registry'
import type { Route } from './+types/preview'

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

// Prerendered HTML has no query string, and hydration keeps server attributes,
// so read ?capture=1 only once hydrated: the server snapshot (false) matches the
// prerendered markup, then React re-renders with the client value.
const noopSubscribe = () => () => {}
function useHydrated() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  )
}

export default function Preview({ loaderData }: Route.ComponentProps) {
  const [searchParams] = useSearchParams()
  const hydrated = useHydrated()
  const component = metaBySlug(loaderData.slug)
  if (!component) throw new Error(`Unknown component: ${loaderData.slug}`) // the loader 404s unknown slugs first
  const Lazy = lazyComponent(component.slug)
  return (
    <PreviewSurface
      kind={component.preview.kind}
      fonts={component.fonts}
      mode="page"
      capture={hydrated && searchParams.get('capture') === '1'}
    >
      <Suspense>
        {/* oxlint-disable-next-line react/static-components -- lazyComponent() memoizes per slug, so the type is stable across renders */}
        <Lazy />
      </Suspense>
    </PreviewSurface>
  )
}
