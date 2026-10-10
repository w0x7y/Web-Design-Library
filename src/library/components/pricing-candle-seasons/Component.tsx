// Fonts: Fraunces
export default function PricingCandleSeasons() {
  return (
    <section className="bg-amber-50 text-amber-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase text-amber-800"
            >
              Wick Almanac / Candles by the season
            </p>
            <h2
              className="mt-4 font-['Fraunces',ui-serif,Georgia,serif] text-4xl leading-[1.1] sm:text-6xl"
            >
              A quiet glow. All year round.
            </h2>
            <p
              className="mt-5 max-w-lg text-base leading-relaxed text-amber-900"
            >
              Four hand-poured candles, one for each season. Plant-wax blends in amber glass, with a scent
              card and care notes in every box.
            </p>
          </div>
          <div className="border-l-2 border-amber-800 pl-6">
            <div className="flex flex-wrap items-baseline gap-3">
              <p className="font-['Fraunces',ui-serif,Georgia,serif] text-5xl">£96</p>
              <p className="text-sm">for the year / delivery included</p>
            </div>
            <a
              className="mt-4 inline-flex min-h-11 items-center rounded-full bg-amber-950 px-5 text-sm font-semibold text-amber-50 hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-950"
              href="#"
            >
              Choose your candle year
            </a>
          </div>
        </div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
          <li className="flex flex-col rounded-t-[4rem] border border-amber-800 bg-yellow-100 px-6 pt-8 pb-6">
            <p className="font-['Fraunces',ui-serif,Georgia,serif] text-5xl text-amber-800" aria-hidden="true">01</p>
            <h3 className="mt-6 font-['Fraunces',ui-serif,Georgia,serif] text-2xl">Linen &amp; rain</h3>
            <p className="mt-1 text-xs font-semibold tracking-wide uppercase">March</p>
            <p
              className="mt-6 flex-1 border-t border-amber-800 pt-4 text-sm leading-relaxed"
            >
              Fresh linen and soft green notes. A 180g candle for slower mornings and open windows.
            </p>
          </li>
          <li className="flex flex-col rounded-t-[4rem] border border-amber-800 bg-amber-100 px-6 pt-8 pb-6">
            <p className="font-['Fraunces',ui-serif,Georgia,serif] text-5xl text-amber-800" aria-hidden="true">02</p>
            <h3 className="mt-6 font-['Fraunces',ui-serif,Georgia,serif] text-2xl">Fig &amp; sea salt</h3>
            <p className="mt-1 text-xs font-semibold tracking-wide uppercase">June</p>
            <p
              className="mt-6 flex-1 border-t border-amber-800 pt-4 text-sm leading-relaxed"
            >
              Ripe fig with a mineral finish. A 180g candle inspired by the coast in midsummer.
            </p>
          </li>
          <li className="flex flex-col rounded-t-[4rem] border border-amber-800 bg-orange-100 px-6 pt-8 pb-6">
            <p className="font-['Fraunces',ui-serif,Georgia,serif] text-5xl text-amber-800" aria-hidden="true">03</p>
            <h3 className="mt-6 font-['Fraunces',ui-serif,Georgia,serif] text-2xl">Cedar &amp; clove</h3>
            <p className="mt-1 text-xs font-semibold tracking-wide uppercase">September</p>
            <p
              className="mt-6 flex-1 border-t border-amber-800 pt-4 text-sm leading-relaxed"
            >
              Dry cedar with a little spice. A 180g candle for evenings drawing in.
            </p>
          </li>
          <li className="flex flex-col rounded-t-[4rem] border border-amber-800 bg-stone-100 px-6 pt-8 pb-6">
            <p className="font-['Fraunces',ui-serif,Georgia,serif] text-5xl text-amber-800" aria-hidden="true">04</p>
            <h3 className="mt-6 font-['Fraunces',ui-serif,Georgia,serif] text-2xl">Amber &amp; pine</h3>
            <p className="mt-1 text-xs font-semibold tracking-wide uppercase">December</p>
            <p
              className="mt-6 flex-1 border-t border-amber-800 pt-4 text-sm leading-relaxed"
            >
              Resin, pine needles and warm amber. A 180g candle for the longest nights.
            </p>
          </li>
        </ol>
        <p
          className="mt-6 text-sm text-amber-900"
        >
          Four 180g candles, each with around 40 hours of burn time. UK delivery included. Gift subscriptions
          do not renew.
        </p>
      </div>
    </section>
  )
}
