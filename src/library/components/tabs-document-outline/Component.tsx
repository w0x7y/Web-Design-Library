export default function TabsDocumentOutline() {
  return (
    <section
      aria-label="Project brief sections"
      className="group w-72 rounded-xl border border-slate-200 bg-white p-4 text-slate-900"
    >
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
        <span
          aria-hidden="true"
          className="flex size-7 items-center justify-center rounded bg-blue-50 text-blue-800"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="size-4"
          >
            <path d="M4 1.5h6l3 3v10H4zM10 1.5v3h3M6 8h5M6 11h4" />
          </svg>
        </span>
        <h2 className="text-sm font-semibold">Website refresh</h2>
      </div>
      <div className="mt-4 grid grid-cols-[72px_minmax(0,1fr)] gap-3">
        <fieldset>
          <legend className="sr-only">Choose brief section</legend>
          <div className="space-y-1 border-r border-slate-200 pr-2">
            <label className="flex h-9 cursor-pointer items-center rounded-md px-2 text-[10px] hover:bg-slate-100 has-checked:bg-blue-50 has-checked:font-semibold has-checked:text-blue-800 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900">
              <input
                id="tabs-document-outline-overview"
                type="radio"
                name="tabs-document-outline-section"
                value="overview"
                defaultChecked
                className="sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              />
              Overview
            </label>
            <label className="flex h-9 cursor-pointer items-center rounded-md px-2 text-[10px] hover:bg-slate-100 has-checked:bg-blue-50 has-checked:font-semibold has-checked:text-blue-800 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900">
              <input
                id="tabs-document-outline-plan"
                type="radio"
                name="tabs-document-outline-section"
                value="plan"
                className="sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              />
              Timeline
            </label>
            <label className="flex h-9 cursor-pointer items-center rounded-md px-2 text-[10px] hover:bg-slate-100 has-checked:bg-blue-50 has-checked:font-semibold has-checked:text-blue-800 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900">
              <input
                id="tabs-document-outline-team"
                type="radio"
                name="tabs-document-outline-section"
                value="team"
                className="sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              />
              Team
            </label>
          </div>
        </fieldset>
        <div>
          <section
            aria-label="Project overview"
            className="hidden group-has-[#tabs-document-outline-overview:checked]:block"
          >
            <p className="text-[9px] tracking-widest text-slate-500 uppercase">
              01 / The brief
            </p>
            <h3 className="mt-2 text-sm font-semibold">
              A clearer first visit
            </h3>
            <p className="mt-2 text-[11px] leading-5 text-slate-600">
              Help new customers find the right plan and understand what happens
              next.
            </p>
            <span className="mt-3 inline-flex rounded bg-emerald-50 px-2 py-1 text-[9px] font-medium text-emerald-800">
              Discovery complete
            </span>
          </section>
          <section
            aria-label="Project timeline"
            className="hidden group-has-[#tabs-document-outline-plan:checked]:block"
          >
            <p className="text-[9px] tracking-widest text-slate-500 uppercase">
              02 / The timeline
            </p>
            <h3 className="mt-2 text-sm font-semibold">Three focused weeks</h3>
            <ul
              role="list"
              className="mt-3 space-y-2 text-[11px] leading-5 text-slate-600"
            >
              <li>12 Oct · Content approved</li>
              <li>19 Oct · Build review</li>
              <li>26 Oct · Public launch</li>
            </ul>
          </section>
          <section
            aria-label="Project team"
            className="hidden group-has-[#tabs-document-outline-team:checked]:block"
          >
            <p className="text-[9px] tracking-widest text-slate-500 uppercase">
              03 / The people
            </p>
            <h3 className="mt-2 text-sm font-semibold">
              Small team, clear roles
            </h3>
            <ul
              role="list"
              className="mt-3 space-y-2 text-[11px] leading-5 text-slate-600"
            >
              <li>Mina · Product lead</li>
              <li>Elliot · Design</li>
              <li>Rowan · Engineering</li>
            </ul>
          </section>
        </div>
      </div>
      <p className="mt-5 border-t border-slate-200 pt-3 text-[9px] text-slate-500">
        Updated today by Mina Patel
      </p>
    </section>
  )
}
