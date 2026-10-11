export default function TeamGroupMediaRoster() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            Meet the group behind the work
          </h2>
          <p className="text-lg text-pretty text-neutral-600 mt-4 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
        </header>
        <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_3fr]">
          <figure className="space-y-3">
            <div
              role="img"
              aria-label="Image placeholder: group team photograph"
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
            <figcaption className="text-sm text-neutral-500">
              Short caption describing the group.
            </figcaption>
          </figure>
          <div>
            <h3 className="text-lg font-semibold">Individual contacts</h3>
            <ul role="list" className="mt-6 grid gap-6 sm:grid-cols-2">
              <li className="border-t border-neutral-200 pt-4">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                  >
                    AR
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold">Alex Rivera</h3>
                    <p className="text-sm text-neutral-500">
                      Role or specialty
                    </p>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 mt-3">
                  A brief note about this person’s focus.
                </p>
                <a
                  href="#"
                  aria-label="Contact Alex Rivera"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-3 inline-block text-sm"
                >
                  Contact
                </a>
              </li>
              <li className="border-t border-neutral-200 pt-4">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                  >
                    JQ
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold">Jamie Quinn</h3>
                    <p className="text-sm text-neutral-500">
                      Role or specialty
                    </p>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 mt-3">
                  A brief note about this person’s focus.
                </p>
                <a
                  href="#"
                  aria-label="Contact Jamie Quinn"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-3 inline-block text-sm"
                >
                  Contact
                </a>
              </li>
              <li className="border-t border-neutral-200 pt-4">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                  >
                    MC
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold">Morgan Chen</h3>
                    <p className="text-sm text-neutral-500">
                      Role or specialty
                    </p>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 mt-3">
                  A brief note about this person’s focus.
                </p>
                <a
                  href="#"
                  aria-label="Contact Morgan Chen"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-3 inline-block text-sm"
                >
                  Contact
                </a>
              </li>
              <li className="border-t border-neutral-200 pt-4">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                  >
                    TB
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold">Taylor Brooks</h3>
                    <p className="text-sm text-neutral-500">
                      Role or specialty
                    </p>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 mt-3">
                  A brief note about this person’s focus.
                </p>
                <a
                  href="#"
                  aria-label="Contact Taylor Brooks"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-3 inline-block text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
