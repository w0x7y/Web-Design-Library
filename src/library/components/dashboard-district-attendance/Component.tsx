export default function DashboardDistrictAttendance() {
  return (
    <section className="bg-blue-50 px-4 py-10 text-blue-950 sm:px-8" aria-labelledby="dashboard-district-attendance-title">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-widest text-blue-800">SCHOOLSPAN / WESTHAVEN DISTRICT</p>
            <h2 id="dashboard-district-attendance-title" className="mt-2 text-3xl font-semibold tracking-tight">Every school, one view.</h2>
          </div>
          <p className="self-start rounded-md bg-blue-900 px-3 py-2 text-xs font-semibold text-white">WEEK ENDING 9 OCT</p>
        </header>
        <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <article className="rounded-xl border border-blue-200 bg-white p-5 sm:p-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h3 className="text-lg font-semibold">Attendance by school</h3>
              <p className="text-3xl font-semibold tracking-tight tabular-nums">95.7%</p>
            </div>
            <p className="mt-2 text-xs leading-5 text-blue-800">District average · 1,842 enrolled pupils</p>
            <ul role="list" className="mt-6 grid gap-5">
              <li className="grid gap-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
                  <p className="font-semibold">Oakfield Primary</p>
                  <p>96.2% · 612 pupils</p>
                </div>
                <div aria-hidden="true" className="h-1.5 overflow-hidden rounded-full bg-blue-100">
                  <div className="h-full w-[96.2%] bg-blue-800"></div>
                </div>
              </li>
              <li className="grid gap-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
                  <p className="font-semibold">Elmbridge Middle</p>
                  <p>93.8% · 588 pupils</p>
                </div>
                <div aria-hidden="true" className="h-1.5 overflow-hidden rounded-full bg-blue-100">
                  <div className="h-full w-[93.8%] bg-blue-800"></div>
                </div>
              </li>
              <li className="grid gap-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
                  <p className="font-semibold">Parkside High</p>
                  <p>97.1% · 642 pupils</p>
                </div>
                <div aria-hidden="true" className="h-1.5 overflow-hidden rounded-full bg-blue-100">
                  <div className="h-full w-[97.1%] bg-blue-800"></div>
                </div>
              </li>
            </ul>
            <details className="mt-6">
              <summary className="cursor-pointer text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">View reporting coverage</summary>
              <p className="mt-3 text-sm leading-6">All three schools submitted registers by 09:30. Late arrivals are included after the daily 10:00 reconciliation.</p>
            </details>
          </article>
          <article className="rounded-xl border border-blue-200 bg-white p-5 sm:p-6">
            <h3 className="text-lg font-semibold">This week at a glance</h3>
            <p className="mt-2 text-xs leading-5 text-blue-800">Daily district attendance</p>
            <ol role="list" className="mt-6 grid grid-cols-5 gap-2">
              <li className="grid justify-items-center gap-3 rounded-lg bg-blue-50 px-1 py-3">
                <p className="text-xs font-semibold">Mon</p>
                <div aria-hidden="true" className="grid grid-cols-2 gap-1"><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-200"></span></div>
                <p className="text-[11px] font-semibold tabular-nums">95.4%</p>
              </li>
              <li className="grid justify-items-center gap-3 rounded-lg bg-blue-50 px-1 py-3">
                <p className="text-xs font-semibold">Tue</p>
                <div aria-hidden="true" className="grid grid-cols-2 gap-1"><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span></div>
                <p className="text-[11px] font-semibold tabular-nums">96.1%</p>
              </li>
              <li className="grid justify-items-center gap-3 rounded-lg bg-blue-50 px-1 py-3">
                <p className="text-xs font-semibold">Wed</p>
                <div aria-hidden="true" className="grid grid-cols-2 gap-1"><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-200"></span></div>
                <p className="text-[11px] font-semibold tabular-nums">95.8%</p>
              </li>
              <li className="grid justify-items-center gap-3 rounded-lg bg-blue-50 px-1 py-3">
                <p className="text-xs font-semibold">Thu</p>
                <div aria-hidden="true" className="grid grid-cols-2 gap-1"><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-200"></span><span className="size-2 rounded-full bg-blue-200"></span></div>
                <p className="text-[11px] font-semibold tabular-nums">95.0%</p>
              </li>
              <li className="grid justify-items-center gap-3 rounded-lg bg-blue-50 px-1 py-3">
                <p className="text-xs font-semibold">Fri</p>
                <div aria-hidden="true" className="grid grid-cols-2 gap-1"><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-800"></span><span className="size-2 rounded-full bg-blue-200"></span></div>
                <p className="text-[11px] font-semibold tabular-nums">95.7%</p>
              </li>
            </ol>
            <p className="mt-6 rounded-lg border-l-4 border-amber-700 bg-amber-50 p-4 text-sm leading-6 text-amber-950">Follow up with Elmbridge. Absence reports are above the district average for the second week.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
