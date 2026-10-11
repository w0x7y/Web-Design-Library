export default function SettingsBillingOverview() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <header className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Billing overview</h1>
            <p className="mt-4 text-lg text-pretty text-neutral-600">
              Review your current plan, payment method and invoices.
            </p>
          </div>
          <span className="shrink-0 inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
            Renews Mar 14
          </span>
        </header>
        <div className="mt-10 grid gap-6 lg:grid-cols-[3fr_2fr]">
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-semibold">Current plan</h2>
            <p className="mt-6 text-sm font-medium text-neutral-500">Plan name</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight tabular-nums">
              $29 <span className="text-sm font-normal text-neutral-600">/ month</span>
            </p>
            <div className="mt-6">
              <p className="text-sm text-neutral-600">8 of 10 seats</p>
              <div
                aria-hidden="true"
                className="mt-2 h-2 overflow-hidden rounded-full border border-transparent bg-neutral-200 forced-colors:border-[ButtonText]"
              >
                <div className="h-full w-4/5 rounded-full bg-neutral-900 forced-colors:bg-[CanvasText]" />
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Change plan
              </a>
              <a
                href="#"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Compare plans
              </a>
            </div>
          </div>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-semibold">Payment method</h2>
            <div className="mt-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <path d="M3 5h18v14H3zM3 9h18M7 15h3" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-medium">Card ending 4242</p>
                <p className="mt-1 text-sm text-neutral-500">Expires 08 / 2028</p>
              </div>
            </div>
            <dl className="mt-6">
              <dt className="text-sm text-neutral-500">Billing email</dt>
              <dd className="mt-1 break-all text-sm">billing@example.com</dd>
            </dl>
            <div className="mt-8">
              <a
                href="#"
                aria-label="Update payment method"
                className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Update
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-lg font-semibold">Invoices</h2>
          <div
            role="region"
            tabIndex={0}
            aria-label="Invoice history"
            className="mt-4 overflow-x-auto rounded-lg border border-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            <table className="w-full min-w-[40rem]">
              <caption className="sr-only">Monthly invoices, amounts and payment status</caption>
              <thead className="bg-neutral-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                    Date
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                    Description
                  </th>
                  <th scope="col" className="px-4 py-3 text-right text-sm font-medium text-neutral-600">
                    Amount
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                    Status
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-neutral-200">
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-600">Mar 14, 2026</td>
                  <th scope="row" className="px-4 py-4 text-left text-sm font-medium">
                    Monthly subscription
                  </th>
                  <td className="px-4 py-4 text-right text-sm tabular-nums">$29.00</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                      Paid
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <a
                      href="#"
                      aria-label="Download invoice for March 14, 2026"
                      className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr className="border-t border-neutral-200">
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-600">Feb 14, 2026</td>
                  <th scope="row" className="px-4 py-4 text-left text-sm font-medium">
                    Monthly subscription
                  </th>
                  <td className="px-4 py-4 text-right text-sm tabular-nums">$29.00</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                      Paid
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <a
                      href="#"
                      aria-label="Download invoice for February 14, 2026"
                      className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr className="border-t border-neutral-200">
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-600">Jan 14, 2026</td>
                  <th scope="row" className="px-4 py-4 text-left text-sm font-medium">
                    Monthly subscription
                  </th>
                  <td className="px-4 py-4 text-right text-sm tabular-nums">$29.00</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                      Paid
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <a
                      href="#"
                      aria-label="Download invoice for January 14, 2026"
                      className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr className="border-t border-neutral-200">
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-600">Dec 14, 2025</td>
                  <th scope="row" className="px-4 py-4 text-left text-sm font-medium">
                    Monthly subscription
                  </th>
                  <td className="px-4 py-4 text-right text-sm tabular-nums">$29.00</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                      Paid
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <a
                      href="#"
                      aria-label="Download invoice for December 14, 2025"
                      className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
