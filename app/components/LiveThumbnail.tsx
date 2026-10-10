import { Component, Suspense, useCallback, useState, type CSSProperties, type ReactNode } from 'react'
import { preloadComponent } from '../../src/library/registry'
import type { ComponentMeta } from '../../src/library/types'
import { THUMBNAIL_ELEMENT_MAX_WIDTH, THUMBNAIL_STAGE_WIDTH, thumbnailFit, thumbnailStageWidth } from '~/lib/viewports'
import { LibraryComponent } from './LibraryComponent'
import { PreviewSurface } from './PreviewSurface'

// Sections render on a desktop-width stage scaled down to the frame; elements at their natural size,
// centred. thumbnailFit has the rules. A short section's frame takes the section's own background
// (colour, gradient or image) so no white band shows, and a thin one sits above a sketch of a page.

// A thumbnail starts loading this far outside the viewport (a screen's height either way), so it has
// rendered by the time it scrolls into view.
const LOAD_MARGIN = '100% 0px'

interface Size {
  width: number
  height: number
}

function boxSize(entry: ResizeObserverEntry): Size {
  return { width: entry.contentRect.width, height: entry.contentRect.height }
}

/** How the element paints its background (colour and any gradient or image), or null when it paints none. */
function backgroundOf(el: Element | null): CSSProperties | null {
  if (!el) return null
  const style = getComputedStyle(el)
  const image = style.backgroundImage
  const color = style.backgroundColor
  const clear = color === 'transparent' || /^rgba\(.*,\s*0\)$/.test(color) || /\/\s*0\s*\)$/.test(color)
  if (image === 'none' && clear) return null
  return { backgroundColor: clear ? undefined : color, backgroundImage: image === 'none' ? undefined : image, backgroundSize: 'cover', backgroundPosition: 'center' }
}

/** A live, non-interactive render of the library component `meta`, mounted once its code has loaded as it nears the viewport. */
export function LiveThumbnail({ meta, className = '' }: { meta: ComponentMeta; className?: string }) {
  const { slug } = meta
  const { kind } = meta.preview
  const [mounted, setMounted] = useState(false)
  const [frame, setFrame] = useState<(Size & { stage: number }) | null>(null)
  const [content, setContent] = useState<Size | null>(null)
  const [fill, setFill] = useState<CSSProperties | null>(null)

  const observeFrame = useCallback((el: HTMLDivElement) => {
    const visibility = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        visibility.disconnect()
        // Load the code before mounting, so the render never suspends.
        // React holds back revealing a suspended thumbnail while others keep suspending, so during a
        // scroll none would appear until the scrolling stopped. A failed load still mounts, and the
        // boundary below catches it.
        preloadComponent(slug)
          .catch(() => {})
          .finally(() => setMounted(true))
      },
      { rootMargin: LOAD_MARGIN },
    )
    const resize = new ResizeObserver(([entry]) =>
      setFrame({ ...boxSize(entry), stage: thumbnailStageWidth(window.innerWidth) }),
    )
    visibility.observe(el)
    resize.observe(el)
    return () => {
      visibility.disconnect()
      resize.disconnect()
    }
  }, [slug])

  const observeContent = useCallback((el: HTMLDivElement) => {
    const resize = new ResizeObserver(([entry]) => {
      setContent(boxSize(entry))
      setFill(backgroundOf(el.firstElementChild))
    })
    resize.observe(el)
    return () => resize.disconnect()
  }, [])

  const ready = frame !== null && frame.width > 0 && content !== null && content.width > 0 && content.height > 0
  const { scale, offset, short, thin } = ready ? thumbnailFit(kind, frame, content) : { scale: 1, offset: 0, short: false, thin: false }

  return (
    <div
      ref={observeFrame}
      style={short && fill ? fill : undefined}
      inert
      aria-hidden="true"
      // Until the component has rendered, the frame is a quiet placeholder in the site's theme, not a white flash.
      // Content visibility skips thumbnails off screen. The frame's size never depends on its
      // content, so skipping it moves nothing.
      className={`relative aspect-[16/10] overflow-hidden [content-visibility:auto] rounded-lg border border-zinc-200 dark:border-zinc-800 ${ready ? 'bg-white' : 'bg-zinc-100 dark:bg-zinc-900'} ${className}`}
    >
      {mounted && (
        <ThumbnailBoundary>
          <Suspense>
            <div
              className={`absolute inset-0 transition-opacity duration-300 ease-out motion-reduce:transition-none ${ready ? 'opacity-100' : 'opacity-0'}`}
            >
              {ready && thin && <PageSketch top={content.height * scale} />}
              {kind === 'section' ? (
                <div
                  style={{
                    width: frame?.stage ?? THUMBNAIL_STAGE_WIDTH,
                    height: ready ? (short ? content.height : frame.height / scale) : undefined,
                    transform: `translateY(${offset}px) scale(${scale})`,
                    transformOrigin: '0 0',
                  }}
                >
                  <PreviewSurface kind="section" mode="thumbnail">
                    <div ref={observeContent}><LibraryComponent slug={meta.slug} /></div>
                  </PreviewSurface>
                </div>
              ) : (
                <PreviewSurface kind="element" mode="thumbnail">
                  <div
                    ref={observeContent}
                    style={{ width: 'max-content', maxWidth: THUMBNAIL_ELEMENT_MAX_WIDTH, transform: `scale(${scale})` }}
                  >
                    <LibraryComponent slug={meta.slug} />
                  </div>
                </PreviewSurface>
              )}
            </div>
          </Suspense>
        </ThumbnailBoundary>
      )}
    </div>
  )
}

/** Grey blocks in the shape of a hero, below a thin section: they read on light and dark fills alike. */
function PageSketch({ top }: { top: number }) {
  const block = 'rounded-[3px] bg-zinc-500/15'
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-center gap-[6%] px-[8%]" style={{ top }}>
      <div className="flex flex-1 flex-col gap-2">
        <div className={`${block} h-3 w-[90%]`} />
        <div className={`${block} h-3 w-[65%]`} />
        <div className={`${block} mt-1 h-1.5 w-full`} />
        <div className={`${block} h-1.5 w-[80%]`} />
        <div className="mt-2 flex gap-1.5">
          <div className={`${block} h-4 w-12 rounded-full`} />
          <div className={`${block} h-4 w-12 rounded-full`} />
        </div>
      </div>
      <div className={`${block} aspect-[4/3] flex-1 rounded-md`} />
    </div>
  )
}

// A thumbnail that fails to load (e.g. a stale chunk after a deploy) leaves an
// empty frame instead of taking the whole page down with it.
class ThumbnailBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    return this.state.failed ? null : this.props.children
  }
}
