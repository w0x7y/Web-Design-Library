import { expect, test } from 'vitest'
import { SITE } from '../site'
import { absoluteUrl, browsePath, componentMarkdownPath, componentPath, isBrowsePath, isCaptureRequest, prerenderPaths, previewPath } from './urls'

test('component, agent-file and preview paths', () => {
  expect(componentPath('hero-split-image')).toBe('/c/hero-split-image')
  expect(componentMarkdownPath('hero-split-image')).toBe('/c/hero-split-image.md')
  expect(previewPath('hero-split-image')).toBe('/preview/hero-split-image')
  expect(previewPath('hero-split-image', { capture: true })).toBe('/preview/hero-split-image?capture=1')
})

test('browse paths keep the search they are given', () => {
  expect(browsePath(null)).toBe('/')
  expect(browsePath('hero')).toBe('/browse/hero')
  expect(browsePath('hero', '?q=glass')).toBe('/browse/hero?q=glass')
  expect(browsePath(null, '?tags=dark')).toBe('/?tags=dark')
})

test('isBrowsePath matches the index and known categories only', () => {
  expect(isBrowsePath(browsePath(null))).toBe(true)
  expect(isBrowsePath(browsePath('hero'))).toBe(true)
  expect(isBrowsePath('/browse/hero/')).toBe(true)
  expect(isBrowsePath('/browse/nope')).toBe(false)
  expect(isBrowsePath('/browse')).toBe(false)
  expect(isBrowsePath(componentPath('hero-split-image'))).toBe(false)
})

test('a capture request is recognised from its own URL', () => {
  const url = new URL(previewPath('demo', { capture: true }), SITE.url)
  expect(isCaptureRequest(url.searchParams)).toBe(true)
  expect(isCaptureRequest(new URL(previewPath('demo'), SITE.url).searchParams)).toBe(false)
})

test('absolute URLs are on the live site', () => {
  expect(absoluteUrl(componentPath('demo'))).toBe(`${SITE.url}/c/demo`)
})

test('prerenderPaths lists home, categories, details and previews in order', () => {
  expect(prerenderPaths({ slugs: ['a', 'b'], categories: ['hero'] })).toEqual([
    '/',
    '/browse/hero',
    '/c/a',
    '/preview/a',
    '/c/b',
    '/preview/b',
  ])
})
