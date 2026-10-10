#!/usr/bin/env node
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { createServer } from './server.js'

try {
  await createServer({ baseUrl: process.env.PATTERNBOOK_URL }).connect(new StdioServerTransport())
} catch (error) {
  console.error(`patternbook-mcp: ${error instanceof Error ? error.message : String(error)}`)
  process.exitCode = 1
}
