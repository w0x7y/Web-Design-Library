import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { listComponentSlugs, prerenderPaths } from './paths'

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

test('listComponentSlugs returns [] for a missing directory', () => {
  expect(listComponentSlugs('does/not/exist')).toEqual([])
})

describe('listComponentSlugs with a real directory', () => {
  let tmp: string

  beforeAll(() => {
    tmp = mkdtempSync(join(tmpdir(), 'wl-slugs-'))
    mkdirSync(join(tmp, 'b'))
    mkdirSync(join(tmp, 'a'))
    writeFileSync(join(tmp, 'x.txt'), '')
  })

  afterAll(() => {
    rmSync(tmp, { recursive: true, force: true })
  })

  test('returns sorted directory names, ignoring files', () => {
    expect(listComponentSlugs(tmp)).toEqual(['a', 'b'])
  })

  // Only a missing folder means "no components"; anything else must fail the build, not pre-render an empty library.
  test('throws when the path is not a directory', () => {
    expect(() => listComponentSlugs(join(tmp, 'x.txt'))).toThrow(/ENOTDIR/)
  })
})
