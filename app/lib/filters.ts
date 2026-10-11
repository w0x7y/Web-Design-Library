import { isLayoutTag, type CategoryId, type LayoutTag } from '../../src/library/taxonomy'
import type { ComponentMeta } from '../../src/library/types'

// Browse filters live in the URL (?q=…&tags=a,b) so every view can be shared.

export interface Filters {
  q: string
  tags: LayoutTag[]
}

export const NO_FILTERS: Filters = { q: '', tags: [] }

/** Lenient: trims, lowercases and dedupes tags, and drops anything outside the vocabulary. */
export function parseFilters(params: URLSearchParams): Filters {
  const q = (params.get('q') ?? '').trim()
  const tags: LayoutTag[] = []
  for (const raw of params.getAll('tags').flatMap((value) => value.split(','))) {
    const tag = raw.trim().toLowerCase()
    if (isLayoutTag(tag) && !tags.includes(tag)) tags.push(tag)
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

/** The components that carry every tag in `f` and match every term of its search, by name or description. */
export function filterMetas(metas: ComponentMeta[], f: Filters): ComponentMeta[] {
  const terms = f.q.toLowerCase().split(/\s+/).filter(Boolean)
  return metas.filter((meta) => {
    if (!f.tags.every((tag) => meta.tags.includes(tag))) return false
    const name = meta.name.toLowerCase()
    const description = meta.description.toLowerCase()
    return terms.every((term) => name.includes(term) || description.includes(term))
  })
}


/**
 * What the browse page shows: the components in view (all, or one category's), the ones of those
 * that pass the filters, and whether any filter is set.
 */
export function browseResults(
  metas: ComponentMeta[],
  category: CategoryId | null,
  f: Filters,
): { inView: ComponentMeta[]; results: ComponentMeta[]; filtered: boolean } {
  const inView = category ? metas.filter((meta) => meta.category === category) : metas
  return { inView, results: filterMetas(inView, f), filtered: f.q !== '' || f.tags.length > 0 }
}
