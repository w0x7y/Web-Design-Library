import { describe, expect, it } from 'vitest'
import { closestComponents, formatSearch, searchComponents, searchInputSchema, searchResult } from '../src/search.js'
import { fixture } from './fixtures.js'
import { inventoryFixture, layoutQueries } from './inventory.js'

const slugs = (input: Parameters<typeof searchComponents>[1]) => searchComponents(fixture, input).components.map(({ slug }) => slug)

describe('search', () => {
  it('keeps library order without query or filters and counts before limiting', () => {
    expect(slugs({})).toEqual(fixture.components.map(({ slug }) => slug))
    expect(searchComponents(fixture, { limit: 2 })).toMatchObject({ total: 5, components: fixture.components.slice(0, 2) })
  })

  it('projects explicit search fields even when a component has extra metadata', () => {
    const catalog = { ...fixture, components: fixture.components.map((component) => ({ ...component, future: 'private metadata', fonts: ['Unused'] })) }
    const result = searchResult(catalog, { limit: 1 })
    expect(result).toEqual({ showing: 1, total: 5, components: [fixture.components[0]] })
    expect(searchResult(catalog, { query: 'unknown' })).toEqual({ showing: 0, total: 0, components: [] })
  })

  it('keeps each search hit on one line', () => {
    const catalog = { ...fixture, components: [{ ...fixture.components[0], slug: ' hero-split\nimage ', name: '  Hero\nsplit  ', category: ' hero\tcategory ', tags: [' split\nlayout ', ' media\tlayout '], description: '  Slot\tcopy.\n' }] }
    expect(formatSearch(searchResult(catalog, {}))).toBe('Showing 1 of 1 matches.\nhero-split image | Hero split | hero category | section | split layout, media layout | Slot copy.')
  })

  it('weights name above slug, taxonomy and description, preserving ties', () => {
    const components = fixture.components.map((component, index) => ({
      ...component, name: index === 3 ? 'Aurora layout' : 'Layout',
      slug: index === 2 ? 'aurora-layout' : `layout-${index}`,
      tags: index === 1 ? ['aurora'] : [],
      description: index === 0 || index === 4 ? 'Aurora component' : 'Component',
    }))
    const catalog = { ...fixture, components }
    expect(searchComponents(catalog, { query: 'aurora' }).components.map(({ slug }) => slug))
      .toEqual(['layout-3', 'aurora-layout', 'layout-1', 'layout-0', 'layout-4'])
  })

  it('matches case-insensitive prefixes and punctuation, allowing unmatched query words', () => {
    expect(slugs({ query: 'PRIC' })).toEqual(['pricing-comparison-table', 'pricing-three-tiers', 'pricing-single-plan'])
    expect(slugs({ query: 'split, PRICING! unknown' })).toEqual(['pricing-comparison-table', 'pricing-three-tiers', 'pricing-single-plan', 'hero-split-image'])
    expect(slugs({ query: 'pricing unknown' })).toEqual(['pricing-comparison-table', 'pricing-three-tiers', 'pricing-single-plan'])
    expect(slugs({ query: 'unknown' })).toEqual([])
    expect(slugs({ query: '   ! ' })).toEqual(slugs({}))
    expect(slugs({ query: 'pricing pricing' })).toEqual(slugs({ query: 'pricing' }))
  })

  it('ranks distinct word coverage ahead of field weights without category words and counts every partial match before limiting', () => {
    const components = [
      { ...fixture.components[0], name: 'Aurora', slug: 'aurora-layout', tags: [], description: 'Component' },
      { ...fixture.components[1], name: 'Layout', slug: 'layout-one', tags: [], description: 'Aurora lunar comet' },
      { ...fixture.components[2], name: 'Lunar', slug: 'lunar-layout', tags: [], description: 'Comet component' },
    ]
    const catalog = { ...fixture, components }
    const result = searchComponents(catalog, { query: 'aurora lunar comet aurora unknown', limit: 2 })
    expect(result.total).toBe(3)
    expect(result.components.map(({ slug }) => slug)).toEqual(['layout-one', 'lunar-layout'])
  })

  it('ignores common English stopwords in descriptive queries', () => {
    expect(slugs({ query: 'with for a an the and or of to in on my that this using use need want like some pricing' }))
      .toEqual(['pricing-comparison-table', 'pricing-three-tiers', 'pricing-single-plan'])
  })

  it('falls back to the original words when every query word is a stopword', () => {
    expect(slugs({ query: 'with' })).toEqual(['hero-split-image', 'pricing-single-plan'])
    expect(slugs({ query: 'the' })).toEqual(['badges-status-list'])
  })

  it('matches singular and plural words in both directions and counts them once', () => {
    for (const query of ['plan', 'plans', 'plan plans']) {
      expect(slugs({ query })).toEqual(['pricing-single-plan', 'pricing-comparison-table', 'pricing-three-tiers'])
    }
    for (const query of ['badge', 'badges']) expect(slugs({ query })).toEqual(['badges-status-list'])
  })

  it('weights exact matches twice as much as prefixes after plural normalization', () => {
    const components = [
      { ...fixture.components[0], name: 'Auroral', slug: 'prefix-layout', tags: [], description: 'Component' },
      { ...fixture.components[1], name: 'Auroras', slug: 'exact-layout', tags: [], description: 'Component' },
    ]
    expect(searchComponents({ ...fixture, components }, { query: 'aurora' }).components.map(({ slug }) => slug))
      .toEqual(['exact-layout', 'prefix-layout'])
  })

  it('boosts exact category ids and singular or plural labels above incidental name matches', () => {
    const components = [
      { ...fixture.components[0], name: 'Pricing subscriptions', slug: 'incidental-layout', tags: [], description: 'Component' },
      { ...fixture.components[1], name: 'Comparison', slug: 'category-layout', tags: [], description: 'Component' },
    ]
    expect(searchComponents({ ...fixture, components }, { query: 'pricing' }).components.map(({ slug }) => slug))
      .toEqual(['category-layout', 'incidental-layout'])
    const catalog = {
      ...fixture,
      categories: fixture.categories.map((category) => category.id === 'pricing' ? { ...category, id: 'commerce', label: 'Subscriptions' } : category),
      components: components.map((component) => component.category === 'pricing' ? { ...component, category: 'commerce' } : component),
    }
    for (const query of ['commerce', 'subscription', 'subscriptions']) {
      expect(searchComponents(catalog, { query }).components[0].slug).toBe('category-layout')
    }
    expect(searchComponents(catalog, { query: 'sub' }).components.map(({ slug }) => slug))
      .toEqual(['incidental-layout', 'category-layout'])
  })

  it('prioritizes an exact category word over greater coverage in another category', () => {
    const components = [
      { ...fixture.components[0], name: 'Pricing monthly yearly', slug: 'incidental-layout', tags: [], description: 'Component' },
      { ...fixture.components[1], name: 'Comparison', slug: 'category-layout', tags: [], description: 'Component' },
    ]
    const result = searchComponents({ ...fixture, components }, { query: 'pricing monthly yearly' })
    expect(result.total).toBe(2)
    expect(result.components.map(({ slug }) => slug)).toEqual(['category-layout', 'incidental-layout'])
  })

  it('requires all category words, ignores category stopwords and prefers the most specific match', () => {
    const catalog = {
      ...fixture,
      categories: [
        { id: 'testimonials', label: 'Testimonials', group: 'sections', count: 1 },
        { id: 'testimonial-card', label: 'Testimonial cards', group: 'sections', count: 1 },
        { id: 'cta', label: 'Call to action', group: 'sections', count: 1 },
        { id: 'signup', label: 'Sign-up', group: 'sections', count: 1 },
      ],
      components: ['testimonials', 'testimonial-card', 'cta', 'signup'].map((category, index) => ({
        ...fixture.components[0], category, slug: `layout-${index}`, name: 'Testimonial card call action sign up', tags: [],
      })),
    }
    for (const query of ['testimonial card', 'testimonial cards']) {
      expect(searchComponents(catalog, { query }).components[0].category).toBe('testimonial-card')
    }
    expect(searchComponents(catalog, { query: 'testimonial' }).components[0].category).toBe('testimonials')
    for (const query of ['call to action', 'call action']) expect(searchComponents(catalog, { query }).components[0].category).toBe('cta')
    expect(searchComponents(catalog, { query: 'call' }).components[0].category).toBe('testimonials')
    expect(searchComponents(catalog, { query: 'sign up' }).components[0].category).toBe('signup')
  })

  it('combines category, kind and all layout tags', () => {
    expect(slugs({ query: 'tables' })).toEqual(['pricing-comparison-table'])
    expect(slugs({ category: 'pricing', tags: ['table', 'compact'], kind: 'section' })).toEqual(['pricing-comparison-table'])
    expect(slugs({ category: 'pricing', kind: 'element' })).toEqual([])
    expect(slugs({ category: 'badges', kind: 'element' })).toEqual(['badges-status-list'])
    expect(slugs({ tags: ['split', 'table'] })).toEqual([])
    expect(slugs({ query: 'hero pricing unknown', category: 'pricing', tags: ['table', 'compact'], kind: 'section' }))
      .toEqual(['pricing-comparison-table'])
    expect(slugs({ query: 'pricing', category: 'hero' })).toEqual([])
    expect(slugs({ query: 'compact', tags: ['split', 'table'] })).toEqual([])
  })

  it('reports unknown filters with valid ids', () => {
    expect(() => slugs({ category: 'wrong' })).toThrow('Valid category ids: hero, pricing, badges')
    expect(() => slugs({ category: '' })).toThrow('Valid category ids: hero, pricing, badges')
    expect(() => slugs({ tags: ['wrong'] })).toThrow('Valid tag ids: split, media, spacious, table, numbers, compact, centered, grid, asymmetric, list')
  })

  it('validates limits and applies the default', () => {
    expect(searchInputSchema.parse({}).limit).toBe(10)
    for (const limit of [0, 51, 1.5]) expect(searchInputSchema.safeParse({ limit }).success).toBe(false)
    for (const limit of [1, 50]) expect(searchInputSchema.safeParse({ limit }).success).toBe(true)
  })

  it('suggests close slugs and names deterministically', () => {
    expect(closestComponents(fixture.components, 'pricing-comparison-tabl')[0].slug).toBe('pricing-comparison-table')
    expect(closestComponents(fixture.components, 'comparison-table-pricing')[0].slug).toBe('pricing-comparison-table')
    expect(closestComponents([], 'anything')).toEqual([])
  })
})

describe('planned layout search ranking', () => {
  it.each(layoutQueries)('returns a suitable layout first for "$query"', ({ query, category, slugs }) => {
    const result = searchComponents(inventoryFixture, { query, limit: 3 })
    expect(slugs).toContain(result.components[0]?.slug)
    expect(result.components.map((component) => component.category)).toEqual(Array(3).fill(category))
  })
})
