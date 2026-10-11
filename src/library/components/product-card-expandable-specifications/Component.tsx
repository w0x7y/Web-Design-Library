export default function ProductCardExpandableSpecifications() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-80">
      <div className="flex items-start gap-3">
        <div
          role="img"
          aria-label="Image placeholder: product overview"
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
        <div className="min-w-0">
          <h3 className="text-base font-semibold">Product name</h3>
          <p className="mt-2 text-lg font-semibold">$48</p>
        </div>
      </div>
      <details open className="mt-4 border-y border-neutral-200 py-3">
        <summary className="cursor-pointer text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
          Specifications
        </summary>
        <dl className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-neutral-500">Format</dt>
            <dd className="text-right">24-bit</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-neutral-500">Size</dt>
            <dd className="text-right">1.2 GB</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-neutral-500">Files</dt>
            <dd className="text-right">120</dd>
          </div>
        </dl>
      </details>
      <a
        href="#"
        className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 w-full"
      >
        View product
      </a>
    </article>
  )
}
