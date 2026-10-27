export default function DropdownsSearchSuggestions() {
  return (
    <form role="search" action="#" className="relative h-[22rem] w-72 text-neutral-900 sm:w-96">
      <label htmlFor="dropdowns-search-suggestions-query" className="sr-only">Search</label>
      <div className="relative">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute top-3 left-3 size-4 text-neutral-500"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" /></svg>
        <input id="dropdowns-search-suggestions-query" name="q" type="search" defaultValue="report" aria-describedby="dropdowns-search-suggestions-hint" placeholder="Search" autoComplete="off" className="peer h-10 w-full rounded-md border border-neutral-300 bg-white pr-3 pl-9 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
        <p id="dropdowns-search-suggestions-hint" className="sr-only">Suggestions appear below as you type.</p>
        <div className="absolute top-full left-0 mt-2 w-full rounded-lg border border-neutral-200 bg-white p-1 shadow-lg peer-placeholder-shown:hidden">
          <h2 className="px-3 pt-2 pb-1 text-xs font-medium text-neutral-500">Recent searches</h2>
          <ul role="list">
            {['template', 'schedule'].map((completion) => (
              <li key={completion}>
                <a href="#" className="flex h-9 items-center gap-2 rounded-md px-3 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-500"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                  <span className="truncate">report <span className="font-semibold text-neutral-900">{completion}</span></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="my-1 border-t border-neutral-200" />
          <h2 className="px-3 pt-2 pb-1 text-xs font-medium text-neutral-500">Suggested results</h2>
          <ul role="list">
            <li>
              <a href="#" className="flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900">
                <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></svg>
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium">Result title that matches</span>
                  <span className="block truncate text-xs text-neutral-500">Document · Edited 2 days ago</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900">
                <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium">Collection name</span>
                  <span className="block truncate text-xs text-neutral-500">Folder · 18 items</span>
                </span>
              </a>
            </li>
          </ul>
          <div className="mt-1 border-t border-neutral-200 pt-1">
            <a href="#" className="flex h-9 items-center justify-between gap-3 rounded-md px-3 text-sm font-medium transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900">
              <span className="truncate">See all results for “report”</span>
              <kbd aria-hidden="true" className="shrink-0 rounded-md border border-neutral-300 px-1.5 font-mono text-xs text-neutral-500">Enter</kbd>
            </a>
          </div>
        </div>
      </div>
    </form>
  )
}
