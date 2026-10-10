export default function FeaturesListeningRoom() {
  return (
    <section className="bg-neutral-950 text-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold text-amber-200">Aperture Audio / Listen closely</p>
        <h2 className="mt-4 max-w-4xl text-[2.5rem] leading-[1.1] font-medium tracking-tight sm:text-[3.5rem]">
          Hear the record you already love.
        </h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <figure>
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" alt="Over-ear headphones with black ear cushions on a warm yellow background" width="800" height="533" className="aspect-[3/2] w-full rounded-sm object-cover" />
            <figcaption className="mt-4 text-xs text-neutral-300">
              Bring your favourite recording. We will start there.
            </figcaption>
          </figure>
          <ol role="list" className="flex flex-col justify-center gap-8">
            <li className="grid grid-cols-[2rem_1fr] gap-4">
              <span className="pt-1 text-xs text-amber-200">01</span>
              <div>
                <h3 className="text-xl font-medium">Matched to your ears</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  Try open and closed designs side by side. Fit, weight and sound
                  matter more than a specification sheet.
                </p>
              </div>
            </li>
            <li className="grid grid-cols-[2rem_1fr] gap-4">
              <span className="pt-1 text-xs text-amber-200">02</span>
              <div>
                <h3 className="text-xl font-medium">Take your time</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  An hour in a quiet room, with your music and nobody reaching for
                  the volume control.
                </p>
              </div>
            </li>
            <li className="grid grid-cols-[2rem_1fr] gap-4">
              <span className="pt-1 text-xs text-amber-200">03</span>
              <div>
                <h3 className="text-xl font-medium">Keep it playing</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  Replacement pads, cables and a repair bench. We support the
                  equipment after the first listen.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-neutral-700 pt-6">
          <p className="text-sm text-neutral-300">Independent advice. No commission on the counter.</p>
          <a href="#" className="inline-flex w-fit items-center gap-3 py-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-50">
            Visit the listening room
          </a>
        </div>
      </div>
    </section>
  )
}
