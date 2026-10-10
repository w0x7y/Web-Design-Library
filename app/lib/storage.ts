// The visitor's stored choices (theme, code format). Every key is listed here, so none collide, and
// reading or writing never throws: when the browser blocks storage the choice lasts for the page only.
// The `wl:` prefix predates the Patternbook name; changing it would forget every visitor's choices.

export const STORAGE_KEYS = {
  theme: 'wl:theme',
  format: 'wl:format',
} as const

type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS]

// The last value seen or written for each key, and the keys whose latest write storage refused:
// for those the page's choice wins over whatever storage still holds, until a write succeeds.
const fallback = new Map<StorageKey, string | null>()
const unsaved = new Set<StorageKey>()

/** The stored value, or this page's choice when storage is blocked or refused the last write. */
export function readStored(key: StorageKey): string | null {
  if (unsaved.has(key)) return fallback.get(key) ?? null
  try {
    const value = localStorage.getItem(key)
    fallback.set(key, value)
    return value
  } catch {
    return fallback.get(key) ?? null
  }
}

/** Remembers `value` for this page, and stores it when storage is available. */
export function writeStored(key: StorageKey, value: string): void {
  fallback.set(key, value)
  try {
    localStorage.setItem(key, value)
    unsaved.delete(key)
  } catch {
    // Storage blocked: the choice still applies to this page.
    unsaved.add(key)
  }
}
