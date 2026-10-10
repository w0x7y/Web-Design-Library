import { createServer, type ServerResponse } from 'node:http'
import sirv from 'sirv'
import { buildVercelConfig } from './build-vercel-output'

// Use the deployment's header generator locally, so every browser test runs with the production CSP.
const clientDir = 'build/client'
const config = await buildVercelConfig(clientDir)
const routes = config.routes.flatMap((route) => 'src' in route ? [{ ...route, pattern: new RegExp(route.src, 'i') }] : [])
function setHeaders(response: ServerResponse, pathname: string) {
  for (const route of routes) {
    if (!route.pattern.test(pathname)) continue
    if ('headers' in route) {
      for (const [name, value] of Object.entries(route.headers)) response.setHeader(name, value)
    }
    if ('dest' in route) break
  }
  const override = config.overrides[pathname.slice(1)]
  if (override) response.setHeader('Content-Type', override.contentType)
}
const serve = sirv(clientDir, { setHeaders })
const fallback = sirv(clientDir, { single: '__spa-fallback.html', setHeaders })
const port = Number(process.env.PATTERNBOOK_PORT ?? 4317)
createServer((request, response) => {
  serve(request, response, () => {
    const pathname = new URL(request.url ?? '/', 'http://localhost').pathname
    const route = routes.find((route) => 'status' in route && route.pattern.test(pathname))
    if (route && 'status' in route) {
      setHeaders(response, pathname)
      response.writeHead(route.status, { 'Content-Type': 'text/plain; charset=utf-8' })
      response.end('Not found')
    } else fallback(request, response)
  })
}).listen(port, '0.0.0.0', () => console.log(`Serving build with security headers at http://localhost:${port}`))
