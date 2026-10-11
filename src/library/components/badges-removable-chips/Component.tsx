export default function BadgesRemovableChips() {
  return (
    <div className="w-72 text-neutral-900 sm:w-[28rem]">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-medium">Active filters</h2>
        <button type="button" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Clear all</button>
      </div>
      <ul role="list" className="mt-3 flex flex-wrap gap-2">
        {[{ key: 'Status', value: 'Open' }, { key: 'Type', value: 'Any' }, { key: 'Owner', value: 'Me' }, { key: 'Date', value: 'Today' }].map((filter) => (
          <li key={filter.key} className="inline-flex h-7 items-center gap-1 rounded-full border border-neutral-300 pr-1 pl-2.5 text-xs has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900">
            <span><span className="text-neutral-500">{filter.key}:</span> {filter.value}</span>
            <button type="button" aria-label={`Remove filter: ${filter.key} ${filter.value}`} className="inline-flex size-5 items-center justify-center rounded-full transition-colors hover:bg-neutral-200 focus-visible:outline-hidden">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3"><path d="m6 6 12 12M18 6 6 18" /></svg>
            </button>
          </li>
        ))}
        <li>
          <button type="button" className="inline-flex h-7 items-center gap-1 rounded-full border border-dashed border-neutral-300 bg-white px-2.5 text-xs font-medium transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3"><path d="M12 5v14M5 12h14" /></svg>
            Add filter
          </button>
        </li>
      </ul>
      <p className="mt-4 text-sm text-neutral-500">1,284 results</p>
    </div>
  )
}
