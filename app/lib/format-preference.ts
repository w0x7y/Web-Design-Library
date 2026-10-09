import { useSyncExternalStore } from 'react'
import type { Format } from '../../src/library/types'
import { readStored, STORAGE_KEYS, writeStored } from './storage'

// The code format (React or HTML) the visitor last picked, remembered across pages, visits and tabs.
// One store for the page: every control that reads it sees the same value, wherever it sits.

const DEFAULT: Format = 'react'

const listeners = new Set<() => void>()
let current: Format | null = null // read from storage on first use

const parse = (value: string | null): Format => (value === 'html' ? 'html' : DEFAULT)

function getSnapshot(): Format {
  current ??= parse(readStored(STORAGE_KEYS.format))
  return current
}

function notify() {
  for (const listener of listeners) listener()
}

// Another tab picked a format: follow it.
function onStorage(event: StorageEvent) {
  if (event.key !== STORAGE_KEYS.format) return
  current = parse(event.newValue)
  notify()
}

function subscribe(listener: () => void) {
  if (listeners.size === 0) {
    // Nothing was listening, so another tab may have picked a format unseen: read storage afresh.
    // (useSyncExternalStore reads the snapshot again after subscribing.)
    current = null
    addEventListener('storage', onStorage)
  }
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
    if (listeners.size === 0) removeEventListener('storage', onStorage)
  }
}

/** Picks the format everywhere on the page, and remembers it. */
export function setFormat(format: Format): void {
  current = format
  writeStored(STORAGE_KEYS.format, format)
  notify()
}

/** The store itself, as React reads it (useFormat), for code and tests outside React. */
export const formatStore = { get: getSnapshot, subscribe, set: setFormat }

/**
 * The picked format. Pre-rendered HTML and hydration see 'react', so they agree; the stored choice
 * applies right after.
 */
export function useFormat(): Format {
  return useSyncExternalStore(subscribe, getSnapshot, () => DEFAULT)
}
