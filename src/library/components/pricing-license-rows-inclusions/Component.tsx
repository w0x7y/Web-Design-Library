export default function PricingLicenseRowsInclusions() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            Choose the appropriate license
          </h2>
          <p className="text-lg text-pretty text-neutral-600 mt-4 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
        </header>
        <div className="mt-10 grid gap-8 md:grid-cols-[2fr_1fr]">
          <fieldset className="min-w-0">
            <legend className="text-lg font-semibold">License options</legend>
            <label className="flex cursor-pointer items-start gap-4 border-b border-neutral-200 py-5">
              <input
                type="radio"
                name="pricing-license-rows-choice"
                value="0"
                defaultChecked
                className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              />
              <span className="min-w-0 flex-1">
                <span className="block text-base font-semibold">
                  Individual license
                </span>
                <span className="mt-1 block text-sm text-neutral-600">
                  Use by one named person.
                </span>
              </span>
              <span className="text-lg font-semibold">$49</span>
            </label>
            <label className="flex cursor-pointer items-start gap-4 border-b border-neutral-200 py-5">
              <input
                type="radio"
                name="pricing-license-rows-choice"
                value="1"
                className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              />
              <span className="min-w-0 flex-1">
                <span className="block text-base font-semibold">
                  Team license
                </span>
                <span className="mt-1 block text-sm text-neutral-600">
                  Use by up to five people.
                </span>
              </span>
              <span className="text-lg font-semibold">$149</span>
            </label>
            <label className="flex cursor-pointer items-start gap-4 border-b border-neutral-200 py-5">
              <input
                type="radio"
                name="pricing-license-rows-choice"
                value="2"
                className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              />
              <span className="min-w-0 flex-1">
                <span className="block text-base font-semibold">
                  Extended license
                </span>
                <span className="mt-1 block text-sm text-neutral-600">
                  Use by a larger group.
                </span>
              </span>
              <span className="text-lg font-semibold">$299</span>
            </label>
          </fieldset>
          <aside className="rounded-lg border border-neutral-200 p-6">
            <h3 className="text-lg font-semibold">Every license includes</h3>
            <ul role="list" className="space-y-3 mt-5">
              <li className="flex items-start gap-3 text-sm text-neutral-600">
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-neutral-900"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </span>
                <span>Complete set of included files</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-600">
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-neutral-900"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </span>
                <span>Updates for twelve months</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-600">
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-neutral-900"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </span>
                <span>A clear usage agreement</span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-6 w-full"
            >
              Review license
            </a>
            <p className="text-sm text-neutral-600 mt-3">
              One payment. No recurring charge.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
