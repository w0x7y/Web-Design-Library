import { readdirSync } from 'node:fs'

export function prerenderPaths(input: { slugs: string[]; categories: string[] }): string[] {
  return [
    '/',
    ...input.categories.map((category) => `/browse/${category}`),
    ...input.slugs.flatMap((slug) => [`/c/${slug}`, `/preview/${slug}`]),
  ]
}

export function listComponentSlugs(dir = 'src/library/components'): string[] {
  try {
    return readdirSync(dir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort()
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return []
    throw error
  }
}
