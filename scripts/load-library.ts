import { readFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { listComponentSlugs } from '../src/library/paths'
import type { ComponentMeta, LibraryEntry } from '../src/library/types'

// Node-side counterpart of the Vite registry: reads every component folder
// from disk for tests and build scripts.

async function readOrEmpty(path: string): Promise<string> {
  try {
    return await readFile(path, 'utf8')
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return ''
    throw error
  }
}

export async function loadLibrary(root = 'src/library/components'): Promise<{ folder: string; entry: LibraryEntry }[]> {
  return Promise.all(
    listComponentSlugs(root).map(async (folder) => {
      const dir = resolve(root, folder)
      const [metaModule, tsx, html, css] = await Promise.all([
        import(pathToFileURL(join(dir, 'meta.ts')).href) as Promise<{ default: ComponentMeta }>,
        readOrEmpty(join(dir, 'Component.tsx')),
        readOrEmpty(join(dir, 'index.html')),
        readOrEmpty(join(dir, 'styles.css')),
      ])
      return { folder, entry: { meta: metaModule.default, sources: { tsx, html, css } } }
    }),
  )
}
