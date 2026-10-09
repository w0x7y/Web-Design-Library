// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function HeroDistrictEnergy() {
  return (
    <section className="bg-linear-to-r from-orange-950 via-stone-950 to-stone-950 text-white font-['Manrope',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-2xl font-semibold tracking-tight">Embergrid</p>
          <p className="text-xs text-orange-100">District heat / Mossbank</p>
        </div>
        <div className="mt-12 grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs text-orange-200">One neighbourhood. Shared warmth.</p>
            <h1 className="mt-5 text-[2.75rem] leading-[1.1] font-semibold tracking-tight sm:text-[4rem]">The heat we need.<br />Closer to home.</h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-orange-100">Recover local waste heat and put it to work in the homes around it. Embergrid helps communities plan, measure and run a district heating network.</p>
            <a href="#" className="mt-8 inline-flex min-h-12 items-center rounded-lg bg-orange-200 px-5 py-3 text-sm font-semibold text-stone-950 hover:bg-orange-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200">Explore the Mossbank project ↗</a>
          </div>
          <figure className="mx-auto w-full max-w-md">
            <div className="relative aspect-square">
              <svg className="size-full" aria-hidden="true" viewBox="0 0 500 500" fill="none">
                <circle cx="250" cy="250" r="208" stroke="#78716c" strokeWidth="1" />
                <circle cx="250" cy="250" r="185" stroke="#44403c" strokeWidth="20" />
                <circle cx="250" cy="250" r="185" stroke="#fdba74" strokeWidth="20" strokeLinecap="round" strokeDasharray="721 1163" transform="rotate(-90 250 250)" />
                <path d="M250 15V30M485 250H470M250 485V470M15 250H30" stroke="#fed7aa" strokeWidth="2" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                <p className="text-xs text-orange-100">Recovered locally</p>
                <p className="text-5xl leading-none font-semibold tracking-tight">62<span className="text-2xl font-normal">%</span></p>
                <p className="text-sm text-orange-100">of this week’s heat</p>
              </div>
            </div>
            <figcaption className="mt-5 text-center text-xs leading-relaxed text-orange-100">Mossbank network / Week ending 11 October</figcaption>
          </figure>
        </div>
        <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-orange-300/40 pt-6">
          <div>
            <dt className="text-xs leading-relaxed text-orange-100">Connected to the network</dt>
            <dd className="mt-3 text-2xl leading-tight">248 homes</dd>
          </div>
          <div>
            <dt className="text-xs leading-relaxed text-orange-100">Heat delivered this week</dt>
            <dd className="mt-3 text-2xl leading-tight">18.4 MWh</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
