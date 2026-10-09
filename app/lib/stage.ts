import type { CSSProperties } from 'react'
import { STAGE_PADDING } from './viewports'

// The stage: the bare page a library component renders on, whatever the site around it. The preview
// page (/preview/<slug>) and browse thumbnails render it through PreviewSurface, the parity harness
// writes it as markup, and image capture and the tests read it. This module is its whole DOM contract:
// the attributes it carries, how to find its parts, how far it has got, and what an image captures.
// app/stage.css styles it from the same attributes.

type Kind = 'section' | 'element'

/**
 * How far the preview page has got, on its backdrop as data-preview-state:
 * - `loading`: not ready yet.
 * - `ready`: hydrated, the component committed and laid out, its fonts loaded, and every image
 *   made eager and decoded (an image that fails stays broken, as the browser shows it).
 * - `failed`: the page could not render the component (its code did not load, or the slug is unknown).
 */
export type PreviewState = 'loading' | 'ready' | 'failed'

// The attribute names, once each.
const BACKDROP = 'data-preview-backdrop'
const ROOT = 'data-capture-root'
const STATE = 'data-preview-state'
const FROZEN = 'data-capture'

/** Selectors for the stage's parts and states. */
export const STAGE = {
  /** The stage itself: its padding, background and layout. */
  backdrop: `[${BACKDROP}]`,
  /** The component's own box, inside the backdrop. */
  root: `[${ROOT}]`,
  /** A preview page that has rendered and settled (see PreviewState). */
  ready: `[${BACKDROP}][${STATE}="ready"]`,
  /** A preview page ready for image capture: settled, with motion frozen (?capture=1, once hydrated). */
  captureReady: `[${BACKDROP}][${STATE}="ready"][${FROZEN}]`,
} as const

/** The attribute that marks the component's own box (STAGE.root), inside the backdrop. */
export const stageRootAttributes = { [ROOT]: '' } as const

/**
 * The backdrop's attributes. `kind` and `mode` drive the layout in app/stage.css (`page` fills the
 * screen, `thumbnail` its box); `state` is only on the preview page, and `capture` freezes motion.
 * The stage padding is set here, so TypeScript and the stylesheet share one value.
 */
export function stageAttributes({
  kind,
  mode,
  state,
  capture = false,
}: {
  kind?: Kind
  mode?: 'page' | 'thumbnail'
  state?: PreviewState
  capture?: boolean
}) {
  return {
    [BACKDROP]: '',
    'data-kind': kind,
    'data-mode': mode,
    [STATE]: state,
    [FROZEN]: capture ? '' : undefined,
    style: { '--stage-padding': `${STAGE_PADDING}px` } as CSSProperties,
  }
}

/** A preview page's stage as plain markup around `html` (the parity harness renders the HTML/CSS twin on it). */
export function stageMarkup(kind: Kind, html: string): string {
  return `<div ${BACKDROP}="" data-kind="${kind}" data-mode="page" style="--stage-padding: ${STAGE_PADDING}px"><div ${ROOT}="">${html}</div></div>`
}

/**
 * What an image of the component captures: an element with its stage (the padding and white
 * backdrop), except on a transparent background, where only the component itself; a section is
 * always its own box (a section paints its own background).
 */
export function captureTargetSelector(kind: Kind, transparent: boolean): string {
  return kind === 'element' && !transparent ? STAGE.backdrop : STAGE.root
}

/** The preview page in `doc`, as far as it has got; null before its stage is in the document. */
export function readStage(doc: Document): { state: PreviewState; frozen: boolean; backdrop: HTMLElement } | null {
  const backdrop = doc.querySelector<HTMLElement>(STAGE.backdrop)
  if (!backdrop) return null
  return {
    state: (backdrop.getAttribute(STATE) as PreviewState | null) ?? 'loading',
    frozen: backdrop.hasAttribute(FROZEN),
    backdrop,
  }
}

/**
 * Resolves once what `root`'s document renders can be screenshotted: laid out, with its web fonts
 * loaded and its images decoded. It refers to nothing outside itself, so a test can run it in a
 * page as it is (`locator.evaluate(settleDocument)`).
 */
export async function settleDocument(root: Element): Promise<void> {
  // Laying the content out is what makes the browser request its fonts; before that, fonts.ready has nothing to wait for.
  root.getBoundingClientRect()
  const doc = root.ownerDocument
  await doc.fonts.ready
  await Promise.all(
    [...doc.images].map((image) => {
      image.loading = 'eager' // images in an off-screen frame would otherwise never load lazily
      return image.decode().catch(() => {}) // a failed image is captured as the browser shows it: broken
    }),
  )
}
