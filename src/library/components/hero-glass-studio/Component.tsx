// Fonts: Fraunces (https://fonts.google.com/specimen/Fraunces)
export default function HeroGlassStudio() {
  return (
    <section className="bg-lime-50 text-lime-950 font-['Fraunces',ui-serif,Georgia,serif]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_2fr_1fr]">
          <div className="self-stretch">
            <p className="text-2xl leading-tight font-semibold">Lumen<br />Glassworks</p>
            <p className="mt-8 text-sm leading-relaxed text-lime-900">Studio collection<br />Vessel LG / 018</p>
            <p className="mt-12 text-xs leading-relaxed text-lime-900">Shaped by breath.<br />Since 2009.</p>
          </div>
          <figure className="rounded-t-[10rem] border border-lime-800 p-8">
            <svg className="aspect-[4/5] w-full text-lime-900 sm:aspect-[3/2] lg:aspect-[4/5]" aria-hidden="true" viewBox="0 0 400 500" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M163 92H237V188C237 216 296 234 296 278V424C296 454 104 454 104 424V278C104 234 163 216 163 188Z" fill="#d9e8c3" />
              <path d="M163 92C163 78 237 78 237 92C237 106 163 106 163 92ZM163 188C180 198 220 198 237 188M104 278C136 297 264 297 296 278M104 424C136 442 264 442 296 424" />
              <path d="M181 111V191C181 226 124 243 124 280V406" stroke="#f7fee7" stroke-width="8" />
              <path d="M259 297V412M145 451H255M200 60V35M100 136 82 124M300 136 318 124" />
            </svg>
            <figcaption className="mt-6 text-center text-xs text-lime-900">Study 018 / Reed glass carafe</figcaption>
          </figure>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wider">Glass for everyday tables</p>
            <h1 className="mt-5 text-[2.5rem] leading-[1.15] font-semibold">Light, held in glass.</h1>
            <p className="mt-6 text-base leading-relaxed text-lime-900">Molten glass, a turning iron and a steady breath. We make small runs of carafes and tumblers, each with the slight variations of a working hand.</p>
            <a href="#" className="mt-8 inline-flex min-h-11 items-center border-b border-lime-800 text-base hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-950">Explore the vessels ↗</a>
            <p className="mt-8 text-sm leading-relaxed text-lime-900">Open studio weekend<br />7–8 November / 10am–4pm</p>
          </div>
        </div>
        <dl className="mt-12 flex flex-wrap justify-between gap-8 border-t border-lime-800 pt-6">
          <div className="text-xs text-lime-900">
            <dt>This collection</dt>
            <dd className="mt-2 text-xl text-lime-950">18 vessel forms</dd>
          </div>
          <div className="text-xs text-lime-900">
            <dt>At the furnace</dt>
            <dd className="mt-2 text-xl text-lime-950">4 glassblowers</dd>
          </div>
          <div className="text-xs text-lime-900">
            <dt>The material</dt>
            <dd className="mt-2 text-xl text-lime-950">Recycled clear glass</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
