import { readFileSync } from 'node:fs'
import { z } from 'zod'
import { TtlCache } from './cache.js'
import { isSlug, parseCatalog, type Catalog, type Format } from './catalog.js'
import { closestComponents } from './search.js'

/** The package version used in MCP initialization and HTTP requests. */
export const VERSION = z.object({ version: z.string() }).parse(
  JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')),
).version

/** The production origin, mirroring SITE.url in src/site.ts. */
export const DEFAULT_URL = 'https://patternbook-w0x7y.vercel.app'

/** Normalize a secure base URL while preserving a deployment's path prefix. */
export function normalizeBaseUrl(value: string): string {
  let url: URL
  try {
    url = new URL(value)
  } catch {
    throw new Error('PATTERNBOOK_URL must be an absolute http or https URL.')
  }
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash) {
    throw new Error('PATTERNBOOK_URL must use http or https, without credentials, query parameters or a fragment.')
  }
  if (url.protocol === 'http:' && !['localhost', '127.0.0.1', '[::1]'].includes(url.hostname)) {
    throw new Error('PATTERNBOOK_URL must use HTTPS except for loopback hosts localhost, 127.0.0.1 and [::1].')
  }
  return (url.origin + url.pathname).replace(/\/+$/, '')
}

/** Path for a validated slug in a format this server supports. */
export function briefPath(slug: string, format: Format): string {
  return `/c/${slug}.${format}.md`
}

/** Injectable HTTP configuration for the static Patternbook files. */
export interface ClientOptions {
  baseUrl?: string
  fetch?: typeof globalThis.fetch
}

/** Load catalog and briefs from one configured origin with five-minute caching. */
export class PatternbookClient {
  private readonly baseUrl: string
  private readonly fetcher: typeof globalThis.fetch
  private readonly catalogCache = new TtlCache<Catalog>(300_000, 1)
  private readonly briefCache = new TtlCache<string>(300_000, 100)

  constructor(options: ClientOptions = {}) {
    this.baseUrl = normalizeBaseUrl(options.baseUrl ?? DEFAULT_URL)
    this.fetcher = options.fetch ?? globalThis.fetch
  }

  private async read(url: string, maxBytes: number): Promise<string> {
    const controller = new AbortController()
    const timeout = AbortSignal.timeout(15_000)
    const onTimeout = () => controller.abort(timeout.reason)
    timeout.addEventListener('abort', onTimeout, { once: true })
    try {
      const response = await this.fetcher(url, {
        signal: controller.signal,
        redirect: 'error',
        headers: { 'User-Agent': `patternbook-mcp/${VERSION}` },
      })
      if (response.status >= 300 && response.status < 400) throw new Error('Redirects are not allowed for agent files.')
      if (response.status !== 200) {
        throw new Error(`HTTP ${response.status} ${response.statusText}. The site must deploy catalog.json and per-format Markdown briefs.`)
      }
      if (response.headers.get('content-type')?.split(';')[0].trim().toLowerCase() === 'text/html') {
        throw new Error('Response is not an agent file; is the deploy current?')
      }
      if (Number(response.headers.get('content-length')) > maxBytes) {
        await response.body?.cancel()
        throw new Error(`Agent file exceeds ${maxBytes} bytes.`)
      }
      if (!response.body) return ''
      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let bytes = 0
      let text = ''
      try {
        while (true) {
          const chunk = await reader.read()
          if (chunk.done) return text + decoder.decode()
          bytes += chunk.value.byteLength
          if (bytes > maxBytes) {
            await reader.cancel()
            throw new Error(`Agent file exceeds ${maxBytes} bytes.`)
          }
          text += decoder.decode(chunk.value, { stream: true })
        }
      } finally { reader.releaseLock() }
    } catch (error) {
      controller.abort()
      const cause = error instanceof Error && error.cause instanceof Error ? error.cause.message : ''
      const message = /redirect/i.test(cause) ? 'Redirects are not allowed for agent files.' : error instanceof Error ? error.message : String(error)
      throw new Error(`Could not fetch ${url}: ${message}`)
    } finally { timeout.removeEventListener('abort', onTimeout) }
  }

  getCatalog(): Promise<Catalog> {
    return this.catalogCache.get('catalog', async () => {
      const text = await this.read(`${this.baseUrl}/catalog.json`, 5 * 1024 * 1024)
      let value: unknown
      try {
        value = JSON.parse(text)
      } catch {
        throw new Error('Invalid JSON in catalog.json. Check that PATTERNBOOK_URL serves the built agent files.')
      }
      return parseCatalog(value)
    })
  }

  async getBrief(slug: string, format: Format): Promise<string> {
    if (!isSlug(slug)) throw new Error('Invalid slug. Use lowercase kebab-case, such as hero-split-image.')
    const catalog = await this.getCatalog()
    if (!catalog.components.some((component) => component.slug === slug)) {
      const suggestions = closestComponents(catalog.components, slug).map((component) => `${component.slug} (${component.name})`)
      throw new Error(`Unknown component "${slug}". ${suggestions.length ? `Closest components: ${suggestions.join(', ')}.` : 'Use search_components to find an available slug.'}`)
    }
    return this.briefCache.get(`${slug}:${format}`, () => this.read(`${this.baseUrl}${briefPath(slug, format)}`, 1024 * 1024))
  }
}
