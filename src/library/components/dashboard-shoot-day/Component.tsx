// Fonts: Instrument Serif, DM Mono
export default function DashboardShootDay() {
  return (
    <section className="bg-stone-100 px-4 py-10 text-stone-950 sm:px-8" aria-labelledby="dashboard-shoot-day-title">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-baseline justify-between gap-4 border-b-2 border-stone-950 pb-4 font-['DM_Mono',ui-monospace,monospace] text-xs">
          <p>TAKELEDGER / PRODUCTION OFFICE</p>
          <p>CALL SHEET 012 · SAT 10 OCT 2026</p>
        </header>
        <div className="mt-6 grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <aside>
            <p className="font-['DM_Mono',ui-monospace,monospace] text-xs tracking-widest">SHOOT DAY</p>
            <p className="mt-2 font-['Instrument_Serif',ui-serif,Georgia,serif] text-[8rem] leading-none tracking-tight">12</p>
            <h2 id="dashboard-shoot-day-title" className="mt-2 font-['Instrument_Serif',ui-serif,Georgia,serif] text-4xl">The Long Way Home</h2>
            <p className="mt-4 text-sm leading-6 text-stone-700">Unit A · 12 of 24 scheduled days.<br />General crew call at 07:00.</p>
            <dl className="mt-6 grid gap-3 border-t border-stone-400 pt-4">
              <div className="flex justify-between gap-3 text-xs">
                <dt>Location</dt>
                <dd>Old Mill House</dd>
              </div>
              <div className="flex justify-between gap-3 text-xs">
                <dt>Pages today</dt>
                <dd>4 ⅜</dd>
              </div>
              <div className="flex justify-between gap-3 text-xs">
                <dt>Sunset</dt>
                <dd>18:24</dd>
              </div>
            </dl>
          </aside>
          <article>
            <h3 className="font-['DM_Mono',ui-monospace,monospace] text-xs font-medium tracking-widest">TODAY'S SHOOTING ORDER</h3>
            <ol role="list" className="mt-4 border-t border-stone-400">
              <li className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 border-b border-stone-400 py-5 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto]">
                <p className="font-['DM_Mono',ui-monospace,monospace] text-xs">08:00</p>
                <div>
                  <h4 className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-2xl">Scene 28 · Kitchen, morning</h4>
                  <p className="mt-2 text-xs text-stone-700">INT / DAY · Cast 1, 3 · 1 ⅛ pages</p>
                </div>
                <p className="col-start-2 self-start font-['DM_Mono',ui-monospace,monospace] text-[10px] tracking-widest sm:col-start-auto">IN THE CAN</p>
              </li>
              <li className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 border-b border-stone-400 py-5 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto]">
                <p className="font-['DM_Mono',ui-monospace,monospace] text-xs">10:30</p>
                <div>
                  <h4 className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-2xl">Scene 31 · Upstairs landing</h4>
                  <p className="mt-2 text-xs text-stone-700">INT / DAY · Cast 1, 2 · 1 ¾ pages</p>
                </div>
                <p className="col-start-2 self-start font-['DM_Mono',ui-monospace,monospace] text-[10px] tracking-widest sm:col-start-auto text-red-800">CAMERA SETUP</p>
              </li>
              <li className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 border-b border-stone-400 py-5 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto]">
                <p className="font-['DM_Mono',ui-monospace,monospace] text-xs">13:00</p>
                <div>
                  <h4 className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-2xl">Lunch · 45 minutes</h4>
                  <p className="mt-2 text-xs text-stone-700">Courtyard marquee · All departments</p>
                </div>
                <p className="col-start-2 self-start font-['DM_Mono',ui-monospace,monospace] text-[10px] tracking-widest sm:col-start-auto">SCHEDULED</p>
              </li>
              <li className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 border-b border-stone-400 py-5 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto]">
                <p className="font-['DM_Mono',ui-monospace,monospace] text-xs">14:00</p>
                <div>
                  <h4 className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-2xl">Scene 34 · Garden gate</h4>
                  <p className="mt-2 text-xs text-stone-700">EXT / DAY · Cast 1, 2, 4 · 1 ½ pages</p>
                </div>
                <p className="col-start-2 self-start font-['DM_Mono',ui-monospace,monospace] text-[10px] tracking-widest sm:col-start-auto">SCHEDULED</p>
              </li>
            </ol>
            <details className="mt-6 border-l-2 border-red-800 pl-4">
              <summary className="cursor-pointer text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Location access note</summary>
              <p className="mt-3 text-sm leading-6">Use the west gate for crew parking. Keep the lane clear for residents. The location marshal opens vehicle access at 06:30.</p>
            </details>
          </article>
        </div>
      </div>
    </section>
  )
}
