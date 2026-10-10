// Fonts: DM Sans
export default function ProfileCardIndoorSurveyor() {
  return (
    <article className="relative w-72 rounded-2xl bg-linear-to-tr from-rose-200 to-orange-100 p-4 font-['DM_Sans',ui-sans-serif,system-ui,sans-serif] text-rose-950 sm:w-[21rem]">
      <div className="relative flex justify-between gap-2 text-[10px] font-medium">
        <span>Vela Cartography</span>
        <span>People / 09</span>
      </div>
      <svg aria-hidden="true" viewBox="0 0 256 192" fill="none" stroke="currentColor" strokeWidth="1.5" className="pointer-events-none absolute inset-x-4 top-8 h-48 w-[calc(100%-2rem)] text-rose-950/35">
        <path d="M18 60V12h72v16h46V12h102v48H18ZM64 12v27m0 12v9m26-32v32m46-32v32m42-48v27m0 12v9m-42-21h102M18 39h46" />
        <path d="M102 48h22m-6-6 6 6-6 6" />
        <circle cx="206" cy="26" r="4" />
        <path d="M18 60v116h220V60M18 94h72m46 0h102M90 60v80m0 12v24m46-116v116M18 140h220m-60-46v46" />
      </svg>
      <div aria-hidden="true" className="h-[4.5rem]"></div>
      <div className="relative rounded-xl border border-white/80 bg-white/65 p-4 backdrop-blur-sm">
        <p className="text-[10px] uppercase tracking-wider">Indoor navigation surveyor</p>
        <h2 className="mt-2 text-2xl font-semibold">Arun Patel</h2>
        <p className="mt-1 text-xs leading-5">Making complex places legible.</p>
        <div className="mt-4 border-t border-rose-950/20 pt-3">
          <p className="text-[10px] uppercase tracking-wider">Current site</p>
          <p className="mt-1 text-xs leading-5">Union Hall · 4 floors, 62 rooms</p>
        </div>
        <a href="#arun-credentials" aria-label="View Arun Patel's survey credentials" className="mt-4 flex items-center justify-between text-xs font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-950">
          Survey credentials
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
            <path d="M4 10h12m-5-5 5 5-5 5" />
          </svg>
        </a>
      </div>
    </article>
  )
}
