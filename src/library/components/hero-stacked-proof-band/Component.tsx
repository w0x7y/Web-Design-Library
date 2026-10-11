export default function HeroStackedProofBand() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="max-w-4xl">
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl mt-4">
            Headline for the main outcome
          </h1>
          <p className="text-lg text-pretty text-neutral-600 mt-6 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Primary action
            </a>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Secondary action
            </a>
          </div>
        </div>
        <div className="mt-12 grid gap-8 border-t border-neutral-200 pt-8 md:grid-cols-2">
          <figure className="space-y-4">
            <blockquote className="text-base text-neutral-600">
              A brief endorsement describing the useful change for a real user.
            </blockquote>
            <figcaption>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  AR
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold">Alex Rivera</h3>
                  <p className="text-sm text-neutral-500">Role or specialty</p>
                </div>
              </div>
            </figcaption>
          </figure>
          <div>
            <p className="text-sm font-medium text-neutral-500">
              Supporting organizations
            </p>
            <ul
              role="list"
              className="mt-4 grid grid-cols-2 gap-4 text-sm font-semibold"
            >
              <li className="flex items-center gap-2">
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
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M4 12h16M12 4v16" />
                </svg>
                Logo
              </li>
              <li className="flex items-center gap-2">
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
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M4 12h16M12 4v16" />
                </svg>
                Logo
              </li>
              <li className="flex items-center gap-2">
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
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M4 12h16M12 4v16" />
                </svg>
                Logo
              </li>
              <li className="flex items-center gap-2">
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
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M4 12h16M12 4v16" />
                </svg>
                Logo
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
