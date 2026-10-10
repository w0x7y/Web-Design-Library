import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { createElement, type ComponentType } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { parseFragment, serializeOuter, type DefaultTreeAdapterMap } from 'parse5'
import postcss, { type ChildNode, type Declaration } from 'postcss'
import { compile } from 'tailwindcss'
import { resetCss } from '../src/library/reset'
import { COMPONENTS_DIR, isSlug } from '../src/library/catalog'

// Usage: npx tsx scripts/draft-twin.ts <slug> [<slug> ...] [--write]
// Default output remains gitignored twin-drafts/<slug>/. --write replaces the component's twin.
type HtmlNode = DefaultTreeAdapterMap['node']
type Element = DefaultTreeAdapterMap['element']
type Condition = { name: string; params: string }
type CssBlock = { selector: string; conditions: Condition[]; declarations: Declaration[]; order: number }
type Part = { classes: string; name: string; root: boolean; reused: boolean }

function elements(node: HtmlNode): Element[] {
  return [
    ...('tagName' in node ? [node] : []),
    ...('childNodes' in node ? node.childNodes.flatMap(elements) : []),
  ]
}

function attr(element: Element, name: string): string {
  return element.attrs.find(a => a.name === name)?.value ?? ''
}

function isMarker(name: string): boolean {
  return /^(group|peer)(\/[^:]+)?$/.test(name)
}

function markerName(slug: string, marker: string): string {
  return `${slug}__${marker.replace('/', '--')}`
}

/** Prefer structural roles over content, which authors are likely to replace. */
function partRole(element: Element, classes: string): string {
  const tag = element.tagName
  const role = attr(element, 'role')
  if (role === 'img' || ['img', 'video', 'picture', 'figure'].includes(tag)) return 'media'
  if (tag === 'svg') return 'icon'
  if (tag === 'h1') return 'title'
  if (tag === 'h2') return 'heading'
  if (/^h[3-6]$/.test(tag)) return 'subheading'
  if (['ul', 'ol'].includes(tag) || role === 'list') return 'list'
  if (tag === 'li' || role === 'listitem') return 'item'
  if (tag === 'button' || role === 'button' || (tag === 'a' && /\b(?:inline-flex|h-\d+|bg-|border\b)/.test(classes))) return 'button'
  if (tag === 'a') return 'link'
  if (['input', 'textarea', 'select', 'label', 'form', 'summary', 'details'].includes(tag)) return tag
  if (tag === 'p') {
    if (/\btext-(?:lg|xl|2xl)\b/.test(classes)) return 'lede'
    if (/\b(?:uppercase|tracking-widest)\b/.test(classes)) return 'eyebrow'
    if (/\btext-xs\b/.test(classes)) return 'meta'
    return 'text'
  }
  if (tag === 'nav' || role === 'navigation') return 'navigation'
  if (['header', 'footer', 'main', 'aside', 'section', 'article'].includes(tag)) return tag
  if (tag === 'figcaption') return 'caption'
  const children = element.childNodes.filter(n => 'tagName' in n)
  if (children.length && children.every(n => 'tagName' in n && ['button', 'a'].includes(n.tagName))) return 'actions'
  if (/\bmx-auto\b/.test(classes) && /\bmax-w-/.test(classes)) return 'container'
  if (/\bgrid\b/.test(classes)) return 'grid'
  if (/\brounded/.test(classes) && /\bborder\b/.test(classes)) return 'card'
  if (attr(element, 'aria-label')) return attr(element, 'aria-label').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || tag
  if (/\bflex-col\b/.test(classes)) return 'stack'
  if (/\bflex\b/.test(classes)) return 'row'
  return tag === 'div' ? 'content' : tag
}

function modifier(role: string, classes: string): string | undefined {
  classes = classes.split(' ').filter(c => !c.includes(':')).join(' ')
  if (role === 'button') {
    if (/\bborder(?:\s|$|-[0-9])/.test(classes) && !/\bbg-(?!white\b|transparent\b)/.test(classes)) return 'secondary'
    if (/\bbg-(?!white\b|transparent\b)/.test(classes)) return 'primary'
    if (/\b(?:size-|p-\d)/.test(classes) && !/\bpx-/.test(classes)) return 'icon'
  }
  if (/\bhidden\b/.test(classes)) return 'hidden'
  return undefined
}

function nameParts(fragment: DefaultTreeAdapterMap['documentFragment'], slug: string) {
  const all = elements(fragment)
  const root = all[0]
  if (!root || fragment.childNodes.filter(n => 'tagName' in n).length !== 1) throw new Error(`${slug}: expected one root element`)
  const parts = new Map<string, Part>()
  const names = new Set<string>(['group', 'peer'])
  const markers = new Map<string, string>()
  const layouts = new Set<Element>()
  for (const element of all) {
    const utilities = attr(element, 'class').split(/\s+/).filter(Boolean)
    if (utilities.some(c => /^(?:flex|grid|inline-flex|inline-grid)$/.test(c))) layouts.add(element)
    const classes = [...new Set(utilities.filter(c => !isMarker(c)))].sort().join(' ')
    let part = parts.get(classes)
    if (classes && !part) {
      const role = partRole(element, classes)
      let name = role
      if (names.has(name)) {
        const suffix = modifier(role, classes)
        if (suffix && !names.has(`${role}--${suffix}`)) name = `${role}--${suffix}`
        else { let ordinal = 2; while (names.has(`${role}-${ordinal}`)) ordinal++; name = `${role}-${ordinal}` }
      }
      names.add(name)
      part = { classes, name: `${slug}__${name}`, root: element === root, reused: false }
      parts.set(classes, part)
    } else if (part && element !== root) part.reused = true
    const output = [element === root ? slug : part?.name ?? '']
    for (const marker of utilities.filter(isMarker)) {
      const name = markerName(slug, marker)
      markers.set(marker, name)
      output.push(name)
    }
    element.attrs = element.attrs.filter(a => a.name !== 'class')
    if (output.some(Boolean)) element.attrs.push({ name: 'class', value: output.filter(Boolean).join(' ') })
  }
  return { parts: [...parts.values()], markers, layouts }
}

const VOID_TAGS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'])
const BLOCK_TAGS = new Set(['section', 'div', 'header', 'footer', 'main', 'aside', 'article', 'nav', 'form', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'figure', 'figcaption', 'details', 'summary', 'table', 'thead', 'tbody', 'tr', 'td', 'th', 'hr'])
const BOOLEAN_ATTRS = new Set(['allowfullscreen', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'inert', 'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected'])

/** Indent only where whitespace cannot create an inline gap or change text wrapping. */
function prettyHtml(node: HtmlNode, layouts: Set<Element>, depth = 0): string {
  if (!('tagName' in node)) return 'nodeName' in node && node.nodeName === '#comment' ? '' : serializeOuter(node)
  const outer = serializeOuter(node)
  const opening = outer.slice(0, outer.indexOf('>') + 1).replace(/ src="([^"]*)"/g, (_, src: string) => ` src="${src.replaceAll('&amp;', '&')}"`).replace(/ ([\w-]+)=""/g, (original, name: string) => BOOLEAN_ATTRS.has(name) ? ` ${name}` : original)
  if (VOID_TAGS.has(node.tagName)) return opening
  if (node.tagName === 'pre' || node.tagName === 'textarea') return outer
  const children = node.childNodes.filter(n => n.nodeName !== '#comment')
  const canIndent = children.length > 0 && children.every(n => 'tagName' in n) &&
    (layouts.has(node) || node.namespaceURI.includes('svg') || children.some(n => 'tagName' in n && BLOCK_TAGS.has(n.tagName)))
  if (!canIndent) return `${opening}${children.map(n => prettyHtml(n, layouts, depth)).join('')}</${node.tagName}>`
  const indent = '  '.repeat(depth)
  const lines: HtmlNode[][] = []
  let inline: HtmlNode[] = []
  for (const child of children) {
    const block = layouts.has(node) || node.namespaceURI.includes('svg') || ('tagName' in child && BLOCK_TAGS.has(child.tagName))
    if (block) { if (inline.length) lines.push(inline); inline = []; lines.push([child]) }
    else inline.push(child)
  }
  if (inline.length) lines.push(inline)
  return `${opening}\n${lines.map(line => `${indent}  ${line.map(n => prettyHtml(n, layouts, depth + 1)).join('')}`).join('\n')}\n${indent}</${node.tagName}>`
}

/** Split on a delimiter only outside functions, brackets and quoted strings. */
function splitTop(value: string, delimiter = ','): string[] {
  let depth = 0; let quote = ''; let start = 0
  const parts: string[] = []
  for (let i = 0; i < value.length; i++) {
    const c = value[i]
    if (quote) { if (c === quote && value[i - 1] !== '\\') quote = ''; continue }
    if (c === '"' || c === "'") quote = c
    else if (c === '(' || c === '[') depth++
    else if (c === ')' || c === ']') depth--
    else if (c === delimiter && depth === 0) { parts.push(value.slice(start, i).trim()); start = i + 1 }
  }
  parts.push(value.slice(start).trim())
  return parts
}

function replaceFunctions(value: string, name: string, replace: (body: string) => string): string {
  let start = -1; let quote = ''
  for (let i = 0; i < value.length; i++) {
    const c = value[i]
    if (quote) { if (c === quote && value[i - 1] !== '\\') quote = ''; continue }
    if (c === '"' || c === "'") { quote = c; continue }
    if (value.startsWith(`${name}(`, i) && !/[\w-]/.test(value[i - 1] ?? '')) { start = i; break }
  }
  if (start === -1) return value
  let depth = 1; let end = start + name.length + 1
  for (; end < value.length; end++) {
    const c = value[end]
    if (quote) { if (c === quote && value[end - 1] !== '\\') quote = ''; continue }
    if (c === '"' || c === "'") quote = c
    else if (c === '(') depth++
    else if (c === ')' && --depth === 0) break
  }
  if (depth) throw new Error(`Unbalanced ${name}() in ${value}`)
  return value.slice(0, start) + replace(value.slice(start + name.length + 1, end)) + replaceFunctions(value.slice(end + 1), name, replace)
}

function simplifyCalc(value: string): string {
  return replaceFunctions(value, 'calc', body => {
    body = simplifyCalc(body)
    const number = '(-?(?:\\d*\\.)?\\d+)([a-z%]*)'
    const simple = body.match(new RegExp(`^\\s*${number}\\s*([+*/-])\\s*${number}\\s*$`))
    if (!simple) return `calc(${body})`
    const [, a, au, op, b, bu] = simple
    // Ratios are Tailwind's exact unitless font line heights. Keep their readable form.
    if (op === '/' && !au && !bu) return `calc(${body})`
    const x = Number(a); const y = Number(b)
    let result: number; let unit: string
    if ((op === '+' || op === '-') && (au === bu || x === 0 || y === 0)) { result = op === '+' ? x + y : x - y; unit = au || bu }
    else if (op === '*' && (!au || !bu)) { result = x * y; unit = au || bu }
    else if (op === '/' && y !== 0 && (!bu || au === bu)) { result = x / y; unit = bu ? '' : au }
    else return `calc(${body})`
    return `${Number(result.toFixed(10))}${unit}`
  })
}

function simplifyOpacity(value: string): string {
  return replaceFunctions(value, 'color-mix', body => {
    body = simplifyOpacity(body)
    const pieces = splitTop(body)
    const color = pieces[1]?.match(/^(.*)\s+(\d+(?:\.\d+)?)%$/)
    if (pieces[0] !== 'in oklab' || pieces[2] !== 'transparent' || !color) return `color-mix(${body})`
    const alpha = Number(color[2]) / 100
    const oklch = color[1].match(/^oklch\(([^/]+?)(?:\s*\/\s*([\d.]+))?\)$/)
    if (oklch) return `oklch(${oklch[1].trim()} / ${alpha * Number(oklch[2] ?? 1)})`
    const hex = color[1].match(/^#([\da-f]{3,8})$/i)?.[1]
    if (hex && [3, 4, 6, 8].includes(hex.length)) {
      const full = hex.length < 5 ? [...hex].map(c => c + c).join('') : hex
      const channels = [0, 2, 4].map(i => parseInt(full.slice(i, i + 2), 16))
      const originalAlpha = full.length === 8 ? parseInt(full.slice(6), 16) / 255 : 1
      return `rgb(${channels.join(' ')} / ${Number((alpha * originalAlpha).toFixed(8))})`
    }
    return `color-mix(${body})`
  })
}

/** Resolve only the selected fallback; unknown or cyclic custom properties fail loudly. */
export function resolveValue(value: string, variables: ReadonlyMap<string, string>, annotations: ReadonlyMap<string, string> = new Map()): { value: string; tokens: string[] } {
  const tokens = new Set<string>()
  const substitute = (input: string, chain: string[]): string => replaceFunctions(input, 'var', body => {
    const [name, ...fallback] = splitTop(body)
    const raw = variables.get(name)
    if (raw !== undefined && raw !== 'initial' && !chain.includes(name)) {
      if (!name.startsWith('--tw-')) tokens.add(name.replace(/^--(?:color-)?/, ''))
      else if (annotations.has(name)) tokens.add(annotations.get(name) ?? '')
      return substitute(raw, [...chain, name])
    }
    if (fallback.length) return substitute(fallback.join(', '), chain)
    throw new Error(`Cannot resolve ${name}${chain.includes(name) ? ' (cyclic)' : ''} in ${value}`)
  })
  return { value: simplifyOpacity(simplifyCalc(substitute(value, []))).trim().replace(/\s+,/g, ','), tokens: [...tokens] }
}

/** Lift nested Tailwind selectors without changing the order of their declarations. */
function flatten(nodes: ChildNode[], parents: string[] = [], conditions: Condition[] = []): CssBlock[] {
  const output: CssBlock[] = []
  let declarations: Declaration[] = []
  const flush = () => {
    if (declarations.length) output.push({ selector: parents.join(', '), conditions, declarations, order: 0 })
    declarations = []
  }
  for (const node of nodes) {
    if (node.type === 'decl') { declarations.push(node); continue }
    flush()
    if (node.type === 'rule') {
      const selectors = parents.length ? parents.flatMap(parent => splitTop(node.selector).map(selector => selector.includes('&') ? selector.replaceAll('&', parent) : `${parent} ${selector}`)) : splitTop(node.selector)
      output.push(...flatten(node.nodes, selectors, conditions))
    } else if (node.type === 'atrule' && node.nodes && ['media', 'supports', 'container', 'starting-style'].includes(node.name)) {
      output.push(...flatten(node.nodes, parents, [...conditions, { name: node.name, params: node.params }]))
    }
  }
  flush()
  return output
}

function conditionKey(conditions: Condition[]): string {
  return JSON.stringify(conditions)
}

function implies(target: Condition[], source: Condition[]): boolean {
  return source.every(c => target.some(t => {
    if (t.name !== c.name) return false
    if (t.params === c.params) return true
    const a = t.params.match(/^\(width >= ([\d.]+)rem\)$/)
    const b = c.params.match(/^\(width >= ([\d.]+)rem\)$/)
    return !!a && !!b && Number(a[1]) >= Number(b[1])
  }))
}

function declarationsMap(blocks: CssBlock[], custom: boolean): Map<string, Declaration> {
  const result = new Map<string, Declaration>()
  for (const block of blocks) for (const declaration of block.declarations) {
    if (declaration.prop.startsWith('--') !== custom) continue
    if (!result.get(declaration.prop)?.important || declaration.important) result.set(declaration.prop, declaration)
  }
  return result
}

/** The simple selectors on this element; descendant selectors and pseudo-elements are separate. */
function predicates(selector: string, base: string): string[] | undefined {
  if (!selector.startsWith(base)) return undefined
  const suffix = selector.slice(base.length)
  const result: string[] = []
  for (let i = 0; i < suffix.length;) {
    const start = i
    const prefix = suffix[i++]
    if (![':', '[', '.', '#'].includes(prefix) || suffix[i] === ':') return undefined
    let bracket = prefix === '[' ? 1 : 0
    let quote = ''
    for (; i < suffix.length; i++) {
      const c = suffix[i]
      if (quote) { if (c === quote && suffix[i - 1] !== '\\') quote = ''; continue }
      if (c === '"' || c === "'") quote = c
      else if (c === '(' || c === '[') bracket++
      else if (c === ')' || c === ']') { bracket--; if (!bracket) { i++; break } }
      else if (!bracket && !/[\w-]/.test(c)) break
    }
    if (bracket) return undefined
    result.push(suffix.slice(start, i))
  }
  return result
}

function intersectContexts(source: CssBlock[], base: string): CssBlock[] {
  const targets = new Map(source.map(b => [`${b.selector}|${conditionKey(b.conditions)}`, b]))
  const conditional = source.filter(b => predicates(b.selector, base) && (b.selector !== base || b.conditions.length))
  // Only intersections that can affect custom-property composition need extra CSS.
  for (const left of conditional) {
    if (!left.declarations.some(d => d.prop.startsWith('--tw-'))) continue
    for (const right of [...targets.values()]) {
      const a = predicates(left.selector, base); const b = predicates(right.selector, base)
      if (!a || !b || (!b.length && !right.conditions.length)) continue
      const states = [...new Set([...a, ...b])]
      const conditions = [...left.conditions]
      for (const c of right.conditions) if (!conditions.some(t => t.name === c.name && t.params === c.params)) conditions.push(c)
      const widths = conditions.filter(c => /^\(width >= [\d.]+rem\)$/.test(c.params))
      const maximum = Math.max(...widths.map(c => Number(c.params.match(/[\d.]+/)?.[0])))
      const normalized = conditions.filter(c => !widths.includes(c) || Number(c.params.match(/[\d.]+/)?.[0]) === maximum)
      normalized.sort((a, b) => Number(!a.params.startsWith('(width')) - Number(!b.params.startsWith('(width')))
      const selector = `${base}${states.join('')}`
      const key = `${selector}|${conditionKey(normalized)}`
      if (!targets.has(key)) targets.set(key, { selector, conditions: normalized, declarations: [], order: Math.max(left.order, right.order) + 0.01 })
    }
  }
  return [...targets.values()]
}

function literalBlocks(blocks: CssBlock[], defaults: Map<string, string>, baseSelector: string): CssBlock[] {
  const contexts = new Map<string, CssBlock>()
  for (const block of blocks) {
    const key = `${block.selector}|${conditionKey(block.conditions)}`
    const existing = contexts.get(key)
    if (existing) existing.declarations.push(...block.declarations)
    else contexts.set(key, { ...block, declarations: [...block.declarations] })
  }
  const source = [...contexts.values()]
  return intersectContexts(source, baseSelector).flatMap(target => {
    // Descendant and pseudo-element rules have their own non-inheriting --tw defaults.
    const targetStates = predicates(target.selector, baseSelector)
    const sameElement = targetStates !== undefined
    const applicable = source.filter(b => {
      const states = predicates(b.selector, baseSelector)
      return implies(target.conditions, b.conditions) &&
        (b.selector === target.selector || (targetStates && states && states.every(s => targetStates.includes(s))))
    })
    const vars = new Map(defaults)
    const annotations = new Map<string, string>()
    for (const [name, declaration] of declarationsMap(applicable, true)) {
      vars.set(name, declaration.value)
      if (typeof declaration.raws.twinTokens === 'string') annotations.set(name, declaration.raws.twinTokens)
    }
    const native = declarationsMap(applicable, false)
    const baseBlocks = source.filter(b => b.selector === baseSelector && b.conditions.length === 0)
    const baseVars = new Map(defaults)
    for (const [name, declaration] of declarationsMap(baseBlocks, true)) baseVars.set(name, declaration.value)
    const baseNative = declarationsMap(baseBlocks, false)
    const ownNative = declarationsMap([target], false)
    const declarations: Declaration[] = []
    for (const [prop, declaration] of native) {
      const resolved = resolveValue(declaration.value, vars, annotations)
      if (sameElement && (target.selector !== baseSelector || target.conditions.length)) {
        const baseline = baseNative.get(prop)
        if (!ownNative.has(prop) && baseline && resolveValue(baseline.value, baseVars).value === resolved.value) continue
      }
      let value = resolved.value
      if (prop === 'transition-property') value = [...new Set(splitTop(value).map(p => p.startsWith('--tw-') ? 'background-image' : p))].join(', ')
      const literal = declaration.clone({ value })
      // Store token comments beside their declarations rather than in a separate global token table.
      literal.raws.twinTokens = resolved.tokens.join(', ')
      declarations.push(literal)
    }
    return declarations.length ? [{ ...target, declarations }] : []
  })
}

function formatBlocks(blocks: CssBlock[]): string {
  // Insert in Tailwind's global variant order, keeping media groups at their cascade position.
  type Entry = { kind: 'rule'; block: CssBlock } | { kind: 'condition'; condition: Condition; group: Group }
  type Group = { entries: Entry[]; children: Map<string, Group> }
  const root: Group = { entries: [], children: new Map() }
  for (const block of [...blocks].sort((a, b) => a.order - b.order)) {
    let group = root
    for (const condition of block.conditions) {
      const key = `${condition.name} ${condition.params}`
      let child = group.children.get(key)
      if (!child) {
        child = { entries: [], children: new Map() }
        group.children.set(key, child)
        group.entries.push({ kind: 'condition', condition, group: child })
      }
      group = child
    }
    group.entries.push({ kind: 'rule', block })
  }
  const render = (group: Group, depth: number): string => {
    const indent = '  '.repeat(depth)
    return group.entries.map(entry => {
      if (entry.kind === 'condition') {
        const { condition } = entry
        return `${indent}@${condition.name}${condition.params ? ` ${condition.params}` : ''} {\n${render(entry.group, depth + 1)}\n${indent}}`
      }
      const { block } = entry
      return `${indent}${block.selector} {\n${block.declarations.map(d => `${indent}  ${d.prop}: ${d.value}${d.important ? ' !important' : ''};${d.raws.twinTokens ? ` /* ${d.raws.twinTokens} */` : ''}`).join('\n')}\n${indent}}`
    }).join('\n\n')
  }
  return render(root, 0)
}

export async function generateTwin({ slug, markup, theme }: { slug: string; markup: string; theme: string }): Promise<{ html: string; css: string }> {
  if (!isSlug(slug)) throw new Error(`Invalid component slug: ${slug}`)
  const fragment = parseFragment(markup)
  fragment.childNodes = fragment.childNodes.filter(n => !( 'tagName' in n && n.tagName === 'link' && attr(n, 'rel') === 'preload'))
  const { parts, markers, layouts } = nameParts(fragment, slug)
  const allUtilities = [...new Set(parts.flatMap(p => p.classes.split(' ')))].join(' ')
  const orderSelector = `.${slug}__twin-order`
  const compiler = await compile(`${theme}\n${allUtilities ? `${orderSelector} { @apply ${allUtilities}; }` : ''}\n${parts.map(part => `${part.root ? `.${slug}__twin-root` : `.${slug} .${part.name}`} { @apply ${part.classes}; }`).join('\n')}`)
  const compiled = postcss.parse(compiler.build([]))
  const defaults = new Map<string, string>()
  postcss.parse(theme).walkDecls(d => { if (d.prop.startsWith('--')) defaults.set(d.prop, d.value) })
  compiled.walkAtRules('property', property => {
    const initial = property.nodes?.find(n => n.type === 'decl' && n.prop === 'initial-value')
    if (initial?.type === 'decl') defaults.set(property.params, initial.value)
  })
  const shadowTokens = new Map([...defaults].filter(([name]) => /^--(?:inset-)?shadow-/.test(name)).map(([name, value]) => [value, name.slice(2)]))
  compiled.walkDecls(d => {
    if (d.prop === '--tw-shadow' || d.prop === '--tw-inset-shadow') {
      const token = shadowTokens.get(resolveValue(d.value, defaults).value)
      if (token) d.raws.twinTokens = token
    }
  })
  const blocks: CssBlock[] = []
  const flattened = flatten(compiled.nodes)
  const contextKey = (block: CssBlock, base: string) => `${block.selector.replaceAll(base, '&')}|${conditionKey(block.conditions)}`
  const ordering = new Map(flattened.filter(b => b.selector.includes(orderSelector)).map((b, index) => [contextKey(b, orderSelector), index]))
  for (const part of parts) {
    const base = part.root ? `.${slug}` : `.${slug} .${part.name}`
    const identifier = part.root ? `${slug}__twin-root` : part.name
    const owns = new RegExp(`\\.${identifier}(?![\\w-])`)
    let flat = flattened.filter(block => owns.test(block.selector)).map(block => ({ ...block, selector: block.selector.replaceAll(`.${slug}__twin-root`, `.${slug}`) }))
    flat = flat.map(block => ({ ...block, order: block.selector === base && !block.conditions.length ? -1 : ordering.get(contextKey(block, base)) ?? 0, selector: block.selector.replace(/\.((?:group|peer)(?:\\\/[^:) ]+)?)\b/g, (original, escaped: string) => {
      const marker = escaped.replace(/\\(.)/g, '$1')
      return markers.has(marker) ? `.${markers.get(marker)}` : original
    }) }))
    for (const block of literalBlocks(flat, defaults, base)) {
      block.selector = splitTop(block.selector).map(s => s.startsWith(`.${slug}`) ? s : `.${slug} ${s}`).join(', ')
      if (part.root && part.reused) block.selector = splitTop(block.selector).flatMap(selector => [selector, selector.replaceAll(`.${slug}`, `.${slug} .${part.name}`)]).join(', ')
      blocks.push(block)
    }
  }
  let output = formatBlocks(blocks)
  const keyframes: string[] = []
  compiled.walkAtRules('keyframes', animation => {
    const clone = animation.clone({ params: `${slug}-${animation.params}` })
    clone.walkDecls(d => { d.value = resolveValue(d.value, defaults).value })
    keyframes.push(clone.toString())
    output = output.replace(new RegExp(`(?<![\\w-])${animation.params}(?![\\w-])`, 'g'), `${slug}-${animation.params}`)
  })
  return {
    html: `${fragment.childNodes.map(n => prettyHtml(n, layouts)).join('')}\n`,
    css: `${resetCss(slug)}\n${output}${keyframes.length ? `\n\n${keyframes.join('\n\n')}` : ''}\n`,
  }
}

async function main(args: string[]) {
  const write = args.includes('--write')
  const slugs = args.filter(arg => arg !== '--write')
  if (!slugs.length || slugs.some(slug => !isSlug(slug))) throw new Error('Provide one or more kebab-case component slugs and optional --write')
  const theme = await readFile(resolve('node_modules/tailwindcss/theme.css'), 'utf8')
  for (const slug of slugs) {
    const dir = resolve(COMPONENTS_DIR, slug)
    const module: { default: ComponentType } = await import(pathToFileURL(resolve(dir, 'Component.tsx')).href)
    const twin = await generateTwin({ slug, markup: renderToStaticMarkup(createElement(module.default)), theme })
    const destination = write ? dir : resolve('twin-drafts', slug)
    await mkdir(destination, { recursive: true })
    await writeFile(resolve(destination, 'index.html'), twin.html)
    await writeFile(resolve(destination, 'styles.css'), twin.css)
    console.log(`Wrote ${write ? `src/library/components/${slug}` : `twin-drafts/${slug}`}/`)
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) await main(process.argv.slice(2))
