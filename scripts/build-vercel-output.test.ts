import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { agentFileServing, buildAgentFiles, CROSS_ORIGIN_ROUTE } from '../src/library/agent-files'
import { FORMATS } from '../src/library/types'
import { browsePath, catalogPath, componentFormatMarkdownPath, componentMarkdownPath, componentPath, llmsPath, robotsPath, sitemapPath } from '../src/library/urls'
import { buildVercelConfig, contentSecurityPolicy, writeVercelOutput, type VercelOutputConfig } from './build-vercel-output'

const agentFiles = buildAgentFiles([{
  meta: {
    slug: 'demo', name: 'Demo hero', category: 'hero', tags: ['minimal'], description: 'A centered hero.',
    preview: { kind: 'section' }, fonts: [], addedAt: '2026-10-08',
    brief: { layout: 'Centered column.', style: 'Neutral palette.', states: 'Visible focus.', responsive: 'Stacks below 640px.' },
  },
  sources: { tsx: 'export default function Demo() {}\n', html: '<section>Demo</section>', css: 'section { padding: 2rem; }' },
}])

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
  await Promise.all(agentFiles.map(({ path, content }) => writeFile(join(client, path), content)))
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
  expect(Object.keys(config.overrides)).toHaveLength(agentFiles.length)
  for (const { path } of agentFiles) expect(config.overrides[path], path).toEqual({ contentType: agentFileServing(path)?.contentType })
  expect(config.routes.at(-3)).toEqual({ handle: 'filesystem' })
  const fallback = pageRoute(config, '/unknown/path')
  expect(fallback.dest).toBe('/__spa-fallback.html')
  expect(fallback.headers['Content-Security-Policy']).toBe(contentSecurityPolicy('<p>Fallback</p>'))
})

test('missing agent files return 404 after static resolution and before the SPA fallback', async () => {
  const config = await buildVercelConfig(client)
  const filesystem = config.routes.findIndex((route) => 'handle' in route)
  const missing = config.routes[filesystem + 1]
  expect(missing).toEqual({ src: CROSS_ORIGIN_ROUTE, status: 404 })
  if (!('src' in missing)) throw new Error('Missing agent-file 404 route')
  const pattern = new RegExp(missing.src, 'i')
  for (const path of ['/catalog.json', '/llms.txt', '/c/does-not-exist.md', '/c/does-not-exist.react.md', '/c/does-not-exist.html.md', '/c/DOES-NOT-EXIST.react.md']) {
    expect(pattern.test(path), path).toBe(true)
  }
  for (const path of ['/c/demo', '/browse/hero', '/other.json', '/README.md', '/c/demo.other.md', '/c/nested/demo.md']) {
    expect(pattern.test(path), path).toBe(false)
  }
  expect(config.routes.at(-1)).toHaveProperty('dest', '/__spa-fallback.html')
})

test('unrelated Markdown files do not get agent-file overrides or CORS', async () => {
  const paths = ['README.md', 'c/demo.other.md']
  for (const path of paths) await writeFile(join(client, path), '# Readme')
  const config = await buildVercelConfig(client)
  const cors = config.routes.find((route) => 'headers' in route && 'Access-Control-Allow-Origin' in route.headers)
  if (!cors || !('src' in cors)) throw new Error('Missing CORS header route')
  for (const path of paths) {
    expect(config.overrides[path], path).toBeUndefined()
    expect(new RegExp(cors.src).test('/' + path), path).toBe(false)
  }
})

test('agent files allow cross-origin reads through a continuing header route before static resolution', async () => {
  const config = await buildVercelConfig(client)
  const corsRoutes = config.routes.filter((route) => 'headers' in route && 'Access-Control-Allow-Origin' in route.headers)
  expect(corsRoutes).toHaveLength(1)
  const cors = corsRoutes[0]
  if (!('src' in cors && 'headers' in cors)) throw new Error('Missing CORS header route')
  expect(cors.headers).toEqual({ 'Access-Control-Allow-Origin': '*' })
  expect(cors).toHaveProperty('continue', true)
  expect(cors).not.toHaveProperty('dest')
  expect(config.routes.indexOf(cors)).toBeLessThan(config.routes.findIndex((route) => 'handle' in route))
  const pattern = new RegExp(cors.src)
  for (const path of [catalogPath(), llmsPath(), componentMarkdownPath('demo'), ...FORMATS.map((format) => componentFormatMarkdownPath('demo', format))]) {
    expect(pattern.test(path), path).toBe(true)
  }
  for (const path of [browsePath(null), componentPath('demo'), `${componentPath('demo')}/index.html`, robotsPath(), sitemapPath(), '/other.md', '/catalogXjson', `${catalogPath()}/extra`, componentMarkdownPath('nested/demo'), `${componentMarkdownPath('demo')}/extra`]) {
    expect(pattern.test(path), path).toBe(false)
  }
})

test('writes deployable static output and replaces stale files on a rebuild', async () => {
  const out = join(root, 'output')
  const markdownPath = componentMarkdownPath('demo').slice(1)
  const config = await writeVercelOutput(client, out)
  expect(JSON.parse(await readFile(join(out, 'config.json'), 'utf8'))).toEqual(config)
  expect(await readFile(join(out, 'static', markdownPath), 'utf8')).toBe(agentFiles.find(({ path }) => path === markdownPath)?.content)
  await rm(join(client, markdownPath))
  await writeFile(join(client, 'index.html'), '<script>console.log("module")</script>Updated')
  const updated = await writeVercelOutput(client, out)
  expect(pageRoute(updated, '/')).not.toEqual(pageRoute(config, '/'))
  expect(await readFile(join(out, 'static/index.html'), 'utf8')).toContain('Updated')
  await expect(readFile(join(out, 'static', markdownPath))).rejects.toThrow(/ENOENT/)
})

test('a missing SPA fallback fails the build rather than emitting an unprotected route', async () => {
  await rm(join(client, '__spa-fallback.html'))
  await expect(buildVercelConfig(client)).rejects.toThrow(/fallback/)
})
