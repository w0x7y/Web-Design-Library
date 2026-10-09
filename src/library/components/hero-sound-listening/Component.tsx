// Fonts: DM Sans (https://fonts.google.com/specimen/DM+Sans)
export default function HeroSoundListening() {
  return (
    <section className="bg-neutral-950 text-white font-['DM_Sans',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-2xl font-medium tracking-tight">stillform</p>
          <p className="text-xs text-neutral-300">Listening equipment / No. 01</p>
        </div>
        <div className="mt-12 grid items-end gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h1 className="text-[3rem] leading-[1.05] tracking-tight sm:text-[4.5rem]">Put the world<br />on pause.</h1>
            <img className="mt-8 aspect-[3/2] w-full object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" alt="Black over-ear headphones resting on a warm yellow background" width="800" height="533" />
          </div>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-widest text-neutral-300">SF / One</p>
            <h2 className="mt-4 text-[2rem] leading-tight">For the whole album.</h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-300">A comfortable over-ear fit. A wired connection that just works. Balanced sound for hearing the little things your favourite records keep to themselves.</p>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-neutral-600 py-5">
              <div>
                <dt className="text-xs text-neutral-300">Driver</dt>
                <dd className="mt-2 text-base">40 mm dynamic</dd>
              </div>
              <div>
                <dt className="text-xs text-neutral-300">Weight</dt>
                <dd className="mt-2 text-base">235 g</dd>
              </div>
            </dl>
            <a href="#" className="mt-6 flex min-h-12 items-center justify-between bg-white px-5 py-3 text-sm font-medium text-neutral-950 hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Meet SF One / £149 ↗</a>
            <p className="mt-4 text-xs text-neutral-300">Two-year warranty. Replaceable ear cushions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
