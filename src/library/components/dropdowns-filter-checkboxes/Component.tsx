export default function DropdownsFilterCheckboxes() {
  return (
    <details open className="group relative h-80 w-72 text-neutral-900 sm:w-80">
      <summary className="inline-flex h-11 cursor-pointer list-none items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="M3 5h18l-7 8v6l-4 2v-8z" /></svg>
        Status
        <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium"><span className="sr-only">Applied filters: </span>2</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
      </summary>
      <div className="absolute top-11 left-0 mt-2 w-64 rounded-md border border-neutral-200 bg-white p-2 shadow-lg">
        <div className="relative">
          <label htmlFor="dropdowns-filter-checkboxes-search" className="sr-only">Search statuses</label>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute top-3 left-3 size-4 text-neutral-500"><circle cx="10" cy="10" r="6" /><path d="m15 15 5 5" /></svg>
          <input id="dropdowns-filter-checkboxes-search" type="search" placeholder="Search statuses" aria-describedby="dropdowns-filter-checkboxes-hint" className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 pl-9 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
          <p id="dropdowns-filter-checkboxes-hint" className="sr-only">Search by status label.</p>
        </div>
        <fieldset className="mt-2">
          <legend className="sr-only">Status filters</legend>
          <label className="flex h-8 cursor-pointer items-center gap-2 rounded-md px-2 text-sm transition-colors hover:bg-neutral-100">
            <input type="checkbox" name="status" value="draft" defaultChecked className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
            <span>Draft</span>
            <span className="ml-auto text-xs tabular-nums text-neutral-500">12</span>
          </label>
          <label className="flex h-8 cursor-pointer items-center gap-2 rounded-md px-2 text-sm transition-colors hover:bg-neutral-100">
            <input type="checkbox" name="status" value="published" defaultChecked className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
            <span>Published</span>
            <span className="ml-auto text-xs tabular-nums text-neutral-500">24</span>
          </label>
          <label className="flex h-8 cursor-pointer items-center gap-2 rounded-md px-2 text-sm transition-colors hover:bg-neutral-100">
            <input type="checkbox" name="status" value="scheduled" className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
            <span>Scheduled</span>
            <span className="ml-auto text-xs tabular-nums text-neutral-500">8</span>
          </label>
          <label className="flex h-8 cursor-pointer items-center gap-2 rounded-md px-2 text-sm transition-colors hover:bg-neutral-100">
            <input type="checkbox" name="status" value="archived" className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
            <span>Archived</span>
            <span className="ml-auto text-xs tabular-nums text-neutral-500">4</span>
          </label>
        </fieldset>
        <div className="mt-2 flex items-center justify-between gap-3 border-t border-neutral-200 pt-2">
          <button type="button" className="inline-flex h-11 items-center rounded-md px-2 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Clear</button>
          <button type="button" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Apply</button>
        </div>
      </div>
    </details>
  )
}
