export default function ProductCardThreeViewGallery() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-80">
      <div className="grid grid-cols-[3fr_1fr] gap-2">
        <div
          role="img"
          aria-label="Image placeholder: primary product angle"
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
        <div className="grid gap-2">
          <div
            role="img"
            aria-label="Image placeholder: second product angle"
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
          <div
            role="img"
            aria-label="Image placeholder: third product angle"
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
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold">Product name</h3>
        <p className="text-base font-semibold">$48</p>
      </div>
      <p className="text-sm text-neutral-600 mt-2">
        Brief description of the useful product detail.
      </p>
      <a
        href="#"
        className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 w-full"
      >
        View product
      </a>
    </article>
  )
}
