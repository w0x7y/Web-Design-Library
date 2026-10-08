import { expect, test } from '@playwright/test'

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
