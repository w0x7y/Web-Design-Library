export default function ButtonsDirectionalLinks() {
  return (
    <nav className="grid w-72 gap-3 text-neutral-900 sm:w-[32rem] sm:grid-cols-2" aria-label="Adjacent items"><a className="flex min-h-24 items-center gap-3 rounded-md border border-neutral-300 bg-white p-4 text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" href="#"><svg className="size-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5m6-6-6 6 6 6" /></svg>
    <div className="min-w-0"><span className="block text-xs text-neutral-500">Previous</span>
    <span className="mt-1 block text-sm font-medium">Previous item title</span></div></a>
    <a className="flex min-h-24 items-center gap-3 rounded-md border border-neutral-300 bg-white p-4 text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" href="#"><svg className="size-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
    <div className="min-w-0"><span className="block text-xs text-neutral-500">Next</span>
    <span className="mt-1 block text-sm font-medium">Next item title</span></div></a></nav>
  )
}
