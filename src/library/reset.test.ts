import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import postcss, { type Rule } from 'postcss'
import { resetCss } from './reset'

// A font stack as a list of family names: the two files quote and wrap it differently.
const families = (stack: string) => stack.split(',').map((family) => family.trim().replace(/^(['"])(.*)\1$/, '$2'))

/** The first value of `property` in `css`; with `selector`, only inside a rule with exactly that selector. */
function firstValue(css: string, property: string, selector?: string): string | undefined {
  const values: string[] = []
  postcss.parse(css).walkDecls(property, (decl) => {
    if (selector === undefined || (decl.parent as Rule).selector === selector) values.push(decl.value)
  })
  return values[0]
}

test("the reset's font stack is Tailwind's default --font-sans", () => {
  const theme = readFileSync(createRequire(import.meta.url).resolve('tailwindcss/theme.css'), 'utf8')
  const tailwind = firstValue(theme, '--font-sans')
  const reset = firstValue(resetCss('demo'), 'font-family', '.demo')
  expect(tailwind).toBeDefined()
  expect(reset).toBeDefined()
  expect(families(reset!)).toEqual(families(tailwind!))
})

test('AGENTS.md shows the reset as its template, with SLUG for the slug', () => {
  const agents = readFileSync(new URL('../../AGENTS.md', import.meta.url), 'utf8').replace(/\r\n/g, '\n')
  const template = /^## styles\.css reset template\n[\s\S]*?^```css\n([\s\S]*?)^```$/m.exec(agents)?.[1]
  expect(template).toBe(resetCss('SLUG'))
})
