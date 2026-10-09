import type { ReactNode, Ref } from 'react'
import type { PreviewState } from '~/lib/preview-ready'
import { fontStylesheetHref } from '../../src/library/fonts'

// The stage a library component renders on. It sets attributes only: app/stage.css, keyed on them,
// does all the styling and layout, and the parity harness (e2e/lib/parity-page.ts) builds the same stage.
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
    <div
      data-preview-backdrop=""
      data-kind={kind}
      data-mode={mode}
      data-preview-state={state}
      data-capture={capture ? '' : undefined}
    >
      {/* crossOrigin lets PNG capture read this sheet's @font-face rules (cross-origin sheets without CORS are unreadable) and embed the fonts. */}
      {fontHref && <link rel="stylesheet" href={fontHref} crossOrigin="anonymous" precedence="default" />}
      <div ref={ref} data-capture-root="">
        {children}
      </div>
    </div>
  )
}
