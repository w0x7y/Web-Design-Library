export default function FeaturesMediaList() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-lg">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-neutral-500">Eyebrow for the capabilities</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that names the key benefits</h2>
            <p className="mt-4 text-lg text-pretty text-neutral-600">A short introduction that connects these capabilities to the outcome readers need.</p>
          </div>
          <ul role="list" className="mt-8 grid gap-6">
            <li className="flex items-start gap-4">
              <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900 shrink-0">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                  <path d="M12 3v18M3 12h18" />
                </svg>
              </span>
              <div>
                <h3 className="text-base font-semibold">Title for the main benefit</h3>
                <p className="mt-1 text-base text-pretty text-neutral-600">Explain the core benefit in one sentence.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900 shrink-0">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                  <path d="M4 5h16v14H4zM8 9h8M8 13h5" />
                </svg>
              </span>
              <div>
                <h3 className="text-base font-semibold">Title for a useful capability</h3>
                <p className="mt-1 text-base text-pretty text-neutral-600">Describe the capability that supports the main outcome.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900 shrink-0">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                  <path d="M4 7h7v10H4zM15 7h5v10h-5M11 12h4" />
                </svg>
              </span>
              <div>
                <h3 className="text-base font-semibold">Title for a clearer workflow</h3>
                <p className="mt-1 text-base text-pretty text-neutral-600">Name the step this feature makes easier.</p>
              </div>
            </li>
          </ul>
          <div className="mt-8">
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Explore the capabilities</a>
          </div>
        </div>
        <div role="img" aria-label="Image placeholder: product screenshot showing the listed capabilities" className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </div>
      </div>
    </section>
  )
}
