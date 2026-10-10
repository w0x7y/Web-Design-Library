// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function FeaturesSakeFlight() {
  return (
    <section className="bg-orange-50 text-orange-950 font-['Newsreader',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold text-orange-800">Kawa Brewery / The tasting flight</p>
          <h2 className="mt-4 text-[2.75rem] leading-[1.1] tracking-tight sm:text-[4rem]">Rice, water, time.<br />Four ways to taste them.</h2>
          <p className="mt-5 max-w-xl leading-relaxed text-orange-900">
            Four small-batch sake styles, brewed beside the river. Taste them in order
            and find the bottle you want to take home.
          </p>
        </header>
        <ul role="list" className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <li className="flex min-h-64 flex-col justify-between rounded-t-[6rem] px-7 pt-12 pb-7 bg-stone-200 text-stone-900">
            <span className="text-sm">01 / Clean & dry</span>
            <h3 className="text-3xl">Junmai</h3>
          </li>
          <li className="flex min-h-64 flex-col justify-between rounded-t-[6rem] px-7 pt-12 pb-7 bg-lime-900 text-lime-50">
            <span className="text-sm">02 / Bright & fragrant</span>
            <h3 className="text-3xl">Ginjo</h3>
          </li>
          <li className="flex min-h-64 flex-col justify-between rounded-t-[6rem] px-7 pt-12 pb-7 bg-amber-300 text-amber-950">
            <span className="text-sm">03 / Soft & cloudy</span>
            <h3 className="text-3xl">Nigori</h3>
          </li>
          <li className="flex min-h-64 flex-col justify-between rounded-t-[6rem] px-7 pt-12 pb-7 bg-red-950 text-red-50">
            <span className="text-sm">04 / Rich & aged</span>
            <h3 className="text-3xl">Koshu</h3>
          </li>
        </ul>
        <div className="mt-10 grid gap-8 border-t border-orange-200 pt-8 md:grid-cols-[1.5fr_1fr]">
          <article>
            <h3 className="text-2xl leading-snug">A flight, with a little guidance.</h3>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-orange-900">
              Your host pours four 40ml tastes and explains the rice, brewing method
              and serving temperature of each. No tasting experience needed.
            </p>
          </article>
          <article>
            <h3 className="text-2xl leading-snug">Meet the people who brew it.</h3>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-orange-900">
              Look into the brewing room through the gallery window, then ask our team
              about the current batches over a final glass.
            </p>
            <div className="mt-5">
              <a href="#" className="inline-flex w-fit items-center gap-3 py-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-950">
                Plan a brewery visit
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
