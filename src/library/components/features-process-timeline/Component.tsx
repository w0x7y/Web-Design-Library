export default function FeaturesProcessTimeline() {
  return (
    <section className="bg-white text-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
          The Clearline process
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          A clear path from brief to launch.
        </h2>
        <ol role="list" className="mt-12 grid gap-10 md:grid-cols-3">
          <li className="border-t border-slate-200 pt-6">
            <span className="flex size-12 items-center justify-center rounded-full bg-blue-700 text-sm font-semibold text-white">
              01
            </span>
            <h3 className="mt-6 text-xl font-semibold">Make the plan</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              We agree on the audience, the outcome and what needs to happen
              first. You leave with a brief everyone can use.
            </p>
            <p className="mt-5 text-xs font-medium text-blue-700">
              Week 1 / Discovery
            </p>
          </li>
          <li className="border-t border-slate-200 pt-6">
            <span className="flex size-12 items-center justify-center rounded-full bg-blue-700 text-sm font-semibold text-white">
              02
            </span>
            <h3 className="mt-6 text-xl font-semibold">Build it together</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              You see real work every Friday, with space to ask questions and
              adjust course before the small things grow.
            </p>
            <p className="mt-5 text-xs font-medium text-blue-700">
              Weeks 2–4 / Design &amp; build
            </p>
          </li>
          <li className="border-t border-slate-200 pt-6">
            <span className="flex size-12 items-center justify-center rounded-full bg-blue-700 text-sm font-semibold text-white">
              03
            </span>
            <h3 className="mt-6 text-xl font-semibold">
              Launch with confidence
            </h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              We test the details, train your team and stay close through the
              first month. The handover is part of the work.
            </p>
            <p className="mt-5 text-xs font-medium text-blue-700">
              Week 5 / Launch &amp; support
            </p>
          </li>
        </ol>
        <div className="mt-12 flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">
            <strong className="text-slate-950">
              One team, start to finish.
            </strong>{' '}
            Your project lead stays with you throughout.
          </p>
          <a
            href="#"
            className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Meet the team{' '}
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
        </div>
      </div>
    </section>
  )
}
