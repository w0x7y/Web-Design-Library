export default function FeaturesServiceIndex() {
  return (
    <section className="bg-stone-100 text-stone-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-orange-800">
            Our practice
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Good ideas,
            <br />
            made tangible.
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-stone-600">
            We help small teams make their next chapter visible, with a clear
            point of view and a careful hand.
          </p>
        </div>
        <ol role="list">
          <li className="grid grid-cols-[2rem_1fr] gap-4 border-t border-stone-300 py-6">
            <span className="pt-2 font-mono text-xs text-orange-800">01</span>
            <div>
              <h3 className="text-3xl tracking-tight">
                Position &amp; purpose
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-600">
                Find the useful truth at the heart of your business, then give
                everyone the language to explain it.
              </p>
              <p className="mt-4 text-xs text-orange-800">
                Strategy / Naming / Tone of voice
              </p>
            </div>
          </li>
          <li className="grid grid-cols-[2rem_1fr] gap-4 border-t border-stone-300 py-6">
            <span className="pt-2 font-mono text-xs text-orange-800">02</span>
            <div>
              <h3 className="text-3xl tracking-tight">
                Identity &amp; expression
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-600">
                An identity that feels like you and works in the places your
                audience actually meets you.
              </p>
              <p className="mt-4 text-xs text-orange-800">
                Visual identity / Art direction / Guidelines
              </p>
            </div>
          </li>
          <li className="grid grid-cols-[2rem_1fr] gap-4 border-t border-stone-300 py-6">
            <span className="pt-2 font-mono text-xs text-orange-800">03</span>
            <div>
              <h3 className="text-3xl tracking-tight">
                Digital &amp; experience
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-600">
                Useful websites with considered details, built to be easy for
                your team to keep up to date.
              </p>
              <p className="mt-4 text-xs text-orange-800">
                Web design / Development / Content systems
              </p>
            </div>
          </li>
          <li className="grid grid-cols-[2rem_1fr] gap-4 border-y border-stone-300 py-6">
            <span className="pt-2 font-mono text-xs text-orange-800">04</span>
            <div>
              <h3 className="text-3xl tracking-tight">Launch &amp; beyond</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-600">
                A practical plan for putting the work into the world and keeping
                it coherent as you grow.
              </p>
              <p className="mt-4 text-xs text-orange-800">
                Launch planning / Campaigns / Ongoing support
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}
