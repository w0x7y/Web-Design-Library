import { mkdtemp, readFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { buildAgentMarkdown, buildLlmsTxt } from '../src/library/brief'
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

test('writes one .md per component and llms.txt', async () => {
  const out = await mkdtemp(join(tmpdir(), 'wl-'))
  const written = await writeAgentFiles(out, [entryA, entryB])
  expect(written.sort()).toEqual(['c/a.md', 'c/b.md', 'llms.txt'])
  expect(await readFile(join(out, 'c/a.md'), 'utf8')).toBe(buildAgentMarkdown(entryA.meta, entryA.sources))
  expect(await readFile(join(out, 'c/b.md'), 'utf8')).toBe(buildAgentMarkdown(entryB.meta, entryB.sources))
  expect(await readFile(join(out, 'llms.txt'), 'utf8')).toBe(buildLlmsTxt([entryA.meta, entryB.meta]))
})

test('throws a clear error when outDir does not exist', async () => {
  await expect(writeAgentFiles('/nonexistent/build/client', [])).rejects.toThrow(/react-router build/)
})
