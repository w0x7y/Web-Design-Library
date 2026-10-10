import { readdirSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { compareMetas, COMPONENTS_DIR, SOURCE_FILES } from '../src/library/catalog'
import type { ComponentMeta, LibraryEntry } from '../src/library/types'

// Node-side counterpart of the Vite registry and sources.server.ts: reads the component folders from
// disk for the build config, tests and build scripts (catalog.contract.test.ts checks they agree).

/** The component folders' names, sorted. A missing folder means no components; any other error is thrown, so a build never pre-renders an empty library by accident. */
export function listComponentSlugs(dir = COMPONENTS_DIR): string[] {
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

async function readOrEmpty(path: string): Promise<string> {
  try {
    return await readFile(path, 'utf8')
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return ''
    throw error
  }
}

async function loadMeta(dir: string): Promise<ComponentMeta> {
  // A runtime path in Node, not a module for Vite to bundle (the build config loads this file through Vite).
  const metaModule = await import(/* @vite-ignore */ pathToFileURL(join(dir, 'meta.ts')).href) as { default: ComponentMeta }
  return metaModule.default
}

async function readSources(dir: string): Promise<LibraryEntry['sources']> {
  const [tsx, html, css] = await Promise.all([
    readOrEmpty(join(dir, SOURCE_FILES.tsx)),
    readOrEmpty(join(dir, SOURCE_FILES.html)),
    readOrEmpty(join(dir, SOURCE_FILES.css)),
  ])
  return { tsx, html, css }
}

async function loadMetaItems(root: string): Promise<{ folder: string; meta: ComponentMeta }[]> {
  const items = await Promise.all(
    listComponentSlugs(root).map(async (folder) => ({ folder, meta: await loadMeta(resolve(root, folder)) })),
  )
  return items.sort((a, b) => compareMetas(a.meta, b.meta))
}

/** Every component's metadata in library order, without reading its source files. */
export async function loadMetas(root = COMPONENTS_DIR): Promise<ComponentMeta[]> {
  return (await loadMetaItems(root)).map(({ meta }) => meta)
}

/** One component from its folder; missing sources are empty strings, while missing metadata throws. */
export async function loadEntry(slug: string, root = COMPONENTS_DIR): Promise<LibraryEntry> {
  const dir = resolve(root, slug)
  const [meta, sources] = await Promise.all([loadMeta(dir), readSources(dir)])
  return { meta, sources }
}

/** Every component, read from its folder, in library order. */
export async function loadLibrary(root = COMPONENTS_DIR): Promise<{ folder: string; entry: LibraryEntry }[]> {
  return Promise.all(
    (await loadMetaItems(root)).map(async ({ folder, meta }) => ({
      folder,
      entry: { meta, sources: await readSources(resolve(root, folder)) },
    })),
  )
}
