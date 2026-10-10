// Fonts: Instrument Serif (https://fonts.google.com/specimen/Instrument+Serif)
export default function NavbarArchiveRoom() {
  return (
    <header className="bg-stone-950 font-['Instrument_Serif',ui-serif,Georgia,serif] text-orange-100">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-8 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.2fr]">
        <div>
          <a href="#" className="block w-fit text-5xl leading-none tracking-tight underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Folio House</a>
          <p className="mt-3 text-base">An archive of printed things, 1880 to now.</p>
        </div>
        <nav aria-label="Archive collections" className="grid grid-cols-2 gap-4 text-lg">
          <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">The catalog</a>
          <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">New acquisitions</a>
          <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Research notes</a>
          <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Support the archive</a>
        </nav>
        <a href="#" className="flex items-center gap-4 border-t border-stone-600 pt-4 underline-offset-4 md:col-span-2 lg:col-span-1 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">
          <img
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1600&q=80"
            alt="Open notebook and research materials on a writing desk"
            width="1600"
            height="1200"
            className="size-20 shrink-0 object-cover"
          />
          <span><span className="block text-lg">A seat in the reading room</span><span className="mt-2 block text-base">Tuesday–Saturday, 10am–5pm</span></span>
        </a>
      </div>
    </header>
  )
}
