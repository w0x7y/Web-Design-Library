export default function TeamStudioRoster() {
  return (
    <section
      aria-labelledby="team-studio-roster-title"
      className="bg-[#f7f4ec] text-stone-900"
    >
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1fr_1.3fr] md:gap-16 md:py-24">
        <header>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-600">
            Common Practice / People
          </p>
          <h2
            id="team-studio-roster-title"
            className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl"
          >
            A small studio.
            <br />A shared curiosity.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-stone-600">
            We work across identity, digital products and the places where they
            meet. Every project starts around the same table.
          </p>
        </header>
        <ul role="list" className="border-t border-stone-900">
          <li className="grid grid-cols-[2rem_1fr_auto] items-start gap-3 border-b border-stone-300 py-6">
            <span
              aria-hidden="true"
              className="pt-1 font-mono text-xs text-stone-600"
            >
              01
            </span>
            <div>
              <h3 className="font-serif text-2xl">Marta Silva</h3>
              <p className="mt-1 text-sm text-stone-600">
                Strategy &amp; words
              </p>
              <p className="mt-3 text-xs text-stone-600">Lisbon, Portugal</p>
            </div>
            <a
              href="mailto:marta@example.com"
              aria-label="Email Marta Silva"
              className="inline-flex size-9 items-center justify-center rounded-sm text-xl hover:text-stone-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="size-3.5"
              >
                <path d="M5 15 15 5M5 5h10v10" />
              </svg>
            </a>
          </li>
          <li className="grid grid-cols-[2rem_1fr_auto] items-start gap-3 border-b border-stone-300 py-6">
            <span
              aria-hidden="true"
              className="pt-1 font-mono text-xs text-stone-600"
            >
              02
            </span>
            <div>
              <h3 className="font-serif text-2xl">Sam Okafor</h3>
              <p className="mt-1 text-sm text-stone-600">
                Identity &amp; art direction
              </p>
              <p className="mt-3 text-xs text-stone-600">
                London, United Kingdom
              </p>
            </div>
            <a
              href="mailto:sam@example.com"
              aria-label="Email Sam Okafor"
              className="inline-flex size-9 items-center justify-center rounded-sm text-xl hover:text-stone-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="size-3.5"
              >
                <path d="M5 15 15 5M5 5h10v10" />
              </svg>
            </a>
          </li>
          <li className="grid grid-cols-[2rem_1fr_auto] items-start gap-3 border-b border-stone-300 py-6">
            <span
              aria-hidden="true"
              className="pt-1 font-mono text-xs text-stone-600"
            >
              03
            </span>
            <div>
              <h3 className="font-serif text-2xl">Hana Mori</h3>
              <p className="mt-1 text-sm text-stone-600">
                Digital design &amp; development
              </p>
              <p className="mt-3 text-xs text-stone-600">Tokyo, Japan</p>
            </div>
            <a
              href="mailto:hana@example.com"
              aria-label="Email Hana Mori"
              className="inline-flex size-9 items-center justify-center rounded-sm text-xl hover:text-stone-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="size-3.5"
              >
                <path d="M5 15 15 5M5 5h10v10" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
