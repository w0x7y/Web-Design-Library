// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function FeaturesLunchbox() {
  return (
    <section className="bg-rose-50 text-rose-950 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold text-rose-800">Little Ladle / School kitchens</p>
          <h2 className="mt-4 max-w-xl text-[2.75rem] leading-[1.05] font-bold tracking-tight sm:text-[3.75rem]">Good lunches.<br />Empty lunchboxes.</h2>
          <p className="mt-5 max-w-xl leading-relaxed text-rose-900">
            Meals cooked each morning, with vegetables worth trying and enough time at
            the table to enjoy them.
          </p>
          <p className="mt-10 max-w-sm border-l-4 border-rose-300 pl-5 text-sm leading-relaxed">
            An allergy is never a footnote. Every dish has a full ingredient list.
            Confirm your child's needs with our kitchen before ordering.
          </p>
          <div className="mt-6">
            <a href="#" className="inline-flex w-fit items-center gap-3 py-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-950">
              See this week's menu
            </a>
          </div>
        </div>
        <div className="grid gap-3 rounded-[2rem] border-2 border-rose-950 bg-white p-3 sm:grid-cols-2">
          <article className="flex min-h-52 flex-col justify-between gap-8 rounded-[1.25rem] p-6 bg-orange-100 sm:row-span-2">
            <div>
              <p className="text-5xl font-bold tracking-tight">12</p>
              <p className="mt-2 text-sm">recipes in our seasonal rotation</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">A kitchen, not a factory</h3>
              <p className="mt-3 text-sm leading-relaxed text-rose-900">
                Small batches of familiar favourites. Cooked on site and served
                warm, with seconds when there are seconds.
              </p>
            </div>
          </article>
          <article className="flex min-h-52 flex-col justify-between gap-8 rounded-[1.25rem] p-6 bg-lime-100">
            <h3 className="text-2xl font-bold">Something green</h3>
            <p className="mt-3 text-sm leading-relaxed text-rose-900">
              Crunchy peas, roasted broccoli, garden herbs. We give vegetables their
              own place on the plate.
            </p>
          </article>
          <article className="flex min-h-52 flex-col justify-between gap-8 rounded-[1.25rem] p-6 bg-rose-200">
            <h3 className="text-2xl font-bold">Fruit with a season</h3>
            <p className="mt-3 text-sm leading-relaxed text-rose-900">
              Apples in autumn, berries in June. Our growers help shape the menu each
              term.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
