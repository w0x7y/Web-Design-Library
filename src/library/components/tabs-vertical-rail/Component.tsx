export default function TabsVerticalRail() {
  return (
    <div className="group grid w-72 grid-cols-[44px_1fr] gap-4 bg-white text-neutral-900 sm:w-[32rem] sm:grid-cols-[160px_1fr]">
      <div role="radiogroup" aria-label="Content category" className="flex flex-col gap-1">
        <label id="tabs-vertical-rail-overview-label" className="flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent px-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-50 has-[:checked]:bg-neutral-100 has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight] sm:justify-start sm:px-3">
          <input id="tabs-vertical-rail-overview" type="radio" name="tabs-vertical-rail" aria-controls="tabs-vertical-rail-overview-panel" defaultChecked className="sr-only focus-visible:outline-hidden" />
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
          <span className="sr-only sm:not-sr-only">Overview</span>
        </label>
        <label id="tabs-vertical-rail-details-label" className="flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent px-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-50 has-[:checked]:bg-neutral-100 has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight] sm:justify-start sm:px-3">
          <input id="tabs-vertical-rail-details" type="radio" name="tabs-vertical-rail" aria-controls="tabs-vertical-rail-details-panel" className="sr-only focus-visible:outline-hidden" />
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="M8 3h8l4 4v14H4V3h4M16 3v5h4M8 12h8M8 16h6" /></svg>
          <span className="sr-only sm:not-sr-only">Details</span>
        </label>
        <label id="tabs-vertical-rail-activity-label" className="flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent px-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-50 has-[:checked]:bg-neutral-100 has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight] sm:justify-start sm:px-3">
          <input id="tabs-vertical-rail-activity" type="radio" name="tabs-vertical-rail" aria-controls="tabs-vertical-rail-activity-panel" className="sr-only focus-visible:outline-hidden" />
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="M3 12h4l3-7 4 14 3-7h4" /></svg>
          <span className="sr-only sm:not-sr-only">Activity</span>
        </label>
        <label id="tabs-vertical-rail-settings-label" className="flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent px-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-50 has-[:checked]:bg-neutral-100 has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight] sm:justify-start sm:px-3">
          <input id="tabs-vertical-rail-settings" type="radio" name="tabs-vertical-rail" aria-controls="tabs-vertical-rail-settings-panel" className="sr-only focus-visible:outline-hidden" />
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="M4 7h16M4 17h16" /><circle cx="9" cy="7" r="3" /><circle cx="15" cy="17" r="3" /></svg>
          <span className="sr-only sm:not-sr-only">Settings</span>
        </label>
      </div>
      <div className="min-w-0 border-l border-neutral-200 pl-4">
        <section id="tabs-vertical-rail-overview-panel" aria-labelledby="tabs-vertical-rail-overview-label" className="hidden group-has-[#tabs-vertical-rail-overview:checked]:block">
          <h2 className="text-base font-semibold">Panel heading</h2>
          <p className="mt-2 text-sm text-pretty text-neutral-600">Describe this category and the next step available in the selected view.</p>
          <a href="#" className="mt-6 inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Secondary action</a>
        </section>
        <section id="tabs-vertical-rail-details-panel" aria-labelledby="tabs-vertical-rail-details-label" className="hidden group-has-[#tabs-vertical-rail-details:checked]:block">
          <h2 className="text-base font-semibold">Detail heading</h2>
          <p className="mt-2 text-sm text-pretty text-neutral-600">Explain the information here and how readers can review its supporting detail.</p>
          <a href="#" className="mt-6 inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Review details</a>
        </section>
        <section id="tabs-vertical-rail-activity-panel" aria-labelledby="tabs-vertical-rail-activity-label" className="hidden group-has-[#tabs-vertical-rail-activity:checked]:block">
          <h2 className="text-base font-semibold">Activity heading</h2>
          <p className="mt-2 text-sm text-pretty text-neutral-600">Summarize recent changes and direct readers to the full sequence of updates.</p>
          <a href="#" className="mt-6 inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">View activity</a>
        </section>
        <section id="tabs-vertical-rail-settings-panel" aria-labelledby="tabs-vertical-rail-settings-label" className="hidden group-has-[#tabs-vertical-rail-settings:checked]:block">
          <h2 className="text-base font-semibold">Setting heading</h2>
          <p className="mt-2 text-sm text-pretty text-neutral-600">Describe the available preferences and where readers can adjust this category.</p>
          <a href="#" className="mt-6 inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Edit settings</a>
        </section>
      </div>
    </div>
  )
}
