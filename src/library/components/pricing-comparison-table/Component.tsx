export default function PricingComparisonTable() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for comparing plan details</h2>
          <p className="text-lg text-pretty text-neutral-600">A short explanation of the limits and inclusions that help readers choose the right plan.</p>
        </header>
        <div
          tabIndex={0}
          role="region"
          aria-label="Plan comparison, scroll horizontally to view all plans"
          className="relative mt-10 overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          <table className="w-full min-w-[640px] table-fixed">
            <caption className="sr-only">Plan prices, usage limits, collaboration features and support</caption>
            <thead>
              <tr>
                <th scope="col" className="sticky left-0 z-10 w-[28%] bg-white p-4 text-left text-sm font-semibold">
                  Compare features
                </th>
                <th scope="col" className="w-[24%] p-4 text-left align-top">
                  <p className="text-base font-semibold">Entry plan</p>
                  <p className="mt-4 text-3xl font-semibold tracking-tight">$19</p>
                  <p className="mt-1 text-sm text-neutral-500">/month</p>
                  <a
                    href="#"
                    aria-label="Choose entry plan"
                    className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 w-full"
                  >
                    Choose plan
                  </a>
                </th>
                <th scope="col" className="w-[24%] p-4 text-left align-top bg-neutral-50">
                  <p className="text-base font-semibold">Expanded plan</p>
                  <p className="mt-4 text-3xl font-semibold tracking-tight">$49</p>
                  <p className="mt-1 text-sm text-neutral-500">/month</p>
                  <a
                    href="#"
                    aria-label="Choose expanded plan"
                    className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 w-full"
                  >
                    Choose plan
                  </a>
                </th>
                <th scope="col" className="w-[24%] p-4 text-left align-top">
                  <p className="text-base font-semibold">Complete plan</p>
                  <p className="mt-4 text-3xl font-semibold tracking-tight">$99</p>
                  <p className="mt-1 text-sm text-neutral-500">/month</p>
                  <a
                    href="#"
                    aria-label="Choose complete plan"
                    className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 w-full"
                  >
                    Choose plan
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colSpan={4} scope="colgroup" className="border-y border-neutral-200 bg-neutral-50 px-4 py-3 text-left text-sm font-semibold">
                  Usage
                </th>
              </tr>
              <tr>
                <th scope="row" className="sticky left-0 z-10 border-b border-neutral-200 bg-white px-4 py-4 text-left text-sm font-medium">
                  Active spaces
                </th>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600">5</td>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600 bg-neutral-50">25</td>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600">Unlimited</td>
              </tr>
              <tr>
                <th scope="row" className="sticky left-0 z-10 border-b border-neutral-200 bg-white px-4 py-4 text-left text-sm font-medium">
                  Monthly allowance
                </th>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600">100</td>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600 bg-neutral-50">1,000</td>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600">10,000</td>
              </tr>
              <tr>
                <th scope="row" className="sticky left-0 z-10 border-b border-neutral-200 bg-white px-4 py-4 text-left text-sm font-medium">
                  Saved history
                </th>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600">30 days</td>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600 bg-neutral-50">1 year</td>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600">Unlimited</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th colSpan={4} scope="colgroup" className="border-y border-neutral-200 bg-neutral-50 px-4 py-3 text-left text-sm font-semibold">
                  Collaboration
                </th>
              </tr>
              <tr>
                <th scope="row" className="sticky left-0 z-10 border-b border-neutral-200 bg-white px-4 py-4 text-left text-sm font-medium">
                  Members
                </th>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600">1</td>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600 bg-neutral-50">5</td>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600">25</td>
              </tr>
              <tr>
                <th scope="row" className="sticky left-0 z-10 border-b border-neutral-200 bg-white px-4 py-4 text-left text-sm font-medium">
                  Shared access
                </th>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600">
                  <span aria-hidden="true">—</span>
                  <span className="sr-only">Not included</span>
                </td>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600 bg-neutral-50">
                  <span className="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5 shrink-0"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                    <span className="sr-only">Included</span>
                  </span>
                </td>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600">
                  <span className="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5 shrink-0"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                    <span className="sr-only">Included</span>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="sticky left-0 z-10 border-b border-neutral-200 bg-white px-4 py-4 text-left text-sm font-medium">
                  Custom permissions
                </th>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600">
                  <span aria-hidden="true">—</span>
                  <span className="sr-only">Not included</span>
                </td>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600 bg-neutral-50">
                  <span aria-hidden="true">—</span>
                  <span className="sr-only">Not included</span>
                </td>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600">
                  <span className="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5 shrink-0"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                    <span className="sr-only">Included</span>
                  </span>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th colSpan={4} scope="colgroup" className="border-y border-neutral-200 bg-neutral-50 px-4 py-3 text-left text-sm font-semibold">
                  Support
                </th>
              </tr>
              <tr>
                <th scope="row" className="sticky left-0 z-10 border-b border-neutral-200 bg-white px-4 py-4 text-left text-sm font-medium">
                  Response level
                </th>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600">Standard</td>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600 bg-neutral-50">Priority</td>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600">Dedicated</td>
              </tr>
              <tr>
                <th scope="row" className="sticky left-0 z-10 border-b border-neutral-200 bg-white px-4 py-4 text-left text-sm font-medium">
                  Setup guidance
                </th>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600">
                  <span aria-hidden="true">—</span>
                  <span className="sr-only">Not included</span>
                </td>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600 bg-neutral-50">
                  <span className="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5 shrink-0"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                    <span className="sr-only">Included</span>
                  </span>
                </td>
                <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600">
                  <span className="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5 shrink-0"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                    <span className="sr-only">Included</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
