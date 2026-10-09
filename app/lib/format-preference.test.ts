import { STORAGE_KEYS } from './storage'

// The store keeps module state, so each test loads a fresh copy against a fake browser.
async function freshStore({ stored = null, blocked = false }: { stored?: string | null; blocked?: boolean } = {}) {
  const values = new Map<string, string>(stored === null ? [] : [[STORAGE_KEYS.format, stored]])
  const storageListeners = new Set<(event: StorageEvent) => void>()
  vi.stubGlobal('localStorage', {
    getItem: (key: string) => {
      if (blocked) throw new Error('SecurityError')
      return values.get(key) ?? null
    },
    setItem: (key: string, value: string) => {
      if (blocked) throw new Error('SecurityError')
      values.set(key, value)
    },
  })
  vi.stubGlobal('addEventListener', (type: string, listener: (event: StorageEvent) => void) => type === 'storage' && storageListeners.add(listener))
  vi.stubGlobal('removeEventListener', (type: string, listener: (event: StorageEvent) => void) => type === 'storage' && storageListeners.delete(listener))
  vi.resetModules()
  const { formatStore } = await import('./format-preference')
  /** Another tab stores `value` (the browser fires a storage event only in the other tabs). */
  const otherTab = (value: string) => {
    values.set(STORAGE_KEYS.format, value)
    for (const listener of storageListeners) listener({ key: STORAGE_KEYS.format, newValue: value } as StorageEvent)
  }
  return { formatStore, values, otherTab, storageListeners }
}

afterEach(() => {
  vi.unstubAllGlobals()
})

test('starts from the stored format; anything but html reads as react', async () => {
  expect((await freshStore()).formatStore.get()).toBe('react')
  expect((await freshStore({ stored: 'html' })).formatStore.get()).toBe('html')
  expect((await freshStore({ stored: 'vue' })).formatStore.get()).toBe('react')
})

test('setting a format stores it and tells every subscriber', async () => {
  const { formatStore, values } = await freshStore()
  const listener = vi.fn()
  formatStore.subscribe(listener)
  formatStore.set('html')
  expect(formatStore.get()).toBe('html')
  expect(values.get(STORAGE_KEYS.format)).toBe('html')
  expect(listener).toHaveBeenCalledTimes(1)
})

test('follows a format picked in another tab while subscribed', async () => {
  const { formatStore, otherTab } = await freshStore()
  const listener = vi.fn()
  formatStore.subscribe(listener)
  otherTab('html')
  expect(formatStore.get()).toBe('html')
  expect(listener).toHaveBeenCalledTimes(1)
})

test('picks up a format another tab chose while nothing here was listening', async () => {
  const { formatStore, otherTab, storageListeners } = await freshStore()
  const unsubscribe = formatStore.subscribe(() => {})
  expect(formatStore.get()).toBe('react')
  unsubscribe() // e.g. this tab moves from a component page to browse
  expect(storageListeners.size).toBe(0)
  otherTab('html')
  formatStore.subscribe(() => {}) // back on a component page
  expect(formatStore.get()).toBe('html')
})

test('blocked storage: the default applies, and a choice lasts for the page', async () => {
  const { formatStore } = await freshStore({ blocked: true })
  expect(formatStore.get()).toBe('react')
  formatStore.set('html')
  expect(formatStore.get()).toBe('html')
})
