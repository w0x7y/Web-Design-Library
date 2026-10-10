import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

export const buildDirectory = fileURLToPath(new URL('../../build/client/', import.meta.url))
export const catalogFile = new URL('catalog.json', new URL('../../build/client/', import.meta.url))
export const hasBuild = existsSync(catalogFile)

if (!hasBuild && process.env.PATTERNBOOK_REQUIRE_BUILD === '1') {
  throw new Error('PATTERNBOOK_REQUIRE_BUILD=1 requires build/client/catalog.json. Run npm run build at the repository root before the MCP tests.')
}
