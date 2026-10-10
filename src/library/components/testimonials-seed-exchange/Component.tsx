// Fonts: DM Mono (https://fonts.google.com/specimen/DM+Mono)
export default function TestimonialsSeedExchange() {
  return (
    <section className="bg-green-50 text-green-950 font-['DM_Mono',ui-monospace,monospace] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <header className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-widest">Common Acre / Grower reports</p>
            <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-medium sm:text-5xl sm:leading-tight">Saved locally. Grown again.</h2>
          </div>
          <p className="border-2 border-green-950 bg-yellow-200 p-4 text-sm">128 varieties in circulation</p>
        </header>
        <div className="mt-10 grid gap-0.5 border-2 border-green-950 bg-green-300 md:grid-cols-2">
          <figure className="bg-green-50 p-6 sm:p-8">
            <p className="text-xs text-green-800">CA / 0148</p>
            <h3 className="mt-4 text-xl font-medium">Runner bean · Painted Lady</h3>
            <blockquote className="mt-5 text-base leading-relaxed">“Every packet came with the grower’s notes. I knew to wait for warm soil, and all twelve plants made it.”</blockquote>
            <figcaption className="mt-6 text-xs text-green-800">Inez Cole / Allotment 42, Bristol</figcaption>
          </figure>
          <figure className="bg-green-50 p-6 sm:p-8">
            <p className="text-xs text-green-800">CA / 0203</p>
            <h3 className="mt-4 text-xl font-medium">Tomato · Black Krim</h3>
            <blockquote className="mt-5 text-base leading-relaxed">“These were saved ten miles from my garden. They handled our wet August better than anything I bought.”</blockquote>
            <figcaption className="mt-6 text-xs text-green-800">David Ahn / Back garden, Hebden Bridge</figcaption>
          </figure>
          <figure className="bg-green-50 p-6 sm:p-8">
            <p className="text-xs text-green-800">CA / 0091</p>
            <h3 className="mt-4 text-xl font-medium">Pea · Telephone</h3>
            <blockquote className="mt-5 text-base leading-relaxed">“I sent in a jar of peas and got five varieties back. The tall ones now cover the school fence.”</blockquote>
            <figcaption className="mt-6 text-xs text-green-800">Ruth Elmi / Eastbank primary school</figcaption>
          </figure>
          <figure className="bg-green-50 p-6 sm:p-8">
            <p className="text-xs text-green-800">CA / 0316</p>
            <h3 className="mt-4 text-xl font-medium">Lettuce · Winter Density</h3>
            <blockquote className="mt-5 text-base leading-relaxed">“The sowing date on the envelope was the useful bit. We picked leaves right through November.”</blockquote>
            <figcaption className="mt-6 text-xs text-green-800">Milo Dunn / Market plot, Norwich</figcaption>
          </figure>
        </div>
        <a className="mt-8 inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" href="#">Browse the autumn seed exchange</a>
      </div>
    </section>
  )
}
