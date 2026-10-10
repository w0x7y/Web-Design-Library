// Fonts: DM Sans (https://fonts.google.com/specimen/DM+Sans)
export default function InputsBalloonManifest() {
  return (
    <section
      className="w-72 rounded-3xl bg-linear-to-br from-emerald-800 via-emerald-950 to-slate-950 p-5 font-['DM_Sans',ui-sans-serif,system-ui,sans-serif] text-emerald-50 scheme-dark sm:w-96"
      aria-label="Aerohush passenger manifest"
    >
      <p className="text-[10px] font-semibold tracking-widest text-lime-200 uppercase">Aerohush / Balloon flights</p>
      <h2 className="mt-1 text-2xl font-medium tracking-tight">Passenger manifest</h2>
      <div className="mt-4 rounded-2xl border border-white/50 bg-white/10 p-4 backdrop-blur-xl">
        <label className="block text-xs font-medium" htmlFor="inputs-balloon-manifest-name">Passenger name</label>
        <input
          className="mt-2 block h-10 w-full rounded-lg border border-white/50 bg-white/10 px-3 text-sm leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          id="inputs-balloon-manifest-name"
          name="passenger"
          type="text"
          autoComplete="name"
          defaultValue="Robin Ellis"
        />
        <label className="mt-4 block text-xs font-medium" htmlFor="inputs-balloon-manifest-weight">Passenger weight</label>
        <div className="mt-2 flex items-center rounded-lg border border-white/50 bg-white/10">
          <input
            className="h-11 min-w-0 flex-1 rounded-lg px-3 text-2xl leading-[normal] tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            id="inputs-balloon-manifest-weight"
            name="weight"
            type="number"
            min={1}
            max={300}
            step={0.5}
            defaultValue="72.5"
            aria-describedby="inputs-balloon-manifest-unit inputs-balloon-manifest-hint"
          />
          <span className="pr-3 text-sm text-lime-200" id="inputs-balloon-manifest-unit">kg</span>
        </div>
        <p
          className="mt-2 text-[11px] leading-4 text-emerald-100"
          id="inputs-balloon-manifest-hint"
        >Include the clothes you'll wear on board.</p>
      </div>
      <div className="mt-4 flex justify-between gap-3 text-[11px] text-lime-200">
        <span>Flight AH-06</span>
        <span>06:15 / Meadow launch</span>
      </div>
    </section>
  )
}
