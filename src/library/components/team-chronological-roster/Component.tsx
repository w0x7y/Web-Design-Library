export default function TeamChronologicalRoster() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            How the team came together
          </h2>
          <p className="text-lg text-pretty text-neutral-600 mt-4 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
        </header>
        <ol role="list" className="mt-10 border-b border-neutral-200">
          <li className="grid grid-cols-[3rem_minmax(0,1fr)_2.5rem] items-start gap-4 border-t border-neutral-200 py-6 md:grid-cols-[6rem_minmax(0,1fr)_2.5rem]">
            <span className="font-mono text-sm text-neutral-500">2020</span>
            <div>
              <h3 className="text-lg font-semibold">Alex Rivera</h3>
              <p className="mt-1 text-sm text-neutral-500">Role or specialty</p>
              <p className="text-base text-neutral-600 mt-3">
                A short account of the contribution this person brought to the
                team.
              </p>
              <a
                href="#"
                aria-label="View Alex Rivera profile"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block text-sm"
              >
                View profile
              </a>
            </div>
            <span
              aria-hidden="true"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
            >
              AR
            </span>
          </li>
          <li className="grid grid-cols-[3rem_minmax(0,1fr)_2.5rem] items-start gap-4 border-t border-neutral-200 py-6 md:grid-cols-[6rem_minmax(0,1fr)_2.5rem]">
            <span className="font-mono text-sm text-neutral-500">2021</span>
            <div>
              <h3 className="text-lg font-semibold">Jamie Quinn</h3>
              <p className="mt-1 text-sm text-neutral-500">Role or specialty</p>
              <p className="text-base text-neutral-600 mt-3">
                A short account of the contribution this person brought to the
                team.
              </p>
              <a
                href="#"
                aria-label="View Jamie Quinn profile"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block text-sm"
              >
                View profile
              </a>
            </div>
            <span
              aria-hidden="true"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
            >
              JQ
            </span>
          </li>
          <li className="grid grid-cols-[3rem_minmax(0,1fr)_2.5rem] items-start gap-4 border-t border-neutral-200 py-6 md:grid-cols-[6rem_minmax(0,1fr)_2.5rem]">
            <span className="font-mono text-sm text-neutral-500">2023</span>
            <div>
              <h3 className="text-lg font-semibold">Morgan Chen</h3>
              <p className="mt-1 text-sm text-neutral-500">Role or specialty</p>
              <p className="text-base text-neutral-600 mt-3">
                A short account of the contribution this person brought to the
                team.
              </p>
              <a
                href="#"
                aria-label="View Morgan Chen profile"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block text-sm"
              >
                View profile
              </a>
            </div>
            <span
              aria-hidden="true"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
            >
              MC
            </span>
          </li>
          <li className="grid grid-cols-[3rem_minmax(0,1fr)_2.5rem] items-start gap-4 border-t border-neutral-200 py-6 md:grid-cols-[6rem_minmax(0,1fr)_2.5rem]">
            <span className="font-mono text-sm text-neutral-500">2024</span>
            <div>
              <h3 className="text-lg font-semibold">Taylor Brooks</h3>
              <p className="mt-1 text-sm text-neutral-500">Role or specialty</p>
              <p className="text-base text-neutral-600 mt-3">
                A short account of the contribution this person brought to the
                team.
              </p>
              <a
                href="#"
                aria-label="View Taylor Brooks profile"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block text-sm"
              >
                View profile
              </a>
            </div>
            <span
              aria-hidden="true"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
            >
              TB
            </span>
          </li>
        </ol>
      </div>
    </section>
  )
}
