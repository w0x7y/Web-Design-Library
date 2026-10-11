export default function TeamPrincipleProfileCards() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            People and their working principles
          </h2>
          <p className="text-lg text-pretty text-neutral-600 mt-4 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
        </header>
        <ul role="list" className="mt-10 grid gap-6 md:grid-cols-3">
          <li className="flex flex-col rounded-lg border border-neutral-200 p-6">
            <p className="text-sm font-medium text-neutral-500">
              Working principle
            </p>
            <p className="mt-4 text-lg text-neutral-600">
              A short statement about how this person approaches useful work.
            </p>
            <footer className="mt-8 border-t border-neutral-200 pt-5">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  AR
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold">Alex Rivera</h3>
                  <p className="text-sm text-neutral-500">Role or specialty</p>
                </div>
              </div>
              <a
                href="#"
                aria-label="View Alex Rivera profile"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block text-sm"
              >
                View profile
              </a>
            </footer>
          </li>
          <li className="flex flex-col rounded-lg border border-neutral-200 p-6">
            <p className="text-sm font-medium text-neutral-500">
              Team contribution
            </p>
            <p className="mt-4 text-lg text-neutral-600">
              A short statement about the contribution this person brings to a
              team.
            </p>
            <footer className="mt-8 border-t border-neutral-200 pt-5">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  JQ
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold">Jamie Quinn</h3>
                  <p className="text-sm text-neutral-500">Role or specialty</p>
                </div>
              </div>
              <a
                href="#"
                aria-label="View Jamie Quinn profile"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block text-sm"
              >
                View profile
              </a>
            </footer>
          </li>
          <li className="flex flex-col rounded-lg border border-neutral-200 p-6">
            <p className="text-sm font-medium text-neutral-500">
              Personal focus
            </p>
            <p className="mt-4 text-lg text-neutral-600">
              A short statement about the questions this person likes to solve.
            </p>
            <footer className="mt-8 border-t border-neutral-200 pt-5">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  MC
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold">Morgan Chen</h3>
                  <p className="text-sm text-neutral-500">Role or specialty</p>
                </div>
              </div>
              <a
                href="#"
                aria-label="View Morgan Chen profile"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block text-sm"
              >
                View profile
              </a>
            </footer>
          </li>
        </ul>
      </div>
    </section>
  )
}
