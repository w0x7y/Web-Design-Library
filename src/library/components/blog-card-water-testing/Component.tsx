// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function BlogCardWaterTesting() {
  return (
    <article className="w-72 rounded-lg border border-slate-200 bg-white font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-cyan-950 sm:w-[22rem]">
      <header className="flex items-center justify-between gap-3 rounded-t-lg border-b border-slate-200 bg-slate-50 px-5 py-4">
        <span className="text-xs font-semibold">Clearwell Labs</span>
        <span className="text-[9px] text-slate-600">Sampling notes</span>
      </header>
      <div className="border-l-4 border-cyan-800 p-5">
        <p className="text-[10px] font-medium uppercase tracking-[0.06em] text-cyan-800">For facilities teams</p>
        <h2 className="mt-3 text-2xl leading-7 font-semibold tracking-[-0.02em]">
          <a href="#clearwell-sample-journey" className="hover:text-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-800">The sample has a journey, too.</a>
        </h2>
        <p className="mt-2 text-xs leading-5 text-slate-600">A water test starts well before the bottle reaches the lab.</p>
        <aside className="mt-4 rounded-sm bg-cyan-50 p-3 text-[11px] leading-4" aria-label="Inside the article">
          <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.06em] text-cyan-800">Inside the article</span>
          <p>Bottle labels, transit records and the handover log.</p>
        </aside>
        <footer className="mt-4 flex justify-between gap-3 text-[10px] text-slate-600">
          <span>Technical team</span>
          <span>6 min read</span>
        </footer>
      </div>
    </article>
  )
}
