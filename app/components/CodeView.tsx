import { useImperativeHandle, useRef, type Ref } from 'react'
import { useFormat } from '~/lib/format-preference'
import { SOURCE_FILES } from '../../src/library/catalog'
import { CopyIcon } from './icons'
import type { ComponentSources, Format } from '../../src/library/types'

type HighlightedSources = Record<keyof ComponentSources, string>

/** The sources each format shows, in order; each is captioned with its file name. */
const FILES: Record<Format, (keyof ComponentSources)[]> = { react: ['tsx'], html: ['html', 'css'] }

const lineCount = (text: string) => text.replace(/\n$/, '').split('\n').length

export interface CodeViewHandle {
  /**
   * Selects a file's code (the first file's when `fileName` is not shown), so Ctrl/⌘+C copies it
   * when the clipboard is blocked. The view must be visible: a hidden node can't be selected.
   */
  select(fileName?: string): void
}

/**
 * The files for the picked format, each a captioned figure holding Shiki's
 * pre-rendered (dual-theme) HTML. With `onCopyFile`, each caption gets a copy button.
 */
export function CodeView({
  highlighted,
  sources,
  onCopyFile,
  ref,
}: {
  highlighted: HighlightedSources
  sources: ComponentSources
  onCopyFile?(file: { name: string; code: string }): void
  ref?: Ref<CodeViewHandle>
}) {
  const format = useFormat()
  const root = useRef<HTMLDivElement>(null)
  useImperativeHandle(ref, () => ({
    select(fileName) {
      const figures = [...(root.current?.querySelectorAll<HTMLElement>('[data-code-file]') ?? [])]
      const file = figures.find((figure) => figure.dataset.codeFile === fileName) ?? figures[0]
      const pre = file?.querySelector('pre')
      const selection = getSelection()
      if (!pre || !selection) return
      const range = document.createRange()
      range.selectNodeContents(pre)
      selection.removeAllRanges()
      selection.addRange(range)
    },
  }))
  return (
    <div ref={root} className="space-y-4">
      {FILES[format].map((key) => {
        const name = SOURCE_FILES[key]
        const lines = lineCount(sources[key])
        return (
          <figure
            key={name}
            data-code-file={name}
            className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800"
          >
            <figcaption className="flex h-10 items-center gap-3 border-b border-zinc-200 bg-zinc-50 pr-2 pl-4 dark:border-zinc-800 dark:bg-zinc-900/50">
              <span className="font-shell-mono text-[13px] text-zinc-900 dark:text-zinc-100">{name}</span>
              <span className="text-xs text-zinc-500 tabular-nums dark:text-zinc-400">
                {lines} {lines === 1 ? 'line' : 'lines'}
              </span>
              {onCopyFile && (
                <button
                  type="button"
                  aria-label={`Copy ${name}`}
                  title={`Copy ${name}`}
                  onClick={() => onCopyFile({ name, code: sources[key] })}
                  className="ml-auto inline-flex size-7 items-center justify-center rounded-md text-zinc-500 transition-colors duration-150 hover:bg-zinc-200/60 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-focus dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                >
                  <CopyIcon />
                </button>
              )}
            </figcaption>
            {/* Shiki's <pre> is focusable (tabindex=0) so keyboard users can scroll long files.
                Preflight gives <code> its own mono stack, so the inner <code> needs the shell font too. */}
            <div
              className="[&_pre]:max-h-[36rem] [&_pre]:overflow-auto [&_pre]:px-4 [&_pre]:py-3.5 [&_pre]:font-shell-mono [&_pre_code]:font-shell-mono [&_pre]:text-[13px]/[1.7] [&_pre]:[scrollbar-color:var(--color-zinc-300)_transparent] [&_pre]:[scrollbar-width:thin] [&_pre]:[tab-size:2] [&_pre]:focus-visible:outline-2 [&_pre]:focus-visible:-outline-offset-2 [&_pre]:focus-visible:outline-focus dark:[&_pre]:[scrollbar-color:var(--color-zinc-700)_transparent]"
              dangerouslySetInnerHTML={{ __html: highlighted[key] }}
            />
          </figure>
        )
      })}
    </div>
  )
}
