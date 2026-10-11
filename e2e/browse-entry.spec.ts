import { expect, test } from '@playwright/test'
import { STORAGE_KEYS } from '../app/lib/storage'

for (const theme of ['light', 'dark']) {
  test(`the home hero fits from 320px up in the ${theme} theme`, async ({ page }) => {
    await page.addInitScript(([key, value]) => localStorage.setItem(key, value), [STORAGE_KEYS.theme, theme])
    await page.setViewportSize({ width: 320, height: 900 })
    await page.goto('/')
    const hero = page.getByRole('region', { name: 'Layout patterns for your next page.' })
    const copy = hero.getByRole('button', { name: 'Copy MCP setup command' })
    await expect(copy).toBeEnabled()
    for (const width of [320, 390, 1440]) {
      await page.setViewportSize({ width, height: 900 })
      await expect(hero.locator('code')).toBeVisible()
      await expect(copy).toBeVisible()
      const fit = await hero.evaluate((node) => ({
        heroOverflow: node.scrollWidth - node.clientWidth,
        pageOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      }))
      expect(fit, `horizontal scrolling at ${width}px`).toEqual({ heroOverflow: 0, pageOverflow: 0 })
      if (width === 320) {
        const code = hero.locator('code')
        await code.evaluate((node) => { node.scrollLeft = node.scrollWidth })
        expect(await code.evaluate((node) => node.scrollLeft)).toBeGreaterThan(0)
      }
    }
  })
}

for (const width of [390, 1440]) {
  for (const query of ['?q=accordion', '?tags=centered', '?tags=unknown&tags=SPACIOUS,centered']) {
    test(`filtered home puts the grid first before hydration (${width}px, ${query})`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 })
      // Leave head init scripts running, but prevent React from hydrating the static page.
      await page.route('**/assets/*.js', (route) => route.abort())
      await page.goto(`/${query}`)
      await expect(page.getByRole('region', { name: 'Layout patterns for your next page.' })).toBeHidden()
      const heading = await page.getByRole('heading', { name: 'All patterns', exact: true }).boundingBox()
      expect(heading?.y).toBeLessThan(220)
    })
  }
}

test('a filtered deep link stays above the fold after hydration and clearing restores the intro', async ({ page }) => {
  await page.goto('/?tags=centered')
  await expect(page.getByRole('button', { name: 'centered', pressed: true })).toBeEnabled()
  await expect(page.getByRole('region', { name: 'Layout patterns for your next page.' })).toHaveCount(0)
  await expect(page.getByRole('heading', { name: 'All patterns', level: 1 })).toBeVisible()
  await page.getByRole('button', { name: 'Clear layout filters' }).click()
  await expect(page.getByRole('region', { name: 'Layout patterns for your next page.' })).toBeVisible()
  await page.getByRole('button', { name: 'centered', exact: true }).click()
  await expect(page.getByRole('button', { name: 'centered', pressed: true })).toBeVisible()
  await expect(page.getByRole('region', { name: 'Layout patterns for your next page.' })).toBeVisible()
})

test('blank searches and unknown tags retain the intro before hydration', async ({ page }) => {
  await page.route('**/assets/*.js', (route) => route.abort())
  await page.goto('/?q=%20&tags=unknown')
  await expect(page.getByRole('region', { name: 'Layout patterns for your next page.' })).toBeVisible()
})

test('applying tags in place keeps the intro and chip position stable', async ({ page }) => {
  await page.goto('/')
  const chip = page.getByRole('button', { name: 'centered', exact: true })
  await expect(chip).toBeEnabled()
  await chip.scrollIntoViewIfNeeded()
  const before = await chip.boundingBox()
  await chip.click()
  await expect(chip).toHaveAttribute('aria-pressed', 'true')
  await expect(page.getByRole('region', { name: 'Layout patterns for your next page.' })).toBeVisible()
  expect((await chip.boundingBox())?.y).toBeCloseTo(before!.y, 0)
})
