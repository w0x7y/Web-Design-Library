import { readFileSync } from 'node:fs'
import { parseCatalog } from '../src/catalog.js'

// The planned structure supplies descriptive search text until authors write the
// final catalog descriptions. Names, slugs, kinds and tags come directly from
// the inventory; this fixture needs no site build or root dependencies.
const source = readFileSync(new URL('../../docs/superpowers/plans/2026-10-10-layout-pattern-inventory.md', import.meta.url), 'utf8')
const origin = 'https://patternbook-w0x7y.vercel.app'
const groupIds = new Map([
  ['Sections', 'sections'], ['Cards & profiles', 'cards'],
  ['Elements', 'elements'], ['App UI', 'app-ui'],
])
const groups = source.split(/^## Group: /m).slice(1).map((group) => {
  const label = group.split('\n')[0].trim()
  const id = groupIds.get(label)
  if (!id) throw new Error(`Unknown inventory group: ${label}`)
  const categories = group.split(/^### /m).slice(1).map((category) => {
    const categoryId = category.split(' ')[0]
    const components = category.split(/^#### /m).slice(1).map((pattern) => {
      const slug = pattern.split('\n')[0].trim()
      const field = (key: string) => {
        const value = pattern.match(new RegExp(`^- ${key}: (.+)$`, 'm'))?.[1]
        if (!value) throw new Error(`Missing ${key} for inventory pattern ${slug}`)
        return value
      }
      const url = `${origin}/c/${slug}`
      return {
        slug, name: field('name'), category: categoryId,
        kind: field('kind'), tags: field('tags').split(', '),
        description: field('structure'), fonts: [], addedAt: '2026-10-10', url,
        markdownUrl: `${url}.md`,
        formatUrls: { react: `${url}.react.md`, html: `${url}.html.md` },
      }
    })
    const categoryLabel = components[0]?.name.split(' — ')[0]
    if (!categoryLabel) throw new Error(`Missing inventory patterns for ${categoryId}`)
    return { id: categoryId, label: categoryLabel, group: id, count: components.length, components }
  })
  return { id, label, categories }
})
const categories = groups.flatMap((group) => group.categories)
const components = categories.flatMap((category) => category.components)

export const inventoryFixture = parseCatalog({
  version: 1, name: 'Patternbook', url: origin, formats: ['react', 'html'],
  groups: groups.map(({ id, label, categories }) => ({ id, label, categories: categories.map(({ id }) => id) })),
  categories,
  tags: [...new Set(components.flatMap(({ tags }) => tags))].map((id) => ({
    id, count: components.filter(({ tags }) => tags.includes(id)).length,
  })),
  components,
})

// Literal expectations for layouts guaranteed by the inventory. Dashboard has
// several useful KPI compositions, so either overview below is a good top hit.
export const layoutQueries = [
  { query: 'two column hero with image', category: 'hero', slugs: ['hero-split-image'] },
  { query: 'pricing comparison table', category: 'pricing', slugs: ['pricing-comparison-table'] },
  { query: 'login with image panel', category: 'login', slugs: ['login-split-media'] },
  { query: 'settings page with sidebar', category: 'settings', slugs: ['settings-sidebar-sections', 'settings-master-detail'] },
  { query: 'dashboard with KPI cards', category: 'dashboard', slugs: ['dashboard-kpi-chart-list', 'dashboard-sidebar-shell'] },
  { query: 'empty state for no results', category: 'empty-state', slugs: ['empty-state-no-results'] },
  { query: 'testimonial grid', category: 'testimonials', slugs: ['testimonials-card-grid'] },
  { query: 'footer with newsletter', category: 'footer', slugs: ['footer-newsletter-columns'] },
]
