// Fonts: Cormorant Garamond (https://fonts.google.com/specimen/Cormorant+Garamond)
export default function FooterPerfumeryBlotter() {
  return (
    <footer className="bg-stone-950 font-['Cormorant_Garamond',ui-serif,Georgia,serif] text-orange-100 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_15rem] lg:grid-cols-[1fr_15rem_12rem]">
          <div>
            <a href="#" className="text-[2rem] tracking-[0.12em] uppercase underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Sillage No. 8</a>
            <h2 className="mt-6 max-w-xl text-[2.75rem] leading-[1.05] sm:text-[4rem]">Something to<br /><em className="italic">remember you by.</em></h2>
            <p className="mt-5 max-w-sm font-sans text-sm leading-6 text-stone-300">Independent perfumery in Grasse. Composed in small batches, worn close to the skin.</p>
            <a href="#" className="mt-6 inline-block text-2xl italic underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Find your first scent ↗</a>
          </div>
          <figure>
            <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80" alt="Black glass perfume bottle on rose-pink paper" width={800} height={600} className="h-64 w-full object-cover" />
            <figcaption className="mt-3 font-sans text-xs leading-5 text-stone-300">Bottle study / Black glass, rose paper.<br />Grasse, France / Since 2014</figcaption>
          </figure>
          <div className="border-y border-orange-100/30 py-5 md:col-span-2 lg:col-span-1">
            <h2 className="font-sans text-xs uppercase tracking-widest">Notes from No. 8</h2>
            <ol role="list" className="mt-5 grid gap-5 text-xl">
              <li><span className="mb-1 block font-sans text-[0.625rem] uppercase tracking-widest text-stone-300">01 / Opening</span>Bitter orange</li>
              <li><span className="mb-1 block font-sans text-[0.625rem] uppercase tracking-widest text-stone-300">02 / Heart</span>Iris &amp; black tea</li>
              <li><span className="mb-1 block font-sans text-[0.625rem] uppercase tracking-widest text-stone-300">03 / Memory</span>Cedar, softly</li>
            </ol>
          </div>
        </div>
        <div className="mt-10 grid gap-5 border-t border-orange-100/30 pt-6 font-sans text-xs text-stone-300 md:grid-cols-[1fr_auto]">
          <nav aria-label="Perfumery collection" className="flex flex-wrap gap-x-6 gap-y-3">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">All fragrances</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Discovery set</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Stockists</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">The atelier</a>
          </nav>
          <nav aria-label="Perfumery policies" className="flex flex-wrap gap-x-6 gap-y-3">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Delivery &amp; returns</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Privacy</a>
          </nav>
          <p className="md:col-span-2">© 2026 Sillage No. 8 / Take your time. Scent does.</p>
        </div>
      </div>
    </footer>
  )
}
