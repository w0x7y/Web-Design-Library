import { toast } from 'sonner'
import { trackEvent, type AnalyticsEvent } from './analytics'
import { copyText } from './clipboard'

export const COPY_REFUSED = "Couldn't copy"

export interface ToastOptions {
  description?: string
  action?: { label: string; onClick(): void }
}

/** The clipboard, notifications and analytics shared by text-copy actions. */
export interface TextCopyPorts {
  /** Resolves false when the browser refuses the write. */
  copyText(text: string): Promise<boolean>
  /** Shaped like Sonner's toast. */
  notify: {
    success(title: string, options?: ToastOptions): unknown
    error(title: string, options?: ToastOptions): unknown
  }
  /** Records an analytics event. Must not throw. */
  track(event: AnalyticsEvent): void
}

/** A refused write keeps the exact attempted text for manual copying. */
export interface CopyRefusal {
  status: 'refused'
  text: string
  label: string
}
export type CopyResult = { status: 'copied' } | { status: 'skipped' } | CopyRefusal

export const browserTextCopyPorts: TextCopyPorts = { copyText, notify: toast, track: trackEvent }

/** Copies text, toasts once and tracks success, unless its owner has been disposed. */
export async function copyTextAction(
  { text, label, message, event, isDisposed = () => false }: {
    text: string
    label: string
    message: string
    event: AnalyticsEvent
    isDisposed?: () => boolean
  },
  ports: TextCopyPorts = browserTextCopyPorts,
): Promise<CopyResult> {
  if (isDisposed()) return { status: 'skipped' }
  const copied = await ports.copyText(text)
  if (isDisposed()) return { status: 'skipped' }
  if (!copied) {
    ports.notify.error(COPY_REFUSED)
    return { status: 'refused', text, label }
  }
  ports.notify.success(message)
  ports.track(event)
  return { status: 'copied' }
}
