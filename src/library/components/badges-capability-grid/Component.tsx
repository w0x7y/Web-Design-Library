export default function BadgesCapabilityGrid() {
  return (
    <ul className="grid w-72 grid-cols-2 gap-3 text-neutral-900 sm:w-[26rem]" role="list"><li className="rounded-lg border border-neutral-200 bg-white p-3"><div className="flex items-center justify-between gap-2"><svg className="size-4 text-neutral-600" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 px-2">Available</span></div>
    <p className="mt-3 text-xs font-semibold text-neutral-900">Feature title</p></li>
    <li className="rounded-lg border border-neutral-200 bg-white p-3"><div className="flex items-center justify-between gap-2"><svg className="size-4 text-neutral-600" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m10 13 4-2m-6 4H6a4 4 0 0 1 0-8h4m4 0h4a4 4 0 0 1 0 8h-4" /></svg>
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 px-2">Included</span></div>
    <p className="mt-3 text-xs font-semibold text-neutral-900">Another feature</p></li>
    <li className="rounded-lg border border-neutral-200 bg-white p-3"><div className="flex items-center justify-between gap-2"><svg className="size-4 text-neutral-600" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H5v18h14V8ZM14 3v5h5M8 12h8M8 16h6" /></svg>
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 px-2">Optional</span></div>
    <p className="mt-3 text-xs font-semibold text-neutral-900">Third feature</p></li>
    <li className="rounded-lg border border-neutral-200 bg-white p-3"><div className="flex items-center justify-between gap-2"><svg className="size-4 text-neutral-600" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 px-2">Restricted</span></div>
    <p className="mt-3 text-xs font-semibold text-neutral-900">Final feature</p></li></ul>
  )
}
