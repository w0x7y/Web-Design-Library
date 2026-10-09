import { expect, test } from '@playwright/test'
import { previewPath } from '../src/library/urls'
import { downloadPng, openDetail } from './lib/pages'

// Headless Chromium hides scrollbars by default, which hides this bug: where scrollbars take layout width
// (Windows, Linux, Firefox), a page taller than the capture frame lays out ~15px narrower than the target,
// so the PNG would be 2850 / 750 px wide instead of 2880 / 780. launchOptions can only be set per file,
// so this lives apart from the other capture tests.
test.use({ launchOptions: { ignoreDefaultArgs: ['--hide-scrollbars'] } })

test('desktop and mobile PNGs of a section taller than the capture frame are still 2880 and 780 px wide', async ({ page }) => {
  // None of the library's sections is taller than its frame yet, so make the capture page overflow:
  // that is what gives the frame a vertical scrollbar. (The extra style sits in <head>, outside the component.)
  const capturePage = previewPath('hero-split-image', { capture: true })
  let injections = 0
  await page.route((url) => url.pathname + url.search === capturePage, async (route) => {
    const response = await route.fetch()
    const html = (await response.text()).replace('</head>', () => {
      injections++
      return '<style>html { min-height: 4000px }</style></head>'
    })
    await route.fulfill({ response, body: html })
  })
  await openDetail(page, 'hero-split-image')
  // Precondition: this browser really reserves scrollbar width (the detail page itself scrolls).
  expect(await page.evaluate(() => window.innerWidth - document.documentElement.clientWidth)).toBeGreaterThan(0)

  for (const [viewport, width] of [['desktop', 2880], ['mobile', 780]] as const) {
    const { png, filename } = await downloadPng(page, viewport)
    expect(filename).toBe(`patternbook-hero-split-image-${viewport}.png`)
    expect(png.width).toBe(width)
  }
  expect(injections, 'each capture page got the overflow style').toBe(2)
})
