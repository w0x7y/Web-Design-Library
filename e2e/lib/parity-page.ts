import { fontLinkTag } from '../../src/library/fonts'
import type { LibraryEntry } from '../../src/library/types'

// A bare page with only index.html + styles.css (+ font link). The wrapper
// mirrors PreviewSurface (app/components/PreviewSurface.tsx) in inline styles.
export function buildParityPage({ meta, sources }: LibraryEntry): string {
  const wrapper =
    meta.preview.kind === 'element'
      ? `<div style="background:#fff;display:flex;align-items:center;justify-content:center;padding:48px;min-height:100vh"><div style="width:fit-content">${sources.html}</div></div>`
      : `<div style="background:#fff">${sources.html}</div>`
  return `<!doctype html><html><head><meta charset="utf-8">${fontLinkTag(meta.fonts)}<style>body{margin:0}</style><style>${sources.css}</style></head><body>${wrapper}</body></html>`
}
