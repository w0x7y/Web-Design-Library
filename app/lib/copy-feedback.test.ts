import { toast } from 'sonner'
import { trackEvent } from './analytics'
import { copyText } from './clipboard'
import { copyWithFeedback } from './copy-feedback'

vi.mock('sonner', () => ({ toast: { success: vi.fn(), error: vi.fn() } }))
vi.mock('./clipboard', () => ({ copyText: vi.fn() }))
vi.mock('./analytics', () => ({ trackEvent: vi.fn() }))

const event = { name: 'copy_code', slug: 'demo', format: 'react' } as const

beforeEach(() => {
  vi.clearAllMocks()
})

test('on success: copies the text, toasts the message and tracks the event', async () => {
  vi.mocked(copyText).mockResolvedValue(true)
  const onFailure = vi.fn()
  await copyWithFeedback('code', { message: 'Copied React code', event, onFailure })
  expect(copyText).toHaveBeenCalledWith('code')
  expect(toast.success).toHaveBeenCalledWith('Copied React code')
  expect(trackEvent).toHaveBeenCalledWith(event)
  expect(toast.error).not.toHaveBeenCalled()
  expect(onFailure).not.toHaveBeenCalled()
})

test('on failure: toasts the manual-copy hint, tracks nothing and lets the caller select the code', async () => {
  vi.mocked(copyText).mockResolvedValue(false)
  const onFailure = vi.fn()
  await copyWithFeedback('code', { message: 'Copied React code', event, onFailure })
  expect(toast.error).toHaveBeenCalledWith("Couldn't copy", {
    description: 'Your browser blocked clipboard access. The code is selected below — press Ctrl/⌘+C.',
  })
  expect(onFailure).toHaveBeenCalledTimes(1)
  expect(toast.success).not.toHaveBeenCalled()
  expect(trackEvent).not.toHaveBeenCalled()
})
