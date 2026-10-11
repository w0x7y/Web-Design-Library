export default function DropdownsDisplaySettings() {
  return (
    <details className="w-72 text-neutral-900 sm:w-96" open><summary className="flex h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-md border border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden"><svg className="size-4" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M4 17h16" /><circle cx="9" cy="7" r="3" /><circle cx="15" cy="17" r="3" /></svg><span className="flex-1 text-left">Display options</span><svg className="size-4" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></summary>
    <div className="mt-2 rounded-lg border border-neutral-200 bg-white p-3 shadow-lg"><div className="grid gap-3"><div><label className="mb-1.5 block text-sm font-medium" htmlFor="dropdowns-display-settings-density">Density</label>
    <select className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" id="dropdowns-display-settings-density" name="density" aria-describedby="dropdowns-display-settings-hint"><option>Comfortable</option>
    <option>Compact</option></select></div>
    <div><label className="mb-1.5 block text-sm font-medium" htmlFor="dropdowns-display-settings-grouping">Group by</label>
    <select className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" id="dropdowns-display-settings-grouping" name="grouping" aria-describedby="dropdowns-display-settings-hint"><option>None</option>
    <option>Status</option>
    <option>Owner</option></select></div></div>
    <p className="mt-3 text-xs text-neutral-500" id="dropdowns-display-settings-hint">Choose how the collection is arranged.</p></div></details>
  )
}
