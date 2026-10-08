import type { ReactNode } from 'react'
import { fontStylesheetHref } from '../../src/library/fonts'

// Neutral stage for a library component: white, black text, default sans,
// light color scheme, whatever the site theme. The parity harness
// (e2e/lib/parity-page.ts) mirrors this layout in inline styles.
export function PreviewSurface({
  kind,
  fonts,
  mode,
  capture,
  children,
}: {
  kind: 'section' | 'element'
  fonts: string[]
  mode: 'page' | 'thumbnail'
  capture?: boolean
  children: ReactNode
}) {
  const fontHref = fontStylesheetHref(fonts)
  const backdrop = [
    'bg-white text-black font-sans [color-scheme:light]',
    mode === 'page' ? 'min-h-screen' : 'h-full',
    kind === 'element' ? 'flex items-center justify-center p-12' : '',
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <div data-preview-backdrop="" data-capture={capture ? '' : undefined} className={backdrop}>
      {fontHref && <link rel="stylesheet" href={fontHref} precedence="default" />}
      <div data-capture-root="" className={kind === 'section' ? 'w-full' : 'w-fit'}>
        {children}
      </div>
    </div>
  )
}
