export default function ProductCardVariantPicker() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-80">
      <div role="img" aria-label="Image placeholder: product photograph showing available variants" className="flex aspect-[4/3] h-24 w-full items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
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
      <fieldset className="mt-3">
        <legend className="text-xs font-medium">Colour</legend>
        <div className="mt-2 flex gap-3">
          <label className="relative cursor-pointer">
            <input type="radio" name="product-card-variant-picker-colour" value="white" aria-label="White" className="peer sr-only focus-visible:outline-hidden" />
            <span className="flex size-6 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-900 peer-checked:[&_svg]:opacity-100 peer-checked:outline-2 peer-checked:outline-offset-2 peer-checked:outline-neutral-900 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 opacity-0"><path d="m5 12 4 4L19 6" /></svg>
            </span>
          </label>
          <label className="relative cursor-pointer">
            <input type="radio" name="product-card-variant-picker-colour" value="light" aria-label="Light grey" defaultChecked className="peer sr-only focus-visible:outline-hidden" />
            <span className="flex size-6 items-center justify-center rounded-full border border-neutral-300 bg-neutral-300 text-neutral-900 peer-checked:[&_svg]:opacity-100 peer-checked:outline-2 peer-checked:outline-offset-2 peer-checked:outline-neutral-900 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 opacity-0"><path d="m5 12 4 4L19 6" /></svg>
            </span>
          </label>
          <label className="relative cursor-pointer">
            <input type="radio" name="product-card-variant-picker-colour" value="mid" aria-label="Mid grey" className="peer sr-only focus-visible:outline-hidden" />
            <span className="flex size-6 items-center justify-center rounded-full border border-neutral-300 bg-neutral-500 text-white peer-checked:[&_svg]:opacity-100 peer-checked:outline-2 peer-checked:outline-offset-2 peer-checked:outline-neutral-900 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 opacity-0"><path d="m5 12 4 4L19 6" /></svg>
            </span>
          </label>
          <label className="relative cursor-pointer">
            <input type="radio" name="product-card-variant-picker-colour" value="dark" aria-label="Dark grey" className="peer sr-only focus-visible:outline-hidden" />
            <span className="flex size-6 items-center justify-center rounded-full border border-neutral-300 bg-neutral-900 text-white peer-checked:[&_svg]:opacity-100 peer-checked:outline-2 peer-checked:outline-offset-2 peer-checked:outline-neutral-900 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 opacity-0"><path d="m5 12 4 4L19 6" /></svg>
            </span>
          </label>
        </div>
      </fieldset>
      <fieldset aria-describedby="product-card-variant-picker-size-hint" className="mt-3">
        <legend className="flex w-full items-center justify-between gap-2 text-xs font-medium">Size<span id="product-card-variant-picker-size-hint" className="font-normal text-neutral-500">XL unavailable</span></legend>
        <div className="mt-2 grid grid-cols-4 gap-2">
          <label className="relative cursor-pointer">
            <input type="radio" name="product-card-variant-picker-size" value="S" aria-label="Size S" className="peer sr-only focus-visible:outline-hidden" />
            <span className="flex h-9 items-center justify-center rounded-full border border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-900 transition-colors peer-not-checked:hover:bg-neutral-50 peer-checked:border-2 peer-checked:border-neutral-900 peer-checked:bg-neutral-900 peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900">S</span>
          </label>
          <label className="relative cursor-pointer">
            <input type="radio" name="product-card-variant-picker-size" value="M" aria-label="Size M" defaultChecked className="peer sr-only focus-visible:outline-hidden" />
            <span className="flex h-9 items-center justify-center rounded-full border border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-900 transition-colors peer-not-checked:hover:bg-neutral-50 peer-checked:border-2 peer-checked:border-neutral-900 peer-checked:bg-neutral-900 peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900">M</span>
          </label>
          <label className="relative cursor-pointer">
            <input type="radio" name="product-card-variant-picker-size" value="L" aria-label="Size L" className="peer sr-only focus-visible:outline-hidden" />
            <span className="flex h-9 items-center justify-center rounded-full border border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-900 transition-colors peer-not-checked:hover:bg-neutral-50 peer-checked:border-2 peer-checked:border-neutral-900 peer-checked:bg-neutral-900 peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900">L</span>
          </label>
          <label className="relative cursor-not-allowed">
            <input type="radio" name="product-card-variant-picker-size" value="XL" aria-label="Size XL" disabled aria-describedby="product-card-variant-picker-size-hint" className="peer sr-only focus-visible:outline-hidden" />
            <span className="flex h-9 items-center justify-center rounded-full border border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-900 transition-colors peer-disabled:cursor-not-allowed peer-disabled:bg-neutral-100 peer-disabled:text-neutral-600 peer-disabled:line-through peer-checked:border-2 peer-checked:border-neutral-900 peer-checked:bg-neutral-900 peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900">XL</span>
          </label>
        </div>
      </fieldset>
      <button type="button" aria-label="Add Product name to cart" className="mt-4 w-full inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Add to cart</button>
    </article>
  )
}
