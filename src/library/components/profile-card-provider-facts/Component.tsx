export default function ProfileCardProviderFacts() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white text-neutral-900 sm:w-80">
      <div className="flex gap-4 p-5">
        <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">CM</span>
        <div className="min-w-0">
          <h2 className="flex items-center gap-1.5 text-base font-semibold">
            Casey Morgan
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0"><path d="M3.9 8.6a4 4 0 0 1 4.7-4.7 4 4 0 0 1 6.8 0 4 4 0 0 1 4.7 4.7 4 4 0 0 1 0 6.8 4 4 0 0 1-4.7 4.7 4 4 0 0 1-6.8 0 4 4 0 0 1-4.7-4.7 4 4 0 0 1 0-6.8Z" /><path d="m9 12 2 2 4-4" /></svg>
            <span className="sr-only">, verified</span>
          </h2>
          <p className="text-sm text-neutral-600">Service or specialty</p>
          <p className="mt-2 flex items-center gap-1.5 text-sm">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 fill-current"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z" /></svg>
            <span className="font-medium"><span className="sr-only">Rated </span>4.9<span className="sr-only"> out of 5</span></span>
            <span className="text-neutral-500">(128 reviews)</span>
          </p>
        </div>
      </div>
      <dl className="grid grid-cols-2 border-y border-neutral-200">
        <div className="px-5 py-3">
          <dt className="text-xs text-neutral-500">Hourly rate</dt>
          <dd className="text-base font-semibold">$85<span className="text-sm font-normal text-neutral-500"> /hour</span></dd>
        </div>
        <div className="border-l border-neutral-200 px-5 py-3">
          <dt className="text-xs text-neutral-500">Typical response</dt>
          <dd className="text-base font-semibold">2 hours</dd>
        </div>
      </dl>
      <div className="grid grid-cols-2 gap-3 p-5">
        <a href="#" aria-label="Book Casey Morgan" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Book</a>
        <button type="button" aria-label="Message Casey Morgan" className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Message</button>
      </div>
    </article>
  )
}
