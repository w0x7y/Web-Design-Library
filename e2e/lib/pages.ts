import { readFile } from 'node:fs/promises'
import { expect, type Locator, type Page } from '@playwright/test'
import { PNG } from 'pngjs'
import { captureTargetSelector, STAGE } from '../../app/lib/stage'
import { frameSize, VIEWPORTS, type CaptureViewport } from '../../app/lib/viewports'
import type { ComponentMeta } from '../../src/library/types'
import { componentPath, previewPath } from '../../src/library/urls'

// Steps several specs take on the site's pages, written once so a renamed control or a changed stage
// contract is a one-place change.

/** Opens a component's detail page and waits until it is interactive (the actions enable once hydrated). */
export async function openDetail(page: Page, slug: string): Promise<void> {
  await page.goto(componentPath(slug))
  await expect(page.getByRole('button', { name: 'Copy code' })).toBeEnabled()
}

/**
 * On an open detail page, downloads the PNG at `viewport` through the Download menu, optionally with
 * a transparent background, and returns the image and its file name.
 */
export async function downloadPng(
  page: Page,
  viewport: CaptureViewport,
  { transparent = false }: { transparent?: boolean } = {},
): Promise<{ png: PNG; filename: string }> {
  await page.getByRole('button', { name: 'Download' }).click()
  if (transparent) await page.getByRole('menuitemcheckbox', { name: 'Transparent background' }).click()
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('menuitem', { name: `${VIEWPORTS[viewport].label} PNG` }).click(),
  ])
  return { png: PNG.sync.read(await readFile(await download.path())), filename: download.suggestedFilename() }
}

/**
 * Opens the component's preview page as image capture does (at the Desktop capture frame's size, with
 * motion frozen) and waits until it is ready to capture. Returns what an opaque capture takes, so a
 * native screenshot of it is the reference a PNG is compared with.
 */
export async function openCapturePage(page: Page, meta: ComponentMeta): Promise<Locator> {
  await page.setViewportSize(frameSize(meta.preview.kind, 'desktop'))
  await page.goto(previewPath(meta.slug, { capture: true }))
  await page.locator(STAGE.captureReady).waitFor()
  return page.locator(captureTargetSelector(meta.preview.kind, false))
}
