export default function TabsTelemetryWindow() {
  return (
    <section
      aria-label="API response time windows"
      className="group w-72 rounded-xl border border-slate-700 bg-slate-950 p-5 text-slate-100"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium">Response time</h2>
        <span className="font-mono text-[9px] text-slate-500">API / P95</span>
      </div>
      <fieldset className="mt-4">
        <legend className="sr-only">Choose monitoring window</legend>
        <div className="grid grid-cols-3 gap-1 rounded-lg border border-slate-700 p-1">
          <label className="flex h-7 cursor-pointer items-center justify-center rounded text-[11px] text-slate-400 has-checked:bg-slate-700 has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-lime-300">
            <input
              id="tabs-telemetry-window-hour"
              type="radio"
              name="tabs-telemetry-window-range"
              value="hour"
              defaultChecked
              className="sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            />
            1 hour
          </label>
          <label className="flex h-7 cursor-pointer items-center justify-center rounded text-[11px] text-slate-400 has-checked:bg-slate-700 has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-lime-300">
            <input
              id="tabs-telemetry-window-day"
              type="radio"
              name="tabs-telemetry-window-range"
              value="day"
              className="sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            />
            24 hours
          </label>
          <label className="flex h-7 cursor-pointer items-center justify-center rounded text-[11px] text-slate-400 has-checked:bg-slate-700 has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-lime-300">
            <input
              id="tabs-telemetry-window-week"
              type="radio"
              name="tabs-telemetry-window-range"
              value="week"
              className="sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            />
            7 days
          </label>
        </div>
      </fieldset>
      <div className="mt-5 hidden group-has-[#tabs-telemetry-window-hour:checked]:block">
        <p className="font-mono text-4xl text-cyan-300">
          124<span className="ml-2 text-sm text-slate-400">ms</span>
        </p>
        <p className="mt-1 text-[10px] text-slate-400">
          ↓ 8 ms from the previous hour
        </p>
      </div>
      <div className="mt-5 hidden group-has-[#tabs-telemetry-window-day:checked]:block">
        <p className="font-mono text-4xl text-cyan-300">
          138<span className="ml-2 text-sm text-slate-400">ms</span>
        </p>
        <p className="mt-1 text-[10px] text-slate-400">
          ↓ 12 ms from the previous day
        </p>
      </div>
      <div className="mt-5 hidden group-has-[#tabs-telemetry-window-week:checked]:block">
        <p className="font-mono text-4xl text-cyan-300">
          146<span className="ml-2 text-sm text-slate-400">ms</span>
        </p>
        <p className="mt-1 text-[10px] text-slate-400">
          ↓ 19 ms from the previous week
        </p>
      </div>
      <div aria-hidden="true" className="mt-5 flex h-14 items-end gap-2">
        <span className="h-8 flex-1 rounded-t bg-cyan-400/40" />
        <span className="h-11 flex-1 rounded-t bg-cyan-400/40" />
        <span className="h-9 flex-1 rounded-t bg-cyan-400/40" />
        <span className="h-14 flex-1 rounded-t bg-cyan-400/40" />
        <span className="h-10 flex-1 rounded-t bg-cyan-400/40" />
        <span className="h-7 flex-1 rounded-t bg-cyan-400/40" />
        <span className="h-8 flex-1 rounded-t bg-cyan-400" />
      </div>
      <p className="mt-4 border-t border-slate-800 pt-3 text-[10px] text-slate-400">
        <span className="text-cyan-300">●</span> All regions within target
      </p>
    </section>
  )
}
