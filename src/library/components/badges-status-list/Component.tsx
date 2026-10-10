export default function BadgesStatusList() {
  return (
    <div className="w-72 rounded-lg border border-neutral-200 bg-white text-neutral-900 sm:w-[26rem]">
      <div className="flex items-center justify-between gap-3 border-b border-neutral-200 px-4 py-3">
        <h2 className="text-sm font-semibold">Status overview</h2>
        <a href="#" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">View all</a>
      </div>
      <ul role="list">
        <li className="flex h-14 items-center justify-between gap-3 border-b border-neutral-200 px-4">
          <div className="min-w-0"><p className="truncate text-sm font-medium">Item name</p><p className="text-xs text-neutral-500">Updated 2 min ago</p></div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium"><span aria-hidden="true" className="size-1.5 rounded-full border border-neutral-900 bg-neutral-900" />Live</span>
        </li>
        <li className="flex h-14 items-center justify-between gap-3 border-b border-neutral-200 px-4">
          <div className="min-w-0"><p className="truncate text-sm font-medium">Process name</p><p className="text-xs text-neutral-500">Updated 12 min ago</p></div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium"><span aria-hidden="true" className="size-2.5 overflow-hidden rounded-full border border-neutral-900"><span className="block h-full w-1/2 bg-neutral-900" /></span>In progress</span>
        </li>
        <li className="flex h-14 items-center justify-between gap-3 border-b border-neutral-200 px-4">
          <div className="min-w-0"><p className="truncate text-sm font-medium">Attempt name</p><p className="text-xs text-neutral-500">Updated 1 hour ago</p></div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3"><path d="m6 6 12 12M18 6 6 18" /></svg>Failed</span>
        </li>
        <li className="flex h-14 items-center justify-between gap-3 px-4">
          <div className="min-w-0"><p className="truncate text-sm font-medium">Queue item</p><p className="text-xs text-neutral-500">Added 2 hours ago</p></div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium"><span aria-hidden="true" className="size-1.5 rounded-full border border-neutral-900" />Queued</span>
        </li>
      </ul>
    </div>
  )
}
