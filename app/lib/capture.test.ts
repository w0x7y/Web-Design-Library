import { domToBlob } from 'modern-screenshot'
import type { ComponentMeta } from '../../src/library/types'
import { captureComponent } from './capture'

vi.mock('modern-screenshot', () => ({ domToBlob: vi.fn() }))

const meta: ComponentMeta = {
  slug: 'demo-card',
  name: 'Demo card',
  category: 'buttons',
  tags: [],
  description: 'A card for the tests.',
  preview: { kind: 'section' },
  fonts: [],
  brief: { layout: 'Layout.', style: 'Style.', states: 'States.', responsive: 'Responsive.' },
  addedAt: '2026-10-08',
}
const PNG = new Blob(['png'], { type: 'image/png' })

// Only the DOM and screenshot dependency are faked: loading, polling, timeout and cleanup run through captureComponent.
function setup() {
  const frames = new Set<EventTarget>()
  let state = 'loading'
  const target = { ownerDocument: { defaultView: {} }, querySelectorAll: () => [] }
  const backdrop = {
    getAttribute: () => state,
    hasAttribute: () => true,
    ownerDocument: { querySelector: () => target },
  }
  const doc = { querySelector: () => backdrop }
  vi.stubGlobal('document', {
    createElement: () => {
      const frame = Object.assign(new EventTarget(), {
        style: { cssText: '' },
        contentDocument: doc,
        setAttribute: () => {},
        remove: () => frames.delete(frame),
      })
      return frame
    },
    body: {
      append: (frame: EventTarget) => {
        frames.add(frame)
        frame.dispatchEvent(new Event('load'))
      },
    },
  })
  vi.mocked(domToBlob).mockResolvedValue(PNG)
  const capture = () => captureComponent(meta, { viewport: 'desktop', transparent: false, signal: new AbortController().signal })
  return { capture, frames, setState: (next: string) => { state = next } }
}

beforeEach(() => vi.useFakeTimers())
afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
  vi.clearAllMocks()
})

test('a loaded frame that never becomes ready times out, is removed, and can be retried', async () => {
  const { capture, frames, setState } = setup()
  const done = capture()
  const timedOut = expect(done).rejects.toThrow('Capture timed out')
  await vi.advanceTimersByTimeAsync(9_999)
  expect(frames.size).toBe(1)
  await vi.advanceTimersByTimeAsync(1)
  await timedOut
  expect(frames.size).toBe(0)
  // The final polling sleep unwinds after the timeout aborts the work.
  await vi.advanceTimersByTimeAsync(50)
  expect(vi.getTimerCount()).toBe(0)

  setState('ready')
  await expect(capture()).resolves.toBe(PNG)
  expect(frames.size).toBe(0)
  expect(vi.getTimerCount()).toBe(0)
})

test('a failed screenshot removes the frame and clears the timeout', async () => {
  const { capture, frames, setState } = setup()
  setState('ready')
  vi.mocked(domToBlob).mockRejectedValue(new Error('Screenshot failed'))
  await expect(capture()).rejects.toThrow('Screenshot failed')
  expect(frames.size).toBe(0)
  expect(vi.getTimerCount()).toBe(0)
})
