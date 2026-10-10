export default function HeroCenteredMedia() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <a href="#" className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Eyebrow or short announcement</a>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">Headline that names the main outcome</h1>
          <p className="mt-6 text-lg text-pretty text-neutral-600">Supporting copy that describes the audience and the main benefit in one or two sentences.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Primary action</a>
            <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Secondary action</a>
          </div>
        </div>
        <div role="img" aria-label="Image placeholder: product overview screenshot" className="mt-16 flex aspect-[4/3] items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 text-neutral-400 sm:aspect-video">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-500">A short label introducing supporting organizations</p>
          <ul role="list" aria-label="Organization logo placeholders" className="mx-auto mt-6 grid max-w-3xl grid-cols-6 gap-6 sm:grid-cols-5">
            <li className="col-span-2 flex items-center justify-center gap-2 text-neutral-600 sm:col-span-1">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                <path d="m12 3 9 9-9 9-9-9 9-9Z" />
                <path d="m8 12 4-4 4 4-4 4-4-4Z" />
              </svg>
              <span className="font-semibold">Logo</span>
            </li>
            <li className="col-span-2 flex items-center justify-center gap-2 text-neutral-600 sm:col-span-1">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                <path d="m12 3 9 9-9 9-9-9 9-9Z" />
                <path d="m8 12 4-4 4 4-4 4-4-4Z" />
              </svg>
              <span className="font-semibold">Logo</span>
            </li>
            <li className="col-span-2 flex items-center justify-center gap-2 text-neutral-600 sm:col-span-1">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                <path d="m12 3 9 9-9 9-9-9 9-9Z" />
                <path d="m8 12 4-4 4 4-4 4-4-4Z" />
              </svg>
              <span className="font-semibold">Logo</span>
            </li>
            <li className="col-span-2 flex items-center justify-center gap-2 text-neutral-600 sm:col-span-1 col-start-2 sm:col-start-auto">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                <path d="m12 3 9 9-9 9-9-9 9-9Z" />
                <path d="m8 12 4-4 4 4-4 4-4-4Z" />
              </svg>
              <span className="font-semibold">Logo</span>
            </li>
            <li className="col-span-2 flex items-center justify-center gap-2 text-neutral-600 sm:col-span-1 col-start-4 sm:col-start-auto">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                <path d="m12 3 9 9-9 9-9-9 9-9Z" />
                <path d="m8 12 4-4 4 4-4 4-4-4Z" />
              </svg>
              <span className="font-semibold">Logo</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
