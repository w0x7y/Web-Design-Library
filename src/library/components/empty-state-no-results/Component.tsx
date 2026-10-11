export default function EmptyStateNoResults() {
  return (
    <div className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-96">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
            <path d="M21 21l-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0" />
          </svg>
        </span>
        <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">&quot;Query label&quot;</span>
      </div>
      <h2 className="mt-4 text-base font-semibold">No results for this search</h2>
      <ul role="list" className="mt-4 grid gap-2 text-sm text-neutral-600">
        <li className="flex items-center gap-2"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-400"><path d="M9 12h6" /></svg>Try broader search terms</li>
        <li className="flex items-center gap-2"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-400"><path d="M9 12h6" /></svg>Remove an active filter</li>
        <li className="flex items-center gap-2"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-400"><path d="M9 12h6" /></svg>Check the query spelling</li>
      </ul>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <a href="#" className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Clear filters</a>
        <a href="#" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Browse all items</a>
      </div>
    </div>
  )
}
