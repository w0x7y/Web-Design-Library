import { mkdir, stat, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { buildAgentMarkdown, buildLlmsTxt } from '../src/library/brief'
import { isSlug } from '../src/library/catalog'
import { buildRobotsTxt, buildSitemap } from '../src/library/discovery'
import type { LibraryEntry } from '../src/library/types'
import { componentMarkdownPath } from '../src/library/urls'
import { loadLibrary } from './load-library'

// Post-build step: writes /c/<slug>.md for every component and /llms.txt into
// the pre-rendered output so AI agents can fetch components directly. Also writes
// sitemap.xml and robots.txt for search-engine discovery from the same catalog.

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

/**
 * Writes the agent files into `outDir` and returns their paths relative to it. Each slug becomes a
 * file name, so an invalid one (which could point outside `outDir`) fails the build before anything is written.
 */
export async function writeAgentFiles(outDir: string, entries: LibraryEntry[]): Promise<string[]> {
  for (const { meta } of entries) {
    if (!isSlug(meta.slug)) throw new Error(`"${meta.slug}" is not a valid slug (kebab-case); agent files not written.`)
  }
  await assertDirectory(outDir)
  await mkdir(join(outDir, 'c'), { recursive: true })

  const files = [
    ...entries.map(({ meta, sources }) => ({
      path: componentMarkdownPath(meta.slug).slice(1), // relative to outDir
      content: buildAgentMarkdown(meta, sources),
    })),
    { path: 'llms.txt', content: buildLlmsTxt(entries.map(({ meta }) => meta)) },
    { path: 'sitemap.xml', content: buildSitemap(entries.map(({ meta }) => meta)) },
    { path: 'robots.txt', content: buildRobotsTxt() },
  ]
  await Promise.all(files.map(({ path, content }) => writeFile(join(outDir, path), content)))
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
