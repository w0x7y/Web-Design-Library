import type { ReactNode, Ref } from 'react'
import { stageAttributes, stageRootAttributes, type PreviewState } from '~/lib/stage'

// The stage a library component renders on. It sets attributes only (app/lib/stage.ts says which):
// app/stage.css, keyed on them, does all the styling and layout.
// The preview page passes its `state` (thumbnails don't), and `ref` receives the capture root.
export function PreviewSurface({
  kind,
  mode,
  capture,
  state,
  ref,
  children,
}: {
  kind: 'section' | 'element'
  mode: 'page' | 'thumbnail'
  capture?: boolean
  state?: PreviewState
  ref?: Ref<HTMLDivElement>
  children: ReactNode
}) {
  return (
    <div {...stageAttributes({ kind, mode, state, capture })}>
      <div ref={ref} {...stageRootAttributes}>
        {children}
      </div>
    </div>
  )
}
