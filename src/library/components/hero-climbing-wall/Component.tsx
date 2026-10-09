// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function HeroClimbingWall() {
  return (
    <section className="bg-zinc-950 text-lime-300 font-['Archivo',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <p className="text-xl font-black tracking-tight">CRUX YARD</p>
          <p className="text-xs leading-relaxed text-zinc-300">Bouldering, East Dock<br />Weekdays 06:00–23:00</p>
        </div>
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <h1 className="text-[3.5rem] leading-[0.9] font-black tracking-[-0.05em] uppercase sm:text-[6rem] lg:text-[7rem]">Small holds.<br />Big grins.</h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-zinc-300">A new problem every week. A friendly spotter every night. Come find your feet on 900 square metres of bouldering.</p>
            <a href="#" className="mt-8 inline-flex min-h-14 items-center bg-lime-300 px-5 py-3 text-base font-bold text-zinc-950 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300">Try your first climb / £10 ↗</a>
          </div>
          <svg className="aspect-[4/5] w-full sm:aspect-[3/2] lg:aspect-[4/5]" aria-hidden="true" viewBox="0 0 400 500" fill="none">
            <path d="M0 500V0H270L400 140V500Z" fill="#27272a" />
            <path d="M65 500 155 320 110 220 238 72" stroke="#a1a1aa" strokeWidth="1" stroke-dasharray="5 8" />
            <g fill="#bef264">
              <path d="m71 412 30-8 14 18-19 17-30-9Z" />
              <path d="m148 312 27-11 12 24-27 15-20-13Z" />
              <path d="m97 213 27-9 12 13-5 17-36-3Z" />
              <path d="m193 137 16-17 27 6-3 19-28 7Z" />
              <path d="m230 65 26-10 13 18-14 15-29-7Z" />
            </g>
            <g fill="#fb7185">
              <path d="m270 366 19-23 19 13-8 29Z" />
              <path d="m278 262 27-3 14 20-20 18-25-18Z" />
              <path d="m57 108 21-11 15 15-11 23-27-8Z" />
            </g>
            <path d="M22 470H378" stroke="#a1a1aa" />
          </svg>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-6 border-t-[3px] border-lime-300 pt-6 text-xs text-zinc-300">
          <p>01 / No ropes. No partner needed.</p>
          <p>02 / Shoe hire included.</p>
          <p>03 / First-timers, every evening at 18:30.</p>
        </div>
      </div>
    </section>
  )
}
