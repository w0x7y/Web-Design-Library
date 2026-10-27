export default function ProfileCardBusinessContactRows() {
  return (
    <article className="grid w-72 overflow-hidden rounded-lg border border-neutral-200 bg-white text-neutral-900 sm:w-[28rem] sm:grid-cols-2">
      <div className="flex flex-col justify-between gap-4 border-b border-neutral-200 bg-neutral-50 p-5 sm:border-r sm:border-b-0">
        <div className="flex items-center gap-2 font-semibold"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M4 4h7v7H4V4M13 4h7v7h-7V4M4 13h7v7H4v-7M13 13h7v7h-7v-7" /></svg>Logo</div>
        <div>
          <h2 className="text-lg font-semibold">Alex Rivera</h2>
          <p className="text-sm text-neutral-600">Job title or role</p>
          <p className="text-sm text-neutral-500">Organization name</p>
        </div>
      </div>
      <div className="p-5">
        <ul role="list" className="grid gap-3 text-sm text-neutral-600">
          <li><a href="mailto:name@example.com" className="flex items-center gap-3 rounded-sm underline-offset-4 transition-colors hover:text-neutral-900 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-400"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>name@example.com</a></li>
          <li><a href="tel:+15550100199" className="flex items-center gap-3 rounded-sm underline-offset-4 transition-colors hover:text-neutral-900 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-400"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>+1 (555) 010-0199</a></li>
          <li><a href="#" className="flex items-center gap-3 rounded-sm underline-offset-4 transition-colors hover:text-neutral-900 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-400"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>example.com</a></li>
          <li className="flex items-center gap-3"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-400"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>City, Country</li>
        </ul>
        <a href="#" className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Save contact</a>
      </div>
    </article>
  )
}
