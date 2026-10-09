import { readFile } from 'node:fs/promises'
import { expect, test, type Page } from '@playwright/test'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'
import { loadLibrary } from '../scripts/load-library'
import { fontDisplayName } from '../src/library/fonts'
import { previewPath } from '../app/lib/preview-ready'
import { frameSize } from '../app/lib/viewports'

// A downloaded PNG must show the component in the fonts its preview shows. The failure this guards
// against is a PNG in fallback fonts (sometimes with overlapping text) next to a correct preview.
//
// For each component that declares web fonts, three renders of the same preview page are compared:
//   reference: a native Playwright screenshot once the web fonts have loaded,
//   no text:   the same page with every glyph made transparent,
//   captured:  the Desktop PNG downloaded from the detail page.
// The "text pixels" are where reference and no-text differ, so exactly where the page paints glyphs.
// The score is the share of those pixels that the captured PNG gets wrong: near 0 when the PNG has the
// web fonts, high when it falls back (the glyphs have other shapes and sit elsewhere). A full-frame diff
// ratio can't separate the two: most of a frame is background or photo, so a fallback PNG differs by
// well under 1% in a sparse component, no more than what the glass blur in navbar-glass costs with
// correct fonts (modern-screenshot renders backdrop-filter differently from Chromium).
//
// Measured over the 13 components: at most 0.034 with the fonts embedded (anti-aliasing differences
// between Chromium and the SVG foreignObject), at least 0.24 without (hero-brutalist-grid, whose
// monospace fallback has glyphs close to Martian Mono; the rest are 0.33 to 0.74). The threshold
// sits between them, 3x above the first and 2.4x below the second.
const MAX_WRONG_TEXT_PIXEL_SHARE = 0.1
// A frame with next to no text can't tell the cases apart.
const MIN_TEXT_PIXEL_SHARE_OF_FRAME = 0.0005
const PIXELMATCH_OPTIONS = { threshold: 0.1 }

const WITH_FONTS = (await loadLibrary()).map((item) => item.entry.meta).filter((meta) => meta.fonts.length > 0)

test.use({ deviceScaleFactor: 2 })

test('the library has components with web fonts to check', () => {
  expect(WITH_FONTS.length).toBeGreaterThanOrEqual(13)
})

/** Natively screenshots what captureComponent captures for this component: the section, or an element with its backdrop. */
async function screenshotPreview(page: Page, isElement: boolean) {
  const target = page.locator(isElement ? '[data-preview-backdrop]' : '[data-capture-root]')
  return PNG.sync.read(await target.screenshot({ animations: 'disabled' }))
}

/** The top-left `width` × `height` pixels, so that renders a pixel or two apart in height can still be diffed. */
function crop(png: PNG, width: number, height: number): Buffer {
  const out = Buffer.alloc(width * height * 4)
  for (let y = 0; y < height; y++) png.data.copy(out, y * width * 4, y * png.width * 4, y * png.width * 4 + width * 4)
  return out
}

/** Which pixels differ between two same-sized RGBA buffers (pixelmatch paints those, and only those, pure red). */
function differingPixels(a: Buffer, b: Buffer, width: number, height: number): { mask: Uint8Array; image: PNG } {
  const image = new PNG({ width, height })
  pixelmatch(a, b, image.data, width, height, PIXELMATCH_OPTIONS)
  const mask = new Uint8Array(width * height)
  for (let i = 0; i < mask.length; i++) mask[i] = image.data[i * 4] === 255 && image.data[i * 4 + 1] === 0 && image.data[i * 4 + 2] === 0 ? 1 : 0
  return { mask, image }
}

const count = (mask: Uint8Array) => mask.reduce((sum, value) => sum + value, 0)

for (const meta of WITH_FONTS) {
  test(`${meta.slug}: the Desktop PNG shows the component's web fonts`, async ({ page }, testInfo) => {
    // The reference renders in the Desktop PNG's capture frame (an element's is shorter than the screen),
    // and an element is captured with its backdrop.
    const isElement = meta.preview.kind === 'element'
    await page.setViewportSize(frameSize(meta.preview.kind, 'desktop'))

    // The capture waits for the page to report ready with motion frozen; so does a reference.
    await page.goto(previewPath(meta.slug, { capture: true }))
    await page.locator('[data-preview-backdrop][data-preview-state="ready"][data-capture]').waitFor()
    // Without this the reference could be in fallback fonts too, and the comparison would prove nothing.
    const wanted = meta.fonts.map(fontDisplayName)
    const loaded = await page.evaluate(
      (names) => names.filter((name) => [...document.fonts].some((face) => face.family.replaceAll('"', '') === name && face.status === 'loaded')),
      wanted,
    )
    expect(loaded, 'every declared family is loaded in the reference page').toEqual(wanted)
    const reference = await screenshotPreview(page, isElement)
    await page.addStyleTag({ content: '[data-capture-root], [data-capture-root] * { color: transparent !important; text-shadow: none !important; -webkit-text-fill-color: transparent !important }' })
    const noText = await screenshotPreview(page, isElement)

    await page.goto(`/c/${meta.slug}`)
    await expect(page.getByRole('button', { name: 'Copy code' })).toBeEnabled()
    await page.getByRole('button', { name: 'Download' }).click()
    const [download] = await Promise.all([page.waitForEvent('download'), page.getByRole('menuitem', { name: 'Desktop PNG' }).click()])
    const captured = PNG.sync.read(await readFile(await download.path()))

    // Playwright rounds an element's box out to whole CSS pixels (up to 2 device pixels taller at 2x);
    // the capture is the exact box, truncated to whole device pixels.
    expect(captured.width).toBe(reference.width)
    expect(reference.height - captured.height).toBeGreaterThanOrEqual(0)
    expect(reference.height - captured.height).toBeLessThanOrEqual(2)

    const width = Math.min(reference.width, noText.width, captured.width)
    const height = Math.min(reference.height, noText.height, captured.height)
    const ref = crop(reference, width, height)
    const textPixels = differingPixels(ref, crop(noText, width, height), width, height)
    const wrongPixels = differingPixels(ref, crop(captured, width, height), width, height)

    const textCount = count(textPixels.mask)
    const wrongTextCount = textPixels.mask.reduce((sum, value, i) => sum + (value && wrongPixels.mask[i] ? 1 : 0), 0)
    const textShare = textCount / (width * height)
    const wrongShare = wrongTextCount / Math.max(textCount, 1)
    testInfo.annotations.push({ type: 'text-pixels-of-frame', description: textShare.toFixed(4) }, { type: 'wrong-text-pixel-share', description: wrongShare.toFixed(4) })

    if (wrongShare > MAX_WRONG_TEXT_PIXEL_SHARE) {
      await testInfo.attach('reference', { body: PNG.sync.write(reference), contentType: 'image/png' })
      await testInfo.attach('captured', { body: PNG.sync.write(captured), contentType: 'image/png' })
      await testInfo.attach('diff', { body: PNG.sync.write(wrongPixels.image), contentType: 'image/png' })
    }
    expect(textShare, 'the page paints enough text for the comparison to mean something').toBeGreaterThan(MIN_TEXT_PIXEL_SHARE_OF_FRAME)
    expect(wrongShare, 'share of the text pixels that the PNG gets wrong').toBeLessThanOrEqual(MAX_WRONG_TEXT_PIXEL_SHARE)
  })
}
