import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js'
import { CallToolResultSchema } from '@modelcontextprotocol/sdk/types.js'
import { spawn } from 'node:child_process'
import { once } from 'node:events'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { categoriesOutputSchema, FORMATS, parseCatalog } from '../src/catalog.js'
import { VERSION } from '../src/client.js'
import { searchOutputSchema } from '../src/search.js'
import { serveDirectory } from './http.js'
import { buildDirectory, catalogFile, hasBuild } from './real-build.js'

async function checkStdio(directory: string, count: number, slug: string, port = 0) {
  const http = await serveDirectory(directory, undefined, port)
  const transport = new StdioClientTransport({
    command: process.execPath,
    args: [fileURLToPath(new URL('../dist/index.js', import.meta.url))],
    env: { PATTERNBOOK_URL: http.url },
    stderr: 'pipe',
  })
  let stderr = ''
  transport.stderr?.on('data', (chunk) => { stderr += String(chunk) })
  const client = new Client({ name: 'stdio-test', version: '1.0.0' })
  try {
    await client.connect(transport)
    expect((await client.listTools()).tools).toHaveLength(3)
    const categories = categoriesOutputSchema.parse(CallToolResultSchema.parse(await client.callTool({ name: 'list_categories' })).structuredContent)
    expect(categories.total).toBe(count)
    const catalog = parseCatalog(JSON.parse(readFileSync(`${directory}/catalog.json`, 'utf8')))
    const category = catalog.components.find((component) => component.slug === slug)?.category
    expect(category).toBeDefined()
    const search = searchOutputSchema.parse(CallToolResultSchema.parse(await client.callTool({ name: 'search_components', arguments: { category } })).structuredContent)
    expect(search.total).toBeGreaterThan(0)
    expect(search.components.every((component) => component.category === category)).toBe(true)
    for (const format of FORMATS) {
      const result = CallToolResultSchema.parse(await client.callTool({ name: 'get_component', arguments: { slug, format } }))
      expect(result.isError).not.toBe(true)
      const text = result.content.flatMap((content) => content.type === 'text' ? [content.text] : []).join('')
      expect(text).toBe(readFileSync(`${directory}/c/${slug}.${format}.md`, 'utf8'))
    }
    expect(http.requests.map(({ path }) => path)).toEqual([
      '/catalog.json', `/c/${slug}.react.md`, `/c/${slug}.html.md`,
    ])
    expect(http.requests.every(({ userAgent }) => userAgent === `patternbook-mcp/${VERSION}`)).toBe(true)
    expect(stderr).toBe('')
  } finally {
    await client.close()
    await transport.close()
    await http.close()
  }
}

describe('built stdio entry point', () => {
  it('rejects an invalid environment URL on stderr without writing to stdout', async () => {
    const child = spawn(process.execPath, [fileURLToPath(new URL('../dist/index.js', import.meta.url))], {
      env: { ...process.env, PATTERNBOOK_URL: 'ftp://x' },
      stdio: ['ignore', 'pipe', 'pipe'],
    })
    let stdout = ''
    let stderr = ''
    child.stdout.on('data', (chunk) => { stdout += String(chunk) })
    child.stderr.on('data', (chunk) => { stderr += String(chunk) })
    try {
      const [code, signal] = await once(child, 'close')
      expect(signal).toBeNull()
      expect(code).not.toBeNull()
      expect(code).not.toBe(0)
      expect(stdout).toBe('')
      expect(stderr).toContain('patternbook-mcp: PATTERNBOOK_URL must use http or https')
    } finally {
      if (child.exitCode === null && child.signalCode === null) child.kill()
    }
  }, 15_000)

  it('serves fixture search, taxonomy and both briefs over stdio', async () => {
    await checkStdio(fileURLToPath(new URL('./fixtures/', import.meta.url)), 5, 'pricing-comparison-table')
  }, 15_000)

  it.skipIf(!hasBuild)('serves the real static build over stdio', async () => {
    const catalog = parseCatalog(JSON.parse(readFileSync(catalogFile, 'utf8')))
    const component = catalog.components[0]
    expect(component).toBeDefined()
    await checkStdio(buildDirectory, catalog.components.length, component.slug, Number(process.env.PATTERNBOOK_PORT ?? 4404))
  }, 15_000)
})
