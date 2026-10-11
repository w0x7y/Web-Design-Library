export default function HeroHeadlineStats() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-0">
          <div className="lg:col-span-8">
            <p className="text-sm font-medium text-neutral-500">Eyebrow for the main claim</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">Headline that puts the outcome first</h1>
            <p className="mt-6 max-w-xl text-lg text-pretty text-neutral-600">Supporting copy that connects the main promise to the figures and the next action.</p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Primary action</a>
              <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Secondary action</a>
            </div>
          </div>
          <aside className="border-l border-neutral-200 pl-6 lg:col-span-3 lg:col-start-10">
          <p className="text-base text-neutral-600">Supporting note that explains how the figures were measured. Add context that helps readers assess the claim.</p>
          <a href="#" className="mt-4 inline-block text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Read the context</a>
        </aside>
      </div>
      <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-neutral-200 pt-8 lg:grid-cols-4">
        <div className="flex flex-col">
          <dt className="text-sm text-neutral-500">Audience or usage count</dt>
          <dd className="order-first mb-2 text-4xl font-semibold tracking-tight">1,284</dd>
        </div>
        <div className="flex flex-col">
          <dt className="text-sm text-neutral-500">Measured outcome</dt>
          <dd className="order-first mb-2 text-4xl font-semibold tracking-tight">98%</dd>
        </div>
        <div className="flex flex-col">
          <dt className="text-sm text-neutral-500">Typical response time</dt>
          <dd className="order-first mb-2 text-4xl font-semibold tracking-tight">24h</dd>
        </div>
        <div className="flex flex-col">
          <dt className="text-sm text-neutral-500">Range or coverage count</dt>
          <dd className="order-first mb-2 text-4xl font-semibold tracking-tight">32</dd>
        </div>
      </dl>
    </div>
  </section>
  )
}
