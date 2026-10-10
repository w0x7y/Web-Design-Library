// Fonts: Space Grotesk
export default function PricingClimbingPunchcard() {
  return (
    <section className="bg-red-100 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] text-red-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <header
          className="flex flex-wrap justify-between gap-4 border-b-2 border-red-950 pb-4 text-sm font-bold uppercase"
        >
          <p>GRIP / Bouldering hall</p>
          <p>No ropes. No joining fee.</p>
        </header>
        <h2
          className="mt-8 max-w-3xl text-5xl leading-none font-bold tracking-tight sm:text-7xl"
        >
          Your next move starts here.
        </h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          <article>
            <h3 className="text-sm font-bold uppercase">Drop in</h3>
            <p className="mt-4 text-[6rem] leading-none font-bold tracking-[-0.06em] sm:text-[9rem]">£14</p>
            <p
              className="mt-5 max-w-sm text-base"
            >
              A whole day on the wall. Leave for lunch, come back for the problem you nearly sent.
            </p>
            <a
              className="mt-6 inline-flex min-h-12 items-center border-b-2 border-red-950 text-base font-bold hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-950"
              href="#"
            >
              Get a day entry →
            </a>
          </article>
          <article className="border-2 border-red-950 bg-white p-6 shadow-[8px_8px_0_#450a0a] sm:p-8">
            <div className="flex flex-wrap justify-between gap-3">
              <h3 className="text-2xl font-bold">The ten-visit card</h3>
              <span className="self-start border border-red-950 px-2 py-1 text-xs font-bold uppercase">Save £30</span>
            </div>
            <ol className="mt-8 grid grid-cols-5 gap-3" role="list" aria-label="Ten climbing visits included">
              <li
                className="grid aspect-square place-items-center rounded-full border-2 border-dashed border-red-950 text-sm font-bold"
              >
                1
              </li>
              <li
                className="grid aspect-square place-items-center rounded-full border-2 border-dashed border-red-950 text-sm font-bold"
              >
                2
              </li>
              <li
                className="grid aspect-square place-items-center rounded-full border-2 border-dashed border-red-950 text-sm font-bold"
              >
                3
              </li>
              <li
                className="grid aspect-square place-items-center rounded-full border-2 border-dashed border-red-950 text-sm font-bold"
              >
                4
              </li>
              <li
                className="grid aspect-square place-items-center rounded-full border-2 border-dashed border-red-950 text-sm font-bold"
              >
                5
              </li>
              <li
                className="grid aspect-square place-items-center rounded-full border-2 border-dashed border-red-950 text-sm font-bold"
              >
                6
              </li>
              <li
                className="grid aspect-square place-items-center rounded-full border-2 border-dashed border-red-950 text-sm font-bold"
              >
                7
              </li>
              <li
                className="grid aspect-square place-items-center rounded-full border-2 border-dashed border-red-950 text-sm font-bold"
              >
                8
              </li>
              <li
                className="grid aspect-square place-items-center rounded-full border-2 border-dashed border-red-950 text-sm font-bold"
              >
                9
              </li>
              <li
                className="grid aspect-square place-items-center rounded-full border-2 border-dashed border-red-950 text-sm font-bold"
              >
                10
              </li>
            </ol>
            <div className="mt-8 flex flex-wrap items-baseline gap-3">
              <p className="text-5xl font-bold tracking-tight">£110</p>
              <p className="text-sm">£11 per visit / valid for 12 months</p>
            </div>
            <a
              className="mt-6 flex min-h-12 items-center justify-center bg-red-950 px-4 text-sm font-bold text-white hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-950"
              href="#"
            >
              Pick up a ten-visit card
            </a>
          </article>
        </div>
        <p
          className="mt-10 border-t-2 border-red-950 pt-5 text-sm"
        >
          First time? A 15-minute safety induction is included. Shoe hire £3. Ages 14+, with an adult for
          under 18s.
        </p>
      </div>
    </section>
  )
}
