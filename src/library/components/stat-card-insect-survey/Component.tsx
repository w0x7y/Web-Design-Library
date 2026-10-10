// Fonts: Bricolage Grotesque
export default function StatCardInsectSurvey() {
  return (
    <article className="w-72 rounded-[28px] bg-green-100 p-5 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-green-950 sm:w-80">
      <header className="flex items-center justify-between gap-3">
        <p className="border-2 border-green-950 px-2 py-1 text-xs font-bold tracking-wide">SIXFOOT</p>
        <span className="text-[11px] text-green-800">Night survey 06</span>
      </header>
      <div className="mt-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-[64px] leading-none font-semibold tracking-tight tabular-nums">214</p>
          <h2 className="mt-2 text-xs font-medium">Moths recorded</h2>
        </div>
        <div aria-hidden="true" className="grid h-24 w-24 shrink-0 grid-cols-2 grid-rows-3 gap-1.5"><span className="rounded-lg bg-green-300"></span><span className="rounded-lg bg-yellow-200"></span><span className="rounded-lg bg-white"></span><span className="rounded-lg bg-white"></span><span className="rounded-lg bg-green-300"></span><span className="rounded-lg bg-yellow-200"></span></div>
      </div>
      <p className="mt-5 rounded-xl bg-white p-4 text-xs leading-5 text-green-800"><strong>All 6 plots sampled.</strong><br />31 species, including 4 new records for Wren Meadow.</p>
      <a href="#sixfoot-survey" className="mt-4 inline-block text-xs font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950">Explore this survey ↗</a>
    </article>
  )
}
