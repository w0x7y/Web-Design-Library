export default function PricingBasePlanAddons() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            Start with a base and add what you need
          </h2>
          <p className="text-lg text-pretty text-neutral-600 mt-4 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
        </header>
        <article className="mt-10 grid gap-8 rounded-lg border border-neutral-200 p-6 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-medium text-neutral-500">Base plan</p>
            <p className="text-3xl font-semibold tracking-tight mt-3">
              $19
              <span className="ml-2 text-sm font-normal text-neutral-500">
                /month
              </span>
            </p>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-5"
            >
              Choose base plan
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Core access for a simple start
            </h3>
            <p className="text-base text-neutral-600 mt-3">
              A brief explanation of what the base plan gives you.
            </p>
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
                <span>Primary capability included</span>
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
                <span>Standard account access</span>
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
                <span>Basic support included</span>
              </li>
            </ul>
          </div>
        </article>
        <div className="mt-10">
          <h3 className="text-lg font-semibold">Optional additions</h3>
          <ul role="list" className="mt-5 grid gap-4 md:grid-cols-3">
            <li className="rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold">Extra capacity</h3>
              <p className="text-3xl font-semibold tracking-tight mt-3">
                $9
                <span className="ml-2 text-sm font-normal text-neutral-500">
                  /month
                </span>
              </p>
              <p className="text-sm text-neutral-600 mt-3">
                A short description of the added capability.
              </p>
              <a
                href="#"
                aria-label="View extra capacity"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block text-sm"
              >
                View addition
              </a>
            </li>
            <li className="rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold">Priority help</h3>
              <p className="text-3xl font-semibold tracking-tight mt-3">
                $15
                <span className="ml-2 text-sm font-normal text-neutral-500">
                  /month
                </span>
              </p>
              <p className="text-sm text-neutral-600 mt-3">
                A short description of the added capability.
              </p>
              <a
                href="#"
                aria-label="View priority help"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block text-sm"
              >
                View addition
              </a>
            </li>
            <li className="rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold">Advanced access</h3>
              <p className="text-3xl font-semibold tracking-tight mt-3">
                $29
                <span className="ml-2 text-sm font-normal text-neutral-500">
                  /month
                </span>
              </p>
              <p className="text-sm text-neutral-600 mt-3">
                A short description of the added capability.
              </p>
              <a
                href="#"
                aria-label="View advanced access"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block text-sm"
              >
                View addition
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
