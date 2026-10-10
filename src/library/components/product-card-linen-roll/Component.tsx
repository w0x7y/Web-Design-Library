// Fonts: Newsreader
export default function ProductCardLinenRoll() {
  return (
    <article className="grid w-72 grid-cols-[3.5rem_1fr] bg-stone-950 font-['Newsreader',ui-serif,Georgia,serif] text-orange-50 sm:w-[22rem]">
      <div
        className="relative overflow-hidden bg-orange-800"
        aria-hidden="true"
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 56 350"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="product-card-linen-roll-weave"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 0h8M0 0v8"
                stroke="#fed7aa"
                strokeWidth=".5"
                opacity=".5"
              />
            </pattern>
          </defs>
          <rect
            width="56"
            height="350"
            fill="url(#product-card-linen-roll-weave)"
          />
        </svg>
      </div>
      <div className="min-w-0 p-5">
        <p className="text-[10px] uppercase tracking-widest text-stone-300">
          Selvage No. 8
        </p>
        <h2 className="mt-4 text-[32px] leading-[1.1]">
          Rust linen,
          <br />
          cut for you.
        </h2>
        <p className="mt-3 text-xs leading-5 text-stone-300">
          185gsm washed flax.
          <br />
          140cm wide, soft handle.
        </p>
        <fieldset className="mt-5">
          <legend className="mb-2 text-xs text-stone-300">
            Choose your cut
          </legend>
          <div className="flex flex-wrap gap-4">
            <label className="flex cursor-pointer items-center gap-2 text-sm">
              <input
                className="size-3 accent-current appearance-auto cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-50"
                type="radio"
                name="product-card-linen-roll-length"
                value="one"
                defaultChecked
              />
              <span>1 metre</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm">
              <input
                className="size-3 accent-current appearance-auto cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-50"
                type="radio"
                name="product-card-linen-roll-length"
                value="two"
              />
              <span>2 metres</span>
            </label>
          </div>
        </fieldset>
        <p className="mt-5 text-xl leading-none">£22 / metre</p>
        <a
          className="mt-4 inline-flex rounded-sm py-1 text-xs underline underline-offset-4 hover:text-orange-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-50"
          href="#selvage-rust-linen"
          aria-label="Order cut-length Rust linen from Selvage No. 8"
        >
          Order a cut ↗
        </a>
      </div>
    </article>
  );
}
