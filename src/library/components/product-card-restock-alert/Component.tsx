export default function ProductCardRestockAlert() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-80">
      <div role="img" aria-label="Image placeholder: sold-out product photograph" className="flex h-24 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold">Product name</h3>
        <p className="text-lg font-semibold">$48</p>
      </div>
      <div className="mt-1 flex items-center gap-2">
        <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Sold out</span>
        <p className="text-sm text-neutral-500">Size M, light gray</p>
      </div>
      <form className="mt-4 border-t border-neutral-200 pt-4">
        <label htmlFor="product-card-restock-alert-email" className="block text-sm font-medium">Email me when it is back</label>
        <p id="product-card-restock-alert-hint" className="mt-1 text-sm text-neutral-500">One email when this size returns.</p>
        <div className="mt-3 flex gap-2">
          <input id="product-card-restock-alert-email" name="email" type="email" autoComplete="email" required placeholder="Email address" aria-describedby="product-card-restock-alert-hint" className="h-11 min-w-0 flex-1 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
          <button type="submit" className="inline-flex h-11 shrink-0 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Notify me</button>
        </div>
      </form>
    </article>
  )
}
