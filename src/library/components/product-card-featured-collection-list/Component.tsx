export default function ProductCardFeaturedCollectionList() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            A collection with one featured item
          </h2>
          <p className="text-lg text-pretty text-neutral-600 mt-4 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
        </header>
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[3fr_2fr]">
          <article className="rounded-lg border border-neutral-200 p-6">
            <div
              role="img"
              aria-label="Image placeholder: featured product in collection"
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
            <div className="mt-5 flex justify-between gap-3">
              <h3 className="text-lg font-semibold">Featured product</h3>
              <p className="text-lg font-semibold">$64</p>
            </div>
            <p className="text-sm text-neutral-600 mt-3">
              Short description of the main product in this collection.
            </p>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-5"
            >
              View featured item
            </a>
          </article>
          <aside>
            <h3 className="text-lg font-semibold">Related items</h3>
            <div className="mt-5">
              <ul
                role="list"
                className="divide-y divide-neutral-200 border-y border-neutral-200"
              >
                <li className="flex items-start gap-4 py-5">
                  <div
                    role="img"
                    aria-label="Image placeholder: related product 1"
                    className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 size-16 shrink-0 aspect-square"
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
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold">Supporting item</h3>
                    <p className="mt-1 text-sm text-neutral-600">$24</p>
                    <a
                      href="#"
                      aria-label="View supporting item"
                      className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-2 inline-block text-sm"
                    >
                      View item
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 py-5">
                  <div
                    role="img"
                    aria-label="Image placeholder: related product 2"
                    className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 size-16 shrink-0 aspect-square"
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
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold">Alternative item</h3>
                    <p className="mt-1 text-sm text-neutral-600">$48</p>
                    <a
                      href="#"
                      aria-label="View alternative item"
                      className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-2 inline-block text-sm"
                    >
                      View item
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 py-5">
                  <div
                    role="img"
                    aria-label="Image placeholder: related product 3"
                    className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 size-16 shrink-0 aspect-square"
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
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold">Companion item</h3>
                    <p className="mt-1 text-sm text-neutral-600">$32</p>
                    <a
                      href="#"
                      aria-label="View companion item"
                      className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-2 inline-block text-sm"
                    >
                      View item
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
