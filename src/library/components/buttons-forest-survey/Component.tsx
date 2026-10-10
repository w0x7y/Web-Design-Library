// Fonts: Hanken Grotesk (https://fonts.google.com/specimen/Hanken+Grotesk)
export default function ButtonsForestSurvey() {
  return (
    <section
      aria-label="Canopy Ledger forest survey actions"
      className="relative flex h-[22rem] flex-col justify-between overflow-hidden rounded-2xl bg-emerald-950 p-5 text-white w-72 sm:w-[24rem] font-['Hanken_Grotesk',ui-sans-serif,system-ui,sans-serif]"
    >
      <img
        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
        alt="Hands holding soil and a young plant above the forest floor"
        width="800"
        height="458"
        className="absolute inset-0 size-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/60"></div>
      <div className="relative">
        <p className="text-xs font-semibold tracking-widest uppercase">Canopy Ledger</p>
        <h2 className="mt-3 text-2xl font-medium leading-tight">Plot 12 / regeneration</h2>
      </div>
      <div className="relative rounded-xl border border-white/40 bg-white/15 p-3 backdrop-blur-md">
        <button
          type="button"
          className="flex h-11 w-full items-center justify-between rounded-lg bg-amber-200 px-3 text-sm font-semibold text-emerald-950 hover:bg-amber-100 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
        >
          <span>Create field survey</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </button>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <button
            type="button"
            className="h-9 rounded-lg border border-white/60 bg-black/30 text-xs hover:bg-black/50 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
          >Field map</button>
          <button
            type="button"
            className="h-9 rounded-lg border border-white/60 bg-black/30 text-xs hover:bg-black/50 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
          >Export plots</button>
        </div>
        <button
          type="button"
          className="mt-3 flex w-full items-center justify-between px-1 text-xs underline underline-offset-4 hover:text-amber-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
        >
          <span>Restoration log</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </section>
  )
}
