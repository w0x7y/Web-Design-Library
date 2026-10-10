import { readFileSync } from 'node:fs'
import { vi } from 'vitest'
import { parseCatalog, type Format } from '../src/catalog.js'

/** A small catalog with production URLs to catch accidental origin changes. */
const rawFixture: unknown = JSON.parse(readFileSync(new URL('./fixtures/catalog.json', import.meta.url), 'utf8'))
export const fixture = parseCatalog(rawFixture)

/** Read fixture briefs byte for byte. */
export function fixtureBrief(format: Format): string {
  return readFileSync(new URL(`./fixtures/c/pricing-comparison-table.${format}.md`, import.meta.url), 'utf8')
}

/** Stub only HTTP, while keeping the SDK and component code real. */
export function fixtureFetch() {
  return vi.fn<typeof fetch>(async (input) => {
    const pathname = new URL(String(input)).pathname
    if (pathname.endsWith('/catalog.json')) return Response.json(rawFixture)
    if (pathname.endsWith('/pricing-comparison-table.react.md')) return new Response(fixtureBrief('react'))
    if (pathname.endsWith('/pricing-comparison-table.html.md')) return new Response(fixtureBrief('html'))
    return new Response('Missing', { status: 404 })
  })
}
