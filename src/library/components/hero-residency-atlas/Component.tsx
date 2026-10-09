// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function HeroResidencyAtlas() {
  return (
    <section className="bg-cyan-50 text-cyan-950 font-['Newsreader',ui-serif,Georgia,serif]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <p className="text-3xl leading-tight font-medium">Portico House</p>
          <p className="text-sm text-cyan-900">A residency in the old quarter / Valletta</p>
        </div>
        <figure className="mt-8">
          <img className="h-72 w-full object-cover object-center sm:h-96" src="https://images.unsplash.com/photo-1524230572899-a752b3835840?w=1600&q=80" alt="White stone arches framing steps and a long light-filled passage" width="1600" height="2133" />
          <figcaption className="mt-3 flex flex-wrap justify-between gap-3 text-sm text-cyan-900">
            <span>Room to look. Time to stay.</span>
            <span>Field study 06 / Arcades and thresholds</span>
          </figcaption>
        </figure>
        <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_1fr_1fr]">
          <div className="border-t border-cyan-800 pt-5">
            <h1 className="text-[2.75rem] leading-[1.05] tracking-tight sm:text-[4rem]">A city is best<br />read slowly.</h1>
          </div>
          <div className="border-t border-cyan-800 pt-5">
            <h2 className="text-sm text-cyan-900">Spring residency</h2>
            <p className="mt-4 text-2xl leading-snug"><time dateTime="2027-03-01">1 March</time><br />to <time dateTime="2027-04-12">12 April 2027</time></p>
            <p className="mt-4 text-sm leading-relaxed text-cyan-900">Six weeks. Eight residents.<br />A room and a shared studio.</p>
          </div>
          <div className="border-t border-cyan-800 pt-5">
            <p className="text-lg leading-relaxed">For architects, writers and artists who want to spend time with a place before making something about it.</p>
            <a href="#" className="mt-6 inline-flex min-h-12 items-center bg-cyan-950 px-5 py-3 text-sm text-cyan-50 hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-950">Read the open call ↗</a>
            <p className="mt-3 text-xs text-cyan-900">Apply by 30 November</p>
          </div>
        </div>
      </div>
    </section>
  )
}
