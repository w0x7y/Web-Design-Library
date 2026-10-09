import { slugOfGlobPath, SOURCE_FILES } from './catalog'
import type { ComponentSources } from './types'

// Loader-only: raw file contents for the code view and copy actions. Import
// this from route loaders or other .server modules only, so the sources are
// stripped from the client bundle.
// The glob pattern lists catalog.ts's SOURCE_FILES; catalog.contract.test.ts checks they agree.

const rawFiles = import.meta.glob<string>('./components/*/{Component.tsx,index.html,styles.css}', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const KEY_BY_FILE = new Map<string, keyof ComponentSources>(
  (Object.keys(SOURCE_FILES) as (keyof ComponentSources)[]).map((key) => [SOURCE_FILES[key], key]),
)

const SOURCES = new Map<string, ComponentSources>()
for (const [path, text] of Object.entries(rawFiles)) {
  const file = path.slice(path.lastIndexOf('/') + 1)
  const key = KEY_BY_FILE.get(file)
  if (!key) throw new Error(`The sources glob matched ${path}, which is not one of SOURCE_FILES`)
  const slug = slugOfGlobPath(path)
  const sources = SOURCES.get(slug) ?? { tsx: '', html: '', css: '' }
  sources[key] = text
  SOURCES.set(slug, sources)
}

export function sourcesFor(slug: string): ComponentSources | undefined {
  return SOURCES.get(slug)
}
