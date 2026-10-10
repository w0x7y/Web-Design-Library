// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function TogglesKeyCollection() {
  return (
    <section
      aria-labelledby="toggles-key-collection-title"
      className="w-72 border border-red-200 bg-amber-50 p-5 font-['Newsreader',ui-sans-serif,system-ui,sans-serif] text-red-950 sm:w-96"
    >
      <p className="text-[10px] font-semibold tracking-[0.12em] text-red-800 uppercase">KEYTURN / LOCKSMITH</p>
      <div className="mt-4 grid grid-cols-[4rem_1fr] items-end gap-4">
        <p className="text-[56px] leading-none text-red-800">24</p>
        <h2 id="toggles-key-collection-title" className="text-[26px] leading-7 font-normal">Your keys, ready.</h2>
      </div>
      <p className="mt-3 border-b border-red-200 pb-4 text-sm">Brass key copies for the Alder House team.</p>
      <div className="mt-4 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <label htmlFor="toggles-key-collection-ready" className="block cursor-pointer text-sm font-semibold">Ready-to-collect email</label>
            <p id="toggles-key-collection-ready-hint" className="mt-1 text-xs leading-4 text-red-800">One message when cutting is done.</p>
          </div>
          <input
            id="toggles-key-collection-ready"
            name="toggles-key-collection-ready"
            type="checkbox"
            defaultChecked
            aria-describedby="toggles-key-collection-ready-hint"
            className="size-5 shrink-0 cursor-pointer accent-red-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <label htmlFor="toggles-key-collection-reminder" className="block cursor-pointer text-sm font-semibold">Pickup-day reminder</label>
            <p id="toggles-key-collection-reminder-hint" className="mt-1 text-xs leading-4 text-red-800">A nudge on your chosen pickup day.</p>
          </div>
          <input
            id="toggles-key-collection-reminder"
            name="toggles-key-collection-reminder"
            type="checkbox"
            aria-describedby="toggles-key-collection-reminder-hint"
            className="size-5 shrink-0 cursor-pointer accent-red-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
          />
        </div>
      </div>
      <p className="mt-4 text-[11px] leading-4 text-red-800">Collect Friday, 23 October · after 14:00</p>
    </section>
  )
}
