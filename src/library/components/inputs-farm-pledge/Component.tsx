// Fonts: DM Sans (https://fonts.google.com/specimen/DM+Sans)
export default function InputsFarmPledge() {
  return (
    <section
      className="w-72 rounded-3xl bg-linear-to-br from-emerald-800 via-emerald-950 to-slate-950 p-5 font-['DM_Sans',ui-sans-serif,system-ui,sans-serif] text-emerald-50 scheme-dark sm:w-96"
      aria-label="Fieldfund farm crowdfunding pledge"
    >
      <p className="text-[10px] font-semibold tracking-widest text-lime-200 uppercase">Fieldfund / Farm crowdfunding</p>
      <h2 className="mt-1 text-2xl font-medium tracking-tight">Back the next harvest</h2>
      <div className="mt-4 rounded-2xl border border-white/50 bg-white/10 p-4 backdrop-blur-xl">
        <label className="block text-xs font-medium" htmlFor="inputs-farm-pledge-campaign">Farm campaign</label>
        <input
          className="mt-2 block h-10 w-full rounded-lg border border-white/50 bg-white/10 px-3 text-sm leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          id="inputs-farm-pledge-campaign"
          name="campaign"
          type="text"
          defaultValue="Eastfield cold store"
        />
        <label className="mt-4 block text-xs font-medium" htmlFor="inputs-farm-pledge-pledge">Your pledge</label>
        <div className="mt-2 flex items-center rounded-lg border border-white/50 bg-white/10">
          <input
            className="h-11 min-w-0 flex-1 rounded-lg px-3 text-2xl leading-[normal] tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            id="inputs-farm-pledge-pledge"
            name="pledge"
            type="number"
            min={5}
            max={100000}
            step={5}
            defaultValue="125"
            aria-describedby="inputs-farm-pledge-unit inputs-farm-pledge-hint"
          />
          <span className="pr-3 text-sm text-lime-200" id="inputs-farm-pledge-unit">GBP</span>
        </div>
        <p
          className="mt-2 text-[11px] leading-4 text-emerald-100"
          id="inputs-farm-pledge-hint"
        >Pledges help build the farm's new cold store.</p>
      </div>
      <div className="mt-4 flex justify-between gap-3 text-[11px] text-lime-200">
        <span>Farm EF-12</span>
        <span>16 days / £8,400 goal</span>
      </div>
    </section>
  )
}
