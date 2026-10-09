// Fonts: B612 (https://fonts.google.com/specimen/B612)
export default function DashboardStatsDark() {
  return (
    <section className="bg-slate-950 px-4 py-10 font-['B612',ui-sans-serif,system-ui,sans-serif] text-slate-100 antialiased sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Ground operations</h2>
            <p className="mt-1 text-sm text-slate-400">
              Kestrel Bay Regional (KBR), <time dateTime="2026-10-08T14:20">Thu 8 Oct, 14:20</time>
            </p>
          </div>
          <nav aria-label="Date range">
            <ul role="list" className="flex gap-1 rounded-lg bg-slate-900 p-1 ring-1 ring-slate-800">
              <li>
                <a
                  href="?range=today"
                  aria-current="page"
                  className="flex h-8 items-center rounded-md px-3 text-[0.8125rem] font-bold text-slate-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 aria-[current=page]:bg-slate-700 aria-[current=page]:text-white"
                >
                  Today
                </a>
              </li>
              <li>
                <a
                  href="?range=7d"
                  className="flex h-8 items-center rounded-md px-3 text-[0.8125rem] font-bold text-slate-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 aria-[current=page]:bg-slate-700 aria-[current=page]:text-white"
                >
                  7 days
                </a>
              </li>
              <li>
                <a
                  href="?range=30d"
                  className="flex h-8 items-center rounded-md px-3 text-[0.8125rem] font-bold text-slate-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 aria-[current=page]:bg-slate-700 aria-[current=page]:text-white"
                >
                  30 days
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Key figures; 1px gaps over a slate-800 fill draw the rules between them */}
        <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-slate-800 ring-1 ring-slate-800 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-slate-900 p-5 sm:p-6">
            <dt className="text-[0.8125rem] text-slate-400">On-time departures</dt>
            <dd className="mt-2 text-3xl font-bold tracking-tight">86.7%</dd>
            <dd className="mt-4">
              <div aria-hidden="true" className="relative h-1.5 rounded-full bg-slate-800">
                <div className="h-full w-[86.7%] rounded-full bg-sky-400" />
                <div className="absolute -top-1 left-[85%] h-3.5 w-0.5 rounded-full bg-white" />
              </div>
              <p className="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs">
                <span className="text-slate-400">Target 85%</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <svg aria-hidden="true" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3">
                    <path d="M6 9.5v-7M3 5.5l3-3 3 3" />
                  </svg>
                  <span>
                    <span className="sr-only">Up </span>2.1 pts
                  </span>
                  <span className="text-slate-400"> vs last Thu</span>
                </span>
              </p>
            </dd>
          </div>

          <div className="bg-slate-900 p-5 sm:p-6">
            <dt className="text-[0.8125rem] text-slate-400">Average turnaround</dt>
            <dd className="mt-2 text-3xl font-bold tracking-tight">
              38<span className="text-base font-normal tracking-normal text-slate-400"> min</span>
            </dd>
            <dd className="mt-4">
              <div aria-hidden="true" className="relative h-1.5 rounded-full bg-slate-800">
                <div className="h-full w-[63.3%] rounded-full bg-sky-400" />
                <div className="absolute -top-1 left-[66.7%] h-3.5 w-0.5 rounded-full bg-white" />
              </div>
              <p className="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs">
                <span className="text-slate-400">Target 40 min</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <svg aria-hidden="true" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3">
                    <path d="M6 2.5v7M3 6.5l3 3 3-3" />
                  </svg>
                  <span>
                    <span className="sr-only">Down </span>3 min
                  </span>
                  <span className="text-slate-400"> vs last Thu</span>
                </span>
              </p>
            </dd>
          </div>

          <div className="bg-slate-900 p-5 sm:p-6">
            <dt className="text-[0.8125rem] text-slate-400">Departures</dt>
            <dd className="mt-2 text-3xl font-bold tracking-tight">
              188<span className="text-base font-normal tracking-normal text-slate-400"> of 326</span>
            </dd>
            <dd className="mt-4">
              <div aria-hidden="true" className="relative h-1.5 rounded-full bg-slate-800">
                <div className="h-full w-[57.7%] rounded-full bg-sky-400" />
              </div>
              <p className="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs">
                <span className="text-slate-400">138 still to go</span>
                <span className="text-slate-400">58% departed</span>
              </p>
            </dd>
          </div>

          <div className="bg-slate-900 p-5 sm:p-6">
            <dt className="text-[0.8125rem] text-slate-400">Bags mishandled</dt>
            <dd className="mt-2 text-3xl font-bold tracking-tight">
              2.6<span className="text-base font-normal tracking-normal text-slate-400"> per 1,000</span>
            </dd>
            <dd className="mt-4">
              <div aria-hidden="true" className="relative h-1.5 rounded-full bg-slate-800">
                <div className="h-full w-[65%] rounded-full bg-rose-400" />
                <div className="absolute -top-1 left-[50%] h-3.5 w-0.5 rounded-full bg-white" />
              </div>
              <p className="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs">
                <span className="text-slate-400">Target 2.0</span>
                <span className="flex items-center gap-1 text-rose-400">
                  <svg aria-hidden="true" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3">
                    <path d="M6 9.5v-7M3 5.5l3-3 3 3" />
                  </svg>
                  <span>
                    <span className="sr-only">Up </span>0.4
                  </span>
                  <span className="text-slate-400"> vs last Thu</span>
                </span>
              </p>
            </dd>
          </div>
        </dl>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <section aria-labelledby="dashboard-stats-dark-hourly" className="flex flex-col rounded-2xl bg-slate-900 p-5 ring-1 ring-slate-800 sm:p-6 lg:col-span-2">
            <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
              <div>
                <h3 id="dashboard-stats-dark-hourly" className="text-base font-bold">
                  Departures by hour
                </h3>
                <p className="mt-1 text-[0.8125rem] text-slate-400">Busiest so far: 07:00, with 26 departures and 4 delayed.</p>
              </div>
              <ul aria-hidden="true" className="flex gap-4 text-xs text-slate-400">
                <li className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-sm bg-sky-400" />
                  On time
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-sm bg-amber-400" />
                  Delayed
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-sm border border-dashed border-slate-400 bg-slate-500/20" />
                  Scheduled
                </li>
              </ul>
            </div>

            {/* Bars are drawn for sighted users; each hour also carries a visually hidden sentence */}
            <div className="relative mt-6 h-48 lg:h-auto lg:min-h-48 lg:flex-1">
              <div aria-hidden="true" className="absolute inset-x-0 -inset-y-2 flex flex-col-reverse justify-between">
                <div className="flex h-4 items-center gap-2">
                  <span className="w-6 text-right text-[0.6875rem] text-slate-400">0</span>
                  <span className="h-px flex-1 bg-slate-800" />
                </div>
                <div className="flex h-4 items-center gap-2">
                  <span className="w-6 text-right text-[0.6875rem] text-slate-400">10</span>
                  <span className="h-px flex-1 bg-slate-800" />
                </div>
                <div className="flex h-4 items-center gap-2">
                  <span className="w-6 text-right text-[0.6875rem] text-slate-400">20</span>
                  <span className="h-px flex-1 bg-slate-800" />
                </div>
                <div className="flex h-4 items-center gap-2">
                  <span className="w-6 text-right text-[0.6875rem] text-slate-400">30</span>
                  <span className="h-px flex-1 bg-slate-800" />
                </div>
              </div>
              <ol role="list" aria-labelledby="dashboard-stats-dark-hourly" className="relative ml-8 flex h-full items-end gap-1 sm:gap-1.5">
                <li className="relative flex h-full flex-1 items-end">
                  <span className="sr-only">05:00: 8 on time</span>
                  <div aria-hidden="true" className="flex h-[26.7%] w-full flex-col gap-px overflow-hidden rounded-t-[3px]">
                    <div className="flex-[8] bg-sky-400" />
                  </div>
                </li>
                <li className="relative flex h-full flex-1 items-end">
                  <span className="sr-only">06:00: 16 on time, 2 delayed</span>
                  <div aria-hidden="true" className="flex h-[60%] w-full flex-col gap-px overflow-hidden rounded-t-[3px]">
                    <div className="flex-[2] bg-amber-400" />
                    <div className="flex-[16] bg-sky-400" />
                  </div>
                </li>
                <li className="relative flex h-full flex-1 items-end">
                  <span className="sr-only">07:00: 22 on time, 4 delayed</span>
                  <div aria-hidden="true" className="flex h-[86.7%] w-full flex-col gap-px overflow-hidden rounded-t-[3px]">
                    <div className="flex-[4] bg-amber-400" />
                    <div className="flex-[22] bg-sky-400" />
                  </div>
                </li>
                <li className="relative flex h-full flex-1 items-end">
                  <span className="sr-only">08:00: 20 on time, 4 delayed</span>
                  <div aria-hidden="true" className="flex h-[80%] w-full flex-col gap-px overflow-hidden rounded-t-[3px]">
                    <div className="flex-[4] bg-amber-400" />
                    <div className="flex-[20] bg-sky-400" />
                  </div>
                </li>
                <li className="relative flex h-full flex-1 items-end">
                  <span className="sr-only">09:00: 18 on time, 2 delayed</span>
                  <div aria-hidden="true" className="flex h-[66.7%] w-full flex-col gap-px overflow-hidden rounded-t-[3px]">
                    <div className="flex-[2] bg-amber-400" />
                    <div className="flex-[18] bg-sky-400" />
                  </div>
                </li>
                <li className="relative flex h-full flex-1 items-end">
                  <span className="sr-only">10:00: 14 on time, 2 delayed</span>
                  <div aria-hidden="true" className="flex h-[53.3%] w-full flex-col gap-px overflow-hidden rounded-t-[3px]">
                    <div className="flex-[2] bg-amber-400" />
                    <div className="flex-[14] bg-sky-400" />
                  </div>
                </li>
                <li className="relative flex h-full flex-1 items-end">
                  <span className="sr-only">11:00: 16 on time, 3 delayed</span>
                  <div aria-hidden="true" className="flex h-[63.3%] w-full flex-col gap-px overflow-hidden rounded-t-[3px]">
                    <div className="flex-[3] bg-amber-400" />
                    <div className="flex-[16] bg-sky-400" />
                  </div>
                </li>
                <li className="relative flex h-full flex-1 items-end">
                  <span className="sr-only">12:00: 19 on time, 3 delayed</span>
                  <div aria-hidden="true" className="flex h-[73.3%] w-full flex-col gap-px overflow-hidden rounded-t-[3px]">
                    <div className="flex-[3] bg-amber-400" />
                    <div className="flex-[19] bg-sky-400" />
                  </div>
                </li>
                <li className="relative flex h-full flex-1 items-end">
                  <span className="sr-only">13:00: 18 on time, 3 delayed</span>
                  <div aria-hidden="true" className="flex h-[70%] w-full flex-col gap-px overflow-hidden rounded-t-[3px]">
                    <div className="flex-[3] bg-amber-400" />
                    <div className="flex-[18] bg-sky-400" />
                  </div>
                </li>
                <li className="relative flex h-full flex-1 items-end">
                  <span className="sr-only">14:00: 12 on time, 2 delayed, 6 scheduled</span>
                  <div aria-hidden="true" className="flex h-[66.7%] w-full flex-col gap-px overflow-hidden rounded-t-[3px]">
                    <div className="flex-[6] rounded-t-[3px] border border-b-0 border-dashed border-slate-400 bg-slate-500/20" />
                    <div className="flex-[2] bg-amber-400" />
                    <div className="flex-[12] bg-sky-400" />
                  </div>
                </li>
                <li className="relative flex h-full flex-1 items-end">
                  <span className="sr-only">15:00: 23 scheduled</span>
                  <div aria-hidden="true" className="flex h-[76.7%] w-full flex-col gap-px overflow-hidden rounded-t-[3px]">
                    <div className="flex-[23] rounded-t-[3px] border border-b-0 border-dashed border-slate-400 bg-slate-500/20" />
                  </div>
                </li>
                <li className="relative flex h-full flex-1 items-end">
                  <span className="sr-only">16:00: 25 scheduled</span>
                  <div aria-hidden="true" className="flex h-[83.3%] w-full flex-col gap-px overflow-hidden rounded-t-[3px]">
                    <div className="flex-[25] rounded-t-[3px] border border-b-0 border-dashed border-slate-400 bg-slate-500/20" />
                  </div>
                </li>
                <li className="relative flex h-full flex-1 items-end">
                  <span className="sr-only">17:00: 22 scheduled</span>
                  <div aria-hidden="true" className="flex h-[73.3%] w-full flex-col gap-px overflow-hidden rounded-t-[3px]">
                    <div className="flex-[22] rounded-t-[3px] border border-b-0 border-dashed border-slate-400 bg-slate-500/20" />
                  </div>
                </li>
                <li className="relative flex h-full flex-1 items-end">
                  <span className="sr-only">18:00: 19 scheduled</span>
                  <div aria-hidden="true" className="flex h-[63.3%] w-full flex-col gap-px overflow-hidden rounded-t-[3px]">
                    <div className="flex-[19] rounded-t-[3px] border border-b-0 border-dashed border-slate-400 bg-slate-500/20" />
                  </div>
                </li>
                <li className="relative flex h-full flex-1 items-end">
                  <span className="sr-only">19:00: 16 scheduled</span>
                  <div aria-hidden="true" className="flex h-[53.3%] w-full flex-col gap-px overflow-hidden rounded-t-[3px]">
                    <div className="flex-[16] rounded-t-[3px] border border-b-0 border-dashed border-slate-400 bg-slate-500/20" />
                  </div>
                </li>
                <li className="relative flex h-full flex-1 items-end">
                  <span className="sr-only">20:00: 12 scheduled</span>
                  <div aria-hidden="true" className="flex h-[40%] w-full flex-col gap-px overflow-hidden rounded-t-[3px]">
                    <div className="flex-[12] rounded-t-[3px] border border-b-0 border-dashed border-slate-400 bg-slate-500/20" />
                  </div>
                </li>
                <li className="relative flex h-full flex-1 items-end">
                  <span className="sr-only">21:00: 9 scheduled</span>
                  <div aria-hidden="true" className="flex h-[30%] w-full flex-col gap-px overflow-hidden rounded-t-[3px]">
                    <div className="flex-[9] rounded-t-[3px] border border-b-0 border-dashed border-slate-400 bg-slate-500/20" />
                  </div>
                </li>
                <li className="relative flex h-full flex-1 items-end">
                  <span className="sr-only">22:00: 6 scheduled</span>
                  <div aria-hidden="true" className="flex h-[20%] w-full flex-col gap-px overflow-hidden rounded-t-[3px]">
                    <div className="flex-[6] rounded-t-[3px] border border-b-0 border-dashed border-slate-400 bg-slate-500/20" />
                  </div>
                </li>
              </ol>
            </div>
            <div aria-hidden="true" className="mt-2 ml-8 flex gap-1 text-[0.6875rem] text-slate-400 sm:gap-1.5">
              <span className="flex min-w-0 flex-1 justify-center whitespace-nowrap">05:00</span>
              <span className="flex-1" />
              <span className="flex-1" />
              <span className="flex min-w-0 flex-1 justify-center whitespace-nowrap">08:00</span>
              <span className="flex-1" />
              <span className="flex-1" />
              <span className="flex min-w-0 flex-1 justify-center whitespace-nowrap">11:00</span>
              <span className="flex-1" />
              <span className="flex-1" />
              <span className="flex min-w-0 flex-1 justify-center font-bold whitespace-nowrap text-white">14:00</span>
              <span className="flex-1" />
              <span className="flex-1" />
              <span className="flex min-w-0 flex-1 justify-center whitespace-nowrap">17:00</span>
              <span className="flex-1" />
              <span className="flex-1" />
              <span className="flex min-w-0 flex-1 justify-center whitespace-nowrap">20:00</span>
              <span className="flex-1" />
              <span className="flex-1" />
            </div>
          </section>

          <section aria-labelledby="dashboard-stats-dark-causes" className="rounded-2xl bg-slate-900 p-5 ring-1 ring-slate-800 sm:p-6">
            <h3 id="dashboard-stats-dark-causes" className="text-base font-bold">
              Delay minutes by cause
            </h3>
            <p className="mt-1 text-[0.8125rem] text-slate-400">551 minutes across 25 delayed departures.</p>
            <ol role="list" className="mt-6 flex flex-col gap-4">
              <li>
                <div className="flex items-baseline justify-between gap-4 text-sm">
                  <span>Late inbound aircraft</span>
                  <span className="font-bold">212 min</span>
                </div>
                <div aria-hidden="true" className="mt-2 h-2 rounded-full bg-slate-800">
                  <div className="h-full w-full rounded-full bg-amber-400" />
                </div>
              </li>
              <li>
                <div className="flex items-baseline justify-between gap-4 text-sm">
                  <span>Ground handling</span>
                  <span className="font-bold">148 min</span>
                </div>
                <div aria-hidden="true" className="mt-2 h-2 rounded-full bg-slate-800">
                  <div className="h-full w-[69.8%] rounded-full bg-amber-400" />
                </div>
              </li>
              <li>
                <div className="flex items-baseline justify-between gap-4 text-sm">
                  <span>Weather</span>
                  <span className="font-bold">96 min</span>
                </div>
                <div aria-hidden="true" className="mt-2 h-2 rounded-full bg-slate-800">
                  <div className="h-full w-[45.3%] rounded-full bg-amber-400" />
                </div>
              </li>
              <li>
                <div className="flex items-baseline justify-between gap-4 text-sm">
                  <span>Air traffic control</span>
                  <span className="font-bold">64 min</span>
                </div>
                <div aria-hidden="true" className="mt-2 h-2 rounded-full bg-slate-800">
                  <div className="h-full w-[30.2%] rounded-full bg-amber-400" />
                </div>
              </li>
              <li>
                <div className="flex items-baseline justify-between gap-4 text-sm">
                  <span>Crew</span>
                  <span className="font-bold">31 min</span>
                </div>
                <div aria-hidden="true" className="mt-2 h-2 rounded-full bg-slate-800">
                  <div className="h-full w-[14.6%] rounded-full bg-amber-400" />
                </div>
              </li>
            </ol>
            <p className="mt-6 border-t border-slate-800 pt-4 text-[0.8125rem] text-slate-400">
              Late inbound aircraft caused <span className="font-bold text-slate-100">38%</span> of today&rsquo;s delay minutes.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
