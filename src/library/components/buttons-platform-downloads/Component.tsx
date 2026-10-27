export default function ButtonsPlatformDownloads() {
  return (
    <div className="w-72 text-neutral-900 sm:w-[28rem]">
      <ul role="list" className="grid gap-3 sm:grid-cols-2">
        <li>
          <a href="#" className="flex h-14 items-center gap-3 rounded-md bg-neutral-900 px-4 text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6 shrink-0"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8m-4-4v4" /></svg>
            <span className="flex flex-col">
              <span className="text-xs text-neutral-300">Download for</span>{' '}
              <span className="text-base leading-5 font-semibold">Desktop platform</span>
            </span>
          </a>
        </li>
        <li>
          <a href="#" className="flex h-14 items-center gap-3 rounded-md bg-neutral-900 px-4 text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6 shrink-0"><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></svg>
            <span className="flex flex-col">
              <span className="text-xs text-neutral-300">Get it on</span>{' '}
              <span className="text-base leading-5 font-semibold">Mobile app store</span>
            </span>
          </a>
        </li>
      </ul>
      <div className="mt-4 flex items-center justify-between gap-4 text-xs text-neutral-500">
        <p className="tabular-nums">Version 2.4.0 · 84 MB</p>
        <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Other platforms</a>
      </div>
    </div>
  )
}
