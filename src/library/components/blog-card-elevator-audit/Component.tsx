export default function BlogCardElevatorAudit() {
  return (
    <article className="w-72 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 sm:w-80">
      <div className="grid grid-cols-[4.5rem_minmax(0,1fr)]">
        <div className="flex items-center justify-center rounded-tl-xl border-r border-slate-700 bg-slate-900 text-slate-500" aria-hidden="true">
          <svg viewBox="0 0 56 232" fill="none" className="h-60 w-14">
            <path d="M8 8h40v216H8ZM28 8v72M28 119v105M8 48h40M8 144h40M8 192h40" stroke="currentColor" strokeWidth="1" />
            <path d="M15 80h26v39H15Z" fill="#0c4a6e" stroke="#7dd3fc" strokeWidth="2" />
            <path d="M28 87v25m-7-15 7-7 7 7" stroke="#7dd3fc" strokeWidth="2" />
          </svg>
        </div>
        <div className="p-5">
          <p className="text-sm font-semibold">Ascendry</p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.08em] text-sky-300">Inspection journal</p>
          <h2 className="mt-6 text-[23px] leading-7 font-semibold tracking-[-0.025em]">
            <a href="#ascendry-between-floors" className="hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300">What happens between floors?</a>
          </h2>
          <p className="mt-3 text-xs leading-5 text-slate-400">Following an inspection beyond the visible doors.</p>
          <p className="mt-5 text-[10px] leading-4">Rowan Bell<br /><span className="text-slate-400">7 min read</span></p>
        </div>
      </div>
      <footer className="flex justify-between gap-3 border-t border-slate-700 px-4 py-3 text-[9px] text-slate-400">
        <span>Building operations</span>
        <span>Issue 16</span>
      </footer>
    </article>
  )
}
