// Fonts: DM Mono (https://fonts.google.com/specimen/DM+Mono)
export default function TogglesBalloonTelemetry() {
  return (
    <section
      aria-labelledby="toggles-balloon-telemetry-title"
      className="w-72 rounded-2xl border border-cyan-700 bg-linear-to-br from-slate-950 to-teal-900 p-5 font-['DM_Mono',ui-sans-serif,system-ui,sans-serif] text-cyan-50 sm:w-80"
    >
      <p className="text-[10px] font-semibold tracking-[0.12em] text-cyan-200 uppercase">STRATOLET / FLIGHT S-17</p>
      <h2 id="toggles-balloon-telemetry-title" className="mt-3 text-xl leading-7 font-medium">Above the cloud.</h2>
      <div className="mt-5 border-l-2 border-cyan-300 pl-4">
        <p className="text-[36px] leading-10 tracking-tight">12,480</p>
        <p className="mt-1 text-xs text-cyan-200">meters / ascending</p>
      </div>
      <div className="mt-5 flex items-center justify-between gap-3 rounded-lg border border-cyan-700 bg-slate-950 p-3">
        <div>
          <label htmlFor="toggles-balloon-telemetry-capture" className="block cursor-pointer text-sm font-semibold">Capture packets</label>
          <p id="toggles-balloon-telemetry-capture-hint" className="mt-1 text-xs leading-4 text-cyan-200">Archive every 5 seconds.</p>
        </div>
        <input
          id="toggles-balloon-telemetry-capture"
          name="toggles-balloon-telemetry-capture"
          type="checkbox"
          role="switch"
          defaultChecked
          aria-describedby="toggles-balloon-telemetry-capture-hint"
          className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-cyan-200 bg-slate-950 after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-cyan-200 after:content-[''] checked:border-cyan-300 checked:bg-cyan-300 checked:after:translate-x-5 checked:after:bg-slate-950 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText] forced-colors:checked:after:bg-[CanvasText]"
        />
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-4 text-xs">
        <div>
          <dt className="text-cyan-200">Pressure</dt>
          <dd>184 hPa</dd>
        </div>
        <div>
          <dt className="text-cyan-200">Battery</dt>
          <dd>92%</dd>
        </div>
      </dl>
    </section>
  )
}
