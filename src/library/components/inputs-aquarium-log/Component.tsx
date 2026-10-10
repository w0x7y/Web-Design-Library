// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function InputsAquariumLog() {
  return (
    <section
      className="w-72 rounded-2xl bg-slate-950 p-6 font-['Manrope',ui-sans-serif,system-ui,sans-serif] text-cyan-100 scheme-dark sm:w-80"
      aria-label="Brinewell daily tank log"
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold">Brinewell</h2>
        <span className="text-[9px] tracking-widest text-slate-300">DAILY CHECK</span>
      </div>
      <label className="mt-5 block text-xs text-slate-300" htmlFor="inputs-aquarium-log-tank">Tank identifier</label>
      <input
        className="mt-1 block h-9 w-full border-b border-slate-500 text-sm leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        id="inputs-aquarium-log-tank"
        name="tank"
        type="text"
        defaultValue="Reef / Tank 04"
      />
      <label
        className="mt-5 block text-xs text-slate-300"
        htmlFor="inputs-aquarium-log-temperature"
      >Water temperature</label>
      <div className="mt-2 flex items-baseline gap-3 border-b border-slate-500">
        <input
          className="h-16 min-w-0 flex-1 text-4xl leading-10 font-medium tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          id="inputs-aquarium-log-temperature"
          name="temperature"
          type="number"
          min={0}
          max={40}
          step={0.1}
          defaultValue="24.8"
          aria-describedby="inputs-aquarium-log-unit inputs-aquarium-log-hint"
        />
        <span className="text-lg text-slate-300" id="inputs-aquarium-log-unit">°C</span>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-300" id="inputs-aquarium-log-hint">Log the reading before feeding.</p>
    </section>
  )
}
