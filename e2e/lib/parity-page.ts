import { readFileSync } from 'node:fs'
import { fontLinkTag } from '../../src/library/fonts'
import type { LibraryEntry } from '../../src/library/types'

const STAGE_CSS = readFileSync(new URL('../../app/stage.css', import.meta.url), 'utf8')

// A bare page with only index.html + styles.css (+ font link), on the preview page's stage:
// the stage stylesheet itself, and the attributes PreviewSurface sets on the preview page.
export function buildParityPage({ meta, sources }: LibraryEntry): string {
  const stage = `<div data-preview-backdrop="" data-kind="${meta.preview.kind}" data-mode="page"><div data-capture-root="">${sources.html}</div></div>`
  return `<!doctype html><html><head><meta charset="utf-8">${fontLinkTag(meta.fonts)}<style>body{margin:0}</style><style>${STAGE_CSS}</style><style>${sources.css}</style></head><body>${stage}</body></html>`
}
