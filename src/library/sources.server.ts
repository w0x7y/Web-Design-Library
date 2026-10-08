import type { ComponentSources } from './types'

// Loader-only: raw file contents for the code view and copy actions. Import
// this from route loaders or other .server modules only, so the sources are
// stripped from the client bundle.

const rawFiles = import.meta.glob<string>('./components/*/{Component.tsx,index.html,styles.css}', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const KEY_BY_FILE: Record<string, keyof ComponentSources> = {
  'Component.tsx': 'tsx',
  'index.html': 'html',
  'styles.css': 'css',
}

const SOURCES = new Map<string, ComponentSources>()
for (const [path, text] of Object.entries(rawFiles)) {
  const [, , folder, file] = path.split('/')
  const sources = SOURCES.get(folder) ?? { tsx: '', html: '', css: '' }
  sources[KEY_BY_FILE[file]] = text
  SOURCES.set(folder, sources)
}

export function sourcesFor(slug: string): ComponentSources | undefined {
  return SOURCES.get(slug)
}
