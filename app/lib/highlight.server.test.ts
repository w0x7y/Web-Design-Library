import { highlight } from './highlight.server'

test('emits light colours inline and dark ones as --shiki-dark variables', async () => {
  const html = await highlight('export default function A() {}\n', 'tsx')
  expect(html).toMatch(/^<pre class="shiki shiki-themes github-light github-dark"/)
  expect(html).toContain('background-color:#fff;--shiki-dark-bg:#09090b')
  expect(html).toMatch(/<span style="color:#D73A49;--shiki-dark:#F97583">export<\/span>/)
})

test('keeps comments readable on the dark background', async () => {
  const html = await highlight('/* note */\n.a { color: red; }', 'css')
  expect(html).toContain('--shiki-dark:#8b949e">/* note */')
})

test('drops the trailing newline instead of rendering an empty last line', async () => {
  const html = await highlight('<p>hi</p>\n', 'html')
  expect(html.match(/class="line"/g)).toHaveLength(1)
})
