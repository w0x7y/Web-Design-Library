export default function HeroPitchChecklist() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 grid gap-12 lg:grid-cols-[3fr_2fr] lg:items-center">
        <div>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl mt-4">
            Headline for a clear main outcome
          </h1>
          <p className="text-lg text-pretty text-neutral-600 mt-6">
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
        <aside className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
          <p className="text-sm font-medium text-neutral-500">
            Included in the experience
          </p>
          <h3 className="text-lg font-semibold mt-3">What changes for you</h3>
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
              <span>Benefit describing a useful result</span>
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
              <span>Capability that removes a step</span>
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
              <span>Detail that builds confidence</span>
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
              <span>Assurance about getting started</span>
            </li>
          </ul>
          <p className="text-sm text-neutral-600 mt-6">
            A short note setting expectations for the first step.
          </p>
        </aside>
      </div>
    </section>
  )
}
