export default function ProductCardCompactOrderSummary() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-80">
      <div className="flex items-start gap-3">
        <div
          role="img"
          aria-label="Image placeholder: item in order summary"
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
          <p className="mt-1 text-xs text-neutral-500">
            Variant or configuration
          </p>
          <p className="mt-2 text-xs text-neutral-600">Quantity: 2</p>
        </div>
      </div>
      <dl className="space-y-3 text-sm mt-4 border-t border-neutral-200 pt-4">
        <div className="flex justify-between gap-4">
          <dt className="text-neutral-600">2 items at $24</dt>
          <dd className="font-medium">$48</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-neutral-600">Shipping</dt>
          <dd className="font-medium">$5</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-neutral-600">Order total</dt>
          <dd className="font-medium">$53</dd>
        </div>
      </dl>
      <a
        href="#"
        className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 w-full"
      >
        Review order
      </a>
    </article>
  )
}
