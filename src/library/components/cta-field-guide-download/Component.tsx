export default function CtaFieldGuideDownload() {
  return (
    <section className="bg-slate-50 text-slate-950">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 md:grid-cols-[14rem_1fr] md:gap-16">
        <div
          aria-hidden="true"
          className="mx-auto flex aspect-[3/4] w-56 flex-col justify-between bg-blue-700 p-6 text-white shadow-lg"
        >
          <p className="text-xs uppercase tracking-widest">Compass research</p>
          <p className="text-3xl leading-tight font-semibold tracking-tight">
            The small
            <br />
            team's guide
            <br />
            to less
            <br />
            busywork.
          </p>
          <div>
            <div className="mb-5 h-px bg-blue-300" />
            <p className="text-xs">
              Field guide 03
              <br />
              October 2026
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            A practical read / 24 pages
          </p>
          <h2 className="mt-4 text-4xl leading-tight font-semibold tracking-tight">
            Make room for
            <br />
            the work that matters.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-slate-600">
            A field guide to fewer status meetings, clearer handoffs and a
            weekly rhythm your team can keep.
          </p>
          <ul
            role="list"
            className="mt-6 flex flex-wrap gap-2 text-xs text-slate-600"
          >
            <li className="rounded-full border border-slate-300 px-3 py-2">
              Meeting audit
            </li>
            <li className="rounded-full border border-slate-300 px-3 py-2">
              Handoff checklist
            </li>
            <li className="rounded-full border border-slate-300 px-3 py-2">
              Weekly planning template
            </li>
          </ul>
          <a
            href="#"
            className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-lg bg-blue-700 px-5 text-sm font-semibold text-white hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Get the free field guide{' '}
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
          <p className="mt-3 text-xs text-slate-500">
            PDF format. No email address required.
          </p>
        </div>
      </div>
    </section>
  )
}
