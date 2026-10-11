export default function CtaOverlayMedia() {
  return (
    <section className="relative isolate bg-neutral-950 text-white">
      <div role="img" aria-label="Image placeholder: full-width invitation background" className="pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-100 text-neutral-400">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-neutral-950/70"></div>
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Heading that invites a clear next step</h2>
          <p className="mt-6 max-w-lg text-lg text-pretty text-neutral-300">Supporting copy that explains the invitation and why the practical details matter.</p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 lg:col-span-5">
          <dl>
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-neutral-200 py-4">
              <dt className="text-sm text-neutral-600">Date</dt>
              <dd className="text-sm font-medium"><time dateTime="2027-03-14">Mar 14, 2027</time></dd>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-neutral-200 py-4">
              <dt className="text-sm text-neutral-600">Duration</dt>
              <dd className="text-sm font-medium">90 minutes</dd>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-neutral-200 py-4">
              <dt className="text-sm text-neutral-600">Price</dt>
              <dd className="text-sm font-medium">$29</dd>
            </div>
          </dl>
          <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-6 w-full">Reserve a place</a>
        </div>
      </div>
    </section>
  )
}
