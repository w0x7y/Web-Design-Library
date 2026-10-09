import { IMAGES } from './assets'
import { resetCss } from './reset'
import { checkLibrary } from './rules'
import type { CategoryId } from './taxonomy'
import type { ComponentBrief, ComponentMeta, ComponentSources, LibraryEntry } from './types'

function validEntry(slug = 'demo'): LibraryEntry {
  return {
    meta: {
      slug,
      name: 'Demo',
      category: 'hero',
      tags: ['minimal'],
      description: 'A demo component.',
      preview: { kind: 'section' },
      fonts: [],
      brief: { layout: 'Layout.', style: 'Style.', states: 'States.', responsive: 'Responsive.' },
      addedAt: '2026-10-08',
    },
    sources: {
      tsx: 'export default function Demo() { return <section className="p-8">Hi</section> }\n',
      html: `<section class="${slug}">Hi</section>\n`,
      css: resetCss(slug),
    },
  }
}

const withMeta = (e: LibraryEntry, meta: Partial<ComponentMeta>): LibraryEntry => ({
  ...e,
  meta: { ...e.meta, ...meta },
})
const withBrief = (e: LibraryEntry, brief: Partial<ComponentBrief>): LibraryEntry => ({
  ...e,
  meta: { ...e.meta, brief: { ...e.meta.brief, ...brief } },
})
const withSources = (e: LibraryEntry, sources: Partial<ComponentSources>): LibraryEntry => ({
  ...e,
  sources: { ...e.sources, ...sources },
})

/**
 * The violations of `entry` in folder `folder`, checked as one item of a library whose slugs are
 * `slugs`: every slug after the first is another component, in a folder of its own.
 */
function check(entry: LibraryEntry, folder: string, slugs: string[]): string[] {
  const others = slugs.slice(1).map((slug, index) => ({ folder: `other-${index}`, entry: withMeta(entry, { slug }) }))
  return checkLibrary([{ folder, entry }, ...others])[0].violations
}

type Case = [name: string, mutate: (e: LibraryEntry) => LibraryEntry, folder: string, pattern: RegExp, slugs?: string[]]

test('valid entry has no violations', () => {
  expect(check(validEntry(), 'demo', ['demo'])).toEqual([])
})

test.each<Case>([
  ['slug differs from folder', (e) => e, 'other', /folder/],
  ['duplicate slug', (e) => e, 'demo', /duplicate/, ['demo', 'demo']],
  ['unknown category', (e) => ({ ...e, meta: { ...e.meta, category: 'nope' as CategoryId } }), 'demo', /category/],
  ['unknown tag', (e) => withMeta(e, { tags: ['shiny' as never] }), 'demo', /tag/],
  ['empty brief field', (e) => withBrief(e, { states: ' ' }), 'demo', /brief\.states/],
  ['bad addedAt', (e) => withMeta(e, { addedAt: '8/10/26' }), 'demo', /addedAt/],
  ['missing html', (e) => withSources(e, { html: '' }), 'demo', /index\.html/],
  ['non-react import', (e) => withSources(e, { tsx: "import x from 'lucide-react'\n" + e.sources.tsx }), 'demo', /import/],
  ['dark: variant', (e) => withSources(e, { tsx: e.sources.tsx.replace('p-8', 'p-8 dark:bg-black') }), 'demo', /dark:/],
  ['hooks or handlers', (e) => withSources(e, { tsx: e.sources.tsx.replace('<section', '<section onClick={f}') }), 'demo', /interactiv/],
  ['img without alt/size', (e) => withSources(e, { tsx: e.sources.tsx.replace('</section>', '<img src="x"/></section>') }), 'demo', /img/],
  [
    'img src not in IMAGES',
    (e) =>
      withSources(e, {
        tsx: e.sources.tsx.replace('</section>', '<img src="https://example.com/a.jpg" alt="" width="1" height="1"/></section>'),
      }),
    'demo',
    /IMAGES/,
  ],
  ['fonts without comment', (e) => withMeta(e, { fonts: ['Inter:wght@400'] }), 'demo', /Fonts:/],
  ['css missing scoped reset', (e) => withSources(e, { css: '.demo{}' }), 'demo', /reset/],
  ['unscoped css selector', (e) => withSources(e, { css: e.sources.css + '\nbody{margin:0}' }), 'demo', /scope/],
  ['html root lacks slug class', (e) => withSources(e, { html: '<section>x</section>' }), 'demo', /root/],
  ['html contains <link>/<style>/<script>', (e) => withSources(e, { html: e.sources.html + '<style></style>' }), 'demo', /<style>/],
])('%s is reported', (_n, mutate, folder, pattern, slugs = ['demo']) => {
  expect(check(mutate(validEntry()), folder, slugs).join('\n')).toMatch(pattern)
})

// Each mutation must produce exactly one violation: the intended one.
test.each<Case>([
  ['no default export', (e) => withSources(e, { tsx: e.sources.tsx.replace('export default ', '') }), 'demo', /exactly one default export \(found 0\)/],
  ['two default exports', (e) => withSources(e, { tsx: e.sources.tsx + 'export default function Other() { return null }\n' }), 'demo', /exactly one default export \(found 2\)/],
  ['side-effect import', (e) => withSources(e, { tsx: "import './demo.css'\n" + e.sources.tsx }), 'demo', /imports "\.\/demo\.css"/],
  ['dynamic import', (e) => withSources(e, { tsx: "const load = () => import('lodash')\n" + e.sources.tsx }), 'demo', /imports "lodash"/],
  [
    'fonts comment names only some fonts',
    (e) => withSources(withMeta(e, { fonts: ['Inter:wght@400', 'Lora:ital@0;1'] }), { tsx: '// Fonts: Inter\n' + e.sources.tsx }),
    'demo',
    /comment does not name Lora/,
  ],
  [
    'html img missing alt/size',
    (e) => withSources(e, { html: `<section class="demo"><img src="${IMAGES.officeBright}"></section>` }),
    'demo',
    /index\.html: <img> is missing alt, width, height/,
  ],
  [
    'html img src not in IMAGES',
    (e) => withSources(e, { html: '<section class="demo"><img src="https://example.com/a.jpg" alt="" width="1" height="1"></section>' }),
    'demo',
    /index\.html: <img> src "https:\/\/example\.com\/a\.jpg" is not a URL from IMAGES/,
  ],
  ['non-kebab slug', () => validEntry('Demo_X'), 'Demo_X', /must be kebab-case/, ['Demo_X']],
  ['empty name', (e) => withMeta(e, { name: ' ' }), 'demo', /meta\.name is empty/],
  ['empty description', (e) => withMeta(e, { description: '' }), 'demo', /meta\.description is empty/],
  ['no style tags', (e) => withMeta(e, { tags: [] }), 'demo', /at least one style tag/],
  [
    'parity override without reason',
    (e) => withMeta(e, { preview: { kind: 'section', parity: { maxDiffRatio: 0.02, reason: ' ' } } }),
    'demo',
    /parity tolerance without a reason/,
  ],
  ['@import in css', (e) => withSources(e, { css: e.sources.css + '\n@import url("fonts.css");' }), 'demo', /must not use @import/],
  ['reset not the first rule', (e) => withSources(e, { css: '.demo { color: red; }\n' + e.sources.css }), 'demo', /must begin with the scoped reset/],
  [
    'reset declaration changed',
    (e) => withSources(e, { css: e.sources.css.replace('line-height: 1.5;', 'line-height: 1.6;') }),
    'demo',
    /must begin with the scoped reset .*line 3 should read: \.demo \{ font-family: /,
  ],
  [
    'reset line left out',
    (e) => withSources(e, { css: e.sources.css.replace('.demo summary { display: list-item; }\n', '') }),
    'demo',
    /must begin with the scoped reset .*line 13 should read: \.demo summary \{ display: list-item; \}/,
  ],
  ['unparseable css', (e) => withSources(e, { css: e.sources.css + '\n.demo {' }), 'demo', /does not parse/],
  ['selector scoped to a longer class (.demox)', (e) => withSources(e, { css: e.sources.css + '\n.demox { color: red; }' }), 'demo', /"\.demox" is not scoped under \.demo/],
])('%s is the only violation', (_n, mutate, folder, pattern, slugs = ['demo']) => {
  const violations = check(mutate(validEntry()), folder, slugs)
  expect(violations).toHaveLength(1)
  expect(violations[0]).toMatch(pattern)
})

test('the reset may use CRLF line endings and trailing whitespace', () => {
  const e = validEntry()
  expect(check(withSources(e, { css: e.sources.css.replace(/\n/g, ' \t\r\n') }), 'demo', ['demo'])).toEqual([])
})

test('allowed patterns raise no violations', () => {
  const e = validEntry()
  const entry = withSources(withMeta(e, { fonts: ['Inter:wght@400', 'Lora:ital@0;1'] }), {
    tsx: [
      '// Fonts: Inter, Lora',
      "import { type ReactNode } from 'react'",
      `export default function Demo() { return <section className="p-8 hover:bg-zinc-50"><img src="${IMAGES.officeBright}" alt="" width={1600} height={1067} /></section> }`,
      'export type Slot = ReactNode',
      '',
    ].join('\n'),
    html: `<!-- Demo -->\n<section class="demo hero"><img src="${IMAGES.officeBright}" alt="" width="1600" height="1067"></section>\n`,
    css:
      e.sources.css +
      '\n@keyframes demo-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }' +
      '\n@media (width >= 40rem) { .demo .demo__title { font-size: 2rem; } }' +
      '\n.demo:hover { color: red; }',
  })
  expect(check(entry, 'demo', ['demo'])).toEqual([])
})
