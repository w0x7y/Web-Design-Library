import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { parseCatalog } from '../src/catalog.js'
import { closestComponents, formatSearch, searchComponents, searchInputSchema, searchResult } from '../src/search.js'
import { fixture } from './fixtures.js'
import { catalogFile, hasBuild } from './real-build.js'

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
    const catalog = { ...fixture, components: [{ ...fixture.components[0], slug: ' hero-split\nimage ', name: '  Minimal\npricing  ', category: ' hero\tcategory ', tags: [' minimal\nstyle ', ' light\tstyle '], description: '  Pick\ta plan.\n' }] }
    expect(formatSearch(searchResult(catalog, {}))).toBe('Showing 1 of 1 matches.\nhero-split image | Minimal pricing | hero category | section | minimal style, light style | Pick a plan.')
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
    expect(slugs({ query: 'PRIC' })).toEqual(['pricing-minimal', 'pricing-dark', 'plan-card'])
    expect(slugs({ query: 'minimal, PRICING! unknown' })).toEqual(['pricing-minimal', 'pricing-dark', 'plan-card', 'hero-split-image'])
    expect(slugs({ query: 'pricing unknown' })).toEqual(['pricing-minimal', 'pricing-dark', 'plan-card'])
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
      .toEqual(['pricing-minimal', 'pricing-dark', 'plan-card'])
  })

  it('falls back to the original words when every query word is a stopword', () => {
    expect(slugs({ query: 'with' })).toEqual(['hero-split-image'])
    expect(slugs({ query: 'the' })).toEqual([])
  })

  it('matches singular and plural words in both directions and counts them once', () => {
    for (const query of ['plan', 'plans', 'plan plans']) {
      expect(slugs({ query })).toEqual(['pricing-dark', 'plan-card', 'pricing-minimal'])
    }
    for (const query of ['badge', 'badges']) expect(slugs({ query })).toEqual(['badges-playful'])
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

  it('searches category labels and combines category, kind and all tags', () => {
    expect(slugs({ query: 'tables' })).toEqual(['pricing-minimal', 'pricing-dark', 'plan-card'])
    expect(slugs({ category: 'pricing', tags: ['minimal', 'light'], kind: 'section' })).toEqual(['pricing-minimal'])
    expect(slugs({ category: 'pricing', kind: 'element' })).toEqual(['plan-card'])
    expect(slugs({ tags: ['dark', 'light'] })).toEqual([])
    expect(slugs({ query: 'hero pricing unknown', category: 'pricing', tags: ['minimal', 'light'], kind: 'section' }))
      .toEqual(['pricing-minimal'])
    expect(slugs({ query: 'pricing', category: 'hero' })).toEqual([])
    expect(slugs({ query: 'minimal', tags: ['dark', 'light'] })).toEqual([])
  })

  it('reports unknown filters with valid ids', () => {
    expect(() => slugs({ category: 'wrong' })).toThrow('Valid category ids: hero, pricing, badges')
    expect(() => slugs({ category: '' })).toThrow('Valid category ids: hero, pricing, badges')
    expect(() => slugs({ tags: ['wrong'] })).toThrow('Valid tag ids: minimal, light, dark, playful')
  })

  it('validates limits and applies the default', () => {
    expect(searchInputSchema.parse({}).limit).toBe(10)
    for (const limit of [0, 51, 1.5]) expect(searchInputSchema.safeParse({ limit }).success).toBe(false)
    for (const limit of [1, 50]) expect(searchInputSchema.safeParse({ limit }).success).toBe(true)
  })

  it('suggests close slugs and names deterministically', () => {
    expect(closestComponents(fixture.components, 'pricing-minmal')[0].slug).toBe('pricing-minimal')
    expect(closestComponents(fixture.components, 'minimal-pricing')[0].slug).toBe('pricing-minimal')
    expect(closestComponents([], 'anything')).toEqual([])
  })
})

describe('real-catalog search ranking', () => {
  it.skipIf(!hasBuild).each([
    ['dark pricing table with monthly yearly toggle', 'Pricing'],
    ['testimonial carousel', 'Testimonials'],
    ['minimal footer with newsletter signup', 'Footer'],
    ['login form', 'Login'],
    ['hero with image for a SaaS product', 'Hero'],
    ['buttons', 'Buttons'],
    ['testimonial card', 'Testimonial cards'],
    ['testimonial cards', 'Testimonial cards'],
    ['data table', 'Data table'],
    ['call to action', 'Call to action'],
  ])('returns relevant top-three categories for "%s"', (query, label) => {
    const catalog = parseCatalog(JSON.parse(readFileSync(catalogFile, 'utf8')))
    const category = catalog.categories.find((category) => category.label === label)
    expect(category, `Missing category label "${label}" in the real catalog`).toBeDefined()
    const result = searchComponents(catalog, { query, limit: 3 })
    expect(result.total).toBeGreaterThanOrEqual(1)
    expect(result.components).toHaveLength(3)
    expect(result.components.map(({ category }) => category)).toEqual(Array(3).fill(category?.id))
  })
})

it.skipIf(!hasBuild)('keeps the brief cap at least four times the largest built brief', async () => {
  const { readdir, stat } = await import('node:fs/promises')
  const directory = new URL('c/', catalogFile)
  const sizes = await Promise.all((await readdir(directory)).filter((file) => file.endsWith('.md')).map(async (file) => (await stat(new URL(file, directory))).size))
  expect(Math.max(...sizes) * 4).toBeLessThanOrEqual(1024 * 1024)
})
