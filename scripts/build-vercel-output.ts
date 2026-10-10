import { createHash } from 'node:crypto'
import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { join, relative, sep } from 'node:path'
import { pathToFileURL } from 'node:url'
import { parse, type DefaultTreeAdapterMap } from 'parse5'
import { agentFileServing, CROSS_ORIGIN_ROUTE, escapeRegex } from '../src/library/agent-files'

type VercelRoute =
  | { handle: 'filesystem' }
  | { src: string; headers: Record<string, string>; continue: true }
  | { src: string; headers: Record<string, string>; dest: string }
  | { src: string; status: 404 }

export type VercelOutputConfig = {
  version: 3
  routes: VercelRoute[]
  overrides: Record<string, { contentType: string }>
}

/** Hash parsed text as the browser sees it, including HTML's CRLF normalization. */
export function contentSecurityPolicy(html: string): string {
  const hashes = new Set<string>()
  function visit(node: DefaultTreeAdapterMap['node']) {
    if ('tagName' in node && node.tagName === 'script' && !node.attrs.some((attr) => attr.name === 'src')) {
      const text = node.childNodes.map((child) => 'value' in child ? child.value : '').join('')
      hashes.add(`'sha256-${createHash('sha256').update(text).digest('base64')}'`)
    }
    if ('childNodes' in node) node.childNodes.forEach(visit)
  }
  visit(parse(html))
  return [
    "default-src 'self'",
    `script-src 'self'${hashes.size ? ` ${[...hashes].join(' ')}` : ''}`,
    "script-src-attr 'none'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob: https://images.unsplash.com",
    "connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://images.unsplash.com",
    "frame-src 'self'",
    "frame-ancestors 'self'",
    "object-src 'none'",
    "base-uri 'none'",
    "form-action 'self'",
  ].join('; ')
}

/** An index page is served at its directory URL and at its explicit filename, with the same policy. */
function pagePattern(file: string): string {
  if (file === 'index.html') return '^/(?:index\\.html)?$'
  if (file.endsWith('/index.html')) return `^/${escapeRegex(file.slice(0, -11))}(?:/|/index\\.html)?$`
  return `^/${escapeRegex(file)}$`
}

/** Vercel's Build Output API supports generated, per-document response headers. */
export async function buildVercelConfig(clientDir: string): Promise<VercelOutputConfig> {
  const entries = await readdir(clientDir, { recursive: true, withFileTypes: true })
  const files = entries.filter((entry) => entry.isFile()).map((entry) => relative(clientDir, join(entry.parentPath, entry.name)).split(sep).join('/')).sort()
  const pages = await Promise.all(files.filter((file) => file.endsWith('.html')).map(async (file) => ({
    src: pagePattern(file),
    dest: `/${file}`,
    headers: { 'Content-Security-Policy': contentSecurityPolicy(await readFile(join(clientDir, file), 'utf8')) },
  })))
  const fallback = pages.find((page) => page.dest === '/__spa-fallback.html')
  if (!fallback) throw new Error('SPA fallback is missing; run react-router build first.')
  return {
    version: 3,
    routes: [
      { src: '/(.*)', headers: { 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'strict-origin-when-cross-origin' }, continue: true },
      { src: CROSS_ORIGIN_ROUTE, headers: { 'Access-Control-Allow-Origin': '*' }, continue: true },
      ...pages,
      { handle: 'filesystem' },
      { src: CROSS_ORIGIN_ROUTE, status: 404 },
      { ...fallback, src: '/(.*)' },
    ],
    overrides: Object.fromEntries(files.flatMap((file) => {
      const contentType = agentFileServing(file)?.contentType
      return contentType ? [[file, { contentType }]] : []
    })),
  }
}

/** Replaces only generated deployment output, so removed pages cannot survive the next build. */
export async function writeVercelOutput(clientDir: string, outputDir: string): Promise<VercelOutputConfig> {
  const config = await buildVercelConfig(clientDir)
  await rm(outputDir, { recursive: true, force: true })
  await mkdir(outputDir, { recursive: true })
  await cp(clientDir, join(outputDir, 'static'), { recursive: true })
  await writeFile(join(outputDir, 'config.json'), JSON.stringify(config, null, 2) + '\n')
  return config
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await writeVercelOutput('build/client', '.vercel/output')
  console.log('Vercel output: static files and per-page security headers written')
}
