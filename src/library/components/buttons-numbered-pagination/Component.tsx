export default function ButtonsNumberedPagination() {
  return (
    <nav aria-label="Pagination" className="flex w-72 items-center justify-between gap-2 text-neutral-900 sm:w-[32rem]">
      <a href="#" className="inline-flex h-10 items-center gap-1 rounded-md border border-neutral-300 bg-white pr-3 pl-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m14 6-6 6 6 6" /></svg>
        Previous
      </a>
      <p className="text-sm text-neutral-600 tabular-nums sm:hidden">Page <span className="font-medium text-neutral-900">6</span> of 12</p>
      <ol role="list" className="hidden items-center gap-1 sm:flex">
        <li><a href="#" aria-label="Page 1" className="inline-flex size-10 items-center justify-center rounded-md text-sm font-medium text-neutral-900 tabular-nums transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 aria-[current=page]:bg-neutral-900 aria-[current=page]:text-white aria-[current=page]:hover:bg-neutral-700 forced-colors:aria-[current=page]:bg-[Highlight] forced-colors:aria-[current=page]:text-[HighlightText]">1</a></li>
        <li aria-hidden="true" className="inline-flex size-10 items-center justify-center text-sm text-neutral-500">…</li>
        <li><a href="#" aria-label="Page 5" className="inline-flex size-10 items-center justify-center rounded-md text-sm font-medium text-neutral-900 tabular-nums transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 aria-[current=page]:bg-neutral-900 aria-[current=page]:text-white aria-[current=page]:hover:bg-neutral-700 forced-colors:aria-[current=page]:bg-[Highlight] forced-colors:aria-[current=page]:text-[HighlightText]">5</a></li>
        <li><a href="#" aria-label="Page 6" aria-current="page" className="inline-flex size-10 items-center justify-center rounded-md text-sm font-medium text-neutral-900 tabular-nums transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 aria-[current=page]:bg-neutral-900 aria-[current=page]:text-white aria-[current=page]:hover:bg-neutral-700 forced-colors:aria-[current=page]:bg-[Highlight] forced-colors:aria-[current=page]:text-[HighlightText]">6</a></li>
        <li><a href="#" aria-label="Page 7" className="inline-flex size-10 items-center justify-center rounded-md text-sm font-medium text-neutral-900 tabular-nums transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 aria-[current=page]:bg-neutral-900 aria-[current=page]:text-white aria-[current=page]:hover:bg-neutral-700 forced-colors:aria-[current=page]:bg-[Highlight] forced-colors:aria-[current=page]:text-[HighlightText]">7</a></li>
        <li aria-hidden="true" className="inline-flex size-10 items-center justify-center text-sm text-neutral-500">…</li>
        <li><a href="#" aria-label="Page 12" className="inline-flex size-10 items-center justify-center rounded-md text-sm font-medium text-neutral-900 tabular-nums transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 aria-[current=page]:bg-neutral-900 aria-[current=page]:text-white aria-[current=page]:hover:bg-neutral-700 forced-colors:aria-[current=page]:bg-[Highlight] forced-colors:aria-[current=page]:text-[HighlightText]">12</a></li>
      </ol>
      <a href="#" className="inline-flex h-10 items-center gap-1 rounded-md border border-neutral-300 bg-white pr-2 pl-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
        Next
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m10 6 6 6-6 6" /></svg>
      </a>
    </nav>
  )
}
