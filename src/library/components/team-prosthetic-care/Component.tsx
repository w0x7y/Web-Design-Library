export default function TeamProstheticCare() {
  return (
    <section aria-labelledby="team-prosthetic-care-title" className="bg-white font-sans text-slate-950 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <header className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p
              className="text-[0.75rem] leading-[1.5] font-semibold uppercase tracking-[0.16em] text-blue-800"
            >
              Strideform / Prosthetic care
            </p>
            <h2
              id="team-prosthetic-care-title"
              className="mt-4 text-[2.25rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem] font-semibold"
            >
              One team, through every step.
            </h2>
          </div>
          <p
            className="mt-5 max-w-xl text-[1rem] leading-[1.75] text-slate-600"
          >
            You keep the same care team from the first conversation to your next fitting. Here is who you will meet.
          </p>
        </header>
        <ol role="list" className="mt-10 border-b border-blue-200">
          <li className="grid gap-5 border-t border-blue-200 py-8 md:grid-cols-[3rem_1fr_1.2fr] md:gap-8">
            <span
              className="grid size-12 place-items-center rounded-full border border-blue-800 text-[1.125rem] leading-[1] font-semibold text-blue-900"
            >
              1
            </span>
            <div>
              <p className="text-[0.75rem] leading-[1.5] font-semibold uppercase tracking-[0.12em] text-blue-800">Listen &amp; measure</p>
              <h3 className="mt-3 text-[1.5rem] leading-[1.25] font-semibold">Dr. Farah Ali</h3>
              <p className="mt-1 text-[0.875rem] leading-[1.5] text-slate-600">Rehabilitation physician</p>
            </div>
            <p
              className="max-w-lg text-[0.9375rem] leading-[1.8] text-slate-600"
            >
              Starts with your daily routine, then agrees the goals and prescription with you.
            </p>
          </li>
          <li className="grid gap-5 border-t border-blue-200 py-8 md:grid-cols-[3rem_1fr_1.2fr] md:gap-8">
            <span
              className="grid size-12 place-items-center rounded-full border border-blue-800 text-[1.125rem] leading-[1] font-semibold text-blue-900"
            >
              2
            </span>
            <div>
              <p className="text-[0.75rem] leading-[1.5] font-semibold uppercase tracking-[0.12em] text-blue-800">Shape &amp; fit</p>
              <h3 className="mt-3 text-[1.5rem] leading-[1.25] font-semibold">Ben Hollis</h3>
              <p className="mt-1 text-[0.875rem] leading-[1.5] text-slate-600">Clinical prosthetist</p>
            </div>
            <p
              className="max-w-lg text-[0.9375rem] leading-[1.8] text-slate-600"
            >
              Builds the socket, tests the alignment and adjusts the fit until it feels right.
            </p>
          </li>
          <li className="grid gap-5 border-t border-blue-200 py-8 md:grid-cols-[3rem_1fr_1.2fr] md:gap-8">
            <span
              className="grid size-12 place-items-center rounded-full border border-blue-800 text-[1.125rem] leading-[1] font-semibold text-blue-900"
            >
              3
            </span>
            <div>
              <p className="text-[0.75rem] leading-[1.5] font-semibold uppercase tracking-[0.12em] text-blue-800">Move &amp; return</p>
              <h3 className="mt-3 text-[1.5rem] leading-[1.25] font-semibold">Rosa Navarro</h3>
              <p className="mt-1 text-[0.875rem] leading-[1.5] text-slate-600">Movement therapist</p>
            </div>
            <p
              className="max-w-lg text-[0.9375rem] leading-[1.8] text-slate-600"
            >
              Practises the steps that matter to you, from stairs at home to a day at work.
            </p>
          </li>
        </ol>
        <footer className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[0.875rem] leading-[1.5] text-slate-600">A named contact, a written plan, time for questions.</p>
          <a
            href="mailto:care@example.com"
            className="inline-flex items-center gap-3 rounded-lg bg-blue-900 px-5 py-3 text-[0.875rem] leading-[1.5] font-semibold text-white hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900"
          >
            <span>Meet your care team</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 shrink-0"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </footer>
      </div>
    </section>
  )
}
