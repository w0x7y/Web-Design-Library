import { useCallback, useEffect, useState } from 'react'
import { STAGE } from '~/lib/stage'
import { frameSize, previewBox, type ViewportId } from '~/lib/viewports'
import { previewPath } from '../../src/library/urls'

/**
 * The component's own page (/preview/<slug>) in an iframe at the viewport's real
 * width, so its breakpoints behave as on a device, then scaled down to fit:
 * s = min(1, containerWidth / viewport width), origin top-left.
 *
 * A component shorter than its frame would leave the rest showing the empty stage, so the visible box
 * is clipped to it (previewBox has the rule). Only the box is clipped: the iframe keeps the frame's
 * size, so the component's 100vh and media queries see a real device screen and clipping can't feed
 * back into layout.
 */
export function PreviewFrame({
  slug,
  name,
  kind,
  viewport,
}: {
  slug: string
  name: string
  kind: 'section' | 'element'
  viewport: ViewportId
}) {
  const { width, height } = frameSize(kind, viewport)
  const [containerWidth, setContainerWidth] = useState<number | null>(null)

  const measure = useCallback((el: HTMLDivElement) => {
    const observer = new ResizeObserver(([entry]) => {
      // 0 while the Preview tab is hidden: keep the last scale for when it comes back.
      if (entry.contentRect.width > 0) setContainerWidth(entry.contentRect.width)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const scale = containerWidth === null ? null : Math.min(1, containerWidth / width)

  // Height of the rendered component inside the iframe, measured from its capture root.
  const [contentHeight, setContentHeight] = useState<number | null>(null)
  const [frame, setFrame] = useState<HTMLIFrameElement | null>(null)

  useEffect(() => {
    if (!frame) return
    let observer: ResizeObserver | null = null
    const watch = () => {
      observer?.disconnect()
      const doc = frame.contentDocument
      const root = doc?.querySelector<HTMLElement>(STAGE.root)
      const View = doc?.defaultView
      if (!root || !View) return
      observer = new View.ResizeObserver(() => {
        const measured = Math.ceil(root.getBoundingClientRect().height)
        setContentHeight(measured > 0 ? measured : null)
      })
      observer.observe(root)
    }
    // The pre-rendered page may already be loaded by the time this runs.
    if (frame.contentDocument?.readyState === 'complete') watch()
    frame.addEventListener('load', watch)
    return () => {
      frame.removeEventListener('load', watch)
      observer?.disconnect()
    }
  }, [frame])

  const { height: visibleHeight, shift } = previewBox(kind, { width, height }, contentHeight)

  return (
    <div className="overflow-hidden rounded-xl bg-zinc-100/70 bg-[radial-gradient(var(--color-zinc-300)_0.75px,transparent_0.75px)] bg-size-[14px_14px] bg-center p-3 sm:p-6 dark:bg-zinc-900/60 dark:bg-[radial-gradient(var(--color-zinc-800)_0.75px,transparent_0.75px)]">
      <div ref={measure}>
        <div
          className="mx-auto overflow-hidden rounded-lg bg-white shadow-[0_1px_2px_rgb(0_0_0/0.05),0_8px_24px_-12px_rgb(0_0_0/0.12)] ring-1 ring-zinc-950/10 dark:shadow-none dark:ring-white/10"
          // Until measured (pre-rendered HTML), CSS gives the box the same size: min(container, width) wide, at the frame's aspect ratio.
          style={
            scale === null
              ? { width: `min(100%, ${width}px)`, aspectRatio: `${width} / ${height}` }
              : { width: width * scale, height: visibleHeight * scale }
          }
        >
          <iframe
            ref={setFrame}
            src={previewPath(slug)}
            title={`${name} preview`}
            width={width}
            height={height}
            className={`origin-top-left transition-opacity duration-200 ease-out motion-reduce:transition-none ${scale === null ? 'opacity-0' : 'opacity-100'}`}
            style={scale === null ? undefined : { transform: `scale(${scale}) translateY(${-shift}px)` }}
          />
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-4 text-xs text-zinc-500 sm:mt-4 dark:text-zinc-400">
        <p className="flex items-center gap-2 tabular-nums">
          <span>
            {width} × {height}
          </span>
          {scale !== null && scale < 1 && (
            <>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">
                ·
              </span>
              <span>
                <span className="sr-only">shown at </span>
                {Math.round(scale * 100)}%
              </span>
            </>
          )}
        </p>
        <a
          href={previewPath(slug)}
          target="_blank"
          rel="noreferrer"
          className="-mx-1 inline-flex items-center gap-1 rounded-sm px-1 font-medium text-zinc-600 transition-colors duration-150 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-focus dark:text-zinc-400 dark:hover:text-white"
        >
          Open in new tab
          <svg aria-hidden="true" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="size-3">
            <path d="M4.5 2.5h5v5M9.5 2.5l-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}
