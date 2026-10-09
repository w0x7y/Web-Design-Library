import { readStored, STORAGE_KEYS, writeStored } from './storage'

afterEach(() => {
  vi.unstubAllGlobals()
})

test('reads and writes through localStorage', () => {
  const values = new Map<string, string>()
  vi.stubGlobal('localStorage', { getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => values.set(key, value) })
  expect(readStored(STORAGE_KEYS.format)).toBeNull()
  writeStored(STORAGE_KEYS.format, 'html')
  expect(readStored(STORAGE_KEYS.format)).toBe('html')
})

test('blocked storage never throws: reads are null and writes are dropped', () => {
  const blocked = () => {
    throw new Error('SecurityError')
  }
  vi.stubGlobal('localStorage', { getItem: blocked, setItem: blocked })
  expect(readStored(STORAGE_KEYS.theme)).toBeNull()
  expect(() => writeStored(STORAGE_KEYS.theme, 'dark')).not.toThrow()
})

test('the keys keep their wl: prefix, so visitors keep their stored choices', () => {
  expect(STORAGE_KEYS).toEqual({ theme: 'wl:theme', format: 'wl:format' })
})
