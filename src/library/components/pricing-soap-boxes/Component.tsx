// Fonts: Bricolage Grotesque
export default function PricingSoapBoxes() {
  return (
    <section
      className="group bg-amber-100 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-stone-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <p className="text-sm font-semibold text-rose-800">Lather Club / Small-batch soap by post</p>
        <h2
          className="mt-4 max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl"
        >
          Fresh bars, right on schedule.
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-[2rem] border-2 border-stone-950 bg-amber-50 p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold">Your monthly soap box</h3>
                <p
                  className="mt-3 max-w-sm text-base text-stone-700"
                >
                  Cold-process bars, cured for six weeks in our studio. Choose your box and we will handle the
                  rest.
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
                <path d="M18 32h62a10 10 0 0 1 10 10v22H18V32Zm0 0 14-14h60v32l-2 14M80 32l12-14" />
                <path d="M48 50c-8-9-14-9-14-2 0 6 14 12 14 12s14-6 14-12c0-7-6-7-14 2M16 14h0M10 24h0" />
              </svg>
            </div>
            <fieldset className="mt-8 grid gap-3 sm:grid-cols-2">
              <legend className="mb-3 text-sm font-semibold">Choose your box size</legend>
              <label
                className="flex cursor-pointer items-start gap-3 rounded-xl border-2 border-stone-500 p-4 has-checked:border-stone-950 has-checked:bg-amber-200"
              >
                <input
                  className="mt-1 size-4 shrink-0 accent-stone-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-950"
                  type="radio"
                  name="pricing-soap-boxes-size"
                  value="small"
                  defaultChecked={true}
                  aria-describedby="pricing-soap-boxes-note"
                />
                <span>
                  <span className="block text-base font-semibold">Everyday box</span>
                  <span className="mt-1 block text-sm text-stone-700">2 × 100g soap bars</span>
                </span>
              </label>
              <label
                className="flex cursor-pointer items-start gap-3 rounded-xl border-2 border-stone-500 p-4 has-checked:border-stone-950 has-checked:bg-amber-200"
              >
                <input
                  className="mt-1 size-4 shrink-0 accent-stone-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-950"
                  type="radio"
                  id="pricing-soap-boxes-household"
                  name="pricing-soap-boxes-size"
                  value="household"
                  aria-describedby="pricing-soap-boxes-note"
                />
                <span>
                  <span className="block text-base font-semibold">Family box</span>
                  <span className="mt-1 block text-sm text-stone-700">4 × 100g soap bars</span>
                </span>
              </label>
            </fieldset>
            <div className="mt-8 flex flex-wrap items-baseline gap-3">
              <p className="text-6xl font-bold tracking-tight">
                <span className="group-has-[#pricing-soap-boxes-household:checked]:hidden">£12</span>
                <span className="hidden group-has-[#pricing-soap-boxes-household:checked]:inline">£22</span>
              </p>
              <p className="text-base text-stone-700">per month / UK delivery included</p>
            </div>
            <a
              className="mt-6 flex min-h-12 items-center justify-center rounded-full bg-stone-950 px-5 text-base font-semibold text-amber-50 hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-950"
              href="#"
            >
              Start your soap box
            </a>
          </div>
          <aside className="flex flex-col rounded-[2rem] bg-rose-800 p-6 text-amber-50 sm:p-8">
            <p className="text-xs font-semibold tracking-widest uppercase">Prefer to collect in person?</p>
            <h3 className="mt-6 text-5xl font-bold leading-none">First Saturday</h3>
            <p className="mt-4 text-xl">10:00 to 14:00</p>
            <p className="mt-6 border-t border-amber-100 pt-5 text-base">The soap studio, 26 Mercer Lane, York</p>
            <p
              className="mt-auto pt-8 text-sm leading-relaxed"
            >
              Bring last month’s wrapping for recycling. Away next month? Pause your box by the 20th before we
              pack it.
            </p>
          </aside>
        </div>
        <p
          className="mt-6 text-sm text-stone-700"
          id="pricing-soap-boxes-note"
        >
          First box ships on the 1st, then monthly. Pause or cancel before the 20th. Ingredients and fragrance
          allergens are listed on every bar.
        </p>
      </div>
    </section>
  )
}
