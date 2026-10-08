import { useSyncExternalStore } from 'react'

const noopSubscribe = () => () => {}

/**
 * False while React hydrates pre-rendered HTML, true afterwards (and on every
 * client-side render). Pre-rendered pages have no query string, and hydration
 * keeps server attributes, so anything derived from `?…` or browser state must
 * wait for this to avoid hydration mismatches.
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  )
}
