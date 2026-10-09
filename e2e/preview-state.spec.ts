import { expect, test } from '@playwright/test'
import { STAGE } from '../app/lib/stage'
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
  await expect(page.locator(STAGE.root).getByText('Nothing is deleted.', { exact: false })).toBeVisible()
})
