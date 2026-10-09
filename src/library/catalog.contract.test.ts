import { listComponentSlugs, loadLibrary } from '../../scripts/load-library'
import { allMetas, lazyComponent, metaBySlug } from './registry'
import { sourcesFor } from './sources.server'

// The component folders reach the app through Vite's import.meta.glob (registry.ts, sources.server.ts)
// and reach Node through fs (load-library.ts: the build config, build scripts, the rules test, e2e and the
// prerender list). Glob patterns must be string literals, so they can't share catalog.ts's constants;
// this test runs both adapters over the real library and checks they agree.
// (vitest.config.ts opts `.css?raw` imports into CSS processing; Vitest would otherwise return '' for styles.css.)

const ITEMS = await loadLibrary()
const SLUGS = ITEMS.map((item) => item.entry.meta.slug)

test('the library is not empty, so agreement means something', () => {
  expect(ITEMS.length).toBeGreaterThanOrEqual(3)
})

test('both adapters list the same metas in the same order', () => {
  expect(allMetas()).toEqual(ITEMS.map((item) => item.entry.meta))
})

test('the folders the prerender list comes from are the registry slugs', () => {
  expect(listComponentSlugs()).toEqual(allMetas().map((meta) => meta.slug).sort())
})

test.each(SLUGS)('%s: the loader-side sources equal the files on disk', (slug) => {
  expect(sourcesFor(slug)).toEqual(ITEMS.find((item) => item.entry.meta.slug === slug)!.entry.sources)
})

test.each(SLUGS)('%s: the registry finds its meta and its component', (slug) => {
  expect(metaBySlug(slug)?.slug).toBe(slug)
  expect(() => lazyComponent(slug)).not.toThrow()
})
