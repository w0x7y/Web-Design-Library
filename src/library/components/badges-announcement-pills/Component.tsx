export default function BadgesAnnouncementPills() {
  return (
    <div className="flex w-72 flex-col items-center gap-4 text-neutral-900 sm:w-[26rem]">
      <a href="#" className="inline-flex h-8 max-w-full items-center gap-2 rounded-full border border-neutral-300 bg-white pr-3 pl-1 text-sm text-neutral-600 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
        <span className="inline-flex shrink-0 items-center rounded-full border border-neutral-900 bg-neutral-900 px-2 py-0.5 text-xs font-medium text-white">New</span>
        <span className="truncate">Message naming the update</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-900"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      <a href="#" className="inline-flex h-8 max-w-full items-center gap-3 rounded-full border border-neutral-200 bg-neutral-50 px-3 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
        <span className="truncate">Release summary</span>
        <span aria-hidden="true" className="h-4 w-px shrink-0 bg-neutral-300" />
        <span className="inline-flex shrink-0 items-center gap-1 font-medium text-neutral-900">
          Read more
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </span>
      </a>
      <a href="#" className="inline-flex h-8 max-w-full items-center gap-2 rounded-full border border-neutral-900 bg-neutral-900 px-3 text-sm font-medium text-white transition-colors hover:border-neutral-700 hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
        <span className="truncate">Event name on Nov 12</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="m9 6 6 6-6 6" /></svg>
      </a>
    </div>
  )
}
