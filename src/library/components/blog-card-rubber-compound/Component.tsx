// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function BlogCardRubberCompound() {
  return (
    <article className="w-72 border border-neutral-600 bg-neutral-950 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] text-neutral-100 sm:w-80">
      <header className="flex justify-between gap-3 border-b border-neutral-600 px-4 py-3 text-xs font-bold">
        <span>Rookrubber</span>
        <span className="text-[10px] font-normal text-neutral-400">Track notebook</span>
      </header>
      <div className="relative h-24 overflow-hidden border-b border-neutral-600 bg-neutral-900">
        <svg aria-hidden="true" viewBox="0 0 240 90" fill="none" className="mx-auto h-24 w-60 text-red-400">
          <path d="M36 90V46C36 15 61 4 120 4s84 11 84 42v44M67 90V49c0-12 18-18 53-18s53 6 53 18v41" stroke="currentColor" strokeWidth="2" />
          <path d="m40 32 29 13m-32 8 30 13m-30 8 30 13m133-55-29 13m32 8-30 13m30 8-30 13M90 8v25m30-29v27m30-23v25" stroke="currentColor" strokeWidth="2" />
        </svg>
        <span className="absolute right-3 bottom-2 bg-neutral-950 px-2 py-1 text-[9px] text-red-300">COMPOUND / R04</span>
      </div>
      <div className="p-4">
        <h2 className="text-[22px] leading-6 font-medium tracking-[-0.03em]">
          <a href="#rookrubber-cold-grid" className="hover:text-red-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300">Grip begins before the first lap.</a>
        </h2>
        <p className="mt-3 text-xs leading-5 text-neutral-400">What a cold starting grid asks of a soft compound.</p>
      </div>
      <footer className="grid grid-cols-2 border-t border-neutral-600">
        <div className="flex flex-col gap-1 p-3 text-[10px] first:border-r first:border-neutral-600"><span className="text-[9px] uppercase tracking-[0.08em] text-neutral-400">Subject</span><span>Warm-up window</span></div>
        <div className="flex flex-col gap-1 p-3 text-[10px] first:border-r first:border-neutral-600"><span className="text-[9px] uppercase tracking-[0.08em] text-neutral-400">Read time</span><span>5 minutes</span></div>
      </footer>
    </article>
  )
}
