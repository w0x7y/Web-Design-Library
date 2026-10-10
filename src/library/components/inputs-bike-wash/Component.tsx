export default function InputsBikeWash() {
  return (
    <section
      className="w-72 border border-neutral-300 bg-white p-5 text-neutral-950 sm:w-[22rem]"
      aria-label="Spokewash mobile bike-wash booking"
    >
      <p className="text-[10px] font-semibold tracking-[0.16em] uppercase">Spokewash / Mobile bike wash</p>
      <h2 className="mt-1 text-2xl tracking-tight">Where is your bike?</h2>
      <div className="mt-4 grid grid-cols-[1.5rem_1fr] gap-2">
        <span className="pt-0.5 font-mono text-xs text-neutral-600" aria-hidden="true">01</span>
        <div>
          <label className="block text-xs font-semibold" htmlFor="inputs-bike-wash-postcode">Wash location postcode</label>
          <input
            className="mt-2 block h-10 w-full rounded border border-neutral-500 px-3 text-sm leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            id="inputs-bike-wash-postcode"
            name="postcode"
            type="text"
            autoComplete="postal-code"
            defaultValue="E8 3RL"
          />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-[1.5rem_1fr] gap-2">
        <span className="pt-0.5 font-mono text-xs text-neutral-600" aria-hidden="true">02</span>
        <div>
          <label className="block text-xs font-semibold" htmlFor="inputs-bike-wash-access">Bike and access notes</label>
          <textarea
            className="mt-2 block h-[4.5rem] w-full resize-none rounded border border-neutral-500 p-3 text-sm leading-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            id="inputs-bike-wash-access"
            name="access"
            aria-describedby="inputs-bike-wash-hint"
            maxLength={240}
            defaultValue="Blue commuter bike in the courtyard. Ring flat 4."
          />
          <p
            className="mt-2 text-[11px] text-neutral-600"
            id="inputs-bike-wash-hint"
          >Bike type and parking. Up to 240 characters.</p>
        </div>
      </div>
    </section>
  )
}
