import { expect, test } from '@playwright/test'
import { STAGE } from '../app/lib/stage'
import { loadEntry } from '../scripts/load-library'
import { buildParityPage } from './lib/parity-page'
import { previewPath } from '../src/library/urls'

test('a ready preview keeps the default accordion answer open when animation frames are delayed', async ({ page }) => {
  // Offscreen capture frames can defer React's animation-frame swap of streamed Suspense content.
  // Hydration must not create another named accordion beside a hidden server copy and close its answer.
  await page.addInitScript(() => {
    const requestFrame = window.requestAnimationFrame.bind(window)
    window.requestAnimationFrame = (callback) => window.setTimeout(() => requestFrame(callback), 1500)
  })
  await page.goto(previewPath('faq-accordion', { capture: true }))
  await page.locator(STAGE.captureReady).waitFor()
  await expect(page.locator(`${STAGE.root} details`).first()).toHaveAttribute('open', '')
  await expect(page.locator(STAGE.root).getByText('Explain the main benefit in two or three sentences.', { exact: false })).toBeVisible()
})

for (const format of ['React', 'HTML'] as const) {
  test(`${format} accordion opens one answer at a time and rotates its chevron`, async ({ page }) => {
    if (format === 'React') {
      await page.goto(previewPath('faq-accordion'))
      await page.locator(STAGE.ready).waitFor()
    } else {
      await page.setContent(buildParityPage(await loadEntry('faq-accordion')))
    }
    const items = page.locator(`${STAGE.root} details`)
    await expect(items).toHaveCount(5)
    await expect(items.first()).toHaveAttribute('open', '')
    await items.nth(1).locator('summary').click()
    await expect(items.first()).not.toHaveAttribute('open')
    await expect(items.nth(1)).toHaveAttribute('open', '')
    await expect(items.nth(1).locator('summary svg')).toHaveCSS('rotate', '180deg')
    await expect(items.nth(1).getByText('Describe the first step', { exact: false })).toBeVisible()
  })
}
