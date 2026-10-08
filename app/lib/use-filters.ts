import { useCallback, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { filtersSearch, NO_FILTERS, parseFilters, type Filters } from './filters'
import { useHydrated } from './use-hydrated'

/** The browse filters in the current URL, and a setter that rewrites ?q / ?tags in place. */
export function useFilters(): { filters: Filters; setFilters(next: Filters): void } {
  const { pathname, search } = useLocation()
  const navigate = useNavigate()
  const hydrated = useHydrated()
  const filters = useMemo(() => (hydrated ? parseFilters(new URLSearchParams(search)) : NO_FILTERS), [hydrated, search])
  const setFilters = useCallback(
    (next: Filters) => navigate({ pathname, search: filtersSearch(next) }, { replace: true, preventScrollReset: true }),
    [navigate, pathname],
  )
  return { filters, setFilters }
}
