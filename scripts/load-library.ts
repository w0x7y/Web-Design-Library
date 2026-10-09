import { readFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { compareMetas, COMPONENTS_DIR, SOURCE_FILES } from '../src/library/catalog'
import { listComponentSlugs } from '../src/library/paths'
import type { ComponentMeta, LibraryEntry } from '../src/library/types'

// Node-side counterpart of the Vite registry and sources.server.ts: reads every component folder
// from disk for tests and build scripts, in library order (catalog.contract.test.ts checks they agree).

async function readOrEmpty(path: string): Promise<string> {
  try {
    return await readFile(path, 'utf8')
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return ''
    throw error
  }
}

export async function loadLibrary(root = COMPONENTS_DIR): Promise<{ folder: string; entry: LibraryEntry }[]> {
  const items = await Promise.all(
    listComponentSlugs(root).map(async (folder) => {
      const dir = resolve(root, folder)
      const [metaModule, tsx, html, css] = await Promise.all([
        import(pathToFileURL(join(dir, 'meta.ts')).href) as Promise<{ default: ComponentMeta }>,
        readOrEmpty(join(dir, SOURCE_FILES.tsx)),
        readOrEmpty(join(dir, SOURCE_FILES.html)),
        readOrEmpty(join(dir, SOURCE_FILES.css)),
      ])
      return { folder, entry: { meta: metaModule.default, sources: { tsx, html, css } } }
    }),
  )
  return items.sort((a, b) => compareMetas(a.entry.meta, b.entry.meta))
}
