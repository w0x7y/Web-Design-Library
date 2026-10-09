export default function CtaEventReservation() {
  return (
    <section className="bg-lime-100 text-emerald-950">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest">
            Make Room / Saturday workshop
          </p>
          <h2 className="mt-5 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            Make something
            <br />
            with your hands.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed">
            A morning of simple bookbinding, good coffee and friendly company.
            All materials included. No experience needed.
          </p>
          <p className="mt-6 text-sm font-semibold">
            12 places. One very patient teacher.
          </p>
        </div>
        <div className="rounded-2xl border-2 border-emerald-950 bg-white p-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="shrink-0 sm:border-r sm:border-dashed sm:border-emerald-950 sm:pr-6">
              <p className="text-xs font-bold uppercase">November</p>
              <p className="mt-1 text-5xl font-black tracking-tight">14</p>
              <p className="mt-1 text-xs">Saturday, 2026</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">The first-page workshop</h3>
              <p className="mt-3 text-sm">
                10:00–13:00
                <br />
                Make Room, 28 Porter Street
              </p>
              <p className="mt-3 text-sm font-semibold">
                $45 / materials &amp; coffee included
              </p>
            </div>
          </div>
          <a
            href="#"
            className="mt-6 flex min-h-12 items-center justify-center gap-3 rounded-full bg-orange-700 px-5 font-semibold text-white hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Save me a seat{' '}
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
