import { track, type BeforeSend } from '@vercel/analytics'
import type { Format } from '../../src/library/types'
import type { CaptureViewport } from './capture'

// Custom events only record on Vercel Pro/Enterprise (at most 2 props each); on Hobby they are inert.
export type AnalyticsEvent =
  | { name: 'copy_code'; slug: string; format: Format }
  | { name: 'copy_ai'; slug: string; format: Format }
  | { name: 'download_png'; slug: string; viewport: CaptureViewport }
  | { name: 'copy_image'; slug: string }

/** Fire after the action succeeded. A blocked or failing tracker never affects the action itself. */
export function trackEvent({ name, ...props }: AnalyticsEvent): void {
  try {
    track(name, props)
  } catch {
    // Ad blockers and the like: nothing to do.
  }
}

/**
 * The preview pages load inside iframes (the detail page's preview, and every image capture), so
 * their page views would count as visits. Only the pages people actually navigate to are recorded.
 */
export const beforeSend: BeforeSend = (event) =>
  new URL(event.url, 'http://localhost').pathname.startsWith('/preview/') ? null : event
