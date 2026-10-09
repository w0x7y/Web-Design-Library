import { runInNewContext } from 'node:vm'
import { THEME_STORAGE_KEY, themeInitScript } from './theme'

// Runs the inline <head> script against a fake browser and reports whether it set .dark.
function runInit({ stored, systemDark, storageThrows = false }: { stored: string | null; systemDark: boolean; storageThrows?: boolean }) {
  const classes = new Set<string>()
  const keysRead: string[] = []
  runInNewContext(themeInitScript, {
    localStorage: {
      getItem(key: string) {
        if (storageThrows) throw new Error('SecurityError')
        keysRead.push(key)
        return stored
      },
    },
    matchMedia: (query: string) => ({ matches: systemDark && query === '(prefers-color-scheme: dark)' }),
    document: {
      documentElement: {
        classList: {
          toggle: (name: string, force: boolean) => (force ? classes.add(name) : classes.delete(name)),
        },
      },
    },
  })
  return { dark: classes.has('dark'), keysRead }
}

test('a stored theme wins over the system preference', () => {
  expect(runInit({ stored: 'dark', systemDark: false })).toEqual({ dark: true, keysRead: [THEME_STORAGE_KEY] })
  expect(runInit({ stored: 'light', systemDark: true }).dark).toBe(false)
})

test('without a valid stored theme the system preference applies', () => {
  expect(runInit({ stored: null, systemDark: true }).dark).toBe(true)
  expect(runInit({ stored: null, systemDark: false }).dark).toBe(false)
  expect(runInit({ stored: 'sepia', systemDark: true }).dark).toBe(true)
})

test('blocked storage falls back to the system preference', () => {
  expect(runInit({ stored: 'light', systemDark: true, storageThrows: true }).dark).toBe(true)
})

test('the storage key is wl:theme', () => {
  expect(THEME_STORAGE_KEY).toBe('wl:theme')
})
