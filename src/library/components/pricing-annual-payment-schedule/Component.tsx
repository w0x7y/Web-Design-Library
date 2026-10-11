export default function PricingAnnualPaymentSchedule() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            One annual price with a clear schedule
          </h2>
          <p className="text-lg text-pretty text-neutral-600 mt-4 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
        </header>
        <div className="mt-10 grid gap-10 border-t border-neutral-200 pt-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-neutral-500">
              Annual access
            </p>
            <p className="mt-4 text-5xl font-semibold tracking-tight">$228</p>
            <p className="text-base text-neutral-600 mt-3">
              Equivalent to $19 per month.
            </p>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-6"
            >
              Choose annual access
            </a>
            <p className="text-sm text-neutral-600 mt-4">
              Access continues for twelve months.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Payment schedule</h3>
            <ol role="list" className="mt-6 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-sm font-medium">
                  1
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Today: $228</h3>
                  <p className="text-sm text-neutral-600 mt-1">
                    Your first twelve months begin.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-sm font-medium">
                  2
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Month 12: reminder</h3>
                  <p className="text-sm text-neutral-600 mt-1">
                    A short renewal notice arrives.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-sm font-medium">
                  3
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Year 2: $228</h3>
                  <p className="text-sm text-neutral-600 mt-1">
                    The same annual period renews.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
