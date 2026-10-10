// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function TogglesAntiqueAuction() {
  return (
    <section
      aria-labelledby="toggles-antique-auction-title"
      className="w-72 border border-red-200 bg-amber-50 p-5 font-['Newsreader',ui-sans-serif,system-ui,sans-serif] text-red-950 sm:w-96"
    >
      <p className="text-[10px] font-semibold tracking-[0.12em] text-red-800 uppercase">GAVELMERE / THE OCTOBER SALE</p>
      <div className="mt-4 grid grid-cols-[4rem_1fr] items-end gap-4">
        <p className="text-[56px] leading-none text-red-800">48</p>
        <h2 id="toggles-antique-auction-title" className="text-[26px] leading-7 font-normal">A bid worth following.</h2>
      </div>
      <p className="mt-3 border-b border-red-200 pb-4 text-sm">Victorian brass survey compass, c. 1880.</p>
      <div className="mt-4 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <label htmlFor="toggles-antique-auction-outbid" className="block cursor-pointer text-sm font-semibold">Tell me if I’m outbid</label>
            <p id="toggles-antique-auction-outbid-hint" className="mt-1 text-xs leading-4 text-red-800">One email when the lead changes.</p>
          </div>
          <input
            id="toggles-antique-auction-outbid"
            name="toggles-antique-auction-outbid"
            type="checkbox"
            defaultChecked
            aria-describedby="toggles-antique-auction-outbid-hint"
            className="size-5 shrink-0 cursor-pointer accent-red-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <label htmlFor="toggles-antique-auction-closing" className="block cursor-pointer text-sm font-semibold">The final ten minutes</label>
            <p id="toggles-antique-auction-closing-hint" className="mt-1 text-xs leading-4 text-red-800">A reminder before this lot closes.</p>
          </div>
          <input
            id="toggles-antique-auction-closing"
            name="toggles-antique-auction-closing"
            type="checkbox"
            aria-describedby="toggles-antique-auction-closing-hint"
            className="size-5 shrink-0 cursor-pointer accent-red-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
          />
        </div>
      </div>
      <p className="mt-4 text-[11px] leading-4 text-red-800">Closes Sunday, 18 October · 17:00</p>
    </section>
  )
}
