export default function ButtonsToolbar() {
  return (
    <div className="h-24 w-72 text-neutral-900 sm:w-[28rem]">
      <div className="flex items-center gap-1 rounded-lg border border-neutral-200 bg-white p-1">
        <div role="group" aria-label="History actions" className="flex">
          <button type="button" aria-label="Undo" className="group relative inline-flex size-9 shrink-0 items-center justify-center rounded-md text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="m9 4-5 5 5 5M4 9h9a6 6 0 0 1 0 12" /></svg>
            <span aria-hidden="true" className="pointer-events-none absolute left-0 top-full z-10 mt-2 rounded-md bg-neutral-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">Undo</span>
          </button>
          <button type="button" disabled aria-label="Redo" className="group relative inline-flex size-9 shrink-0 items-center justify-center rounded-md text-neutral-900 transition-colors cursor-not-allowed opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="m15 4 5 5-5 5m5-5h-9a6 6 0 0 0 0 12" /></svg>
            <span aria-hidden="true" className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full z-10 mt-2 rounded-md bg-neutral-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">Redo</span>
          </button>
        </div>
        <span aria-hidden="true" className="h-5 w-px shrink-0 bg-neutral-200" />
        <div role="group" aria-label="Formatting actions" className="flex">
          <button type="button" aria-label="Bold" className="group relative inline-flex size-9 shrink-0 items-center justify-center rounded-md text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M6 4h7a4 4 0 0 1 0 8H6Zm0 8h8a4 4 0 0 1 0 8H6Z" /></svg>
            <span aria-hidden="true" className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full z-10 mt-2 rounded-md bg-neutral-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">Bold</span>
          </button>
          <button type="button" aria-label="Italic" className="group relative inline-flex size-9 shrink-0 items-center justify-center rounded-md text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M10 4h9M5 20h9M15 4 9 20" /></svg>
            <span aria-hidden="true" className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full z-10 mt-2 rounded-md bg-neutral-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">Italic</span>
          </button>
          <button type="button" aria-label="Underline" className="group relative inline-flex size-9 shrink-0 items-center justify-center rounded-md text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M6 4v7a6 6 0 0 0 12 0V4M4 21h16" /></svg>
            <span aria-hidden="true" className="pointer-events-none absolute right-0 top-full z-10 mt-2 rounded-md bg-neutral-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">Underline</span>
          </button>
        </div>
        <span aria-hidden="true" className="h-5 w-px shrink-0 bg-neutral-200" />
        <button type="button" className="ml-auto inline-flex h-9 items-center justify-center rounded-md bg-neutral-900 px-3 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Save<span className="hidden sm:inline">&nbsp;changes</span></button>
      </div>
    </div>
  )
}

