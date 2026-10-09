import { expect, test } from '@playwright/test'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'
import { previewPath, settleDocument } from '../app/lib/preview-ready'
import { CAPTURE_VIEWPORTS, frameSize } from '../app/lib/viewports'
import { loadLibrary } from '../scripts/load-library'
import { buildParityPage } from './lib/parity-page'

// For every component and capture viewport, the hand-written HTML/CSS must render
// like the React + Tailwind version (spec §7), in the frame the PNG is captured in.

const DEFAULT_MAX_DIFF_RATIO = 0.01

const items = await loadLibrary()

function sizeOf(png: Buffer) {
  const { width, height } = PNG.sync.read(png)
  return { width, height }
}

function compare(reactPng: Buffer, htmlPng: Buffer) {
  const a = PNG.sync.read(reactPng)
  const b = PNG.sync.read(htmlPng)
  const { width, height } = b
  if (a.width !== width || a.height !== height) return { ratio: 1, width, height, diff: null }
  const out = new PNG({ width, height })
  const mismatched = pixelmatch(a.data, b.data, out.data, width, height, { threshold: 0.1 })
  return { ratio: mismatched / (width * height), width, height, diff: mismatched > 0 ? PNG.sync.write(out) : null }
}

for (const { entry } of items) {
  const { meta } = entry
  const { slug } = meta
  for (const viewport of CAPTURE_VIEWPORTS) {
    test(`${slug} @ ${viewport}: HTML/CSS matches React`, async ({ page }, testInfo) => {
      await page.setViewportSize(frameSize(meta.preview.kind, viewport))
      await page.goto(previewPath(slug))
      await page.locator('[data-preview-backdrop][data-preview-state="ready"]').waitFor()
      const react = await page.locator('[data-capture-root] > *').first().screenshot({ animations: 'disabled' })

      // The bare page has no React to report readiness, so it runs the preview page's own settle step.
      await page.setContent(buildParityPage(entry))
      const htmlRoot = page.locator(`.${slug}`).first()
      await htmlRoot.evaluate(settleDocument)
      const html = await htmlRoot.screenshot({ animations: 'disabled' })

      const { ratio, width, height, diff } = compare(react, html)
      if (diff) await testInfo.attach('diff', { body: diff, contentType: 'image/png' })
      expect({ width, height }).toEqual(sizeOf(react))
      expect(ratio).toBeLessThanOrEqual(meta.preview.parity?.maxDiffRatio ?? DEFAULT_MAX_DIFF_RATIO)
    })
  }
}
