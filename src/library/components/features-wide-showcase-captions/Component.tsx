export default function FeaturesWideShowcaseCaptions() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            Heading for the key benefits
          </h2>
          <p className="text-lg text-pretty text-neutral-600 mt-4 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
        </header>
        <figure className="mt-10">
          <div
            role="img"
            aria-label="Image placeholder: combined capability overview"
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
          <figcaption className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="border-t border-neutral-200 pt-4">
              <h3 className="text-lg font-semibold">First capability</h3>
              <p className="text-sm text-neutral-600 mt-2">
                One sentence explaining this part of the overview.
              </p>
            </div>
            <div className="border-t border-neutral-200 pt-4">
              <h3 className="text-lg font-semibold">Supporting workflow</h3>
              <p className="text-sm text-neutral-600 mt-2">
                One sentence explaining this part of the overview.
              </p>
            </div>
            <div className="border-t border-neutral-200 pt-4">
              <h3 className="text-lg font-semibold">Final outcome</h3>
              <p className="text-sm text-neutral-600 mt-2">
                One sentence explaining this part of the overview.
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
