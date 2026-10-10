import { SITE } from '../site'
import { isCategoryId } from './taxonomy'
import type { Format } from './types'

// Every path the site serves, shared by the prerender list, agent files and app.
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

/** A component's agent brief with reference code for one format, written at build time. */
export function componentFormatMarkdownPath(slug: string, format: Format): string {
  return `${componentPath(slug)}.${format}.md`
}

/** The versioned component metadata index. */
export function catalogPath(): string {
  return '/catalog.json'
}

/** The component brief index for agents. */
export function llmsPath(): string {
  return '/llms.txt'
}

/** The canonical page index for crawlers. */
export function sitemapPath(): string {
  return '/sitemap.xml'
}

/** The crawler policy and sitemap location. */
export function robotsPath(): string {
  return '/robots.txt'
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
