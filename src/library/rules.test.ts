import { resetCss } from './reset'
import { checkLibrary } from './rules'
import type { CategoryId } from './taxonomy'
import type { ComponentBrief, ComponentMeta, ComponentSources, LibraryEntry } from './types'

function validEntry(slug = 'hero-demo'): LibraryEntry {
  return {
    meta: {
      slug,
      name: 'Hero — Demo',
      category: 'hero',
      tags: ['centered'],
      description: 'A demo component.',
      preview: { kind: 'section' },
      wireframe: '┌──────────┐\n│ Headline │\n└──────────┘',
      brief: { layout: 'Layout.', hierarchy: 'Headline first.', usage: 'Use for a headline.', states: 'States.', responsive: 'Responsive.' },
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
  expect(check(validEntry(), 'hero-demo', ['hero-demo'])).toEqual([])
})

test.each<Case>([
  ['slug differs from folder', (e) => e, 'other', /folder/],
  ['duplicate slug', (e) => e, 'hero-demo', /duplicate/, ['hero-demo', 'hero-demo']],
  ['unknown category', (e) => ({ ...e, meta: { ...e.meta, category: 'nope' as CategoryId } }), 'hero-demo', /category/],
  ['unknown tag', (e) => withMeta(e, { tags: ['shiny' as never] }), 'hero-demo', /tag/],
  ['empty brief field', (e) => withBrief(e, { states: ' ' }), 'hero-demo', /brief\.states/],
  ['bad addedAt', (e) => withMeta(e, { addedAt: '8/10/26' }), 'hero-demo', /addedAt/],
  ['missing html', (e) => withSources(e, { html: '' }), 'hero-demo', /index\.html/],
  ['non-react import', (e) => withSources(e, { tsx: "import x from 'lucide-react'\n" + e.sources.tsx }), 'hero-demo', /import/],
  ['dark: variant', (e) => withSources(e, { tsx: e.sources.tsx.replace('p-8', 'p-8 dark:bg-black') }), 'hero-demo', /dark:/],
  ['hooks or handlers', (e) => withSources(e, { tsx: e.sources.tsx.replace('<section', '<section onClick={f}') }), 'hero-demo', /interactiv/],
  ['img without alt/size', (e) => withSources(e, { tsx: e.sources.tsx.replace('</section>', '<img src="x"/></section>') }), 'hero-demo', /img/],
  ['css missing scoped reset', (e) => withSources(e, { css: '.hero-demo{}' }), 'hero-demo', /reset/],
  ['unscoped css selector', (e) => withSources(e, { css: e.sources.css + '\nbody{margin:0}' }), 'hero-demo', /scope/],
  ['html root lacks slug class', (e) => withSources(e, { html: '<section>x</section>' }), 'hero-demo', /root/],
  ['html contains <link>/<style>/<script>', (e) => withSources(e, { html: e.sources.html + '<style></style>' }), 'hero-demo', /<style>/],
])('%s is reported', (_n, mutate, folder, pattern, slugs = ['hero-demo']) => {
  expect(check(mutate(validEntry()), folder, slugs).join('\n')).toMatch(pattern)
})

// Each mutation must produce exactly one violation: the intended one.
test.each<Case>([
  ['no default export', (e) => withSources(e, { tsx: e.sources.tsx.replace('export default ', '') }), 'hero-demo', /exactly one default export \(found 0\)/],
  ['two default exports', (e) => withSources(e, { tsx: e.sources.tsx + 'export default function Other() { return null }\n' }), 'hero-demo', /exactly one default export \(found 2\)/],
  ['side-effect import', (e) => withSources(e, { tsx: "import './demo.css'\n" + e.sources.tsx }), 'hero-demo', /imports "\.\/demo\.css"/],
  ['dynamic import', (e) => withSources(e, { tsx: "const load = () => import('lodash')\n" + e.sources.tsx }), 'hero-demo', /imports "lodash"/],
  ['non-kebab slug', () => validEntry('hero-Demo_X'), 'hero-Demo_X', /must be kebab-case/, ['hero-Demo_X']],
  ['empty name', (e) => withMeta(e, { name: ' ' }), 'hero-demo', /meta\.name is empty/],
  ['empty description', (e) => withMeta(e, { description: '' }), 'hero-demo', /meta\.description is empty/],
  ['no layout tags', (e) => withMeta(e, { tags: [] }), 'hero-demo', /at least one layout tag/],
  [
    'parity override without reason',
    (e) => withMeta(e, { preview: { kind: 'section', parity: { maxDiffRatio: 0.02, reason: ' ' } } }),
    'hero-demo',
    /parity tolerance without a reason/,
  ],
  ['@import in css', (e) => withSources(e, { css: e.sources.css + '\n@import "other.css";' }), 'hero-demo', /must not use @import/],
  ['reset not the first rule', (e) => withSources(e, { css: '.hero-demo { color: white; }\n' + e.sources.css }), 'hero-demo', /must begin with the scoped reset/],
  [
    'reset declaration changed',
    (e) => withSources(e, { css: e.sources.css.replace('line-height: 1.5;', 'line-height: 1.6;') }),
    'hero-demo',
    /must begin with the scoped reset .*line 3 should read: \.hero-demo \{ font-family: /,
  ],
  [
    'reset line left out',
    (e) => withSources(e, { css: e.sources.css.replace('.hero-demo summary { display: list-item; }\n', '') }),
    'hero-demo',
    /must begin with the scoped reset .*line 13 should read: \.hero-demo summary \{ display: list-item; \}/,
  ],
  ['unparseable css', (e) => withSources(e, { css: e.sources.css + '\n.hero-demo {' }), 'hero-demo', /does not parse/],
  ['selector scoped to a longer class (.hero-demox)', (e) => withSources(e, { css: e.sources.css + '\n.hero-demox { color: white; }' }), 'hero-demo', /"\.hero-demox" is not scoped under \.hero-demo/],
])('%s is the only violation', (_n, mutate, folder, pattern, slugs = ['hero-demo']) => {
  const violations = check(mutate(validEntry()), folder, slugs)
  expect(violations).toHaveLength(1)
  expect(violations[0]).toMatch(pattern)
})

test('the reset may use CRLF line endings and trailing whitespace', () => {
  const e = validEntry()
  expect(check(withSources(e, { css: e.sources.css.replace(/\n/g, ' \t\r\n') }), 'hero-demo', ['hero-demo'])).toEqual([])
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
  ['kebab-case svg attribute', 'export default () => <svg><path stroke-width="2" /></svg>', /strokeWidth/],
  ['kebab-case gradient stop', 'export default () => <svg><stop stop-color="#fff" /></svg>', /stopColor/],
  ['inline style', 'export default () => <p style={{ color: "red" }} />', /style.*Tailwind/],
  ['spaced inline style', 'export default () => <p style\n= {{ color: "red" }} />', /style.*Tailwind/],
  ['style element', 'export default () => <style>{"p { color: white; }"}</style>', /<style>/],
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
])('structural TSX check reports %s', (_name, tsx, pattern) => {
  const violations = check(withSources(validEntry(), { tsx }), 'hero-demo', ['hero-demo'])
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
  ['image in a comment', '/* <img src="x" /> */\nexport default () => <section />'],
])('structural TSX check accepts %s', (_name, tsx) => {
  expect(check(withSources(validEntry(), { tsx }), 'hero-demo', ['hero-demo'])).toEqual([])
})

test.each(['@keyframes spin', '@keyframes\nspin', '@-webkit-keyframes spin', '@keyframes "spin"'])('rejects unprefixed %s', (rule) => {
  const entry = validEntry()
  const violations = check(withSources(entry, { css: entry.sources.css + `\n${rule} { from { opacity: 0; } to { opacity: 1; } }` }), 'hero-demo', ['hero-demo'])
  expect(violations).toHaveLength(1)
  expect(violations[0]).toMatch(/keyframes.*start with.*demo/)
})

test.each(['@keyframes hero-demo-spin', '@-webkit-keyframes hero-demo-spin', '@keyframes "hero-demo-spin"'])('accepts prefixed %s', (rule) => {
  const entry = validEntry()
  expect(check(withSources(entry, { css: entry.sources.css + `\n${rule} { from { opacity: 0; } to { opacity: 1; } }` }), 'hero-demo', ['hero-demo'])).toEqual([])
})

// Mutations exercise the public library checker, including the allowed side of each rule.
const violations = (entry: LibraryEntry) => check(entry, entry.meta.slug, [entry.meta.slug])
const tsxClasses = (classes: string) => withSources(validEntry(), { tsx: `export default () => <section className="${classes}" />` })
const cssValue = (declaration: string) => withSources(validEntry(), { css: validEntry().sources.css + `\n.hero-demo { ${declaration} }` })

test.each([
  [{ slug: 'other-demo' }, /must start with.*hero-/],
  [{ name: 'Split hero' }, /must start with.*Hero/],
  [{ tags: ['minimal'] }, /unknown layout tag/],
])('validates pattern identity %j', (meta, pattern) => {
  expect(violations(withMeta(validEntry(), meta as Partial<ComponentMeta>)).join('\n')).toMatch(pattern)
})

test.each(['layout', 'hierarchy', 'states', 'responsive', 'usage'] as const)('requires brief.%s', (field) => {
  expect(violations(withBrief(validEntry(), { [field]: ' ' }))).toContain(`brief.${field} is empty`)
})

test.each([
  ['', /wireframe.*empty/],
  ['x'.repeat(65), /64 characters/],
  [Array(25).fill('│').join('\n'), /24 lines/],
  ['│\t│', /tabs/],
  ['│ \n│', /trailing spaces/],
  ['\n│', /blank first or last/],
  ['│\n', /blank first or last/],
])('rejects invalid wireframe %j', (wireframe, pattern) => {
  expect(violations(withMeta(validEntry(), { wireframe })).join('\n')).toMatch(pattern)
})

test('wireframe accepts its exact limits and blank interior lines', () => {
  const wireframe = ['─'.repeat(64), '', ...Array(22).fill('│')].join('\n')
  expect(violations(withMeta(validEntry(), { wireframe }))).toEqual([])
})

test.each([
  'bg-red-500', 'sm:hover:!text-sky-600', 'border-x-blue-100!', 'outline-indigo-900',
  'ring-red-300/50', 'ring-offset-zinc-200', 'divide-stone-100', 'fill-amber-500',
  'stroke-rose-400', 'decoration-green-500', 'placeholder:placeholder-teal-500',
  'caret-cyan-700', 'accent-lime-500', 'shadow-blue-100', 'from-red-500', 'via-red-500', 'to-red-500',
  'bg-[#fff]', 'text-[color:var(--ink)]', 'border-[rgb(0,0,0)]', 'outline-(--ink)',
  'hover:bg-linear-to-r', 'bg-radial', 'bg-conic-180', 'bg-gradient-to-r',
  "bg-[url('/x')]", 'backdrop-blur-sm', 'mix-blend-multiply', 'font-[Arial]', 'font-serif',
  'blur-sm', 'brightness-110', 'contrast-125', 'drop-shadow-sm', 'grayscale', 'hue-rotate-90',
  'invert', 'saturate-150', 'sepia', 'filter', 'filter-[blur(2px)]', 'animate-bounce',
])('rejects a class outside the kit: %s', (classes) => {
  expect(violations(tsxClasses(classes)).join('\n')).toMatch(/wireframe kit/)
})

test.each([
  'bg-white text-neutral-900 hover:bg-neutral-700/50',
  'border-x-neutral-200 outline-black ring-offset-white divide-transparent',
  'fill-none stroke-current decoration-inherit placeholder:text-neutral-500 caret-black accent-neutral-900 shadow-black/10',
  'text-base text-balance text-left text-ellipsis text-[18px] sm:text-4xl',
  'border border-t border-b border-x-2 border-solid outline-2 outline-offset-2 outline-hidden',
  'ring ring-2 ring-offset-2 shadow-sm shadow-lg shadow-none',
  'stroke-1.5 font-sans font-mono font-semibold animate-spin transition-colors',
  'group-open:rotate-180 peer-checked:block [&>svg]:size-5',
])('accepts kit colours and non-colour utilities: %s', (classes) => {
  expect(violations(tsxClasses(classes))).toEqual([])
})

test.each(['img', 'video', 'iframe', 'picture', 'source'])('rejects media element <%s> in both formats', (tag) => {
  const entry = withSources(validEntry(), { tsx: `export default () => <${tag} />`, html: `<section class="hero-demo"><${tag}></${tag}></section>` })
  expect(violations(entry).filter((v) => v.includes(`<${tag}>`))).toHaveLength(2)
})

test.each(['src', 'srcSet', 'style'])('rejects TSX attribute %s', (attribute) => {
  const entry = withSources(validEntry(), { tsx: `export default () => <div ${attribute}={value} />` })
  expect(violations(entry).join('\n')).toMatch(new RegExp(attribute, 'i'))
})

test.each(['SRC', 'srcset', 'style'])('rejects HTML attribute %s with spaced and unquoted values', (attribute) => {
  expect(violations(withSources(validEntry(), { html: `<section class="hero-demo" ${attribute} = value></section>` })).join('\n')).toMatch(new RegExp(attribute, 'i'))
})

test.each(['fill', 'stroke'])('restricts SVG %s in both formats', (attribute) => {
  for (const value of ['#fff', 'red', 'url(#paint)', '{colour}']) {
    const entry = withSources(validEntry(), { tsx: `export default () => <svg ${attribute}="${value}" />`, html: `<section class="hero-demo"><svg ${attribute}="${value}"></svg></section>` })
    expect(violations(entry).filter((v) => v.includes('none or currentColor'))).toHaveLength(2)
  }
  for (const value of ['none', 'currentColor']) {
    expect(violations(withSources(validEntry(), { tsx: `export default () => <svg ${attribute}={'${value}'} />`, html: `<section class="hero-demo"><svg ${attribute}="${value}"></svg></section>` }))).toEqual([])
  }
  expect(violations(withSources(validEntry(), { tsx: `export default () => <svg ${attribute}={colour} />` })).join('\n')).toMatch(/none or currentColor/)
})

test.each([
  'color: #aab;', 'color: #ababaaff;', 'color: rgb(1 2 1 / .5);', 'color: rgb(10%, 20%, 10%);',
  'color: oklch(50% .001 none);', 'border: 1px solid rebeccapurple;', 'box-shadow: 0 1px 2px red;',
  'color: hsl(0 0% 50%);', 'color: lab(50% 0 0);', 'color: CanvasText;', 'color: hsl(0 var(--saturation) 50%);', 'color: oklch(.5 calc(.1) none);',
  'background: linear-gradient(white, black);', 'background: radial-gradient(white, black);',
  'background: conic-gradient(white, black);', 'background: url("x");', 'font-family: Arial;',
])('rejects CSS outside the kit: %s', (declaration) => {
  expect(violations(cssValue(declaration)).join('\n')).toMatch(/achromatic|gradient|url\(|font-family/)
})

test.each([
  'color: rgb(\n1 1 1\n);', 'color: #fff;', 'color: #ABABAB;', 'color: #7778;', 'color: #12121280;',
  'color: rgb(1 1 1 / .5);', 'color: rgba(10%, 10%, 10%, .5);', 'color: rgb(0 0.0 0%);',
  'color: oklch(50% 0 none / 50%);', 'color: oklch(.5 0 120);',
  'transition: background-color 150ms ease;', 'border: 1px solid black;', 'background: transparent;', 'color: inherit;',
  'box-shadow: 0 1px 2px rgb(0 0 0 / .1);', 'font-family: inherit;',
  'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
])('accepts achromatic CSS: %s', (declaration) => {
  expect(violations(cssValue(declaration))).toEqual([])
})

test('allows system colours only within forced-colors media', () => {
  const entry = validEntry()
  expect(violations(withSources(entry, { css: entry.sources.css + '\n@media (forced-colors: active) { .hero-demo { color: CanvasText; border-color: ButtonText; } }' }))).toEqual([])
})

test.each(['@import "x.css";', '@font-face { font-family: inherit; }'])('rejects font-loading at-rule %s', (rule) => {
  expect(violations(withSources(validEntry(), { css: validEntry().sources.css + '\n' + rule })).join('\n')).toMatch(/must not use @/)
})

test('HTML comments and text cannot be mistaken for media or attributes', () => {
  expect(violations(withSources(validEntry(), { html: '<!-- <img src="x" style="x"> --><section class="hero-demo">src="x" &lt;img&gt;</section>' }))).toEqual([])
})

test.each([
  ['bg-red-500', false],
  ['sm:hover:!text-neutral-900/50', true],
])('checks statically declared class strings: %s', (classes, allowed) => {
  const tsx = `const classes = "${classes}"; export default () => <section className={classes} />`
  const result = violations(withSources(validEntry(), { tsx }))
  if (allowed) expect(result).toEqual([])
  else expect(result.join('\n')).toMatch(/wireframe kit/)
})
