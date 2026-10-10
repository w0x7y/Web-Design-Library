export default function DropdownsAccountMenu() {
  return (
    <div className="relative h-72 w-72 text-neutral-900 sm:w-80">
      <details open className="group">
        <summary className="ml-auto flex h-11 w-fit cursor-pointer list-none items-center gap-2 rounded-md px-2 text-sm font-medium transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
          <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
          <span className="sr-only sm:not-sr-only">Alex Rivera</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
        </summary>
        <div className="absolute top-11 right-0 mt-2 w-64 rounded-md border border-neutral-200 bg-white p-1 shadow-lg">
          <div className="border-b border-neutral-200 px-3 py-2">
            <p className="text-sm font-semibold">Alex Rivera</p>
            <p className="text-sm text-neutral-500">name@example.com</p>
          </div>
          <ul role="list" className="py-1">
          <li><a href="#" aria-current="page" className="flex h-9 items-center gap-2 rounded-md px-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><circle cx="12" cy="8" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2" /></svg>Profile</a></li>
          <li><a href="#" className="flex h-9 items-center gap-2 rounded-md px-3 text-sm text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="M4 7h16M4 17h16" /><circle cx="9" cy="7" r="3" /><circle cx="15" cy="17" r="3" /></svg>Account settings</a></li>
          <li><a href="#" className="flex h-9 items-center gap-2 rounded-md px-3 text-sm text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><circle cx="12" cy="12" r="9" /><path d="M9 9a3 3 0 0 1 6 0c0 2-3 2-3 4M12 17h.01" /></svg>Help center</a></li>
          </ul>
          <div className="border-t border-neutral-200 pt-1">
            <button type="button" className="flex h-9 w-full items-center gap-2 rounded-md px-3 text-sm text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="M9 4H3v16h6M12 12h9m-4-4 4 4-4 4" /></svg>Sign out</button>
          </div>
        </div>
      </details>
    </div>
  )
}
