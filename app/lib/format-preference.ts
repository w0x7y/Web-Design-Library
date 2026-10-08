import { useCallback, useEffect, useState } from 'react'
import type { Format } from '../../src/library/types'

export const FORMAT_STORAGE_KEY = 'wl:format'

/**
 * The code format (React or HTML) the visitor last picked, remembered across pages and visits.
 * Starts as 'react' so pre-rendered HTML and hydration agree; the stored choice applies right after.
 * Call it once per page and pass the pair down, so every control shares one value.
 */
export function useFormatPreference(): [Format, (f: Format) => void] {
  const [format, setFormatState] = useState<Format>('react')

  useEffect(() => {
    try {
      const stored = localStorage.getItem(FORMAT_STORAGE_KEY)
      // Read after hydration on purpose: reading during render would mismatch the pre-rendered 'react'.
      // oxlint-disable-next-line react/set-state-in-effect -- syncing from localStorage, an external system
      if (stored === 'react' || stored === 'html') setFormatState(stored)
    } catch {
      // Storage blocked: stay on the default.
    }
  }, [])

  const setFormat = useCallback((next: Format) => {
    setFormatState(next)
    try {
      localStorage.setItem(FORMAT_STORAGE_KEY, next)
    } catch {
      // Storage blocked: the choice still applies to this page.
    }
  }, [])

  return [format, setFormat]
}
