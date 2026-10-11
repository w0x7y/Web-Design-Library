export default function HeroAnnouncementRail() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 grid gap-8 lg:grid-cols-[12rem_minmax(0,1fr)]">
        <aside className="border-b border-neutral-200 pb-6 lg:border-b-0 lg:border-r lg:pr-8 lg:pb-0">
          <p className="text-sm font-medium text-neutral-500">Announcement</p>
          <p className="text-sm text-neutral-600 mt-3">
            Short release or availability note.
          </p>
          <a
            href="#"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block"
          >
            Read update
          </a>
        </aside>
        <div>
          <p className="text-sm font-medium text-neutral-500">
            Main introduction
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl mt-4">
            Headline that names the main outcome
          </h1>
          <p className="text-lg text-pretty text-neutral-600 mt-6 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Primary action
            </a>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Secondary action
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-neutral-200 pt-6">
            <div>
              <dt className="text-sm text-neutral-500">Setup time</dt>
              <dd className="mt-1 text-base font-semibold">5 min</dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-500">Access</dt>
              <dd className="mt-1 text-base font-semibold">No commitment</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
