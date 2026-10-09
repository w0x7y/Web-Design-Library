// The preview page's URL, /preview/<slug>: the stage a library component renders on (app/lib/preview-ready.ts
// says how it reports readiness). It sits below app/ because the prerender list (paths.ts) builds it too.

const CAPTURE_PARAM = 'capture'

/** The preview page's URL. `capture` freezes motion so an image of the page is deterministic. */
export function previewPath(slug: string, { capture = false }: { capture?: boolean } = {}): string {
  return `/preview/${slug}${capture ? `?${CAPTURE_PARAM}=1` : ''}`
}

/** Whether the preview page was opened for image capture (see `previewPath`). */
export function isCaptureRequest(searchParams: URLSearchParams): boolean {
  return searchParams.get(CAPTURE_PARAM) === '1'
}
