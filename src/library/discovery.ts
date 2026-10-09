import type { ComponentMeta } from './types'
import { CATEGORY_IDS } from './taxonomy'
import { absoluteUrl, browsePath, componentPath } from './urls'

/** Indexable pages only: the standalone previews and agent files have other discovery paths. */
export function buildSitemap(metas: readonly Pick<ComponentMeta, 'slug'>[]): string {
  const paths = new Set([
    browsePath(null),
    ...CATEGORY_IDS.map((category) => browsePath(category)),
    ...metas.map(({ slug }) => componentPath(slug)),
  ])
  const urls = [...paths].map((path) => `  <url><loc>${escapeXml(absoluteUrl(path))}</loc></url>`)
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

export function buildRobotsTxt(): string {
  // Let crawlers read the preview pages' noindex directive instead of blocking that directive.
  return `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`
}

function escapeXml(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;')
}
