import { CATEGORY_IDS, CATEGORY_LABELS, GROUPS, type CategoryId } from './taxonomy'
import type { ComponentMeta, ComponentSources } from './types'

// The component-folder convention: where the folders live, which file holds which source, and the
// order and grouping the library is shown in. Two adapters load the folders: Vite's import.meta.glob
// for the app (registry.ts, sources.server.ts) and fs for Node (scripts/load-library.ts).
// Both take the convention from here. Glob patterns must be string literals, so they repeat the file
// names; catalog.contract.test.ts checks that the two adapters agree.

/** The folder that holds one folder per component, from the project root. */
export const COMPONENTS_DIR = 'src/library/components'

/** Whether `value` is a valid slug: kebab-case, so it is safe as a folder name, a URL segment and a file name. */
export function isSlug(value: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)
}

/** The file in a component folder that holds each source format. */
export const SOURCE_FILES = {
  tsx: 'Component.tsx',
  html: 'index.html',
  css: 'styles.css',
} as const satisfies Record<keyof ComponentSources, string>

const byCodeUnit = (a: string, b: string) => (a < b ? -1 : a > b ? 1 : 0)

/**
 * Library order: taxonomy (group, then category), then name, then slug. Names and slugs compare by
 * UTF-16 code unit rather than by locale, so the Node prerender and the browser always agree.
 */
export function compareMetas(a: ComponentMeta, b: ComponentMeta): number {
  return (
    CATEGORY_IDS.indexOf(a.category) - CATEGORY_IDS.indexOf(b.category) ||
    byCodeUnit(a.name, b.name) ||
    byCodeUnit(a.slug, b.slug)
  )
}

/** A copy of `metas` in library order. */
export function sortMetas(metas: readonly ComponentMeta[]): ComponentMeta[] {
  return [...metas].sort(compareMetas)
}

export interface CatalogCategory {
  id: CategoryId
  label: string
  /** In library order; never empty. */
  metas: ComponentMeta[]
}

export interface CatalogGroup {
  id: (typeof GROUPS)[number]['id']
  label: string
  /** In taxonomy order; never empty. */
  categories: CatalogCategory[]
}

/** `metas` by taxonomy group and category, in library order. Groups and categories with no components are left out. */
export function groupMetas(metas: readonly ComponentMeta[]): CatalogGroup[] {
  const sorted = sortMetas(metas)
  return GROUPS.map((group) => ({
    id: group.id,
    label: group.label,
    categories: group.categories
      .map((id) => ({ id, label: CATEGORY_LABELS[id], metas: sorted.filter((meta) => meta.category === id) }))
      .filter((category) => category.metas.length > 0),
  })).filter((group) => group.categories.length > 0)
}

/** The slug of the component folder that a glob match sits in: './components/<slug>/<file>' gives '<slug>'. */
export function slugOfGlobPath(path: string): string {
  const slug = /\/([^/]+)\/[^/]+$/.exec(path)?.[1]
  if (!slug) throw new Error(`Not a file inside a component folder: ${path}`)
  return slug
}
