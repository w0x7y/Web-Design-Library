// Fonts: Fraunces
export default function PricingSeedSeasons() {
  return (
    <section className="bg-lime-50 text-lime-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase text-lime-800"
            >
              Small Acre / Seeds by the season
            </p>
            <h2
              className="mt-4 font-['Fraunces',ui-serif,Georgia,serif] text-4xl leading-[1.1] sm:text-6xl"
            >
              A little plot. A whole year.
            </h2>
            <p
              className="mt-5 max-w-lg text-base leading-relaxed text-lime-900"
            >
              Four parcels of open-pollinated seeds, timed for a British growing season. A planting card in
              every envelope, from first sowing to seed saving.
            </p>
          </div>
          <div className="border-l-2 border-lime-800 pl-6">
            <div className="flex flex-wrap items-baseline gap-3">
              <p className="font-['Fraunces',ui-serif,Georgia,serif] text-5xl">£64</p>
              <p className="text-sm">for the year / delivery included</p>
            </div>
            <a
              className="mt-4 inline-flex min-h-11 items-center rounded-full bg-lime-950 px-5 text-sm font-semibold text-lime-50 hover:bg-lime-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-950"
              href="#"
            >
              Start a year of growing
            </a>
          </div>
        </div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
          <li className="flex flex-col rounded-t-[4rem] border border-lime-800 bg-yellow-100 px-6 pt-8 pb-6">
            <p className="font-['Fraunces',ui-serif,Georgia,serif] text-5xl text-lime-800" aria-hidden="true">01</p>
            <h3 className="mt-6 font-['Fraunces',ui-serif,Georgia,serif] text-2xl">Early spring</h3>
            <p className="mt-1 text-xs font-semibold tracking-wide uppercase">February</p>
            <p
              className="mt-6 flex-1 border-t border-lime-800 pt-4 text-sm leading-relaxed"
            >
              Broad beans, peas, radishes and calendula. Start on a windowsill or sow under cover.
            </p>
          </li>
          <li className="flex flex-col rounded-t-[4rem] border border-lime-800 bg-lime-100 px-6 pt-8 pb-6">
            <p className="font-['Fraunces',ui-serif,Georgia,serif] text-5xl text-lime-800" aria-hidden="true">02</p>
            <h3 className="mt-6 font-['Fraunces',ui-serif,Georgia,serif] text-2xl">High summer</h3>
            <p className="mt-1 text-xs font-semibold tracking-wide uppercase">April</p>
            <p
              className="mt-6 flex-1 border-t border-lime-800 pt-4 text-sm leading-relaxed"
            >
              Tomatoes, climbing beans, courgettes and cosmos. Four packets for the long days.
            </p>
          </li>
          <li className="flex flex-col rounded-t-[4rem] border border-lime-800 bg-orange-100 px-6 pt-8 pb-6">
            <p className="font-['Fraunces',ui-serif,Georgia,serif] text-5xl text-lime-800" aria-hidden="true">03</p>
            <h3 className="mt-6 font-['Fraunces',ui-serif,Georgia,serif] text-2xl">Autumn sowing</h3>
            <p className="mt-1 text-xs font-semibold tracking-wide uppercase">August</p>
            <p
              className="mt-6 flex-1 border-t border-lime-800 pt-4 text-sm leading-relaxed"
            >
              Winter salad, spinach, chard and cornflowers. Keep the beds working after summer.
            </p>
          </li>
          <li className="flex flex-col rounded-t-[4rem] border border-lime-800 bg-stone-100 px-6 pt-8 pb-6">
            <p className="font-['Fraunces',ui-serif,Georgia,serif] text-5xl text-lime-800" aria-hidden="true">04</p>
            <h3 className="mt-6 font-['Fraunces',ui-serif,Georgia,serif] text-2xl">Next year starts</h3>
            <p className="mt-1 text-xs font-semibold tracking-wide uppercase">November</p>
            <p
              className="mt-6 flex-1 border-t border-lime-800 pt-4 text-sm leading-relaxed"
            >
              Garlic bulbils, sweet peas, poppies and a seed-saving guide for your own harvest.
            </p>
          </li>
        </ol>
        <p
          className="mt-6 text-sm text-lime-900"
        >
          16 varieties, chosen for small gardens and generous pots. Ships within the UK. Gift subscriptions do
          not renew.
        </p>
      </div>
    </section>
  )
}
