export default function FeaturesPairedMediaSharedList() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            Compare two parts of the experience
          </h2>
          <p className="text-lg text-pretty text-neutral-600 mt-4 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
        </header>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <figure>
            <div
              role="img"
              aria-label="Image placeholder: overview screen"
              className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 aspect-video"
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
            <figcaption className="mt-4">
              <h3 className="text-lg font-semibold">First view</h3>
              <p className="text-sm text-neutral-600 mt-2">
                Short explanation describing this part of the experience.
              </p>
            </figcaption>
          </figure>
          <figure>
            <div
              role="img"
              aria-label="Image placeholder: detail screen"
              className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 aspect-video"
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
            <figcaption className="mt-4">
              <h3 className="text-lg font-semibold">Second view</h3>
              <p className="text-sm text-neutral-600 mt-2">
                Short explanation describing this part of the experience.
              </p>
            </figcaption>
          </figure>
        </div>
        <ul
          role="list"
          className="mt-8 grid gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-3"
        >
          <li className="flex items-center gap-3 text-sm text-neutral-600">
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
            Shared capability
          </li>
          <li className="flex items-center gap-3 text-sm text-neutral-600">
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
            Supporting detail
          </li>
          <li className="flex items-center gap-3 text-sm text-neutral-600">
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
            Useful assurance
          </li>
        </ul>
      </div>
    </section>
  )
}
