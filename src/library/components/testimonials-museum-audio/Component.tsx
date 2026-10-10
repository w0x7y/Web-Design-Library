// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function TestimonialsMuseumAudio() {
  return (
    <section className="bg-slate-950 text-slate-100 font-['Newsreader',ui-serif,Georgia,serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <header>
          <p className="text-xs font-semibold uppercase tracking-widest font-sans text-sky-200">The Arcade Museum / Visitor voices</p>
          <h2 className="mt-5 max-w-2xl text-4xl leading-tight sm:text-5xl">Look a little longer.</h2>
        </header>
        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <figure>
            <img className="aspect-[4/5] w-full object-cover" src="https://images.unsplash.com/photo-1524230572899-a752b3835840?w=1600&q=80" alt="White arcades and stairs seen from the museum courtyard" width={1600} height={2133} />
            <figcaption className="mt-4 font-sans text-xs text-slate-300">The courtyard / Included with every exhibition ticket</figcaption>
          </figure>
          <div className="flex flex-col justify-center gap-10">
            <figure className="border-t border-slate-700 pt-6">
              <p className="font-sans text-xs uppercase tracking-widest text-sky-200">00:18 / After the architecture walk</p>
              <blockquote className="mt-5 text-3xl leading-[1.3] sm:text-4xl">“I have walked past this building for twenty years. The guide made me see the stone, the light and the people who laid it.”</blockquote>
              <figcaption className="mt-5 font-sans text-sm text-slate-300">Frank Medina / Local resident</figcaption>
            </figure>
            <figure className="border-t border-slate-700 pt-6">
              <p className="font-sans text-xs uppercase tracking-widest text-sky-200">01:42 / A family visit</p>
              <blockquote className="mt-5 text-3xl leading-[1.3] sm:text-4xl">“My daughter spent half an hour drawing one arch. Nobody hurried us into the next room.”</blockquote>
              <figcaption className="mt-5 font-sans text-sm text-slate-300">Tessa Wu / Visiting with Bea, age 9</figcaption>
            </figure>
            <a className="font-sans inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current text-sky-200" href="#">Explore the current programme</a>
          </div>
        </div>
      </div>
    </section>
  )
}
