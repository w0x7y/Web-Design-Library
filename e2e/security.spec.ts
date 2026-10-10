import { expect, test } from '@playwright/test'
import { contentSecurityPolicy } from '../scripts/build-vercel-output'
import { listComponentSlugs } from '../scripts/load-library'
import { CATEGORY_IDS } from '../src/library/taxonomy'
import { prerenderPaths } from '../src/library/urls'
import { STAGE } from '../app/lib/stage'
import { downloadPng, openDetail } from './lib/pages'

test('every static page and the SPA fallback have a policy matching the served HTML', async ({ request }) => {
  const paths = [...prerenderPaths({ slugs: listComponentSlugs(), categories: CATEGORY_IDS }), '/index.html', '/c/buttons-hierarchy/', '/c/buttons-hierarchy/index.html', '/unknown/path']
  for (const path of paths) {
    const response = await request.get(path)
    expect(response.ok(), path).toBe(true)
    expect(response.headers()['content-security-policy'], path).toBe(contentSecurityPolicy(await response.text()))
    expect(response.headers()['x-content-type-options']).toBe('nosniff')
  }
  expect((await request.get('/c/buttons-hierarchy.md')).headers()['content-type']).toBe('text/markdown; charset=utf-8')
})

test('CSP blocks an injected inline script while navigation and image capture work', async ({ page }) => {
  await openDetail(page, 'buttons-hierarchy')
  await page.evaluate(() => {
    document.addEventListener('securitypolicyviolation', (event) => {
      document.body.dataset.blockedDirective = event.effectiveDirective
    })
    const script = document.createElement('script')
    script.textContent = 'document.body.dataset.injected = "executed"'
    document.body.appendChild(script)
  })
  await expect(page.locator('body')).toHaveAttribute('data-blocked-directive', 'script-src-elem')
  await expect(page.locator('body')).not.toHaveAttribute('data-injected')
  const { png } = await downloadPng(page, 'mobile')
  expect(png.width).toBe(780)
  await page.getByRole('link', { name: 'Patternbook', exact: true }).click()
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Copy-paste UI for you and your agent.')
})

test('the shell loads local Geist fonts while Google Fonts is unavailable', async ({ page }) => {
  await page.route('https://fonts.googleapis.com/**', (route) => route.abort())
  await page.route('https://fonts.gstatic.com/**', (route) => route.abort())
  await openDetail(page, 'buttons-hierarchy')
  await page.getByRole('tab', { name: 'Code', exact: true }).click()
  const loaded = await page.evaluate(async () => {
    await document.fonts.ready
    return [...document.fonts].filter((face) => face.status === 'loaded').map((face) => face.family.replaceAll('"', ''))
  })
  expect(loaded).toEqual(expect.arrayContaining(['Geist', 'Geist Mono']))
  await page.goto('/preview/buttons-hierarchy')
  await expect(page.locator(STAGE.ready)).toBeVisible()
  expect(await page.evaluate(() => [...document.fonts].some((face) => face.status === 'loaded' && face.family.includes('Geist')))).toBe(false)
})
