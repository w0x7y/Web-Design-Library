import { mkdir, stat, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { buildAgentMarkdown, buildLlmsTxt } from '../src/library/brief'
import type { LibraryEntry } from '../src/library/types'
import { loadLibrary } from './load-library'

// Post-build step: writes /c/<slug>.md for every component and /llms.txt into
// the pre-rendered output so AI agents can fetch components directly.

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

/** Writes the agent files into `outDir` and returns their paths relative to it. */
export async function writeAgentFiles(outDir: string, entries: LibraryEntry[]): Promise<string[]> {
  await assertDirectory(outDir)
  await mkdir(join(outDir, 'c'), { recursive: true })

  const files = [
    ...entries.map(({ meta, sources }) => ({
      path: `c/${meta.slug}.md`,
      content: buildAgentMarkdown(meta, sources),
    })),
    { path: 'llms.txt', content: buildLlmsTxt(entries.map(({ meta }) => meta)) },
  ]
  await Promise.all(files.map(({ path, content }) => writeFile(join(outDir, path), content)))
  return files.map(({ path }) => path)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const entries = (await loadLibrary()).map((item) => item.entry)
    const written = await writeAgentFiles('build/client', entries)
    console.log(`Agent files: ${written.length} written`)
  } catch (error) {
    console.error(error instanceof Error ? error.message : error)
    process.exit(1)
  }
}
