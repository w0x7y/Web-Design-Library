import { useSyncExternalStore } from 'react'
import { readStored, STORAGE_KEYS, writeStored } from './storage'

// Site theme: `.dark` on <html>. A stored choice wins; otherwise the system preference.

export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = STORAGE_KEYS.theme

const DARK_QUERY = '(prefers-color-scheme: dark)'

/** Inlined as the first child of <head> so the right theme paints first, before any CSS or React. */
export const themeInitScript = `(function () {
  var theme = null
  try { theme = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)}) } catch (error) {}
  if (theme !== 'light' && theme !== 'dark') theme = matchMedia(${JSON.stringify(DARK_QUERY)}).matches ? 'dark' : 'light'
  document.documentElement.classList.toggle('dark', theme === 'dark')
})()`

function storedTheme(): Theme | null {
  const value = readStored(THEME_STORAGE_KEY)
  return value === 'light' || value === 'dark' ? value : null
}

function applyTheme(theme: Theme) {
  // Switch in one frame: without this, every element with a colour transition fades at its own pace.
  const pause = document.createElement('style')
  pause.textContent = '*,*::before,*::after{transition:none!important}'
  document.head.appendChild(pause)
  document.documentElement.classList.toggle('dark', theme === 'dark')
  void getComputedStyle(document.body).color // flush styles while transitions are off
  setTimeout(() => pause.remove(), 0)
}

// One system-preference listener however many components use the theme: the first subscriber adds it
// and the last removes it. The query is created on first use, because the module also loads in Node.
let systemQuery: MediaQueryList | undefined
let systemSubscribers = 0

function followSystem(event: MediaQueryListEvent) {
  if (!storedTheme()) applyTheme(event.matches ? 'dark' : 'light')
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  systemQuery ??= matchMedia(DARK_QUERY)
  if (systemSubscribers++ === 0) systemQuery.addEventListener('change', followSystem)
  return () => {
    observer.disconnect()
    if (--systemSubscribers === 0) systemQuery?.removeEventListener('change', followSystem)
  }
}

const getSnapshot = (): Theme => (document.documentElement.classList.contains('dark') ? 'dark' : 'light')

// Pre-rendered HTML can't know the theme, so hydration starts from 'light' and
// React re-renders with the real value right after.
const getServerSnapshot = (): Theme => 'light'

function setTheme(theme: Theme) {
  writeStored(THEME_STORAGE_KEY, theme)
  applyTheme(theme)
}

export function useTheme(): { theme: Theme; setTheme(t: Theme): void } {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  return { theme, setTheme }
}
