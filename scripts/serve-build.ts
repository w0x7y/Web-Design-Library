import { createServer } from 'node:http'
import sirv from 'sirv'
import { buildVercelConfig } from './build-vercel-output'

// Use the deployment's header generator locally, so every browser test runs with the production CSP.
const clientDir = 'build/client'
const config = await buildVercelConfig(clientDir)
const routes = config.routes.flatMap((route) => 'src' in route ? [{ ...route, pattern: new RegExp(route.src) }] : [])
const serve = sirv(clientDir, {
  single: '__spa-fallback.html',
  setHeaders(response, pathname) {
    for (const route of routes) {
      if (!route.pattern.test(pathname)) continue
      for (const [name, value] of Object.entries(route.headers)) response.setHeader(name, value)
      if ('dest' in route) break
    }
    const override = config.overrides[pathname.slice(1)]
    if (override) response.setHeader('Content-Type', override.contentType)
  },
})
const port = Number(process.env.PATTERNBOOK_PORT ?? 4317)
createServer(serve).listen(port, '0.0.0.0', () => console.log(`Serving build with security headers at http://localhost:${port}`))
