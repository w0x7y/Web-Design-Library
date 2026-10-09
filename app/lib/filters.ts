import { isCategoryId, isStyleTag, type CategoryId, type StyleTag } from '../../src/library/taxonomy'
import type { ComponentMeta } from '../../src/library/types'

// Browse filters live in the URL (?q=…&tags=a,b) so every view can be shared.

export interface Filters {
  q: string
  tags: StyleTag[]
}

export const NO_FILTERS: Filters = { q: '', tags: [] }

/** Lenient: trims, lowercases and dedupes tags, and drops anything outside the vocabulary. */
export function parseFilters(params: URLSearchParams): Filters {
  const q = (params.get('q') ?? '').trim()
  const tags: StyleTag[] = []
  for (const raw of params.getAll('tags').flatMap((value) => value.split(','))) {
    const tag = raw.trim().toLowerCase()
    if (isStyleTag(tag) && !tags.includes(tag)) tags.push(tag)
  }
  return { q, tags }
}

/** Omits an empty q and empty tags; tags are comma-joined. */
export function serializeFilters(f: Filters): URLSearchParams {
  const params = new URLSearchParams()
  const q = f.q.trim()
  if (q) params.set('q', q)
  if (f.tags.length > 0) params.set('tags', f.tags.join(','))
  return params
}

/** `?q=…&tags=a,b`, or '' when nothing is set. Commas stay readable in the address bar. */
export function filtersSearch(f: Filters): string {
  const search = serializeFilters(f).toString().replaceAll('%2C', ',')
  return search ? `?${search}` : ''
}

export function filterMetas(metas: ComponentMeta[], f: Filters & { category?: CategoryId }): ComponentMeta[] {
  const terms = f.q.toLowerCase().split(/\s+/).filter(Boolean)
  return metas.filter((meta) => {
    if (f.category && meta.category !== f.category) return false
    if (!f.tags.every((tag) => meta.tags.includes(tag))) return false
    const name = meta.name.toLowerCase()
    const description = meta.description.toLowerCase()
    return terms.every((term) => name.includes(term) || description.includes(term))
  })
}

/** The paths that render the browse page: `/` and `/browse/<known category>`. */
export function isBrowsePath(pathname: string): boolean {
  if (pathname === '/') return true
  const match = /^\/browse\/([^/]+)\/?$/.exec(pathname)
  return match !== null && isCategoryId(match[1])
}
