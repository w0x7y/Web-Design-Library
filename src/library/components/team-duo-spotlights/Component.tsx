export default function TeamDuoSpotlights() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            Two people with complementary roles
          </h2>
          <p className="text-lg text-pretty text-neutral-600 mt-4 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
        </header>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="grid gap-5 rounded-lg border border-neutral-200 p-6 sm:grid-cols-[6rem_minmax(0,1fr)]">
            <div
              role="img"
              aria-label="Image placeholder: portrait of Alex Rivera"
              className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 aspect-square"
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
            <div className="min-w-0">
              <h3 className="text-lg font-semibold">Alex Rivera</h3>
              <p className="mt-1 text-sm text-neutral-500">Role or specialty</p>
              <p className="text-sm text-neutral-600 mt-3">
                A brief biography describing the contribution this person makes.
              </p>
              <a
                href="#"
                aria-label="View Alex Rivera profile"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block text-sm"
              >
                View profile
              </a>
            </div>
          </article>
          <article className="grid gap-5 rounded-lg border border-neutral-200 p-6 sm:grid-cols-[6rem_minmax(0,1fr)]">
            <div
              role="img"
              aria-label="Image placeholder: portrait of Jamie Quinn"
              className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 aspect-square"
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
            <div className="min-w-0">
              <h3 className="text-lg font-semibold">Jamie Quinn</h3>
              <p className="mt-1 text-sm text-neutral-500">Role or specialty</p>
              <p className="text-sm text-neutral-600 mt-3">
                A brief biography describing the contribution this person makes.
              </p>
              <a
                href="#"
                aria-label="View Jamie Quinn profile"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block text-sm"
              >
                View profile
              </a>
            </div>
          </article>
        </div>
        <footer className="mt-8 border-t border-neutral-200 pt-6">
          <p className="text-base text-neutral-600">
            A short note explaining how these roles work together.
          </p>
        </footer>
      </div>
    </section>
  )
}
