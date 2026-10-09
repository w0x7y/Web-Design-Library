import { SITE } from '../site'
import { fontDisplayName, fontLinkTag } from './fonts'
import { groupMetas } from './catalog'
import type { ComponentMeta, ComponentSources, Format } from './types'
import { absoluteUrl, componentMarkdownPath, componentPath } from './urls'

const CLOSING_LINE =
  'Adapt names, tokens and conventions to the existing project; keep the layout, hierarchy and spacing rhythm.'

const LLMS_INTRO =
  'Copy-paste UI components as React + Tailwind v4 or HTML + CSS. Each link returns a markdown brief with full source code.'

/** Fenced code block whose fence is longer than any backtick run inside the code (minimum 3). */
function fence(lang: string, code: string): string {
  const longestRun = Math.max(0, ...(code.match(/`+/g) ?? []).map((run) => run.length))
  const ticks = '`'.repeat(Math.max(3, longestRun + 1))
  return `${ticks}${lang}\n${code}\n${ticks}`
}

export function buildHtmlSnippet(meta: ComponentMeta, sources: ComponentSources): string {
  const link = fontLinkTag(meta.fonts)
  return `${link ? `${link}\n` : ''}<style>\n${sources.css.trim()}\n</style>\n${sources.html.trim()}\n`
}

export function codeForFormat(meta: ComponentMeta, sources: ComponentSources, format: Format): string {
  return format === 'react' ? sources.tsx : buildHtmlSnippet(meta, sources)
}

function referenceCode(meta: ComponentMeta, sources: ComponentSources, format: Format): string {
  if (format === 'react') {
    return `## Reference code (React + Tailwind v4)\n${fence('tsx', sources.tsx.trimEnd())}`
  }
  const link = fontLinkTag(meta.fonts)
  const markup = sources.html.trim()
  return [
    '## Reference code (HTML + CSS)',
    fence('html', link ? `${link}\n${markup}` : markup),
    '',
    fence('css', sources.css.trim()),
  ].join('\n')
}

function briefFor(meta: ComponentMeta, sources: ComponentSources, formats: Format[]): string {
  const fonts = meta.fonts.length > 0 ? meta.fonts.map(fontDisplayName).join(', ') : 'system sans-serif'
  return [
    `# ${meta.name} (${SITE.name})\nSource: ${absoluteUrl(componentPath(meta.slug))}`,
    `Build this UI component: ${meta.description}`,
    `## Layout\n${meta.brief.layout}`,
    `## Visual style\n${meta.brief.style}\nFonts: ${fonts}`,
    `## States\n${meta.brief.states}`,
    `## Responsive\n${meta.brief.responsive}`,
    ...formats.map((format) => referenceCode(meta, sources, format)),
    CLOSING_LINE,
  ].join('\n\n') + '\n'
}

export function buildBrief(meta: ComponentMeta, sources: ComponentSources, format: Format): string {
  return briefFor(meta, sources, [format])
}

export function buildAgentMarkdown(meta: ComponentMeta, sources: ComponentSources): string {
  return briefFor(meta, sources, ['react', 'html'])
}

/** The /llms.txt index: every component under its group and category, in library order. */
export function buildLlmsTxt(metas: ComponentMeta[]): string {
  const sections: string[] = [`# ${SITE.name}`, `> ${SITE.tagline}`, LLMS_INTRO]
  for (const group of groupMetas(metas)) {
    sections.push(`## ${group.label}`)
    for (const category of group.categories) {
      const lines = category.metas.map((meta) => `- [${meta.name}](${absoluteUrl(componentMarkdownPath(meta.slug))}): ${meta.description}`)
      sections.push(`### ${category.label}\n\n${lines.join('\n')}`)
    }
  }
  return sections.join('\n\n') + '\n'
}
