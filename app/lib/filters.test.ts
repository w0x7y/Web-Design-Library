import type { ComponentMeta } from '../../src/library/types'
import { browseResults, filterMetas, filtersSearch, parseFilters, serializeFilters } from './filters'

function fixture(slug: string, category: ComponentMeta['category'], tags: ComponentMeta['tags'], name: string): ComponentMeta {
  return {
    slug,
    name,
    category,
    tags,
    description: `${name} description.`,
    preview: { kind: 'section' },
    fonts: [],
    brief: { layout: 'l', style: 's', states: 's', responsive: 'r' },
    addedAt: '2026-10-08',
  }
}

const all = [
  fixture('a', 'hero', ['minimal', 'light'], 'Split hero'),
  fixture('b', 'hero', ['dark'], 'Gradient hero'),
  fixture('c', 'pricing', ['minimal'], 'Three tier pricing'),
]

test('parseFilters trims q, keeps known tags once, in order', () => {
  expect(parseFilters(new URLSearchParams('q=  Hero &tags=dark,unknown,dark,glass'))).toEqual({ q: 'Hero', tags: ['dark', 'glass'] })
  expect(parseFilters(new URLSearchParams('q=%20%20'))).toEqual({ q: '', tags: [] })
})

test('parseFilters tolerates hand-edited tags', () => {
  expect(parseFilters(new URLSearchParams('tags= Dark ,,GLASS'))).toEqual({ q: '', tags: ['dark', 'glass'] })
  expect(parseFilters(new URLSearchParams('tags=dark&tags=glass,dark'))).toEqual({ q: '', tags: ['dark', 'glass'] })
  expect(parseFilters(new URLSearchParams(''))).toEqual({ q: '', tags: [] })
})

test('serializeFilters omits empties', () => {
  expect(serializeFilters({ q: '', tags: [] }).toString()).toBe('')
  expect(serializeFilters({ q: 'card', tags: ['dark', 'glass'] }).toString()).toBe('q=card&tags=dark%2Cglass')
  expect(serializeFilters({ q: '   ', tags: [] }).toString()).toBe('')
})

test('filtersSearch builds a readable query string', () => {
  expect(filtersSearch({ q: '', tags: [] })).toBe('')
  expect(filtersSearch({ q: ' glass card ', tags: ['dark', 'has-image'] })).toBe('?q=glass+card&tags=dark,has-image')
})

test('filterMetas: tags AND, every q term matches name or description case-insensitively', () => {
  // fixtures: A hero [minimal, light] "Split hero", B hero [dark] "Gradient hero", C pricing [minimal] "Three tier pricing"
  expect(filterMetas(all, { q: '', tags: ['minimal', 'light'] }).map((m) => m.slug)).toEqual(['a'])
  expect(filterMetas(all, { q: 'HERO gradient', tags: [] }).map((m) => m.slug)).toEqual(['b'])
  expect(filterMetas(all, { q: 'zzz', tags: [] })).toEqual([])
})

test('filterMetas searches descriptions', () => {
  expect(filterMetas(all, { q: 'tier DESCRIPTION', tags: [] }).map((m) => m.slug)).toEqual(['c'])
  expect(filterMetas(all, { q: '', tags: [] })).toEqual(all)
})

test('browseResults: the category in view, then the filters within it', () => {
  const slugs = (metas: ComponentMeta[]) => metas.map((m) => m.slug)
  const hero = browseResults(all, 'hero', { q: '', tags: [] })
  expect([slugs(hero.inView), slugs(hero.results), hero.filtered]).toEqual([['a', 'b'], ['a', 'b'], false])
  const split = browseResults(all, 'hero', { q: 'split', tags: ['minimal'] })
  expect([slugs(split.inView), slugs(split.results), split.filtered]).toEqual([['a', 'b'], ['a'], true])
  expect(browseResults(all, 'pricing', { q: 'split', tags: ['minimal'] }).results).toEqual([])
  const everything = browseResults(all, null, { q: '', tags: ['minimal'] })
  expect([everything.inView, slugs(everything.results), everything.filtered]).toEqual([all, ['a', 'c'], true])
})
