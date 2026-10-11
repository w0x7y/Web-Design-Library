export default function ProductCardPairedItemBundle() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-80">
      <p className="text-sm font-medium text-neutral-500">Two-item bundle</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div
          role="img"
          aria-label="Image placeholder: first item in bundle"
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
        <div
          role="img"
          aria-label="Image placeholder: second item in bundle"
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
      </div>
      <h3 className="mt-3 text-base font-semibold">Bundle name</h3>
      <p className="text-sm text-neutral-600 mt-2">
        A short description of why these two items belong together.
      </p>
      <div className="mt-4 flex items-center justify-between gap-3 border-t border-neutral-200 pt-3">
        <p className="text-lg font-semibold">$64</p>
        <p className="text-xs text-neutral-500">Separate total $80</p>
      </div>
      <a
        href="#"
        className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-3 w-full"
      >
        View bundle
      </a>
    </article>
  )
}
