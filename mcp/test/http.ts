import { once } from 'node:events'
import { readFile } from 'node:fs/promises'
import { createServer, type ServerResponse } from 'node:http'
import { relative, resolve, sep } from 'node:path'

/** Serve fixtures on an ephemeral port, or a site build on a chosen port. */
export async function serveDirectory(directory: string, respond?: (pathname: string, response: ServerResponse) => boolean, port = 0) {
  const requests: { path: string; userAgent: string | undefined }[] = []
  const server = createServer(async (request, response) => {
    const pathname = new URL(request.url ?? '/', 'http://localhost').pathname
    requests.push({ path: pathname, userAgent: request.headers['user-agent'] })
    if (respond?.(pathname, response)) return
    try {
      const file = resolve(directory, `.${decodeURIComponent(pathname)}`)
      const location = relative(directory, file)
      if (location === '..' || location.startsWith(`..${sep}`)) throw new Error('Outside fixture directory')
      const body = await readFile(file)
      response.writeHead(200, { 'Content-Type': pathname.endsWith('.json') ? 'application/json' : 'text/markdown; charset=utf-8' })
      response.end(body)
    } catch {
      response.writeHead(404)
      response.end('Not found')
    }
  })
  server.listen(port, '127.0.0.1')
  await once(server, 'listening')
  const address = server.address()
  if (!address || typeof address === 'string') throw new Error('Expected an ephemeral TCP port')
  return {
    url: `http://127.0.0.1:${address.port}`,
    requests,
    close: () => new Promise<void>((resolve, reject) => server.close((error) => error ? reject(error) : resolve())),
  }
}
