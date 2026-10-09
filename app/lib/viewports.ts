import type { ComponentMeta } from '../../src/library/types'

// Frame geometry: the size a component lays out at. The detail page's preview iframe, the PNG capture
// frame and the parity test all take their size from frameSize, so they render the same thing.

export const VIEWPORTS = {
  desktop: { width: 1440, height: 900, label: 'Desktop' },
  tablet: { width: 768, height: 1024, label: 'Tablet' },
  mobile: { width: 390, height: 844, label: 'Mobile' },
} as const

export type ViewportId = keyof typeof VIEWPORTS

/** The viewports a PNG can be downloaded at, in menu order. */
export const CAPTURE_VIEWPORTS = ['desktop', 'mobile'] as const satisfies readonly ViewportId[]

export type CaptureViewport = (typeof CAPTURE_VIEWPORTS)[number]

/** Element-kind components (buttons, cards…) don't fill a screen, so their frames are this tall at every width. */
const ELEMENT_FRAME_HEIGHT = 480

/** The frame a component renders in at `viewport`: the viewport's width, and its height unless the component is an element. */
export function frameSize(kind: ComponentMeta['preview']['kind'], viewport: ViewportId): { width: number; height: number } {
  const { width, height } = VIEWPORTS[viewport]
  return { width, height: kind === 'element' ? ELEMENT_FRAME_HEIGHT : height }
}
