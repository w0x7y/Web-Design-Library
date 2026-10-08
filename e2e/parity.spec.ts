import { expect, test, type Locator, type Page } from '@playwright/test'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'
import { loadLibrary } from '../scripts/load-library'
import { buildParityPage } from './lib/parity-page'

// For every component and viewport, the hand-written HTML/CSS must render
// like the React + Tailwind version (spec §7).

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
] as const

const DEFAULT_MAX_DIFF_RATIO = 0.01

const items = await loadLibrary()

// The prerendered preview streams the lazy component into a hidden node that
// React reveals after load, so wait for the target before fonts and images.
async function settle(page: Page, target: Locator) {
  await target.waitFor({ state: 'visible' })
  await page.evaluate(async () => {
    await document.fonts.ready
    await Promise.all([...document.images].map((img) => img.decode().catch(() => {})))
  })
}

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
  for (const vp of VIEWPORTS) {
    test(`${slug} @ ${vp.name}: HTML/CSS matches React`, async ({ page }, testInfo) => {
      await page.setViewportSize(vp)
      await page.goto(`/preview/${slug}`)
      const reactRoot = page.locator('[data-capture-root] > *').first()
      await settle(page, reactRoot)
      const react = await reactRoot.screenshot({ animations: 'disabled' })

      await page.setContent(buildParityPage(entry))
      const htmlRoot = page.locator(`.${slug}`).first()
      await settle(page, htmlRoot)
      const html = await htmlRoot.screenshot({ animations: 'disabled' })

      const { ratio, width, height, diff } = compare(react, html)
      if (diff) await testInfo.attach('diff', { body: diff, contentType: 'image/png' })
      expect({ width, height }).toEqual(sizeOf(react))
      expect(ratio).toBeLessThanOrEqual(meta.preview.parity?.maxDiffRatio ?? DEFAULT_MAX_DIFF_RATIO)
    })
  }
}
