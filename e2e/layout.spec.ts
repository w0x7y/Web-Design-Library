import { expect, test } from '@playwright/test'
import { previewPath } from '../app/lib/preview-ready'
import { CAPTURE_VIEWPORTS, frameSize } from '../app/lib/viewports'
import { loadLibrary } from '../scripts/load-library'

// Layout budgets that parity can't see, because it only compares the two versions of a component with
// each other:
// - a section reflows down to 320 CSS px (WCAG 1.4.10) without scrolling sideways, at the narrowest width
//   of every breakpoint range (default, sm, md, lg, xl), where a layout has the least room;
// - an element fits its frame inside the stage padding at every capture size (AGENTS.md: about 384px tall,
//   and 294px wide on mobile), so the PNG and the preview show all of it.

const METAS = (await loadLibrary()).map((item) => item.entry.meta)
const REFLOW_WIDTHS = [320, 640, 768, 1024, 1280]

for (const meta of METAS.filter((m) => m.preview.kind === 'section')) {
  test(`${meta.slug}: reflows without horizontal scrolling from 320px up`, async ({ page }) => {
    await page.setViewportSize({ width: REFLOW_WIDTHS[0], height: 844 })
    await page.goto(previewPath(meta.slug))
    await page.locator('[data-preview-backdrop][data-preview-state="ready"]').waitFor()
    for (const width of REFLOW_WIDTHS) {
      await page.setViewportSize({ width, height: 844 })
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
      expect(overflow, `pixels of horizontal scrolling at ${width}px`).toBeLessThanOrEqual(0)
    }
  })
}

for (const meta of METAS.filter((m) => m.preview.kind === 'element')) {
  for (const viewport of CAPTURE_VIEWPORTS) {
    test(`${meta.slug} @ ${viewport}: fits its frame inside the stage padding`, async ({ page }) => {
      await page.setViewportSize(frameSize('element', viewport))
      await page.goto(previewPath(meta.slug))
      const backdrop = page.locator('[data-preview-backdrop][data-preview-state="ready"]')
      await backdrop.waitFor()
      // Measured against the frame rather than the backdrop, which grows (min-height) with a taller element.
      const fit = await backdrop.evaluate((stage) => {
        const { paddingTop, paddingRight, paddingBottom, paddingLeft } = getComputedStyle(stage)
        const root = stage.querySelector('[data-capture-root]')!
        const box = root.getBoundingClientRect()
        return {
          room: {
            width: innerWidth - parseFloat(paddingLeft) - parseFloat(paddingRight),
            height: innerHeight - parseFloat(paddingTop) - parseFloat(paddingBottom),
          },
          size: { width: Math.max(box.width, root.scrollWidth), height: Math.max(box.height, root.scrollHeight) },
        }
      })
      expect(fit.size.width, `width, with ${fit.room.width}px of room`).toBeLessThanOrEqual(fit.room.width)
      expect(fit.size.height, `height, with ${fit.room.height}px of room`).toBeLessThanOrEqual(fit.room.height)
    })
  }
}
