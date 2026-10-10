export default function PricingThreeTiers() {
  return (
    <section className="group bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that makes plan choice clear</h2>
          <p className="mt-4 text-lg text-pretty text-neutral-600">A short introduction that explains how the plans differ and who each level is for.</p>
        </header>
        <fieldset className="mx-auto mt-8 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-full border border-neutral-300 p-1">
          <legend className="sr-only">Billing period</legend>
          <label className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full border border-transparent px-4 text-sm font-medium transition-colors hover:bg-neutral-50 has-[:checked]:border-neutral-900 has-[:checked]:bg-neutral-900 has-[:checked]:text-white has-[:checked]:underline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900">
            <input
              id="pricing-three-tiers-monthly"
              type="radio"
              name="pricing-three-tiers-billing"
              defaultChecked
              className="sr-only focus-visible:outline-hidden"
            />
            Monthly
          </label>
          <label className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full border border-transparent px-4 text-sm font-medium transition-colors hover:bg-neutral-50 has-[:checked]:border-neutral-900 has-[:checked]:bg-neutral-900 has-[:checked]:text-white has-[:checked]:underline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900">
            <input id="pricing-three-tiers-yearly" type="radio" name="pricing-three-tiers-billing" className="sr-only focus-visible:outline-hidden" />
            Yearly<span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium ml-2">Save 20%</span>
          </label>
        </fieldset>
        <div className="mx-auto mt-10 grid max-w-md gap-6 lg:max-w-none lg:grid-cols-3">
          <article className="rounded-lg border border-neutral-200 bg-white p-6">
            <div className="flex min-h-7 items-start"></div>
            <h3 className="mt-3 text-lg font-semibold">Entry plan</h3>
            <p className="mt-2 text-sm text-neutral-600">A description of the starting scope.</p>
            <p className="mt-6 flex flex-wrap items-baseline gap-2">
              <span className="text-5xl font-semibold tracking-tight group-has-[#pricing-three-tiers-yearly:checked]:hidden">$19</span>
              <span className="hidden text-5xl font-semibold tracking-tight group-has-[#pricing-three-tiers-yearly:checked]:inline">$15.20</span>
              <span className="text-sm text-neutral-500">/month</span>
            </p>
            <div className="mt-2 min-h-10 text-sm text-neutral-500">
              <p className="group-has-[#pricing-three-tiers-yearly:checked]:hidden">Billed monthly</p>
              <p className="hidden group-has-[#pricing-three-tiers-yearly:checked]:block">Billed $182.40 yearly</p>
            </div>
            <a
              href="#"
              aria-label="Choose entry plan"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-6 w-full"
            >
              Choose plan
            </a>
            <ul role="list" className="mt-6 border-t border-neutral-200 pt-6 space-y-3 text-sm text-neutral-600">
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
                <span>Primary capability included</span>
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
                <span>Access allowance for this tier</span>
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
                <span>Support level for the plan</span>
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
                <span>Additional benefit or limit</span>
              </li>
            </ul>
          </article>
          <article className="rounded-lg border border-neutral-900 bg-white p-6 shadow-lg">
            <div className="flex min-h-7 items-start">
              <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Most popular</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold">Expanded plan</h3>
            <p className="mt-2 text-sm text-neutral-600">A description of the additional access.</p>
            <p className="mt-6 flex flex-wrap items-baseline gap-2">
              <span className="text-5xl font-semibold tracking-tight group-has-[#pricing-three-tiers-yearly:checked]:hidden">$49</span>
              <span className="hidden text-5xl font-semibold tracking-tight group-has-[#pricing-three-tiers-yearly:checked]:inline">$39.20</span>
              <span className="text-sm text-neutral-500">/month</span>
            </p>
            <div className="mt-2 min-h-10 text-sm text-neutral-500">
              <p className="group-has-[#pricing-three-tiers-yearly:checked]:hidden">Billed monthly</p>
              <p className="hidden group-has-[#pricing-three-tiers-yearly:checked]:block">Billed $470.40 yearly</p>
            </div>
            <a
              href="#"
              aria-label="Choose expanded plan"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-6 w-full"
            >
              Choose plan
            </a>
            <ul role="list" className="mt-6 border-t border-neutral-200 pt-6 space-y-3 text-sm text-neutral-600">
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
                <span>Primary capability included</span>
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
                <span>Access allowance for this tier</span>
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
                <span>Support level for the plan</span>
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
                <span>Additional benefit or limit</span>
              </li>
            </ul>
          </article>
          <article className="rounded-lg border border-neutral-200 bg-white p-6">
            <div className="flex min-h-7 items-start"></div>
            <h3 className="mt-3 text-lg font-semibold">Complete plan</h3>
            <p className="mt-2 text-sm text-neutral-600">A description of the widest coverage.</p>
            <p className="mt-6 flex flex-wrap items-baseline gap-2">
              <span className="text-5xl font-semibold tracking-tight group-has-[#pricing-three-tiers-yearly:checked]:hidden">$99</span>
              <span className="hidden text-5xl font-semibold tracking-tight group-has-[#pricing-three-tiers-yearly:checked]:inline">$79.20</span>
              <span className="text-sm text-neutral-500">/month</span>
            </p>
            <div className="mt-2 min-h-10 text-sm text-neutral-500">
              <p className="group-has-[#pricing-three-tiers-yearly:checked]:hidden">Billed monthly</p>
              <p className="hidden group-has-[#pricing-three-tiers-yearly:checked]:block">Billed $950.40 yearly</p>
            </div>
            <a
              href="#"
              aria-label="Choose complete plan"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-6 w-full"
            >
              Choose plan
            </a>
            <ul role="list" className="mt-6 border-t border-neutral-200 pt-6 space-y-3 text-sm text-neutral-600">
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
                <span>Primary capability included</span>
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
                <span>Access allowance for this tier</span>
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
                <span>Support level for the plan</span>
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
                <span>Additional benefit or limit</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
