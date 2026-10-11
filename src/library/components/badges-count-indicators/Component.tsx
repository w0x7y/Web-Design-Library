export default function BadgesCountIndicators() {
  return (
    <div className="w-72 text-neutral-900 sm:w-80">
      <div className="flex items-center gap-5">
        <a href="#" className="relative inline-flex size-10 items-center justify-center rounded-md border border-neutral-300 bg-white transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></svg>
          <span aria-hidden="true" className="absolute -top-1.5 -right-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 px-1 text-xs text-white tabular-nums outline-2 outline-white">3</span>
          <span className="sr-only">3 unread notifications</span>
        </a>
        <a href="#" className="relative inline-flex size-10 items-center justify-center rounded-md border border-neutral-300 bg-white transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M4 4h16v12H9l-5 4V4Z" /><path d="M8 8h8M8 12h5" /></svg>
          <span aria-hidden="true" className="absolute -top-1 -right-1 size-2 rounded-full border border-neutral-900 bg-neutral-900 outline-2 outline-white" />
          <span className="sr-only">New messages</span>
        </a>
        <a href="#" className="relative flex size-10 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
          <span aria-hidden="true">AR</span>
          <span aria-hidden="true" className="absolute right-0 bottom-0 size-2.5 rounded-full border border-neutral-900 bg-neutral-900 outline-2 outline-white" />
          <span className="sr-only">Alex Rivera, available</span>
        </a>
      </div>
      <nav aria-label="Count navigation" className="mt-6">
        <ul role="list">
          <li>
            <a href="#" aria-current="page" className="flex h-9 items-center gap-2 rounded-md bg-neutral-100 px-3 text-sm font-medium transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="m3 14 4-9h10l4 9v6H3v-6Z" /><path d="M3 14h5l2 3h4l2-3h5" /></svg>
              Inbox<span className="ml-auto rounded-full bg-white px-1.5 text-xs text-neutral-600 tabular-nums">12</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex h-9 items-center gap-2 rounded-md px-3 text-sm transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="M5 8v12h14V8M9 12h6" /><rect x="3" y="4" width="18" height="4" rx="1" /></svg>
              Archive<span className="ml-auto rounded-full bg-neutral-100 px-1.5 text-xs text-neutral-600 tabular-nums">4</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex h-9 items-center gap-2 rounded-md px-3 text-sm transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="M6 21V3h13l-3 5 3 5H6" /></svg>
              Saved<span className="ml-auto rounded-full bg-neutral-100 px-1.5 text-xs text-neutral-600 tabular-nums">8</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
