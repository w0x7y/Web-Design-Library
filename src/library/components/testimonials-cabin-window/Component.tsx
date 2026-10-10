// Fonts: Instrument Serif (https://fonts.google.com/specimen/Instrument+Serif)
export default function TestimonialsCabinWindow() {
  return (
    <section className="relative overflow-hidden bg-teal-950 text-white font-['Instrument_Serif',ui-serif,Georgia,serif] antialiased">
      <img className="absolute inset-0 size-full object-cover" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80" alt="Layered mountain peaks in the early morning light" width={1600} height={1067} />
      <div className="absolute inset-0 [background-image:linear-gradient(to_top_right_in_oklab,oklch(27.7%_0.046_192.524_/_0.95),rgb(0_0_0_/_0.45))]" aria-hidden="true"></div>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24 relative grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-white/30 bg-teal-950/80 p-6 backdrop-blur-xl sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest font-sans text-cyan-100">Stillfjord / From the guest book</p>
          <h2 className="mt-5 text-4xl leading-[1.1] sm:text-5xl">Three days. No hurry.</h2>
          <figure>
            <blockquote className="mt-8 text-4xl leading-[1.2] sm:text-5xl">“We arrived with a list of walks. On the second morning we stayed by the window until noon. It was the best part of the trip.”</blockquote>
            <figcaption className="mt-8 border-t border-white/30 pt-5 font-sans text-sm text-cyan-100">Jules &amp; Ben / Cabin 04, early October</figcaption>
          </figure>
        </div>
        <aside className="self-end">
          <p className="text-xs font-semibold uppercase tracking-widest font-sans text-cyan-100">A note about the stay</p>
          <p className="mt-3 text-3xl">The ridge cabin</p>
          <p className="mt-3 max-w-[16rem] font-sans text-sm leading-relaxed text-cyan-100">Two guests. A stove, a deep window seat and the trail at the door.</p>
          <a className="mt-6 font-sans inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" href="#">Find a quiet weekend</a>
        </aside>
      </div>
    </section>
  )
}
