// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function FeaturesGlazeLibrary() {
  return (
    <section className="bg-orange-50 text-orange-950 font-['Newsreader',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold text-orange-800">Oru Clay / The glaze library</p>
          <h2 className="mt-4 text-[2.75rem] leading-[1.1] tracking-tight sm:text-[4rem]">A little different.<br />Every single time.</h2>
          <p className="mt-5 max-w-xl leading-relaxed text-orange-900">
            Four house glazes. Endless small variations, where the fire meets the clay.
          </p>
        </header>
        <ul role="list" className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <li className="flex min-h-64 flex-col justify-between rounded-t-[6rem] px-7 pt-12 pb-7 bg-stone-200 text-stone-900">
            <span className="text-sm">G01 / Satin</span>
            <h3 className="text-3xl">Chalk</h3>
          </li>
          <li className="flex min-h-64 flex-col justify-between rounded-t-[6rem] px-7 pt-12 pb-7 bg-lime-900 text-lime-50">
            <span className="text-sm">G02 / Gloss</span>
            <h3 className="text-3xl">Garden moss</h3>
          </li>
          <li className="flex min-h-64 flex-col justify-between rounded-t-[6rem] px-7 pt-12 pb-7 bg-amber-300 text-amber-950">
            <span className="text-sm">G03 / Satin</span>
            <h3 className="text-3xl">Honey</h3>
          </li>
          <li className="flex min-h-64 flex-col justify-between rounded-t-[6rem] px-7 pt-12 pb-7 bg-red-950 text-red-50">
            <span className="text-sm">G04 / Matte</span>
            <h3 className="text-3xl">Iron red</h3>
          </li>
        </ul>
        <div className="mt-10 grid gap-8 border-t border-orange-200 pt-8 md:grid-cols-[1.5fr_1fr]">
          <article>
            <h3 className="text-2xl leading-snug">Made to be used, then used again.</h3>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-orange-900">
              High-fired stoneware, comfortable handles and a foot that sits flat. All
              our tableware is dishwasher safe.
            </p>
          </article>
          <article>
            <h3 className="text-2xl leading-snug">The clay comes back.</h3>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-orange-900">
              Trimmings and unfired pieces return to the reclaim bucket. Each new
              batch starts with some of the last.
            </p>
            <div className="mt-5">
              <a href="#" className="inline-flex w-fit items-center gap-3 py-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-950">
                Inside our studio
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
