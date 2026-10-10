export default function ButtonsSplitMenu() {
  return (
    <div className="relative flex h-60 w-72 items-start justify-end gap-2 text-neutral-900 sm:w-[24rem]">
      <div className="flex">
        <button type="button" className="inline-flex h-11 items-center justify-center rounded-l-md border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 px-5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Save</button>
        <details className="group relative">
          <summary aria-label="More save options" className="flex h-11 -ml-px w-9 cursor-pointer list-none items-center justify-center rounded-r-md border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform group-open:rotate-180 motion-reduce:transition-none"><path d="m6 9 6 6 6-6" /></svg>
          </summary>
          <ul role="list" className="absolute -left-20 top-full z-20 mt-2 w-56 rounded-md border border-neutral-200 bg-white p-1 text-neutral-900 shadow-lg">
            <li>
              <button type="button" className="flex h-9 w-full items-center gap-2 rounded-md px-3 text-sm text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>Schedule</button>
            </li>
            <li>
              <button type="button" className="flex h-9 w-full items-center gap-2 rounded-md px-3 text-sm text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></svg>Preview</button>
            </li>
            <li>
              <button type="button" className="flex h-9 w-full items-center gap-2 rounded-md px-3 text-sm text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m10 13 4-2m-6 4H6a4 4 0 0 1 0-8h4m4 0h4a4 4 0 0 1 0 8h-4" /></svg>Copy link</button>
            </li>
            <li className="mt-1 border-t border-neutral-200 pt-1">
              <button type="button" className="flex h-9 w-full items-center gap-2 rounded-md px-3 text-sm text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M5 3h12l4 4v14H3V3h2Zm2 0v6h10V3M7 21v-8h10v8" /></svg>Save draft</button>
            </li>
          </ul>
        </details>
      </div>
      <div className="flex">
        <button type="button" className="inline-flex h-11 items-center justify-center rounded-l-md bg-neutral-900 text-white hover:bg-neutral-700 px-5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Publish</button>
        <details open className="group relative">
          <summary aria-label="More publish options" className="flex h-11 w-10 border-l border-white/20 cursor-pointer list-none items-center justify-center rounded-r-md bg-neutral-900 text-white hover:bg-neutral-700 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform group-open:rotate-180 motion-reduce:transition-none"><path d="m6 9 6 6 6-6" /></svg>
          </summary>
          <ul role="list" className="absolute right-0 top-full z-20 mt-2 w-56 rounded-md border border-neutral-200 bg-white p-1 text-neutral-900 shadow-lg">
            <li>
              <button type="button" className="flex h-9 w-full items-center gap-2 rounded-md px-3 text-sm text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>Schedule</button>
            </li>
            <li>
              <button type="button" className="flex h-9 w-full items-center gap-2 rounded-md px-3 text-sm text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></svg>Preview</button>
            </li>
            <li>
              <button type="button" className="flex h-9 w-full items-center gap-2 rounded-md px-3 text-sm text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m10 13 4-2m-6 4H6a4 4 0 0 1 0-8h4m4 0h4a4 4 0 0 1 0 8h-4" /></svg>Copy link</button>
            </li>
            <li className="mt-1 border-t border-neutral-200 pt-1">
              <button type="button" className="flex h-9 w-full items-center gap-2 rounded-md px-3 text-sm text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M5 3h12l4 4v14H3V3h2Zm2 0v6h10V3M7 21v-8h10v8" /></svg>Save draft</button>
            </li>
          </ul>
        </details>
      </div>
    </div>
  )
}

