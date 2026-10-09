import { readFile } from 'node:fs/promises'
import { expect, test, type Page } from '@playwright/test'
import { PNG } from 'pngjs'
import { filterMetas } from '../app/lib/filters'
import { previewPath } from '../app/lib/preview-ready'
import { relatedMetas } from '../app/lib/related'
import { frameSize } from '../app/lib/viewports'
import { loadLibrary } from '../scripts/load-library'
import type { CategoryId, StyleTag } from '../src/library/taxonomy'

const ITEMS = await loadLibrary()
const LIBRARY = ITEMS.map((item) => item.entry.meta) // in library order, the order the site shows
const HERO = ITEMS.find((item) => item.entry.meta.slug === 'hero-split-image')!.entry.sources

// How many cards browse should show: the library on disk through the app's own filter (unit-tested in filters.test.ts).
function expectedCount({ category, tags = [], q = '' }: { category?: CategoryId; tags?: StyleTag[]; q?: string }): number {
  return filterMetas(LIBRARY, { category, tags, q }).length
}

// A filter assertion only means something if the filter keeps some cards and drops others.
function expectNarrowing(count: number) {
  expect(count).toBeGreaterThan(0)
  expect(count).toBeLessThan(LIBRARY.length)
}

test('home page renders with site title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Web Library/)
})

test('unknown path renders not-found page', async ({ page }) => {
  await page.goto('/definitely/not/here')
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible()
})

test('preview ?capture=1 freezes motion after hydration', async ({ page }) => {
  await page.goto(previewPath('buttons-minimal', { capture: true }))
  await expect(page.locator('[data-preview-backdrop]')).toHaveAttribute('data-preview-state', 'ready')
  await expect(page.locator('[data-preview-backdrop]')).toHaveAttribute('data-capture', '')
  await expect(page.locator('[data-capture-root] .animate-spin').first()).toHaveCSS('animation-name', 'none')
})

test('preview without ?capture=1 keeps motion', async ({ page }) => {
  await page.goto(previewPath('buttons-minimal'))
  await expect(page.locator('[data-capture-root] .animate-spin').first()).toHaveCSS('animation-name', 'spin')
  await expect(page.locator('[data-preview-backdrop]')).not.toHaveAttribute('data-capture')
})

test('the preview page is a bare stage: no site theme, fonts, toaster or analytics', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('wl:theme', 'dark'))
  const requests: string[] = []
  page.on('request', (request) => requests.push(request.url()))
  await page.goto(previewPath('buttons-minimal'))
  await expect(page.locator('[data-preview-backdrop]')).toHaveAttribute('data-preview-state', 'ready') // hydrated, so the site's effects would have run
  expect(await page.evaluate(() => document.documentElement.classList.contains('dark'))).toBe(false)
  await expect(page.locator('html')).toHaveCSS('color-scheme', 'light')
  await expect(page.locator('section[aria-label^="Notifications"]')).toHaveCount(0) // Sonner's toaster region
  expect(requests.filter((url) => url.includes('/_vercel/insights/') || url.includes('family=Geist'))).toEqual([])
})

// Parity shares the stage stylesheet with the preview page, so it can't see a stage that is wrong on both sides.
test('the stage fills the frame and centres an element at its own width inside 48px of padding', async ({ page }) => {
  const frame = frameSize('element', 'desktop')
  await page.setViewportSize(frame)
  await page.goto(previewPath('buttons-minimal'))
  const backdrop = page.locator('[data-preview-backdrop][data-preview-state="ready"]')
  await expect(backdrop).toHaveCSS('padding', '48px')
  const stage = (await backdrop.boundingBox())!
  const root = (await page.locator('[data-capture-root]').boundingBox())!
  expect(stage).toEqual({ x: 0, y: 0, ...frame })
  // Not stretched to the stage, so a transparent PNG is only as wide as the element.
  expect(root.width).toBeLessThan(stage.width - 2 * 48)
  expect(root.x).toBeCloseTo(stage.width - root.x - root.width, 0)
  expect(root.y).toBeCloseTo(stage.height - root.y - root.height, 0)
})

test('a preview whose component fails to load reports failed', async ({ page }) => {
  await page.route('**/Component-*.js', (route) => route.abort())
  await page.goto(previewPath('buttons-minimal'))
  await expect(page.locator('[data-preview-backdrop]')).toHaveAttribute('data-preview-state', 'failed')
})

test('a preview of an unknown component reports failed', async ({ page }) => {
  await page.goto(previewPath('does-not-exist'))
  await expect(page.locator('[data-preview-backdrop]')).toHaveAttribute('data-preview-state', 'failed')
})

test('agent files are served', async ({ request }) => {
  const llms = await (await request.get('/llms.txt')).text()
  expect(llms).toContain('/c/hero-split-image.md')
  const md = await (await request.get('/c/hero-split-image.md')).text()
  expect(md).toContain('## Reference code (React + Tailwind v4)')
  expect(md).toContain('## Reference code (HTML + CSS)')
})

test('browse lists all components and filters by category', async ({ page }) => {
  const heroes = expectedCount({ category: 'hero' })
  expectNarrowing(heroes)
  await page.goto('/')
  await expect(page.getByTestId('component-card')).toHaveCount(LIBRARY.length)
  await page.getByRole('link', { name: /^Hero/ }).first().click()
  await expect(page).toHaveURL(/\/browse\/hero/)
  await expect(page.getByRole('heading', { level: 1, name: 'Hero' })).toBeVisible()
  await expect(page.getByTestId('component-card')).toHaveCount(heroes)
})

test('search and tag filters sync with the URL', async ({ page }) => {
  const glass = expectedCount({ q: 'glass' })
  const minimal = expectedCount({ tags: ['minimal'] })
  expectNarrowing(glass)
  expectNarrowing(minimal)
  await page.goto('/')
  await page.getByRole('searchbox', { name: 'Search components' }).fill('glass')
  await expect(page).toHaveURL(/q=glass/)
  await expect(page.getByTestId('component-card')).toHaveCount(glass)
  await page.goto('/?tags=minimal')
  await expect(page.getByRole('button', { name: 'minimal', pressed: true })).toBeVisible()
  await expect(page.getByTestId('component-card')).toHaveCount(minimal)
})

test('zero results show empty state with working reset', async ({ page }) => {
  await page.goto('/?q=zzzz&tags=brutalist,unknown')
  await expect(page.getByText('No components match')).toBeVisible()
  await page.getByRole('button', { name: 'Clear filters' }).click()
  await expect(page.getByTestId('component-card')).toHaveCount(LIBRARY.length)
})

test('site dark mode does not restyle component renders', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('wl:theme', 'dark'))
  await page.goto('/')
  expect(await page.evaluate(() => document.documentElement.classList.contains('dark'))).toBe(true)
  const surface = page.locator('[data-preview-backdrop]').first()
  await expect(surface).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(surface).toHaveCSS('color', 'rgb(0, 0, 0)')
  expect(await surface.evaluate(el => getComputedStyle(el).fontFamily)).not.toContain('Geist')
})

test('theme toggle persists', async ({ page }) => {
  await page.goto('/')
  const isDark = () => page.evaluate(() => document.documentElement.classList.contains('dark'))
  const before = await isDark()
  await page.getByRole('button', { name: /Switch to (dark|light) theme/ }).click()
  expect(await isDark()).toBe(!before)
  await page.reload()
  expect(await isDark()).toBe(!before)
})

test('detail page is pre-rendered with title and Open Graph tags', async ({ request }) => {
  const html = await (await request.get('/c/hero-split-image')).text()
  expect(html).toContain('Split hero with image')
  expect(html).toMatch(/property="og:title"/)
  expect(html).toContain('rel="canonical" href="https://web-design-library.vercel.app/c/hero-split-image"')
})

test('preview viewport toggle resizes the frame', async ({ page }) => {
  await page.goto('/c/hero-split-image')
  const frame = page.locator('iframe[title="Split hero with image preview"]')
  await expect(frame).toHaveAttribute('width', '1440')
  await page.getByRole('radio', { name: 'Mobile' }).click()
  await expect(frame).toHaveAttribute('width', '390')
})

test('code tab shows files for the selected format', async ({ page }) => {
  await page.goto('/c/hero-split-image')
  await page.getByRole('tab', { name: 'Code' }).click()
  await expect(page.locator('[data-code-file="Component.tsx"]')).toContainText('export default function')
  await page.getByRole('radio', { name: 'HTML' }).click()
  await expect(page.locator('[data-code-file="index.html"]')).toBeVisible()
  await expect(page.locator('[data-code-file="styles.css"]')).toBeVisible()
})

test('unknown component and category show not-found views', async ({ page }) => {
  await page.goto('/c/does-not-exist')
  await expect(page.getByRole('heading', { name: 'Component not found' })).toBeVisible()
  await expect(page.getByRole('searchbox', { name: 'Search components' })).toBeVisible()
  await page.goto('/browse/nope')
  await expect(page.getByRole('heading', { name: 'Category not found' })).toBeVisible()
})

test('preview frame scales its viewport down to fit the page', async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 800 })
  await page.goto('/c/hero-split-image')
  const frame = page.locator('iframe[title="Split hero with image preview"]')
  await expect(frame).toHaveCSS('opacity', '1') // shown once measured
  const desktop = (await frame.boundingBox())!
  expect(desktop.width).toBeLessThan(1024)
  expect(desktop.height / desktop.width).toBeCloseTo(900 / 1440, 2)
  await page.getByRole('radio', { name: 'Mobile' }).click()
  await expect.poll(async () => (await frame.boundingBox())?.width).toBeCloseTo(390, 0)
  expect((await frame.boundingBox())!.height).toBeCloseTo(844, 0)
})

test('detail tabs follow the keyboard pattern', async ({ page }) => {
  await page.goto('/c/hero-split-image')
  const preview = page.getByRole('tab', { name: 'Preview' })
  const code = page.getByRole('tab', { name: 'Code' })
  await expect(preview).toBeEnabled()
  await preview.focus()
  await page.keyboard.press('ArrowRight')
  await expect(code).toBeFocused()
  await expect(code).toHaveAttribute('aria-selected', 'true')
  await expect(page.getByRole('tabpanel', { name: 'Code' })).toBeVisible()
  await expect(page.getByRole('radiogroup', { name: 'Preview width' })).toHaveCount(0)
  await page.keyboard.press('Home')
  await expect(preview).toHaveAttribute('aria-selected', 'true')
  await expect(page.getByRole('tabpanel', { name: 'Preview' })).toBeVisible()
  await expect(page.getByRole('radiogroup', { name: 'Code format' })).toHaveCount(1)
})

test('format choice persists across reloads', async ({ page }) => {
  await page.goto('/c/hero-split-image')
  await page.getByRole('radio', { name: 'HTML' }).click()
  await page.reload()
  await expect(page.getByRole('radio', { name: 'HTML' })).toBeChecked()
  await page.getByRole('tab', { name: 'Code' }).click()
  await expect(page.locator('[data-code-file="index.html"]')).toBeVisible()
  await expect(page.locator('[data-code-file="Component.tsx"]')).toHaveCount(0)
})

// relatedMetas (unit-tested in related.test.ts) is the oracle: the library on disk is in the order the site uses.
test('related section lists the first three others from the same category, in library order', async ({ page }) => {
  for (const meta of LIBRARY) {
    const related = relatedMetas(meta, LIBRARY).map((other) => other.name)
    await page.goto(`/c/${meta.slug}`)
    await expect(page.getByRole('heading', { level: 1, name: meta.name })).toBeVisible()
    const section = page.getByRole('region', { name: /^More in / })
    if (related.length === 0) {
      await expect(section).toHaveCount(0)
      continue
    }
    await expect(section.getByRole('heading', { level: 3 })).toHaveText(related)
  }
})

test('detail page hydrates and switches views without errors', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error' && !message.text().startsWith('Failed to load resource')) errors.push(message.text())
  })
  await page.goto('/c/hero-split-image')
  await page.getByRole('radio', { name: 'Tablet' }).click()
  await page.getByRole('tab', { name: 'Code' }).click()
  await page.getByRole('radio', { name: 'HTML' }).click()
  await expect(page.locator('[data-code-file="styles.css"]')).toBeVisible()
  expect(errors).toEqual([])
})

test('code body renders in the shell mono font', async ({ page }) => {
  await page.goto('/c/hero-split-image')
  await page.getByRole('tab', { name: 'Code' }).click()
  const code = page.locator('[data-code-file="Component.tsx"] code')
  await expect(code).toBeVisible()
  expect(await code.evaluate((el) => getComputedStyle(el).fontFamily)).toContain('Geist Mono')
  expect(await code.locator('span').first().evaluate((el) => getComputedStyle(el).fontFamily)).toContain('Geist Mono')
})

test.describe('copy and export', () => {
  test.use({ permissions: ['clipboard-read', 'clipboard-write'] })

  const readClipboard = (page: Page) => page.evaluate(() => navigator.clipboard.readText())

  // The page is interactive once the capture buttons enable; before that clicks would be lost.
  async function openDetail(page: Page, slug = 'hero-split-image') {
    await page.goto(`/c/${slug}`)
    await expect(page.getByRole('button', { name: 'Copy code' })).toBeEnabled()
  }

  test('there is exactly one format switch, and it sits in the action bar', async ({ page }) => {
    await openDetail(page)
    await expect(page.getByRole('radiogroup', { name: 'Code format' })).toHaveCount(1)
    await expect(page.getByRole('radio', { name: 'HTML' })).toHaveCount(1)
  })

  test('copy code (react) puts Component.tsx on the clipboard', async ({ page }) => {
    await openDetail(page)
    await page.getByRole('button', { name: 'Copy code' }).click()
    await expect(page.getByText('Copied React code')).toBeVisible()
    expect(await readClipboard(page)).toBe(HERO.tsx)
  })

  test('html format copies a single snippet and persists across reloads', async ({ page }) => {
    await openDetail(page)
    await page.getByRole('radio', { name: 'HTML' }).click()
    await page.getByRole('button', { name: 'Copy code' }).click()
    await expect(page.getByText('Copied HTML + CSS')).toBeVisible()
    const text = await readClipboard(page)
    // The font link comes first (hero-split-image loads Hanken Grotesk), then the scoped CSS, then the markup.
    expect(text).toMatch(/^<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com\/css2\?family=Hanken\+Grotesk[^"]*">\n<style>\n\/\* Scoped reset/)
    expect(text).toContain(`<style>\n${HERO.css.trim()}\n</style>\n${HERO.html.trim()}\n`)
    await page.reload()
    await expect(page.getByRole('radio', { name: 'HTML' })).toBeChecked()
  })

  test('copy for AI puts the brief on the clipboard in the chosen format', async ({ page }) => {
    await openDetail(page)
    await page.getByRole('button', { name: 'Copy for AI' }).click()
    await expect(page.getByText('Copied AI brief')).toBeVisible()
    const brief = await readClipboard(page)
    expect(brief).toMatch(/^# Split hero with image \(Web Library\)\n/)
    expect(brief).toContain('## Reference code (React + Tailwind v4)')

    await page.getByRole('radio', { name: 'HTML' }).click()
    await page.getByRole('button', { name: 'Copy for AI' }).click()
    await expect.poll(() => readClipboard(page)).toContain('## Reference code (HTML + CSS)')
  })

  test('each file in the Code tab has its own copy button', async ({ page }) => {
    await openDetail(page)
    await page.getByRole('tab', { name: 'Code' }).click()
    await page.getByRole('button', { name: 'Copy Component.tsx' }).click()
    await expect(page.getByText('Copied React code')).toBeVisible()
    expect(await readClipboard(page)).toBe(HERO.tsx)

    await page.getByRole('radio', { name: 'HTML' }).click()
    await page.getByRole('button', { name: 'Copy styles.css' }).click()
    await expect(page.getByText('Copied styles.css')).toBeVisible()
    expect(await readClipboard(page)).toBe(HERO.css)
  })

  // PNG sizes are the spec's numbers written out (frame size × capture scale 2), not derived from frameSize:
  // they check what the frame geometry and the capture produce together.
  test('download desktop and mobile PNGs at 2x', async ({ page }) => {
    await openDetail(page)
    for (const [label, width, name] of [['Desktop PNG', 2880, 'desktop'], ['Mobile PNG', 780, 'mobile']] as const) {
      await page.getByRole('button', { name: 'Download' }).click()
      const [dl] = await Promise.all([page.waitForEvent('download'), page.getByRole('menuitem', { name: label }).click()])
      expect(dl.suggestedFilename()).toBe(`web-library-hero-split-image-${name}.png`)
      expect(PNG.sync.read(await readFile(await dl.path())).width).toBe(width)
      await expect(page.getByText(`Downloaded web-library-hero-split-image-${name}.png`)).toBeVisible()
    }
  })

  test('transparent element capture has alpha and no backdrop', async ({ page }) => {
    await openDetail(page, 'buttons-minimal')
    await page.getByRole('button', { name: 'Download' }).click()
    await page.getByRole('menuitemcheckbox', { name: 'Transparent background' }).click()
    const [dl] = await Promise.all([page.waitForEvent('download'), page.getByRole('menuitem', { name: 'Desktop PNG' }).click()])
    const png = PNG.sync.read(await readFile(await dl.path()))
    expect(png.width).toBeLessThan(2880)
    expect(png.data.some((v, i) => i % 4 === 3 && v === 0)).toBe(true) // some fully transparent pixel
  })

  test('opaque element capture keeps the white backdrop at the full frame width', async ({ page }) => {
    await openDetail(page, 'buttons-minimal')
    await page.getByRole('button', { name: 'Download' }).click()
    const [dl] = await Promise.all([page.waitForEvent('download'), page.getByRole('menuitem', { name: 'Desktop PNG' }).click()])
    const png = PNG.sync.read(await readFile(await dl.path()))
    expect({ width: png.width, height: png.height }).toEqual({ width: 2880, height: 960 })
    expect(png.data.some((v, i) => i % 4 === 3 && v !== 255)).toBe(false) // fully opaque
  })

  test('copy image writes a PNG to the clipboard', async ({ page }) => {
    await openDetail(page)
    await page.getByRole('button', { name: 'Copy image' }).click()
    await expect(page.getByText('Copied image')).toBeVisible({ timeout: 12_000 })
    expect(await page.evaluate(async () => (await navigator.clipboard.read())[0].types)).toContain('image/png')
  })

  // aria-disabled rather than disabled: a disabled button drops keyboard focus to <body>.
  test('the capture buttons are aria-disabled while a capture runs, and keep focus', async ({ page }) => {
    await openDetail(page)
    const copyImage = page.getByRole('button', { name: 'Copy image' })
    const download = page.getByRole('button', { name: 'Download' })
    await copyImage.click()
    await expect(copyImage).toHaveAttribute('aria-disabled', 'true')
    await expect(download).toHaveAttribute('aria-disabled', 'true')
    await expect(copyImage).toBeFocused()
    await expect(copyImage).toBeEnabled({ timeout: 12_000 })
    await expect(download).toBeEnabled()

    // Picking a size from the keyboard returns focus to the trigger, which keeps it while the capture runs.
    await download.focus()
    await page.keyboard.press('ArrowDown')
    await expect(page.getByRole('menuitem', { name: 'Desktop PNG' })).toBeFocused()
    const downloaded = page.waitForEvent('download')
    await page.keyboard.press('Enter')
    await expect(download).toHaveAttribute('aria-disabled', 'true')
    await expect(download).toBeFocused()
    await downloaded
    await expect(download).toBeEnabled()
    await expect(download).toBeFocused()
  })

  test('clipboard failure falls back to selected code', async ({ page }) => {
    await page.addInitScript(() => {
      navigator.clipboard.writeText = () => Promise.reject(new Error('denied'))
    })
    await openDetail(page)
    await page.getByRole('button', { name: 'Copy code' }).click()
    await expect(page.getByText("Couldn't copy")).toBeVisible()
    await expect(page.getByText('Your browser blocked clipboard access.')).toBeVisible()
    await expect(page.getByRole('tab', { name: 'Code' })).toHaveAttribute('aria-selected', 'true')
    expect(await page.evaluate(() => getSelection()?.toString())).toContain('export default function')
  })

  test('capture survives failed images and cleans up', async ({ page }) => {
    await page.route('https://images.unsplash.com/**', (r) => r.abort())
    await openDetail(page)
    await page.getByRole('button', { name: 'Download' }).click()
    const [dl] = await Promise.all([
      page.waitForEvent('download', { timeout: 12_000 }),
      page.getByRole('menuitem', { name: 'Desktop PNG' }).click(),
    ])
    expect(dl.suggestedFilename()).toMatch(/desktop\.png$/)
    await expect(page.locator('iframe[data-capture-frame]')).toHaveCount(0)
    await expect(page.getByRole('button', { name: 'Copy image' })).toBeEnabled()
  })

  // The page that the hidden capture frame loads. Aborting it makes the capture fail as soon as the frame loads.
  const isCapturePage = (url: URL) => url.pathname + url.search === previewPath('hero-split-image', { capture: true })

  test('a failed capture offers Retry, removes its frame, and Retry reruns the same capture', async ({ page }) => {
    let failing = true
    await page.route(isCapturePage, (route) => (failing ? route.abort() : route.continue()))
    await openDetail(page)
    await page.getByRole('button', { name: 'Download' }).click()
    await page.getByRole('menuitem', { name: 'Mobile PNG' }).click()
    await expect(page.getByText("Couldn't create image")).toBeVisible()
    await expect(page.locator('iframe[data-capture-frame]')).toHaveCount(0)
    await expect(page.getByRole('button', { name: 'Copy image' })).toBeEnabled()

    failing = false
    const [dl] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: 'Retry' }).click()])
    expect(dl.suggestedFilename()).toBe('web-library-hero-split-image-mobile.png')
  })

  test('opening another component cancels a running capture', async ({ page }) => {
    // The capture page never answers, so without the cancel the capture would wait out its 10 s timeout.
    await page.route(isCapturePage, () => {})
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    await openDetail(page)
    await page.getByRole('button', { name: 'Download' }).click()
    await page.getByRole('menuitem', { name: 'Desktop PNG' }).click()
    await expect(page.locator('iframe[data-capture-frame]')).toHaveCount(1)

    await page.getByRole('region', { name: /^More in / }).getByRole('heading', { level: 3 }).getByRole('link').first().click()
    await expect(page).not.toHaveURL(/\/hero-split-image$/)
    await expect(page.locator('iframe[data-capture-frame]')).toHaveCount(0)
    await expect(page.getByRole('button', { name: 'Copy image' })).toBeEnabled()
    // The cancelled capture stays silent: by the time this copy has toasted, its error would have shown too.
    await page.getByRole('button', { name: 'Copy code' }).click()
    await expect(page.getByText('Copied React code')).toBeVisible()
    await expect(page.getByText("Couldn't create image")).toHaveCount(0)
    expect(errors).toEqual([]) // no unhandled rejection from the abort
  })

  test('a refused copy of one file selects that file', async ({ page }) => {
    await page.addInitScript(() => {
      navigator.clipboard.writeText = () => Promise.reject(new Error('denied'))
    })
    await openDetail(page)
    await page.getByRole('radio', { name: 'HTML' }).click()
    await page.getByRole('tab', { name: 'Code' }).click()
    await page.getByRole('button', { name: 'Copy styles.css' }).click()
    await expect(page.getByText("Couldn't copy")).toBeVisible()
    expect(await page.evaluate(() => getSelection()?.toString())).toContain('/* Scoped reset')
  })

  test('the download menu follows the menu keyboard pattern', async ({ page }) => {
    await openDetail(page)
    const trigger = page.getByRole('button', { name: 'Download' })
    const desktop = page.getByRole('menuitem', { name: 'Desktop PNG' })
    const mobile = page.getByRole('menuitem', { name: 'Mobile PNG' })
    const transparent = page.getByRole('menuitemcheckbox', { name: 'Transparent background' })

    await expect(trigger).toHaveAttribute('aria-haspopup', 'menu')
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await trigger.focus()
    await page.keyboard.press('ArrowDown')
    await expect(page.getByRole('menu')).toBeVisible()
    await expect(trigger).toHaveAttribute('aria-expanded', 'true')
    await expect(desktop).toBeFocused()
    await page.keyboard.press('ArrowDown')
    await expect(mobile).toBeFocused()
    await page.keyboard.press('ArrowDown')
    await expect(transparent).toBeFocused()
    await expect(transparent).toHaveAttribute('aria-checked', 'false')
    await page.keyboard.press('Space') // toggling keeps the menu open
    await expect(transparent).toHaveAttribute('aria-checked', 'true')
    await page.keyboard.press('ArrowDown') // wraps
    await expect(desktop).toBeFocused()
    await page.keyboard.press('ArrowUp') // wraps back
    await expect(transparent).toBeFocused()
    await page.keyboard.press('Home')
    await expect(desktop).toBeFocused()
    await page.keyboard.press('End')
    await expect(transparent).toBeFocused()
    await page.keyboard.press('Escape')
    await expect(page.getByRole('menu')).toHaveCount(0)
    await expect(trigger).toBeFocused()

    await trigger.click()
    await expect(page.getByRole('menu')).toBeVisible()
    await page.getByRole('heading', { level: 1 }).click()
    await expect(page.getByRole('menu')).toHaveCount(0)
  })

  test('analytics events fire only after success, with exactly their props', async ({ page }) => {
    await page.addInitScript(() => {
      const calls: unknown[][] = []
      Object.assign(window, { __va: calls, va: (...args: unknown[]) => calls.push(args) })
    })
    const events = () =>
      page.evaluate(() =>
        (window as unknown as { __va: [string, { name: string; data: unknown }][] }).__va
          .filter(([kind]) => kind === 'event')
          .map(([, event]) => ({ name: event.name, data: event.data })),
      )
    await openDetail(page)

    await page.getByRole('button', { name: 'Copy code' }).click()
    await expect(page.getByText('Copied React code')).toBeVisible()
    await page.getByRole('radio', { name: 'HTML' }).click()
    await page.getByRole('button', { name: 'Copy for AI' }).click()
    await expect(page.getByText('Copied AI brief')).toBeVisible()
    await page.getByRole('button', { name: 'Download' }).click()
    await page.getByRole('menuitem', { name: 'Mobile PNG' }).click()
    await expect(page.getByText('Downloaded web-library-hero-split-image-mobile.png')).toBeVisible({ timeout: 12_000 })
    await page.getByRole('button', { name: 'Copy image' }).click()
    await expect(page.getByText('Copied image')).toBeVisible({ timeout: 12_000 })

    expect(await events()).toEqual([
      { name: 'copy_code', data: { slug: 'hero-split-image', format: 'react' } },
      { name: 'copy_ai', data: { slug: 'hero-split-image', format: 'html' } },
      { name: 'download_png', data: { slug: 'hero-split-image', viewport: 'mobile' } },
      { name: 'copy_image', data: { slug: 'hero-split-image' } },
    ])
  })

  test('the detail page and its actions log no console errors or warnings', async ({ page }) => {
    const problems: string[] = []
    page.on('console', (message) => {
      // The static test server has no Vercel Web Analytics endpoint, so the tracker script 404s here (and only here).
      if (message.location().url.includes('/_vercel/insights/')) return
      if (message.type() === 'error' || message.type() === 'warning') problems.push(`${message.type()}: ${message.text()}`)
    })
    page.on('pageerror', (error) => problems.push(`pageerror: ${error.message}`))
    await openDetail(page)
    await page.getByRole('button', { name: 'Copy code' }).click()
    await expect(page.getByText('Copied React code')).toBeVisible()
    await page.getByRole('button', { name: 'Download' }).click()
    const [dl] = await Promise.all([page.waitForEvent('download'), page.getByRole('menuitem', { name: 'Mobile PNG' }).click()])
    await dl.path()
    await expect(page.getByRole('button', { name: 'Copy image' })).toBeEnabled()
    expect(problems).toEqual([])
  })
})
