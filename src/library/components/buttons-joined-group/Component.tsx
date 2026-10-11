export default function ButtonsJoinedGroup() {
  return (
    <div className="grid w-72 justify-items-start gap-4 text-neutral-900 sm:w-80">
      <div role="group" aria-label="Item actions" className="flex">
        <button type="button" className="relative inline-flex h-11 items-center justify-center gap-2 border border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 rounded-l-md"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M12 5v14M5 12h14" /></svg>Add</button>
        <button type="button" className="relative inline-flex h-11 items-center justify-center gap-2 border border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 -ml-px"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V4H4v12h4" /></svg>Copy</button>
        <button type="button" className="relative inline-flex h-11 items-center justify-center gap-2 border border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 -ml-px rounded-r-md"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M12 16V3m-4 4 4-4 4 4M5 12v8h14v-8" /></svg>Share</button>
      </div>
      <div role="group" aria-label="Follow count" className="flex">
        <button type="button" className="relative inline-flex h-11 items-center justify-center gap-2 border border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 rounded-l-md"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z" /></svg>Follow</button>
        <span className="-ml-px inline-flex h-11 items-center rounded-r-md border border-neutral-300 bg-neutral-50 px-3 text-sm tabular-nums">1,284</span>
      </div>
      <div role="group" aria-label="Pagination" className="flex">
        <button type="button" disabled aria-label="Previous page" className="inline-flex size-11 cursor-not-allowed items-center justify-center rounded-l-md border border-neutral-300 bg-white opacity-50"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m14 6-6 6 6 6" /></svg></button>
        <span className="-ml-px inline-flex h-11 items-center border border-neutral-300 bg-white px-3 text-sm tabular-nums">Page 3 of 12</span>
        <button type="button" aria-label="Next page" className="relative -ml-px inline-flex size-11 items-center justify-center rounded-r-md border border-neutral-300 bg-white transition-colors hover:bg-neutral-50 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m10 6 6 6-6 6" /></svg></button>
      </div>
    </div>
  )
}

