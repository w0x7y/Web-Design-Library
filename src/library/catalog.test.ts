import { compareMetas, groupMetas, slugOfGlobPath, sortMetas, SOURCE_FILES } from './catalog'
import type { CategoryId } from './taxonomy'
import type { ComponentMeta } from './types'

const meta = (slug: string, category: CategoryId, name: string) =>
  ({
    slug,
    name,
    category,
    tags: ['minimal'],
    description: `${name}.`,
    preview: { kind: 'section' },
    fonts: [],
    brief: { layout: 'l', style: 's', states: 's', responsive: 'r' },
    addedAt: '2026-10-08',
  }) satisfies ComponentMeta

const slugs = (metas: ComponentMeta[]) => metas.map((m) => m.slug)

test('a component folder holds one file per source format', () => {
  expect(SOURCE_FILES).toEqual({ tsx: 'Component.tsx', html: 'index.html', css: 'styles.css' })
})

test('library order is taxonomy first, whatever the names', () => {
  const button = meta('btn', 'buttons', 'A button')
  const pricing = meta('plans', 'pricing', 'Z plans')
  const hero = meta('hero', 'hero', 'Z hero')
  expect(slugs(sortMetas([button, pricing, hero]))).toEqual(['hero', 'plans', 'btn'])
})

test('within a category, names sort by UTF-16 code unit, not by locale', () => {
  // localeCompare would put "alpha" first; code units put every capital before every lowercase letter.
  const lower = meta('alpha', 'hero', 'alpha hero')
  const upper = meta('zed', 'hero', 'Zed hero')
  const dash = meta('dash', 'hero', 'Zed — hero') // U+2014 sorts after ASCII
  expect(slugs(sortMetas([dash, lower, upper]))).toEqual(['zed', 'dash', 'alpha'])
})

test('equal names fall back to the slug, so the order is total', () => {
  const b = meta('hero-b', 'hero', 'Hero')
  const a = meta('hero-a', 'hero', 'Hero')
  expect(compareMetas(a, b)).toBeLessThan(0)
  expect(compareMetas(b, a)).toBeGreaterThan(0)
  expect(compareMetas(a, a)).toBe(0)
  expect(slugs(sortMetas([b, a]))).toEqual(['hero-a', 'hero-b'])
})

test('sortMetas returns a new array and leaves its input alone', () => {
  const input = [meta('b', 'pricing', 'B'), meta('a', 'hero', 'A')]
  const sorted = sortMetas(input)
  expect(slugs(sorted)).toEqual(['a', 'b'])
  expect(slugs(input)).toEqual(['b', 'a'])
})

test('groupMetas keeps the non-empty groups and categories, in taxonomy order, with their labels', () => {
  const groups = groupMetas([
    meta('btn', 'buttons', 'Solid button'),
    meta('zed', 'hero', 'Zed hero'),
    meta('plans', 'pricing', 'Plans grid'),
    meta('alpha', 'hero', 'Alpha hero'),
  ])
  expect(
    groups.map((group) => ({
      id: group.id,
      label: group.label,
      categories: group.categories.map((category) => ({ id: category.id, label: category.label, slugs: slugs(category.metas) })),
    })),
  ).toEqual([
    {
      id: 'sections',
      label: 'Sections',
      categories: [
        { id: 'hero', label: 'Hero', slugs: ['alpha', 'zed'] },
        { id: 'pricing', label: 'Pricing', slugs: ['plans'] },
      ],
    },
    { id: 'elements', label: 'Elements', categories: [{ id: 'buttons', label: 'Buttons', slugs: ['btn'] }] },
  ])
})

test('groupMetas of nothing is no groups', () => {
  expect(groupMetas([])).toEqual([])
})

test('slugOfGlobPath is the folder the matched file sits in', () => {
  expect(slugOfGlobPath('./components/hero-split-image/Component.tsx')).toBe('hero-split-image')
  expect(slugOfGlobPath('./components/buttons-minimal/meta.ts')).toBe('buttons-minimal')
  expect(slugOfGlobPath('/src/library/components/faq-accordion/styles.css')).toBe('faq-accordion')
})

test('slugOfGlobPath rejects a path that is not inside a folder', () => {
  expect(() => slugOfGlobPath('Component.tsx')).toThrow(/Component\.tsx/)
  expect(() => slugOfGlobPath('./Component.tsx')).toThrow(/Component\.tsx/)
})
