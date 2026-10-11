export default function FeaturesGroupedChecklists() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            Heading for the key benefits
          </h2>
          <p className="text-lg text-pretty text-neutral-600 mt-4 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
        </header>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <article className="border-t border-neutral-200 pt-6">
            <h3 className="text-lg font-semibold">Core capabilities</h3>
            <p className="text-base text-neutral-600 mt-2">
              Short context for this group of capabilities.
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
                <span>Primary capability with a clear benefit</span>
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
                <span>Supporting workflow that saves a step</span>
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
                <span>Detail that makes the result reliable</span>
              </li>
            </ul>
          </article>
          <article className="border-t border-neutral-200 pt-6">
            <h3 className="text-lg font-semibold">Included support</h3>
            <p className="text-base text-neutral-600 mt-2">
              Short context for this group of capabilities.
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
                <span>Guidance for the first useful task</span>
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
                <span>Resources for common questions</span>
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
                <span>A clear route to further help</span>
              </li>
            </ul>
          </article>
        </div>
        <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-neutral-200 p-6">
          <p className="text-base text-neutral-600">
            A brief note connecting both groups to the outcome.
          </p>
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Explore capabilities
          </a>
        </footer>
      </div>
    </section>
  )
}
