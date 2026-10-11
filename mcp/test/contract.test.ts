import { resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { expect, it } from 'vitest'
import { z } from 'zod'
import { FORMATS, parseCatalog, SLUG_PATTERN } from '../src/catalog.js'
import { briefPath, DEFAULT_URL } from '../src/client.js'
import { inventoryFixture } from './inventory.js'

it('builds the catalog from site source and agrees on its origin, formats, brief paths and slug rule without a site build', async () => {
  const repoRoot = fileURLToPath(new URL('../../', import.meta.url))
  // Computed URLs let Vitest load the site without NodeNext type-following its files.
  const loaderUrl = pathToFileURL(resolve(repoRoot, 'scripts/load-library.ts')).href
  const builderUrl = pathToFileURL(resolve(repoRoot, 'src/library/agent-files.ts')).href
  const siteCatalogUrl = pathToFileURL(resolve(repoRoot, 'src/library/catalog.ts')).href
  const [{ loadMetas }, { buildCatalogJson }, site] = await Promise.all([import(loaderUrl), import(builderUrl), import(siteCatalogUrl)])
  expect(SLUG_PATTERN).toBe(site.SLUG_PATTERN)
  const metas = await loadMetas(resolve(repoRoot, 'src/library/components'))
  const value: unknown = JSON.parse(buildCatalogJson(metas))
  const catalog = parseCatalog(value)
  expect(catalog.components.length).toBeGreaterThanOrEqual(1)
  expect(catalog.url).toBe(DEFAULT_URL)
  for (const format of FORMATS) expect(catalog.formats).toContain(format)

  const raw = z.object({
    version: z.literal(1),
    components: z.array(z.object({
      slug: z.string(), fonts: z.array(z.unknown()).length(0),
      formatUrls: z.record(z.enum(FORMATS), z.url()),
    })),
  }).parse(value)
  for (const component of catalog.components) {
    const planned = inventoryFixture.components.find(({ slug }) => slug === component.slug)
    expect(planned, `Pattern ${component.slug} must be in the layout inventory`).toBeDefined()
    expect(component).toMatchObject({
      name: planned?.name, category: planned?.category, kind: planned?.kind,
    })
    // Authors can adjust tags while building; the current exemplars already do.
    expect(component.tags.length).toBeGreaterThan(0)
    for (const tag of component.tags) expect(inventoryFixture.tags.map(({ id }) => id)).toContain(tag)
  }
  for (const component of raw.components) {
    for (const format of FORMATS) {
      expect(briefPath(component.slug, format)).toBe(new URL(component.formatUrls[format]).pathname)
    }
  }
})
