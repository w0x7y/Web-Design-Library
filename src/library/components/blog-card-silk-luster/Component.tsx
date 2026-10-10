// Fonts: Instrument Serif (https://fonts.google.com/specimen/Instrument+Serif)
export default function BlogCardSilkLuster() {
  return (
    <article className="w-72 rounded-t-[3rem] rounded-b-lg bg-linear-to-br from-orange-100 via-rose-100 to-amber-50 p-5 text-amber-950 sm:w-80">
      <header className="flex items-center justify-between gap-3 pt-2 text-[9px]">
        <span>Serein Loom</span>
        <span>Material studies / 02</span>
      </header>
      <div className="mt-5" aria-hidden="true">
        <svg viewBox="0 0 248 80" fill="none" className="h-18 w-full">
          <path d="M0 65 77 5l61 16L64 80H0Z" fill="#f9d5c6" />
          <path d="m77 5 61 16-24 59H64Z" fill="#bd7668" />
          <path d="m138 21 72-21 38 23-86 57h-48Z" fill="#ffefda" />
          <path d="m210 0 38 23v57h-86Z" fill="#e9b6a6" />
          <path d="M77 5 64 80m74-59-24 59m96-80-48 80" stroke="#78350f" strokeOpacity="0.3" />
        </svg>
      </div>
      <p className="mt-4 text-[9px] uppercase tracking-[0.1em] text-amber-800">A change of angle</p>
      <h2 className="mt-2 font-['Instrument_Serif',ui-serif,Georgia,serif] text-[32px] leading-[1.05] tracking-[-0.02em]">
        <a href="#serein-silk-light" className="hover:text-amber-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-950">Why silk keeps changing its mind.</a>
      </h2>
      <p className="mt-3 text-xs leading-5 text-amber-900">One cloth, two directions of light. A mill notebook on luster.</p>
      <footer className="mt-4 flex items-center justify-between gap-3 border-t border-amber-950/20 pt-3 text-[9px] text-amber-800">
        <span className="text-[10px] leading-4 font-medium text-amber-950">Mulberry silk<br /><span className="text-[9px] font-normal text-amber-800">Plain weave · 19 momme</span></span>
        <span>4 min read</span>
      </footer>
    </article>
  )
}
