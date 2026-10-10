import postcss, { type AtRule, type Node, type Root, type Rule } from 'postcss'
import ts from 'typescript'
import { parseFragment, type DefaultTreeAdapterMap } from 'parse5'
import { classTokens, outsideKit, checkKitDeclaration } from './wireframe-kit'
import { isSlug, SOURCE_FILES } from './catalog'
import { resetCss } from './reset'
import { CATEGORY_LABELS, isCategoryId, isLayoutTag } from './taxonomy'
import type { ComponentMeta, ComponentSources, LibraryEntry } from './types'

// Mechanical checks for the authoring rules in AGENTS.md (layout patterns spec §4).

const BRIEF_FIELDS = ['layout', 'hierarchy', 'states', 'responsive', 'usage'] as const
const MEDIA_TAGS = new Set(['img', 'video', 'iframe', 'picture', 'source'])

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
  if (sources.tsx.trim()) violations.push(...checkTsx(sources.tsx))
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
  if (meta.tags.length === 0) out.push('meta.tags must list at least one layout tag')
  for (const tag of meta.tags) {
    if (!isLayoutTag(tag)) out.push(`unknown layout tag "${tag}"`)
  }
  if (!meta.slug.startsWith(`${meta.category}-`)) out.push(`meta.slug must start with "${meta.category}-"`)
  if (meta.name.trim() && isCategoryId(meta.category) && !meta.name.startsWith(`${CATEGORY_LABELS[meta.category]} — `)) {
    out.push(`meta.name must start with "${CATEGORY_LABELS[meta.category]} — "`)
  }
  const wireframe = meta.wireframe ?? ''
  const lines = wireframe.split('\n')
  if (!wireframe.trim()) out.push('meta.wireframe is empty')
  if (lines.length > 24) out.push('meta.wireframe must have at most 24 lines')
  if (lines.some((line) => [...line].length > 64)) out.push('meta.wireframe lines must have at most 64 characters')
  if (wireframe.includes('\t')) out.push('meta.wireframe must not contain tabs')
  if (lines.some((line) => / +$/.test(line))) out.push('meta.wireframe must not have trailing spaces')
  if (!lines[0].trim() || !lines.at(-1)!.trim()) out.push('meta.wireframe must not have a blank first or last line')
  if (new Set(lines.map((line) => [...line].length)).size > 1) out.push('meta.wireframe lines must all have the same width: draw one outer frame')
  if (/[^\n\x20-\x7e\u2500-\u259f]/u.test(wireframe)) out.push('meta.wireframe may only use printable ASCII and box-drawing characters')
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

function checkTsx(tsx: string): string[] {
  const source = ts.createSourceFile('Component.tsx', tsx, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
  return checkTsxSyntax(source)
}

function checkTsxSyntax(source: ts.SourceFile): string[] {
  const out = new Set<string>()
  const declarations = new Map<string, ts.Node>()
  const defaults: (ts.Node | undefined)[] = []
  for (const statement of source.statements) {
    if (ts.isFunctionDeclaration(statement) && statement.name) declarations.set(statement.name.text, statement)
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (ts.isIdentifier(declaration.name) && declaration.initializer) {
          declarations.set(declaration.name.text, declaration.initializer)
        }
      }
    }
    if (ts.isExportAssignment(statement) && !statement.isExportEquals) defaults.push(statement.expression)
    if (ts.canHaveModifiers(statement) && ts.getModifiers(statement)?.some((modifier) => modifier.kind === ts.SyntaxKind.DefaultKeyword)) {
      defaults.push(statement)
    }
    if (ts.isExportDeclaration(statement) && statement.exportClause && ts.isNamedExports(statement.exportClause)) {
      for (const specifier of statement.exportClause.elements) {
        if (specifier.name.text === 'default') defaults.push(statement.moduleSpecifier ? undefined : specifier.propertyName ?? specifier.name)
      }
    }
  }
  if (defaults.length !== 1) {
    out.add(`Component.tsx must have exactly one default export (found ${defaults.length})`)
  } else {
    const component = resolveComponent(defaults[0], declarations)
    if (!component || component.parameters.length > 0) {
      out.add('Component.tsx must default-export a component function with no parameters; remove props')
    }
  }

  const visit = (node: ts.Node) => {
    const module = importedModule(node)
    if (module) {
      const specifier = ts.isStringLiteralLike(module) ? module.text : undefined
      if (specifier !== 'react') {
        out.add(`Component.tsx imports ${specifier === undefined ? '(not a literal)' : `"${specifier}"`}; only "react" may be imported`)
      }
    }
    if (ts.isCallExpression(node) && /^use[A-Z]/.test(callName(node.expression))) {
      out.add('Component.tsx uses hooks or event handlers; interactivity must be CSS-only (no interactive JS)')
    }
    if (ts.isJsxAttribute(node)) {
      const name = node.name.getText(source)
      if (/^on[A-Z]/.test(name)) {
        out.add('Component.tsx uses hooks or event handlers; interactivity must be CSS-only (no interactive JS)')
      }
      if (/^src(?:set)?$/i.test(name)) out.add(`Component.tsx must not use a ${name} attribute; use a media placeholder`)
      if (name === 'fill' || name === 'stroke') {
        const value = node.initializer && ts.isJsxExpression(node.initializer) ? node.initializer.expression : node.initializer
        const literal = value && unwrapExpression(value)
        if (!literal || !ts.isStringLiteralLike(literal) || !['none', 'currentColor'].includes(literal.text)) {
          out.add(`Component.tsx SVG ${name} must be none or currentColor`)
        }
      }
      if (name === 'className' && node.initializer) {
        for (const token of literalClasses(node.initializer, declarations)) {
          if (outsideKit(token)) out.add(`Component.tsx class "${token}" is outside the wireframe kit`)
        }
      }
      if (name === 'style') out.add('Component.tsx uses a style attribute; use Tailwind classes only')
      // React warns about HTML-style names such as stroke-width; only data-* and aria-* keep their dashes.
      if (name.includes('-') && !/^(data|aria)-/.test(name)) {
        const prop = name.replace(/-(\w)/g, (_, letter: string) => letter.toUpperCase())
        out.add(`Component.tsx uses the HTML attribute name ${name}; write the React prop ${prop}`)
      }
      if (name === 'className' && node.initializer && hasDarkVariant(node.initializer)) {
        out.add('Component.tsx uses a dark: variant; components must not follow the site theme')
      }
    }
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      const tag = node.tagName.getText(source)
      if (tag === 'style' || tag === 'script') {
        out.add(`Component.tsx must not contain <${tag}>; use Tailwind classes and CSS-only interactivity`)
      }
      if (MEDIA_TAGS.has(tag)) out.add(`Component.tsx must not contain <${tag}>; use a media placeholder`)
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  return [...out]
}

function unwrapExpression(node: ts.Node): ts.Node {
  while (ts.isParenthesizedExpression(node) || ts.isAsExpression(node) || ts.isTypeAssertionExpression(node) || ts.isSatisfiesExpression(node) || ts.isNonNullExpression(node)) {
    node = node.expression
  }
  return node
}

function resolveComponent(node: ts.Node | undefined, declarations: Map<string, ts.Node>): ts.FunctionDeclaration | ts.FunctionExpression | ts.ArrowFunction | undefined {
  const seen = new Set<string>()
  while (node) {
    node = unwrapExpression(node)
    if (ts.isFunctionDeclaration(node) || ts.isFunctionExpression(node) || ts.isArrowFunction(node)) return node
    if (!ts.isIdentifier(node) || seen.has(node.text)) return undefined
    seen.add(node.text)
    node = declarations.get(node.text)
  }
  return undefined
}

function importedModule(node: ts.Node): ts.Node | undefined {
  if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) return node.moduleSpecifier
  if (ts.isImportEqualsDeclaration(node) && ts.isExternalModuleReference(node.moduleReference)) return node.moduleReference.expression
  if (ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword) return node.arguments[0]
  if (ts.isImportTypeNode(node) && ts.isLiteralTypeNode(node.argument)) return node.argument.literal
  return undefined
}

function callName(expression: ts.Expression): string {
  const node = unwrapExpression(expression)
  if (ts.isIdentifier(node)) return node.text
  if (ts.isPropertyAccessExpression(node)) return node.name.text
  if (ts.isElementAccessExpression(node) && ts.isStringLiteralLike(node.argumentExpression)) return node.argumentExpression.text
  return ''
}

function hasDarkVariant(node: ts.Node): boolean {
  if ((ts.isStringLiteralLike(node) || ts.isTemplateLiteralToken(node)) && /\bdark:/.test(node.text)) return true
  return ts.forEachChild(node, hasDarkVariant) ?? false
}

function literalClasses(node: ts.Node, declarations: Map<string, ts.Node>, seen = new Set<string>()): string[] {
  if (ts.isIdentifier(node)) {
    const initializer = declarations.get(node.text)
    if (!initializer || seen.has(node.text)) return []
    return literalClasses(initializer, declarations, new Set(seen).add(node.text))
  }
  if (ts.isStringLiteralLike(node) || ts.isTemplateLiteralToken(node)) return classTokens(node.text)
  const tokens: string[] = []
  ts.forEachChild(node, (child) => { tokens.push(...literalClasses(child, declarations, seen)) })
  return tokens
}

function checkHtml(html: string, slug: string): string[] {
  const out: string[] = []
  const fragment = parseFragment(html)
  const root = fragment.childNodes.find((node) => 'tagName' in node)
  const classes = root && 'attrs' in root ? root.attrs.find((attr) => attr.name === 'class')?.value.split(/\s+/) ?? [] : []
  if (!classes.includes(slug)) out.push(`index.html root element must have the class "${slug}"`)
  function visit(node: DefaultTreeAdapterMap['node']) {
    if ('tagName' in node) {
      if (['link', 'style', 'script'].includes(node.tagName)) out.push(`index.html must not contain <${node.tagName}>; the copy builder and parity harness add styles`)
      if (MEDIA_TAGS.has(node.tagName)) out.push(`index.html must not contain <${node.tagName}>; use a media placeholder`)
      for (const attr of node.attrs) {
        if (['src', 'srcset', 'style'].includes(attr.name)) out.push(`index.html must not use a ${attr.name} attribute`)
        if (['fill', 'stroke'].includes(attr.name) && !['none', 'currentColor'].includes(attr.value)) out.push(`index.html SVG ${attr.name} must be none or currentColor`)
      }
      if ('content' in node) visit(node.content)
    }
    if ('childNodes' in node) node.childNodes.forEach(visit)
  }
  visit(fragment)
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
  root.walkAtRules((rule) => {
    if (/^(?:import|font-face)$/i.test(rule.name)) out.push(`styles.css must not use @${rule.name}`)
  })
  const resetFamilyLine = css.split('\n').findIndex((line) => line.startsWith(resetCss(slug).split('\n')[2].split(';')[0] + ';')) + 1
  root.walkDecls((declaration) => { out.push(...checkKitDeclaration(declaration, resetFamilyLine)) })
  root.walkAtRules((rule) => {
    if (!/keyframes$/i.test(rule.name)) return
    const name = rule.params.trim().replace(/^(['"])(.*)\1$/, '$2')
    if (!name.startsWith(slug)) out.push(`styles.css @${rule.name} name "${name}" must start with "${slug}"`)
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
