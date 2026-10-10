import { SITE } from '../site'
import { FORMATS, type ComponentMeta, type ComponentSources, type Format } from './types'
import { absoluteUrl, componentPath } from './urls'

const CLOSING_LINE =
  "Map the neutral greys to the host project's design tokens and replace slot copy with real content; keep the regions, hierarchy and responsive behaviour."

/** Fenced code block whose fence is longer than any backtick run inside the code (minimum 3). */
function fence(lang: string, code: string): string {
  const longestRun = Math.max(0, ...(code.match(/`+/g) ?? []).map((run) => run.length))
  const ticks = '`'.repeat(Math.max(3, longestRun + 1))
  return `${ticks}${lang}\n${code}\n${ticks}`
}

function buildHtmlSnippet(sources: ComponentSources): string {
  return `<style>\n${sources.css.trim()}\n</style>\n${sources.html.trim()}\n`
}

/** Copyable source for one format, including a style block for HTML. */
export function codeForFormat(_meta: ComponentMeta, sources: ComponentSources, format: Format): string {
  return format === 'react' ? sources.tsx : buildHtmlSnippet(sources)
}

function referenceCode(sources: ComponentSources, format: Format): string {
  if (format === 'react') {
    return `## Reference code (React + Tailwind v4)\n${fence('tsx', sources.tsx.trimEnd())}`
  }
  const markup = sources.html.trim()
  return [
    '## Reference code (HTML + CSS)',
    fence('html', markup),
    '',
    fence('css', sources.css.trim()),
  ].join('\n')
}

function briefFor(meta: ComponentMeta, sources: ComponentSources, formats: readonly Format[]): string {
  return [
    `# ${meta.name} (${SITE.name})\nSource: ${absoluteUrl(componentPath(meta.slug))}`,
    `Layout pattern: ${meta.description}\nThis is a neutral wireframe. Keep its structure, hierarchy and responsive behaviour; take colours, type, radius, imagery and copy from the host project.`,
    `## Wireframe\n${fence('text', meta.wireframe)}`,
    `## Layout\n${meta.brief.layout}`,
    `## Hierarchy and content\n${meta.brief.hierarchy}`,
    `## States\n${meta.brief.states}`,
    `## Responsive\n${meta.brief.responsive}`,
    `## When to use\n${meta.brief.usage}`,
    ...formats.map((format) => referenceCode(sources, format)),
    CLOSING_LINE,
  ].join('\n\n') + '\n'
}

/** The component brief with reference code for one format. */
export function buildBrief(meta: ComponentMeta, sources: ComponentSources, format: Format): string {
  return briefFor(meta, sources, [format])
}

/** The component brief with reference code for every format. */
export function buildAgentMarkdown(meta: ComponentMeta, sources: ComponentSources): string {
  return briefFor(meta, sources, FORMATS)
}
