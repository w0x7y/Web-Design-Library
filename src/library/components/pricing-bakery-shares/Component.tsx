// Fonts: Bricolage Grotesque
export default function PricingBakeryShares() {
  return (
    <section
      className="group bg-amber-100 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-stone-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <p className="text-sm font-semibold text-rose-800">Crumb &amp; Company / The neighbourhood bread share</p>
        <h2
          className="mt-4 max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl"
        >
          Good bread, already in your week.
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-[2rem] border-2 border-stone-950 bg-amber-50 p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold">Your weekly share</h3>
                <p
                  className="mt-3 max-w-sm text-base text-stone-700"
                >
                  Slow-fermented loaves from our co-op oven. Baked for you, never left on a shelf.
                </p>
              </div>
              <svg
                className="h-20 w-28 text-rose-800"
                aria-hidden="true"
                viewBox="0 0 112 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 56c0-24 15-38 44-38s44 14 44 38v8H12Z" />
                <path d="m32 48 10-16m8 20 11-18m7 18 10-16" />
              </svg>
            </div>
            <fieldset className="mt-8 grid gap-3 sm:grid-cols-2">
              <legend className="mb-3 text-sm font-semibold">Choose your loaf allocation</legend>
              <label
                className="flex cursor-pointer items-start gap-3 rounded-xl border-2 border-stone-500 p-4 has-checked:border-stone-950 has-checked:bg-amber-200"
              >
                <input
                  className="mt-1 size-4 shrink-0 accent-stone-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-950"
                  type="radio"
                  name="pricing-bakery-shares-size"
                  value="small"
                  defaultChecked={true}
                  aria-describedby="pricing-bakery-shares-note"
                />
                <span>
                  <span className="block text-base font-semibold">Small share</span>
                  <span className="mt-1 block text-sm text-stone-700">1 sourdough + 2 rolls</span>
                </span>
              </label>
              <label
                className="flex cursor-pointer items-start gap-3 rounded-xl border-2 border-stone-500 p-4 has-checked:border-stone-950 has-checked:bg-amber-200"
              >
                <input
                  className="mt-1 size-4 shrink-0 accent-stone-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-950"
                  type="radio"
                  id="pricing-bakery-shares-household"
                  name="pricing-bakery-shares-size"
                  value="household"
                  aria-describedby="pricing-bakery-shares-note"
                />
                <span>
                  <span className="block text-base font-semibold">Household share</span>
                  <span className="mt-1 block text-sm text-stone-700">2 sourdoughs + 4 rolls</span>
                </span>
              </label>
            </fieldset>
            <div className="mt-8 flex flex-wrap items-baseline gap-3">
              <p className="text-6xl font-bold tracking-tight">
                <span className="group-has-[#pricing-bakery-shares-household:checked]:hidden">£8</span>
                <span className="hidden group-has-[#pricing-bakery-shares-household:checked]:inline">£14</span>
              </p>
              <p className="text-base text-stone-700">per week / paid every four weeks</p>
            </div>
            <a
              className="mt-6 flex min-h-12 items-center justify-center rounded-full bg-stone-950 px-5 text-base font-semibold text-amber-50 hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-950"
              href="#"
            >
              Reserve a bread share
            </a>
          </div>
          <aside className="flex flex-col rounded-[2rem] bg-rose-800 p-6 text-amber-50 sm:p-8">
            <p className="text-xs font-semibold tracking-widest uppercase">From our oven to your table</p>
            <h3 className="mt-6 text-5xl font-bold leading-none">Every Saturday</h3>
            <p className="mt-4 text-xl">08:00 to 12:00</p>
            <p className="mt-6 border-t border-amber-100 pt-5 text-base">The bakery hatch, 14 Union Street, Bristol</p>
            <p
              className="mt-auto pt-8 text-sm leading-relaxed"
            >
              Bring your own bag. Going away? Skip a week before Wednesday and we will credit your next bill.
            </p>
          </aside>
        </div>
        <p
          className="mt-6 text-sm text-stone-700"
          id="pricing-bakery-shares-note"
        >
          Minimum four weeks, then pause or cancel any time. Contains wheat. Ask the bakery about other
          allergens.
        </p>
      </div>
    </section>
  )
}
