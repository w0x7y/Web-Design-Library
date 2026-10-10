// Fonts: Syne (https://fonts.google.com/specimen/Syne)
export default function TestimonialsWeatherRadar() {
  return (
    <section className="bg-fuchsia-950 text-orange-200 font-['Syne',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <header>
          <p className="text-xs font-semibold uppercase tracking-widest">Daymark Weather / In the field</p>
          <h2 className="mt-4 max-w-2xl text-4xl leading-tight font-bold tracking-tight sm:text-5xl">A forecast you can plan around.</h2>
        </header>
        <div className="mt-10 grid items-center gap-12 md:grid-cols-[1fr_1.3fr]">
          <div className="flex aspect-[1/1] flex-col items-center justify-between gap-6 bg-orange-200 p-6 text-neutral-950">
            <div className="flex w-full justify-between gap-4 text-xs font-semibold uppercase tracking-wide">
              <span>Daymark</span>
              <span>06:00 / Local radar</span>
            </div>
            <svg className="size-52 shrink-0 rounded-full bg-neutral-950 text-orange-200 sm:size-60" aria-hidden="true" viewBox="0 0 240 240">
              <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35">
                <circle cx="120" cy="120" r="104" />
                <circle cx="120" cy="120" r="72" />
                <circle cx="120" cy="120" r="40" />
                <path d="M16 120h208M120 16v208" />
              </g>
              <g fill="currentColor" opacity="0.35">
                <path d="M72 38c22-9 37 1 42 15s-5 27-23 29-31-6-34-20 2-19 15-24Z" />
                <path d="M151 55c19-5 32 9 28 23s-17 22-30 17-16-15-12-24 5-13 14-16Z" />
                <path d="M151 153c25-5 35 6 29 20s-23 19-38 10-7-26 9-30Z" />
              </g>
              <path d="m120 120 68-68" stroke="currentColor" strokeWidth="2" />
              <circle cx="120" cy="120" r="4" fill="currentColor" />
            </svg>
            <p className="text-xl font-semibold">Rain moving east.</p>
          </div>
          <div>
            <div className="border-t border-fuchsia-200/30">
              <div className="grid grid-cols-[2rem_1fr] gap-4 border-b border-fuchsia-200/30 py-6">
                <span className="text-sm text-fuchsia-200">01</span>
                <figure>
                  <blockquote className="text-xl leading-relaxed">“The hourly rain view helped us move setup to the dry part of the morning. We had the stalls ready before the showers arrived.”</blockquote>
                  <figcaption className="mt-4 text-sm text-fuchsia-200">Clara Evans / Market coordinator</figcaption>
                </figure>
              </div>
              <div className="grid grid-cols-[2rem_1fr] gap-4 border-b border-fuchsia-200/30 py-6">
                <span className="text-sm text-fuchsia-200">02</span>
                <figure>
                  <blockquote className="text-xl leading-relaxed">“I can see the wind forecast for our harbour, with the uncertain hours marked. It gives the crew a useful starting point for the morning briefing.”</blockquote>
                  <figcaption className="mt-4 text-sm text-fuchsia-200">Malik Shaw / Harbour operations</figcaption>
                </figure>
              </div>
              <div className="grid grid-cols-[2rem_1fr] gap-4 border-b border-fuchsia-200/30 py-6">
                <span className="text-sm text-fuchsia-200">03</span>
                <figure>
                  <blockquote className="text-xl leading-relaxed">“The frost notice arrived the evening before. We covered the young plants and checked the updated forecast before opening the nursery.”</blockquote>
                  <figcaption className="mt-4 text-sm text-fuchsia-200">June Park / Plant nursery owner</figcaption>
                </figure>
              </div>
            </div>
            <a className="mt-6 inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" href="#">Explore the local forecast</a>
          </div>
        </div>
      </div>
    </section>
  )
}
