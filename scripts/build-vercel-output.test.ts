import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { buildVercelConfig, contentSecurityPolicy, writeVercelOutput, type VercelOutputConfig } from './build-vercel-output'

test('CSP hashes actual inline script text, including modules and normalized newlines', () => {
  const policy = contentSecurityPolicy('<script>alert(1)</script><script type="module">console.log("module")</script><script> first\r\nsecond </script><script src="/external.js">ignored</script><script>alert(1)</script>')
  expect(policy).toContain("script-src 'self' 'sha256-bhHHL3z2vDgxUt0W3dWQOrprscmda2Y5pLsLg4GF+pI='")
  expect(policy).toContain("'sha256-zC08WQ/8JijqU9DgRB86AjNseP+in9KA82+PNiMuImI='")
  expect(policy).toContain("'sha256-6ylb0VRkP91RvJbhnD9cDAHA4gSfJkBgyzMrOD15CsY='")
  expect(policy.match(/sha256-/g)).toHaveLength(3)
  expect(policy).not.toContain('unsafe-eval')
  expect(policy.split(';').find((directive) => directive.trim().startsWith('script-src'))).not.toContain('unsafe-inline')
  expect(policy).toContain("object-src 'none'")
  expect(policy).toContain("base-uri 'none'")
  expect(policy).toContain("frame-ancestors 'self'")
})

let root: string
let client: string
beforeEach(async () => {
  root = await mkdtemp(join(tmpdir(), 'patternbook-vercel-'))
  client = join(root, 'client')
  await mkdir(join(client, 'c/demo'), { recursive: true })
  await mkdir(join(client, 'preview/demo'), { recursive: true })
  await writeFile(join(client, 'index.html'), '<script>alert(1)</script>Home')
  await writeFile(join(client, 'c/demo/index.html'), '<script>console.log("module")</script>Detail')
  await writeFile(join(client, 'preview/demo/index.html'), '<p>Preview</p>')
  await writeFile(join(client, '__spa-fallback.html'), '<p>Fallback</p>')
  await writeFile(join(client, 'c/demo.md'), '# Demo')
  await writeFile(join(client, 'llms.txt'), '# Library')
})
afterEach(async () => { await rm(root, { recursive: true, force: true }) })

function pageRoute(config: VercelOutputConfig, path: string) {
  const route = config.routes.filter((route) => 'dest' in route).find((route) => new RegExp(route.src).test(path))
  if (!route) throw new Error(`Missing page route for ${path}`)
  return route
}

test('each page gets its own policy on the public URL, trailing slash, and explicit index file', async () => {
  const config = await buildVercelConfig(client)
  for (const path of ['/', '/index.html', '/c/demo', '/c/demo/', '/c/demo/index.html', '/preview/demo']) {
    const route = pageRoute(config, path)
    expect(route.dest).toBe(path.startsWith('/c/') ? '/c/demo/index.html' : path.startsWith('/preview/') ? '/preview/demo/index.html' : '/index.html')
    expect(route.headers['Content-Security-Policy']).toBe(contentSecurityPolicy(await readFile(join(client, route.dest), 'utf8')))
  }
  const home = pageRoute(config, '/')
  const detail = pageRoute(config, '/c/demo')
  expect(home.headers).not.toEqual(detail.headers)
})

test('static assets and agent files resolve before the protected SPA fallback', async () => {
  const config = await buildVercelConfig(client)
  expect(config.overrides['c/demo.md']).toEqual({ contentType: 'text/markdown; charset=utf-8' })
  expect(config.overrides['llms.txt']).toEqual({ contentType: 'text/plain; charset=utf-8' })
  expect(config.routes.at(-2)).toEqual({ handle: 'filesystem' })
  const fallback = pageRoute(config, '/unknown/path')
  expect(fallback.dest).toBe('/__spa-fallback.html')
  expect(fallback.headers['Content-Security-Policy']).toBe(contentSecurityPolicy('<p>Fallback</p>'))
})

test('writes deployable static output and replaces stale files on a rebuild', async () => {
  const out = join(root, 'output')
  const config = await writeVercelOutput(client, out)
  expect(JSON.parse(await readFile(join(out, 'config.json'), 'utf8'))).toEqual(config)
  expect(await readFile(join(out, 'static/c/demo.md'), 'utf8')).toBe('# Demo')
  await rm(join(client, 'c/demo.md'))
  await writeFile(join(client, 'index.html'), '<script>console.log("module")</script>Updated')
  const updated = await writeVercelOutput(client, out)
  expect(pageRoute(updated, '/')).not.toEqual(pageRoute(config, '/'))
  expect(await readFile(join(out, 'static/index.html'), 'utf8')).toContain('Updated')
  await expect(readFile(join(out, 'static/c/demo.md'))).rejects.toThrow(/ENOENT/)
})

test('a missing SPA fallback fails the build rather than emitting an unprotected route', async () => {
  await rm(join(client, '__spa-fallback.html'))
  await expect(buildVercelConfig(client)).rejects.toThrow(/fallback/)
})
