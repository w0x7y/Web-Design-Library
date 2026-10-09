import { withTimeout } from './capture'

describe('withTimeout', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  test('passes the result through and clears the timer', async () => {
    await expect(withTimeout(Promise.resolve('done'), 1000)).resolves.toBe('done')
    expect(vi.getTimerCount()).toBe(0)
  })

  test('passes the failure through and clears the timer', async () => {
    await expect(withTimeout(Promise.reject(new Error('boom')), 1000)).rejects.toThrow('boom')
    expect(vi.getTimerCount()).toBe(0)
  })

  test('rejects with "Capture timed out" when the work takes too long', async () => {
    const result = withTimeout(new Promise<never>(() => {}), 1000)
    const assertion = expect(result).rejects.toThrow('Capture timed out')
    await vi.advanceTimersByTimeAsync(1000)
    await assertion
  })
})
