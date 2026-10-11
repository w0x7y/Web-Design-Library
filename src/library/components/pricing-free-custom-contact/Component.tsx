export default function PricingFreeCustomContact() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            Choose a way to get started
          </h2>
          <p className="text-lg text-pretty text-neutral-600 mt-4 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
        </header>
        <div className="mt-10 grid gap-6 md:grid-cols-[3fr_2fr]">
          <article className="rounded-lg border border-neutral-200 p-6">
            <p className="text-sm font-medium text-neutral-500">
              For a simple start
            </p>
            <h3 className="text-lg font-semibold mt-3">Free access</h3>
            <p className="text-3xl font-semibold tracking-tight mt-4">
              $0
              <span className="ml-2 text-sm font-normal text-neutral-500">
                no payment required
              </span>
            </p>
            <ul role="list" className="space-y-3 mt-6">
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
                <span>Small usage allowance</span>
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
                <span>Essential capabilities</span>
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
                <span>Community resources</span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-6"
            >
              Create free account
            </a>
          </article>
          <form className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
            <p className="text-sm font-medium text-neutral-500">
              For a larger scope
            </p>
            <h3 className="text-lg font-semibold mt-3">Custom access</h3>
            <p className="text-sm text-neutral-600 mt-3">
              Short context for organizations that need a tailored agreement.
            </p>
            <label
              htmlFor="pricing-free-custom-contact-email"
              className="mt-5 mb-1 block text-sm font-medium"
            >
              Work email
            </label>
            <input
              id="pricing-free-custom-contact-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              aria-describedby="pricing-free-custom-contact-hint"
              className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            />
            <p
              id="pricing-free-custom-contact-hint"
              className="mt-3 text-xs text-neutral-500"
            >
              A short note about response time.
            </p>
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-5 w-full"
            >
              Request pricing
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
