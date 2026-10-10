export default function ProfileCardAquascaper() {
  return (
    <article className="w-72 rounded-lg bg-slate-950 p-5 text-slate-100 sm:w-80">
      <p className="text-[10px] uppercase tracking-widest text-slate-300">Mottle Aquatics</p>
      <h2 className="mt-4 text-2xl font-medium">Tessa Ward</h2>
      <p className="mt-1 text-xs text-slate-300">Freshwater aquascaper · Cambridge</p>
      <svg aria-hidden="true" viewBox="0 0 248 96" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-4 h-24 w-full text-sky-200">
        <path d="M8 12h232v72H8zM8 78h232" className="stroke-slate-500" />
        <path d="M9 25h230" className="stroke-sky-200/40" />
        <path d="M30 78V44m0 18q-16-6-14-18 14 0 14 18Zm0-10q16-8 12-20-12 3-12 20Zm26 26V54m0 12q-14-4-13-13 12 0 13 13Zm0-10q12-6 10-16-10 2-10 16ZM199 78V43m0 18q-15-4-14-16 13 1 14 16Zm0-9q15-6 12-18-12 2-12 18Z" />
        <path d="m81 78 12-28 21 8 13-22 23 9 18 33" className="stroke-slate-500" />
      </svg>
      <p className="mt-3 border-t border-slate-600 pt-3 text-xs text-slate-300">Planted tanks, designed to settle in.</p>
      <a href="#tessa-consultation" aria-label="Arrange a tank consultation with Tessa Ward" className="mt-4 flex items-center justify-between gap-2 text-xs font-medium text-sky-200 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200">
        Arrange a tank consultation
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 shrink-0">
          <path d="M4 10h12m-5-5 5 5-5 5" />
        </svg>
      </a>
    </article>
  )
}
