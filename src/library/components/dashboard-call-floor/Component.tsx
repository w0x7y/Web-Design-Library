// Fonts: IBM Plex Mono
export default function DashboardCallFloor() {
  return (
    <section className="bg-blue-950 px-4 py-8 font-['IBM_Plex_Mono',ui-monospace,monospace] text-cyan-50 sm:px-8" aria-labelledby="dashboard-call-floor-title">
      <div className="mx-auto max-w-7xl">
        <header className="grid gap-4 border-y-2 border-cyan-200 py-5 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <p className="text-xs tracking-widest text-cyan-200">VOICEWELL / CONTACT FLOOR 01</p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight" id="dashboard-call-floor-title">Keep the queue moving.</h2>
          </div>
          <p className="self-end text-xs leading-5">10 OCT 2026 / 14:35<br />BILLING + ACCOUNTS</p>
        </header>
        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)]">
          <article>
            <h3 className="text-sm font-medium uppercase tracking-widest">Agent positions</h3>
            <p className="mt-3 text-xs leading-5 text-cyan-200">6 on calls · 3 ready · 2 wrapping · 1 on break</p>
            <ul role="list" className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
              <li className="border border-cyan-200 p-3 text-center bg-cyan-200 text-blue-950">
                <p className="text-sm font-medium">A01</p>
                <p className="mt-2 text-[10px] tracking-wider">CALL</p>
              </li>
              <li className="border border-cyan-200 p-3 text-center bg-cyan-200 text-blue-950">
                <p className="text-sm font-medium">A02</p>
                <p className="mt-2 text-[10px] tracking-wider">CALL</p>
              </li>
              <li className="border border-cyan-200 p-3 text-center">
                <p className="text-sm font-medium">A03</p>
                <p className="mt-2 text-[10px] tracking-wider">READY</p>
              </li>
              <li className="border border-cyan-200 p-3 text-center bg-cyan-200 text-blue-950">
                <p className="text-sm font-medium">A04</p>
                <p className="mt-2 text-[10px] tracking-wider">CALL</p>
              </li>
              <li className="border p-3 text-center border-amber-200 text-amber-200">
                <p className="text-sm font-medium">A05</p>
                <p className="mt-2 text-[10px] tracking-wider">WRAP</p>
              </li>
              <li className="border border-cyan-200 p-3 text-center">
                <p className="text-sm font-medium">A06</p>
                <p className="mt-2 text-[10px] tracking-wider">READY</p>
              </li>
              <li className="border border-cyan-200 p-3 text-center bg-cyan-200 text-blue-950">
                <p className="text-sm font-medium">A07</p>
                <p className="mt-2 text-[10px] tracking-wider">CALL</p>
              </li>
              <li className="border p-3 text-center border-dashed border-cyan-200/50">
                <p className="text-sm font-medium">A08</p>
                <p className="mt-2 text-[10px] tracking-wider">BREAK</p>
              </li>
              <li className="border border-cyan-200 p-3 text-center bg-cyan-200 text-blue-950">
                <p className="text-sm font-medium">A09</p>
                <p className="mt-2 text-[10px] tracking-wider">CALL</p>
              </li>
              <li className="border p-3 text-center border-amber-200 text-amber-200">
                <p className="text-sm font-medium">A10</p>
                <p className="mt-2 text-[10px] tracking-wider">WRAP</p>
              </li>
              <li className="border border-cyan-200 p-3 text-center">
                <p className="text-sm font-medium">A11</p>
                <p className="mt-2 text-[10px] tracking-wider">READY</p>
              </li>
              <li className="border border-cyan-200 p-3 text-center bg-cyan-200 text-blue-950">
                <p className="text-sm font-medium">A12</p>
                <p className="mt-2 text-[10px] tracking-wider">CALL</p>
              </li>
            </ul>
          </article>
          <dl className="grid gap-px border border-cyan-200 bg-cyan-200">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 bg-blue-950 p-5">
              <dt className="text-xs leading-5">Calls waiting</dt>
              <dd className="text-3xl font-medium tabular-nums">08</dd>
            </div>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 bg-blue-950 p-5">
              <dt className="text-xs leading-5">Longest wait</dt>
              <dd className="text-3xl font-medium tabular-nums">02:14</dd>
            </div>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 bg-blue-950 p-5">
              <dt className="text-xs leading-5">Answered in 60s</dt>
              <dd className="text-3xl font-medium tabular-nums">91%</dd>
            </div>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 bg-blue-950 p-5">
              <dt className="text-xs leading-5">Abandoned today</dt>
              <dd className="text-3xl font-medium tabular-nums">2.1%</dd>
            </div>
          </dl>
        </div>
        <details className="mt-6 border-2 border-amber-200 p-5">
          <summary className="cursor-pointer text-sm font-medium text-amber-200 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">01 escalation awaiting a supervisor</summary>
          <p className="mt-4 text-xs leading-6">Case V-418 · Account verification. Agent A05 requested a supervisor at 14:32. Customer is on hold; next update due in two minutes.</p>
        </details>
        <p className="mt-5 text-xs leading-5 text-cyan-200">Snapshot of 12 staffed positions. READY agents can receive the next routed call.</p>
      </div>
    </section>
  )
}
