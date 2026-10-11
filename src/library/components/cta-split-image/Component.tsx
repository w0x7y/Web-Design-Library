export default function CtaSplitImage() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="overflow-hidden rounded-lg bg-neutral-50 lg:grid lg:grid-cols-2">
          <div role="img" aria-label="Image placeholder: image that supports the offer" className="flex aspect-[4/3] items-center justify-center bg-neutral-100 text-neutral-400 sm:aspect-video lg:aspect-auto">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </div>
          <div className="p-6 lg:p-12">
            <p className="text-sm font-medium text-neutral-500">Eyebrow for the featured invitation</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that introduces the next opportunity</h2>
            <p className="mt-6 text-lg text-pretty text-neutral-600">Supporting copy that connects the image to the offer and explains who the next step is for.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Primary action</a>
              <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Secondary action</a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-6">
              <p className="text-base font-medium">Starting at $29</p>
              <a href="#" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Read the details</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
