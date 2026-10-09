// Fonts: Albert Sans (https://fonts.google.com/specimen/Albert+Sans)
export default function ProductCardMinimal() {
  return (
    <article className="w-72 font-['Albert_Sans',ui-sans-serif,system-ui,sans-serif] text-neutral-950 antialiased sm:w-80">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
          alt="Lull Watch 2 in Chalk: a white case and strap around a black face"
          width={800}
          height={581}
          className="aspect-4/3 w-full rounded-2xl bg-neutral-100 object-cover"
        />
        <label className="absolute top-3 right-3 flex size-9 cursor-pointer items-center justify-center rounded-full bg-white shadow-xs transition-colors hover:bg-neutral-100 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-neutral-950">
          <input type="checkbox" className="peer sr-only" />
          <span className="sr-only">Save Lull Watch 2 to wishlist</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="size-4.5 fill-transparent transition-colors peer-checked:fill-current">
            <path d="M21 8.25c0-2.49-2.1-4.5-4.69-4.5-1.93 0-3.6 1.13-4.31 2.73-.72-1.6-2.38-2.73-4.31-2.73C5.1 3.75 3 5.76 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </label>
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h2 className="text-base/6 font-semibold">
          <a href="#" className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950">
            Lull Watch 2
          </a>
        </h2>
        <p className="text-base/6 font-medium">€219</p>
      </div>
      <p className="text-sm text-neutral-500">Sleep and recovery tracker</p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <fieldset className="flex gap-3.5">
          <legend className="sr-only">Colour</legend>
          <label className="flex cursor-pointer items-center gap-1.5 rounded-sm text-[0.8125rem] text-neutral-500 transition-colors hover:text-neutral-950 has-checked:text-neutral-950 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-neutral-950">
            <input type="radio" name="product-card-minimal-colour" value="chalk" defaultChecked className="peer sr-only" />
            <span aria-hidden="true" className="size-3.5 rounded-full bg-stone-100 inset-ring inset-ring-black/15 peer-checked:outline-1 peer-checked:outline-offset-2 peer-checked:outline-neutral-950" />
            Chalk
          </label>
          <label className="flex cursor-pointer items-center gap-1.5 rounded-sm text-[0.8125rem] text-neutral-500 transition-colors hover:text-neutral-950 has-checked:text-neutral-950 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-neutral-950">
            <input type="radio" name="product-card-minimal-colour" value="fog" className="peer sr-only" />
            <span aria-hidden="true" className="size-3.5 rounded-full bg-zinc-400 inset-ring inset-ring-black/15 peer-checked:outline-1 peer-checked:outline-offset-2 peer-checked:outline-neutral-950" />
            Fog
          </label>
          <label className="flex cursor-pointer items-center gap-1.5 rounded-sm text-[0.8125rem] text-neutral-500 transition-colors hover:text-neutral-950 has-checked:text-neutral-950 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-neutral-950">
            <input type="radio" name="product-card-minimal-colour" value="ink" className="peer sr-only" />
            <span aria-hidden="true" className="size-3.5 rounded-full bg-neutral-900 inset-ring inset-ring-black/15 peer-checked:outline-1 peer-checked:outline-offset-2 peer-checked:outline-neutral-950" />
            Ink
          </label>
        </fieldset>

        <button
          type="button"
          aria-label="Add Lull Watch 2 to bag"
          className="inline-flex h-9 shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-neutral-950 pr-4 pl-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
        >
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="size-4">
            <path d="M8 3.5v9M3.5 8h9" />
          </svg>
          Add
        </button>
      </div>
    </article>
  )
}
