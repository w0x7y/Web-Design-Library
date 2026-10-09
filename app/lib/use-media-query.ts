import { useCallback, useSyncExternalStore } from 'react'

/**
 * Whether `query` matches, kept up to date. False while React hydrates pre-rendered HTML (which was
 * rendered without a screen), then the real answer, so hydration never sees a mismatch.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = matchMedia(query)
      list.addEventListener('change', onChange)
      return () => list.removeEventListener('change', onChange)
    },
    [query],
  )
  return useSyncExternalStore(
    subscribe,
    () => matchMedia(query).matches,
    () => false,
  )
}
