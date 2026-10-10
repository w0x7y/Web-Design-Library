export default function FeaturesBentoGrid() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that names the key benefits</h2>
            <p className="mt-4 text-lg text-pretty text-neutral-600">A short introduction that connects these capabilities to the outcome readers need.</p>
          </div>
          <div className="shrink-0">
            <a href="#" className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">View the details</a>
          </div>
        </div>
        <ul role="list" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <li className="flex flex-col rounded-lg border border-neutral-200 bg-white sm:col-span-2 lg:col-span-4">
            <div className="p-6">
              <h3 className="text-lg font-semibold">Title for the leading capability</h3>
              <p className="mt-2 text-sm text-pretty text-neutral-600">Explain the capability that deserves the most attention. Connect the visual below to a practical benefit.</p>
            </div>
            <div role="img" aria-label="Image placeholder: leading capability screenshot" className="flex aspect-video items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 mt-auto rounded-t-none">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
          </li>
          <li className="flex flex-col justify-center rounded-lg border border-neutral-200 bg-white p-6 lg:col-span-2">
            <p className="text-5xl font-semibold tracking-tight">1,284</p>
            <h3 className="mt-4 text-base font-semibold">Label for the key metric</h3>
            <p className="mt-3 text-sm text-pretty text-neutral-600">Explain what this figure measures and why it helps readers assess the result.</p>
          </li>
          <li className="rounded-lg border border-neutral-200 bg-white p-6 lg:col-span-2">
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M4 5h16v14H4zM8 9h8M8 13h5" />
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold">Title for a useful capability</h3>
            <p className="mt-2 text-sm text-pretty text-neutral-600">Describe the capability that supports the main outcome. Say what readers can do with it.</p>
          </li>
          <li className="rounded-lg border border-neutral-200 bg-white p-6 lg:col-span-2">
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M4 7h7v10H4zM15 7h5v10h-5M11 12h4" />
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold">Title for a clearer workflow</h3>
            <p className="mt-2 text-sm text-pretty text-neutral-600">Name the step this feature makes easier. Explain how it fits into the wider process.</p>
          </li>
          <li className="rounded-lg border border-neutral-200 bg-white p-6 lg:col-span-2">
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M4 7h16M4 17h16M8 4v6M16 14v6" />
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold">Title for a flexible option</h3>
            <p className="mt-2 text-sm text-pretty text-neutral-600">Describe the choice this feature gives readers. Note where that flexibility is most useful.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
