// The preview page (/preview/<slug>) is the stage a library component renders on: the detail page
// shows it in an iframe, and image capture loads it in a hidden one. It reports on its backdrop how
// far it has got, as data-preview-state, so callers wait on that one attribute.

/**
 * - `loading`: not ready yet.
 * - `ready`: hydrated, the component committed and laid out, its fonts loaded, and every image
 *   made eager and decoded (an image that fails stays broken, as the browser shows it).
 * - `failed`: the page could not render the component (its code did not load, or the slug is unknown).
 */
export type PreviewState = 'loading' | 'ready' | 'failed'

// Its URL lives in src/library, so the prerender list can build it without importing app code.
export { isCaptureRequest, previewPath } from '../../src/library/preview-url'

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
