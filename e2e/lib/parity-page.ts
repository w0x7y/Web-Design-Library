import { readFileSync } from 'node:fs'
import { stageMarkup } from '../../app/lib/stage'
import type { LibraryEntry } from '../../src/library/types'

const STAGE_CSS = readFileSync(new URL('../../app/stage.css', import.meta.url), 'utf8')

// A bare page with only index.html + styles.css, on the preview page's stage:
// the stage stylesheet itself, and the stage markup app/lib/stage.ts defines.
export function buildParityPage({ meta, sources }: LibraryEntry): string {
  const stage = stageMarkup(meta.preview.kind, sources.html)
  return `<!doctype html><html><head><meta charset="utf-8"><style>body{margin:0}</style><style>${STAGE_CSS}</style><style>${sources.css}</style></head><body>${stage}</body></html>`
}
