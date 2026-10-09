// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function HeroTideForecast() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-teal-950 via-cyan-950 to-slate-950 text-white font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif]">
      <svg className="absolute inset-x-0 bottom-0 h-72 w-full text-cyan-300 opacity-20" aria-hidden="true" viewBox="0 0 1440 280" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M0 90C240-30 480 210 720 90S1200-30 1440 90M0 120C240 0 480 240 720 120S1200 0 1440 120M0 150C240 30 480 270 720 150S1200 30 1440 150M0 180C240 60 480 300 720 180S1200 60 1440 180M0 210C240 90 480 330 720 210S1200 90 1440 210" />
      </svg>
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-2xl font-semibold tracking-tight">Sounding</p>
          <p className="text-xs text-cyan-100">Tides, before you head out.</p>
        </div>
        <div className="mt-14 grid items-center gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs text-cyan-100">For people who live by the water</p>
            <h1 className="mt-5 text-[2.75rem] leading-[1.1] font-medium tracking-tight sm:text-[4rem]">Make plans<br />with the tide.</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cyan-100">High water, low water and the hours in between. A clear forecast for your harbour, whether you are launching a kayak or walking the causeway.</p>
            <a href="#" className="mt-8 inline-flex min-h-12 items-center rounded-lg border border-white/50 bg-white/20 px-5 py-3 text-sm font-medium hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Find your coastal station ↗</a>
            <p className="mt-4 text-xs text-cyan-100">184 UK stations. Updated every hour.</p>
          </div>
          <figure className="rounded-3xl border border-white/30 bg-white/10 p-6 backdrop-blur-xl">
            <figcaption className="flex flex-wrap justify-between gap-3 text-xs text-cyan-100">
              <span>Whitby / Station 016</span>
              <time dateTime="2026-10-16">Friday, 16 October</time>
            </figcaption>
            <p className="mt-8 text-sm text-cyan-100">Next high water</p>
            <p className="mt-2 text-5xl leading-none font-medium tracking-tight">3.8 <span className="text-lg font-normal tracking-normal text-cyan-100">metres</span></p>
            <p className="mt-3 text-sm">At <time dateTime="2026-10-16T14:42:00">14:42 BST</time></p>
            <svg className="mt-8 aspect-[4/1] w-full" aria-hidden="true" viewBox="0 0 600 150" fill="none">
              <path d="M0 140H600M0 75H600M0 10H600" stroke="white" opacity="0.15" />
              <path d="M0 90C75 145 125 145 180 85S285-15 340 35S445 150 500 115S575 55 600 70" stroke="#a5f3fc" strokeWidth="3" />
              <path d="M317 0V150" stroke="white" opacity="0.5" strokeDasharray="4 6" />
            </svg>
            <div className="mt-3 flex justify-between text-xs text-cyan-100">
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>00:00</span>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-6 border-t border-white/30 pt-5">
              <div>
                <dt className="text-xs text-cyan-100">Next low water</dt>
                <dd className="mt-2 text-base">21:08 / 0.9 m</dd>
              </div>
              <div>
                <dt className="text-xs text-cyan-100">Tidal range</dt>
                <dd className="mt-2 text-base">2.9 metres</dd>
              </div>
            </dl>
            <p className="mt-5 text-xs leading-relaxed text-cyan-100">Illustrative forecast. Check local notices before setting out.</p>
          </figure>
        </div>
      </div>
    </section>
  )
}
