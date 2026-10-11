import { afterEach, describe, expect, it, vi } from 'vitest'
import { DEFAULT_URL, normalizeBaseUrl, PatternbookClient, VERSION } from '../src/client.js'
import manifest from '../package.json' with { type: 'json' }
import { fixtureBrief, fixtureFetch } from './fixtures.js'
import { fileURLToPath } from 'node:url'
import { serveDirectory } from './http.js'

afterEach(() => { vi.restoreAllMocks() })

describe('HTTP client', () => {
  it('uses the package version for the user agent', () => expect(VERSION).toBe(manifest.version))

  it('normalizes trailing slashes while preserving a deployment path prefix', () => {
    expect(normalizeBaseUrl('http://localhost:4404///')).toBe('http://localhost:4404')
    expect(normalizeBaseUrl('https://example.com/patternbook/')).toBe('https://example.com/patternbook')
    expect(normalizeBaseUrl('http://localhost:4404/?')).toBe('http://localhost:4404')
    expect(normalizeBaseUrl('https://example.com/patternbook/?#')).toBe('https://example.com/patternbook')
  })

  it.each(['localhost', '127.0.0.1', '[::1]'])('allows HTTP for loopback host %s', (host) => {
    expect(normalizeBaseUrl(`http://${host}:4404/`)).toBe(`http://${host}:4404`)
  })

  it.each(['example.com', '192.168.1.1', '169.254.169.254', 'localhost.example.com'])('requires HTTPS for remote host %s', (host) => {
    expect(() => normalizeBaseUrl(`http://${host}/`)).toThrow('HTTPS')
    expect(normalizeBaseUrl(`https://${host}/`)).toBe(`https://${host}`)
  })

  it.each(['file:///tmp/site', 'ftp://example.com', 'localhost:4404', '', 'https://user:pass@example.com', 'https://example.com?x=1', 'https://example.com#x'])
    ('rejects invalid base URL %s', (baseUrl) => expect(() => new PatternbookClient({ baseUrl })).toThrow('PATTERNBOOK_URL'))

  it('uses the configured base for catalog and both formats, with timeout and user agent', async () => {
    const fetcher = fixtureFetch()
    const timeout = vi.spyOn(AbortSignal, 'timeout')
    const client = new PatternbookClient({ baseUrl: 'http://localhost:4404/prefix/', fetch: fetcher })
    expect(await client.getBrief('pricing-comparison-table', 'react')).toBe(fixtureBrief('react'))
    expect(await client.getBrief('pricing-comparison-table', 'html')).toBe(fixtureBrief('html'))
    expect(fetcher.mock.calls.map(([url]) => url)).toEqual([
      'http://localhost:4404/prefix/catalog.json',
      'http://localhost:4404/prefix/c/pricing-comparison-table.react.md',
      'http://localhost:4404/prefix/c/pricing-comparison-table.html.md',
    ])
    expect(timeout).toHaveBeenCalledWith(15_000)
    for (const [, options] of fetcher.mock.calls) {
      expect(options?.headers).toEqual({ 'User-Agent': `patternbook-mcp/${VERSION}` })
      expect(options?.signal).toBeInstanceOf(AbortSignal)
      expect(options?.redirect).toBe('error')
    }
  })

  it('uses the default origin when no explicit base is given', async () => {
    const fetcher = fixtureFetch()
    await new PatternbookClient({ fetch: fetcher }).getCatalog()
    expect(fetcher.mock.calls[0][0]).toBe(`${DEFAULT_URL}/catalog.json`)
  })

  it('rejects invalid slugs without fetching and suggests unknown slugs without fetching a brief', async () => {
    const fetcher = fixtureFetch()
    const client = new PatternbookClient({ fetch: fetcher })
    await expect(client.getBrief('../escape', 'react')).rejects.toThrow('Invalid slug')
    expect(fetcher).not.toHaveBeenCalled()
    await expect(client.getBrief('pricing-comparison-tabl', 'react')).rejects.toThrow('pricing-comparison-table (Pricing — Comparison table)')
    expect(fetcher).toHaveBeenCalledTimes(1)
  })

  it.each([
    [() => Promise.resolve(new Response('Missing', { status: 404 })), 'HTTP 404'],
    [() => Promise.resolve(new Response('Unavailable', { status: 503 })), 'HTTP 503'],
    [() => Promise.resolve(new Response('not json')), 'Invalid JSON'],
    [() => Promise.resolve(Response.json({ version: 2 })), 'Unsupported catalog version'],
    [() => Promise.resolve(Response.json({ version: 1 })), 'Invalid catalog.json'],
    [() => Promise.reject(new Error('offline')), 'offline'],
    [() => Promise.reject(new DOMException('Timed out', 'TimeoutError')), 'Timed out'],
  ])('reports catalog loading errors', async (response, message) => {
    const fetcher = vi.fn<typeof fetch>(response)
    const client = new PatternbookClient({ fetch: fetcher })
    await expect(client.getCatalog()).rejects.toThrow(message)
  })

  it('reports brief loading errors with the requested URL', async () => {
    const fetcher = fixtureFetch()
    const client = new PatternbookClient({ fetch: fetcher })
    await client.getCatalog()
    fetcher.mockResolvedValueOnce(new Response('', { status: 404 }))
    await expect(client.getBrief('pricing-comparison-table', 'react')).rejects.toThrow(`Could not fetch ${DEFAULT_URL}/c/pricing-comparison-table.react.md: HTTP 404`)
  })

  it('rejects redirects without fetching their target and still reads direct agent files', async () => {
    let redirect = true
    const http = await serveDirectory(fileURLToPath(new URL('./fixtures/', import.meta.url)), (pathname, response) => {
      if (!redirect || !pathname.endsWith('.md')) return false
      response.writeHead(302, { Location: '/redirect-target' })
      response.end()
      return true
    })
    try {
      const client = new PatternbookClient({ baseUrl: http.url })
      await expect(client.getBrief('pricing-comparison-table', 'react')).rejects.toThrow('Redirects are not allowed')
      expect(http.requests.map(({ path }) => path)).toEqual(['/catalog.json', '/c/pricing-comparison-table.react.md'])
      redirect = false
      expect(await client.getBrief('pricing-comparison-table', 'react')).toBe(fixtureBrief('react'))
    } finally { await http.close() }
  })

  it.each(['catalog', 'brief'])('rejects an HTML SPA fallback for a %s', async (file) => {
    const fetcher = fixtureFetch()
    const client = new PatternbookClient({ fetch: fetcher })
    if (file === 'brief') await client.getCatalog()
    fetcher.mockResolvedValueOnce(new Response('<html>App</html>', { headers: { 'Content-Type': 'Text/HTML; charset=utf-8' } }))
    await expect(file === 'catalog' ? client.getCatalog() : client.getBrief('pricing-comparison-table', 'react'))
      .rejects.toThrow('not an agent file; is the deploy current?')
    expect(await client.getBrief('pricing-comparison-table', 'react')).toBe(fixtureBrief('react'))
  })

  it.each([undefined, 'text/plain', 'text/markdown; charset=utf-8', 'application/octet-stream'])('accepts a brief content type of %s', async (contentType) => {
    const fetcher = fixtureFetch()
    const client = new PatternbookClient({ fetch: fetcher })
    await client.getCatalog()
    fetcher.mockResolvedValueOnce(new Response(fixtureBrief('react'), { headers: contentType ? { 'Content-Type': contentType } : {} }))
    expect(await client.getBrief('pricing-comparison-table', 'react')).toBe(fixtureBrief('react'))
  })

  it.each([['catalog', 5 * 1024 * 1024], ['brief', 1024 * 1024]] as const)('limits %s bytes from content-length and streamed chunks', async (file, cap) => {
    for (const declared of [true, false]) {
      const fetcher = fixtureFetch()
      const client = new PatternbookClient({ fetch: fetcher })
      if (file === 'brief') await client.getCatalog()
      const cancel = vi.fn()
      let chunk = 0
      const response = new Response(new ReadableStream<Uint8Array>({
        pull(controller) {
          if (chunk === 4) controller.close()
          else controller.enqueue(new Uint8Array(chunk++ === 0 ? cap : 1))
        },
        cancel,
      }), { headers: declared ? { 'Content-Length': String(cap + 1) } : {} })
      if (!response.body) throw new Error('Expected a streamed response')
      const getReader = vi.spyOn(response.body, 'getReader')
      fetcher.mockResolvedValueOnce(response)
      await expect(file === 'catalog' ? client.getCatalog() : client.getBrief('pricing-comparison-table', 'react'))
        .rejects.toThrow(`exceeds ${cap} bytes`)
      expect(cancel).toHaveBeenCalledOnce()
      if (declared) expect(getReader).not.toHaveBeenCalled()
      expect(await client.getBrief('pricing-comparison-table', 'react')).toBe(fixtureBrief('react'))
    }
  })

  it('decodes UTF-8 across chunks and accepts a brief exactly at its byte cap', async () => {
    const fetcher = fixtureFetch()
    const client = new PatternbookClient({ fetch: fetcher })
    await client.getCatalog()
    const text = 'é' + 'x'.repeat(1024 * 1024 - 2)
    const bytes = new TextEncoder().encode(text)
    fetcher.mockResolvedValueOnce(new Response(new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(bytes.slice(0, 1))
        controller.enqueue(bytes.slice(1))
        controller.close()
      },
    })))
    expect(await client.getBrief('pricing-comparison-table', 'react')).toBe(text)
  })
})
