export default function HeroMediaBand() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-0">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl lg:col-span-7">Headline that gives the wide image its context</h1>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg text-pretty text-neutral-600">Supporting copy that introduces what the image shows and why it matters.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Primary action</a>
              <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Secondary action</a>
            </div>
          </div>
        </div>
        <div role="img" aria-label="Image placeholder: panoramic image or wide product view" className="mt-12 flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 sm:aspect-video lg:aspect-[21/9]">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </div>
        <dl className="mt-6 grid gap-0 sm:grid-cols-3 sm:gap-6">
          <div className="border-t border-neutral-200 py-4 sm:border-t-0 sm:py-0">
            <dt className="text-sm text-neutral-500">Scope or coverage</dt>
            <dd className="mt-2 text-base font-medium">Value that defines the range</dd>
          </div>
          <div className="border-t border-neutral-200 py-4 sm:border-t-0 sm:border-l sm:py-0 sm:pl-6">
            <dt className="text-sm text-neutral-500">Format or delivery</dt>
            <dd className="mt-2 text-base font-medium">Value that describes the format</dd>
          </div>
          <div className="border-t border-neutral-200 py-4 sm:border-t-0 sm:border-l sm:py-0 sm:pl-6">
            <dt className="text-sm text-neutral-500">Timing or availability</dt>
            <dd className="mt-2 text-base font-medium">Value that sets expectations</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
