// Fonts: Syne
export default function PricingAudioLicense() {
  return (
    <section
      className="bg-linear-to-br from-stone-950 via-amber-950 to-stone-950 font-['Syne',ui-sans-serif,system-ui,sans-serif] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <p
          className="text-xs font-semibold tracking-widest uppercase text-orange-200"
        >
          Fader Field / Independent sound library
        </p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-start lg:gap-16">
          <div>
            <h2
              className="text-4xl leading-[1.1] font-semibold tracking-tight sm:text-6xl"
            >
              The right sound. The right rights.
            </h2>
            <p
              className="mt-5 max-w-md text-sm leading-relaxed text-orange-100"
            >
              Field recordings, analogue textures and quietly strange loops. Download the full library with
              the license your work needs.
            </p>
            <article className="mt-8 rounded-2xl border border-white/30 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-xl font-semibold">For personal projects</h3>
              <p
                className="mt-5 max-w-md text-sm leading-relaxed text-orange-100"
              >
                Student films, private demos and work that is not monetised. Credit Fader Field when you share
                it.
              </p>
              <div className="mt-5 flex flex-wrap items-baseline gap-3">
                <p className="text-4xl font-semibold">£29</p>
                <p className="text-sm text-orange-100">one-time license</p>
              </div>
              <a
                className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4 hover:text-orange-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200"
                href="#"
              >
                Get the personal license
              </a>
            </article>
          </div>
          <article className="rounded-[2rem] border border-white/30 bg-white/10 p-6 backdrop-blur-md sm:p-10">
            <svg
              className="mb-8 h-12 w-full text-orange-300"
              aria-hidden="true"
              viewBox="0 0 276 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path
                d="M4 22v4m12-10v16m12-22v28m12-18v12m12-30v48m12-36v24m12-18v12m12-28v44m12-32v20m12-14v8m12-22v36m12-26v16m12-20v24m12-28v32m12-18v4m12-16v28m12-20v12m12-24v36m12-26v16m12-12v8m12-16v24m12-20v16m12-10v4"
              />
            </svg>
            <h3 className="text-xl font-semibold">For work that goes out into the world</h3>
            <p className="mt-6 text-7xl leading-none font-semibold tracking-tight">£149</p>
            <p className="mt-2 text-sm text-orange-100">One payment. Your license does not expire.</p>
            <dl className="mt-8 border-t border-white/30">
              <div className="flex flex-wrap justify-between gap-3 border-b border-white/30 py-4 text-sm">
                <dt>Client projects</dt>
                <dd className="font-semibold">Unlimited</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-3 border-b border-white/30 py-4 text-sm">
                <dt>Film, games &amp; podcasts</dt>
                <dd className="font-semibold">Worldwide</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-3 border-b border-white/30 py-4 text-sm">
                <dt>Paid advertising</dt>
                <dd className="font-semibold">Included</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-3 border-b border-white/30 py-4 text-sm">
                <dt>Future sound packs</dt>
                <dd className="font-semibold">12 months</dd>
              </div>
            </dl>
            <a
              className="mt-8 flex min-h-12 items-center justify-center rounded-lg bg-orange-200 px-5 text-sm font-semibold text-stone-950 hover:bg-orange-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200"
              href="#"
            >
              Get the commercial license
            </a>
            <p
              className="mt-5 text-xs leading-relaxed text-orange-100"
            >
              Use sounds in finished work. Resale or redistribution of the raw files is not permitted. Prices
              include UK VAT.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
