export default function InputsTagEntry() {
  return (
    <div className="w-72 text-neutral-900 sm:w-[26rem]">
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <label htmlFor="tag-entry-input" className="text-sm font-medium">Tags</label>
        <span id="tag-entry-count" className="text-sm text-neutral-500 tabular-nums">3 of 10</span>
      </div>
      <div className="flex min-h-10 flex-wrap items-center gap-x-1.5 gap-y-1 rounded-md border border-neutral-300 bg-white px-1.5 py-1 has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-neutral-900">
        <ul role="list" aria-label="Added tags" className="flex flex-wrap gap-1.5">
          <li className="inline-flex h-7 items-center gap-1 rounded-full border border-neutral-300 bg-neutral-50 pr-1 pl-2.5 text-xs font-medium">
            Research
            <button type="button" aria-label="Remove tag Research" className="inline-flex size-5 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3"><path d="M6 6l12 12M18 6 6 18" /></svg></button>
          </li>
          <li className="inline-flex h-7 items-center gap-1 rounded-full border border-neutral-300 bg-neutral-50 pr-1 pl-2.5 text-xs font-medium">
            Draft
            <button type="button" aria-label="Remove tag Draft" className="inline-flex size-5 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3"><path d="M6 6l12 12M18 6 6 18" /></svg></button>
          </li>
          <li className="inline-flex h-7 items-center gap-1 rounded-full border border-neutral-300 bg-neutral-50 pr-1 pl-2.5 text-xs font-medium">
            Internal
            <button type="button" aria-label="Remove tag Internal" className="inline-flex size-5 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3"><path d="M6 6l12 12M18 6 6 18" /></svg></button>
          </li>
        </ul>
        <input id="tag-entry-input" name="tag" type="text" autoComplete="off" aria-describedby="tag-entry-count tag-entry-hint" placeholder="Add a tag" className="h-7 min-w-24 flex-1 border-0 bg-transparent px-1.5 text-sm placeholder:text-neutral-500 focus-visible:outline-hidden" />
      </div>
      <p id="tag-entry-hint" className="mt-1.5 text-sm text-neutral-500">Press Enter after each tag to add it.</p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <p id="tag-entry-suggested" className="text-xs font-medium text-neutral-500">Suggested</p>
        <ul role="list" aria-labelledby="tag-entry-suggested" className="flex flex-wrap gap-2">
          <li>
            <button type="button" aria-label="Add tag Planning" className="inline-flex h-7 items-center gap-1 rounded-full border border-dashed border-neutral-300 bg-white pr-2.5 pl-2 text-xs font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3"><path d="M12 5v14M5 12h14" /></svg>Planning</button>
          </li>
          <li>
            <button type="button" aria-label="Add tag Review" className="inline-flex h-7 items-center gap-1 rounded-full border border-dashed border-neutral-300 bg-white pr-2.5 pl-2 text-xs font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3"><path d="M12 5v14M5 12h14" /></svg>Review</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
