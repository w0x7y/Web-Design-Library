// Fonts: DM Sans (https://fonts.google.com/specimen/DM+Sans)
export default function CtaJazzTable() {
  return (
    <section className="bg-zinc-950 text-zinc-100 font-['DM_Sans',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-wrap justify-between gap-4 text-xs tracking-widest uppercase text-zinc-300">
          <p>Lowlight Jazz Club</p>
          <p>Friday sessions / Doors at 19:00</p>
        </div>
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.2fr_1fr_.7fr]">
          <div>
            <h2 className="max-w-md text-[2.75rem] leading-[1.05] tracking-tight sm:text-[3.5rem]">
              A table close to the music.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-zinc-300">
              The quartet takes the stage at eight. Book a table, order something at
              the bar and settle in for an evening of live jazz.
            </p>
            <div className="mt-7">
              <a
                href="#"
                className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Reserve a table
              </a>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80"
            alt="Close-up of a musician playing a brass trumpet in warm stage light"
            width={800}
            height={450}
            className="aspect-square w-full rounded-3xl object-cover"
          />
          <dl className="grid gap-6 border-t border-zinc-700 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
            <div>
              <dt className="text-[2rem] leading-none font-medium">2 sets</dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-300">
                Live music at 20:00 and 21:30. Your table is yours for both.
              </dd>
            </div>
            <div>
              <dt className="text-[2rem] leading-none font-medium">£18</dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-300">
                Per person, including entry. Drinks ordered separately.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
