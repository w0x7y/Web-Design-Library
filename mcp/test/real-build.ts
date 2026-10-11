import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { parseCatalog } from '../src/catalog.js'

export const buildDirectory = fileURLToPath(new URL('../../build/client/', import.meta.url))
export const catalogFile = new URL('catalog.json', new URL('../../build/client/', import.meta.url))
export const hasBuild = existsSync(catalogFile)

if (!hasBuild && process.env.PATTERNBOOK_REQUIRE_BUILD === '1') {
  throw new Error('PATTERNBOOK_REQUIRE_BUILD=1 requires build/client/catalog.json. Run npm run build at the repository root before the MCP tests.')
}

/** Read the current build, including partial libraries during the content port. */
export function readBuiltCatalog() {
  return parseCatalog(JSON.parse(readFileSync(catalogFile, 'utf8')))
}
