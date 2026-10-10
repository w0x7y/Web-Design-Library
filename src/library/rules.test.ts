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

test.each(['', ' Inter', 'Inter ', 'Inter&display=block', 'Inter" onload="alert(1)', 'Inter:wght', 'Inter:wght@', 'Inter:wght@heavy', 'Inter:wght@900..100', 'Inter:ital,wght@0', 'Inter:wght,wght@400,500', 'Inter:wght@400..500;450..600', 'Inter:wght@400..500;500..600', 'Inter:wght@400;400', 'Inter:wght@400..400'])('rejects malformed font metadata: %j', (family) => {
  const entry = withSources(withMeta(validEntry(), { fonts: [family] }), {
    tsx: `// Fonts: ${family.split(':')[0]}\n${validEntry().sources.tsx}`,
  })
  expect(check(entry, 'demo', ['demo']).join('\n')).toMatch(/meta\.fonts/)
})

test.each(['Bagel Fat One', 'IBM Plex Sans:wght@400..700', 'Martian Mono:wdth,wght@75..112.5,100..800', 'Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800'])('accepts Google Fonts families and axis tuples: %s', (family) => {
  const entry = withSources(withMeta(validEntry(), { fonts: [family] }), {
    tsx: `// Fonts: ${family.split(':')[0]}\n${validEntry().sources.tsx}`,
  })
  expect(check(entry, 'demo', ['demo'])).toEqual([])
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

test.each<[string, string, RegExp]>([
  ['spaced event handler', 'export default () => <button onClick = {f} />', /interactiv/],
  ['multiline event handler', 'export default () => <input onChange\n= {f} />', /interactiv/],
  ['boolean event handler', 'export default () => <button onClick />', /interactiv/],
  ['spaced hook call', 'export default function Demo() { useState (0); return null }', /interactiv/],
  ['member hook call', 'export default function Demo() { React.useEffect (() => {}); return null }', /interactiv/],
  ['computed member hook call', "export default function Demo() { React['useState'] (0); return null }", /interactiv/],
  ['custom hook call', 'export default function Demo() { useDemo (); return null }', /interactiv/],
  ['function props', 'export default function Demo(props) { return null }', /no parameters/],
  ['destructured arrow props', 'export default ({ title }) => <p>{title}</p>', /no parameters/],
  ['optional typed props', 'export default function Demo(props?: {}) { return null }', /no parameters/],
  ['named function props', 'function Demo(props) { return null }\nexport default Demo', /no parameters/],
  ['named arrow props', 'const Demo = (props = {}) => null\nexport default Demo', /no parameters/],
  ['inline style', 'export default () => <p style={{ color: "red" }} />', /style.*Tailwind/],
  ['spaced inline style', 'export default () => <p style\n= {{ color: "red" }} />', /style.*Tailwind/],
  ['style element', 'export default () => <style>{"p { color: red; }"}</style>', /<style>/],
  ['script element', 'export default () => <script />', /<script>/],
  ['non-react re-export', "export { Thing } from 'other'\nexport default () => null", /imports "other"/],
  ['multiline import', "import {\n Thing\n} from\n 'other'\nexport default () => null", /imports "other"/],
  ['spaced dynamic import', "const load = () => import ( 'other' )\nexport default () => null", /imports "other"/],
  ['computed dynamic import', 'const load = () => import(moduleName)\nexport default () => null', /imports.*literal/],
  ['import equals', "import Thing = require('other')\nexport default () => null", /imports "other"/],
  ['import type expression', "type Thing = import('other').Thing\nexport default () => null", /imports "other"/],
  ['default re-export', "export { default } from 'react'", /no parameters/],
  ['non-function default', 'export default {}', /no parameters/],
  ['two named default exports', 'const Demo = () => null\nexport { Demo as default }\nexport default Demo', /found 2/],
  ['expression class dark variant', 'export default () => <p className={"dark:bg-black"} />', /dark:/],
  ['conditional class dark variant', 'export default () => <p className={ok ? "p-8" : "sm:dark:bg-black"} />', /dark:/],
  ['template class dark variant', 'export default () => <p className={`p-8 ${size} dark:bg-black`} />', /dark:/],
  ['image missing height', `export default () => <img src="${IMAGES.officeBright}" alt = "" width = {1600} />`, /missing height/],
  ['image computed src', 'export default () => <img src={image} alt="" width={1} height={1} />', /src \(not a literal\)/],
  ['image interpolated src', `export default () => <img src={\`${IMAGES.officeBright}\${suffix}\`} alt="" width={1} height={1} />`, /src \(not a literal\)/],
])('structural TSX check reports %s', (_name, tsx, pattern) => {
  const violations = check(withSources(validEntry(), { tsx }), 'demo', ['demo'])
  expect(violations).toHaveLength(1)
  expect(violations[0]).toMatch(pattern)
})

test.each<[string, string]>([
  ['arrow default', 'export default () => <section />'],
  ['function expression default', 'export default function () { return <section /> }'],
  ['named function default', 'export default function Demo() { return <section /> }'],
  ['separate named function default', 'function Demo() { return <section /> }\nexport default Demo'],
  ['separate named arrow default', 'const Demo = () => <section />\nexport default Demo'],
  ['named default export clause', 'const Demo = () => <section />\nexport { Demo as default }'],
  ['parenthesized arrow default', 'export default (() => <section />)'],
  ['comments mention forbidden syntax', '// onClick= useState( export default dark:bg-black\nexport default () => <section />'],
  ['text mentions forbidden syntax', 'export default () => <p>onClick= useState( dark:bg-black</p>'],
  ['string mentions default export', 'export default () => <p>{"export default"}</p>'],
  ['React imports', "import React from 'react'\nimport 'react'\nconst load = () => import('react')\nexport type { ReactNode } from 'react'\nexport default () => <section />"],
  ['hook reference without a call', 'const hook = React.useState\nexport default () => <section />'],
  ['spaced image attributes', `export default () => <img src = "${IMAGES.officeBright}" alt = "Office" width = {1600} height = {1067} />`],
  ['expression image literal', `export default () => <img src = {'${IMAGES.officeBright}'} alt="" width={1600} height={1067} />`],
  ['template image literal', `export default () => <img src={\`${IMAGES.officeBright}\`} alt="" width={1600} height={1067} />`],
  ['image attribute contains greater-than', `export default () => <img alt={ok ? "Office > lobby" : "Office"} src="${IMAGES.officeBright}" width={1600} height={1067} />`],
  ['image in a comment', '/* <img src="x" /> */\nexport default () => <section />'],
])('structural TSX check accepts %s', (_name, tsx) => {
  expect(check(withSources(validEntry(), { tsx }), 'demo', ['demo'])).toEqual([])
})

test.each(['@keyframes spin', '@keyframes\nspin', '@-webkit-keyframes spin', '@keyframes "spin"'])('rejects unprefixed %s', (rule) => {
  const entry = validEntry()
  const violations = check(withSources(entry, { css: entry.sources.css + `\n${rule} { from { opacity: 0; } to { opacity: 1; } }` }), 'demo', ['demo'])
  expect(violations).toHaveLength(1)
  expect(violations[0]).toMatch(/keyframes.*start with.*demo/)
})

test.each(['@keyframes demo-spin', '@-webkit-keyframes demo-spin', '@keyframes "demo-spin"'])('accepts prefixed %s', (rule) => {
  const entry = validEntry()
  expect(check(withSources(entry, { css: entry.sources.css + `\n${rule} { from { opacity: 0; } to { opacity: 1; } }` }), 'demo', ['demo'])).toEqual([])
})
