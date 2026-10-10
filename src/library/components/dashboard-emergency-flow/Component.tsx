// Fonts: IBM Plex Sans
export default function DashboardEmergencyFlow() {
  return (
    <section className="bg-white px-4 py-8 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-blue-950 sm:px-8" aria-labelledby="dashboard-emergency-flow-title">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-start justify-between gap-4 border-b border-blue-200 pb-6">
          <div>
            <p className="text-xs font-semibold tracking-widest text-blue-700">RESUSLINE / EASTBOROUGH HOSPITAL</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight" id="dashboard-emergency-flow-title">Emergency department flow</h2>
          </div>
          <p className="rounded-md bg-blue-50 px-3 py-2 text-sm">Day shift · 10 Oct, 14:35</p>
        </header>
        <div className="mt-6 grid gap-4 border border-blue-200 p-5 md:grid-cols-[12rem_minmax(0,1fr)]">
          <div>
            <p className="text-xs text-blue-800">Treatment spaces occupied</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums">18 / 24</p>
          </div>
          <div className="grid grid-cols-8 gap-1.5 self-center sm:grid-cols-12" aria-hidden="true">
                  <span className="h-6 rounded-sm border border-blue-800 bg-blue-800"></span>
                  <span className="h-6 rounded-sm border border-blue-800 bg-blue-800"></span>
                  <span className="h-6 rounded-sm border border-blue-800 bg-blue-800"></span>
                  <span className="h-6 rounded-sm border border-blue-800 bg-blue-800"></span>
                  <span className="h-6 rounded-sm border border-blue-800 bg-blue-800"></span>
                  <span className="h-6 rounded-sm border border-blue-800 bg-blue-800"></span>
                  <span className="h-6 rounded-sm border border-blue-800 bg-blue-800"></span>
                  <span className="h-6 rounded-sm border border-blue-800 bg-blue-800"></span>
                  <span className="h-6 rounded-sm border border-blue-800 bg-blue-800"></span>
                  <span className="h-6 rounded-sm border border-blue-800 bg-blue-800"></span>
                  <span className="h-6 rounded-sm border border-blue-800 bg-blue-800"></span>
                  <span className="h-6 rounded-sm border border-blue-800 bg-blue-800"></span>
                  <span className="h-6 rounded-sm border border-blue-800 bg-blue-800"></span>
                  <span className="h-6 rounded-sm border border-blue-800 bg-blue-800"></span>
                  <span className="h-6 rounded-sm border border-blue-800 bg-blue-800"></span>
                  <span className="h-6 rounded-sm border border-blue-800 bg-blue-800"></span>
                  <span className="h-6 rounded-sm border border-blue-800 bg-blue-800"></span>
                  <span className="h-6 rounded-sm border border-blue-800 bg-blue-800"></span>
                  <span className="h-6 rounded-sm border border-blue-400 bg-white"></span>
                  <span className="h-6 rounded-sm border border-blue-400 bg-white"></span>
                  <span className="h-6 rounded-sm border border-blue-400 bg-white"></span>
                  <span className="h-6 rounded-sm border border-blue-400 bg-white"></span>
                  <span className="h-6 rounded-sm border border-blue-400 bg-white"></span>
                  <span className="h-6 rounded-sm border border-blue-400 bg-white"></span>
              </div>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <ol role="list" aria-label="Department queues by care pathway" className="grid gap-3">
            <li className="grid grid-cols-[3rem_minmax(0,1fr)] items-center gap-4 rounded-lg border p-4 sm:grid-cols-[3rem_minmax(0,1fr)_auto] border-red-300 bg-red-50 text-red-900">
              <p className="text-3xl font-semibold tabular-nums">02</p>
              <div>
                <h3 className="text-base font-semibold">Resuscitation</h3>
                <p className="mt-1 text-sm text-red-800">2 patients · team assigned</p>
              </div>
              <p className="col-start-2 text-xs font-medium sm:col-start-auto">Immediate care</p>
            </li>
            <li className="grid grid-cols-[3rem_minmax(0,1fr)] items-center gap-4 rounded-lg border border-blue-200 p-4 sm:grid-cols-[3rem_minmax(0,1fr)_auto]">
              <p className="text-3xl font-semibold tabular-nums">11</p>
              <div>
                <h3 className="text-base font-semibold">Assessment</h3>
                <p className="mt-1 text-sm text-blue-800">4 awaiting a clinician</p>
              </div>
              <p className="col-start-2 text-xs font-medium sm:col-start-auto">Longest wait 18 min</p>
            </li>
            <li className="grid grid-cols-[3rem_minmax(0,1fr)] items-center gap-4 rounded-lg border border-blue-200 p-4 sm:grid-cols-[3rem_minmax(0,1fr)_auto]">
              <p className="text-3xl font-semibold tabular-nums">07</p>
              <div>
                <h3 className="text-base font-semibold">Observation</h3>
                <p className="mt-1 text-sm text-blue-800">3 awaiting test results</p>
              </div>
              <p className="col-start-2 text-xs font-medium sm:col-start-auto">Next review 14:45</p>
            </li>
            <li className="grid grid-cols-[3rem_minmax(0,1fr)] items-center gap-4 rounded-lg border border-blue-200 p-4 sm:grid-cols-[3rem_minmax(0,1fr)_auto]">
              <p className="text-3xl font-semibold tabular-nums">03</p>
              <div>
                <h3 className="text-base font-semibold">Ready to leave</h3>
                <p className="mt-1 text-sm text-blue-800">2 discharge · 1 ward transfer</p>
              </div>
              <p className="col-start-2 text-xs font-medium sm:col-start-auto">Transport notified</p>
            </li>
          </ol>
          <aside className="rounded-lg bg-blue-50 p-5" aria-label="Shift coordination">
            <h3 className="text-lg font-semibold">Shift coordination</h3>
            <dl className="mt-5 grid gap-4">
              <div className="flex justify-between gap-3 border-b border-blue-200 pb-3 text-sm">
                <dt>Clinicians on floor</dt>
                <dd>08</dd>
              </div>
              <div className="flex justify-between gap-3 border-b border-blue-200 pb-3 text-sm">
                <dt>Nurses on floor</dt>
                <dd>14</dd>
              </div>
              <div className="flex justify-between gap-3 border-b border-blue-200 pb-3 text-sm">
                <dt>Inbound ambulances</dt>
                <dd>02</dd>
              </div>
            </dl>
            <details className="mt-5">
              <summary className="cursor-pointer text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Transfer handover</summary>
              <p className="mt-3 text-sm leading-6 text-blue-800">Ward B has accepted one transfer. Porter requested at 14:28; estimated collection at 14:45.</p>
            </details>
          </aside>
        </div>
        <p className="mt-6 text-xs text-blue-800">Operational snapshot · Counts are grouped; patient identifiers are omitted.</p>
      </div>
    </section>
  )
}
