// The visitor's stored choices (theme, code format). Every key is listed here, so none collide, and
// reading or writing never throws: when the browser blocks storage the choice lasts for the page only.
// The `wl:` prefix predates the Patternbook name; changing it would forget every visitor's choices.

export const STORAGE_KEYS = {
  theme: 'wl:theme',
  format: 'wl:format',
} as const

type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS]

/** The stored value, or null when there is none or storage is blocked. */
export function readStored(key: StorageKey): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

/** Stores `value`; does nothing when storage is blocked. */
export function writeStored(key: StorageKey, value: string): void {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Storage blocked: the choice still applies to this page.
  }
}
