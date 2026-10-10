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

afterEach(() => {
  vi.unstubAllGlobals()
  vi.doUnmock('react')
})

test.each(['light', 'dark'] as const)('a manual %s theme survives a system change with storage blocked', async (choice) => {
  const classes = new Set<string>()
  const systemChanges = new Set<(event: { matches: boolean }) => void>()
  let unsubscribe = () => {}
  vi.stubGlobal('localStorage', {
    getItem: () => { throw new Error('SecurityError') },
    setItem: () => { throw new Error('SecurityError') },
  })
  vi.stubGlobal('document', {
    documentElement: {
      classList: {
        contains: (name: string) => classes.has(name),
        toggle: (name: string, force: boolean) => (force ? classes.add(name) : classes.delete(name)),
      },
    },
    head: { appendChild: () => {} },
    body: {},
    createElement: () => ({ textContent: '', remove: () => {} }),
  })
  vi.stubGlobal('getComputedStyle', () => ({ color: 'black' }))
  vi.stubGlobal('setTimeout', (callback: () => void) => callback())
  vi.stubGlobal('MutationObserver', class {
    observe() {}
    disconnect() {}
  })
  vi.stubGlobal('matchMedia', () => ({
    addEventListener: (_type: string, listener: (event: { matches: boolean }) => void) => systemChanges.add(listener),
    removeEventListener: (_type: string, listener: (event: { matches: boolean }) => void) => systemChanges.delete(listener),
  }))
  // Exercise the hook's store against a fake browser; React owns the rendering lifecycle.
  vi.doMock('react', () => ({
    useSyncExternalStore: (subscribe: (onChange: () => void) => () => void, getSnapshot: () => string) => {
      unsubscribe = subscribe(() => {})
      return getSnapshot()
    },
  }))
  vi.resetModules()
  const { useTheme } = await import('./theme')
  const { setTheme } = useTheme()
  try {
    setTheme(choice)
    expect(classes.has('dark')).toBe(choice === 'dark')
    for (const listener of systemChanges) listener({ matches: choice !== 'dark' })
    expect(classes.has('dark')).toBe(choice === 'dark')
  } finally {
    unsubscribe()
  }
})
