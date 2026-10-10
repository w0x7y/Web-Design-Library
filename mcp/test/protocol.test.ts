import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js'
import { CallToolResultSchema } from '@modelcontextprotocol/sdk/types.js'
import { describe, expect, it, vi } from 'vitest'
import { categoriesOutputSchema, FORMATS } from '../src/catalog.js'
import { searchOutputSchema } from '../src/search.js'
import { createServer } from '../src/server.js'
import { fixtureBrief, fixtureFetch } from './fixtures.js'

async function connect(fetcher = fixtureFetch()) {
  const server = createServer({ baseUrl: 'http://localhost:4404', fetch: fetcher })
  const client = new Client({ name: 'test', version: '1.0.0' })
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair()
  await server.connect(serverTransport)
  await client.connect(clientTransport)
  return { server, client, close: async () => { await client.close(); await server.close() } }
}

describe('MCP protocol', () => {
  it('advertises tool schemas, titles, annotations and server instructions', async () => {
    const connection = await connect()
    try {
      const { tools } = await connection.client.listTools()
      expect(tools.map(({ name }) => name)).toEqual(['search_components', 'get_component', 'list_categories'])
      for (const tool of tools) {
        expect(tool.title).toBeTruthy()
        expect(tool.description).toBeTruthy()
        expect(tool.annotations).toEqual({ readOnlyHint: true, openWorldHint: true })
        expect(tool.inputSchema.type).toBe('object')
      }
      expect(tools[0].inputSchema.properties).toMatchObject({
        query: { type: 'string' }, category: { type: 'string' }, tags: { type: 'array' },
        kind: { enum: ['section', 'element'] }, limit: { minimum: 1, maximum: 50, default: 10 },
      })
      expect(tools[1].inputSchema.required).toEqual(['slug'])
      expect(tools[1].inputSchema.properties).toMatchObject({ format: { enum: ['react', 'html'], default: 'react' } })
      expect(tools[2].inputSchema.properties).toEqual({})
      expect(tools[0].outputSchema?.required).toEqual(['showing', 'total', 'components'])
      expect(tools[2].outputSchema?.required).toEqual(['groups', 'tags', 'formats', 'total'])
      expect(connection.client.getInstructions()).toContain('Tailwind v4')
      expect(connection.client.getInstructions()).toContain('reference material from the Patternbook site')
      expect(tools[1].description).toContain('reference material from the Patternbook site')
    } finally { await connection.close() }
  })

  it('rejects oversized inputs before HTTP and accepts legitimate inputs through the protocol', async () => {
    const fetcher = fixtureFetch()
    const connection = await connect(fetcher)
    try {
      for (const [name, args] of [
        ['get_component', { slug: 'x'.repeat(101) }],
        ['search_components', { query: 'x'.repeat(501) }],
        ['search_components', { category: 'x'.repeat(61) }],
        ['search_components', { tags: Array(21).fill('table') }],
        ['search_components', { tags: ['x'.repeat(41)] }],
      ] as const) {
        const result = CallToolResultSchema.parse(await connection.client.callTool({ name, arguments: args }))
        expect(result.isError).toBe(true)
        expect(result.content).toEqual([{ type: 'text', text: expect.stringContaining('Input validation error') }])
      }
      expect(fetcher).not.toHaveBeenCalled()
      const search = CallToolResultSchema.parse(await connection.client.callTool({ name: 'search_components', arguments: { query: 'pricing', category: 'pricing', tags: ['table', 'compact'] } }))
      expect(search.isError).not.toBe(true)
      expect(searchOutputSchema.parse(search.structuredContent).components[0].slug).toBe('pricing-comparison-table')
      const brief = await connection.client.callTool({ name: 'get_component', arguments: { slug: 'pricing-comparison-table' } })
      expect(brief.content).toEqual([{ type: 'text', text: fixtureBrief('react') }])
    } finally { await connection.close() }
  })

  it('calls all tools, returns structured results and preserves briefs exactly', async () => {
    const connection = await connect()
    try {
      const result = CallToolResultSchema.parse(await connection.client.callTool({ name: 'search_components', arguments: { query: 'pricing', limit: 1 } }))
      expect(searchOutputSchema.parse(result.structuredContent)).toMatchObject({ showing: 1, total: 3, components: [{ slug: 'pricing-comparison-table' }] })
      expect(result.content).toEqual([{ type: 'text', text: expect.stringContaining('Showing 1 of 3 matches.\npricing-comparison-table | Pricing — Comparison table | pricing | section | table, numbers, compact |') }])
      expect(searchOutputSchema.parse(result.structuredContent).components[0].url).toBe('https://patternbook-w0x7y.vercel.app/c/pricing-comparison-table')
      const categories = CallToolResultSchema.parse(await connection.client.callTool({ name: 'list_categories' }))
      expect(categoriesOutputSchema.parse(categories.structuredContent)).toMatchObject({ total: 5, formats: ['react', 'html'], groups: [{ id: 'sections', categories: [{ id: 'hero', count: 1 }, { id: 'pricing', count: 3 }] }, { id: 'elements' }] })
      expect(categories.content).toEqual([{ type: 'text', text: expect.stringContaining('Sections (sections)\n  hero | Hero | 1') }])
      for (const format of FORMATS) {
        const brief = await connection.client.callTool({ name: 'get_component', arguments: { slug: 'pricing-comparison-table', ...(format === 'html' ? { format } : {}) } })
        expect(brief.content).toEqual([{ type: 'text', text: fixtureBrief(format) }])
      }
      const empty = CallToolResultSchema.parse(await connection.client.callTool({ name: 'search_components', arguments: { query: 'missing' } }))
      expect(empty.structuredContent).toEqual({ showing: 0, total: 0, components: [] })
    } finally { await connection.close() }
  })

  it('returns tool errors for unknown filters, malformed slugs, missing slugs and network failures', async () => {
    const fetcher = fixtureFetch()
    const connection = await connect(fetcher)
    try {
      for (const [name, args, message] of [
        ['search_components', { category: 'wrong' }, 'Valid category ids'],
        ['search_components', { tags: ['wrong'] }, 'Valid tag ids'],
        ['get_component', { slug: '../escape' }, 'Invalid slug'],
        ['get_component', { slug: 'pricing-comparison-tabl' }, 'Closest components: pricing-comparison-table'],
      ] as const) {
        const result = CallToolResultSchema.parse(await connection.client.callTool({ name, arguments: args }))
        expect(result.isError).toBe(true)
        expect(result.content).toEqual([{ type: 'text', text: expect.stringContaining(message) }])
      }
      fetcher.mockRejectedValueOnce(new Error('offline'))
      const result = CallToolResultSchema.parse(await connection.client.callTool({ name: 'get_component', arguments: { slug: 'pricing-comparison-table' } }))
      expect(result.isError).toBe(true)
      expect(result.content).toEqual([{ type: 'text', text: expect.stringContaining('offline') }])
    } finally { await connection.close() }
    const offline = await connect(vi.fn<typeof fetch>(async () => { throw new Error('offline') }))
    try {
      expect((await offline.client.callTool({ name: 'list_categories' })).isError).toBe(true)
      expect((await offline.client.callTool({ name: 'search_components', arguments: {} })).isError).toBe(true)
    } finally { await offline.close() }
  })
})
