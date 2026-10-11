export default function PricingTwoPlans() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="mx-auto max-w-xl text-center">
          <p className="text-sm font-medium text-neutral-500">Section label</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for two clear plan choices</h2>
          <p className="mt-4 text-lg text-pretty text-neutral-600">
            One sentence that explains the difference between the starting plan and the expanded option.
          </p>
        </header>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <article className="flex flex-col rounded-lg border p-6 border-neutral-200 bg-white">
            <p className="text-sm font-medium text-neutral-500">Starting scope</p>
            <h3 className="mt-3 text-lg font-semibold">Entry plan</h3>
            <p className="mt-6 flex flex-wrap items-baseline gap-2">
              <span className="text-5xl font-semibold tracking-tight">$19</span>
              <span className="text-sm text-neutral-500">/month</span>
            </p>
            <p className="mt-4 text-sm text-neutral-600">A sentence that names the audience and core access included in this plan.</p>
            <ul role="list" className="mt-6 mb-8 space-y-3 text-sm text-neutral-600">
              <li className="flex items-start gap-3">
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
                <span>Core access for the plan</span>
              </li>
              <li className="flex items-start gap-3">
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
                <span>Capacity or usage allowance</span>
              </li>
              <li className="flex items-start gap-3">
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
                <span>Collaboration benefit for members</span>
              </li>
              <li className="flex items-start gap-3">
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
                <span>Support coverage and limits</span>
              </li>
            </ul>
            <a
              href="#"
              aria-label="Choose entry plan"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-auto w-full"
            >
              Choose plan
            </a>
          </article>
          <article className="flex flex-col rounded-lg border p-6 border-neutral-900 bg-neutral-900 text-white">
            <p className="text-sm font-medium text-neutral-300">Broader scope</p>
            <h3 className="mt-3 text-lg font-semibold">Expanded plan</h3>
            <p className="mt-6 flex flex-wrap items-baseline gap-2">
              <span className="text-5xl font-semibold tracking-tight">$49</span>
              <span className="text-sm text-neutral-300">/month</span>
            </p>
            <p className="mt-4 text-sm text-neutral-300">A sentence that explains who needs the additional capacity and support in this plan.</p>
            <ul role="list" className="mt-6 mb-8 space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-3">
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
                <span>Core access for the plan</span>
              </li>
              <li className="flex items-start gap-3">
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
                <span>Capacity or usage allowance</span>
              </li>
              <li className="flex items-start gap-3">
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
                <span>Collaboration benefit for members</span>
              </li>
              <li className="flex items-start gap-3">
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
                <span>Support coverage and limits</span>
              </li>
            </ul>
            <a
              href="#"
              aria-label="Choose expanded plan"
              className="inline-flex h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-auto w-full"
            >
              Choose plan
            </a>
          </article>
        </div>
        <p className="mt-8 text-center text-sm text-neutral-500">
          A short note about changing plans.{' '}
          <a
            href="#"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Compare details
          </a>
        </p>
      </div>
    </section>
  )
}
