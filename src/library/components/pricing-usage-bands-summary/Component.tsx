export default function PricingUsageBandsSummary() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            Pay for the usage you need
          </h2>
          <p className="text-lg text-pretty text-neutral-600 mt-4 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
        </header>
        <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div>
            <h3 className="text-lg font-semibold">Usage rates</h3>
            <table className="mt-4 w-full table-fixed text-sm">
              <thead className="border-b border-neutral-200">
                <tr>
                  <th scope="col" className="py-3 text-left font-medium">
                    Monthly units
                  </th>
                  <th scope="col" className="py-3 text-right font-medium">
                    Rate per unit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <th scope="row" className="py-4 text-left font-normal">
                    First 1,000
                  </th>
                  <td className="py-4 text-right font-mono">$0.04</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <th scope="row" className="py-4 text-left font-normal">
                    Next 4,000
                  </th>
                  <td className="py-4 text-right font-mono">$0.03</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <th scope="row" className="py-4 text-left font-normal">
                    Above 5,000
                  </th>
                  <td className="py-4 text-right font-mono">$0.02</td>
                </tr>
              </tbody>
            </table>
          </div>
          <aside className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
            <p className="text-sm font-medium text-neutral-500">
              Example monthly bill
            </p>
            <p className="text-3xl font-semibold tracking-tight mt-3">
              $100
              <span className="ml-2 text-sm font-normal text-neutral-500">
                /month
              </span>
            </p>
            <dl className="space-y-3 text-sm mt-6">
              <div className="flex justify-between gap-4">
                <dt className="text-neutral-600">First 1,000 units</dt>
                <dd className="font-medium">$40</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-neutral-600">Next 2,000 units</dt>
                <dd className="font-medium">$60</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-neutral-600">Example total units</dt>
                <dd className="font-medium">3,000</dd>
              </div>
            </dl>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-6 w-full"
            >
              Start with usage
            </a>
            <p className="text-sm text-neutral-600 mt-3">
              Charges follow actual usage.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
