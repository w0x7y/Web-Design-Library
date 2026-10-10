export default function ProfileCardCoverAvatar() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white text-neutral-900 sm:w-80">
      <div role="img" aria-label="Image placeholder: profile cover photo" className="flex h-24 items-center justify-center rounded-t-lg bg-neutral-100 text-neutral-400"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg></div>
      <div className="p-5">
        <div className="-mt-14 flex items-end justify-between gap-3">
          <span aria-hidden="true" className="flex size-18 shrink-0 items-center justify-center rounded-full border-4 border-white bg-neutral-200 text-sm font-medium text-neutral-600">MC</span>
          <button type="button" aria-label="Message Morgan Chen" className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Message</button>
        </div>
        <h2 className="mt-3 text-lg font-semibold">Morgan Chen</h2>
        <p className="text-sm text-neutral-500">Design lead</p>
        <p className="mt-2 text-sm text-neutral-600">Short biography describing focus and approach.</p>
        <ul role="list" className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-500">
          <li className="flex items-center gap-1.5"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>UTC+1</li>
          <li className="flex items-center gap-1.5"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></svg>Joined Mar 2024</li>
        </ul>
      </div>
    </article>
  )
}

