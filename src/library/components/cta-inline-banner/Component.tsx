export default function CtaInlineBanner() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="flex flex-col gap-8 rounded-lg bg-neutral-900 px-8 py-10 text-white lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="min-w-0">
            <h2 className="text-3xl font-semibold tracking-tight text-balance">Heading that invites the next step</h2>
            <p className="mt-3 text-base text-pretty text-neutral-300">One sentence that explains the value of acting now.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors bg-white text-neutral-900 hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ">Primary action</a>
            <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors border border-white bg-transparent text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ">Secondary action</a>
          </div>
        </div>
      </div>
    </section>
  )
}
