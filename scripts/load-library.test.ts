import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import * as fs from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { vi } from 'vitest'
import type { ComponentMeta } from '../src/library/types'
import { listComponentSlugs, loadEntry, loadLibrary, loadMetas } from './load-library'

vi.mock('node:fs/promises', { spy: true })

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

const baseMeta: ComponentMeta = {
  slug: 'alpha',
  name: 'Alpha hero',
  category: 'hero',
  tags: ['minimal'],
  description: 'A centered hero.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout: 'Centered column.',
    style: 'Neutral palette.',
    states: 'Buttons have hover styles.',
    responsive: 'Stacks below 640px.',
  },
  addedAt: '2026-10-08',
}

describe('library loading', () => {
  let root: string

  beforeEach(() => {
    vi.clearAllMocks()
    root = mkdtempSync(resolve('.loader-test-'))
    for (const meta of [
      { ...baseMeta, slug: 'alpha', name: 'Zulu hero' },
      { ...baseMeta, slug: 'beta', name: 'Alpha pricing', category: 'pricing' },
      { ...baseMeta, slug: 'zulu', name: 'Alpha hero' },
    ]) {
      const dir = join(root, meta.slug)
      mkdirSync(dir)
      writeFileSync(join(dir, 'meta.ts'), `export default ${JSON.stringify(meta)}`)
      writeFileSync(join(dir, 'Component.tsx'), `React ${meta.slug}`)
      writeFileSync(join(dir, 'index.html'), `HTML ${meta.slug}`)
      writeFileSync(join(dir, 'styles.css'), `CSS ${meta.slug}`)
    }
  })

  afterEach(() => {
    vi.restoreAllMocks()
    rmSync(root, { recursive: true, force: true })
  })

  test('loadMetas returns the full library metadata in library order', async () => {
    const metas = await loadMetas(root)
    expect(metas.map((meta) => meta.slug)).toEqual(['zulu', 'alpha', 'beta'])
    expect(metas).toEqual((await loadLibrary(root)).map(({ entry }) => entry.meta))
  })

  test('loadMetas does not read component source files', async () => {
    const reads = vi.mocked(fs.readFile)
    expect(await loadMetas(root)).toHaveLength(3)
    expect(reads).not.toHaveBeenCalled()
  })

  test('loadMetas enumerates folders again on each call', async () => {
    expect(await loadMetas(root)).toHaveLength(3)
    rmSync(join(root, 'beta'), { recursive: true })
    expect((await loadMetas(root)).map((meta) => meta.slug)).toEqual(['zulu', 'alpha'])
  })

  test('loadEntry reads only the requested component sources', async () => {
    const reads = vi.mocked(fs.readFile)
    const entry = await loadEntry('alpha', root)
    expect(entry).toEqual({
      meta: { ...baseMeta, name: 'Zulu hero' },
      sources: { tsx: 'React alpha', html: 'HTML alpha', css: 'CSS alpha' },
    })
    expect(reads.mock.calls.map(([path]) => path).sort()).toEqual([
      join(root, 'alpha', 'Component.tsx'),
      join(root, 'alpha', 'index.html'),
      join(root, 'alpha', 'styles.css'),
    ].sort())
    expect(entry).toEqual((await loadLibrary(root)).find(({ folder }) => folder === 'alpha')?.entry)
  })

  test('missing source files stay empty in both entry and full loading', async () => {
    rmSync(join(root, 'alpha', 'index.html'))
    expect((await loadEntry('alpha', root)).sources.html).toBe('')
    expect((await loadLibrary(root)).find(({ folder }) => folder === 'alpha')?.entry.sources.html).toBe('')
  })

  test('source errors other than missing files are propagated', async () => {
    rmSync(join(root, 'alpha', 'styles.css'))
    mkdirSync(join(root, 'alpha', 'styles.css'))
    await expect(loadEntry('alpha', root)).rejects.toThrow()
    await expect(loadLibrary(root)).rejects.toThrow()
    expect(await loadMetas(root)).toHaveLength(3)
  })

  test('loadEntry rejects a folder that is not in the library', async () => {
    await expect(loadEntry('missing', root)).rejects.toThrow()
  })
})

test('loadMetas agrees with loadLibrary over the real library', async () => {
  expect(await loadMetas()).toEqual((await loadLibrary()).map(({ entry }) => entry.meta))
})
