export default function DropdownsSharePopover() {
  return (
    <div className="relative h-[23.5rem] w-72 text-neutral-900 sm:w-96">
      <details open className="group">
        <summary className="ml-auto flex h-11 w-fit cursor-pointer list-none items-center gap-2 rounded-md border border-neutral-300 bg-white px-4 text-sm font-medium transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" /></svg>
          Share
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
        </summary>
        <div className="absolute top-11 right-0 mt-2 w-full rounded-lg border border-neutral-200 bg-white p-4 shadow-lg">
          <h2 className="text-sm font-semibold">Share this item</h2>
          <form action="#" className="mt-3 flex items-center gap-2">
            <label htmlFor="dropdowns-share-popover-email" className="sr-only">Invite people by email</label>
            <input id="dropdowns-share-popover-email" name="email" type="email" autoComplete="off" placeholder="Add people by email" className="h-10 w-full min-w-0 flex-1 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
            <button type="submit" className="inline-flex h-11 shrink-0 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Invite</button>
          </form>
          <h3 className="mt-4 text-xs font-medium text-neutral-500">People with access</h3>
          <ul role="list" className="mt-2 space-y-3">
            <li className="flex items-center gap-3">
              <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium">Alex Rivera</span>
                <span className="block truncate text-xs text-neutral-500">alex@example.com</span>
              </span>
              <span className="shrink-0 text-sm text-neutral-500">Owner</span>
            </li>
            <li className="flex items-center gap-3">
              <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">SL</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium">Sam Lee</span>
                <span className="block truncate text-xs text-neutral-500">sam@example.com</span>
              </span>
              <select aria-label="Access for Sam Lee" defaultValue="edit" className="h-10 shrink-0 rounded-md border border-neutral-300 bg-white px-2 text-sm text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                <option value="edit">Editor</option>
                <option value="view">Viewer</option>
              </select>
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-3 border-t border-neutral-200 pt-4">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-500"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
            <p className="min-w-0 flex-1 text-xs text-neutral-500">Anyone with the link can view</p>
            <button type="button" className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-4 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" /><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" /></svg>
              Copy link
            </button>
          </div>
        </div>
      </details>
    </div>
  )
}
