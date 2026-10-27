export default function TogglesFilterChips() {
  return (
    <div role="group" aria-labelledby="toggles-filter-chips-label" aria-describedby="toggles-filter-chips-hint" className="group/filters w-72 text-neutral-900 sm:w-[28rem]">
      <div className="flex items-center justify-between gap-4">
        <p id="toggles-filter-chips-label" className="text-sm font-semibold">Content type</p>
        <button type="button" className="invisible text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 group-has-checked/filters:visible">Clear</button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <label className="group relative inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 has-checked:border-neutral-900 has-checked:bg-neutral-100 has-checked:text-neutral-900 has-checked:hover:bg-neutral-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[ButtonText] forced-colors:has-checked:border-[Highlight]">
          <input type="checkbox" name="toggles-filter-chips-type" value="articles" className="sr-only focus-visible:outline-hidden" />
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="-ml-1 hidden size-4 group-has-checked:block"><path d="m5 12 4 4L19 6" /></svg>
          Articles
        </label>
        <label className="group relative inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 has-checked:border-neutral-900 has-checked:bg-neutral-100 has-checked:text-neutral-900 has-checked:hover:bg-neutral-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[ButtonText] forced-colors:has-checked:border-[Highlight]">
          <input type="checkbox" name="toggles-filter-chips-type" value="guides" defaultChecked className="sr-only focus-visible:outline-hidden" />
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="-ml-1 hidden size-4 group-has-checked:block"><path d="m5 12 4 4L19 6" /></svg>
          Guides
        </label>
        <label className="group relative inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 has-checked:border-neutral-900 has-checked:bg-neutral-100 has-checked:text-neutral-900 has-checked:hover:bg-neutral-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[ButtonText] forced-colors:has-checked:border-[Highlight]">
          <input type="checkbox" name="toggles-filter-chips-type" value="videos" className="sr-only focus-visible:outline-hidden" />
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="-ml-1 hidden size-4 group-has-checked:block"><path d="m5 12 4 4L19 6" /></svg>
          Videos
        </label>
        <label className="group relative inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 has-checked:border-neutral-900 has-checked:bg-neutral-100 has-checked:text-neutral-900 has-checked:hover:bg-neutral-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[ButtonText] forced-colors:has-checked:border-[Highlight]">
          <input type="checkbox" name="toggles-filter-chips-type" value="templates" defaultChecked className="sr-only focus-visible:outline-hidden" />
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="-ml-1 hidden size-4 group-has-checked:block"><path d="m5 12 4 4L19 6" /></svg>
          Templates
        </label>
        <label className="group relative inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 has-checked:border-neutral-900 has-checked:bg-neutral-100 has-checked:text-neutral-900 has-checked:hover:bg-neutral-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[ButtonText] forced-colors:has-checked:border-[Highlight]">
          <input type="checkbox" name="toggles-filter-chips-type" value="case-studies" className="sr-only focus-visible:outline-hidden" />
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="-ml-1 hidden size-4 group-has-checked:block"><path d="m5 12 4 4L19 6" /></svg>
          Case studies
        </label>
        <label className="group relative inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 has-checked:border-neutral-900 has-checked:bg-neutral-100 has-checked:text-neutral-900 has-checked:hover:bg-neutral-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[ButtonText] forced-colors:has-checked:border-[Highlight]">
          <input type="checkbox" name="toggles-filter-chips-type" value="webinars" className="sr-only focus-visible:outline-hidden" />
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="-ml-1 hidden size-4 group-has-checked:block"><path d="m5 12 4 4L19 6" /></svg>
          Webinars
        </label>
        <label className="group relative inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 has-checked:border-neutral-900 has-checked:bg-neutral-100 has-checked:text-neutral-900 has-checked:hover:bg-neutral-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[ButtonText] forced-colors:has-checked:border-[Highlight]">
          <input type="checkbox" name="toggles-filter-chips-type" value="podcasts" className="sr-only focus-visible:outline-hidden" />
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="-ml-1 hidden size-4 group-has-checked:block"><path d="m5 12 4 4L19 6" /></svg>
          Podcasts
        </label>
      </div>
      <p id="toggles-filter-chips-hint" className="mt-3 text-xs text-neutral-500">Results update as you select types</p>
    </div>
  )
}
