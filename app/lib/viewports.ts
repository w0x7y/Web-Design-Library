import type { ComponentMeta } from '../../src/library/types'

// Frame geometry: the size a component lays out at, and how a rendered component is fitted into the
// boxes that show it. The detail page's preview iframe, the PNG capture frame and the parity test all
// take their size from frameSize, so they render the same thing; previewBox and thumbnailFit are the
// maths the detail page's preview and the browse thumbnails fit a component with.

export const VIEWPORTS = {
  desktop: { width: 1440, height: 900, label: 'Desktop' },
  tablet: { width: 768, height: 1024, label: 'Tablet' },
  mobile: { width: 390, height: 844, label: 'Mobile' },
} as const

export type ViewportId = keyof typeof VIEWPORTS

/** The viewports a PNG can be downloaded at, in menu order. */
export const CAPTURE_VIEWPORTS = ['desktop', 'mobile'] as const satisfies readonly ViewportId[]

export type CaptureViewport = (typeof CAPTURE_VIEWPORTS)[number]

/** A PNG's pixel ratio: a capture is drawn at this many device pixels per CSS pixel. */
export const CAPTURE_SCALE = 2

/** Element-kind components (buttons, cards…) don't fill a screen, so their frames are this tall at every width. */
const ELEMENT_FRAME_HEIGHT = 480

/** The frame a component renders in at `viewport`: the viewport's width, and its height unless the component is an element. */
export function frameSize(kind: ComponentMeta['preview']['kind'], viewport: ViewportId): { width: number; height: number } {
  const { width, height } = VIEWPORTS[viewport]
  return { width, height: kind === 'element' ? ELEMENT_FRAME_HEIGHT : height }
}

/** The padding around an element on its stage. app/lib/stage.ts sets it on every stage, as --stage-padding. */
export const STAGE_PADDING = 48

type Kind = ComponentMeta['preview']['kind']

interface Size {
  width: number
  height: number
}

/**
 * The visible part of a frame, for the detail page's preview. A section shorter than its frame is
 * clipped to its own height; an element (centred in its frame) to its height plus the stage padding,
 * with `shift` the distance to move the frame up so the element stays centred in the clipped box.
 * Until the content is measured (`contentHeight` null) the whole frame shows.
 */
export function previewBox(kind: Kind, frame: Size, contentHeight: number | null): { height: number; shift: number } {
  if (contentHeight === null) return { height: frame.height, shift: 0 }
  if (kind === 'section') return { height: Math.min(frame.height, contentHeight), shift: 0 }
  const height = Math.min(frame.height, contentHeight + 2 * STAGE_PADDING)
  return { height, shift: (frame.height - height) / 2 }
}

/** The width browse thumbnails render a section at (narrower on a smaller screen: see thumbnailStageWidth). */
export const THUMBNAIL_STAGE_WIDTH = 1280
/** The widest an element can render in a thumbnail: the stage's inner width. */
export const THUMBNAIL_ELEMENT_MAX_WIDTH = THUMBNAIL_STAGE_WIDTH - 2 * STAGE_PADDING
/** The least space left around an element in a thumbnail before it is shrunk. */
const THUMBNAIL_ELEMENT_MARGIN = 24
/** A section is a thin strip when it fills less than this share of the thumbnail's height. */
const THIN_SHARE = 0.2

/**
 * The width a thumbnail lays a section out at. Breakpoints follow the real viewport, so on a screen
 * narrower than THUMBNAIL_STAGE_WIDTH the stage is the screen's width: a stacked mobile layout shows
 * at the width it was designed for, not stretched.
 */
export function thumbnailStageWidth(viewportWidth: number): number {
  return Math.min(THUMBNAIL_STAGE_WIDTH, viewportWidth)
}

/**
 * How a rendered component sits in a browse thumbnail of size `frame`.
 * - A section is scaled to the frame's width. One that ends above the frame's bottom is `short`: it
 *   is centred (`offset` from the top) and the frame takes its background. One that fills less than a
 *   fifth of the frame is `thin` (a navbar): it stays at the top, above a sketch of a page.
 * - An element keeps its size, centred, and shrinks only to keep a 24px margin.
 */
export function thumbnailFit(
  kind: Kind,
  frame: Size & { stage: number },
  content: Size,
): { scale: number; offset: number; short: boolean; thin: boolean } {
  if (kind === 'element') {
    const margin = 2 * THUMBNAIL_ELEMENT_MARGIN
    const scale = Math.min(1, (frame.width - margin) / content.width, (frame.height - margin) / content.height)
    return { scale, offset: 0, short: false, thin: false }
  }
  const scale = frame.width / frame.stage
  const height = content.height * scale
  const short = height < frame.height
  const thin = short && height < frame.height * THIN_SHARE
  return { scale, offset: short && !thin ? (frame.height - height) / 2 : 0, short, thin }
}
