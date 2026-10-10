export default function TestimonialsRestorationCaption() {
  return (
    <section className="bg-stone-50 text-stone-900 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <header>
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-600">Quiet Frame / After conservation</p>
          <h2 className="mt-4 max-w-2xl text-4xl leading-tight font-medium tracking-tight sm:text-5xl">Back where it belongs.</h2>
        </header>
        <div className="mt-10">
          <article className="grid gap-8 border-t border-stone-200 py-8 md:grid-cols-[11rem_1fr] md:gap-10">
            <img className="aspect-[4/5] w-44 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" alt="Portrait of restoration client Daniel" width={400} height={600} />
            <figure className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest text-stone-600">Object 046 / Family photograph, 1932</p>
              <blockquote className="mt-5 max-w-[46rem] text-2xl leading-[1.5]">“They sent a condition report before touching the photograph. The crease is still part of its history, but my grandmother’s face is clear again.”</blockquote>
              <figcaption>
                <p className="mt-6 text-sm font-semibold">Daniel Mercer</p>
                <p className="mt-1 text-sm text-stone-600">Silver gelatin print / Conserved in September</p>
              </figcaption>
            </figure>
          </article>
          <article className="grid gap-8 border-t border-stone-200 py-8 md:grid-cols-[11rem_1fr] md:gap-10">
            <img className="aspect-[4/5] w-44 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" alt="Portrait of restoration client Amelie" width={400} height={500} />
            <figure className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest text-stone-600">Object 051 / Botanical print, 1880</p>
              <blockquote className="mt-5 max-w-[46rem] text-2xl leading-[1.5]">“The paper was too brittle to unroll. Quiet Frame made a mount that lets us show it safely, without pretending it is new.”</blockquote>
              <figcaption>
                <p className="mt-6 text-sm font-semibold">Amelie Laurent</p>
                <p className="mt-1 text-sm text-stone-600">Hand-coloured lithograph / Mounted in October</p>
              </figcaption>
            </figure>
          </article>
        </div>
        <a className="mt-6 inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" href="#">Ask us about a piece in your care</a>
      </div>
    </section>
  )
}
