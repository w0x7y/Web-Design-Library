// Fonts: Space Grotesk
export default function TeamRescueDuty() {
  return (
    <section
      aria-labelledby="team-rescue-duty-title"
      className="bg-neutral-950 text-orange-100 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <header className="flex flex-wrap items-center justify-between gap-3 border-2 border-orange-600 bg-orange-600 p-4 text-neutral-950">
          <p className="text-[1.125rem] leading-[1.5] font-bold uppercase tracking-[0.08em]">CAIRNWATCH</p>
          <p className="text-[0.75rem] leading-[1.5] font-bold">Volunteer mountain rescue / Unit 08</p>
        </header>
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <header>
            <p
              className="text-[0.75rem] leading-[1.5] font-semibold uppercase tracking-[0.16em] text-orange-300"
            >
              Three roles. Every callout.
            </p>
            <p aria-hidden="true" className="mt-6 text-[7rem] leading-[0.85] font-bold tracking-[-0.08em] sm:text-[11rem]">08</p>
            <h2
              id="team-rescue-duty-title"
              className="mt-4 text-[2.25rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3rem] font-bold"
            >
              Know who has your back.
            </h2>
            <p
              className="mt-5 max-w-xl text-[1rem] leading-[1.75] text-neutral-300"
            >
              We train on the same ground we search. Meet the three leads who keep a callout moving.
            </p>
          </header>
          <div>
            <ol role="list" className="border-b-2 border-orange-600">
              <li className="grid grid-cols-[2.5rem_1fr] gap-4 border-t-2 border-orange-600 py-6">
                <span className="text-[0.875rem] leading-[1.5] text-orange-300">01</span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-[1.5rem] leading-[1.2] font-bold">Ava Nord</h3>
                    <p className="text-[0.75rem] leading-[1.5] uppercase tracking-[0.1em] text-orange-200">Incident lead</p>
                  </div>
                  <p
                    className="mt-3 max-w-lg text-[0.875rem] leading-[1.7] text-neutral-300"
                  >
                    Coordinates the search, stays on the radio until everyone is back.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-[2.5rem_1fr] gap-4 border-t-2 border-orange-600 py-6">
                <span className="text-[0.875rem] leading-[1.5] text-orange-300">02</span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-[1.5rem] leading-[1.2] font-bold">Ivo Petrov</h3>
                    <p className="text-[0.75rem] leading-[1.5] uppercase tracking-[0.1em] text-orange-200">Rope systems</p>
                  </div>
                  <p
                    className="mt-3 max-w-lg text-[0.875rem] leading-[1.7] text-neutral-300"
                  >
                    Builds the anchors and checks every connection before the descent.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-[2.5rem_1fr] gap-4 border-t-2 border-orange-600 py-6">
                <span className="text-[0.875rem] leading-[1.5] text-orange-300">03</span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-[1.5rem] leading-[1.2] font-bold">Leila Grant</h3>
                    <p className="text-[0.75rem] leading-[1.5] uppercase tracking-[0.1em] text-orange-200">Wilderness medic</p>
                  </div>
                  <p
                    className="mt-3 max-w-lg text-[0.875rem] leading-[1.7] text-neutral-300"
                  >
                    Carries the medical pack and plans the safest route out.
                  </p>
                </div>
              </li>
            </ol>
            <a
              href="#cairnwatch-training"
              className="mt-8 inline-flex items-center gap-4 border-2 border-orange-300 px-5 py-3 text-[0.875rem] leading-[1.5] font-bold uppercase hover:bg-orange-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              <span>Join the training night</span>
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
          </div>
        </div>
      </div>
    </section>
  )
}
