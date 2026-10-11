import { expect, test } from '@playwright/test'
import { STAGE } from '../app/lib/stage'
import { loadEntry } from '../scripts/load-library'
import { previewPath } from '../src/library/urls'
import { buildParityPage } from './lib/parity-page'

const entry = await loadEntry('tabs-responsive-disclosure')

for (const version of ['React', 'HTML'] as const) {
  test(`responsive content selector (${version}): remains usable after closing on mobile and widening`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 480 })
    if (version === 'React') {
      await page.goto(previewPath(entry.meta.slug))
      await page.locator(STAGE.ready).waitFor()
    } else {
      await page.setContent(buildParityPage(entry))
    }

    const disclosure = page.locator(`${STAGE.root} details`)
    const summary = disclosure.locator('summary')
    await summary.click()
    await expect(disclosure).toHaveJSProperty('open', false)

    await page.setViewportSize({ width: 1440, height: 480 })
    await expect(summary).toBeVisible()
    await summary.click()
    await disclosure.locator('label').filter({ hasText: 'Activity' }).click()

    await expect(page.locator('#tabs-responsive-disclosure-activity')).toBeChecked()
    await expect(page.locator('#tabs-responsive-disclosure-activity-panel')).toBeVisible()
    await expect(page.locator('#tabs-responsive-disclosure-overview-panel')).toBeHidden()
  })
}
