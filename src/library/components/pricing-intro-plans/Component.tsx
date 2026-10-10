export default function PricingIntroPlans() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-medium text-neutral-500">Section label</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that explains the plan choice</h2>
            <p className="mt-4 text-lg text-pretty text-neutral-600">
              A short introduction that describes the shared offer and helps readers choose their level of access.
            </p>
            <a
              href="#"
              className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-6 inline-block"
            >
              Talk to sales
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="rounded-lg border border-neutral-200 bg-white p-6 flex flex-col">
              <div className="flex min-h-7 items-start"></div>
              <h3 className="mt-3 text-lg font-semibold">Entry plan</h3>
              <p className="mt-2 text-sm text-neutral-600">A short description of the starting scope.</p>
              <p className="mt-6 flex flex-wrap items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight">$19</span>
                <span className="text-sm text-neutral-500">/month</span>
              </p>
              <p className="mt-2 text-sm text-neutral-500">Billed monthly</p>
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
                  <span>Included access and allowance</span>
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
                  <span>Core capability for this tier</span>
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
                  <span>Collaboration scope for members</span>
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
                  <span>Support level and coverage</span>
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
            <article className="rounded-lg border border-neutral-200 bg-white p-6 flex flex-col">
              <div className="flex min-h-7 items-start">
                <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Recommended</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold">Expanded plan</h3>
              <p className="mt-2 text-sm text-neutral-600">A short description of the additional capacity.</p>
              <p className="mt-6 flex flex-wrap items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight">$49</span>
                <span className="text-sm text-neutral-500">/month</span>
              </p>
              <p className="mt-2 text-sm text-neutral-500">Billed monthly</p>
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
                  <span>Included access and allowance</span>
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
                  <span>Core capability for this tier</span>
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
                  <span>Collaboration scope for members</span>
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
                  <span>Support level and coverage</span>
                </li>
              </ul>
              <a
                href="#"
                aria-label="Choose expanded plan"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-auto w-full"
              >
                Choose plan
              </a>
            </article>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-200 pt-8">
          <p className="text-sm font-semibold">Every plan includes</p>
          <ul role="list" className="mt-6 grid gap-6 md:grid-cols-3">
            <li className="flex items-start gap-4">
              <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
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
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M8 9h8M8 13h5" />
                </svg>
              </span>
              <div>
                <h3 className="text-base font-semibold">Access included in every plan</h3>
                <p className="mt-2 text-sm text-neutral-600">A sentence that defines the shared scope of access.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
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
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 9a3 3 0 0 1 6 0c0 2-3 2-3 4M12 17h.01" />
                </svg>
              </span>
              <div>
                <h3 className="text-base font-semibold">Help available to all members</h3>
                <p className="mt-2 text-sm text-neutral-600">A sentence that describes common support and guidance.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
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
                  <path d="M4 7h16M4 17h16M16 3l4 4-4 4M8 13l-4 4 4 4" />
                </svg>
              </span>
              <div>
                <h3 className="text-base font-semibold">Flexibility across plan levels</h3>
                <p className="mt-2 text-sm text-neutral-600">A sentence that explains how changing a plan works.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
