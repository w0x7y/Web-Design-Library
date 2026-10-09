export default function TeamRemoteDirectory() {
  return (
    <section
      aria-labelledby="team-remote-directory-title"
      className="bg-zinc-950 text-zinc-100"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
        <header className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-lime-300">
              Relay / Team directory
            </p>
            <h2
              id="team-remote-directory-title"
              className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl"
            >
              Good work travels.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-zinc-400">
            Four cities. One team. We leave clear notes and make room for life
            outside the screen.
          </p>
        </header>
        <ul
          role="list"
          className="mt-12 grid gap-px border border-zinc-700 bg-zinc-700 sm:grid-cols-2"
        >
          <li className="bg-zinc-950 p-6">
            <div className="flex items-center justify-between">
              <span
                aria-hidden="true"
                className="flex size-12 items-center justify-center rounded-full bg-zinc-800 text-lg"
              >
                SK
              </span>
              <span className="font-mono text-xs text-zinc-400">UTC −07</span>
            </div>
            <h3 className="mt-5 text-xl font-medium">Sasha Kim</h3>
            <p className="mt-1 text-sm text-zinc-400">
              Product engineering · Vancouver
            </p>
            <a
              href="mailto:sasha@example.com"
              className="mt-5 inline-flex items-center gap-2 rounded-sm text-xs text-lime-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            >
              Contact Sasha{' '}
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
          <li className="bg-zinc-950 p-6">
            <div className="flex items-center justify-between">
              <span
                aria-hidden="true"
                className="flex size-12 items-center justify-center rounded-full bg-zinc-800 text-lg"
              >
                DL
              </span>
              <span className="font-mono text-xs text-zinc-400">UTC +01</span>
            </div>
            <h3 className="mt-5 text-xl font-medium">Dara Lewis</h3>
            <p className="mt-1 text-sm text-zinc-400">
              Customer research · London
            </p>
            <a
              href="mailto:dara@example.com"
              className="mt-5 inline-flex items-center gap-2 rounded-sm text-xs text-lime-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            >
              Contact Dara{' '}
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
          <li className="bg-zinc-950 p-6">
            <div className="flex items-center justify-between">
              <span
                aria-hidden="true"
                className="flex size-12 items-center justify-center rounded-full bg-zinc-800 text-lg"
              >
                MR
              </span>
              <span className="font-mono text-xs text-zinc-400">UTC +02</span>
            </div>
            <h3 className="mt-5 text-xl font-medium">Matteo Rossi</h3>
            <p className="mt-1 text-sm text-zinc-400">Design systems · Milan</p>
            <a
              href="mailto:matteo@example.com"
              className="mt-5 inline-flex items-center gap-2 rounded-sm text-xs text-lime-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            >
              Contact Matteo{' '}
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
          <li className="bg-zinc-950 p-6">
            <div className="flex items-center justify-between">
              <span
                aria-hidden="true"
                className="flex size-12 items-center justify-center rounded-full bg-zinc-800 text-lg"
              >
                PW
              </span>
              <span className="font-mono text-xs text-zinc-400">UTC +08</span>
            </div>
            <h3 className="mt-5 text-xl font-medium">Priya Wong</h3>
            <p className="mt-1 text-sm text-zinc-400">Operations · Singapore</p>
            <a
              href="mailto:priya@example.com"
              className="mt-5 inline-flex items-center gap-2 rounded-sm text-xs text-lime-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            >
              Contact Priya{' '}
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
        <p className="mt-5 font-mono text-[11px] text-zinc-400">
          Time zones shown for October 2026. Replies can wait until morning.
        </p>
      </div>
    </section>
  )
}
