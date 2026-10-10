// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function TabsCricketScore() {
  return (
    <section
      aria-label="Squareleg cricket match score"
      className="group w-72 sm:w-[336px] font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] rounded-[24px] bg-emerald-100 p-5 text-emerald-950"
    >
      <header className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-bold">Squareleg</h2>
        <span className="rounded-full bg-orange-200 px-2 py-1 text-[10px] font-semibold">Sunday XI</span>
      </header>
      <section
        id="tabs-cricket-score-home-panel"
        aria-labelledby="tabs-cricket-score-home-label"
        className="hidden group-has-[#tabs-cricket-score-home:checked]:block"
      >
        <p className="mt-5 text-sm font-semibold">Northwick CC</p>
        <div className="mt-1 flex items-end justify-between">
          <p className="text-[52px] leading-none font-bold tracking-tight">186/4</p>
          <p className="pb-1 text-xs">32.0 overs</p>
        </div>
        <p className="mt-4 rounded-xl bg-white p-3 text-xs leading-5">S. Patel 62* · J. Noor 28*</p>
      </section>
      <section
        id="tabs-cricket-score-away-panel"
        aria-labelledby="tabs-cricket-score-away-label"
        className="hidden group-has-[#tabs-cricket-score-away:checked]:block"
      >
        <p className="mt-5 text-sm font-semibold">Bramley CC</p>
        <div className="mt-1 flex items-end justify-between">
          <p className="text-[52px] leading-none font-bold tracking-tight">184/9</p>
          <p className="pb-1 text-xs">40.0 overs</p>
        </div>
        <p className="mt-4 rounded-xl bg-white p-3 text-xs leading-5">Target passed with 8 overs to spare.</p>
      </section>
      <fieldset className="mt-5 flex gap-2">
        <legend className="sr-only">Choose cricket innings</legend>
        <label
          id="tabs-cricket-score-home-label"
          className="flex h-10 flex-1 cursor-pointer items-center justify-center rounded-full border border-emerald-800 text-xs font-semibold hover:bg-emerald-200 has-checked:bg-emerald-950 has-checked:text-white forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-emerald-950"
        >
          <input
            id="tabs-cricket-score-home"
            type="radio"
            name="tabs-cricket-score-view"
            value="home"
            defaultChecked
            aria-controls="tabs-cricket-score-home-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          Northwick
        </label>
        <label
          id="tabs-cricket-score-away-label"
          className="flex h-10 flex-1 cursor-pointer items-center justify-center rounded-full border border-emerald-800 text-xs font-semibold hover:bg-emerald-200 has-checked:bg-emerald-950 has-checked:text-white forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-emerald-950"
        >
          <input
            id="tabs-cricket-score-away"
            type="radio"
            name="tabs-cricket-score-view"
            value="away"
            aria-controls="tabs-cricket-score-away-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          Bramley
        </label>
      </fieldset>
    </section>
  )
}
