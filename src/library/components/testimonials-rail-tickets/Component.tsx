// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function TestimonialsRailTickets() {
  return (
    <section className="bg-emerald-50 text-emerald-950 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <header className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Alder Night Rail / On board</p>
            <h2 className="mt-4 max-w-2xl text-4xl leading-tight font-medium tracking-tight sm:text-5xl">The journey is part of the trip.</h2>
          </div>
          <p className="max-w-[15rem] text-sm leading-relaxed">Real nights on the sleeper, told by the people in the next cabin.</p>
        </header>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <figure className="flex flex-col border border-emerald-200 bg-white">
            <div className="flex flex-wrap justify-between gap-3 border-b border-emerald-200 p-6">
              <p className="text-lg font-semibold">Edinburgh → London</p>
              <p className="text-xs text-emerald-700">AN 204 / Sleeper</p>
            </div>
            <blockquote className="grow p-6 text-2xl leading-[1.5]">“I put the children to bed in Edinburgh and woke them up for breakfast in London. The connecting door made all the difference.”</blockquote>
            <figcaption className="flex flex-wrap justify-between gap-4 border-t border-dashed border-emerald-200 p-6">
              <div>
                <p className="text-sm font-semibold">Marta Solberg</p>
                <p className="mt-1 text-xs text-emerald-700">Family cabin / September 2026</p>
              </div>
              <p className="text-xs uppercase tracking-wide">Cabin 08</p>
            </figcaption>
          </figure>
          <figure className="flex flex-col border border-emerald-200 bg-white">
            <div className="flex flex-wrap justify-between gap-3 border-b border-emerald-200 p-6">
              <p className="text-lg font-semibold">London → Inverness</p>
              <p className="text-xs text-emerald-700">AN 217 / Sleeper</p>
            </div>
            <blockquote className="grow p-6 text-2xl leading-[1.5]">“The host checked my bike reservation before we boarded. At Inverness, my bike was waiting beside the carriage, ready for the trail.”</blockquote>
            <figcaption className="flex flex-wrap justify-between gap-4 border-t border-dashed border-emerald-200 p-6">
              <div>
                <p className="text-sm font-semibold">Gareth Bell</p>
                <p className="mt-1 text-xs text-emerald-700">Solo traveller / September 2026</p>
              </div>
              <p className="text-xs uppercase tracking-wide">Berth 12</p>
            </figcaption>
          </figure>
        </div>
        <a className="mt-8 inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" href="#">Find your overnight route</a>
      </div>
    </section>
  )
}
