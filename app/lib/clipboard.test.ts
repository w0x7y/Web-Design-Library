import { copyImage, copyText } from './clipboard'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('copyText', () => {
  test('resolves false without navigator.clipboard', async () => {
    vi.stubGlobal('navigator', {})
    expect(await copyText('x')).toBe(false)
  })

  test('resolves false when writeText rejects', async () => {
    vi.stubGlobal('navigator', { clipboard: { writeText: () => Promise.reject(new Error('denied')) } })
    expect(await copyText('x')).toBe(false)
  })

  test('resolves true on success and writes the text', async () => {
    const writeText = vi.fn(() => Promise.resolve())
    vi.stubGlobal('navigator', { clipboard: { writeText } })
    expect(await copyText('hello')).toBe(true)
    expect(writeText).toHaveBeenCalledWith('hello')
  })
})

describe('copyImage', () => {
  function stubClipboard(write: () => Promise<void> = () => Promise.resolve()) {
    const ClipboardItemSpy = vi.fn()
    const spy = vi.fn(write)
    vi.stubGlobal('ClipboardItem', ClipboardItemSpy)
    vi.stubGlobal('navigator', { clipboard: { write: spy } })
    return { ClipboardItemSpy, write: spy }
  }

  test('builds the ClipboardItem synchronously with the pending promise', () => {
    const { ClipboardItemSpy, write } = stubClipboard()
    const png = new Promise<Blob>(() => {})
    void copyImage(png)
    // Safari only allows the write inside the click's user activation, so nothing may be awaited first.
    expect(ClipboardItemSpy).toHaveBeenCalledWith({ 'image/png': png })
    expect(write).toHaveBeenCalledTimes(1)
  })

  test('resolves true once the clipboard accepts the item', async () => {
    stubClipboard()
    expect(await copyImage(Promise.resolve(new Blob()))).toBe(true)
  })

  test('resolves false when the clipboard write rejects', async () => {
    stubClipboard(() => Promise.reject(new Error('denied')))
    expect(await copyImage(Promise.resolve(new Blob()))).toBe(false)
  })

  test('resolves false when ClipboardItem is missing', async () => {
    vi.stubGlobal('navigator', { clipboard: { write: vi.fn() } })
    expect(await copyImage(Promise.resolve(new Blob()))).toBe(false)
  })

  test('resolves false without navigator.clipboard.write', async () => {
    vi.stubGlobal('ClipboardItem', vi.fn())
    vi.stubGlobal('navigator', {})
    expect(await copyImage(Promise.resolve(new Blob()))).toBe(false)
  })
})
