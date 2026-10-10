export default function FeaturesIconGrid() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the capabilities</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that names the key benefits</h2>
          <p className="mt-4 text-lg text-pretty text-neutral-600">A short introduction that connects these capabilities to the outcome readers need.</p>
        </div>
        <ul role="list" className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M12 3v18M3 12h18" />
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold">Title for the main benefit</h3>
            <p className="mt-2 text-base text-pretty text-neutral-600">Explain the core benefit in one sentence. Add a concrete detail that helps readers understand the result.</p>
          </li>
          <li>
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M4 5h16v14H4zM8 9h8M8 13h5" />
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold">Title for a useful capability</h3>
            <p className="mt-2 text-base text-pretty text-neutral-600">Describe the capability that supports the main outcome. Say what readers can do with it.</p>
          </li>
          <li>
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M4 7h7v10H4zM15 7h5v10h-5M11 12h4" />
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold">Title for a clearer workflow</h3>
            <p className="mt-2 text-base text-pretty text-neutral-600">Name the step this feature makes easier. Explain how it fits into the wider process.</p>
          </li>
          <li>
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M12 3 3 7v6c0 4 9 8 9 8s9-4 9-8V7zM8 12l3 3 5-6" />
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold">Title for an important detail</h3>
            <p className="mt-2 text-base text-pretty text-neutral-600">Point out a detail readers might otherwise overlook. Connect it to a practical reason to choose this option.</p>
          </li>
          <li>
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M4 7h16M4 17h16M8 4v6M16 14v6" />
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold">Title for a flexible option</h3>
            <p className="mt-2 text-base text-pretty text-neutral-600">Describe the choice this feature gives readers. Note where that flexibility is most useful.</p>
          </li>
          <li>
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M5 12l4 4L19 6" />
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold">Title for a dependable result</h3>
            <p className="mt-2 text-base text-pretty text-neutral-600">Explain the assurance that supports the decision. Give a specific detail readers can check.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
