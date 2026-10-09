// Fonts: Fraunces (https://fonts.google.com/specimen/Fraunces)
export default function HeroSeedArchive() {
  return (
    <section className="bg-lime-50 text-lime-950 font-['Fraunces',ui-serif,Georgia,serif]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_2fr_1fr]">
          <div className="self-stretch">
            <p className="text-2xl leading-tight font-semibold">Heirloom<br />Registry</p>
            <p className="mt-8 text-sm leading-relaxed text-lime-900">Living archive<br />Accession 0284</p>
            <p className="mt-12 text-xs leading-relaxed text-lime-900">Collected, not forgotten.<br />Since 1987.</p>
          </div>
          <figure className="rounded-t-[10rem] border border-lime-800 p-8">
            <svg className="aspect-[4/5] w-full text-lime-900 sm:aspect-[3/2] lg:aspect-[4/5]" aria-hidden="true" viewBox="0 0 400 500" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M200 458V154M200 325C150 320 100 272 75 215M200 270C255 250 286 209 303 146M200 209C170 192 143 150 135 97" />
              <path d="M200 181C153 125 159 56 200 30C241 56 247 125 200 181Z" fill="#365314" />
              <path d="M82 235C29 210 21 158 46 130C86 130 112 178 82 235ZM289 183C258 135 285 84 324 79C347 113 334 164 289 183ZM144 138C102 130 83 87 101 55C139 57 163 100 144 138Z" fill="#4d7c0f" />
              <path d="M199 395C162 410 132 438 125 470M201 397C240 416 262 444 274 469M200 430L182 480M201 430L219 480" />
              <path d="M165 313C142 269 130 243 136 221C165 230 177 267 165 313ZM231 282C227 246 245 220 272 213C274 244 259 267 231 282Z" />
            </svg>
            <figcaption className="mt-6 text-center text-xs text-lime-900">Plate 0284 / Amaranthus caudatus</figcaption>
          </figure>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wider">Seeds for another season</p>
            <h1 className="mt-5 text-[2.5rem] leading-[1.15] font-semibold">A future worth growing.</h1>
            <p className="mt-6 text-base leading-relaxed text-lime-900">We keep the seeds that supermarkets leave behind. Open-pollinated varieties, grown by small farms and shared with the next pair of hands.</p>
            <a href="#" className="mt-8 inline-flex min-h-11 items-center border-b border-lime-800 text-base hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-950">Browse the collection ↗</a>
            <p className="mt-8 text-sm leading-relaxed text-lime-900">Autumn seed exchange<br />Orders open 18 October</p>
          </div>
        </div>
        <dl className="mt-12 flex flex-wrap justify-between gap-8 border-t border-lime-800 pt-6">
          <div className="text-xs text-lime-900">
            <dt>In the archive</dt>
            <dd className="mt-2 text-xl text-lime-950">1,284 varieties</dd>
          </div>
          <div className="text-xs text-lime-900">
            <dt>Kept by</dt>
            <dd className="mt-2 text-xl text-lime-950">86 growers</dd>
          </div>
          <div className="text-xs text-lime-900">
            <dt>Our promise</dt>
            <dd className="mt-2 text-xl text-lime-950">Always open-pollinated</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
