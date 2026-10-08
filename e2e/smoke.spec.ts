import { expect, test } from '@playwright/test'

test('home page renders with site title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Web Library/)
})

test('unknown path renders not-found page', async ({ page }) => {
  await page.goto('/definitely/not/here')
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible()
})

test('preview ?capture=1 freezes motion after hydration', async ({ page }) => {
  await page.goto('/preview/buttons-minimal?capture=1')
  await expect(page.locator('[data-preview-backdrop]')).toHaveAttribute('data-capture', '')
  await expect(page.locator('[data-capture-root] .animate-spin').first()).toHaveCSS('animation-name', 'none')
})

test('preview without ?capture=1 keeps motion', async ({ page }) => {
  await page.goto('/preview/buttons-minimal')
  await expect(page.locator('[data-capture-root] .animate-spin').first()).toHaveCSS('animation-name', 'spin')
  await expect(page.locator('[data-preview-backdrop]')).not.toHaveAttribute('data-capture')
})
