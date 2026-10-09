export default function TeamResearchLab() {
  return (
    <section
      aria-labelledby="team-research-lab-title"
      className="bg-slate-50 text-slate-900"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-800">
            Estuary research group
          </p>
          <h2
            id="team-research-lab-title"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Better questions. Clearer water.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Ecologists, engineers and data scientists working together to
            restore urban waterways.
          </p>
        </header>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl bg-teal-950 p-6 text-white sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <span
                aria-hidden="true"
                className="flex size-16 items-center justify-center rounded-xl border border-teal-700 bg-teal-900 font-serif text-3xl"
              >
                SC
              </span>
              <span className="rounded-full border border-teal-700 px-3 py-1 text-xs text-teal-100">
                Principal investigator
              </span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold">Dr. Sofia Chen</h3>
            <p className="mt-1 text-sm text-teal-200">Watershed ecology</p>
            <p className="mt-5 text-sm leading-7 text-teal-100">
              Sofia leads our work on how restored wetlands filter stormwater
              before it reaches the coast.
            </p>
            <a
              href="#sofia-research"
              className="mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-medium text-white underline underline-offset-4 hover:text-teal-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore Sofia’s research{' '}
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="inline-block size-3.5 align-[-0.125em]"
              >
                <path d="M5 15 15 5M5 5h10v10" />
              </svg>
            </a>
          </article>
          <ul
            role="list"
            className="rounded-2xl border border-slate-200 bg-white px-6"
          >
            <li className="flex gap-4 border-b border-slate-200 py-6">
              <span
                aria-hidden="true"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-sm font-semibold text-teal-900"
              >
                JM
              </span>
              <div>
                <h3 className="font-semibold">Jonah Mensah</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Environmental engineer
                </p>
                <a
                  href="#jonah-research"
                  className="mt-2 inline-block rounded-sm text-xs font-medium text-teal-800 underline underline-offset-4 hover:text-teal-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
                >
                  Jonah’s projects
                </a>
              </div>
            </li>
            <li className="flex gap-4 border-b border-slate-200 py-6">
              <span
                aria-hidden="true"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-900"
              >
                AK
              </span>
              <div>
                <h3 className="font-semibold">Anika Kumar</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Data science fellow
                </p>
                <a
                  href="#anika-research"
                  className="mt-2 inline-block rounded-sm text-xs font-medium text-teal-800 underline underline-offset-4 hover:text-teal-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
                >
                  Anika’s projects
                </a>
              </div>
            </li>
            <li className="flex gap-4 py-6">
              <span
                aria-hidden="true"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-amber-50 text-sm font-semibold text-amber-900"
              >
                RO
              </span>
              <div>
                <h3 className="font-semibold">Ruth Osei</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Community field coordinator
                </p>
                <a
                  href="#ruth-research"
                  className="mt-2 inline-block rounded-sm text-xs font-medium text-teal-800 underline underline-offset-4 hover:text-teal-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
                >
                  Ruth’s projects
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
