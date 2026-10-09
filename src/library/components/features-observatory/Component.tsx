export default function FeaturesObservatory() {
  return (
    <section className="bg-stone-950 text-stone-50 relative isolate overflow-hidden">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80" alt="" aria-hidden="true" width="1600" height="1067" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24 relative">
        <p className="text-sm font-semibold text-amber-200">Lantern Ridge Observatory</p>
        <h2 className="mt-4 max-w-2xl text-[2.5rem] leading-[1.1] font-medium tracking-tight sm:text-[3.5rem]">A darker sky.<br />A closer look.</h2>
        <p className="mt-5 max-w-xl leading-relaxed text-stone-200">
          Join a small group above the valley lights. Our guides make room for questions,
          quiet and a second look.
        </p>
        <div className="mt-12 rounded-2xl border border-white/30 bg-white/10 p-6 backdrop-blur-xl sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/30 pb-5">
            <p className="text-sm font-medium">What your evening includes</p>
            <p className="text-xs text-amber-200">Small groups / 12 guests maximum</p>
          </div>
          <div className="grid gap-8 pt-8 md:grid-cols-2 lg:gap-16">
            <article>
              <h3 className="text-2xl font-medium">An eyepiece for everyone</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-200">
                Two telescopes, adjusted for standing or seated viewing. Spend time
                with Saturn's rings instead of waiting in a long queue.
              </p>
            </article>
            <article>
              <h3 className="text-2xl font-medium">Learn the sky by looking</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-200">
                Find the season's constellations, follow a planet and learn why a
                faint patch of light is an entire galaxy.
              </p>
            </article>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-stone-200">Cloudy forecast? Move your booking at no charge.</p>
          <a href="#" className="inline-flex w-fit items-center gap-3 py-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-50">
            Find an evening session
          </a>
        </div>
      </div>
    </section>
  )
}
