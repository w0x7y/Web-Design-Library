// Fonts: Familjen Grotesk (https://fonts.google.com/specimen/Familjen+Grotesk)
export default function BlogCardGreenhouseGlass() {
  return (
    <article className="relative w-72 overflow-hidden rounded-2xl bg-[#18261f] p-5 font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif] text-white sm:w-80">
      <div className="absolute top-8 -right-4 h-56 w-12 bg-amber-200/30 blur-xl" aria-hidden="true"></div>
      <svg aria-hidden="true" viewBox="0 0 288 320" fill="none" className="absolute inset-0 h-full w-full opacity-40">
        <path d="M16 320V96L144 24l128 72v224M16 96h256M80 60v260m64-296v296m64-260v260M16 160h256M16 224h256M16 288h256" stroke="#a7c9ad" strokeWidth="1" />
        <path d="M38 320v-56m0 21c-19 0-22-17-22-17 18-4 23 8 22 17Zm0-12c17 0 22-19 22-19-20-2-24 11-22 19Zm203 47v-72m0 32c-18 0-25-19-25-19 21-4 27 9 25 19Zm0-17c18-1 25-22 25-22-20-1-28 11-25 22Z" stroke="#a7c9ad" strokeWidth="2" />
      </svg>
      <header className="relative flex items-center justify-between gap-3 text-xs font-semibold">
        <span>Verdant Relay</span>
        <span className="text-[9px] font-normal text-emerald-100">Grower systems</span>
      </header>
      <div className="relative mt-16 rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-[0.08em] text-amber-200">Under glass / 11</p>
        <h2 className="mt-3 text-[28px] leading-7 font-semibold tracking-[-0.03em]">
          <a href="#verdant-evening-ventilation" className="hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200">The last vent to close.</a>
        </h2>
        <p className="mt-3 text-xs leading-5 text-emerald-100">Why the evening handover matters as much as the morning forecast.</p>
        <footer className="mt-4 flex justify-between gap-3 border-t border-white/20 pt-3 text-[10px] text-emerald-100">
          <span>Owen Park</span>
          <span>5 min read</span>
        </footer>
      </div>
    </article>
  )
}
