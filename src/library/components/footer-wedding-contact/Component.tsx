// Fonts: Instrument Serif (https://fonts.google.com/specimen/Instrument+Serif)
export default function FooterWeddingContact() {
  return (
    <footer className="bg-white text-neutral-950 font-['Instrument_Serif',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <a href="#" className="text-[2rem] tracking-[-0.05em] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" aria-label="Petal and Promise home">PETAL &amp; PROMISE</a>
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">Wedding planning / Bath</p>
        </div>
        <div className="mt-8 grid items-end gap-8 md:grid-cols-[9rem_1fr] lg:grid-cols-[9rem_1fr_16rem]">
          <figure>
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" alt="A newly married couple holding a bouquet in warm evening light" width={800} height={533} className="h-44 w-36 object-cover" />
            <figcaption className="mt-2 text-[0.75rem] text-neutral-600">Your day, in your own way.</figcaption>
          </figure>
          <div>
            <h2 className="text-[2.75rem] leading-[1] sm:text-[4.5rem]">Two people.<br />One good day.</h2>
            <a href="mailto:hello@petalandpromise.example" className="mt-5 inline-block text-[1.5rem] italic text-red-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Tell us what you have in mind</a>
          </div>
          <div className="border-t border-neutral-300 pt-5 md:col-span-2 lg:col-span-1">
            <h2 className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">Time for a first conversation</h2>
            <p className="mt-3 text-[1.125rem] leading-[1.5]">Tuesday–Friday, 10:00–17:00<br />Evenings by appointment</p>
            <a href="#" className="mt-4 inline-block text-[1rem] text-red-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Book a consultation ↗</a>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t pt-6 text-[0.75rem] border-neutral-300">
          <p>© 2026 Petal &amp; Promise Wedding Planning</p>
          <nav aria-label="Wedding planning resources" className="flex flex-wrap gap-x-6 gap-y-3 text-[0.875rem]">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Our weddings</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">How we work</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Planning journal</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Venue access</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
