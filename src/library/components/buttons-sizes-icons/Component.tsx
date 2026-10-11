export default function ButtonsSizesIcons() {
  return (
    <div className="grid w-72 gap-5 text-neutral-900 sm:w-[26rem]">
      <div>
        <p className="text-xs text-neutral-500">Small · 32px</p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <button type="button" className="inline-flex h-8 px-3 text-xs items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5"><path d="M12 5v14M5 12h14" /></svg>
            Add
          </button>
          <button type="button" className="inline-flex h-8 px-3 text-xs items-center justify-center gap-2 rounded-md bg-neutral-900 font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            Next
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          </button>
          <button type="button" aria-label="Add item (small size)" className="inline-flex size-8 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5"><path d="M12 5v14M5 12h14" /></svg>
          </button>
        </div>
      </div>
      <div>
        <p className="text-xs text-neutral-500">Default · 44px</p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <button type="button" className="inline-flex h-11 px-5 text-sm items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M12 5v14M5 12h14" /></svg>
            Add
          </button>
          <button type="button" className="inline-flex h-11 px-5 text-sm items-center justify-center gap-2 rounded-md bg-neutral-900 font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            Next
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          </button>
          <button type="button" aria-label="Add item (default size)" className="inline-flex size-11 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M12 5v14M5 12h14" /></svg>
          </button>
        </div>
      </div>
      <div>
        <p className="text-xs text-neutral-500">Large · 48px</p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <button type="button" className="inline-flex h-12 px-5 text-base items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M12 5v14M5 12h14" /></svg>
            Add
          </button>
          <button type="button" className="inline-flex h-12 px-5 text-base items-center justify-center gap-2 rounded-md bg-neutral-900 font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            Next
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          </button>
          <button type="button" aria-label="Add item (large size)" className="inline-flex size-12 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M12 5v14M5 12h14" /></svg>
          </button>
        </div>
      </div>
    </div>
  )
}

