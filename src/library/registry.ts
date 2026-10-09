import { lazy, type ComponentType } from 'react'
import { slugOfGlobPath, sortMetas } from './catalog'
import type { ComponentMeta } from './types'

// Client-safe registry: metadata (eager) and rendered modules (lazy).
// Raw sources live in sources.server.ts so they never reach the client bundle.
// The glob patterns follow catalog.ts; catalog.contract.test.ts checks they agree with the files on disk.

const metaModules = import.meta.glob<{ default: ComponentMeta }>('./components/*/meta.ts', { eager: true })
const componentLoaders = import.meta.glob<{ default: ComponentType }>('./components/*/Component.tsx')

const METAS = sortMetas(Object.values(metaModules).map((module) => module.default))
const META_BY_SLUG = new Map(METAS.map((meta) => [meta.slug, meta]))
const LOADER_BY_SLUG = new Map(Object.entries(componentLoaders).map(([path, load]) => [slugOfGlobPath(path), load]))
const componentCache = new Map<string, ComponentType>()

/** Every component's meta, in library order. */
export function allMetas(): ComponentMeta[] {
  return [...METAS]
}

export function metaBySlug(slug: string): ComponentMeta | undefined {
  return META_BY_SLUG.get(slug)
}

/** The preview's build-time loader resolves before rendering, avoiding hidden Suspense copies of native controls. */
export async function preloadComponent(slug: string): Promise<void> {
  const load = LOADER_BY_SLUG.get(slug)
  if (!load) throw new Error(`Unknown component: ${slug}`)
  const module = await load()
  componentCache.set(slug, module.default)
}

export function lazyComponent(slug: string): ComponentType {
  let component = componentCache.get(slug)
  if (!component) {
    const load = LOADER_BY_SLUG.get(slug)
    if (!load) throw new Error(`Unknown component: ${slug}`)
    component = lazy(load)
    componentCache.set(slug, component)
  }
  return component
}
