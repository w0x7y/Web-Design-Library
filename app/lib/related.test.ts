import type { ComponentMeta } from '../../src/library/types'
import { relatedMetas } from './related'

const meta = (slug: string, category: ComponentMeta['category']) => ({ slug, category }) as ComponentMeta

const LIBRARY = [
  meta('hero-a', 'hero'),
  meta('navbar-a', 'navbar'),
  meta('hero-b', 'hero'),
  meta('hero-c', 'hero'),
  meta('hero-d', 'hero'),
  meta('hero-e', 'hero'),
]

test('lists other components of the same category, in library order, excluding itself', () => {
  expect(relatedMetas(LIBRARY[2], LIBRARY.slice(0, 4)).map((m) => m.slug)).toEqual(['hero-a', 'hero-c'])
})

test('returns at most three', () => {
  expect(relatedMetas(LIBRARY[0], LIBRARY).map((m) => m.slug)).toEqual(['hero-b', 'hero-c', 'hero-d'])
})

test('is empty when the component is alone in its category', () => {
  expect(relatedMetas(LIBRARY[1], LIBRARY)).toEqual([])
})
