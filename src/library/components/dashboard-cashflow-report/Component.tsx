export default function DashboardCashflowReport() {
  return (
    <section className="bg-[#f7f3eb] px-6 py-10 text-[#383229] sm:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-wrap items-center justify-between gap-5 border-b border-[#383229]/20 pb-6">
          <div className="grid gap-2">
            <p className="font-mono text-[10px] tracking-widest">
              MONDAY, OCTOBER 12
            </p>
            <h2 className="font-serif text-4xl font-normal">
              A good week to begin.
            </h2>
          </div>
          <a
            className="text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            href="#"
          >
            View statement
          </a>
        </header>
        <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <article className="border border-[#383229]/20 p-6">
            <div className="grid gap-2 ">
              <p className="text-xs font-medium opacity-70">
                Available balance
              </p>
              <p className="text-3xl font-semibold tracking-tight tabular-nums">
                $18,420.00
              </p>
              <p className="text-xs opacity-70">
                Across your business accounts
              </p>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-5 border-t border-[#383229]/20 pt-5">
              <div className="grid gap-2 ">
                <p className="text-xs font-medium opacity-70">Money in</p>
                <p className="text-3xl font-semibold tracking-tight tabular-nums">
                  $6,800
                </p>
                <p className="text-xs opacity-70">This month</p>
              </div>
              <div className="grid gap-2 ">
                <p className="text-xs font-medium opacity-70">Money out</p>
                <p className="text-3xl font-semibold tracking-tight tabular-nums">
                  $2,140
                </p>
                <p className="text-xs opacity-70">This month</p>
              </div>
            </div>
          </article>
          <article className="border border-[#383229]/20 p-6">
            <div className="flex flex-wrap justify-between gap-3">
              <h2 className="text-base font-semibold">Income this week</h2>
              <p className="text-xs opacity-70">$3,280 total</p>
            </div>
            <div className="mt-6">
              <div className="flex h-32 items-end gap-3" aria-hidden="true">
                <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-sm bg-[#686f4c] h-[42px]"></div>
                  <p className="text-[10px] opacity-60">M</p>
                </div>
                <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-sm bg-[#686f4c] h-[65px]"></div>
                  <p className="text-[10px] opacity-60">T</p>
                </div>
                <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-sm bg-[#686f4c] h-[30px]"></div>
                  <p className="text-[10px] opacity-60">W</p>
                </div>
                <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-sm bg-[#686f4c] h-[92px]"></div>
                  <p className="text-[10px] opacity-60">T</p>
                </div>
                <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-sm bg-[#686f4c] h-[76px]"></div>
                  <p className="text-[10px] opacity-60">F</p>
                </div>
                <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-sm bg-[#686f4c] h-[18px]"></div>
                  <p className="text-[10px] opacity-60">S</p>
                </div>
                <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-sm bg-[#686f4c] h-[12px]"></div>
                  <p className="text-[10px] opacity-60">S</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs opacity-70">
              Highest income: Thursday · $980
            </p>
          </article>
        </div>
        <div className="mt-7">
          <h2 className="text-lg font-semibold">Recent payments</h2>
          <ul className="mt-4 grid gap-4" role="list">
            <li className="border-b border-[#383229]/15 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium">Studio North</p>
                  <p className="text-xs text-[#756854]">
                    Brand identity deposit
                  </p>
                </div>
                <p className="text-sm font-medium tabular-nums">+$1,840.00</p>
              </div>
            </li>
            <li className="border-b border-[#383229]/15 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium">Field School</p>
                  <p className="text-xs text-[#756854]">October workshops</p>
                </div>
                <p className="text-sm font-medium tabular-nums">+$960.00</p>
              </div>
            </li>
            <li className="border-b border-[#383229]/15 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium">Print House</p>
                  <p className="text-xs text-[#756854]">Production invoice</p>
                </div>
                <p className="text-sm font-medium tabular-nums">−$420.00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
