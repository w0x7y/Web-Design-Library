export default function PricingSeatPaymentBreakdown() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            Understand the first payment
          </h2>
          <p className="text-lg text-pretty text-neutral-600 mt-4 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
        </header>
        <div className="mt-10 grid overflow-hidden rounded-lg border border-neutral-200 md:grid-cols-[1fr_2fr]">
          <aside className="bg-neutral-50 p-6">
            <p className="text-sm font-medium text-neutral-500">
              Example for five seats
            </p>
            <p className="text-3xl font-semibold tracking-tight mt-3">
              $144
              <span className="ml-2 text-sm font-normal text-neutral-500">
                first payment
              </span>
            </p>
            <p className="text-sm text-neutral-600 mt-3">
              Then $95 each month.
            </p>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-6"
            >
              Choose this setup
            </a>
          </aside>
          <div className="p-6">
            <h3 className="text-lg font-semibold">Payment breakdown</h3>
            <dl className="mt-5 divide-y divide-neutral-200 text-sm">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 py-4">
                <dt className="text-neutral-600">5 seats at $19 per month</dt>
                <dd className="font-mono font-medium">$95</dd>
              </div>
              <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 py-4">
                <dt className="text-neutral-600">One-time setup</dt>
                <dd className="font-mono font-medium">$49</dd>
              </div>
              <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 py-4">
                <dt className="text-neutral-600">First payment total</dt>
                <dd className="font-mono font-medium">$144</dd>
              </div>
            </dl>
            <p className="text-sm text-neutral-600 mt-4">
              A brief note describing when recurring charges begin.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
