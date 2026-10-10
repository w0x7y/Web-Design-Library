// Fonts: DM Sans (https://fonts.google.com/specimen/DM+Sans)
export default function HeroLuthierGuitar() {
  return (
    <section className="bg-neutral-950 text-white font-['DM_Sans',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-2xl font-medium tracking-tight">roan guitars</p>
          <p className="text-xs text-neutral-300">Handbuilt acoustics / No. 12</p>
        </div>
        <div className="mt-12 grid items-end gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h1 className="text-[3rem] leading-[1.05] tracking-tight sm:text-[4.5rem]">Made to<br />be played.</h1>
            <img className="mt-8 aspect-[3/2] w-full object-cover" src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80" alt="Hands playing a natural-finish acoustic guitar, with its soundhole and fretboard in view" width="800" height="533" />
          </div>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-widest text-neutral-300">RG / Twelve</p>
            <h2 className="mt-4 text-[2rem] leading-tight">A voice of its own.</h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-300">A responsive spruce top. A neck shaped to your hand. Our small-body acoustic is built one at a time, then played and adjusted at the bench before it leaves the workshop.</p>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-neutral-600 py-5">
              <div>
                <dt className="text-xs text-neutral-300">Soundboard</dt>
                <dd className="mt-2 text-base">Sitka spruce</dd>
              </div>
              <div>
                <dt className="text-xs text-neutral-300">Scale length</dt>
                <dd className="mt-2 text-base">635 mm</dd>
              </div>
            </dl>
            <a href="#" className="mt-6 flex min-h-12 items-center justify-between bg-white px-5 py-3 text-sm font-medium text-neutral-950 hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Discuss a build / from £2,800 ↗</a>
            <p className="mt-4 text-xs text-neutral-300">Six-month setup included. Repairs at our own bench.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
