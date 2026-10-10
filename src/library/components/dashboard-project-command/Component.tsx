export default function DashboardProjectCommand() {
  return (
    <section className="bg-slate-50 px-6 py-10 text-slate-950 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-wrap items-start justify-between gap-5">
          <div className="grid gap-2">
            <p className="text-xs font-medium tracking-widest text-slate-500">
              MERIDIAN / WEBSITE REFRESH
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              The work ahead.
            </h2>
          </div>
          <button
            className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold cursor-pointer hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
            type="button"
          >
            View project brief
          </button>
        </header>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          <div className="grid gap-2 rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-medium opacity-70">Completed</p>
            <p className="text-3xl font-semibold tracking-tight tabular-nums">
              18 / 24
            </p>
            <p className="text-xs opacity-70">Tasks in this milestone</p>
          </div>
          <div className="grid gap-2 rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-medium opacity-70">Next delivery</p>
            <p className="text-3xl font-semibold tracking-tight tabular-nums">
              Oct 23
            </p>
            <p className="text-xs opacity-70">Homepage and product pages</p>
          </div>
          <div className="grid gap-2 rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-medium opacity-70">Team focus</p>
            <p className="text-3xl font-semibold tracking-tight tabular-nums">
              Design QA
            </p>
            <p className="text-xs opacity-70">6 teammates contributing</p>
          </div>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold">This week’s milestones</h3>
            <ul className="mt-5 grid gap-5" role="list">
              <li>
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold">
                    ✓
                  </span>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">
                      Finalize mobile navigation
                    </p>
                    <p className="text-xs text-slate-500">Completed</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold">
                    02
                  </span>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">
                      Review product page flows
                    </p>
                    <p className="text-xs text-slate-500">Today</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold">
                    03
                  </span>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Prepare handoff notes</p>
                    <p className="text-xs text-slate-500">Thursday</p>
                  </div>
                </div>
              </li>
            </ul>
          </article>
          <aside className="rounded-xl bg-blue-700 p-6 text-white">
            <p className="text-xs tracking-widest text-blue-100">UP NEXT</p>
            <h3 className="mt-5 text-2xl font-semibold">Design review</h3>
            <p className="mt-3 text-sm text-blue-100">Tuesday · 10:00–10:45</p>
            <p className="mt-5 text-sm leading-6 text-blue-100">
              Bring the final mobile flows and any open questions.
            </p>
            <a
              className="mt-6 inline-flex text-sm font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              href="#"
            >
              Open agenda
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
