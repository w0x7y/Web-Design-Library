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
    wireframe: '┌──┐\n│UI│\n└──┘',
    brief: { layout: 'l', hierarchy: 's', usage: 'Use this layout.', states: 's', responsive: 'r' },
    addedAt: '2026-10-08',
  }
}

const all = [
  fixture('a', 'hero', ['centered', 'spacious'], 'Split hero'),
  fixture('b', 'hero', ['layered'], 'Gradient hero'),
  fixture('c', 'pricing', ['centered'], 'Three tier pricing'),
]

test('parseFilters trims q, keeps known tags once, in order', () => {
  expect(parseFilters(new URLSearchParams('q=  Hero &tags=layered,unknown,layered,grid'))).toEqual({ q: 'Hero', tags: ['layered', 'grid'] })
  expect(parseFilters(new URLSearchParams('q=%20%20'))).toEqual({ q: '', tags: [] })
})

test('parseFilters tolerates hand-edited tags', () => {
  expect(parseFilters(new URLSearchParams('tags= Layered ,,GRID'))).toEqual({ q: '', tags: ['layered', 'grid'] })
  expect(parseFilters(new URLSearchParams('tags=layered&tags=grid,layered'))).toEqual({ q: '', tags: ['layered', 'grid'] })
  expect(parseFilters(new URLSearchParams(''))).toEqual({ q: '', tags: [] })
})

test('serializeFilters omits empties', () => {
  expect(serializeFilters({ q: '', tags: [] }).toString()).toBe('')
  expect(serializeFilters({ q: 'card', tags: ['layered', 'grid'] }).toString()).toBe('q=card&tags=layered%2Cgrid')
  expect(serializeFilters({ q: '   ', tags: [] }).toString()).toBe('')
})

test('filtersSearch builds a readable query string', () => {
  expect(filtersSearch({ q: '', tags: [] })).toBe('')
  expect(filtersSearch({ q: ' grid card ', tags: ['layered', 'media'] })).toBe('?q=grid+card&tags=layered,media')
})

test('filterMetas: tags AND, every q term matches name or description case-insensitively', () => {
  // fixtures: A hero [centered, spacious] "Split hero", B hero [layered] "Gradient hero", C pricing [centered] "Three tier pricing"
  expect(filterMetas(all, { q: '', tags: ['centered', 'spacious'] }).map((m) => m.slug)).toEqual(['a'])
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
  const split = browseResults(all, 'hero', { q: 'split', tags: ['centered'] })
  expect([slugs(split.inView), slugs(split.results), split.filtered]).toEqual([['a', 'b'], ['a'], true])
  expect(browseResults(all, 'pricing', { q: 'split', tags: ['centered'] }).results).toEqual([])
  const everything = browseResults(all, null, { q: '', tags: ['centered'] })
  expect([everything.inView, slugs(everything.results), everything.filtered]).toEqual([all, ['a', 'c'], true])
})
