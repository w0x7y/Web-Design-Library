// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function InputsWaterSample() {
  return (
    <section
      className="w-72 rounded-xl border border-slate-500 bg-slate-900 font-['Archivo',ui-sans-serif,system-ui,sans-serif] text-slate-100 scheme-dark sm:w-[22rem]"
      aria-label="Clearbatch sample intake"
    >
      <header className="rounded-t-xl border-b border-slate-500 bg-sky-950 p-4">
        <p className="text-[10px] font-semibold tracking-widest text-sky-200 uppercase">Clearbatch / Treatment works</p>
        <h2 className="mt-1 text-xl font-semibold">New water sample</h2>
      </header>
      <div className="p-5">
        <label className="block text-xs text-slate-300" htmlFor="inputs-water-sample-id">Sample identifier</label>
        <input
          className="mt-2 block h-10 w-full rounded border border-slate-500 bg-slate-950 px-2 font-mono text-xs leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          id="inputs-water-sample-id"
          name="sample-id"
          type="text"
          maxLength={20}
          defaultValue="CB-1010-073"
        />
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-slate-300" htmlFor="inputs-water-sample-source">Source</label>
            <select
              className="mt-2 block h-10 w-full min-w-0 rounded border border-slate-500 bg-slate-950 px-2 text-xs leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-current"
              id="inputs-water-sample-source"
              name="source"
              aria-describedby="inputs-water-sample-hint"
            >
              <option value="outlet">Outlet 2</option>
              <option value="inlet">Inlet 1</option>
              <option value="tank">Tank 3</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-slate-300" htmlFor="inputs-water-sample-time">Collected at</label>
            <input
              className="mt-2 block h-10 w-full min-w-0 rounded border border-slate-500 bg-slate-950 px-2 text-xs leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-current"
              id="inputs-water-sample-time"
              name="collected-at"
              type="time"
              defaultValue="07:45"
            />
          </div>
        </div>
        <p
          className="mt-4 border-t border-slate-500 pt-3 text-[11px] leading-4 text-slate-300"
          id="inputs-water-sample-hint"
        >Use the source printed on the custody label.</p>
      </div>
    </section>
  )
}
