// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function CtaAlpineResidency() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white font-['Newsreader',ui-serif,Georgia,serif] antialiased">
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
        alt="Layered Alpine mountain peaks beneath a pale sky"
        width={1600}
        height={1067}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-slate-950/90 to-slate-950/60"
      ></div>
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/30 pb-6">
          <p className="text-2xl">Stillhouse</p>
          <p className="text-xs tracking-widest uppercase text-amber-200">
            Artist residency / Dolomites
          </p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:gap-20">
          <div>
            <h2 className="max-w-xl text-[3.25rem] leading-[1.05] tracking-tight sm:text-[5rem]">
              A little distance. A different perspective.
            </h2>
            <p className="mt-6 max-w-md text-xl leading-7 text-slate-100">
              Four weeks to follow a thought without rushing it. A private
              studio, a shared table and the mountains just outside.
            </p>
          </div>
          <div className="rounded-2xl border border-white/30 bg-slate-950/70 p-6 backdrop-blur-md sm:p-8">
            <h3 className="text-2xl">The spring residency</h3>
            <dl className="mt-6 grid gap-4 text-base">
              <div className="flex flex-wrap justify-between gap-3 border-b border-white/20 pb-3">
                <dt className="text-slate-200">Dates</dt>
                <dd>3–30 May 2027</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-3 border-b border-white/20 pb-3">
                <dt className="text-slate-200">Places</dt>
                <dd>Six artists</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-3 border-b border-white/20 pb-3">
                <dt className="text-slate-200">Apply by</dt>
                <dd>15 December 2026</dd>
              </div>
            </dl>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-lg bg-amber-200 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Read the application brief
              </a>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              Open to all disciplines. Two fully funded places available.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
