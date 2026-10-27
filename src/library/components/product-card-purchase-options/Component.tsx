export default function ProductCardPurchaseOptions() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-80">
      <div className="flex items-center gap-3">
        <div role="img" aria-label="Image placeholder: product package" className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold">Product name</h3>
          <p className="text-sm text-neutral-500">Pack size or variant</p>
        </div>
      </div>
      <form className="mt-4">
        <fieldset>
          <legend className="text-sm font-medium">Purchase option</legend>
          <div className="mt-2 space-y-2">
            <label className="flex cursor-pointer items-center gap-3 rounded-md border border-neutral-200 p-3 has-[input:checked]:border-neutral-900">
              <input type="radio" name="product-card-purchase-options-plan" value="once" className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
              <span className="flex-1 text-sm font-medium">One-time purchase</span>
              <span className="text-sm font-semibold">$24.00</span>
            </label>
            <div className="group rounded-md border border-neutral-200 p-3 has-[input:checked]:border-neutral-900">
              <label className="flex cursor-pointer items-start gap-3">
                <input type="radio" name="product-card-purchase-options-plan" value="subscribe" defaultChecked aria-describedby="product-card-purchase-options-subscribe-hint" className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium">Subscribe and save</span>
                  <span id="product-card-purchase-options-subscribe-hint" className="block text-xs text-pretty text-neutral-500">Save 10%, cancel any time</span>
                </span>
                <span className="text-sm font-semibold">$21.60</span>
              </label>
              <div className="mt-3 hidden items-center justify-between gap-3 group-has-[input:checked]:flex">
                <label htmlFor="product-card-purchase-options-frequency" className="text-sm text-neutral-600">Deliver every</label>
                <div className="relative w-28 shrink-0">
                  <select id="product-card-purchase-options-frequency" name="frequency" defaultValue="4" className="h-10 w-full appearance-none rounded-md border border-neutral-300 bg-white pr-9 pl-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                    <option value="2">2 weeks</option>
                    <option value="4">4 weeks</option>
                    <option value="6">6 weeks</option>
                    <option value="8">8 weeks</option>
                  </select>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute top-3 right-3 size-4 text-neutral-500"><path d="m6 9 6 6 6-6" /></svg>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <button type="submit" className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Add to cart</button>
      </form>
    </article>
  )
}
