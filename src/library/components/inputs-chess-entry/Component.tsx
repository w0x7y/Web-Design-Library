// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function InputsChessEntry() {
  return (
    <section
      className="w-72 border-2 border-red-950 bg-red-100 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] text-red-950 sm:w-[22rem]"
      aria-label="Rooklane tournament entry"
    >
      <header className="border-b-2 border-red-950 p-4">
        <p className="text-[10px] font-bold tracking-widest">ROOKLANE / OPEN 2026</p>
        <h2 className="text-2xl font-bold tracking-tight">Take your seat.</h2>
      </header>
      <div className="p-5">
        <label className="block text-xs font-bold" htmlFor="inputs-chess-entry-id">Federation ID</label>
        <input
          className="mt-2 block h-11 w-full border-2 border-red-950 bg-white px-3 text-sm leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          id="inputs-chess-entry-id"
          name="federation-id"
          type="text"
          inputMode="numeric"
          defaultValue="4107258"
        />
        <div className="mt-5 flex border-2 border-red-950">
          <label
            className="flex w-24 shrink-0 items-center bg-red-950 px-3 text-xs font-bold text-red-100"
            htmlFor="inputs-chess-entry-rating"
          >Rapid rating</label>
          <input
            className="h-14 min-w-0 flex-1 px-3 text-3xl leading-[normal] font-bold tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            id="inputs-chess-entry-rating"
            name="rapid-rating"
            type="number"
            min={100}
            max={3500}
            step={1}
            defaultValue="1640"
            aria-describedby="inputs-chess-entry-hint"
          />
        </div>
        <p className="mt-3 text-[11px]" id="inputs-chess-entry-hint">Unrated? Leave the rating field blank.</p>
      </div>
    </section>
  )
}
