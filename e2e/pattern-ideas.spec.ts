import { expect, test } from '@playwright/test'
import { STORAGE_KEYS } from '../app/lib/storage'
import { loadMetas } from '../scripts/load-library'
import { TAG_GROUPS } from '../src/library/taxonomy'
import { componentPath } from '../src/library/urls'

const METAS = await loadMetas()
const HERO = METAS.find((meta) => meta.slug === 'hero-split-image')
if (!HERO) throw new Error('The hero exemplar must exist')

for (const width of [320, 390, 1440]) {
  for (const theme of ['light', 'dark']) {
    test(`layout tag groups are labelled and fit at ${width}px in ${theme}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 })
      await page.addInitScript(([key, value]) => localStorage.setItem(key, value), [STORAGE_KEYS.theme, theme])
      await page.goto('/browse/hero')
      const filter = page.getByRole('group', { name: 'Filter by layout', exact: true })
      for (const { label, tags } of TAG_GROUPS) {
        const group = filter.getByRole('group', { name: label, exact: true })
        await expect(group.getByText(label, { exact: true })).toBeVisible()
        await expect(group.getByRole('button')).toHaveText([...tags])
        for (const tag of tags) await expect(group.getByRole('button', { name: tag, exact: true })).toBeEnabled()
        expect(await group.evaluate((el) => el.scrollWidth - el.clientWidth)).toBe(0)
      }
      // Composition + Content still use the same URL and require both tags.
      await filter.getByRole('button', { name: 'split', exact: true }).click()
      await filter.getByRole('button', { name: 'media', exact: true }).click()
      await expect(page).toHaveURL(/\/browse\/hero\?tags=split,media$/)
      await expect(page.getByTestId('component-card')).toHaveCount(METAS.filter((meta) => meta.category === 'hero' && meta.tags.includes('split') && meta.tags.includes('media')).length)
      await page.reload()
      await expect(filter.getByRole('button', { name: 'split', pressed: true })).toBeEnabled()
      await expect(filter.getByRole('button', { name: 'media', pressed: true })).toBeEnabled()
      await filter.getByRole('button', { name: 'Clear layout filters' }).click()
      await expect(page).toHaveURL(/\/browse\/hero$/)
      expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBe(0)
    })

    test(`the desktop wireframe scrolls inside its focusable box at ${width}px in ${theme}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 })
      await page.addInitScript(([key, value]) => localStorage.setItem(key, value), [STORAGE_KEYS.theme, theme])
      await page.goto(componentPath(HERO.slug))
      const diagram = page.getByRole('region', { name: 'Desktop wireframe', exact: true })
      await expect(diagram.locator('code')).toHaveText(HERO.wireframe)
      await expect(diagram).toHaveAttribute('tabindex', '0')
      await diagram.focus()
      await expect(diagram).toHaveCSS('outline-style', 'solid')
      if (width < 640) {
        // The diagram remains a desktop diagram; its box alone scrolls horizontally.
        await diagram.press('ArrowRight')
        await expect.poll(() => diagram.evaluate((el) => el.scrollLeft)).toBeGreaterThan(0)
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBe(0)
      await page.getByRole('tab', { name: 'Code' }).click()
      await page.getByRole('radio', { name: 'HTML', exact: true }).click()
      await expect(page.getByRole('region', { name: 'Pattern notes', exact: true })).toBeVisible()
      await expect(diagram.locator('code')).toHaveText(HERO.wireframe)
    })
  }
}

test.describe('pattern ideas before hydration', () => {
  test.use({ javaScriptEnabled: false })

  for (const slug of ['hero-split-image', 'faq-accordion', 'buttons-hierarchy']) {
    test(`${slug} includes all brief notes and the literal wireframe in the static page`, async ({ page }) => {
      const meta = METAS.find((meta) => meta.slug === slug)
      if (!meta) throw new Error(`Missing exemplar: ${slug}`)
      await page.goto(componentPath(slug))
      const notes = page.getByRole('region', { name: 'Pattern notes', exact: true })
      await expect(notes.locator('dt')).toHaveText(['When to use', 'Hierarchy', 'Responsive', 'Layout', 'States'])
      await expect(notes.locator('dd')).toHaveText([meta.brief.usage, meta.brief.hierarchy, meta.brief.responsive, meta.brief.layout, meta.brief.states])
      await expect(notes.locator('pre code')).toHaveText(meta.wireframe)
    })
  }

  test('layout groups are visible in the static browse page', async ({ page }) => {
    await page.goto('/browse/hero')
    const filter = page.getByRole('group', { name: 'Filter by layout', exact: true })
    for (const { label } of TAG_GROUPS) {
      await expect(filter.getByRole('group', { name: label }).getByText(label, { exact: true })).toBeVisible()
    }
  })
})

test('the wireframe has a focus outline in forced-colors mode', async ({ page }) => {
  await page.emulateMedia({ forcedColors: 'active' })
  await page.goto(componentPath(HERO.slug))
  const diagram = page.getByRole('region', { name: 'Desktop wireframe', exact: true })
  await diagram.focus()
  await expect(diagram).toHaveCSS('outline-style', 'solid')
  await expect(diagram).toHaveCSS('outline-width', '2px')
})
