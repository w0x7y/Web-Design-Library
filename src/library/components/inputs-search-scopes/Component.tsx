export default function InputsSearchScopes() {
  return (
    <form role="search" action="#" className="w-72 text-neutral-900 sm:w-[26rem]">
      <label htmlFor="scopes-query" className="sr-only">Search items</label>
      <div className="relative">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute top-3 left-3 size-4 text-neutral-500"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" /></svg>
        <input id="scopes-query" name="q" type="search" aria-describedby="scopes-query-hint" placeholder="Search items" className="h-10 w-full rounded-md border border-neutral-300 bg-white pr-12 pl-9 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
        <kbd aria-hidden="true" className="pointer-events-none absolute top-2 right-3 flex size-6 items-center justify-center rounded-md border border-neutral-300 font-mono text-xs text-neutral-500">⌘K</kbd>
      </div>
      <p id="scopes-query-hint" className="sr-only">Choose a scope to narrow your search.</p>
      <fieldset className="mt-3 flex flex-wrap gap-2">
        <legend className="sr-only">Scope</legend>
        {['All', 'Titles', 'Tags', 'People'].map((scope, index) => (
          <label key={scope} className="inline-flex h-8 cursor-pointer items-center gap-1 rounded-full border border-neutral-300 px-2.5 text-sm transition-colors hover:bg-neutral-50 has-checked:bg-neutral-900 has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-neutral-900 forced-colors:has-checked:border-dashed forced-colors:has-checked:font-semibold">
            <input type="radio" name="scope" value={scope.toLowerCase()} defaultChecked={index === 0} className="sr-only" />
            {scope}
          </label>
        ))}
      </fieldset>
      <div className="mt-5">
        <h2 className="text-xs text-neutral-500">Recent</h2>
        <ul role="list" className="mt-1">
          {['Recent query', 'Saved search', 'Previous lookup'].map((query) => (
            <li key={query}>
              <a href="#" className="flex h-9 items-center gap-2 rounded-md px-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                {query}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </form>
  )
}
