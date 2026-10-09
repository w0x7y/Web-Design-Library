import { expect, test } from '@playwright/test'
import { PNG } from 'pngjs'
import { loadLibrary } from '../scripts/load-library'
import { CATEGORY_IDS } from '../src/library/taxonomy'
import { SITE } from '../src/site'

test.use({ javaScriptEnabled: false })

test('the sitemap contains every canonical page and each URL resolves to that page', async ({ page, request }) => {
  const response = await request.get('/sitemap.xml')
  expect(response.status()).toBe(200)
  expect(response.headers()['content-type']).toMatch(/^application\/xml/)
  const sitemap = await response.text()
  const parsed = await page.evaluate((xml) => {
    const document = new DOMParser().parseFromString(xml, 'application/xml')
    return {
      error: document.querySelector('parsererror')?.textContent,
      namespace: document.documentElement.namespaceURI,
      locations: Array.from(document.getElementsByTagName('loc'), (node) => node.textContent),
    }
  }, sitemap)
  expect(parsed.error).toBeUndefined()
  expect(parsed.namespace).toBe('http://www.sitemaps.org/schemas/sitemap/0.9')
  const entries = await loadLibrary()
  const expected = [
    `${SITE.url}/`,
    ...CATEGORY_IDS.map((category) => `${SITE.url}/browse/${category}`),
    ...entries.map(({ entry }) => `${SITE.url}/c/${entry.meta.slug}`),
  ]
  expect(parsed.locations.toSorted()).toEqual(expected.toSorted())
  // Fetch each path from the test host; canonical URLs always describe production.
  for (let start = 0; start < expected.length; start += 8) {
    const pages = await Promise.all(expected.slice(start, start + 8).map(async (canonical) => {
      const response = await request.get(new URL(canonical).pathname)
      expect(response.status(), canonical).toBe(200)
      expect(response.headers()['content-type'], canonical).toMatch(/^text\/html/)
      return { canonical, html: await response.text() }
    }))
    for (const { canonical, html } of pages) {
      const actual = await page.evaluate((html) => new DOMParser().parseFromString(html, 'text/html').querySelector('link[rel="canonical"]')?.getAttribute('href'), html)
      expect(actual).toBe(canonical)
    }
  }
})

test('robots.txt permits crawling and advertises the production sitemap', async ({ request }) => {
  const response = await request.get('/robots.txt')
  expect(response.status()).toBe(200)
  expect(response.headers()['content-type']).toMatch(/^text\/plain/)
  expect(await response.text()).toBe(`User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`)
})

for (const path of ['/', '/browse/hero', '/c/hero-split-image']) {
  test(`${path} has social image metadata in its prerendered HTML`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const image = `${SITE.url}/social-preview.png`
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${SITE.url}${path}`)
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', `${SITE.url}${path}`)
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', await page.title())
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', image)
    await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute('content', '1200')
    await expect(page.locator('meta[property="og:image:height"]')).toHaveAttribute('content', '630')
    await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute('content', /Patternbook/)
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image')
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute('content', image)
    await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute('content', await page.title())
  })
}

test('the social image is a publicly served 1200 by 630 PNG', async ({ request }) => {
  const response = await request.get('/social-preview.png')
  expect(response.status()).toBe(200)
  expect(response.headers()['content-type']).toMatch(/^image\/png/)
  const image = PNG.sync.read(await response.body())
  expect([image.width, image.height]).toEqual([1200, 630])
})

test('standalone component previews remain noindex', async ({ page }) => {
  await page.goto('/preview/hero-split-image', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex')
  await expect(page.locator('meta[property="og:image"]')).toHaveCount(0)
})
