export default function HeroBentoTiles() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-6 sm:col-span-2 sm:p-8 lg:row-span-2">
            <p className="text-sm font-medium text-neutral-500">Eyebrow for the main idea</p>
            <div className="mt-10 lg:mt-auto lg:pt-10">
              <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">Headline that brings the main idea together</h1>
              <p className="mt-6 max-w-xl text-lg text-pretty text-neutral-600">Supporting copy that connects the surrounding evidence to the main outcome.</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Primary action</a>
                <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Secondary action</a>
              </div>
            </div>
          </div>
          <div role="img" aria-label="Image placeholder: supporting product detail" className="flex aspect-[4/3] items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 text-neutral-400">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-white p-6">
            <p className="text-4xl font-semibold tracking-tight">98%</p>
            <h2 className="mt-3 text-base font-semibold">Label for the measured outcome</h2>
            <p className="mt-2 text-sm text-neutral-600">A short explanation of the figure and the scope of the measurement.</p>
          </div>
          <div role="img" aria-label="Image placeholder: wide product overview" className="flex aspect-[4/3] items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 text-neutral-400 sm:col-span-2 sm:aspect-video lg:aspect-[21/9]">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </div>
          <div className="flex flex-col justify-end rounded-lg border border-neutral-900 bg-neutral-900 p-6 text-white sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-semibold">Short callout that names a supporting benefit</p>
            <a href="#" className="mt-4 self-start text-sm font-medium underline underline-offset-4 hover:text-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Explore the details</a>
          </div>
        </div>
      </div>
    </section>
  )
}
