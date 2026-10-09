import { Component, Suspense, useCallback, useState, type CSSProperties, type ReactNode } from 'react'
import { PreviewSurface } from './PreviewSurface'

// Sections render on a 1280px-wide stage, scaled down to the frame, so they show
// their desktop layout. Breakpoints follow the real viewport, though, so on
// narrower screens the stage shrinks to the viewport width: a stacked mobile
// layout is shown at the width it was designed for, not stretched to 1280px.
// A section shorter than the frame is centred vertically, and the frame takes the
// section's own background (colour, gradient or image) so no white band shows.
// Elements render at natural size (up to the stage's inner width), centred, and
// shrink only when they would not fit with a 24px margin.
const STAGE_WIDTH = 1280
const ELEMENT_MAX_WIDTH = `calc(${STAGE_WIDTH}px - 2 * var(--stage-padding))` // --stage-padding: app/stage.css
const ELEMENT_MARGIN = 24

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

/** A live, non-interactive render of `children` that mounts when it first nears the viewport. */
export function LiveThumbnail({
  kind,
  fonts,
  className = '',
  children,
}: {
  kind: 'section' | 'element'
  fonts: string[]
  className?: string
  children: ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  const [frame, setFrame] = useState<(Size & { stage: number }) | null>(null)
  const [content, setContent] = useState<Size | null>(null)
  const [fill, setFill] = useState<CSSProperties | null>(null)

  const observeFrame = useCallback((el: HTMLDivElement) => {
    const visibility = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        setMounted(true)
        visibility.disconnect()
      },
      { rootMargin: '200px' },
    )
    const resize = new ResizeObserver(([entry]) =>
      setFrame({ ...boxSize(entry), stage: Math.min(STAGE_WIDTH, window.innerWidth) }),
    )
    visibility.observe(el)
    resize.observe(el)
    return () => {
      visibility.disconnect()
      resize.disconnect()
    }
  }, [])

  const observeContent = useCallback((el: HTMLDivElement) => {
    const resize = new ResizeObserver(([entry]) => {
      setContent(boxSize(entry))
      setFill(backgroundOf(el.firstElementChild))
    })
    resize.observe(el)
    return () => resize.disconnect()
  }, [])

  const ready = frame !== null && frame.width > 0 && content !== null && content.width > 0 && content.height > 0
  let scale = 1
  if (ready && kind === 'section') scale = frame.width / frame.stage
  if (ready && kind === 'element') {
    scale = Math.min(1, (frame.width - 2 * ELEMENT_MARGIN) / content.width, (frame.height - 2 * ELEMENT_MARGIN) / content.height)
  }

  // A section that ends above the frame's bottom edge: centre it and fill around it.
  const short = ready && kind === 'section' && content.height * scale < frame.height
  const offset = short ? (frame.height - content.height * scale) / 2 : 0

  return (
    <div
      ref={observeFrame}
      style={short && fill ? fill : undefined}
      inert
      aria-hidden="true"
      className={`relative aspect-[16/10] overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 ${className}`}
    >
      {mounted && (
        <ThumbnailBoundary>
          <Suspense>
            <div
              className={`absolute inset-0 transition-opacity duration-300 ease-out motion-reduce:transition-none ${ready ? 'opacity-100' : 'opacity-0'}`}
            >
              {kind === 'section' ? (
                <div
                  style={{
                    width: frame?.stage ?? STAGE_WIDTH,
                    height: ready ? (short ? content.height : frame.height / scale) : undefined,
                    transform: `translateY(${offset}px) scale(${scale})`,
                    transformOrigin: '0 0',
                  }}
                >
                  <PreviewSurface kind="section" fonts={fonts} mode="thumbnail">
                    <div ref={observeContent}>{children}</div>
                  </PreviewSurface>
                </div>
              ) : (
                <PreviewSurface kind="element" fonts={fonts} mode="thumbnail">
                  <div
                    ref={observeContent}
                    style={{ width: 'max-content', maxWidth: ELEMENT_MAX_WIDTH, transform: `scale(${scale})` }}
                  >
                    {children}
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
