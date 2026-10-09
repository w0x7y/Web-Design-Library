export default function TeamMakersCooperative() {
  return (
    <section
      aria-labelledby="team-makers-cooperative-title"
      className="bg-orange-50 text-stone-900"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
        <header className="max-w-xl">
          <span className="inline-block rounded-full border border-stone-900 px-3 py-1 text-xs font-medium">
            The people behind the things
          </span>
          <h2
            id="team-makers-cooperative-title"
            className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
          >
            Made with hands.
            <br />
            And a little heart.
          </h2>
          <p className="mt-4 text-sm leading-7 text-stone-700">
            Three friends sharing a workshop, a kiln and a belief that everyday
            objects deserve a little care.
          </p>
        </header>
        <ul role="list" className="mt-10 grid gap-5 md:grid-cols-3">
          <li className="rounded-[1.5rem] border border-stone-900 bg-rose-200 p-6">
            <span
              aria-hidden="true"
              className="flex size-20 items-center justify-center rounded-full border border-stone-900 bg-rose-50 font-serif text-4xl italic"
            >
              a.
            </span>
            <h3 className="mt-6 text-2xl font-bold">Alice Bell</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider">
              Clay &amp; ceramics
            </p>
            <p className="mt-4 text-sm leading-6">
              The mugs you reach for first. The glaze experiments we keep
              anyway.
            </p>
            <a
              href="#alice-work"
              className="mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold underline underline-offset-4 hover:text-rose-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
            >
              Alice’s work{' '}
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
          </li>
          <li className="rounded-[1.5rem] border border-stone-900 bg-sky-200 p-6">
            <span
              aria-hidden="true"
              className="flex size-20 items-center justify-center rounded-full border border-stone-900 bg-sky-50 font-serif text-4xl italic"
            >
              o.
            </span>
            <h3 className="mt-6 text-2xl font-bold">Omar Aziz</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider">
              Wood &amp; furniture
            </p>
            <p className="mt-4 text-sm leading-6">
              Slow-built shelves, good joints and room for the grain to tell its
              story.
            </p>
            <a
              href="#omar-work"
              className="mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold underline underline-offset-4 hover:text-sky-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
            >
              Omar’s work{' '}
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
          </li>
          <li className="rounded-[1.5rem] border border-stone-900 bg-lime-200 p-6">
            <span
              aria-hidden="true"
              className="flex size-20 items-center justify-center rounded-full border border-stone-900 bg-lime-50 font-serif text-4xl italic"
            >
              b.
            </span>
            <h3 className="mt-6 text-2xl font-bold">Bea Cooper</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider">
              Textiles &amp; print
            </p>
            <p className="mt-4 text-sm leading-6">
              Useful fabric, cheerful color and patterns that survive the
              washing machine.
            </p>
            <a
              href="#bea-work"
              className="mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold underline underline-offset-4 hover:text-lime-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
            >
              Bea’s work{' '}
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
          </li>
        </ul>
        <p className="mt-8 text-sm text-stone-700">
          Curious about making something?{' '}
          <a
            href="#open-workshop"
            className="rounded-sm font-semibold text-stone-900 underline underline-offset-4 hover:text-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
          >
            Visit our open workshop
          </a>
        </p>
      </div>
    </section>
  )
}
