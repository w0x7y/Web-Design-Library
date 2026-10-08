import { expect, test } from '@playwright/test'
import { loadLibrary } from '../scripts/load-library'

const LIBRARY = (await loadLibrary()).map((item) => item.entry.meta)

test('home page renders with site title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Web Library/)
})

test('unknown path renders not-found page', async ({ page }) => {
  await page.goto('/definitely/not/here')
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible()
})

test('preview ?capture=1 freezes motion after hydration', async ({ page }) => {
  await page.goto('/preview/buttons-minimal?capture=1')
  await expect(page.locator('[data-preview-backdrop]')).toHaveAttribute('data-capture', '')
  await expect(page.locator('[data-capture-root] .animate-spin').first()).toHaveCSS('animation-name', 'none')
})

test('preview without ?capture=1 keeps motion', async ({ page }) => {
  await page.goto('/preview/buttons-minimal')
  await expect(page.locator('[data-capture-root] .animate-spin').first()).toHaveCSS('animation-name', 'spin')
  await expect(page.locator('[data-preview-backdrop]')).not.toHaveAttribute('data-capture')
})

test('agent files are served', async ({ request }) => {
  const llms = await (await request.get('/llms.txt')).text()
  expect(llms).toContain('/c/hero-split-image.md')
  const md = await (await request.get('/c/hero-split-image.md')).text()
  expect(md).toContain('## Reference code (React + Tailwind v4)')
  expect(md).toContain('## Reference code (HTML + CSS)')
})

test('browse lists all components and filters by category', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('component-card')).toHaveCount(3)
  await page.getByRole('link', { name: /^Hero/ }).first().click()
  await expect(page).toHaveURL(/\/browse\/hero/)
  await expect(page.getByRole('heading', { level: 1, name: 'Hero' })).toBeVisible()
  await expect(page.getByTestId('component-card')).toHaveCount(1)
})

test('search and tag filters sync with the URL', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('searchbox', { name: 'Search components' }).fill('glass')
  await expect(page).toHaveURL(/q=glass/)
  await expect(page.getByTestId('component-card')).toHaveCount(1)
  await page.goto('/?tags=minimal')
  await expect(page.getByRole('button', { name: 'minimal', pressed: true })).toBeVisible()
  await expect(page.getByTestId('component-card')).toHaveCount(2)
})

test('zero results show empty state with working reset', async ({ page }) => {
  await page.goto('/?q=zzzz&tags=brutalist,unknown')
  await expect(page.getByText('No components match')).toBeVisible()
  await page.getByRole('button', { name: 'Clear filters' }).click()
  await expect(page.getByTestId('component-card')).toHaveCount(3)
})

test('site dark mode does not restyle component renders', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('wl:theme', 'dark'))
  await page.goto('/')
  expect(await page.evaluate(() => document.documentElement.classList.contains('dark'))).toBe(true)
  const surface = page.locator('[data-preview-backdrop]').first()
  await expect(surface).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(surface).toHaveCSS('color', 'rgb(0, 0, 0)')
  expect(await surface.evaluate(el => getComputedStyle(el).fontFamily)).not.toContain('Geist')
})

test('theme toggle persists', async ({ page }) => {
  await page.goto('/')
  const isDark = () => page.evaluate(() => document.documentElement.classList.contains('dark'))
  const before = await isDark()
  await page.getByRole('button', { name: /Switch to (dark|light) theme/ }).click()
  expect(await isDark()).toBe(!before)
  await page.reload()
  expect(await isDark()).toBe(!before)
})

test('detail page is pre-rendered with title and Open Graph tags', async ({ request }) => {
  const html = await (await request.get('/c/hero-split-image')).text()
  expect(html).toContain('Split hero with image')
  expect(html).toMatch(/property="og:title"/)
  expect(html).toContain('rel="canonical" href="https://web-design-library.vercel.app/c/hero-split-image"')
})

test('preview viewport toggle resizes the frame', async ({ page }) => {
  await page.goto('/c/hero-split-image')
  const frame = page.locator('iframe[title="Split hero with image preview"]')
  await expect(frame).toHaveAttribute('width', '1440')
  await page.getByRole('radio', { name: 'Mobile' }).click()
  await expect(frame).toHaveAttribute('width', '390')
})

test('code tab shows files for the selected format', async ({ page }) => {
  await page.goto('/c/hero-split-image')
  await page.getByRole('tab', { name: 'Code' }).click()
  await expect(page.locator('[data-code-file="Component.tsx"]')).toContainText('export default function')
  await page.getByRole('radio', { name: 'HTML' }).click()
  await expect(page.locator('[data-code-file="index.html"]')).toBeVisible()
  await expect(page.locator('[data-code-file="styles.css"]')).toBeVisible()
})

test('unknown component and category show not-found views', async ({ page }) => {
  await page.goto('/c/does-not-exist')
  await expect(page.getByRole('heading', { name: 'Component not found' })).toBeVisible()
  await expect(page.getByRole('searchbox', { name: 'Search components' })).toBeVisible()
  await page.goto('/browse/nope')
  await expect(page.getByRole('heading', { name: 'Category not found' })).toBeVisible()
})

test('preview frame scales its viewport down to fit the page', async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 800 })
  await page.goto('/c/hero-split-image')
  const frame = page.locator('iframe[title="Split hero with image preview"]')
  await expect(frame).toHaveCSS('opacity', '1') // shown once measured
  const desktop = (await frame.boundingBox())!
  expect(desktop.width).toBeLessThan(1024)
  expect(desktop.height / desktop.width).toBeCloseTo(900 / 1440, 2)
  await page.getByRole('radio', { name: 'Mobile' }).click()
  await expect.poll(async () => (await frame.boundingBox())?.width).toBeCloseTo(390, 0)
  expect((await frame.boundingBox())!.height).toBeCloseTo(844, 0)
})

test('detail tabs follow the keyboard pattern', async ({ page }) => {
  await page.goto('/c/hero-split-image')
  const preview = page.getByRole('tab', { name: 'Preview' })
  const code = page.getByRole('tab', { name: 'Code' })
  await expect(preview).toBeEnabled()
  await preview.focus()
  await page.keyboard.press('ArrowRight')
  await expect(code).toBeFocused()
  await expect(code).toHaveAttribute('aria-selected', 'true')
  await expect(page.getByRole('tabpanel', { name: 'Code' })).toBeVisible()
  await expect(page.getByRole('radiogroup', { name: 'Preview width' })).toHaveCount(0)
  await page.keyboard.press('Home')
  await expect(preview).toHaveAttribute('aria-selected', 'true')
  await expect(page.getByRole('tabpanel', { name: 'Preview' })).toBeVisible()
  await expect(page.getByRole('radiogroup', { name: 'Code format' })).toHaveCount(1)
})

test('format choice persists across reloads', async ({ page }) => {
  await page.goto('/c/hero-split-image')
  await page.getByRole('radio', { name: 'HTML' }).click()
  await page.reload()
  await expect(page.getByRole('radio', { name: 'HTML' })).toBeChecked()
  await page.getByRole('tab', { name: 'Code' }).click()
  await expect(page.locator('[data-code-file="index.html"]')).toBeVisible()
  await expect(page.locator('[data-code-file="Component.tsx"]')).toHaveCount(0)
})

test('related section lists up to three others from the same category', async ({ page }) => {
  for (const meta of LIBRARY) {
    const peers = LIBRARY.filter((other) => other.category === meta.category && other.slug !== meta.slug).map((other) => other.name)
    await page.goto(`/c/${meta.slug}`)
    await expect(page.getByRole('heading', { level: 1, name: meta.name })).toBeVisible()
    const section = page.getByRole('region', { name: /^More in / })
    if (peers.length === 0) {
      await expect(section).toHaveCount(0)
      continue
    }
    const names = await section.getByRole('heading', { level: 3 }).allTextContents()
    expect(names).toHaveLength(Math.min(3, peers.length))
    for (const name of names) expect(peers).toContain(name)
  }
})

test('detail page hydrates and switches views without errors', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error' && !message.text().startsWith('Failed to load resource')) errors.push(message.text())
  })
  await page.goto('/c/hero-split-image')
  await page.getByRole('radio', { name: 'Tablet' }).click()
  await page.getByRole('tab', { name: 'Code' }).click()
  await page.getByRole('radio', { name: 'HTML' }).click()
  await expect(page.locator('[data-code-file="styles.css"]')).toBeVisible()
  expect(errors).toEqual([])
})
