// Fonts: DM Sans (https://fonts.google.com/specimen/DM+Sans)
export default function CtaListeningTrial() {
  return (
    <section className="bg-zinc-950 text-zinc-100 font-['DM_Sans',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-wrap justify-between gap-4 text-xs tracking-widest uppercase text-zinc-300">
          <p>Sonder Sound</p>
          <p>The S1 / Over-ear wireless</p>
        </div>
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.2fr_1fr_.7fr]">
          <div>
            <h2 className="max-w-md text-[2.75rem] leading-[1.05] tracking-tight sm:text-[3.5rem]">
              Your records. Your room. Your call.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-zinc-300">
              Some things need more than a shop-floor listen. Take S1 home and
              spend a month with the music you know by heart.
            </p>
            <div className="mt-7">
              <a
                href="#"
                className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Start a home trial
              </a>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
            alt="Black over-ear headphones resting on a yellow surface"
            width={800}
            height={533}
            className="aspect-square w-full rounded-3xl object-cover"
          />
          <dl className="grid gap-6 border-t border-zinc-700 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
            <div>
              <dt className="text-[2rem] leading-none font-medium">30 days</dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-300">
                To listen, live with them and decide.
              </dd>
            </div>
            <div>
              <dt className="text-[2rem] leading-none font-medium">£0</dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-300">
                For return shipping if they are not your pair.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
