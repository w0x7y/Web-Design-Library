import { readFile } from 'node:fs/promises'
import { expect, test } from '@playwright/test'
import { PNG } from 'pngjs'
import { previewPath } from '../app/lib/preview-ready'

// Headless Chromium hides scrollbars by default, which hides this bug: where scrollbars take layout width
// (Windows, Linux, Firefox), a page taller than the capture frame lays out ~15px narrower than the target,
// so the PNG would be 2850 / 750 px wide instead of 2880 / 780. launchOptions can only be set per file,
// so this lives apart from the other capture tests.
test.use({
  permissions: ['clipboard-read', 'clipboard-write'],
  launchOptions: { ignoreDefaultArgs: ['--hide-scrollbars'] },
})

test('desktop and mobile PNGs of a section taller than the capture frame are still 2880 and 780 px wide', async ({ page }) => {
  // None of the library's sections is taller than its frame yet, so make the capture page overflow:
  // that is what gives the frame a vertical scrollbar. (The extra style sits in <head>, outside the component.)
  const capturePage = previewPath('hero-split-image', { capture: true })
  await page.route((url) => url.pathname + url.search === capturePage, async (route) => {
    const response = await route.fetch()
    const html = (await response.text()).replace('</head>', '<style>html { min-height: 4000px }</style></head>')
    await route.fulfill({ response, body: html })
  })
  await page.goto('/c/hero-split-image')
  await expect(page.getByRole('button', { name: 'Copy code' })).toBeEnabled()
  // Precondition: this browser really reserves scrollbar width (the detail page itself scrolls).
  expect(await page.evaluate(() => window.innerWidth - document.documentElement.clientWidth)).toBeGreaterThan(0)

  for (const [label, width, name] of [['Desktop PNG', 2880, 'desktop'], ['Mobile PNG', 780, 'mobile']] as const) {
    await page.getByRole('button', { name: 'Download' }).click()
    const [dl] = await Promise.all([page.waitForEvent('download'), page.getByRole('menuitem', { name: label }).click()])
    expect(dl.suggestedFilename()).toBe(`web-library-hero-split-image-${name}.png`)
    expect(PNG.sync.read(await readFile(await dl.path())).width).toBe(width)
  }
})
