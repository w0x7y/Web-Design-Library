import { SITE } from '../site'
import { agentFileServing, buildAgentFiles, buildCatalogJson, buildLlmsTxt, CROSS_ORIGIN_ROUTE, type CatalogJson } from './agent-files'
import { buildAgentMarkdown, buildBrief } from './brief'
import { buildRobotsTxt, buildSitemap } from './discovery'
import { FORMATS, type ComponentMeta, type LibraryEntry } from './types'
import { catalogPath, componentFormatMarkdownPath, componentMarkdownPath, llmsPath, robotsPath, sitemapPath } from './urls'

const meta: ComponentMeta = {
  slug: 'demo',
  name: 'Demo hero',
  category: 'hero',
  tags: ['minimal'],
  description: 'A centered hero with a headline and two buttons.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout: 'Centered column, max-w-3xl.',
    style: 'Neutral palette, large tracking-tight headline.',
    states: 'Buttons have hover and focus-visible styles.',
    responsive: 'Stacks buttons below 640px.',
  },
  addedAt: '2026-10-08',
}

const metaA_hero: ComponentMeta = meta
const metaB_pricing: ComponentMeta = {
  ...meta,
  slug: 'plans',
  name: 'Plans grid',
  category: 'pricing',
  description: 'Three pricing tiers.',
}

const entries: readonly LibraryEntry[] = [metaA_hero, metaB_pricing].map((meta) => ({
  meta,
  sources: { tsx: 'export default function Demo() {}\n', html: '<section>Demo</section>', css: 'section { padding: 2rem; }' },
}))

test('builds combined and per-format briefs, then the indexes and crawler files in stable order', () => {
  const files = buildAgentFiles(entries)
  expect(files.map(({ path }) => '/' + path)).toEqual([
    ...entries.flatMap(({ meta }) => [componentMarkdownPath(meta.slug), ...FORMATS.map((format) => componentFormatMarkdownPath(meta.slug, format))]),
    catalogPath(), llmsPath(), sitemapPath(), robotsPath(),
  ])
  const contents = new Map(files.map(({ path, content }) => ['/' + path, content]))
  for (const { meta, sources } of entries) {
    expect(contents.get(componentMarkdownPath(meta.slug))).toBe(buildAgentMarkdown(meta, sources))
    for (const format of FORMATS) expect(contents.get(componentFormatMarkdownPath(meta.slug, format))).toBe(buildBrief(meta, sources, format))
  }
  expect(contents.get(catalogPath())).toBe(buildCatalogJson(entries.map(({ meta }) => meta)))
  expect(contents.get(llmsPath())).toBe(buildLlmsTxt(entries.map(({ meta }) => meta)))
  expect(contents.get(sitemapPath())).toBe(buildSitemap(entries.map(({ meta }) => meta)))
  expect(contents.get(robotsPath())).toBe(buildRobotsTxt())
  expect(buildAgentFiles(entries)).toEqual(files)
})

test('every built file has serving rules and CORS agrees with those rules', () => {
  const route = new RegExp(CROSS_ORIGIN_ROUTE)
  for (const { path } of buildAgentFiles(entries)) {
    const serving = agentFileServing(path)
    expect(serving, path).toBeDefined()
    expect(route.test('/' + path), path).toBe(serving?.crossOrigin)
  }
  for (const path of ['index.html', 'assets/x.js', 'c/x/index.html', 'README.md', 'fonts/README.md', 'c/x.other.md', 'c/nested/x.md', 'c/x.md/extra', 'catalogXjson', 'catalog.json/extra']) {
    expect(agentFileServing(path), path).toBeUndefined()
    expect(route.test('/' + path), path).toBe(false)
  }
})

test('serves the expected content types and reserves CORS for agents', () => {
  const serving = (path: string) => agentFileServing(path.slice(1))
  const markdown = { contentType: 'text/markdown; charset=utf-8', crossOrigin: true }
  expect(serving(componentMarkdownPath(meta.slug))).toEqual(markdown)
  for (const format of FORMATS) expect(serving(componentFormatMarkdownPath(meta.slug, format))).toEqual(markdown)
  expect(serving(catalogPath())).toEqual({ contentType: 'application/json; charset=utf-8', crossOrigin: true })
  expect(serving(llmsPath())).toEqual({ contentType: 'text/plain; charset=utf-8', crossOrigin: true })
  expect(serving(sitemapPath())).toEqual({ contentType: 'application/xml; charset=utf-8', crossOrigin: false })
  expect(serving(robotsPath())).toEqual({ contentType: 'text/plain; charset=utf-8', crossOrigin: false })
})

test('llms.txt groups by group and category in taxonomy order, skipping empty ones', () => {
  const txt = buildLlmsTxt([metaB_pricing, metaA_hero])
  expect(txt.startsWith('# Patternbook\n\n> Copy-paste UI layouts for developers building with AI agents.\n\n')).toBe(true)
  expect(txt.indexOf('### Hero')).toBeLessThan(txt.indexOf('### Pricing'))
  expect(txt).toContain(`- [Demo hero](${SITE.url}/c/demo.md): ` + metaA_hero.description)
  expect(txt).not.toContain('## Elements')
})
test('llms.txt intro, group heading and entry layout', () => {
  expect(buildLlmsTxt([metaA_hero])).toBe(
    '# Patternbook\n\n' +
    '> Copy-paste UI layouts for developers building with AI agents.\n\n' +
    'Copy-paste UI components as React + Tailwind v4 or HTML + CSS. Each link returns a markdown brief with full source code. ' +
    'Use /catalog.json for metadata and /c/<slug>.react.md or /c/<slug>.html.md for one format.\n\n' +
    '## Sections\n\n' +
    '### Hero\n\n' +
    `- [Demo hero](${SITE.url}/c/demo.md): A centered hero with a headline and two buttons.\n`)
})
// llms.txt lists components in library order, the order the site shows them in: taxonomy, then name by
// UTF-16 code unit (capitals before lowercase, so not localeCompare's order), then slug.
test('llms.txt lists entries in library order', () => {
  const entry = (slug: string, name: string, category: ComponentMeta['category'] = 'hero'): ComponentMeta =>
    ({ ...meta, slug, name, category, description: `${name}.` })
  const txt = buildLlmsTxt([
    entry('btn', 'Solid button', 'buttons'),
    entry('lower', 'alpha hero'),
    entry('zed-2', 'Zed hero'),
    entry('plans', 'Plans grid', 'pricing'),
    entry('zed', 'Zed hero'),
    entry('demo', 'Demo hero'),
  ])
  const url = `${SITE.url}/c`
  expect(txt.slice(txt.indexOf('## '))).toBe(
    '## Sections\n\n' +
    '### Hero\n\n' +
    `- [Demo hero](${url}/demo.md): Demo hero.\n` +
    `- [Zed hero](${url}/zed.md): Zed hero.\n` +
    `- [Zed hero](${url}/zed-2.md): Zed hero.\n` +
    `- [alpha hero](${url}/lower.md): alpha hero.\n\n` +
    '### Pricing\n\n' +
    `- [Plans grid](${url}/plans.md): Plans grid.\n\n` +
    '## Elements\n\n' +
    '### Buttons\n\n' +
    `- [Solid button](${url}/btn.md): Solid button.\n`)
})

test('catalog.json includes versioned metadata and absolute URLs, without briefs or sources', () => {
  const catalog: CatalogJson = JSON.parse(buildCatalogJson([{
    ...meta,
    preview: { kind: 'element', parity: { maxDiffRatio: 0.01, reason: 'Font rendering.' } },
    fonts: ['Inter:wght@400..700', 'Instrument Serif:ital@0;1'],
    author: 'Demo author',
  }]))
  expect(catalog).toEqual({
    version: 1,
    name: 'Patternbook',
    url: SITE.url,
    formats: FORMATS,
    groups: [{ id: 'sections', label: 'Sections', categories: ['hero'] }],
    categories: [{ id: 'hero', label: 'Hero', group: 'sections', count: 1 }],
    tags: [{ id: 'minimal', count: 1 }],
    components: [{
      slug: 'demo',
      name: 'Demo hero',
      category: 'hero',
      tags: ['minimal'],
      description: 'A centered hero with a headline and two buttons.',
      kind: 'element',
      fonts: ['Inter', 'Instrument Serif'],
      addedAt: '2026-10-08',
      url: `${SITE.url}/c/demo`,
      markdownUrl: `${SITE.url}/c/demo.md`,
      formatUrls: { react: `${SITE.url}/c/demo.react.md`, html: `${SITE.url}/c/demo.html.md` },
    }],
  })
})

test('catalog.json counts populated categories and tags in taxonomy order', () => {
  const catalog: CatalogJson = JSON.parse(buildCatalogJson([
    { ...meta, slug: 'button', category: 'buttons', tags: ['light', 'playful'] },
    { ...metaB_pricing, tags: ['light', 'minimal'] },
    meta,
    { ...meta, slug: 'second-hero', tags: ['minimal', 'light'] },
  ]))
  expect(catalog.groups).toEqual([
    { id: 'sections', label: 'Sections', categories: ['hero', 'pricing'] },
    { id: 'elements', label: 'Elements', categories: ['buttons'] },
  ])
  expect(catalog.categories).toEqual([
    { id: 'hero', label: 'Hero', group: 'sections', count: 2 },
    { id: 'pricing', label: 'Pricing', group: 'sections', count: 1 },
    { id: 'buttons', label: 'Buttons', group: 'elements', count: 1 },
  ])
  expect(catalog.tags).toEqual([
    { id: 'minimal', count: 3 },
    { id: 'playful', count: 1 },
    { id: 'light', count: 3 },
  ])
})

test('catalog.json lists components in library order, including name and slug ties', () => {
  const entry = (slug: string, name: string, category: ComponentMeta['category'] = 'hero'): ComponentMeta =>
    ({ ...meta, slug, name, category })
  const catalog: CatalogJson = JSON.parse(buildCatalogJson([
    entry('btn', 'Solid button', 'buttons'),
    entry('lower', 'alpha hero'),
    entry('zed-2', 'Zed hero'),
    entry('plans', 'Plans grid', 'pricing'),
    entry('zed', 'Zed hero'),
    entry('demo', 'Demo hero'),
  ]))
  expect(catalog.components.map((component) => component.slug)).toEqual(['demo', 'zed', 'zed-2', 'lower', 'plans', 'btn'])
})

test('catalog.json is compact and deterministic without changing the input order', () => {
  const metas = [metaB_pricing, meta]
  const json = buildCatalogJson(metas)
  expect(json).toBe(buildCatalogJson(metas))
  expect(json).toBe(buildCatalogJson([...metas].reverse()))
  expect(json).toBe(JSON.stringify(JSON.parse(json)) + '\n')
  expect(metas).toEqual([metaB_pricing, meta])
})

test('catalog.json keeps the schema with empty lists when the library is empty', () => {
  expect(JSON.parse(buildCatalogJson([]))).toEqual({
    version: 1,
    name: 'Patternbook',
    url: SITE.url,
    formats: FORMATS,
    groups: [],
    categories: [],
    tags: [],
    components: [],
  })
})
