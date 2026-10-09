import postcss, { type AtRule, type Node, type Root, type Rule } from 'postcss'
import { IMAGES } from './assets'
import { fontDisplayName, isFontFamily } from './fonts'
import { isSlug, SOURCE_FILES } from './catalog'
import { resetCss } from './reset'
import { isCategoryId, isStyleTag } from './taxonomy'
import type { ComponentMeta, ComponentSources, LibraryEntry } from './types'

// Mechanical checks for the authoring rules in AGENTS.md (spec §4.5).

const BRIEF_FIELDS = ['layout', 'style', 'states', 'responsive'] as const
const IMAGE_URLS = new Set<string>(Object.values(IMAGES))

/**
 * Every component folder's violations of the authoring rules, in the order given. A rule that
 * spans the library (unique slugs) is checked here; each component sees the whole list.
 */
export function checkLibrary(items: { folder: string; entry: LibraryEntry }[]): { folder: string; violations: string[] }[] {
  const slugs = items.map((item) => item.entry.meta.slug)
  return items.map(({ folder, entry }) => ({ folder, violations: checkComponent(entry, folder, slugs) }))
}

function checkComponent(entry: LibraryEntry, folder: string, allSlugs: string[]): string[] {
  const { meta, sources } = entry
  const violations = checkMeta(meta, folder, allSlugs)
  for (const key of Object.keys(SOURCE_FILES) as (keyof ComponentSources)[]) {
    if (!sources[key].trim()) violations.push(`${SOURCE_FILES[key]} is missing or empty`)
  }
  if (sources.tsx.trim()) violations.push(...checkTsx(sources.tsx, meta.fonts))
  if (sources.html.trim()) violations.push(...checkHtml(sources.html, meta.slug))
  if (sources.css.trim()) violations.push(...checkCss(sources.css, meta.slug))
  return violations
}

function checkMeta(meta: ComponentMeta, folder: string, allSlugs: string[]): string[] {
  const out: string[] = []
  if (meta.slug !== folder) out.push(`meta.slug "${meta.slug}" does not match its folder "${folder}"`)
  if (!isSlug(meta.slug)) out.push(`meta.slug "${meta.slug}" must be kebab-case`)
  if (allSlugs.filter((s) => s === meta.slug).length > 1) out.push(`duplicate slug "${meta.slug}"`)
  if (!meta.name.trim()) out.push('meta.name is empty')
  if (!meta.description.trim()) out.push('meta.description is empty')
  if (!isCategoryId(meta.category)) out.push(`unknown category "${meta.category}"`)
  if (meta.tags.length === 0) out.push('meta.tags must list at least one style tag')
  for (const tag of meta.tags) {
    if (!isStyleTag(tag)) out.push(`unknown style tag "${tag}"`)
  }
  for (const family of meta.fonts) {
    if (!isFontFamily(family)) out.push(`meta.fonts contains an invalid Google Fonts family: ${JSON.stringify(family)}`)
  }
  for (const field of BRIEF_FIELDS) {
    if (!meta.brief[field]?.trim()) out.push(`brief.${field} is empty`)
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.addedAt) || Number.isNaN(Date.parse(meta.addedAt))) {
    out.push(`addedAt "${meta.addedAt}" must be an ISO date (YYYY-MM-DD)`)
  }
  if (meta.preview.parity && !meta.preview.parity.reason.trim()) {
    out.push('preview.parity overrides the parity tolerance without a reason')
  }
  return out
}

function checkTsx(tsx: string, fonts: string[]): string[] {
  const out: string[] = []
  if (/\bdark:/.test(tsx)) out.push('Component.tsx uses a dark: variant; components must not follow the site theme')
  if (/\buse[A-Z]\w*\(|\bon[A-Z]\w*=/.test(tsx)) {
    out.push('Component.tsx uses hooks or event handlers; interactivity must be CSS-only (no interactive JS)')
  }
  for (const specifier of importSpecifiers(tsx)) {
    if (specifier !== 'react') out.push(`Component.tsx imports "${specifier}"; only "react" may be imported`)
  }
  const defaults = tsx.match(/\bexport\s+default\b/g)?.length ?? 0
  if (defaults !== 1) out.push(`Component.tsx must have exactly one default export (found ${defaults})`)
  if (fonts.length > 0) {
    const names = fonts.map(fontDisplayName)
    const firstLine = tsx.split('\n', 1)[0]
    if (!firstLine.startsWith('// Fonts: ')) {
      out.push(`Component.tsx must start with a "// Fonts: " comment naming ${names.join(', ')}`)
    } else {
      for (const name of names) {
        if (!firstLine.includes(name)) out.push(`Component.tsx "// Fonts: " comment does not name ${name}`)
      }
    }
  }
  out.push(...checkImages(tsx, 'Component.tsx'))
  return out
}

function importSpecifiers(tsx: string): string[] {
  const patterns = [
    /^\s*(?:import|export)\b[^'"]*?\bfrom\s*['"]([^'"]+)['"]/gm, // import x from 'y' / export … from 'y'
    /^\s*import\s*['"]([^'"]+)['"]/gm, // import 'y'
    /\bimport\s*\(\s*['"]([^'"]+)['"]/g, // import('y')
  ]
  return patterns.flatMap((re) => [...tsx.matchAll(re)].map((m) => m[1]))
}

function checkImages(source: string, file: string): string[] {
  const out: string[] = []
  for (const [tag] of source.matchAll(/<img\b[^>]*>/g)) {
    const missing = ['alt', 'width', 'height'].filter((attr) => !new RegExp(`\\s${attr}=`).test(tag))
    if (missing.length > 0) out.push(`${file}: <img> is missing ${missing.join(', ')}`)
    const m = tag.match(/\ssrc=(?:"([^"]*)"|'([^']*)'|\{\s*(["'`])(.*?)\3\s*\})/)
    const src = m ? (m[1] ?? m[2] ?? m[4]) : undefined
    if (src === undefined || !IMAGE_URLS.has(src)) {
      out.push(`${file}: <img> src ${src === undefined ? '(not a literal)' : `"${src}"`} is not a URL from IMAGES in src/library/assets.ts`)
    }
  }
  return out
}

function checkHtml(html: string, slug: string): string[] {
  const out: string[] = []
  for (const tag of ['link', 'style', 'script']) {
    if (new RegExp(`<${tag}\\b`, 'i').test(html)) {
      out.push(`index.html must not contain <${tag}>; the copy builder and parity harness add fonts and styles`)
    }
  }
  const root = html.replace(/^(?:\s|<!--[\s\S]*?-->)*/, '').match(/^<[a-zA-Z][\w-]*\b([^>]*)>/)
  const classAttr = root?.[1].match(/\sclass=(?:"([^"]*)"|'([^']*)')/)
  const classes = (classAttr?.[1] ?? classAttr?.[2] ?? '').split(/\s+/)
  if (!classes.includes(slug)) out.push(`index.html root element must have the class "${slug}"`)
  out.push(...checkImages(html, 'index.html'))
  return out
}

function checkCss(css: string, slug: string): string[] {
  let root: Root
  try {
    root = postcss.parse(css)
  } catch (error) {
    return [`styles.css does not parse: ${(error as Error).message}`]
  }
  const out: string[] = []
  const mismatch = resetMismatch(css, slug)
  if (mismatch) {
    out.push(`styles.css must begin with the scoped reset (template in AGENTS.md); line ${mismatch.line} should read: ${mismatch.expected}`)
  }
  root.walkAtRules('import', () => {
    out.push('styles.css must not use @import; declare fonts in meta.fonts')
  })
  const scoped = new RegExp(`^\\.${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\w-])`)
  root.walkRules((rule) => {
    if (insideKeyframes(rule)) return
    for (const selector of rule.selectors) {
      if (!scoped.test(selector.trim())) out.push(`styles.css selector "${selector.trim()}" is not scoped under .${slug}`)
    }
  })
  return out
}

/** The first line where `css` departs from the reset, ignoring line endings and trailing whitespace; null if it begins with it. */
function resetMismatch(css: string, slug: string): { line: number; expected: string } | null {
  const lines = css.split('\n').map((line) => line.trimEnd())
  const expected = resetCss(slug).trimEnd().split('\n')
  const index = expected.findIndex((line, i) => lines[i] !== line)
  return index === -1 ? null : { line: index + 1, expected: expected[index] }
}

function insideKeyframes(rule: Rule): boolean {
  for (let node = rule.parent as Node | undefined; node; node = node.parent as Node | undefined) {
    if (node.type === 'atrule' && /keyframes$/i.test((node as AtRule).name)) return true
  }
  return false
}
