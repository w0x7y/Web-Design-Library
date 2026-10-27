export default function ButtonsSpeedDial() {
  return (
    <div className="relative h-80 w-72 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-neutral-900 sm:w-80">
      <p className="text-sm font-medium text-neutral-900">Page content</p>
      <p className="mt-1 text-sm text-neutral-500">Scrolls beneath the floating button.</p>
      <details open className="group absolute right-4 bottom-4">
        <summary aria-label="Quick actions" className="flex size-14 cursor-pointer list-none items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6 transition-transform group-open:rotate-45 motion-reduce:transition-none"><path d="M12 5v14M5 12h14" /></svg>
        </summary>
        <ul role="list" className="absolute right-2 bottom-full mb-4 flex flex-col-reverse items-end gap-3">
          <li>
            <button type="button" className="group/action flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <span className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-sm font-medium whitespace-nowrap text-neutral-900 shadow-sm">Create item</span>
              <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-sm transition-colors group-hover/action:bg-neutral-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M14 3H6v18h12V7Zm0 0v4h4m-6 4v6m-3-3h6" /></svg>
              </span>
            </button>
          </li>
          <li>
            <button type="button" className="group/action flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <span className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-sm font-medium whitespace-nowrap text-neutral-900 shadow-sm">Upload file</span>
              <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-sm transition-colors group-hover/action:bg-neutral-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M12 15V3M8 7l4-4 4 4M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" /></svg>
              </span>
            </button>
          </li>
          <li>
            <button type="button" className="group/action flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <span className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-sm font-medium whitespace-nowrap text-neutral-900 shadow-sm">Invite member</span>
              <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-sm transition-colors group-hover/action:bg-neutral-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><circle cx="9" cy="8" r="4" /><path d="M2 21a7 7 0 0 1 14 0m3-13v6m-3-3h6" /></svg>
              </span>
            </button>
          </li>
        </ul>
      </details>
    </div>
  )
}
