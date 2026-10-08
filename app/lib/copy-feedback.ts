import { toast } from 'sonner'
import { trackEvent, type AnalyticsEvent } from './analytics'
import { copyText } from './clipboard'

/**
 * Copies `text` and tells the visitor how it went. Success toasts `message` and records `event`;
 * a refused write toasts the manual-copy hint and calls `onFailure`, which should select the code.
 */
export async function copyWithFeedback(
  text: string,
  { message, event, onFailure }: { message: string; event: AnalyticsEvent; onFailure(): void },
): Promise<void> {
  if (await copyText(text)) {
    toast.success(message)
    trackEvent(event)
    return
  }
  toast.error("Couldn't copy", {
    description: 'Your browser blocked clipboard access. The code is selected below — press Ctrl/⌘+C.',
  })
  onFailure()
}
