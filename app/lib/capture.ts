import { domToBlob } from 'modern-screenshot'
import type { ComponentMeta } from '../../src/library/types'
import { previewPath } from '../../src/library/urls'
import { captureTargetSelector, readStage } from './stage'
import { CAPTURE_SCALE, frameSize, type CaptureViewport } from './viewports'

export interface CaptureOptions {
  viewport: CaptureViewport
  transparent: boolean
  signal: AbortSignal
}

const CAPTURE_TIMEOUT_MS = 10_000

const POLL_MS = 50

/** Rejects with "Capture timed out" if `work` has not settled after `ms`. */
function withTimeout<T>(work: Promise<T>, ms: number): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new Error('Capture timed out')), ms)
  })
  return Promise.race([work, timeout]).finally(() => clearTimeout(timer))
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/** Polls until `read` returns something truthy. Throws the signal's reason once it is aborted. */
async function until<T>(read: () => T | null | undefined | false, signal: AbortSignal): Promise<T> {
  for (;;) {
    signal.throwIfAborted()
    const value = read()
    if (value) return value
    await sleep(POLL_MS)
  }
}

function createFrame(meta: ComponentMeta, viewport: CaptureViewport) {
  const { width, height } = frameSize(meta.preview.kind, viewport)
  const frame = document.createElement('iframe')
  frame.setAttribute('data-capture-frame', '')
  frame.setAttribute('aria-hidden', 'true')
  frame.tabIndex = -1
  // A page taller than the frame would get a scrollbar that, where scrollbars take layout width, narrows the layout below the target width.
  frame.setAttribute('scrolling', 'no')
  frame.style.cssText = 'position:fixed;left:-100000px;top:0;border:0'
  frame.width = String(width)
  frame.height = String(height)
  frame.src = previewPath(meta.slug, { capture: true })
  return frame
}

async function render(frame: HTMLIFrameElement, meta: ComponentMeta, transparent: boolean, signal: AbortSignal) {
  const loaded = new Promise((resolve) => frame.addEventListener('load', resolve, { once: true }))
  document.body.append(frame)
  await loaded
  // An error page (the request failed) belongs to another origin, so its document can't be read.
  if (!frame.contentDocument) throw new Error('The preview page did not load')

  // The page reports ready once its pattern has rendered and settled, and freezes motion
  // (data-capture) once hydrated; a capture needs both. The document is read afresh on every poll, in
  // case the frame swaps documents while it loads.
  const backdrop = await until(() => {
    const stage = frame.contentDocument && readStage(frame.contentDocument)
    if (stage?.state === 'failed') throw new Error('The preview page failed to render')
    return stage?.state === 'ready' && stage.frozen ? stage.backdrop : null
  }, signal)
  const target = backdrop.ownerDocument.querySelector<HTMLElement>(captureTargetSelector(meta.preview.kind, transparent))!
  return domToBlob(target, {
    scale: CAPTURE_SCALE,
    backgroundColor: transparent ? null : '#ffffff',
    timeout: CAPTURE_TIMEOUT_MS,
    type: 'image/png',
    onCreateForeignObjectSvg: keepPlaceholderStyles(target),
  })
}

/**
 * modern-screenshot copies ::before and ::after into its image but not ::placeholder, and it inlines the
 * field's own -webkit-text-fill-color, which the placeholder inherits: an empty field would show its
 * placeholder in the field's text colour. This marks every field under `target` that has a placeholder
 * (the frame is thrown away after the capture) and returns a hook that gives the image a stylesheet
 * restoring each placeholder's computed colours and opacity.
 */
function keepPlaceholderStyles(target: HTMLElement): (svg: SVGSVGElement) => void {
  const view = target.ownerDocument.defaultView!
  const fields = target.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input[placeholder], textarea[placeholder]')
  const rules = [...fields].map((field, index) => {
    field.setAttribute('data-capture-placeholder', String(index))
    const style = view.getComputedStyle(field, '::placeholder')
    const fill = style.getPropertyValue('-webkit-text-fill-color')
    return `[data-capture-placeholder="${index}"]::placeholder { color: ${style.color}; -webkit-text-fill-color: ${fill}; opacity: ${style.opacity}; }`
  })
  return (svg) => {
    if (rules.length === 0) return
    const style = svg.ownerDocument.createElement('style')
    style.textContent = rules.join('\n')
    svg.prepend(style)
  }
}

/** Rejects with the signal's reason once it aborts. */
function aborted(signal: AbortSignal): Promise<never> {
  return new Promise((_, reject) => {
    if (signal.aborted) reject(signal.reason)
    else signal.addEventListener('abort', () => reject(signal.reason), { once: true })
  })
}

/**
 * Renders the component's own preview page (/preview/<slug>?capture=1) in a hidden iframe at the
 * target width and captures it as a PNG at CAPTURE_SCALE. Transparent mode drops the preview
 * page's padding and backdrop, keeping only the component (a section's own background stays).
 * Rejects after CAPTURE_TIMEOUT_MS, or as soon as `signal` aborts; the iframe is always removed.
 */
export async function captureComponent(
  meta: ComponentMeta,
  { viewport, transparent, signal }: CaptureOptions,
): Promise<Blob> {
  signal.throwIfAborted()
  const abort = new AbortController()
  const stop = () => abort.abort(signal.reason)
  signal.addEventListener('abort', stop, { once: true })
  const frame = createFrame(meta, viewport)
  try {
    // Loading the frame and taking the screenshot don't watch the signal themselves, so race them against it.
    const work = Promise.race([render(frame, meta, transparent, abort.signal), aborted(abort.signal)])
    return await withTimeout(work, CAPTURE_TIMEOUT_MS)
  } finally {
    signal.removeEventListener('abort', stop)
    abort.abort()
    frame.remove()
  }
}
