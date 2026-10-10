// Fonts: Familjen Grotesk
export default function DashboardReturnSort() {
  return (
    <section className="bg-rose-50 px-4 py-10 font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif] text-rose-950 sm:px-8" aria-labelledby="dashboard-return-sort-title">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-lg font-bold tracking-tight">Reboundry / Returns desk</p>
          <p className="rounded-full border border-rose-300 px-4 py-2 text-xs font-semibold">10 OCT · DOCK 4</p>
        </header>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight" id="dashboard-return-sort-title">Back in the loop.</h2>
            <p className="mt-4 text-[6rem] leading-none font-bold tracking-[-0.07em] tabular-nums">84</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-rose-800">Returns checked in today. Every parcel has a next stop, and 61 are already ready for another customer.</p>
            <dl className="mt-6 grid grid-cols-2 gap-3">
              <div className="flex flex-col-reverse rounded-2xl border border-rose-200 bg-white p-4">
                <dt className="mt-1 text-xs">Fit or size</dt>
                <dd className="text-2xl font-bold tabular-nums">52</dd>
              </div>
              <div className="flex flex-col-reverse rounded-2xl border border-rose-200 bg-white p-4">
                <dt className="mt-1 text-xs">Other reasons</dt>
                <dd className="text-2xl font-bold tabular-nums">32</dd>
              </div>
            </dl>
          </div>
          <ul role="list" aria-label="Return disposition bins" className="grid gap-4">
            <li className="grid grid-cols-[3rem_minmax(0,1fr)_auto] max-sm:grid-cols-[2rem_minmax(0,1fr)_auto] max-sm:gap-3 max-sm:p-4 items-center gap-4 rounded-[1.5rem] border-2 border-rose-950 p-5 bg-green-200">
              <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="size-12 max-sm:size-8">
                <path d="m6 14 18-7 18 7v22l-18 7-18-7V14Zm0 0 18 7 18-7M24 21v22M15 10l18 7v8"></path>
              </svg>
              <div>
                <h3 className="text-lg font-semibold">Restock</h3>
                <p className="mt-1 text-xs leading-5">Checked, folded, ready to relist</p>
              </div>
              <p className="text-3xl font-bold tabular-nums">61</p>
            </li>
            <li className="grid grid-cols-[3rem_minmax(0,1fr)_auto] max-sm:grid-cols-[2rem_minmax(0,1fr)_auto] max-sm:gap-3 max-sm:p-4 items-center gap-4 rounded-[1.5rem] border-2 border-rose-950 p-5 bg-pink-200">
              <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="size-12 max-sm:size-8">
                <path d="m6 14 18-7 18 7v22l-18 7-18-7V14Zm0 0 18 7 18-7M24 21v22M15 10l18 7v8"></path>
              </svg>
              <div>
                <h3 className="text-lg font-semibold">Review</h3>
                <p className="mt-1 text-xs leading-5">Awaiting a condition check</p>
              </div>
              <p className="text-3xl font-bold tabular-nums">17</p>
            </li>
            <li className="grid grid-cols-[3rem_minmax(0,1fr)_auto] max-sm:grid-cols-[2rem_minmax(0,1fr)_auto] max-sm:gap-3 max-sm:p-4 items-center gap-4 rounded-[1.5rem] border-2 border-rose-950 bg-white p-5">
              <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="size-12 max-sm:size-8">
                <path d="m6 14 18-7 18 7v22l-18 7-18-7V14Zm0 0 18 7 18-7M24 21v22M15 10l18 7v8"></path>
              </svg>
              <div>
                <h3 className="text-lg font-semibold">Recover</h3>
                <p className="mt-1 text-xs leading-5">Parts and textile recovery</p>
              </div>
              <p className="text-3xl font-bold tabular-nums">06</p>
            </li>
          </ul>
        </div>
        <details className="mt-8 border-t border-rose-300 pt-5">
          <summary className="cursor-pointer text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Show the oldest review parcel</summary>
          <p className="mt-3 text-sm leading-6">RB-2048 · Canvas overshirt, size M. Received at 09:12. Check the missing cuff button before assigning a disposition.</p>
        </details>
      </div>
    </section>
  )
}
