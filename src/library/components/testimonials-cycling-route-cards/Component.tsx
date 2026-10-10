// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function TestimonialsCyclingRouteCards() {
  return (
    <section className="bg-emerald-50 text-emerald-950 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <header className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Spoke &amp; Path / Rider stories</p>
            <h2 className="mt-4 max-w-2xl text-4xl leading-tight font-medium tracking-tight sm:text-5xl">Good days, at your own pace.</h2>
          </div>
          <p className="max-w-[15rem] text-sm leading-relaxed">Two routes, two riders, and the details that made their week work.</p>
        </header>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <figure className="flex flex-col border border-emerald-200 bg-white">
            <div className="flex flex-wrap justify-between gap-3 border-b border-emerald-200 p-6">
              <p className="text-lg font-semibold">Bath → Bradford-on-Avon</p>
              <p className="text-xs text-emerald-700">SP 014 / Towpath</p>
            </div>
            <blockquote className="grow p-6 text-2xl leading-[1.5]">“Our guide found a flat route the children could finish. The bags were already at the inn, so we had time for one more stop by the canal.”</blockquote>
            <figcaption className="flex flex-wrap justify-between gap-4 border-t border-dashed border-emerald-200 p-6">
              <div>
                <p className="text-sm font-semibold">Sofia Lind</p>
                <p className="mt-1 text-xs text-emerald-700">Family tour / April 2026</p>
              </div>
              <p className="text-xs uppercase tracking-wide">3 days</p>
            </figcaption>
          </figure>
          <figure className="flex flex-col border border-emerald-200 bg-white">
            <div className="flex flex-wrap justify-between gap-3 border-b border-emerald-200 p-6">
              <p className="text-lg font-semibold">Girona → Costa Brava</p>
              <p className="text-xs text-emerald-700">SP 028 / Coastal</p>
            </div>
            <blockquote className="grow p-6 text-2xl leading-[1.5]">“They fitted the bike before day one and marked every water stop. I could ride at my own speed and still meet the group for lunch.”</blockquote>
            <figcaption className="flex flex-wrap justify-between gap-4 border-t border-dashed border-emerald-200 p-6">
              <div>
                <p className="text-sm font-semibold">Daniel Okafor</p>
                <p className="mt-1 text-xs text-emerald-700">Self-guided / May 2026</p>
              </div>
              <p className="text-xs uppercase tracking-wide">5 days</p>
            </figcaption>
          </figure>
        </div>
        <a className="mt-8 inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" href="#">Choose your cycling tour</a>
      </div>
    </section>
  )
}
