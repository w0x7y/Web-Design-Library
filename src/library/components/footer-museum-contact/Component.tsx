// Fonts: Instrument Serif (https://fonts.google.com/specimen/Instrument+Serif)
export default function FooterMuseumContact() {
  return (
    <footer className="bg-white text-neutral-950 font-['Instrument_Serif',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <a href="#" className="text-[2rem] tracking-[-0.05em] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" aria-label="Fold museum home">FOLD</a>
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">Museum of form / Copenhagen</p>
        </div>
        <div className="mt-8 grid items-end gap-8 md:grid-cols-[9rem_1fr] lg:grid-cols-[9rem_1fr_16rem]">
          <figure>
            <img src="https://images.unsplash.com/photo-1524230572899-a752b3835840?w=1600&q=80" alt="A pale arcade with repeated archways and a staircase" width={1600} height={2133} className="h-44 w-36 object-cover" />
            <figcaption className="mt-2 text-[0.75rem] text-neutral-600">Space is an exhibit, too.</figcaption>
          </figure>
          <div>
            <h2 className="text-[2.75rem] leading-[1] sm:text-[4.5rem]">Objects tell stories.<br />Come listen.</h2>
            <a href="mailto:hello@foldmuseum.example" className="mt-5 inline-block text-[1.5rem] italic text-red-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Start a conversation with Fold</a>
          </div>
          <div className="border-t border-neutral-300 pt-5 md:col-span-2 lg:col-span-1">
            <h2 className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">Leave time to wander</h2>
            <p className="mt-3 text-[1.125rem] leading-[1.5]">Tuesday–Sunday, 10:00–18:00<br />Thursdays until 21:00</p>
            <a href="#" className="mt-4 inline-block text-[1rem] text-red-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Plan your visit ↗</a>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t pt-6 text-[0.75rem] border-neutral-300">
          <p>© 2026 Fold Museum of Form</p>
          <nav aria-label="Museum resources" className="flex flex-wrap gap-x-6 gap-y-3 text-[0.875rem]">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Collections</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Learning</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Press room</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Access</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
