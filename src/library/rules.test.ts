import { checkComponent } from './rules'
import type { CategoryId } from './taxonomy'
import type { ComponentBrief, ComponentMeta, ComponentSources, LibraryEntry } from './types'

const resetCss = (slug: string) => `/* Scoped reset: mirrors Tailwind preflight for this component only */
.${slug}, .${slug} *, .${slug} *::before, .${slug} *::after { box-sizing: border-box; margin: 0; padding: 0; border: 0 solid; }
.${slug} { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; line-height: 1.5; -webkit-text-size-adjust: 100%; tab-size: 4; }
.${slug} :is(h1, h2, h3, h4, h5, h6) { font-size: inherit; font-weight: inherit; }
.${slug} a { color: inherit; text-decoration: inherit; }
.${slug} :is(b, strong) { font-weight: bolder; }
.${slug} :is(ol, ul, menu) { list-style: none; }
.${slug} :is(img, svg, video, canvas, picture) { display: block; vertical-align: middle; }
.${slug} :is(img, video) { max-width: 100%; height: auto; }
.${slug} :is(button, input, select, optgroup, textarea) { font: inherit; letter-spacing: inherit; color: inherit; background-color: transparent; border-radius: 0; opacity: 1; }
.${slug} ::placeholder { opacity: 1; color: color-mix(in oklab, currentcolor 50%, transparent); }
.${slug} table { text-indent: 0; border-color: inherit; border-collapse: collapse; }
.${slug} summary { display: list-item; }
`

function validEntry(): LibraryEntry {
  return {
    meta: {
      slug: 'demo',
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
      html: '<section class="demo">Hi</section>\n',
      css: resetCss('demo'),
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

type Case = [name: string, mutate: (e: LibraryEntry) => LibraryEntry, folder: string, pattern: RegExp, slugs?: string[]]

test('valid entry has no violations', () => {
  expect(checkComponent(validEntry(), 'demo', ['demo'])).toEqual([])
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
  expect(checkComponent(mutate(validEntry()), folder, slugs).join('\n')).toMatch(pattern)
})
