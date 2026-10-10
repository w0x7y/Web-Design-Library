export default function NavbarStudioDisclosure() {
  return (
    <header className="border-b border-zinc-200 bg-white text-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-6 md:flex-row md:items-start md:justify-between">
        <a
          href="#"
          className="w-fit pt-1 text-2xl font-semibold tracking-tight hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        >
          form/field
        </a>
        <nav
          aria-label="Studio"
          className="flex flex-wrap items-start gap-5 text-sm"
        >
          <div className="pt-3">
            <a
              href="#"
              className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Selected work
            </a>
          </div>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center gap-3 rounded-md py-3 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 [&::-webkit-details-marker]:hidden">
              Services
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="size-3.5 group-open:rotate-45"
              >
                <path d="M8 3v10M3 8h10" />
              </svg>
            </summary>
            <div className="max-w-64 rounded-lg border border-zinc-200 bg-zinc-50 p-4">
              <p className="mb-3 text-xs uppercase tracking-wider text-zinc-600">
                A small team, a full picture
              </p>
              <ul role="list" className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="block hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                  >
                    Brand strategy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                  >
                    Visual identity
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                  >
                    Digital experiences
                  </a>
                </li>
              </ul>
            </div>
          </details>
          <div className="pt-3">
            <a
              href="#"
              className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              About us
            </a>
          </div>
          <a
            href="#"
            className="inline-flex min-h-11 items-center gap-3 rounded-full bg-indigo-700 px-5 font-medium text-white hover:bg-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Start a project{' '}
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
        </nav>
      </div>
    </header>
  )
}
