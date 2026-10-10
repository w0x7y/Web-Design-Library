// Fonts: Familjen Grotesk
export default function StatCardBalloonAscent() {
  return (
    <article className="w-72 rounded-3xl border border-sky-200 bg-linear-to-b from-orange-100 to-cyan-100 p-6 font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif] text-sky-950 sm:w-[22rem]">
      <header className="flex justify-between text-[10px] font-semibold tracking-widest">
        <p>STRATOSLIP</p>
        <span>FLIGHT 043</span>
      </header>
      <div className="mt-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold tracking-wider text-sky-800">ASCENDING</p>
          <p className="mt-3 flex items-baseline gap-1 text-5xl leading-none font-medium tracking-tight tabular-nums">18.6<span className="text-base tracking-normal">km</span></p>
          <h2 className="mt-3 text-xs font-medium">Above the cloud line</h2>
          <p className="mt-4 text-[10px] leading-4 text-sky-800">Rook Fen station<br />Launched at 06:00 UTC</p>
        </div>
        <svg aria-hidden="true" viewBox="0 0 64 160" fill="none" className="h-40 w-16 shrink-0">
          <path d="M32 150V62" stroke="#075985" strokeWidth="1.5" strokeDasharray="3 5" />
          <ellipse cx="32" cy="27" rx="16" ry="21" fill="white" stroke="#082f49" strokeWidth="1.5" />
          <path d="m27 47 5 9 5-9M32 56v10" stroke="#082f49" strokeWidth="1.5" />
          <rect x="28" y="66" width="8" height="10" rx="1" fill="#082f49" />
          <path d="M8 118h48M8 144h48" stroke="#075985" strokeWidth="1" />
        </svg>
      </div>
      <dl className="mt-5 grid grid-cols-2 gap-4 rounded-xl bg-white/75 p-3 text-[10px] text-sky-800">
        <div>
          <dt>Elapsed flight</dt>
          <dd className="mt-1 text-base font-semibold text-sky-950 tabular-nums">62 min</dd>
        </div>
        <div>
          <dt>Ascent speed</dt>
          <dd className="mt-1 text-base font-semibold text-sky-950 tabular-nums">5.0 m/s</dd>
        </div>
      </dl>
    </article>
  )
}
