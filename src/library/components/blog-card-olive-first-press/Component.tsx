// Fonts: Instrument Serif (https://fonts.google.com/specimen/Instrument+Serif)
export default function BlogCardOliveFirstPress() {
  return (
    <article className="w-72 rounded-t-[3rem] rounded-b-lg bg-linear-to-br from-orange-100 via-rose-100 to-amber-50 p-5 text-amber-950 sm:w-80">
      <header className="flex items-center justify-between gap-3 pt-2 text-[9px]">
        <span>Oliva Alta</span>
        <span>Mill journal / 03</span>
      </header>
      <div className="mt-5" aria-hidden="true">
        <svg viewBox="0 0 248 80" fill="none" className="h-18 w-full">
          <path d="M24 67C76 47 124 27 220 14" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
          <path d="M66 51C43 48 34 31 39 23c20 1 33 12 27 28Zm30-13C75 27 71 10 80 5c20 8 25 22 16 33Zm37-11c-5-20 6-29 17-25 6 17 0 25-17 25Zm35-8c12-18 33-17 40-8-9 12-24 16-40 8Z" fill="#72834d" />
          <ellipse cx="81" cy="61" rx="9" ry="12" transform="rotate(24 81 61)" fill="#4c5a36" />
          <ellipse cx="124" cy="47" rx="8" ry="11" transform="rotate(24 124 47)" fill="#657844" />
          <ellipse cx="168" cy="36" rx="9" ry="12" transform="rotate(24 168 36)" fill="#4c5a36" />
          <path d="m81 49-1-6m44-8-3-5m47-6-3-3" stroke="#78350f" strokeWidth="2" />
        </svg>
      </div>
      <p className="mt-4 text-[9px] uppercase tracking-[0.1em] text-amber-800">Harvest to bottle</p>
      <h2 className="mt-2 font-['Instrument_Serif',ui-serif,Georgia,serif] text-[32px] leading-[1.05] tracking-[-0.02em]">
        <a href="#oliva-first-press" className="hover:text-amber-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-950">The first press of the season.</a>
      </h2>
      <p className="mt-3 text-xs leading-5 text-amber-900">From cool morning fruit to fresh oil, inside our October press.</p>
      <footer className="mt-4 flex items-center justify-between gap-3 border-t border-amber-950/20 pt-3 text-[9px] text-amber-800">
        <span className="text-[10px] leading-4 font-medium text-amber-950">Early-harvest oil<br /><span className="text-[9px] font-normal text-amber-800">Picual · Lot 031</span></span>
        <span>5 min read</span>
      </footer>
    </article>
  )
}
