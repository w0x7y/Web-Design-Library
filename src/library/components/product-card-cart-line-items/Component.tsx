export default function ProductCardCartLineItems() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Shopping cart</h2>
          <p className="shrink-0 text-sm text-neutral-500">3 items</p>
        </div>
        <ul role="list" className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
          <li className="flex gap-4 py-6 sm:gap-6">
            <div role="img" aria-label="Image placeholder: first item in cart" className="flex size-20 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 sm:size-24">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
            <div className="grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_auto] gap-4 sm:grid-cols-[minmax(0,1fr)_auto_6rem] sm:gap-x-6">
              <div>
                <h3 className="text-base font-semibold"><a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Product name</a></h3>
                <p className="mt-1 text-sm text-neutral-500">Size M, light gray</p>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-neutral-600">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-400"><path d="M20 6 9 17l-5-5" /></svg>
                  In stock
                </p>
              </div>
              <div className="text-right sm:col-start-3 sm:row-start-1">
                <p className="text-base font-semibold">$48.00</p>
              </div>
              <div className="col-span-2 flex items-center gap-4 sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:self-start">
                <label htmlFor="product-card-cart-line-items-quantity-1" className="sr-only">Quantity of Product name</label>
                <div className="relative">
                  <select id="product-card-cart-line-items-quantity-1" name="quantity-1" defaultValue="1" className="h-10 w-20 appearance-none rounded-md border border-neutral-300 bg-white pr-9 pl-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute top-3 right-3 size-4 text-neutral-500"><path d="m6 9 6 6 6-6" /></svg>
                </div>
                <button type="button" aria-label="Remove Product name from cart" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Remove</button>
              </div>
            </div>
          </li>
          <li className="flex gap-4 py-6 sm:gap-6">
            <div role="img" aria-label="Image placeholder: second item in cart" className="flex size-20 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 sm:size-24">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
            <div className="grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_auto] gap-4 sm:grid-cols-[minmax(0,1fr)_auto_6rem] sm:gap-x-6">
              <div>
                <h3 className="text-base font-semibold"><a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Accessory name</a></h3>
                <p className="mt-1 text-sm text-neutral-500">One size</p>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-neutral-600">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-400"><path d="M20 6 9 17l-5-5" /></svg>
                  In stock
                </p>
              </div>
              <div className="text-right sm:col-start-3 sm:row-start-1">
                <p className="text-base font-semibold">$48.00</p>
                <p className="mt-1 text-sm text-neutral-500">$24.00 each</p>
              </div>
              <div className="col-span-2 flex items-center gap-4 sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:self-start">
                <label htmlFor="product-card-cart-line-items-quantity-2" className="sr-only">Quantity of Accessory name</label>
                <div className="relative">
                  <select id="product-card-cart-line-items-quantity-2" name="quantity-2" defaultValue="2" className="h-10 w-20 appearance-none rounded-md border border-neutral-300 bg-white pr-9 pl-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute top-3 right-3 size-4 text-neutral-500"><path d="m6 9 6 6 6-6" /></svg>
                </div>
                <button type="button" aria-label="Remove Accessory name from cart" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Remove</button>
              </div>
            </div>
          </li>
          <li className="flex gap-4 py-6 sm:gap-6">
            <div role="img" aria-label="Image placeholder: third item in cart" className="flex size-20 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 sm:size-24">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
            <div className="grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_auto] gap-4 sm:grid-cols-[minmax(0,1fr)_auto_6rem] sm:gap-x-6">
              <div>
                <h3 className="text-base font-semibold"><a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Refill pack name</a></h3>
                <p className="mt-1 text-sm text-neutral-500">Pack of 3</p>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-neutral-600">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-400"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                  Ships in 5 to 7 days
                </p>
              </div>
              <div className="text-right sm:col-start-3 sm:row-start-1">
                <p className="text-base font-semibold">$16.00</p>
              </div>
              <div className="col-span-2 flex items-center gap-4 sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:self-start">
                <label htmlFor="product-card-cart-line-items-quantity-3" className="sr-only">Quantity of Refill pack name</label>
                <div className="relative">
                  <select id="product-card-cart-line-items-quantity-3" name="quantity-3" defaultValue="1" className="h-10 w-20 appearance-none rounded-md border border-neutral-300 bg-white pr-9 pl-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute top-3 right-3 size-4 text-neutral-500"><path d="m6 9 6 6 6-6" /></svg>
                </div>
                <button type="button" aria-label="Remove Refill pack name from cart" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Remove</button>
              </div>
            </div>
          </li>
        </ul>
        <div className="mt-8 flex items-baseline justify-between gap-4 text-base font-semibold">
          <p>Subtotal</p>
          <p>$112.00</p>
        </div>
        <p className="mt-1 text-sm text-neutral-500">Shipping and taxes are calculated at checkout.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <a href="#" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Check out</a>
          <a href="#" className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Continue shopping</a>
        </div>
      </div>
    </section>
  )
}
