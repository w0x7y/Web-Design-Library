import { SITE } from '../site'
import { isCategoryId } from './taxonomy'

// Every path the site serves, built in one place. It lives below app/ so the prerender list
// (prerenderPaths, below), the agent files (brief.ts, scripts/build-agent-files.ts) and the app share it.
// app/routes.ts declares the matching route patterns.

const CAPTURE_PARAM = 'capture'

/** A component's page. */
export function componentPath(slug: string): string {
  return `/c/${slug}`
}

/** A component's agent file: its brief with both formats' reference code, written at build time. */
export function componentMarkdownPath(slug: string): string {
  return `${componentPath(slug)}.md`
}

/** The browse page: every component (`category` null) or one category. `search` is a `?…` string to keep, e.g. the filters. */
export function browsePath(category: string | null, search = ''): string {
  return `${category ? `/browse/${category}` : '/'}${search}`
}

/** Whether `pathname` renders the browse page: `/` or `/browse/<known category>`. */
export function isBrowsePath(pathname: string): boolean {
  if (pathname === '/') return true
  const match = /^\/browse\/([^/]+)\/?$/.exec(pathname)
  return match !== null && isCategoryId(match[1])
}

/**
 * The preview page: the stage a component renders on alone (app/lib/stage.ts says how it reports
 * readiness). `capture` freezes motion so an image of the page is deterministic.
 */
export function previewPath(slug: string, { capture = false }: { capture?: boolean } = {}): string {
  return `/preview/${slug}${capture ? `?${CAPTURE_PARAM}=1` : ''}`
}

/** Whether the preview page was opened for image capture (see `previewPath`). */
export function isCaptureRequest(searchParams: URLSearchParams): boolean {
  return searchParams.get(CAPTURE_PARAM) === '1'
}

/** `path` on the live site, for links that leave it (canonical URLs, agent files). */
export function absoluteUrl(path: string): string {
  return `${SITE.url}${path}`
}

/** Every page the static build pre-renders: home, each category, then each component's page and preview. */
export function prerenderPaths({ slugs, categories }: { slugs: string[]; categories: string[] }): string[] {
  return [
    browsePath(null),
    ...categories.map((category) => browsePath(category)),
    ...slugs.flatMap((slug) => [componentPath(slug), previewPath(slug)]),
  ]
}
