// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function TestimonialsCruxRoute() {
  return (
    <section className="bg-neutral-950 text-neutral-100 font-['Archivo',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24 grid gap-12 md:grid-cols-[17.5rem_1fr] md:gap-16">
        <header>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">Chalkline / From the wall</p>
          <h2 className="mt-5 text-4xl leading-[1.05] font-black uppercase sm:text-6xl">Your next move.</h2>
          <p className="mt-6 text-sm leading-relaxed text-neutral-300">New shoes, old hands, one more attempt. A few voices from our evening sessions.</p>
          <a className="mt-8 inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current text-orange-400" href="#">Plan your first climb</a>
        </header>
        <div className="border-l-4 border-orange-400 pl-6 sm:pl-8">
          <div className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-neutral-700 py-8">
            <span className="text-3xl font-bold text-orange-400" aria-hidden="true">01</span>
            <figure>
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">First session / V0</p>
              <blockquote className="mt-3 text-2xl leading-[1.5] font-medium">“The coach showed me where to put my feet before saying anything about strength. I finished a route I had walked past twice.”</blockquote>
              <figcaption className="mt-5 text-sm text-neutral-300">Elise Grant / New climber</figcaption>
            </figure>
          </div>
          <div className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-neutral-700 py-8">
            <span className="text-3xl font-bold text-orange-400" aria-hidden="true">02</span>
            <figure>
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">Six months in / V3</p>
              <blockquote className="mt-3 text-2xl leading-[1.5] font-medium">“The setting changes every week, but the easy routes get just as much thought as the hard ones.”</blockquote>
              <figcaption className="mt-5 text-sm text-neutral-300">Pavel Novak / Tuesday regular</figcaption>
            </figure>
          </div>
          <div className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-neutral-700 py-8">
            <span className="text-3xl font-bold text-orange-400" aria-hidden="true">03</span>
            <figure>
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">Back on the wall / V5</p>
              <blockquote className="mt-3 text-2xl leading-[1.5] font-medium">“There is room to fall safely, and nobody is waiting to tell you what you did wrong. That is why I keep coming back.”</blockquote>
              <figcaption className="mt-5 text-sm text-neutral-300">Hana Morris / Returning after injury</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
