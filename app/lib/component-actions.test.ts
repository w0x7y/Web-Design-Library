import { buildBrief, codeForFormat } from '../../src/library/brief'
import type { ComponentMeta, ComponentSources, Format } from '../../src/library/types'
import { browserPorts, createComponentActions, type ActionPorts, type ComponentActions, type ToastOptions } from './component-actions'

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
const sources: ComponentSources = {
  tsx: 'export default function Demo() {}\n',
  html: '<div class="demo"></div>\n',
  css: '.demo { color: red; }\n',
}
const PNG = new Blob(['png'], { type: 'image/png' })

const CODE_HINT = 'Your browser blocked clipboard access. The code is selected below — press Ctrl/⌘+C.'
const IMAGE_HINT = 'Your browser blocked clipboard access. Use Download to save the PNG instead.'
const RETRY = { label: 'Retry', onClick: expect.any(Function) }

function deferred<T>() {
  let resolve!: (value: T) => void
  let reject!: (reason: unknown) => void
  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })
  return { promise, resolve, reject }
}

type Toast = { type: 'success' | 'error'; title: string } & ToastOptions

/**
 * Fake ports. Every capture is a deferred the test settles through `pngs`; the clipboard accepts
 * an image once its capture resolves (and refuses it if the capture rejects), like a browser that
 * grants clipboard access. Toasts are recorded in order.
 */
function setup() {
  const pngs: ReturnType<typeof deferred<Blob>>[] = []
  const toasts: Toast[] = []
  const ports = {
    copyText: vi.fn<ActionPorts['copyText']>(() => Promise.resolve(true)),
    copyImage: vi.fn<ActionPorts['copyImage']>((png) => png.then(() => true, () => false)),
    capture: vi.fn<ActionPorts['capture']>(() => {
      const png = deferred<Blob>()
      pngs.push(png)
      return png.promise
    }),
    save: vi.fn<ActionPorts['save']>(),
    notify: {
      success: (title: string, options?: ToastOptions) => void toasts.push({ type: 'success', title, ...options }),
      error: (title: string, options?: ToastOptions) => void toasts.push({ type: 'error', title, ...options }),
    },
    track: vi.fn<ActionPorts['track']>(),
  } satisfies ActionPorts
  const actions = createComponentActions(meta, sources, ports)
  const captureOptions = (call: number) => ports.capture.mock.calls[call][1]
  const retry = (toast: number) => toasts[toast].action!.onClick()
  return { actions, ports, pngs, toasts, captureOptions, retry }
}

/** Lets every pending promise chain run to the end. */
const settle = () => vi.runAllTimersAsync()

beforeEach(() => {
  vi.useFakeTimers()
})
afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

describe('copying text', () => {
  test.each(['react', 'html'] as const)('Copy code (%s) copies the code, says so and records copy_code', async (format) => {
    const { actions, ports, toasts } = setup()
    const onRefused = vi.fn()
    await actions.copyCode(format, onRefused)
    expect(ports.copyText.mock.calls).toEqual([[codeForFormat(meta, sources, format)]])
    expect(toasts).toEqual([{ type: 'success', title: { react: 'Copied React code', html: 'Copied HTML + CSS' }[format] }])
    expect(ports.track.mock.calls).toEqual([[{ name: 'copy_code', slug: 'demo-card', format }]])
    expect(onRefused).not.toHaveBeenCalled()
  })

  test.each(['react', 'html'] as const)('Copy for AI (%s) copies the brief, says so and records copy_ai', async (format) => {
    const { actions, ports, toasts } = setup()
    await actions.copyBrief(format, vi.fn())
    expect(ports.copyText.mock.calls).toEqual([[buildBrief(meta, sources, format)]])
    expect(toasts).toEqual([{ type: 'success', title: 'Copied AI brief' }])
    expect(ports.track.mock.calls).toEqual([[{ name: 'copy_ai', slug: 'demo-card', format }]])
  })

  test('a file copy names the file, except Component.tsx, which is the whole React code', async () => {
    const { actions, ports, toasts } = setup()
    await actions.copyFile('react', { name: 'Component.tsx', code: sources.tsx }, vi.fn())
    await actions.copyFile('html', { name: 'styles.css', code: sources.css }, vi.fn())
    expect(ports.copyText.mock.calls).toEqual([[sources.tsx], [sources.css]])
    expect(toasts).toEqual([
      { type: 'success', title: 'Copied React code' },
      { type: 'success', title: 'Copied styles.css' },
    ])
    expect(ports.track.mock.calls).toEqual([
      [{ name: 'copy_code', slug: 'demo-card', format: 'react' }],
      [{ name: 'copy_code', slug: 'demo-card', format: 'html' }],
    ])
  })

  test.each<[string, (actions: ComponentActions, onRefused: () => void) => Promise<void>]>([
    ['Copy code', (actions, onRefused) => actions.copyCode('react', onRefused)],
    ['Copy for AI', (actions, onRefused) => actions.copyBrief('html', onRefused)],
    ['file copy', (actions, onRefused) => actions.copyFile('html', { name: 'index.html', code: sources.html }, onRefused)],
  ])('a refused %s shows the manual-copy hint, lets the page select the code, and records nothing', async (_, run) => {
    const { actions, ports, toasts } = setup()
    ports.copyText.mockResolvedValue(false)
    const onRefused = vi.fn()
    await run(actions, onRefused)
    expect(toasts).toEqual([{ type: 'error', title: "Couldn't copy", description: CODE_HINT }])
    expect(onRefused).toHaveBeenCalledTimes(1)
    expect(ports.track).not.toHaveBeenCalled()
  })

  test('copying text works while a capture runs', async () => {
    const { actions, toasts } = setup()
    void actions.download('desktop', false)
    await actions.copyCode('react', vi.fn())
    expect(toasts).toEqual([{ type: 'success', title: 'Copied React code' }])
  })
})

describe('Download', () => {
  test('captures at the chosen size, saves the PNG under its file name, says so and records download_png', async () => {
    const { actions, ports, pngs, toasts, captureOptions } = setup()
    const done = actions.download('mobile', true)
    expect(ports.capture.mock.calls[0][0]).toBe(meta)
    expect(captureOptions(0)).toEqual({ viewport: 'mobile', transparent: true, signal: expect.any(AbortSignal) })
    pngs[0].resolve(PNG)
    await done
    expect(ports.save.mock.calls).toEqual([[PNG, 'web-library-demo-card-mobile.png']])
    expect(toasts).toEqual([{ type: 'success', title: 'Downloaded web-library-demo-card-mobile.png' }])
    expect(ports.track.mock.calls).toEqual([[{ name: 'download_png', slug: 'demo-card', viewport: 'mobile' }]])
  })

  test('a failed capture offers Retry, which reruns the same capture', async () => {
    const { actions, ports, pngs, toasts, captureOptions, retry } = setup()
    const done = actions.download('desktop', true)
    pngs[0].reject(new Error('Capture timed out'))
    await done
    expect(toasts).toEqual([{ type: 'error', title: "Couldn't create image", action: RETRY }])
    expect(ports.save).not.toHaveBeenCalled()
    expect(ports.track).not.toHaveBeenCalled()
    expect(actions.isBusy()).toBe(false)

    retry(0)
    expect(captureOptions(1)).toMatchObject({ viewport: 'desktop', transparent: true })
    pngs[1].resolve(PNG)
    await settle()
    expect(ports.save.mock.calls).toEqual([[PNG, 'web-library-demo-card-desktop.png']])
    expect(toasts.slice(1)).toEqual([{ type: 'success', title: 'Downloaded web-library-demo-card-desktop.png' }])
  })

  test('a save that throws ends in an error toast with Retry, not an unhandled rejection', async () => {
    const { actions, ports, pngs, toasts } = setup()
    ports.save.mockImplementation(() => {
      throw new Error('Out of memory')
    })
    const done = actions.download('desktop', false)
    pngs[0].resolve(PNG)
    await expect(done).resolves.toBeUndefined()
    expect(toasts).toEqual([{ type: 'error', title: "Couldn't download web-library-demo-card-desktop.png", action: RETRY }])
    expect(ports.track).not.toHaveBeenCalled()
    expect(actions.isBusy()).toBe(false)
  })
})

describe('Copy image', () => {
  test('calls the copyImage port before any await, with the pending capture, as Safari requires', async () => {
    const { actions, ports, pngs } = setup()
    void actions.copyImage(false)
    // Safari only accepts the write if the ClipboardItem is built inside the click, so nothing may be awaited first.
    expect(ports.capture).toHaveBeenCalledTimes(1)
    expect(ports.copyImage).toHaveBeenCalledTimes(1)
    pngs[0].resolve(PNG)
    await expect(ports.copyImage.mock.calls[0][0]).resolves.toBe(PNG)
  })

  test('captures the desktop size and, once the clipboard takes it, says so and records copy_image', async () => {
    const { actions, ports, pngs, toasts, captureOptions } = setup()
    const done = actions.copyImage(true)
    expect(captureOptions(0)).toEqual({ viewport: 'desktop', transparent: true, signal: expect.any(AbortSignal) })
    pngs[0].resolve(PNG)
    await done
    expect(toasts).toEqual([{ type: 'success', title: 'Copied image' }])
    expect(ports.track.mock.calls).toEqual([[{ name: 'copy_image', slug: 'demo-card' }]])
  })

  test('a failed capture offers Retry, not the clipboard hint, and Retry copies the image within its own click', async () => {
    const { actions, ports, pngs, toasts, captureOptions, retry } = setup()
    const done = actions.copyImage(true)
    pngs[0].reject(new Error('The preview page failed to render'))
    await done
    expect(toasts).toEqual([{ type: 'error', title: "Couldn't create image", action: RETRY }])
    expect(ports.track).not.toHaveBeenCalled()

    retry(0)
    expect(ports.copyImage).toHaveBeenCalledTimes(2) // synchronously, inside the Retry click
    expect(captureOptions(1)).toMatchObject({ viewport: 'desktop', transparent: true })
    pngs[1].resolve(PNG)
    await settle()
    expect(toasts.slice(1)).toEqual([{ type: 'success', title: 'Copied image' }])
    expect(ports.track.mock.calls).toEqual([[{ name: 'copy_image', slug: 'demo-card' }]])
  })

  test('a clipboard refusal after a good capture points to Download and records nothing', async () => {
    const { actions, ports, pngs, toasts } = setup()
    ports.copyImage.mockImplementation((png) => png.then(() => false))
    const done = actions.copyImage(false)
    pngs[0].resolve(PNG)
    await done
    expect(toasts).toEqual([{ type: 'error', title: "Couldn't copy", description: IMAGE_HINT }])
    expect(ports.track).not.toHaveBeenCalled()
  })
})

describe('one capture at a time', () => {
  test('busy from the click until the capture settles; subscribers hear both changes', async () => {
    const { actions, pngs } = setup()
    const listener = vi.fn()
    const unsubscribe = actions.subscribe(listener)
    expect(actions.isBusy()).toBe(false)
    const done = actions.download('desktop', false)
    expect(actions.isBusy()).toBe(true)
    expect(listener).toHaveBeenCalledTimes(1)
    pngs[0].resolve(PNG)
    await done
    expect(actions.isBusy()).toBe(false)
    expect(listener).toHaveBeenCalledTimes(2)

    unsubscribe()
    void actions.download('desktop', false)
    expect(listener).toHaveBeenCalledTimes(2)
  })

  test('Download and Copy image do nothing while a capture runs', async () => {
    const { actions, ports, pngs, toasts } = setup()
    const done = actions.download('desktop', false)
    await actions.download('mobile', false)
    await actions.copyImage(false)
    expect(ports.capture).toHaveBeenCalledTimes(1)
    expect(ports.copyImage).not.toHaveBeenCalled()
    pngs[0].resolve(PNG)
    await done
    expect(toasts).toHaveLength(1)

    void actions.download('mobile', false)
    expect(ports.capture).toHaveBeenCalledTimes(2)
  })

  test('Retry from an earlier toast is ignored while another capture runs, and leaves it busy', async () => {
    const { actions, ports, pngs, retry } = setup()
    const failedDownload = actions.download('desktop', false)
    pngs[0].reject(new Error('boom'))
    await failedDownload
    const failedCopy = actions.copyImage(false)
    pngs[1].reject(new Error('boom'))
    await failedCopy

    retry(0) // reruns the download
    retry(1) // ignored: the download is still running
    expect(ports.capture).toHaveBeenCalledTimes(3)
    expect(ports.copyImage).toHaveBeenCalledTimes(1)
    await settle()
    expect(actions.isBusy()).toBe(true)

    pngs[2].resolve(PNG)
    await settle()
    expect(actions.isBusy()).toBe(false)
    expect(ports.save).toHaveBeenCalledTimes(1)
  })

  test.each([
    ['the clipboard refuses', 'capture', "Couldn't copy"],
    ['the capture finishes', 'clipboard', 'Copied image'],
  ] as const)('Copy image stays busy until both have settled when %s first', async (_, last, title) => {
    const { actions, ports, pngs, toasts } = setup()
    const clipboard = deferred<boolean>()
    ports.copyImage.mockReturnValue(clipboard.promise)
    const done = actions.copyImage(false)
    if (last === 'capture') clipboard.resolve(false)
    else pngs[0].resolve(PNG)
    await settle()
    expect(actions.isBusy()).toBe(true)
    expect(toasts).toEqual([])
    await actions.download('desktop', false)
    expect(ports.capture).toHaveBeenCalledTimes(1)

    if (last === 'capture') pngs[0].resolve(PNG)
    else clipboard.resolve(true)
    await done
    expect(actions.isBusy()).toBe(false)
    expect(toasts.map((toast) => toast.title)).toEqual([title])
  })
})

describe('dispose', () => {
  test.each(['download', 'copyImage'] as const)('aborts a running %s and drops its outcome, even if the capture finishes', async (action) => {
    const { actions, ports, pngs, toasts, captureOptions } = setup()
    const done = action === 'download' ? actions.download('desktop', false) : actions.copyImage(false)
    actions.dispose()
    expect(captureOptions(0).signal.aborted).toBe(true)
    pngs[0].resolve(PNG)
    await done
    expect(ports.save).not.toHaveBeenCalled()
    expect(toasts).toEqual([])
    expect(ports.track).not.toHaveBeenCalled()
  })

  test('a capture that rejects on abort shows no error', async () => {
    const { actions, pngs, toasts } = setup()
    const done = actions.download('desktop', false)
    actions.dispose()
    pngs[0].reject(new DOMException('The operation was aborted.', 'AbortError'))
    await done
    expect(toasts).toEqual([])
  })

  test('a text copy that finishes after dispose stays silent', async () => {
    const { actions, ports, toasts } = setup()
    const copied = deferred<boolean>()
    ports.copyText.mockReturnValue(copied.promise)
    const onRefused = vi.fn()
    const done = actions.copyCode('react', onRefused)
    actions.dispose()
    copied.resolve(false)
    await done
    expect(toasts).toEqual([])
    expect(onRefused).not.toHaveBeenCalled()
  })

  test('after dispose every action does nothing, Retry from an earlier toast included', async () => {
    const { actions, ports, pngs, toasts, retry } = setup()
    const failed = actions.download('desktop', false)
    pngs[0].reject(new Error('boom'))
    await failed
    actions.dispose()

    retry(0)
    const format: Format = 'react'
    await actions.download('mobile', false)
    await actions.copyImage(false)
    await actions.copyCode(format, vi.fn())
    await actions.copyBrief(format, vi.fn())
    await actions.copyFile(format, { name: 'Component.tsx', code: sources.tsx }, vi.fn())
    expect(ports.capture).toHaveBeenCalledTimes(1)
    expect(ports.copyImage).not.toHaveBeenCalled()
    expect(ports.copyText).not.toHaveBeenCalled()
    expect(toasts).toHaveLength(1)
    expect(actions.isBusy()).toBe(false)
  })
})

describe('the browser save port', () => {
  test('downloads the PNG under its file name and releases the object URL 10 s later', () => {
    const link = { href: '', download: '', click: vi.fn() }
    vi.stubGlobal('document', { createElement: vi.fn(() => link) })
    vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:demo')
    const revoke = vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {})
    browserPorts.save(PNG, 'web-library-demo-card-desktop.png')
    expect(document.createElement).toHaveBeenCalledWith('a')
    expect(link).toMatchObject({ href: 'blob:demo', download: 'web-library-demo-card-desktop.png' })
    expect(link.click).toHaveBeenCalledTimes(1)
    // Revoking at once can cancel the download in some browsers.
    vi.advanceTimersByTime(9_999)
    expect(revoke).not.toHaveBeenCalled()
    vi.advanceTimersByTime(1)
    expect(revoke).toHaveBeenCalledWith('blob:demo')
  })
})
