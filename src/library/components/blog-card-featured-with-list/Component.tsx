export default function BlogCardFeaturedWithList() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for the latest articles</h2>
          <a href="#" className="shrink-0 self-start text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 sm:self-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">View all posts</a>
        </header>
        <div className="mt-8 grid gap-12 lg:grid-cols-[7fr_5fr]">
          <article className="group relative min-w-0">
            <div role="img" aria-label="Image placeholder: cover photograph or illustration for the featured article" className="flex aspect-video items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
            </div>
            <div className="mt-4 flex items-center gap-3 text-xs text-neutral-500"><span>Category label</span><time dateTime="2026-10-10">Oct 10</time></div>
            <h3 className="mt-2 text-2xl font-semibold"><a href="#" className="after:absolute after:inset-0 group-hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Featured headline that names the main article topic</a></h3>
            <p className="mt-3 max-w-lg text-sm text-neutral-600">An excerpt that explains the main question, gives readers a reason to continue, and introduces the perspective they will find.</p>
            <footer className="mt-5 flex items-center gap-3">
              <span aria-hidden="true" className="flex size-8 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
              <span className="text-sm font-medium">Alex Rivera</span>
            </footer>
          </article>
          <ul role="list" className="border-t border-neutral-200">
            <li className="group relative flex items-start gap-4 border-b border-neutral-200 py-6">
              <div className="min-w-0 flex-1">
                <p className="text-xs text-neutral-500">Topic label</p>
                <h3 className="mt-2 text-base font-semibold"><a href="#" className="after:absolute after:inset-0 group-hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Headline for a related article</a></h3>
                <p className="mt-3 text-xs text-neutral-500">6 min read</p>
              </div>
              <div role="img" aria-label="Image placeholder: related article thumbnail" className="flex aspect-[4/3] size-20 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
              </div>
            </li>
            <li className="group relative flex items-start gap-4 border-b border-neutral-200 py-6">
              <div className="min-w-0 flex-1">
                <p className="text-xs text-neutral-500">Series label</p>
                <h3 className="mt-2 text-base font-semibold"><a href="#" className="after:absolute after:inset-0 group-hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Title that introduces a useful perspective</a></h3>
                <p className="mt-3 text-xs text-neutral-500">4 min read</p>
              </div>
              <div role="img" aria-label="Image placeholder: supporting article thumbnail" className="flex aspect-[4/3] size-20 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
              </div>
            </li>
            <li className="group relative flex items-start gap-4 border-b border-neutral-200 py-6">
              <div className="min-w-0 flex-1">
                <p className="text-xs text-neutral-500">Category label</p>
                <h3 className="mt-2 text-base font-semibold"><a href="#" className="after:absolute after:inset-0 group-hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Headline that names a practical takeaway</a></h3>
                <p className="mt-3 text-xs text-neutral-500">8 min read</p>
              </div>
              <div role="img" aria-label="Image placeholder: practical guide thumbnail" className="flex aspect-[4/3] size-20 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
