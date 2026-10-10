import { mkdir, stat, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { buildAgentFiles } from '../src/library/agent-files'
import { isSlug } from '../src/library/catalog'
import type { LibraryEntry } from '../src/library/types'
import { loadLibrary } from './load-library'

// Post-build I/O for the files defined by agent-files.ts.

async function assertDirectory(dir: string): Promise<void> {
  const isDirectory = await stat(dir).then(
    (info) => info.isDirectory(),
    (error: NodeJS.ErrnoException) => {
      if (error.code === 'ENOENT') return false
      throw error
    },
  )
  if (!isDirectory) {
    throw new Error(`Output directory "${dir}" does not exist. Run "react-router build" first.`)
  }
}

/** Writes agent files into an existing output directory, rejecting unsafe slugs before writing. */
export async function writeAgentFiles(outDir: string, entries: LibraryEntry[]): Promise<string[]> {
  for (const { meta } of entries) {
    if (!isSlug(meta.slug)) throw new Error(`"${meta.slug}" is not a valid slug (kebab-case); agent files not written.`)
  }
  await assertDirectory(outDir)
  const files = buildAgentFiles(entries)
  await Promise.all(files.map(async ({ path, content }) => {
    const file = join(outDir, path)
    await mkdir(dirname(file), { recursive: true })
    await writeFile(file, content)
  }))
  return files.map(({ path }) => path)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const entries = (await loadLibrary()).map((item) => item.entry)
    const written = await writeAgentFiles('build/client', entries)
    console.log(`Agent and discovery files: ${written.length} written`)
  } catch (error) {
    console.error(error instanceof Error ? error.message : error)
    process.exit(1)
  }
}
