import type { ReactNode, Ref } from 'react'
import { stageAttributes, stageRootAttributes, type PreviewState } from '~/lib/stage'
import { fontStylesheetHref } from '../../src/library/fonts'

// The stage a library component renders on. It sets attributes only (app/lib/stage.ts says which):
// app/stage.css, keyed on them, does all the styling and layout.
// The preview page passes its `state` (thumbnails don't), and `ref` receives the capture root.
export function PreviewSurface({
  kind,
  fonts,
  mode,
  capture,
  state,
  ref,
  children,
}: {
  kind: 'section' | 'element'
  fonts: string[]
  mode: 'page' | 'thumbnail'
  capture?: boolean
  state?: PreviewState
  ref?: Ref<HTMLDivElement>
  children: ReactNode
}) {
  const fontHref = fontStylesheetHref(fonts)
  return (
    <div {...stageAttributes({ kind, mode, state, capture })}>
      {/* crossOrigin lets PNG capture read this sheet's @font-face rules (cross-origin sheets without CORS are unreadable) and embed the fonts. */}
      {fontHref && <link rel="stylesheet" href={fontHref} crossOrigin="anonymous" precedence="default" />}
      <div ref={ref} {...stageRootAttributes}>
        {children}
      </div>
    </div>
  )
}
