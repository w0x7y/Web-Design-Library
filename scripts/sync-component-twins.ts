import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { createElement, type ComponentType } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { parseFragment, serialize, type DefaultTreeAdapterMap } from 'parse5'
import postcss, { type ChildNode, type Rule, type AtRule } from 'postcss'
import { compile } from 'tailwindcss'
import { resetCss } from '../src/library/reset'
import { COMPONENTS_DIR, isSlug } from '../src/library/catalog'

// Explicit slugs only: existing, hand-authored twins are never overwritten by a batch scan.
// Usage: npx tsx scripts/sync-component-twins.ts <slug> [<slug> ...]
// The output is standalone HTML and scoped CSS, with no Tailwind runtime or build step.

const slugs = process.argv.slice(2)
if (slugs.length === 0 || slugs.some((slug) => !isSlug(slug))) {
  throw new Error('Provide one or more kebab-case component slugs')
}

const theme = await readFile(
  resolve('node_modules/tailwindcss/theme.css'),
  'utf8',
)
const markerClasses = new Set(['group', 'peer'])

type HtmlNode = DefaultTreeAdapterMap['node']

function visitElements(
  node: HtmlNode,
  visit: (element: DefaultTreeAdapterMap['element']) => void,
) {
  if ('tagName' in node) visit(node)
  if ('childNodes' in node) {
    for (const child of node.childNodes) visitElements(child, visit)
  }
}

/** Lift nested Tailwind variants into ordinary scoped selectors, retaining their cascade order. */
function flatten(
  nodes: ChildNode[],
  slug: string,
  parents: string[] = [],
): ChildNode[] {
  const output: ChildNode[] = []
  let declarations: ChildNode[] = []
  const flush = () => {
    if (declarations.length === 0) return
    if (parents.length === 0)
      throw new Error('Unexpected unscoped CSS declaration')
    output.push(
      postcss.rule({ selector: parents.join(', '), nodes: declarations }),
    )
    declarations = []
  }
  for (const node of nodes) {
    if (node.type === 'decl' || node.type === 'comment') {
      declarations.push(node.clone())
      continue
    }
    flush()
    if (node.type === 'rule') {
      const selectors = parents.length
        ? parents.flatMap((parent) =>
            node.selectors.map((selector) =>
              selector.includes('&')
                ? selector.replaceAll('&', parent)
                : `${parent} ${selector}`,
            ),
          )
        : node.selectors.map((selector) => {
            if (selector === ':root' || selector === ':host') return `.${slug}`
            if (selector.startsWith(`.${slug}`)) return selector
            return `.${slug} ${selector}`
          })
      output.push(...flatten(node.nodes, slug, [...new Set(selectors)]))
    } else if (node.type === 'atrule') {
      if (
        !node.nodes ||
        node.name === 'property' ||
        /keyframes$/.test(node.name)
      ) {
        output.push(node.clone())
      } else {
        const children = flatten(node.nodes, slug, parents)
        if (children.length)
          output.push(
            postcss.atRule({
              name: node.name,
              params: node.params,
              nodes: children,
            }),
          )
      }
    }
  }
  flush()
  return output
}

function format(nodes: ChildNode[], depth = 0): string {
  const indent = '  '.repeat(depth)
  return nodes
    .map((node): string => {
      if (node.type === 'decl')
        return `${indent}${node.prop}: ${node.value}${node.important ? ' !important' : ''};`
      if (node.type === 'comment') return `${indent}/* ${node.text} */`
      if (node.type === 'rule' || node.type === 'atrule') {
        const header =
          node.type === 'rule'
            ? node.selector
            : `@${node.name}${node.params ? ` ${node.params}` : ''}`
        if (!node.nodes) return `${indent}${header};`
        return `${indent}${header} {\n${format(node.nodes, depth + 1)}\n${indent}}`
      }
      throw new Error('Unexpected CSS node')
    })
    .join('\n')
}

for (const slug of slugs) {
  const dir = resolve(COMPONENTS_DIR, slug)
  const componentModule: { default: ComponentType } = await import(
    pathToFileURL(resolve(dir, 'Component.tsx')).href
  )
  const fragment = parseFragment(
    renderToStaticMarkup(createElement(componentModule.default)),
  )
  // React 19 prepends image preload links. The plain fragment has no resource
  // hints: its image markup remains intact and the copy builder supplies fonts.
  fragment.childNodes = fragment.childNodes.filter(
    (node) =>
      !(
        'tagName' in node &&
        node.tagName === 'link' &&
        node.attrs.some(
          (attr) => attr.name === 'rel' && attr.value === 'preload',
        )
      ),
  )
  const root = fragment.childNodes.find((node) => 'tagName' in node)
  if (!root || !('tagName' in root)) throw new Error(`${slug}: no root element`)

  const parts = new Map<string, string>()
  visitElements(fragment, (element) => {
    const attr = element.attrs.find((attr) => attr.name === 'class')
    const utilities = attr?.value.split(/\s+/).filter(Boolean) ?? []
    const styles = utilities
      .filter((name) => !markerClasses.has(name))
      .join(' ')
    let part = parts.get(styles)
    if (!part) {
      part = `${slug}__part-${parts.size + 1}`
      if (styles) parts.set(styles, part)
    }
    const classes = [
      element === root ? slug : '',
      styles ? part : '',
      ...utilities
        .filter((name) => markerClasses.has(name))
        .map((name) => `${slug}__${name}`),
    ].filter(Boolean)
    if (attr) attr.value = classes.join(' ')
    else if (classes.length)
      element.attrs.push({ name: 'class', value: classes.join(' ') })
  })

  // @apply uses the same utility ordering as the React build, including responsive and state variants.
  const source = `${theme}\n${[...parts].map(([classes, part]) => `.${slug}.${part}, .${slug} .${part} { @apply ${classes}; }`).join('\n')}`
  const compiler = await compile(source)
  const css = postcss.parse(compiler.build([]))
  css.walkComments((comment) => {
    comment.remove()
  })
  const flattened = postcss.root({ nodes: flatten(css.nodes, slug) })
  flattened.walkRules((rule: Rule) => {
    for (
      let parent: Rule['parent'] | postcss.Root['parent'] = rule.parent;
      parent;
      parent = parent.parent
    ) {
      if (parent.type === 'atrule' && /keyframes$/.test(parent.name)) return
    }
    rule.selector = rule.selector.replace(
      /\.(group|peer)(?![\w-])/g,
      `.${slug}__$1`,
    )
    // Utilities such as divide-y wrap the complete selector in :where(). Keep its
    // zero-specificity contents while making the required component scope explicit.
    rule.selectors = rule.selectors.map((selector) =>
      selector.startsWith(`.${slug}`) ? selector : `.${slug} ${selector}`,
    )
  })
  // Register non-inheriting utility variables under component-specific names so twins can coexist.
  let output = format(flattened.nodes).replace(
    /--([a-zA-Z][\w-]*)/g,
    `--${slug}-$1`,
  )
  // Tailwind emits global animation names when used; keep those names local to this component too.
  const animations: string[] = []
  flattened.walkAtRules('keyframes', (rule: AtRule) => {
    animations.push(rule.params)
  })
  for (const animation of animations) {
    output = output.replace(
      new RegExp(`(?<![\\w-])${animation}(?![\\w-])`, 'g'),
      `${slug}-${animation}`,
    )
  }
  // Adding whitespace between inline nodes can change line wrapping. Preserve the
  // React-rendered text exactly, including adjacency between neighboring spans.
  const html = serialize(fragment)
  await writeFile(resolve(dir, 'index.html'), `${html}\n`)
  await writeFile(resolve(dir, 'styles.css'), `${resetCss(slug)}\n${output}\n`)
  console.log(`Synced ${slug}`)
}
