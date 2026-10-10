// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function CtaSailingWeek() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white font-['Newsreader',ui-serif,Georgia,serif] antialiased">
      <img
        src="https://images.unsplash.com/photo-1589730349861-f17e3939c207?w=1600&q=80"
        alt="Sailing yachts with dark sails cutting across coastal water"
        width={1600}
        height={2400}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-slate-950/90 to-slate-950/60"
      ></div>
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/30 pb-6">
          <p className="text-2xl">Tack & Tide</p>
          <p className="text-xs tracking-widest uppercase text-amber-200">
            Sailing school / Coastal courses
          </p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:gap-20">
          <div>
            <h2 className="max-w-xl text-[3.25rem] leading-[1.05] tracking-tight sm:text-[5rem]">
              Learn the ropes. Take the helm.
            </h2>
            <p className="mt-6 max-w-md text-xl leading-7 text-slate-100">
              Five days on the water with an instructor and a small crew. Practise
              sail trim, steering and mooring, then bring the boat home together.
            </p>
          </div>
          <div className="rounded-2xl border border-white/30 bg-slate-950/70 p-6 backdrop-blur-md sm:p-8">
            <h3 className="text-2xl">The spring sailing week</h3>
            <dl className="mt-6 grid gap-4 text-base">
              <div className="flex flex-wrap justify-between gap-3 border-b border-white/20 pb-3">
                <dt className="text-slate-200">Course dates</dt>
                <dd>12–16 April 2027</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-3 border-b border-white/20 pb-3">
                <dt className="text-slate-200">Crew size</dt>
                <dd>Four learners</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-3 border-b border-white/20 pb-3">
                <dt className="text-slate-200">Course fee</dt>
                <dd>£695 per person</dd>
              </div>
            </dl>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-lg bg-amber-200 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                View the course plan
              </a>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              Beginners welcome. Boat, equipment and harbour fees included.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
