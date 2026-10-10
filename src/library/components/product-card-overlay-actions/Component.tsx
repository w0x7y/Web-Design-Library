export default function ProductCardOverlayActions() {
  return (
    <article className="group w-72 text-neutral-900 sm:w-80">
      <div className="relative">
        <div role="img" aria-label="Image placeholder: product photograph" className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        </div>
        <span className="absolute top-3 left-3 inline-flex items-center rounded-full border border-neutral-300 bg-white px-2.5 py-0.5 text-xs font-medium">Sale</span>
        <label className="absolute top-3 right-3 cursor-pointer">
          <input type="checkbox" name="product-card-overlay-actions-wishlist" aria-label="Save Product name to wishlist" className="peer sr-only focus-visible:outline-hidden" />
          <span className="flex size-9 items-center justify-center rounded-full border-2 border-transparent bg-white text-neutral-900 transition-colors hover:bg-neutral-50 peer-checked:border-neutral-900 peer-checked:[&>svg]:fill-current peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" /></svg>
          </span>
        </label>
        <button type="button" aria-label="Add Product name to cart" className="absolute right-3 bottom-3 left-3 pointer-fine:opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-all hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Add to cart</button>
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold">Product name</h3>
        <p className="flex shrink-0 items-center gap-2 text-sm"><span className="font-medium">$48</span><s className="text-neutral-500"><span className="sr-only">Original price </span>$64</s></p>
      </div>
      <div className="mt-2 flex items-center gap-2 text-xs text-neutral-500">
        <span role="img" aria-label="Rated 4 out of 5" className="flex items-center gap-0.5 text-neutral-900">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 fill-current"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z" /></svg>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 fill-current"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z" /></svg>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 fill-current"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z" /></svg>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 fill-current"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z" /></svg>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 "><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z" /></svg>
        </span>
        <span>(128)</span>
      </div>
    </article>
  )
}
