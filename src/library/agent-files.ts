import { SITE } from '../site'
import { buildAgentMarkdown, buildBrief } from './brief'
import { groupMetas, SLUG_PATTERN, type CatalogGroup } from './catalog'
import { buildRobotsTxt, buildSitemap } from './discovery'
import { LAYOUT_TAGS, type CategoryId, type LayoutTag } from './taxonomy'
import { FORMATS, type ComponentMeta, type Format, type LibraryEntry } from './types'
import { absoluteUrl, catalogPath, componentFormatMarkdownPath, componentMarkdownPath, componentPath, llmsPath, robotsPath, sitemapPath } from './urls'

/** Escape a literal path for route matching. */
export const escapeRegex = (path: string): string => path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const FILE_SERVING = [
  { src: escapeRegex(catalogPath()), contentType: 'application/json; charset=utf-8', crossOrigin: true },
  { src: escapeRegex(llmsPath()), contentType: 'text/plain; charset=utf-8', crossOrigin: true },
  { src: `${componentPath(SLUG_PATTERN)}(?:\\.(?:${FORMATS.map(escapeRegex).join('|')}))?\\.md`, contentType: 'text/markdown; charset=utf-8', crossOrigin: true },
  { src: escapeRegex(robotsPath()), contentType: 'text/plain; charset=utf-8', crossOrigin: false },
  { src: escapeRegex(sitemapPath()), contentType: 'application/xml; charset=utf-8', crossOrigin: false },
].map(({ src, ...serving }) => ({ src, serving, pattern: new RegExp(`^${src}$`) }))

/** Vercel route matching exactly the files served with CORS. */
export const CROSS_ORIGIN_ROUTE: string = `^(?:${FILE_SERVING.filter(({ serving }) => serving.crossOrigin).map(({ src }) => src).join('|')})$`

/** Serving rules for a relative agent or discovery path, or undefined for any other file. */
export function agentFileServing(path: string): { contentType: string; crossOrigin: boolean } | undefined {
  return FILE_SERVING.find(({ pattern }) => pattern.test('/' + path))?.serving
}

/** Every agent and discovery file, with paths relative to the site root and content. */
export function buildAgentFiles(entries: readonly LibraryEntry[]): { path: string; content: string }[] {
  const metas = entries.map(({ meta }) => meta)
  return [
    ...entries.flatMap(({ meta, sources }) => [
      { path: componentMarkdownPath(meta.slug), content: buildAgentMarkdown(meta, sources) },
      ...FORMATS.map((format) => ({ path: componentFormatMarkdownPath(meta.slug, format), content: buildBrief(meta, sources, format) })),
    ]),
    { path: catalogPath(), content: buildCatalogJson(metas) },
    { path: llmsPath(), content: buildLlmsTxt(metas) },
    { path: sitemapPath(), content: buildSitemap(metas) },
    { path: robotsPath(), content: buildRobotsTxt() },
  ].map(({ path, content }) => ({ path: path.slice(1), content }))
}

const LLMS_INTRO =
  'Neutral layout patterns as React + Tailwind v4 or HTML + CSS. Apply the host project\'s design tokens and content. Each link returns a markdown brief with full source code. ' +
  `Use ${catalogPath()} for metadata and ${FORMATS.map((format) => componentFormatMarkdownPath('<slug>', format)).join(' or ')} for one format.`

/** Version 1 component metadata, without briefs or sources. */
export interface CatalogJson {
  version: 1
  name: string
  description: string
  url: string
  formats: Format[]
  groups: { id: CatalogGroup['id']; label: string; categories: CategoryId[] }[]
  categories: { id: CategoryId; label: string; group: CatalogGroup['id']; count: number }[]
  tags: { id: LayoutTag; count: number }[]
  components: (Pick<ComponentMeta, 'slug' | 'name' | 'category' | 'tags' | 'description' | 'addedAt'> & {
    kind: ComponentMeta['preview']['kind']
    fonts: string[]
    url: string
    markdownUrl: string
    formatUrls: Record<Format, string>
  })[]
}

/** The /llms.txt index: every component under its group and category, in library order. */
export function buildLlmsTxt(metas: readonly ComponentMeta[]): string {
  const sections: string[] = [`# ${SITE.name}`, `> ${SITE.tagline}`, LLMS_INTRO]
  for (const group of groupMetas(metas)) {
    sections.push(`## ${group.label}`)
    for (const category of group.categories) {
      const lines = category.metas.map((meta) => `- [${meta.name}](${absoluteUrl(componentMarkdownPath(meta.slug))}): ${meta.description}`)
      sections.push(`### ${category.label}\n\n${lines.join('\n')}`)
    }
  }
  return sections.join('\n\n') + '\n'
}

/** The /catalog.json index: versioned metadata in library order, omitting empty categories and tags. */
export function buildCatalogJson(metas: readonly ComponentMeta[]): string {
  const groups = groupMetas(metas)
  const catalog: CatalogJson = {
    version: 1,
    name: SITE.name,
    description: 'Neutral layout patterns with copy-paste React + Tailwind v4 and HTML + CSS. Apply the host project\'s design tokens and content.',
    url: SITE.url,
    formats: [...FORMATS],
    groups: groups.map((group) => ({ id: group.id, label: group.label, categories: group.categories.map((category) => category.id) })),
    categories: groups.flatMap((group) => group.categories.map((category) => ({
      id: category.id,
      label: category.label,
      group: group.id,
      count: category.metas.length,
    }))),
    tags: LAYOUT_TAGS.map((id) => ({ id, count: metas.filter((meta) => meta.tags.includes(id)).length })).filter((tag) => tag.count > 0),
    components: groups.flatMap((group) => group.categories.flatMap((category) => category.metas.map((meta) => ({
      slug: meta.slug,
      name: meta.name,
      category: meta.category,
      tags: meta.tags,
      description: meta.description,
      kind: meta.preview.kind,
      fonts: [],
      addedAt: meta.addedAt,
      url: absoluteUrl(componentPath(meta.slug)),
      markdownUrl: absoluteUrl(componentMarkdownPath(meta.slug)),
      formatUrls: Object.fromEntries(FORMATS.map((format) => [format, absoluteUrl(componentFormatMarkdownPath(meta.slug, format))])) as Record<Format, string>,
    })))),
  }
  return JSON.stringify(catalog) + '\n'
}
