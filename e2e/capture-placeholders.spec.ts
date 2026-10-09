import { readFile } from 'node:fs/promises'
import { expect, test } from '@playwright/test'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'
import { previewPath } from '../app/lib/preview-ready'
import { frameSize } from '../app/lib/viewports'
import { loadLibrary } from '../scripts/load-library'
import { crop } from './lib/png'

// A downloaded PNG must show an empty field's placeholder as the preview does. modern-screenshot leaves
// ::placeholder out of its image and inlines the field's own text-fill colour, which the placeholder
// inherits, so without capture.ts's placeholder styles the PNG paints placeholders in the text colour.
//
// Each field with a placeholder is compared, within its own box, between a native screenshot of the preview
// and the Desktop PNG. Measured over the library: in the 3 empty fields 1.4% to 3.2% of the box differs
// with the text colour, and 0 to 1 pixel with the placeholder styles restored; the one filled field
// (inputs-glass, which shows its value instead) differs by 0.03% either way.
const MAX_DIFFERING_SHARE = 0.003
// The PNG's pixel ratio (CAPTURE_SCALE); the reference screenshot is taken at the same ratio.
const SCALE = 2

const WITH_PLACEHOLDERS = (await loadLibrary()).map((item) => item.entry).filter(({ sources }) => /\splaceholder=/.test(sources.tsx))

test.use({ deviceScaleFactor: SCALE })

test('the library has components with placeholders to check', () => {
  expect(WITH_PLACEHOLDERS.length).toBeGreaterThanOrEqual(3)
})

for (const { meta } of WITH_PLACEHOLDERS) {
  test(`${meta.slug}: fields with a placeholder look the same in the Desktop PNG`, async ({ page }) => {
    const isElement = meta.preview.kind === 'element'
    await page.setViewportSize(frameSize(meta.preview.kind, 'desktop'))
    await page.goto(previewPath(meta.slug, { capture: true }))
    await page.locator('[data-preview-backdrop][data-preview-state="ready"][data-capture]').waitFor()
    // What captureComponent captures: the section, or an element with its backdrop.
    const target = page.locator(isElement ? '[data-preview-backdrop]' : '[data-capture-root]')
    const origin = (await target.boundingBox())!
    const fields = await page.evaluate(() =>
      [...document.querySelectorAll('input[placeholder], textarea[placeholder]')].map((field) => field.getBoundingClientRect().toJSON() as DOMRect),
    )
    expect(fields.length).toBeGreaterThan(0)
    const reference = PNG.sync.read(await target.screenshot({ animations: 'disabled' }))

    await page.goto(`/c/${meta.slug}`)
    await expect(page.getByRole('button', { name: 'Copy code' })).toBeEnabled()
    await page.getByRole('button', { name: 'Download' }).click()
    const [download] = await Promise.all([page.waitForEvent('download'), page.getByRole('menuitem', { name: 'Desktop PNG' }).click()])
    const captured = PNG.sync.read(await readFile(await download.path()))

    for (const field of fields) {
      // The field's box in device pixels, relative to the captured element.
      const box = {
        x: Math.round((field.x - origin.x) * SCALE),
        y: Math.round((field.y - origin.y) * SCALE),
        width: Math.round(field.width * SCALE),
        height: Math.round(field.height * SCALE),
      }
      const differing = pixelmatch(crop(reference, box), crop(captured, box), null, box.width, box.height, { threshold: 0.1 })
      expect(differing / (box.width * box.height), 'share of the field box that the PNG gets wrong').toBeLessThanOrEqual(MAX_DIFFERING_SHARE)
    }
  })
}
