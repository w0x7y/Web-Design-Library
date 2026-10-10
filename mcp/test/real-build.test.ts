import { readFile, stat } from 'node:fs/promises'
import { describe, expect, it } from 'vitest'
import { categorySummary, FORMATS } from '../src/catalog.js'
import { briefPath } from '../src/client.js'
import { searchComponents } from '../src/search.js'
import { layoutQueries } from './inventory.js'
import { catalogFile, hasBuild, readBuiltCatalog } from './real-build.js'

describe.skipIf(!hasBuild)('real layout catalog', () => {
  it('reports counts and category coverage for every pattern currently built', () => {
    const catalog = readBuiltCatalog()
    expect(catalog.components.length).toBeGreaterThan(0)
    const summary = categorySummary(catalog)
    expect(summary.total).toBe(catalog.components.length)
    expect(summary.formats).toEqual([...FORMATS])
    expect(summary.groups.flatMap(({ categories }) => categories).map(({ id }) => id))
      .toEqual(catalog.categories.map(({ id }) => id))
    for (const { id, label, count } of catalog.categories) {
      const available = catalog.components.filter(({ category }) => category === id)
      expect(count).toBe(available.length)
      const filtered = searchComponents(catalog, { category: id, limit: 50 })
      expect(filtered.total).toBe(count)
      expect(filtered.components.map(({ slug }) => slug)).toEqual(available.slice(0, 50).map(({ slug }) => slug))
      if (!count) continue
      const limit = Math.min(3, count)
      const ranked = searchComponents(catalog, { query: label, limit })
      expect(ranked.components.map(({ category }) => category)).toEqual(Array(limit).fill(id))
    }
    for (const { id, count } of catalog.tags) {
      expect(count).toBe(catalog.components.filter(({ tags }) => tags.includes(id)).length)
    }
  })

  it('ships both neutral briefs for every built pattern within one quarter of the byte cap', async () => {
    const catalog = readBuiltCatalog()
    const sizes = await Promise.all(catalog.components.flatMap(({ slug }) => FORMATS.map(async (format) => {
      const file = new URL(`.${briefPath(slug, format)}`, catalogFile)
      const brief = await readFile(file, 'utf8')
      expect(brief).toContain('Layout pattern: ')
      expect(brief).toContain('This is a neutral wireframe.')
      expect([...brief.matchAll(/^## (.+)$/gm)].map((match) => match[1])).toEqual([
        'Wireframe', 'Layout', 'Hierarchy and content', 'States', 'Responsive', 'When to use',
        format === 'react' ? 'Reference code (React + Tailwind v4)' : 'Reference code (HTML + CSS)',
      ])
      expect(brief).toMatch(/## Wireframe\n```text\n[^]+?\n```/)
      expect(brief).not.toMatch(/## Visual style|^Fonts:|fonts\.googleapis\.com|<link\b/m)
      return (await stat(file)).size
    })))
    expect(sizes.length).toBeGreaterThan(0)
    expect(Math.max(...sizes) * 4).toBeLessThanOrEqual(1024 * 1024)
  })
})

// These tests wait for their specific inventory layouts, not a hard-coded total.
// With the three-pattern build only the hero query runs. The inventory fixture
// exercises every query even before those layouts are authored.
const catalog = hasBuild ? readBuiltCatalog() : undefined
for (const { query, category, slugs } of layoutQueries) {
  it.skipIf(!catalog?.components.some(({ slug }) => slugs.includes(slug)))
    (`real layout ranking: "${query}" (requires ${slugs.join(' or ')})`, () => {
      if (!catalog) throw new Error('Expected a site build')
      const limit = Math.min(3, catalog.components.filter((component) => component.category === category).length)
      const result = searchComponents(catalog, { query, limit })
      expect(slugs).toContain(result.components[0]?.slug)
      expect(result.components.map((component) => component.category)).toEqual(Array(limit).fill(category))
    })
}
