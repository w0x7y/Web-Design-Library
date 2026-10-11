export default function DropdownsNavFlyout() {
  return (
    <nav aria-label="Primary navigation" className="relative flex h-80 w-72 items-start gap-4 text-neutral-900 sm:w-96">
      <details open className="group">
        <summary className="flex h-9 cursor-pointer list-none items-center gap-1 rounded-md px-2 text-sm font-medium transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
          Product
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
        </summary>
        <div className="absolute top-9 left-0 mt-2 w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-lg">
          <ul role="list" className="p-2">
          <li>
            <a href="#" className="flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900">
              <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg></span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">Feature title</span>
                <span className="block text-sm text-neutral-500">Describe the main benefit</span>
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900">
              <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M8 3v5M16 3v5M5 8h14v3a7 7 0 0 1-14 0V8M12 18v3" /></svg></span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">Integration title</span>
                <span className="block text-sm text-neutral-500">Describe connected tools</span>
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900">
              <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M12 5v15M3 4h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5v15h-5a4 4 0 0 0-4 2 4 4 0 0 0-4-2H3z" /></svg></span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">Resource title</span>
                <span className="block text-sm text-neutral-500">Introduce helpful resources</span>
              </span>
            </a>
          </li>
          </ul>
          <div className="flex items-center justify-between gap-4 border-t border-neutral-200 bg-neutral-50 px-4 py-3 text-sm">
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">All features</a>
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Contact</a>
          </div>
        </div>
      </details>
      <a href="#" className="flex h-9 items-center rounded-md text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Pricing</a>
      <a href="#" className="flex h-9 items-center rounded-md text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Docs</a>
    </nav>
  )
}
