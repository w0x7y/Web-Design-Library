// Fonts: IBM Plex Sans
export default function ProfileCardParachuteInspector() {
  return (
    <article className="flex w-72 rounded bg-slate-900 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-slate-100 sm:w-80">
      <div aria-hidden="true" className="flex w-8 shrink-0 items-center justify-center rounded-l bg-cyan-200 text-slate-950"><span className="text-[10px] font-semibold tracking-widest [writing-mode:vertical-rl]">AF / 072 / EQUIPMENT SERVICES</span></div>
      <div className="min-w-0 flex-1 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-cyan-200">Aerofold</p>
        <h2 className="mt-5 text-2xl leading-[30px] font-semibold">Sofia Kessler</h2>
        <p className="mt-1 text-xs text-slate-300">Senior parachute inspector</p>
        <dl className="mt-5 grid grid-cols-2 gap-3">
          <div>
            <dt className="text-[10px] uppercase tracking-widest text-slate-300">License</dt>
            <dd className="mt-1 text-sm">DE-R 4082</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-widest text-slate-300">Experience</dt>
            <dd className="mt-1 text-sm">12 years</dd>
          </div>
        </dl>
        <div className="mt-4 border-y border-slate-500 py-3">
          <p className="text-[10px] uppercase tracking-widest text-slate-300">Inspection scope</p>
          <p className="mt-1 text-xs">Sport &amp; tandem systems</p>
        </div>
        <a href="#sofia-inspection" aria-label="Book an equipment inspection with Sofia Kessler" className="mt-5 flex items-center justify-between gap-2 text-xs font-semibold text-cyan-200 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200">
          Schedule a repack
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 shrink-0">
            <path d="M4 10h12m-5-5 5 5-5 5" />
          </svg>
        </a>
      </div>
    </article>
  )
}
