// Fonts: Fraunces (https://fonts.google.com/specimen/Fraunces)
export default function TestimonialsFurnitureSecondLife() {
  return (
    <section className="bg-orange-50 text-stone-950 font-['Fraunces',ui-serif,Georgia,serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-300 pb-6">
          <p className="text-xs font-semibold uppercase tracking-widest font-sans text-orange-800">Regrain Studio / Customer notebook</p>
          <p className="font-sans text-xs text-stone-600">Delivery journal, entry 07</p>
        </header>
        <div className="mt-10 grid gap-12 md:grid-cols-[15rem_1fr]">
          <aside>
            <img className="size-28 object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" alt="Portrait of furniture customer Iris" width={400} height={267} />
            <p className="mt-4 font-sans text-sm font-semibold">Iris Bennett</p>
            <p className="mt-1 font-sans text-sm text-stone-600">Walnut dining table</p>
            <p className="mt-1 font-sans text-sm text-stone-600">Rebuilt from reclaimed boards</p>
          </aside>
          <div>
            <h2 className="text-4xl leading-tight tracking-tight sm:text-5xl">A table with another chapter.</h2>
            <figure>
              <blockquote className="mt-8 text-3xl leading-[1.3] sm:text-4xl sm:leading-[1.3]">“The boards came from an old school floor. Regrain kept the marks I liked and made a table that fits our small kitchen. Every meal adds something to its story.”</blockquote>
              <figcaption className="mt-6 font-sans text-sm text-orange-800">Iris, on bringing reclaimed wood home</figcaption>
            </figure>
            <div className="mt-10 grid gap-8 border-t border-stone-300 pt-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest font-sans text-stone-600">Choosing the timber</p>
                <p className="mt-3 text-lg leading-relaxed">“They sent close-up photos so I could choose the grain before work began.”</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest font-sans text-stone-600">After delivery</p>
                <p className="mt-3 text-lg leading-relaxed">“The care card explains how to oil the top. Nothing fussy, just a cloth and time.”</p>
              </div>
            </div>
            <a className="mt-8 font-sans inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" href="#">Explore the reclaimed collection</a>
          </div>
        </div>
      </div>
    </section>
  )
}
