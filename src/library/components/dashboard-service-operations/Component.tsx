export default function DashboardServiceOperations() {
  return (
    <section className="bg-neutral-950 px-6 py-10 font-mono text-neutral-100 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-700 pb-6">
          <div className="grid gap-2">
            <p className="text-xs text-neutral-400">FORGE / OPERATIONS</p>
            <h2 className="text-3xl font-medium">Service health</h2>
          </div>
          <span className="rounded border border-lime-300/40 px-3 py-2 text-xs text-lime-300">
            All systems operational
          </span>
        </header>
        <div className="mt-7 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <article className="border border-neutral-700 p-6">
            <p className="text-xs text-neutral-400">REQUESTS / LAST 7 DAYS</p>
            <p className="mt-4 text-3xl tabular-nums">2.4 million</p>
            <div className="mt-6">
              <div className="flex h-32 items-end gap-3" aria-hidden="true">
                <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-sm bg-lime-300 h-[48px]"></div>
                  <p className="text-[10px] opacity-60">M</p>
                </div>
                <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-sm bg-lime-300 h-[66px]"></div>
                  <p className="text-[10px] opacity-60">T</p>
                </div>
                <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-sm bg-lime-300 h-[82px]"></div>
                  <p className="text-[10px] opacity-60">W</p>
                </div>
                <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-sm bg-lime-300 h-[54px]"></div>
                  <p className="text-[10px] opacity-60">T</p>
                </div>
                <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-sm bg-lime-300 h-[92px]"></div>
                  <p className="text-[10px] opacity-60">F</p>
                </div>
                <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-sm bg-lime-300 h-[78px]"></div>
                  <p className="text-[10px] opacity-60">S</p>
                </div>
                <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-sm bg-lime-300 h-[70px]"></div>
                  <p className="text-[10px] opacity-60">S</p>
                </div>
              </div>
            </div>
            <p className="mt-5 text-xs leading-6 text-neutral-400">
              Average response: 84ms · Errors: 0.02%
            </p>
          </article>
          <article className="border border-neutral-700 p-6">
            <h2 className="text-base font-medium">By service</h2>
            <ul className="mt-6 grid gap-5" role="list">
              <li className="border-b border-neutral-700 pb-4">
                <div className="flex flex-wrap justify-between gap-3">
                  <p className="text-xs">API gateway</p>
                  <p className="text-xs text-lime-300">99.99% / healthy</p>
                </div>
              </li>
              <li className="border-b border-neutral-700 pb-4">
                <div className="flex flex-wrap justify-between gap-3">
                  <p className="text-xs">Build runners</p>
                  <p className="text-xs text-lime-300">99.97% / healthy</p>
                </div>
              </li>
              <li className="border-b border-neutral-700 pb-4">
                <div className="flex flex-wrap justify-between gap-3">
                  <p className="text-xs">Object storage</p>
                  <p className="text-xs text-lime-300">100.00% / healthy</p>
                </div>
              </li>
            </ul>
            <p className="mt-5 text-xs text-neutral-400">30-day availability</p>
          </article>
        </div>
        <footer className="mt-6 flex flex-wrap justify-between gap-4 border-t border-neutral-700 pt-6">
          <p className="text-xs leading-6 text-neutral-400">
            Last incident: October 2 · Resolved in 12 minutes
          </p>
          <a
            className="text-xs text-lime-300 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            href="#"
          >
            Read incident history
          </a>
        </footer>
      </div>
    </section>
  )
}
