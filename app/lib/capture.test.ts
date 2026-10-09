import { frameSize, pngFileName, withTimeout } from './capture'

test('pngFileName', () => {
  expect(pngFileName('hero-split-image', 'mobile')).toBe('web-library-hero-split-image-mobile.png')
  expect(pngFileName('buttons-minimal', 'desktop')).toBe('web-library-buttons-minimal-desktop.png')
})

describe('frameSize', () => {
  test('sections use the viewport height', () => {
    expect(frameSize('section', 'desktop')).toEqual({ width: 1440, height: 900 })
    expect(frameSize('section', 'mobile')).toEqual({ width: 390, height: 844 })
  })

  test('elements use the fixed element frame height', () => {
    expect(frameSize('element', 'desktop')).toEqual({ width: 1440, height: 480 })
    expect(frameSize('element', 'mobile')).toEqual({ width: 390, height: 480 })
  })
})

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
