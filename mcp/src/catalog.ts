import { z } from 'zod'

/** Formats this server can fetch, which may be a subset of catalog.formats. */
export const FORMATS = ['react', 'html'] as const
export const KINDS = ['section', 'element'] as const

/** The kebab-case slug rule, matching SLUG_PATTERN in src/library/catalog.ts (pinned by contract.test.ts). */
export const SLUG_PATTERN = '[a-z0-9]+(?:-[a-z0-9]+)*'

/** Whether `value` is a valid slug, so it is safe as a URL segment. */
export function isSlug(value: string): boolean {
  return new RegExp(`^${SLUG_PATTERN}$`).test(value)
}

const text = z.string().min(1)
const id = z.string().regex(new RegExp(`^${SLUG_PATTERN}$`), 'Expected a lowercase kebab-case id')
const count = z.number().int().nonnegative()
const url = z.url({ protocol: /^https?$/ })

/** Component metadata read by the tools; unused fields are stripped. */
export const componentSchema = z.object({
  slug: z.string().refine(isSlug, 'Expected a lowercase kebab-case slug'),
  name: text,
  category: id,
  tags: z.array(id),
  description: text,
  kind: z.enum(KINDS),
  url,
})

/** The HTTP catalog contract, independent of the site's dependencies. */
export const catalogSchema = z.object({
  version: z.literal(1),
  name: text,
  url,
  formats: z.array(z.string()),
  groups: z.array(z.object({ id, label: text, categories: z.array(id) })),
  categories: z.array(z.object({ id, label: text, group: id, count })),
  tags: z.array(z.object({ id, count })),
  components: z.array(componentSchema),
})

/** Validated catalog data. */
export type Catalog = z.infer<typeof catalogSchema>
/** Validated component metadata. */
export type Component = z.infer<typeof componentSchema>
/** A supported code format. */
export type Format = typeof FORMATS[number]

/** Parse external catalog data with a distinct error for unsupported versions. */
export function parseCatalog(value: unknown): Catalog {
  if (typeof value === 'object' && value !== null && 'version' in value && value.version !== 1) {
    throw new Error('Unsupported catalog version; patternbook-mcp supports version 1.')
  }
  const result = catalogSchema.safeParse(value)
  if (!result.success) {
    const details = result.error.issues.slice(0, 3).map((issue) => `${issue.path.join('.')}: ${issue.message}`).join('; ')
    throw new Error(`Invalid catalog.json: ${details}`)
  }
  return result.data
}

/** Grouped taxonomy and available formats for filter discovery. */
export const categoriesOutputSchema = z.object({
  groups: z.array(z.object({
    id: z.string(), label: z.string(),
    categories: z.array(catalogSchema.shape.categories.element.pick({ id: true, label: true, count: true })),
  })),
  tags: catalogSchema.shape.tags,
  formats: catalogSchema.shape.formats,
  total: count,
})

/** Group categories in catalog order without duplicating component metadata. */
export function categorySummary(catalog: Catalog): z.infer<typeof categoriesOutputSchema> {
  return {
    groups: catalog.groups.map((group) => ({
      id: group.id, label: group.label,
      categories: group.categories.flatMap((id) => {
        const category = catalog.categories.find((category) => category.id === id)
        return category ? [{ id, label: category.label, count: category.count }] : []
      }),
    })),
    tags: catalog.tags,
    formats: catalog.formats.filter((format) => FORMATS.some((supported) => supported === format)),
    total: catalog.components.length,
  }
}

/** Render available groups, filters, formats and component count. */
export function formatCategories(summary: z.infer<typeof categoriesOutputSchema>): string {
  return [
    `${summary.total} components. Formats: ${summary.formats.join(', ')}.`,
    ...summary.groups.flatMap((group) => [
      `${group.label} (${group.id})`,
      ...group.categories.map((category) => `  ${category.id} | ${category.label} | ${category.count}`),
    ]),
    `Tags: ${summary.tags.map((tag) => `${tag.id} (${tag.count})`).join(', ')}.`,
  ].join('\n')
}
