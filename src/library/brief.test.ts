import { SITE } from '../site'
import { buildAgentMarkdown, buildBrief, buildHtmlSnippet, buildLlmsTxt, codeForFormat } from './brief'
import type { ComponentMeta, ComponentSources } from './types'

const meta: ComponentMeta = {
  slug: 'demo',
  name: 'Demo hero',
  category: 'hero',
  tags: ['minimal'],
  description: 'A centered hero with a headline and two buttons.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout: 'Centered column, max-w-3xl.',
    style: 'Neutral palette, large tracking-tight headline.',
    states: 'Buttons have hover and focus-visible styles.',
    responsive: 'Stacks buttons below 640px.',
  },
  addedAt: '2026-10-08',
}

const src: ComponentSources = {
  tsx: 'export default function Demo() {\n  return <section className="p-8">Hi</section>\n}\n',
  html: '\n<section class="demo">Hi</section>\n\n',
  css: '\n.demo { padding: 2rem; }\n\n',
}

const withFonts = (fonts: string[]): ComponentMeta => ({ ...meta, fonts })

const metaA_hero: ComponentMeta = meta
const metaB_pricing: ComponentMeta = {
  ...meta,
  slug: 'plans',
  name: 'Plans grid',
  category: 'pricing',
  description: 'Three pricing tiers.',
}

test('html snippet = font link, style block, markup', () => {
  expect(buildHtmlSnippet(withFonts(['Inter:wght@400']), src)).toBe(
    `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap">\n<style>\n${src.css.trim()}\n</style>\n${src.html.trim()}\n`)
  expect(buildHtmlSnippet(meta, src).startsWith('<style>\n')).toBe(true)
})
test('codeForFormat returns raw tsx for react', () => {
  expect(codeForFormat(meta, src, 'react')).toBe(src.tsx)
})
test('codeForFormat returns the html snippet for html', () => {
  expect(codeForFormat(meta, src, 'html')).toBe(buildHtmlSnippet(meta, src))
})
test('brief header and sections', () => {
  const b = buildBrief(meta, src, 'react')
  expect(b.startsWith(
    '# Demo hero (Web Library)\nSource: https://web-design-library.vercel.app/c/demo\n\nBuild this UI component: ' + meta.description + '\n')).toBe(true)
  for (const h of ['## Layout\n' + meta.brief.layout, '## Visual style\n' + meta.brief.style,
                   '## States\n' + meta.brief.states, '## Responsive\n' + meta.brief.responsive])
    expect(b).toContain(h)
  expect(b).toContain('Fonts: system sans-serif')
  expect(b).toContain('## Reference code (React + Tailwind v4)\n```tsx\n' + src.tsx.trimEnd() + '\n```')
  expect(b.trimEnd().endsWith(
    'Adapt names, tokens and conventions to the existing project; keep the layout, hierarchy and spacing rhythm.')).toBe(true)
})
test('fonts line directly follows the style text', () => {
  expect(buildBrief(meta, src, 'react')).toContain(`## Visual style\n${meta.brief.style}\nFonts: system sans-serif\n\n## States`)
})
test('brief html format has html and css blocks', () => {
  const b = buildBrief(meta, src, 'html')
  expect(b).toContain('## Reference code (HTML + CSS)\n```html\n')
  expect(b).toContain('```css\n' + src.css.trim())
  expect(b).not.toContain('```tsx')
})
test('brief html block carries the font link, css block does not', () => {
  const b = buildBrief(withFonts(['Inter:wght@400']), src, 'html')
  expect(b).toContain('```html\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap">\n' + src.html.trim() + '\n```')
  expect(b).toContain('```css\n' + src.css.trim() + '\n```')
})
test('fonts line lists display names', () => {
  expect(buildBrief(withFonts(['Instrument Serif:ital@0;1']), src, 'react')).toContain('Fonts: Instrument Serif')
  expect(buildBrief(withFonts(['Inter:wght@400', 'Instrument Serif:ital@0;1']), src, 'react')).toContain('Fonts: Inter, Instrument Serif\n')
})
test('code containing ``` gets a longer fence', () => {
  const b = buildBrief(meta, { ...src, tsx: 'const s = "```"\n' }, 'react')
  expect(b).toContain('````tsx\nconst s = "```"\n````')
})
test('fence length tracks the longest backtick run, minimum 3', () => {
  expect(buildBrief(meta, { ...src, tsx: 'a `b` c ``` d ````` e\n' }, 'react')).toContain('``````tsx\n')
  expect(buildBrief(meta, { ...src, tsx: 'a `b` c\n' }, 'react')).toContain('```tsx\n')
})
test('agent markdown includes both formats', () => {
  const md = buildAgentMarkdown(meta, src)
  expect(md).toContain('## Reference code (React + Tailwind v4)')
  expect(md).toContain('## Reference code (HTML + CSS)')
  expect(md.startsWith('# Demo hero (Web Library)\nSource: ' + SITE.url + '/c/demo\n')).toBe(true)
  expect(md.trimEnd().endsWith(
    'Adapt names, tokens and conventions to the existing project; keep the layout, hierarchy and spacing rhythm.')).toBe(true)
})
test('llms.txt groups by group and category in taxonomy order, skipping empty ones', () => {
  const txt = buildLlmsTxt([metaB_pricing, metaA_hero])
  expect(txt.startsWith('# Web Library\n\n> Copy-paste UI layouts for developers building with AI agents.\n\n')).toBe(true)
  expect(txt.indexOf('### Hero')).toBeLessThan(txt.indexOf('### Pricing'))
  expect(txt).toContain('- [Demo hero](https://web-design-library.vercel.app/c/demo.md): ' + metaA_hero.description)
  expect(txt).not.toContain('## Elements')
})
test('llms.txt intro, group heading and entry layout', () => {
  expect(buildLlmsTxt([metaA_hero])).toBe(
    '# Web Library\n\n' +
    '> Copy-paste UI layouts for developers building with AI agents.\n\n' +
    'Copy-paste UI components as React + Tailwind v4 or HTML + CSS. Each link returns a markdown brief with full source code.\n\n' +
    '## Sections\n\n' +
    '### Hero\n\n' +
    '- [Demo hero](https://web-design-library.vercel.app/c/demo.md): A centered hero with a headline and two buttons.\n')
})
// llms.txt lists components in library order, the order the site shows them in: taxonomy, then name by
// UTF-16 code unit (capitals before lowercase, so not localeCompare's order), then slug.
test('llms.txt lists entries in library order', () => {
  const entry = (slug: string, name: string, category: ComponentMeta['category'] = 'hero'): ComponentMeta =>
    ({ ...meta, slug, name, category, description: `${name}.` })
  const txt = buildLlmsTxt([
    entry('btn', 'Solid button', 'buttons'),
    entry('lower', 'alpha hero'),
    entry('zed-2', 'Zed hero'),
    entry('plans', 'Plans grid', 'pricing'),
    entry('zed', 'Zed hero'),
    entry('demo', 'Demo hero'),
  ])
  const url = 'https://web-design-library.vercel.app/c'
  expect(txt.slice(txt.indexOf('## '))).toBe(
    '## Sections\n\n' +
    '### Hero\n\n' +
    `- [Demo hero](${url}/demo.md): Demo hero.\n` +
    `- [Zed hero](${url}/zed.md): Zed hero.\n` +
    `- [Zed hero](${url}/zed-2.md): Zed hero.\n` +
    `- [alpha hero](${url}/lower.md): alpha hero.\n\n` +
    '### Pricing\n\n' +
    `- [Plans grid](${url}/plans.md): Plans grid.\n\n` +
    '## Elements\n\n' +
    '### Buttons\n\n' +
    `- [Solid button](${url}/btn.md): Solid button.\n`)
})
