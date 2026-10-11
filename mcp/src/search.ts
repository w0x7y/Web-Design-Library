import { z } from 'zod'
import { componentSchema, KINDS, type Catalog, type Component } from './catalog.js'

/** Optional search terms and conjunctive metadata filters. */
export const searchInputSchema = z.object({
  query: z.string().max(500).optional().describe('Layout terms such as "two column hero with image". Complete category phrases rank first, then distinct word coverage and field weights. Singular/plural words and prefixes match; common English stopwords are ignored.'),
  category: z.string().max(60).optional().describe('Category id from list_categories, such as pricing or buttons.'),
  tags: z.array(z.string().max(40)).max(20).optional().describe('Layout tag IDs from list_categories, such as split, grid or compact; a pattern must have every tag.'),
  kind: z.enum(KINDS).optional().describe('Full-width section or small standalone element.'),
  limit: z.number().int().min(1).max(50).default(10).describe('Maximum results, 1–50; defaults to 10.'),
})

/** Inputs accepted by the pure search function. */
export type SearchInput = z.input<typeof searchInputSchema>

/** Compact search results with page URLs retained as reference links. */
export const searchOutputSchema = z.object({
  showing: z.number().int().nonnegative(),
  total: z.number().int().nonnegative(),
  components: z.array(componentSchema.pick({ slug: true, name: true, category: true, kind: true, tags: true, description: true, url: true })),
})

const tokenize = (value: string) => value.toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? []
const stopwords = new Set('with for a an the and or of to in on my that this using use need want like some is are be as at by from it me i please'.split(' '))
const singular = (word: string) => word.length > 1 && word.endsWith('s') ? word.slice(0, -1) : word
const searchWords = (value: string) => tokenize(value).map(singular)
const queryWords = (value: string) => {
  const original = tokenize(value)
  const meaningful = original.filter((token) => !stopwords.has(token))
  return [...new Set((meaningful.length ? meaningful : original).map(singular))]
}

function match(token: string, words: string[]): number {
  if (words.includes(token)) return 2
  return words.some((word) => word.startsWith(token)) ? 1 : 0
}

/** Prefer complete category phrases, then rank by coverage and weighted fields; ties keep library order. */
export function searchComponents(catalog: Catalog, input: SearchInput) {
  if (input.category !== undefined && !catalog.categories.some(({ id }) => id === input.category)) {
    throw new Error(`Unknown category "${input.category}". Valid category ids: ${catalog.categories.map(({ id }) => id).join(', ')}.`)
  }
  const invalidTags = input.tags?.filter((tag) => !catalog.tags.some(({ id }) => id === tag)) ?? []
  if (invalidTags.length) {
    throw new Error(`Unknown tag ids: ${invalidTags.join(', ')}. Valid tag ids: ${catalog.tags.map(({ id }) => id).join(', ')}.`)
  }
  const tokens = queryWords(input.query ?? '')
  const labels = new Map(catalog.categories.map(({ id, label }) => [id, label]))
  const queryCategories = new Map(catalog.categories.map(({ id, label }) => [id, Math.max(...[id, label].map((value) => {
    const words = queryWords(value)
    return words.every((word) => tokens.includes(word)) ? words.length : 0
  }))]))
  const matches = catalog.components.flatMap((component, index) => {
    if (input.category !== undefined && component.category !== input.category) return []
    if (input.kind && component.kind !== input.kind) return []
    if (input.tags?.some((tag) => !component.tags.includes(tag))) return []
    const fields = [
      { words: searchWords(component.name), weight: 8 },
      { words: searchWords(component.slug), weight: 6 },
      { words: searchWords([...component.tags, component.category, labels.get(component.category) ?? ''].join(' ')), weight: 4 },
      { words: searchWords(component.description), weight: 1 },
    ]
    const scores = tokens.map((token) => Math.max(...fields.map(({ words, weight }) => match(token, words) * weight)))
    const coverage = scores.filter((score) => score > 0).length
    if (tokens.length && coverage === 0) return []
    return [{ component, index, coverage, categoryMatch: queryCategories.get(component.category) ?? 0, score: scores.reduce((sum, score) => sum + score, 0) }]
  })
  matches.sort((a, b) => b.categoryMatch - a.categoryMatch || b.coverage - a.coverage || b.score - a.score || a.index - b.index)
  return { total: matches.length, components: matches.slice(0, input.limit ?? 10).map(({ component }) => component) }
}

/** Project only the metadata exposed by search_components. */
export function searchResult(catalog: Catalog, input: SearchInput): z.infer<typeof searchOutputSchema> {
  const result = searchComponents(catalog, input)
  return {
    showing: result.components.length,
    total: result.total,
    components: result.components.map(({ slug, name, category, kind, tags, description, url }) => ({
      slug, name, category, kind, tags, description, url,
    })),
  }
}

/** Render one line per search hit and the untruncated match count. */
export function formatSearch(result: z.infer<typeof searchOutputSchema>): string {
  const oneLine = (text: string) => text.replace(/\s+/g, ' ').trim()
  return [
    `Showing ${result.showing} of ${result.total} matches.`,
    ...result.components.map((component) => [component.slug, component.name, component.category, component.kind, component.tags.map(oneLine).join(', '), component.description].map(oneLine).join(' | ')),
  ].join('\n')
}

function editDistance(a: string, b: string): number {
  let row = Array.from({ length: b.length + 1 }, (_, index) => index)
  for (let i = 0; i < a.length; i++) {
    const next = [i + 1]
    for (let j = 0; j < b.length; j++) {
      next.push(Math.min(next[j] + 1, row[j + 1] + 1, row[j] + (a[i] === b[j] ? 0 : 1)))
    }
    row = next
  }
  return row[b.length]
}

/** Suggest the closest slugs or names for an unknown component. */
export function closestComponents(components: Component[], query: string): Component[] {
  const normalize = (value: string) => tokenize(value).join('-')
  const needle = normalize(query)
  return components.map((component, index) => ({
    component, index,
    distance: Math.min(editDistance(needle, component.slug), editDistance(needle, normalize(component.name))),
  })).sort((a, b) => a.distance - b.distance || a.index - b.index).slice(0, 3).map(({ component }) => component)
}
