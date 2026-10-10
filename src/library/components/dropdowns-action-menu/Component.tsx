export default function DropdownsActionMenu() {
  return (
    <details open className="group relative h-[19rem] w-72 text-neutral-900 sm:w-80">
      <summary className="inline-flex h-11 cursor-pointer list-none items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
        Options
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
      </summary>
      <div className="absolute top-11 left-0 mt-2 w-56 rounded-md border border-neutral-200 bg-white p-1 shadow-lg">
        <ul role="list">
          <li><button type="button" className="flex h-8 w-full items-center gap-2 rounded-md px-3 text-left text-sm text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="m14 4 6 6M4 20l4-1L20 7l-6-6L2 13l-1 8z" /></svg><span>Edit</span><kbd className="ml-auto font-mono text-xs text-neutral-500">E</kbd></button></li>
          <li><button type="button" className="flex h-8 w-full items-center gap-2 rounded-md px-3 text-left text-sm text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V4H4v12h4" /></svg><span>Duplicate</span><kbd className="ml-auto font-mono text-xs text-neutral-500">D</kbd></button></li>
          <li><button type="button" className="flex h-8 w-full items-center gap-2 rounded-md px-3 text-left text-sm text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="m10 13 4-4M8 16l-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0M16 8l1-1a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0" /></svg><span>Copy link</span><kbd className="ml-auto font-mono text-xs text-neutral-500">C</kbd></button></li>
        </ul>
        <div className="my-1 border-t border-neutral-200">
          <p className="px-3 py-1 text-xs text-neutral-500">Organize</p>
          <ul role="list">
            <li><button type="button" className="flex h-8 w-full items-center gap-2 rounded-md px-3 text-left text-sm text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="M3 7h7l2 2h9v11H3zM3 7V4h6l2 3M9 14h6m-3-3 3 3-3 3" /></svg><span>Move to folder</span></button></li>
            <li><button type="button" disabled className="flex h-8 w-full cursor-not-allowed items-center gap-2 rounded-md px-3 text-left text-sm text-neutral-600 opacity-50"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><rect x="3" y="3" width="18" height="4" rx="1" /><path d="M5 7v13h14V7M10 11h4" /></svg><span>Archive</span></button></li>
          </ul>
        </div>
        <ul role="list" className="border-t border-neutral-200 pt-1">
          <li><button type="button" className="flex h-8 w-full items-center gap-2 rounded-md px-3 text-left text-sm text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="M3 6h18M9 6V4h6v2M5 6l1 14h12l1-14M10 10v6M14 10v6" /></svg><span>Delete</span></button></li>
        </ul>
      </div>
    </details>
  )
}
