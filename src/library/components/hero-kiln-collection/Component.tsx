// Fonts: Young Serif (https://fonts.google.com/specimen/Young+Serif)
export default function HeroKilnCollection() {
  return (
    <section className="bg-red-50 text-red-950 font-['Young_Serif',ui-serif,Georgia,serif]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-red-200 pb-5">
          <p className="text-3xl leading-none">Orra</p>
          <p className="text-xs text-red-800">Objects for the table / Collection 04</p>
        </div>
        <div className="mt-12 grid items-end gap-8 md:grid-cols-[2fr_1fr]">
          <h1 className="text-[2.75rem] leading-[1.1] sm:text-[4rem]">Made to hold<br />the everyday.</h1>
          <p className="text-base leading-relaxed text-red-800">A bowl for the fruit that never lasts. A plate for the long lunch. Small runs of useful stoneware, thrown and glazed in our riverside studio.</p>
        </div>
        <figure className="mt-8">
          <div className="overflow-hidden">
            <svg className="-ml-[37.5%] h-56 w-[175%] sm:ml-0 sm:h-80 sm:w-full" aria-hidden="true" viewBox="0 0 1200 350" fill="none">
              <ellipse cx="600" cy="308" rx="275" ry="12" fill="#fecaca" />
              <path d="M270 135C280 226 365 310 600 310C835 310 920 226 930 135Z" fill="#e7c2b4" stroke="#450a0a" strokeWidth="2" />
              <ellipse cx="600" cy="135" rx="330" ry="99" fill="#fff1f2" stroke="#450a0a" strokeWidth="2" />
              <ellipse cx="600" cy="138" rx="305" ry="78" fill="#f4ddd3" stroke="#b36d5e" strokeWidth="2" />
              <path d="M361 220C489 263 711 263 839 220M408 272C493 291 707 291 792 272" stroke="#b36d5e" strokeWidth="2" />
              <ellipse cx="1015" cy="234" rx="115" ry="35" fill="#f4ddd3" stroke="#450a0a" strokeWidth="2" />
              <path d="M900 234V246C931 296 1099 296 1130 246V234" stroke="#450a0a" strokeWidth="2" />
            </svg>
          </div>
          <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-red-200 pt-6">
            <div>
              <p className="text-lg">The Gather collection</p>
              <p className="mt-2 text-xs leading-relaxed text-red-800">Iron-rich clay. Soft ash glaze. Forty pieces per firing.</p>
            </div>
            <a href="#" className="inline-flex min-h-11 items-center border-b border-red-950 text-sm hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-950">Shop the October firing ↗</a>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
