export default function InputsPestVisit() {
  return (
    <section
      className="w-72 border border-neutral-300 bg-white p-5 text-neutral-950 sm:w-[22rem]"
      aria-label="Sillguard inspection request"
    >
      <p className="text-[10px] font-semibold tracking-[0.16em] uppercase">Sillguard / Home visits</p>
      <h2 className="mt-1 text-2xl tracking-tight">Before we arrive</h2>
      <div className="mt-4 grid grid-cols-[1.5rem_1fr] gap-2">
        <span className="pt-0.5 font-mono text-xs text-neutral-600" aria-hidden="true">01</span>
        <div>
          <label className="block text-xs font-semibold" htmlFor="inputs-pest-visit-postcode">Property postcode</label>
          <input
            className="mt-2 block h-10 w-full rounded border border-neutral-500 px-3 text-sm leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            id="inputs-pest-visit-postcode"
            name="postcode"
            type="text"
            autoComplete="postal-code"
            defaultValue="BS3 1EW"
          />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-[1.5rem_1fr] gap-2">
        <span className="pt-0.5 font-mono text-xs text-neutral-600" aria-hidden="true">02</span>
        <div>
          <label className="block text-xs font-semibold" htmlFor="inputs-pest-visit-access">Access instructions</label>
          <textarea
            className="mt-2 block h-[4.5rem] w-full resize-none rounded border border-neutral-500 p-3 text-sm leading-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            id="inputs-pest-visit-access"
            name="access"
            aria-describedby="inputs-pest-visit-hint"
            maxLength={240}
            defaultValue="Side gate is open. Please close it behind you."
          />
          <p
            className="mt-2 text-[11px] text-neutral-600"
            id="inputs-pest-visit-hint"
          >Gate codes, parking or pets. Up to 240 characters.</p>
        </div>
      </div>
    </section>
  )
}
