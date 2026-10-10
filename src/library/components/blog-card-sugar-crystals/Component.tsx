// Fonts: Syne (https://fonts.google.com/specimen/Syne)
export default function BlogCardSugarCrystals() {
  return (
    <article className="w-72 rounded-3xl border-2 border-fuchsia-950 bg-pink-50 p-5 font-['Syne',ui-sans-serif,system-ui,sans-serif] text-fuchsia-950 sm:w-80">
      <header className="flex items-start justify-between gap-3">
        <span className="text-sm leading-[1.05] font-extrabold tracking-[-0.02em]">Crackle<br />Bureau</span>
        <span className="text-right text-[9px] leading-4">Candy science<br />No. 08</span>
      </header>
      <div className="mt-4" aria-hidden="true">
        <svg viewBox="0 0 248 80" fill="none" className="h-20 w-full">
          <path d="m8 39 27-28 29 20-13 34-33-1Z" fill="#bae6fd" stroke="#4a044e" strokeWidth="2" />
          <path d="m35 11 2 28 27-8M8 39l29 0 14 26" stroke="#4a044e" strokeWidth="2" />
          <path d="m100 10 49 8 16 39-42 17-32-33Z" fill="#f9a8d4" stroke="#4a044e" strokeWidth="2" />
          <path d="m100 10 21 32 28-24m-58 23 30 1 2 32m-2-32 44 15" stroke="#4a044e" strokeWidth="2" />
          <path d="m202 6 31 25-8 36-33-3-10-31Z" fill="#fef08a" stroke="#4a044e" strokeWidth="2" />
          <path d="m202 6 4 31 27-6m-51 2 24 4 19 30m-19-30-14 27" stroke="#4a044e" strokeWidth="2" />
        </svg>
      </div>
      <h2 className="mt-4 text-[28px] leading-[1.05] font-extrabold tracking-[-0.04em]">
        <a href="#crackle-sugar-crystals" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-950">The crunch is in the crystal.</a>
      </h2>
      <p className="mt-3 text-xs leading-5 text-fuchsia-900">A closer look at why one batch snaps and the next one bends.</p>
      <footer className="mt-4 flex items-center justify-between gap-2 text-[9px]">
        <span className="-rotate-2 rounded-sm bg-sky-200 px-2 py-1 font-semibold">Kitchen experiment</span>
        <span>3 min read</span>
      </footer>
    </article>
  )
}
