export default function StatCardGoalballBlocks() {
  return (
    <article className="w-72 border border-stone-300 bg-white p-6 text-stone-950 sm:w-[22rem]">
      <header className="flex justify-between text-[10px] tracking-wider text-stone-600">
        <p>QUIETCOURT</p>
        <span>TRAINING / 10 OCT</span>
      </header>
      <div className="mt-5 flex items-baseline justify-between gap-3">
        <p className="flex items-baseline text-[56px] leading-none font-medium tracking-tight tabular-nums">27<span className="text-xl font-normal text-stone-600">/30</span></p>
        <h2 className="max-w-20 text-sm font-medium">Shots blocked</h2>
      </div>
      <svg aria-hidden="true" viewBox="0 0 240 96" fill="none" className="mt-5 h-20 w-full">
        <rect x="1" y="1" width="238" height="94" fill="#f5f5f4" stroke="#57534e" />
        <path d="M1 32h238M1 64h238M80 1v94M160 1v94M110 16h20M120 1v15M110 80h20M120 80v15" stroke="#57534e" />
        <path d="M36 24h12M116 24h12M196 24h12" stroke="#0c0a09" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <dl className="mt-4 grid grid-cols-2 gap-4 border-t border-stone-300 pt-3 text-xs text-stone-600">
        <div>
          <dt>Block rate</dt>
          <dd className="mt-1 text-lg font-medium text-stone-950 tabular-nums">90%</dd>
        </div>
        <div>
          <dt>Goals conceded</dt>
          <dd className="mt-1 text-lg font-medium text-stone-950 tabular-nums">3</dd>
        </div>
      </dl>
      <a href="#quietcourt-match-notes" className="mt-4 inline-flex items-center gap-2 text-xs font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950">
        Read the match notes
        <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-3">
          <path d="M4 12 12 4M4 4h8v8" />
        </svg>
      </a>
    </article>
  )
}
