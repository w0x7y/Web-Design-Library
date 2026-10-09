// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function HeroBakeryClub() {
  return (
    <section className="bg-orange-100 text-orange-950 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-2xl font-bold tracking-tight">Crumb Assembly</p>
          <p className="text-sm">A neighbourhood bread club</p>
        </div>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.25fr_1fr]">
          <div>
            <h1 className="text-[2.75rem] leading-[1.05] font-bold tracking-tight sm:text-[3.75rem]">Your week.<br />With a better crust.</h1>
            <p className="mt-6 text-base leading-relaxed">Long-fermented loaves, baked round the corner. Pick up your favourite every Friday and give the toaster something to look forward to.</p>
          </div>
          <svg className="mx-auto aspect-square w-full max-w-96" aria-hidden="true" viewBox="0 0 400 400" fill="none">
            <ellipse cx="200" cy="208" rx="184" ry="160" fill="#fed7aa" />
            <path d="M76 261C39 190 100 92 201 81C281 73 335 116 337 188C340 244 286 295 205 308C150 317 95 299 76 261Z" fill="#d97706" stroke="#431407" strokeWidth="3" />
            <path d="M100 168C127 165 151 178 158 202M143 118C172 115 196 131 203 155M196 101C227 99 252 116 260 139M250 109C276 109 299 124 306 146" stroke="#fff7ed" strokeWidth="13" strokeLinecap="round" />
            <path d="M86 248C141 284 253 279 309 221" stroke="#92400e" strokeWidth="3" />
            <g fill="#431407"><circle cx="105" cy="216" r="3" /><circle cx="139" cy="250" r="3" /><circle cx="281" cy="199" r="3" /><circle cx="235" cy="260" r="3" /></g>
          </svg>
          <div className="rounded-[2rem] border-2 border-orange-950 bg-orange-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider">Your next loaf</p>
            <h2 className="mt-4 text-2xl leading-tight font-bold">Friday, 16 October</h2>
            <p className="mt-4 text-base leading-relaxed">The house sourdough<br />800g / £5.50 per week</p>
            <a href="#" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-orange-700 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-950">Join the bread club</a>
            <p className="mt-5 text-xs leading-relaxed">Collect 07:00–18:00<br />42 Orchard Lane<br />Skip any week. Just tell us by Tuesday.</p>
          </div>
        </div>
        <p className="mt-10 border-t border-orange-950 pt-5 text-sm">Flour from Fen Mill. Starter since 2014. Nothing you cannot pronounce.</p>
      </div>
    </section>
  )
}
