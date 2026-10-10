// Fonts: Syne (https://fonts.google.com/specimen/Syne)
export default function ButtonsGemAuction() {
  return (
    <section
      aria-label="Prismere gemstone auction actions"
      className="relative overflow-hidden rounded-3xl bg-linear-to-br from-orange-100 via-rose-200 to-amber-100 p-5 text-red-950 w-72 sm:w-[23rem] font-['Syne',ui-sans-serif,system-ui,sans-serif]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 96 96"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        className="absolute top-4 right-4 size-16 text-red-950/30"
      >
        <path d="M16 20h64l12 24-44 48L4 44Z" fill="white" fillOpacity=".4" />
        <path d="M4 44h88M16 20l16 24 16 48 16-48 16-24M32 44l16-24 16 24" />
      </svg>
      <div className="relative">
        <p className="text-xs font-semibold tracking-widest uppercase">Prismere</p>
        <p className="mt-4 text-xs font-medium">Lot 026 · 2.4 ct</p>
        <h2 className="mt-1 text-xl font-semibold">Peach morganite</h2>
      </div>
      <div className="relative mt-5 rounded-xl border border-white/80 bg-white/50 p-4 backdrop-blur-lg">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-3xl font-semibold tabular-nums">$420</p>
          <p className="text-xs">Current bid / USD</p>
        </div>
        <button
          type="button"
          className="mt-3 flex h-11 w-full items-center justify-center rounded-lg bg-red-950 px-3 text-sm font-semibold text-white hover:bg-red-900 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-950"
        >Place bid · $450</button>
        <button
          type="button"
          className="mt-2 flex h-8 w-full items-center justify-center gap-2 rounded-md text-xs font-medium hover:bg-white/70 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-950"
        >
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
            <path d="M4 2h8v12l-4-3-4 3Z" />
          </svg>
          <span>Watch lot 026</span>
        </button>
      </div>
      <button
        type="button"
        className="relative mt-3 flex w-full items-center justify-between text-xs underline underline-offset-4 hover:text-red-800 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-950"
      >
        <span>View stone report</span>
        <span aria-hidden="true">↗</span>
      </button>
    </section>
  )
}
