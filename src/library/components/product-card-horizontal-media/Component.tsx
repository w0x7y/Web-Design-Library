export default function ProductCardHorizontalMedia() {
  return (
    <article className="grid w-72 grid-cols-[6rem_minmax(0,1fr)] overflow-hidden rounded-lg border border-neutral-200 bg-white text-neutral-900 sm:w-[28rem] sm:grid-cols-[10rem_minmax(0,1fr)]">
      <div role="img" aria-label="Image placeholder: product photograph in a list row" className="flex aspect-[4/3] h-full min-h-44 w-full items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
      <div className="flex min-w-0 flex-col p-4">
        <h3 className="text-base font-semibold">Product name</h3>
        <p className="mt-1 text-xs text-neutral-500">Variant summary</p>
        <p className="mt-2 text-xs text-neutral-600" aria-label="Rated 4.8 out of 5 from 128 reviews">Rating 4.8 (128)</p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <p className="text-lg font-semibold">$48</p>
          <button type="button" aria-label="Add Product name to cart" className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Add</button>
        </div>
      </div>
    </article>
  )
}
