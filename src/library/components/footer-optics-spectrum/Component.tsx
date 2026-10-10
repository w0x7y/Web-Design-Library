// Fonts: Plus Jakarta Sans (https://fonts.google.com/specimen/Plus+Jakarta+Sans)
export default function FooterOpticsSpectrum() {
  return (
    <footer className="bg-orange-50 font-['Plus_Jakarta_Sans',ui-sans-serif,system-ui,sans-serif] text-slate-950 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <a href="#" className="inline-block text-2xl font-semibold tracking-[-0.04em] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Aperture Optical</a>
            <h2 className="mt-6 max-w-md text-[2.25rem] leading-[1.15] font-medium tracking-[-0.04em] sm:text-[3rem]">Every detail.<br />In a different light.</h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-700">Independent lens makers for independent opticians. Prescription sun lenses, precise coatings and a lab team you can call.</p>
            <a href="mailto:lab@apertureoptical.example" className="mt-6 inline-block text-sm font-semibold underline underline-offset-4 hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Talk to the lab ↗</a>
          </div>
          <div className="relative isolate min-h-64 rounded-[2rem] bg-[linear-gradient(120deg_in_oklab,#fed7aa_0%,#fef3c7_45%,#99f6e4_100%)] p-5 sm:p-8">
            <span aria-hidden="true" className="pointer-events-none absolute top-5 right-5 -z-10 size-36 rounded-full border border-white/80 bg-white/30"></span>
            <span aria-hidden="true" className="pointer-events-none absolute top-10 right-20 -z-10 size-36 rounded-full border border-white/80 bg-white/20"></span>
            <p className="text-xs font-semibold uppercase tracking-widest">Made to your prescription</p>
            <div className="relative mt-16 grid gap-4 rounded-2xl border border-white/80 bg-white/60 p-5 backdrop-blur-lg sm:grid-cols-2">
              <nav aria-label="Optical lab resources" className="grid gap-3 text-sm font-medium">
                <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Lens catalogue</a>
                <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Coating guide</a>
                <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Open a trade account</a>
              </nav>
              <figure>
                <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80" alt="Black sunglasses with dark lenses on a pale grey surface" width={800} height={800} className="h-24 w-full rounded-lg object-cover" />
                <figcaption className="mt-2 text-xs text-slate-700">Clear thinking. Sun or shade.</figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-slate-950/20 pt-5 text-xs text-slate-700">
          <p>© 2026 Aperture Optical / Bristol, UK</p>
          <nav aria-label="Optical lab policies" className="flex flex-wrap gap-5">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Technical support</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Privacy</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Trade terms</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
