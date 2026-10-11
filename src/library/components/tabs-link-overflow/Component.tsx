export default function TabsLinkOverflow() {
  return (
    <div className="relative h-64 w-72 bg-white text-neutral-900 sm:h-48 sm:w-[32rem]">
      <nav aria-label="Collection views" className="flex items-start justify-between gap-2 border-b border-neutral-200">
        <a href="#" aria-current="page" className="-mb-px flex h-10 items-center gap-2 border-b-2 border-neutral-900 px-1 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-900 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">All<span className="rounded-full bg-neutral-100 px-1.5 text-xs tabular-nums text-neutral-600">24</span></a>
        <a href="#" className="-mb-px flex h-10 items-center gap-2 border-b-2 border-transparent px-1 text-sm font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Open<span className="rounded-full bg-neutral-100 px-1.5 text-xs tabular-nums text-neutral-600">12</span></a>
        <a href="#" className="-mb-px hidden h-10 items-center gap-2 border-b-2 border-transparent px-1 text-sm font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:flex">Closed<span className="rounded-full bg-neutral-100 px-1.5 text-xs tabular-nums text-neutral-600">8</span></a>
        <a href="#" className="-mb-px hidden h-10 items-center gap-2 border-b-2 border-transparent px-1 text-sm font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:flex">Drafts<span className="rounded-full bg-neutral-100 px-1.5 text-xs tabular-nums text-neutral-600">4</span></a>
        <details open className="group relative -mb-px">
          <summary className="flex h-10 cursor-pointer list-none items-center gap-1 border-b-2 border-transparent px-1 text-sm font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
            More
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
          </summary>
          <div className="absolute top-full right-0 mt-2 w-48 rounded-md border border-neutral-200 bg-white p-1 shadow-lg">
            <ul role="list">
              <li className="sm:hidden"><a href="#" className="flex h-9 items-center rounded-md px-3 text-sm text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Closed</a></li>
              <li className="sm:hidden"><a href="#" className="flex h-9 items-center rounded-md px-3 text-sm text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Drafts</a></li>
              <li><a href="#" className="flex h-9 items-center rounded-md px-3 text-sm text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Archived</a></li>
              <li><a href="#" className="flex h-9 items-center rounded-md px-3 text-sm text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Assigned</a></li>
              <li><a href="#" className="flex h-9 items-center rounded-md px-3 text-sm text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Following</a></li>
            </ul>
          </div>
        </details>
      </nav>
    </div>
  )
}
