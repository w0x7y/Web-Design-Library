import { lazy, type ComponentType, type LazyExoticComponent } from 'react'
import { CATEGORY_IDS, type CategoryId } from './taxonomy'
import type { ComponentMeta } from './types'

// Client-safe registry: metadata (eager) and rendered modules (lazy).
// Raw sources live in sources.server.ts so they never reach the client bundle.

const metaModules = import.meta.glob<{ default: ComponentMeta }>('./components/*/meta.ts', { eager: true })
const componentLoaders = import.meta.glob<{ default: ComponentType }>('./components/*/Component.tsx')

const METAS: ComponentMeta[] = Object.values(metaModules)
  .map((module) => module.default)
  .sort(
    (a, b) =>
      CATEGORY_IDS.indexOf(a.category) - CATEGORY_IDS.indexOf(b.category) ||
      (a.name < b.name ? -1 : a.name > b.name ? 1 : 0),
  )
const META_BY_SLUG = new Map(METAS.map((meta) => [meta.slug, meta]))
const LOADER_BY_SLUG = new Map(
  Object.entries(componentLoaders).map(([path, load]) => [path.split('/')[2], load]),
)
const lazyCache = new Map<string, LazyExoticComponent<ComponentType>>()

export function allMetas(): ComponentMeta[] {
  return [...METAS]
}

export function metaBySlug(slug: string): ComponentMeta | undefined {
  return META_BY_SLUG.get(slug)
}

export function categoryCounts(): Partial<Record<CategoryId, number>> {
  const counts: Partial<Record<CategoryId, number>> = {}
  for (const meta of METAS) counts[meta.category] = (counts[meta.category] ?? 0) + 1
  return counts
}

export function lazyComponent(slug: string): LazyExoticComponent<ComponentType> {
  let component = lazyCache.get(slug)
  if (!component) {
    const load = LOADER_BY_SLUG.get(slug)
    if (!load) throw new Error(`Unknown component: ${slug}`)
    component = lazy(load)
    lazyCache.set(slug, component)
  }
  return component
}
