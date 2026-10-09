export default function CtaVolunteerCommunity() {
  return (
    <section className="bg-emerald-50 text-emerald-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
          The neighborhood grows together
        </p>
        <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
          A few hours of your time.
          <br />A better place for all of us.
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-emerald-900">
          Common Ground is cared for by people who live nearby. You do not need
          a green thumb, just a little time and a willingness to help.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="border-t border-emerald-200 pt-5">
            <p className="font-mono text-xs text-emerald-700">01 / OUTSIDE</p>
            <h3 className="mt-3 text-xl font-medium">Saturday garden crew</h3>
            <p className="mt-2 text-sm leading-relaxed text-emerald-900">
              Plant, weed and share a cup of tea. Every Saturday, 10am–12pm.
            </p>
          </div>
          <div className="border-t border-emerald-200 pt-5">
            <p className="font-mono text-xs text-emerald-700">
              02 / AROUND THE TABLE
            </p>
            <h3 className="mt-3 text-xl font-medium">Community kitchen</h3>
            <p className="mt-2 text-sm leading-relaxed text-emerald-900">
              Help prepare a warm lunch with produce from the garden.
            </p>
          </div>
          <div className="border-t border-emerald-200 pt-5">
            <p className="font-mono text-xs text-emerald-700">
              03 / BEHIND THE SCENES
            </p>
            <h3 className="mt-3 text-xl font-medium">A skill you can share</h3>
            <p className="mt-2 text-sm leading-relaxed text-emerald-900">
              Design, repairs, organizing or bookkeeping. Small contributions
              count.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-5 border-t border-emerald-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#"
            className="inline-flex min-h-12 w-fit items-center gap-3 rounded-full bg-emerald-950 px-6 text-sm font-medium text-white hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Find my place{' '}
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
          <p className="text-sm text-emerald-900">
            Questions?{' '}
            <a
              href="#"
              className="underline underline-offset-4 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Talk to Jo, our volunteer coordinator
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
