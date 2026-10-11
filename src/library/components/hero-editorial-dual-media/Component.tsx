export default function HeroEditorialDualMedia() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="text-sm font-medium text-neutral-500">Opening label</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Headline that names the main outcome
          </h1>
          <div className="space-y-6">
            <p className="text-lg text-pretty text-neutral-600">
              A short lede that explains the audience and the outcome.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Primary action
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 grid items-end gap-6 sm:grid-cols-[2fr_1fr]">
          <div
            role="img"
            aria-label="Image placeholder: primary product view"
            className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 sm:aspect-[16/9]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-10"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </div>
          <figure className="space-y-3">
            <div
              role="img"
              aria-label="Image placeholder: supporting detail"
              className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-10"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
            <figcaption className="text-sm text-neutral-500">
              Caption describing the supporting detail
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
