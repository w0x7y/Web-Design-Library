export default function ProductCardGalleryBuyBox() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <div role="img" aria-label="Image placeholder: main product photograph" className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </div>
          <ul role="list" aria-label="Product views" className="mt-4 grid grid-cols-4 gap-4">
            <li>
              <button type="button" aria-label="Show view 1 of 4" aria-current="true" className="flex aspect-square w-full items-center justify-center rounded-lg border-2 border-neutral-900 bg-neutral-100 text-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
              </button>
            </li>
            <li>
              <button type="button" aria-label="Show view 2 of 4" className="flex aspect-square w-full items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 text-neutral-400 transition-colors hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
              </button>
            </li>
            <li>
              <button type="button" aria-label="Show view 3 of 4" className="flex aspect-square w-full items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 text-neutral-400 transition-colors hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
              </button>
            </li>
            <li>
              <button type="button" aria-label="Show view 4 of 4" className="flex aspect-square w-full items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 text-neutral-400 transition-colors hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-neutral-500">Category label</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Product name that says what it is</h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
            <div className="flex items-center gap-0.5 text-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="size-4"><path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z" /></svg>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="size-4"><path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z" /></svg>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="size-4"><path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z" /></svg>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="size-4"><path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z" /></svg>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="size-4 text-neutral-400"><path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z" /></svg>
            </div>
            <p className="text-sm text-neutral-600">4.2 out of 5</p>
            <a href="#" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">128 reviews</a>
          </div>
          <p className="mt-6 flex items-baseline gap-2">
            <span className="text-2xl font-semibold tracking-tight">$48</span>
            <span className="text-sm text-neutral-500">Taxes included</span>
          </p>
          <p className="mt-4 text-base text-pretty text-neutral-600">Two sentences that say what the product is, who it suits and the detail that sets it apart from similar items.</p>
          <form className="mt-8">
            <div className="grid grid-cols-[minmax(0,1fr)_6rem] gap-4">
              <div>
                <label htmlFor="product-card-gallery-buy-box-size" className="block text-sm font-medium">Size</label>
                <div className="relative mt-2">
                  <select id="product-card-gallery-buy-box-size" name="size" defaultValue="medium" className="h-10 w-full appearance-none rounded-md border border-neutral-300 bg-white pr-10 pl-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute top-3 right-3 size-4 text-neutral-500"><path d="m6 9 6 6 6-6" /></svg>
                </div>
              </div>
              <div>
                <label htmlFor="product-card-gallery-buy-box-quantity" className="block text-sm font-medium">Quantity</label>
                <input id="product-card-gallery-buy-box-quantity" name="quantity" type="number" inputMode="numeric" min="1" max="10" defaultValue="1" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button type="submit" className="inline-flex h-11 flex-1 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Add to cart</button>
              <button type="button" aria-label="Save Product name to your list" className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z" /></svg>
              </button>
            </div>
          </form>
          <ul role="list" className="mt-8 space-y-3 border-t border-neutral-200 pt-6 text-sm text-neutral-600">
            <li className="flex items-start gap-3">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-400">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
              </svg>
              Free delivery on orders over $50, arriving in 2 to 4 days
            </li>
            <li className="flex items-start gap-3">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-400">
                <path d="M9 14 4 9l5-5" />
                <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
              </svg>
              Free returns within 30 days of delivery
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
