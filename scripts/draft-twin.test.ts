import { readFile } from 'node:fs/promises'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { parseFragment } from 'parse5'
import postcss from 'postcss'
import { describe, expect, it } from 'vitest'
import { generateTwin, resolveValue } from './draft-twin'
import { resetCss } from '../src/library/reset'

const theme = await readFile(new URL('../node_modules/tailwindcss/theme.css', import.meta.url), 'utf8')
const generate = (markup: string) => generateTwin({ slug: 'test-pattern', markup, theme })
const rule = (css: string, selector: string) => {
  const matches: string[] = []
  postcss.parse(css).walkRules(selector, node => { matches.push(node.toString()) })
  return matches.join('\n')
}

describe('semantic twin markup', () => {
  it('names roles, deduplicates reordered class lists, and identifies a secondary action', async () => {
    const { html, css } = await generate('<section class="bg-white"><h1 class="text-4xl font-semibold">Title</h1><p class="text-lg text-neutral-600">Description</p><div class="flex gap-4"><a href="#" class="bg-neutral-900 px-5">Primary</a><a href="#" class="border border-neutral-300 px-5">Secondary</a></div><svg class="size-5"></svg><svg class="size-5"></svg><p class="text-neutral-600 text-lg">Description again</p></section>')
    expect(html).toContain('class="test-pattern"')
    for (const name of ['title', 'lede', 'actions', 'button', 'button--secondary', 'icon']) expect(html).toContain(`test-pattern__${name}`)
    expect(html.match(/class="test-pattern__lede"/g)).toHaveLength(2)
    expect(css).toContain('.test-pattern .test-pattern__title {')
    expect(css.startsWith(resetCss('test-pattern'))).toBe(true)
    expect(css).not.toMatch(/part-\d|--tw-|var\(/)
  })

  it('keeps curated image URLs literal for the mechanical image rule', async () => {
    const { html } = await generate('<section><img src="https://images.unsplash.com/photo-1?w=400&amp;q=80" alt="A &amp; B" width="400" height="300"></section>')
    expect(html).toContain('src="https://images.unsplash.com/photo-1?w=400&q=80"')
    expect(html).toContain('alt="A &amp; B"')
  })

  it('names an outlined white button secondary despite a coloured hover state', async () => {
    const { html } = await generate('<section><button class="bg-black">Primary</button><button class="border bg-white hover:bg-neutral-50">Secondary</button></section>')
    expect(html).toContain('test-pattern__button--secondary')
  })

  it('serializes React attributes, boolean controls, SVG, and significant inline spaces', async () => {
    const markup = renderToStaticMarkup(createElement('section', { className: 'p-4' },
      createElement('label', { htmlFor: 'email' }, 'Email'),
      createElement('input', { id: 'email', required: true, disabled: false }),
      createElement('p', null, createElement('span', null, 'one'), createElement('span', null, 'two'), ' ', createElement('strong', null, 'three')),
      createElement('svg', { viewBox: '0 0 24 24', strokeWidth: 1.5, strokeLinecap: 'round' })))
    const { html } = await generate(markup)
    expect(html).toContain('\n  <label for="email">Email</label>')
    expect(html).toContain('required>')
    expect(html).not.toMatch(/disabled|class=""|className|htmlFor/)
    expect(html).toContain('<span>one</span><span>two</span> <strong>three</strong>')
    expect(html).toContain('viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round"')
    expect(parseFragment(html).childNodes).toHaveLength(2) // root plus final newline
  })
})

describe('literal CSS', () => {
  it('resolves nested tokens, opacity, spacing and keeps text line-height ratios', () => {
    const tokens = new Map([['--spacing', '0.25rem'], ['--color-neutral-900', 'oklch(20.5% 0 none)'], ['--text-sm--line-height', 'calc(1.25 / 0.875)']])
    expect(resolveValue('calc(var(--spacing) * 6)', tokens).value).toBe('1.5rem')
    expect(resolveValue('var(--missing, var(--color-neutral-900))', tokens)).toEqual({ value: 'oklch(20.5% 0 none)', tokens: ['neutral-900'] })
    expect(resolveValue('var(--text-sm--line-height)', tokens).value).toBe('calc(1.25 / 0.875)')
    expect(resolveValue('color-mix(in oklab, var(--color-neutral-900) 50%, transparent)', tokens).value).toBe('oklch(20.5% 0 none / 0.5)')
    expect(() => resolveValue('var(--unknown)', tokens)).toThrow('--unknown')
  })

  it('merges breakpoint media, retains explicit leading, and scopes group and peer markers', async () => {
    const { html, css } = await generate('<section class="p-4 sm:p-6 group"><h1 class="text-sm leading-relaxed sm:text-lg">Title</h1><input type="checkbox" class="peer"><span class="group-hover:opacity-50 peer-checked:bg-black sm:block">State</span></section>')
    expect(css.match(/@media \(width >= 40rem\)/g)).toHaveLength(1)
    expect(css).toContain('line-height: 1.625;')
    expect(css).not.toContain('calc(1.75 / 1.125)')
    expect(css).toContain('@media (hover: hover)')
    expect(css).toContain(':where(.test-pattern__group):hover')
    expect(css).toContain(':where(.test-pattern__peer):checked')
    expect(html).not.toMatch(/class="(?:group|peer)"/)
  })

  it('composes shadows, rings, transforms, gradients and prefixed animations without variables', async () => {
    const { css } = await generate('<section class="shadow-lg ring-2 ring-neutral-300 ring-offset-2 translate-x-2 rotate-3 scale-95 bg-linear-to-tr from-neutral-100 via-white to-neutral-300 animate-pulse"><div class="space-y-4 divide-y"><p>One</p><p>Two</p></div></section>')
    expect(css).not.toMatch(/--tw-|var\(|@property|@layer/)
    expect(css).toContain('translate: 0.5rem 0;')
    expect(css).toContain('scale: 95% 95%;')
    expect(css).toContain('0 0 0 4px oklch(87% 0 none)')
    expect(css).toContain('linear-gradient(to top right in oklab, oklch(97% 0 none) 0%, #fff 50%, oklch(87% 0 none) 100%)')
    expect(css).toContain('@keyframes test-pattern-pulse')
    expect(css).toContain('animation: test-pattern-pulse 2s')
    expect(css).toContain('margin-block-end: 1rem;')
  })

  it('recomputes base composition when only a variant colour or axis changes', async () => {
    const { css } = await generate('<section class="shadow-lg hover:shadow-neutral-900 translate-x-2 translate-y-3 hover:translate-x-4 ring-2 focus-visible:ring-neutral-900"></section>')
    const hover = rule(css, '.test-pattern:hover')
    expect(hover).toContain('translate: 1rem 0.75rem;')
    expect(hover).toContain('box-shadow:')
    expect(hover).toContain('oklch(20.5% 0 none)')
    expect(rule(css, '.test-pattern:focus-visible')).toContain('box-shadow:')
  })

  it('retains forced-colors outline-hidden fallback, motion, placeholder and details variants', async () => {
    const { css } = await generate('<details class="open:border-2"><summary class="focus-visible:outline-hidden motion-reduce:transition-none forced-colors:border"><input class="placeholder:text-neutral-500"></summary></details>')
    expect(css).toContain('outline-style: none;')
    expect(css).toContain('@media (forced-colors: active)')
    expect(css).toContain('outline: 2px solid transparent;')
    expect(css).toContain('outline-offset: 2px;')
    expect(css).toContain('@media (prefers-reduced-motion: reduce)')
    expect(css).toContain('::placeholder')
    expect(css).toContain(':is([open], :popover-open, :open)')
  })
})

describe('cascade and composition regressions', () => {
  it('orders breakpoints globally even when the root introduces lg before a child introduces md', async () => {
    const { css } = await generate('<section class="lg:p-8"><p class="md:text-lg lg:text-xl">Text</p></section>')
    expect(css.indexOf('@media (width >= 48rem)')).toBeLessThan(css.indexOf('@media (width >= 64rem)'))
  })

  it('does not add whitespace around adjacent inline boxes', async () => {
    const { html } = await generate('<section><div><span class="inline-block">one</span><span class="inline-block">two</span></div></section>')
    expect(html).toContain('</span><span')
  })

  it('gives a repeated root class list a scoped descendant selector without corrupting variants', async () => {
    const { html, css } = await generate('<section class="p-4 hover:p-6"><div class="p-4 hover:p-6">Child</div></section>')
    expect(html).toContain('class="test-pattern__section"')
    expect(css).toContain('.test-pattern:hover, .test-pattern .test-pattern__section:hover')
    expect(css).not.toContain('.test-pattern, .test-pattern .test-pattern__section:hover')
  })

  it('combines variable compositions across responsive and interaction conditions', async () => {
    const { css } = await generate('<section class="translate-x-1 translate-y-2 hover:translate-x-3 sm:translate-y-4 shadow-sm hover:shadow-black sm:shadow-lg"></section>')
    const atSmall = postcss.parse(css).nodes.find(n => n.type === 'atrule' && n.params === '(width >= 40rem)')
    expect(atSmall?.toString()).toContain('translate: 0.75rem 1rem;')
    expect(atSmall?.toString()).toContain('0 10px 15px -3px rgb(0 0 0 / 1)')
  })
})

describe('HTML whitespace and literal expression edge cases', () => {
  it('keeps adjacent inline elements together when followed by a block', async () => {
    const { html } = await generate('<section><span>one</span><span>two</span><p>Block</p></section>')
    expect(html).toContain('<span>one</span><span>two</span>')
  })

  it('does not interpret quoted var or calc text as CSS functions', () => {
    expect(resolveValue('"var(--unknown) calc(1 * 2)"', new Map()).value).toBe('"var(--unknown) calc(1 * 2)"')
  })

  it('preserves the hover-before-focus cascade across media wrapping', async () => {
    const { css } = await generate('<section class="hover:bg-neutral-700 focus-visible:bg-neutral-600"></section>')
    expect(css.indexOf('.test-pattern:hover')).toBeLessThan(css.indexOf('.test-pattern:focus-visible'))
  })
})

describe('attribute state selectors', () => {
  it('keeps ARIA-selected declarations out of the base rule', async () => {
    const { css } = await generate('<section><a href="#" class="bg-white text-black aria-[current=page]:bg-black aria-[current=page]:text-white">Page</a></section>')
    const base = postcss.parse(css).nodes.find(n => n.type === 'rule' && n.selector === '.test-pattern .test-pattern__button')
    expect(base?.toString()).toContain('background-color: #fff;')
    expect(base?.toString()).toContain('color: #000;')
    expect(base?.toString()).not.toContain('\n  color: #fff;')
    expect(rule(css, '.test-pattern .test-pattern__button[aria-current="page"]')).toContain('background-color: #000;')
  })
})

describe('compiled token annotations and marker names', () => {
  it('annotates theme shadows after Tailwind inlines their values', async () => {
    const { css } = await generate('<section class="shadow-lg"><div class="shadow-sm"></div></section>')
    expect(rule(css, '.test-pattern')).toContain('/* shadow-lg */')
    expect(rule(css, '.test-pattern .test-pattern__content')).toContain('/* shadow-sm */')
  })

  it('scopes named group and peer markers', async () => {
    const { html, css } = await generate('<section class="group/card"><input type="checkbox" class="peer/toggle"><span class="group-hover/card:text-black peer-checked/toggle:text-white">State</span></section>')
    expect(html).toContain('test-pattern__group--card')
    expect(html).toContain('test-pattern__peer--toggle')
    expect(css).toContain(':where(.test-pattern__group--card):hover')
    expect(css).toContain(':where(.test-pattern__peer--toggle):checked')
    expect(css).not.toContain('.group\\/card')
  })
})
