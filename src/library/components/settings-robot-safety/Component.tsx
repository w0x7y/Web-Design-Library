// Fonts: IBM Plex Mono (https://fonts.google.com/specimen/IBM+Plex+Mono)
export default function SettingsRobotSafety() {
  return (
    <section
      className="bg-[#181a18] px-5 py-12 text-[#eff3e8] font-['IBM_Plex_Mono',ui-sans-serif,system-ui,sans-serif] sm:px-8"
    >
      <form className="mx-auto max-w-7xl">
        <header className="flex flex-wrap justify-between gap-4 border-y-2 border-[#d9ef54] py-4 text-xs uppercase">
          <span>Pallet Zero / controller settings</span>
          <span>Facility PZ-08 · staging only</span>
        </header>
        <h2 className="mt-3 text-[2.25rem] leading-[1.1] tracking-[-0.035em] sm:text-[3rem]">Movement guardrails.</h2>
        <p className="mt-3 max-w-lg text-sm leading-6 text-[#b6c0aa]">Configure the warehouse test zone before the next supervised run.</p>
        <div className="mt-8 grid border-2 border-[#626958] lg:grid-cols-[1.2fr_1fr]">
          <aside className="bg-[#d9ef54] p-6 text-[#181a18]">
            <p>ACTIVE ZONE</p>
            <p className="mt-10 text-[5rem] leading-none font-semibold">B—04</p>
            <p className="mt-6 max-w-sm text-sm leading-6">Picking lanes 12–18<br />6 mobile units / pedestrian access</p>
            <p className="mt-6 max-w-sm text-sm leading-6">Physical emergency stops remain active at every station.</p>
          </aside>
          <div className="grid content-start gap-6 p-6">
            <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-robot-safety-speed">
              Maximum test speed
              <select
                className="min-w-0 w-full rounded-md border border-[#b6c0aa] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                id="settings-robot-safety-speed"
                name="speed"
              >
                <option value="08">0.8 m/s</option>
                <option value="06">0.6 m/s</option>
                <option value="04">0.4 m/s</option>
              </select>
            </label>
            <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-robot-safety-distance">
              Pedestrian clearance
              <select
                className="min-w-0 w-full rounded-md border border-[#b6c0aa] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                id="settings-robot-safety-distance"
                name="distance"
              >
                <option value="20">2.0 metres</option>
                <option value="25">2.5 metres</option>
                <option value="30">3.0 metres</option>
              </select>
            </label>
            <label
              className="flex cursor-pointer items-start gap-3 text-sm leading-6"
              htmlFor="settings-robot-safety-pause"
            >
              <input
                className="mt-1 size-4 shrink-0 cursor-pointer accent-[#d9ef54] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                id="settings-robot-safety-pause"
                name="pause"
                type="checkbox"
                aria-describedby="settings-robot-safety-pause-hint"
                defaultChecked
              />
              <span>
                <span>Pause at occupied crossings</span>
                <span className="block text-xs leading-5 text-[#b6c0aa]" id="settings-robot-safety-pause-hint">Require a clear crossing before resuming.</span>
              </span>
            </label>
            <details>
              <summary className="cursor-pointer text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Review deployment conditions</summary>
              <p className="mt-3 max-w-lg text-sm leading-6 text-[#b6c0aa]">A floor supervisor must approve the configuration at the local controller. Saving here creates a draft.</p>
            </details>
          </div>
        </div>
        <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#626958] pt-5">
          <p className="block text-xs leading-5 text-[#b6c0aa]">Draft configuration · no live motion commands</p>
          <button
            className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md bg-[#d9ef54] px-5 py-3 text-sm font-semibold text-[#181a18] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9ef54]"
            type="button"
          >
            Save safety draft
          </button>
        </footer>
      </form>
    </section>
  )
}
