import { expect, test, type Page } from '@playwright/test'
import { previewPath } from '../app/lib/preview-ready'
import { loadLibrary } from '../scripts/load-library'
import type { LibraryEntry } from '../src/library/types'
import { buildParityPage } from './lib/parity-page'

// Forced-colors mode (Windows high contrast) repaints colours, backgrounds and borders in system colours,
// so the only focus cue that survives it is an outline. For every component, tabbing to each control must
// make an outline appear somewhere in the component (on the control, a wrapper, a sibling or a
// pseudo-element) that was not there before. That fails both for an outline removed outright
// (outline-none) and for a bare outline-hidden, whose transparent outline forced colours paint on every
// control, focused or not. Both versions are checked: the React one on its preview page, the HTML/CSS
// one on the parity page.

// Components with something to focus (a card that is only text has nothing to check).
const ENTRIES = (await loadLibrary())
  .map((item) => item.entry)
  .filter(({ sources }) => /<(?:a|button|input|select|textarea|summary)\b|tabIndex=/.test(sources.tsx))

const VERSIONS = {
  React: async (page: Page, { meta }: LibraryEntry) => {
    await page.goto(previewPath(meta.slug))
    await page.locator('[data-preview-backdrop][data-preview-state="ready"]').waitFor()
  },
  HTML: (page: Page, entry: LibraryEntry) => page.setContent(buildParityPage(entry)),
}

/** Every element and pseudo-element in the component that currently draws an outline. */
const outlined = (page: Page) =>
  page.evaluate(() => {
    const found: string[] = []
    document.querySelectorAll('[data-capture-root] *').forEach((element, index) => {
      for (const pseudo of [null, '::before', '::after']) {
        const style = getComputedStyle(element, pseudo)
        if (style.outlineStyle !== 'none' && parseFloat(style.outlineWidth) > 0) found.push(`${index}${pseudo ?? ''}`)
      }
    })
    return found
  })

/** A short description of the focused control, or null once focus has left the component. */
const focusedControl = (page: Page) =>
  page.evaluate(() => {
    const element = document.activeElement
    if (!element?.closest('[data-capture-root]')) return null
    const name = element.getAttribute('aria-label') ?? element.textContent ?? ''
    return `<${element.tagName.toLowerCase()}> "${name.trim().slice(0, 40)}"`
  })

for (const entry of ENTRIES) {
  for (const [version, open] of Object.entries(VERSIONS)) {
    test(`${entry.meta.slug} (${version}): every control shows a focus outline in forced-colors mode`, async ({ page }) => {
      await page.emulateMedia({ forcedColors: 'active' })
      await open(page, entry)
      const unfocused = new Set(await outlined(page))
      let controls = 0
      for (let step = 0; step < 200; step++) {
        await page.keyboard.press('Tab')
        const control = await focusedControl(page)
        if (control === null) break
        controls++
        const appeared = (await outlined(page)).filter((key) => !unfocused.has(key))
        expect(appeared.length, `outlines that appear when ${control} has focus`).toBeGreaterThan(0)
      }
      expect(controls, 'controls reached with Tab').toBeGreaterThan(0)
    })
  }
}
