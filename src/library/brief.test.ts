import { SITE } from '../site'
import { buildAgentMarkdown, buildBrief, codeForFormat } from './brief'
import type { ComponentMeta, ComponentSources } from './types'

const meta: ComponentMeta = {
  slug: 'demo',
  name: 'Demo hero',
  category: 'hero',
  tags: ['centered'],
  description: 'A centered hero with a headline and two buttons.',
  preview: { kind: 'section' },
  wireframe: '┌──────────┐\n│ Headline │\n└──────────┘',
  brief: {
    layout: 'Centered column, max-w-3xl.',
    hierarchy: 'Headline, supporting copy, then actions.',
    usage: 'Use for a message with no media.',
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

test('codeForFormat returns raw tsx for react', () => {
  expect(codeForFormat(meta, src, 'react')).toBe(src.tsx)
})
test('codeForFormat returns the html snippet for html', () => {
  expect(codeForFormat(meta, src, 'html')).toBe(`<style>\n${src.css.trim()}\n</style>\n${src.html.trim()}\n`)
})
test('brief framing and five sections follow the layout pattern contract', () => {
  const b = buildBrief(meta, src, 'react')
  expect(b).toBe([
    '# Demo hero (Patternbook)\nSource: ' + SITE.url + '/c/demo',
    'Layout pattern: A centered hero with a headline and two buttons.\nThis is a neutral wireframe. Keep its structure, hierarchy and responsive behaviour; take colours, type, radius, imagery and copy from the host project.',
    '## Wireframe\n```text\n┌──────────┐\n│ Headline │\n└──────────┘\n```',
    '## Layout\nCentered column, max-w-3xl.',
    '## Hierarchy and content\nHeadline, supporting copy, then actions.',
    '## States\nButtons have hover and focus-visible styles.',
    '## Responsive\nStacks buttons below 640px.',
    '## When to use\nUse for a message with no media.',
    '## Reference code (React + Tailwind v4)\n```tsx\n' + src.tsx.trimEnd() + '\n```',
    "Map the neutral greys to the host project's design tokens and replace slot copy with real content; keep the regions, hierarchy and responsive behaviour.",
  ].join('\n\n') + '\n')
  expect(b).not.toContain('Fonts:')
})
test('brief html format has html and css blocks', () => {
  const b = buildBrief(meta, src, 'html')
  expect(b).toContain('## Reference code (HTML + CSS)\n```html\n')
  expect(b).toContain('```css\n' + src.css.trim())
  expect(b).not.toContain('```tsx')
})
test('HTML reference code contains only markup and CSS, with no font link', () => {
  const b = buildBrief(meta, src, 'html')
  expect(b).toContain('```html\n<section class="demo">Hi</section>\n```')
  expect(b).not.toContain('<link')
  expect(b).not.toContain('Fonts:')
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
  expect(md.startsWith('# Demo hero (Patternbook)\nSource: ' + SITE.url + '/c/demo\n')).toBe(true)
  expect(md.trimEnd().endsWith(
    "Map the neutral greys to the host project's design tokens and replace slot copy with real content; keep the regions, hierarchy and responsive behaviour.")).toBe(true)
})
