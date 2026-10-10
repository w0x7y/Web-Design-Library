import { readStored, STORAGE_KEYS, writeStored } from './storage'

function freshStorage() {
  const storage = { values: new Map<string, string>(), blocked: false, writesBlocked: false }
  vi.stubGlobal('localStorage', {
    getItem: (key: string) => {
      if (storage.blocked) throw new Error('SecurityError')
      return storage.values.get(key) ?? null
    },
    setItem: (key: string, value: string) => {
      if (storage.blocked) throw new Error('SecurityError')
      if (storage.writesBlocked) throw new Error('QuotaExceededError')
      storage.values.set(key, value)
    },
  })
  return storage
}

// The module remembers choices for the page, so each test starts by saving and then clearing every key.
beforeEach(() => {
  const storage = freshStorage()
  for (const key of Object.values(STORAGE_KEYS)) {
    writeStored(key, '')
    storage.values.delete(key)
    readStored(key)
  }
})

afterEach(() => {
  vi.unstubAllGlobals()
})

test('reads and writes through localStorage', () => {
  expect(readStored(STORAGE_KEYS.format)).toBeNull()
  writeStored(STORAGE_KEYS.format, 'html')
  expect(readStored(STORAGE_KEYS.format)).toBe('html')
})

test('blocked storage keeps written choices separately for each key', () => {
  const storage = freshStorage()
  storage.blocked = true
  expect(readStored(STORAGE_KEYS.theme)).toBeNull()
  writeStored(STORAGE_KEYS.theme, 'dark')
  writeStored(STORAGE_KEYS.format, 'html')
  expect(readStored(STORAGE_KEYS.theme)).toBe('dark')
  expect(readStored(STORAGE_KEYS.format)).toBe('html')
  writeStored(STORAGE_KEYS.theme, 'light')
  expect(readStored(STORAGE_KEYS.theme)).toBe('light')
  expect(readStored(STORAGE_KEYS.format)).toBe('html')
})

test('a successful read is remembered when storage becomes blocked', () => {
  const storage = freshStorage()
  storage.values.set(STORAGE_KEYS.theme, 'light')
  expect(readStored(STORAGE_KEYS.theme)).toBe('light')
  storage.blocked = true
  expect(readStored(STORAGE_KEYS.theme)).toBe('light')
})

test('a choice that could not be saved outlasts storage recovering', () => {
  const storage = freshStorage()
  storage.values.set(STORAGE_KEYS.format, 'react')
  storage.blocked = true
  writeStored(STORAGE_KEYS.format, 'html')
  expect(readStored(STORAGE_KEYS.format)).toBe('html')
  storage.blocked = false
  expect(readStored(STORAGE_KEYS.format)).toBe('html')
  writeStored(STORAGE_KEYS.format, 'react')
  expect(storage.values.get(STORAGE_KEYS.format)).toBe('react')
  storage.values.set(STORAGE_KEYS.format, 'html')
  expect(readStored(STORAGE_KEYS.format)).toBe('html')
})

test('a refused write wins over the older value storage can still read', () => {
  const storage = freshStorage()
  storage.values.set(STORAGE_KEYS.theme, 'light')
  storage.writesBlocked = true
  writeStored(STORAGE_KEYS.theme, 'dark')
  expect(readStored(STORAGE_KEYS.theme)).toBe('dark')
})

test('a successful null read clears the fallback', () => {
  const storage = freshStorage()
  writeStored(STORAGE_KEYS.theme, 'dark')
  storage.values.delete(STORAGE_KEYS.theme)
  expect(readStored(STORAGE_KEYS.theme)).toBeNull()
  storage.blocked = true
  expect(readStored(STORAGE_KEYS.theme)).toBeNull()
})

test('missing storage keeps choices without throwing', () => {
  vi.stubGlobal('localStorage', undefined)
  expect(readStored(STORAGE_KEYS.format)).toBeNull()
  writeStored(STORAGE_KEYS.format, 'html')
  expect(readStored(STORAGE_KEYS.format)).toBe('html')
})

test('the keys keep their wl: prefix, so visitors keep their stored choices', () => {
  expect(STORAGE_KEYS).toEqual({ theme: 'wl:theme', format: 'wl:format' })
})
