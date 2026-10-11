export default function EmptyStateExampleGallery() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Nothing here yet
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
                Explain what belongs in this collection and how examples can
                help.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Create first record
              </a>
            </div>
          </div>
          <aside>
            <p className="text-sm font-medium text-neutral-500">
              Explore example structures
            </p>
            <ul role="list" className="mt-4 grid gap-4 sm:grid-cols-2">
              <li className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
                <div
                  role="img"
                  aria-label="Image placeholder: sample record preview"
                  className="flex aspect-[16/9] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400"
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
                <h2 className="mt-4 text-base font-semibold">
                  Individual example
                </h2>
                <p className="mt-2 text-sm text-neutral-600">
                  Short description of this example structure.
                </p>
                <p className="mt-4 text-sm">
                  <a
                    href="#"
                    aria-label="Open individual example example"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    Open example
                  </a>
                </p>
              </li>
              <li className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
                <div
                  role="img"
                  aria-label="Image placeholder: sample record preview"
                  className="flex aspect-[16/9] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400"
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
                <h2 className="mt-4 text-base font-semibold">Shared example</h2>
                <p className="mt-2 text-sm text-neutral-600">
                  Short description of this example structure.
                </p>
                <p className="mt-4 text-sm">
                  <a
                    href="#"
                    aria-label="Open shared example example"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    Open example
                  </a>
                </p>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
