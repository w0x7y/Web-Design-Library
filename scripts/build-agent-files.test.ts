import { mkdtemp, readFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { buildAgentFiles } from '../src/library/agent-files'
import type { ComponentMeta, LibraryEntry } from '../src/library/types'
import { writeAgentFiles } from './build-agent-files'

const baseMeta: ComponentMeta = {
  slug: 'a',
  name: 'Alpha hero',
  category: 'hero',
  tags: ['centered'],
  description: 'A centered hero.',
  preview: { kind: 'section' },
  wireframe: '┌──┐\n│UI│\n└──┘',
  brief: {
    layout: 'Centered column.',
    hierarchy: 'Neutral palette.', usage: 'Use this layout.',
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

test('writes every built agent and discovery file with identical paths and bytes', async () => {
  const out = await mkdtemp(join(tmpdir(), 'wl-'))
  const entries = [entryA, entryB]
  const files = buildAgentFiles(entries)
  const written = await writeAgentFiles(out, entries)
  expect(written).toEqual(files.map(({ path }) => path))
  expect(await Promise.all(written.map(async (path) => ({ path, content: await readFile(join(out, path), 'utf8') })))).toEqual(files)
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
