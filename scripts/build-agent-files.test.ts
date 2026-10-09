import { mkdtemp, readFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { buildAgentMarkdown, buildLlmsTxt } from '../src/library/brief'
import { SITE } from '../src/site'
import type { ComponentMeta, LibraryEntry } from '../src/library/types'
import { writeAgentFiles } from './build-agent-files'

const baseMeta: ComponentMeta = {
  slug: 'a',
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

const entryA: LibraryEntry = {
  meta: baseMeta,
  sources: {
    tsx: 'export default function A() {\n  return <section>A</section>\n}\n',
    html: '<section class="a">A</section>',
    css: '.a { padding: 2rem; }',
  },
}

const entryB: LibraryEntry = {
  meta: { ...baseMeta, slug: 'b', name: 'Beta pricing', category: 'pricing', description: 'Three tiers.' },
  sources: {
    tsx: 'export default function B() {\n  return <section>B</section>\n}\n',
    html: '<section class="b">B</section>',
    css: '.b { padding: 1rem; }',
  },
}

test('writes component briefs and crawler discovery files with canonical URLs', async () => {
  const out = await mkdtemp(join(tmpdir(), 'wl-'))
  const written = await writeAgentFiles(out, [entryA, entryB])
  expect(written.sort()).toEqual(['c/a.md', 'c/b.md', 'llms.txt', 'robots.txt', 'sitemap.xml'])
  expect(await readFile(join(out, 'c/a.md'), 'utf8')).toBe(buildAgentMarkdown(entryA.meta, entryA.sources))
  expect(await readFile(join(out, 'c/b.md'), 'utf8')).toBe(buildAgentMarkdown(entryB.meta, entryB.sources))
  expect(await readFile(join(out, 'llms.txt'), 'utf8')).toBe(buildLlmsTxt([entryA.meta, entryB.meta]))
  const sitemap = await readFile(join(out, 'sitemap.xml'), 'utf8')
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
  expect(locations).toContain(`${SITE.url}/`)
  expect(locations).toContain(`${SITE.url}/browse/hero`)
  expect(locations).toContain(`${SITE.url}/browse/pricing`)
  expect(locations.filter((url) => url.includes('/c/'))).toEqual([`${SITE.url}/c/a`, `${SITE.url}/c/b`])
  expect(locations.every((url) => !url.includes('/preview/') && !url.includes('?') && !url.endsWith('.md'))).toBe(true)
  expect(new Set(locations).size).toBe(locations.length)
  expect(await readFile(join(out, 'robots.txt'), 'utf8')).toBe(`User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`)
})

test('throws a clear error when outDir does not exist', async () => {
  await expect(writeAgentFiles('/nonexistent/build/client', [])).rejects.toThrow(/react-router build/)
})

// A slug becomes a file path; one that isn't a plain kebab-case name could write outside outDir.
// The authoring rules reject it too, but those run in `npm test`, not in the build.
test('refuses a slug that is not a kebab-case name, and writes nothing', async () => {
  const out = await mkdtemp(join(tmpdir(), 'wl-'))
  const escaping: LibraryEntry = { ...entryA, meta: { ...entryA.meta, slug: '../../escape' } }
  await expect(writeAgentFiles(out, [entryB, escaping])).rejects.toThrow(/"\.\.\/\.\.\/escape" is not a valid slug/)
  await expect(readFile(join(out, 'c/b.md'), 'utf8')).rejects.toThrow(/ENOENT/)
})
