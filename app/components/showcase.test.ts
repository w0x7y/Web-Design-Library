import { loadLibrary } from '../../scripts/load-library'
import { SHOWCASE } from './showcase'

const SOURCES = new Map((await loadLibrary()).map(({ entry }) => [entry.meta.slug, entry.sources.tsx]))

test.each(SHOWCASE.map((card) => card.slug))('showcase component %s is in the library and defines no element ids', (slug) => {
  const tsx = SOURCES.get(slug)
  expect(tsx, 'in the library').toBeDefined()
  expect(tsx).not.toMatch(/\bid=/)
})
