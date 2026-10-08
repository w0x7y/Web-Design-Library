import { useState, type FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { filtersSearch, isBrowsePath } from '~/lib/filters'
import { useFilters } from '~/lib/use-filters'
import { useHydrated } from '~/lib/use-hydrated'

/**
 * On the browse pages it filters live, rewriting ?q in place.
 * Anywhere else, submitting opens the browse page with the query.
 */
export function SearchField() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const hydrated = useHydrated()
  const { filters, setFilters } = useFilters()
  const onBrowse = isBrowsePath(pathname)
  const urlQuery = onBrowse ? filters.q : ''
  // While focused, the field keeps exactly what was typed (trailing spaces
  // included) and ignores URL updates that lag behind the keystrokes. Otherwise
  // it mirrors the URL, so "Clear filters" and back/forward update it.
  const [draft, setDraft] = useState<string | null>(null)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (onBrowse) {
      event.currentTarget.querySelector('input')?.blur() // done typing: drop the on-screen keyboard
      return
    }
    navigate(`/${filtersSearch({ q: draft ?? '', tags: [] })}`)
  }

  return (
    <form role="search" action="/" onSubmit={submit} className="relative">
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
      >
        <circle cx="7" cy="7" r="4.75" />
        <path d="m10.5 10.5 3.25 3.25" />
      </svg>
      <input
        type="search"
        name="q"
        aria-label="Search components"
        placeholder="Search components"
        autoComplete="off"
        spellCheck={false}
        enterKeyHint="search"
        // Typing before hydration would be lost, so the field opens up once React is live.
        readOnly={!hydrated}
        value={draft ?? urlQuery}
        onFocus={() => setDraft(urlQuery)}
        onBlur={() => setDraft(null)}
        onChange={(event) => {
          const value = event.target.value
          setDraft(value)
          if (onBrowse) setFilters({ ...filters, q: value })
        }}
        className="h-9 w-full rounded-lg border border-zinc-200 bg-white pr-3 pl-9 text-base text-zinc-900 transition-[border-color,box-shadow] duration-150 outline-none placeholder:text-zinc-500 hover:border-zinc-300 focus:border-zinc-500 focus:ring-4 focus:ring-zinc-900/[0.06] sm:text-sm dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-100 dark:hover:border-zinc-700 dark:focus:border-zinc-400 dark:focus:ring-white/[0.06]"
      />
    </form>
  )
}
