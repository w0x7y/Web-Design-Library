import { expect, test } from '@playwright/test'

for (const width of [390, 1440]) {
  for (const query of ['?q=glass', '?tags=minimal', '?tags=unknown&tags=LIGHT,minimal']) {
    test(`filtered home puts the grid first before hydration (${width}px, ${query})`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 })
      // Leave head init scripts running, but prevent React from hydrating the static page.
      await page.route('**/assets/*.js', (route) => route.abort())
      await page.goto(`/${query}`)
      await expect(page.getByRole('region', { name: 'Copy-paste UI for you and your agent.' })).toBeHidden()
      const heading = await page.getByRole('heading', { name: 'All components', exact: true }).boundingBox()
      expect(heading?.y).toBeLessThan(220)
    })
  }
}

test('a filtered deep link stays above the fold after hydration and clearing restores the intro', async ({ page }) => {
  await page.goto('/?tags=minimal')
  await expect(page.getByRole('button', { name: 'minimal', pressed: true })).toBeEnabled()
  await expect(page.getByRole('region', { name: 'Copy-paste UI for you and your agent.' })).toHaveCount(0)
  await expect(page.getByRole('heading', { name: 'All components', level: 1 })).toBeVisible()
  await page.getByRole('button', { name: 'Clear style filters' }).click()
  await expect(page.getByRole('region', { name: 'Copy-paste UI for you and your agent.' })).toBeVisible()
  await page.getByRole('button', { name: 'minimal', exact: true }).click()
  await expect(page.getByRole('button', { name: 'minimal', pressed: true })).toBeVisible()
  await expect(page.getByRole('region', { name: 'Copy-paste UI for you and your agent.' })).toBeVisible()
})

test('blank searches and unknown tags retain the intro before hydration', async ({ page }) => {
  await page.route('**/assets/*.js', (route) => route.abort())
  await page.goto('/?q=%20&tags=unknown')
  await expect(page.getByRole('region', { name: 'Copy-paste UI for you and your agent.' })).toBeVisible()
})

test('applying tags in place keeps the intro and chip position stable', async ({ page }) => {
  await page.goto('/')
  const chip = page.getByRole('button', { name: 'minimal', exact: true })
  await expect(chip).toBeEnabled()
  await chip.scrollIntoViewIfNeeded()
  const before = await chip.boundingBox()
  await chip.click()
  await expect(chip).toHaveAttribute('aria-pressed', 'true')
  await expect(page.getByRole('region', { name: 'Copy-paste UI for you and your agent.' })).toBeVisible()
  expect((await chip.boundingBox())?.y).toBeCloseTo(before!.y, 0)
})
