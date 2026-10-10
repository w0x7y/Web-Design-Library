export default function FaqQaGrid() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for common questions</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for common questions</h2>
          <p className="mt-4 text-lg text-pretty text-neutral-600">A short introduction that helps readers find the answer they need.</p>
        </div>
        <ul role="list" className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <li className="border-t border-neutral-200 pt-6">
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M12 3v18M3 12h18" />
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold">Question about getting started</h3>
            <p className="mt-3 text-base text-pretty text-neutral-600">Describe the first step and what readers need to prepare. Explain how they know they are ready to begin.</p>
          </li>
          <li className="border-t border-neutral-200 pt-6">
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M4 5h16v14H4zM8 9h8M8 13h5" />
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold">Question about what is included</h3>
            <p className="mt-3 text-base text-pretty text-neutral-600">Name the main inclusions and the limits that affect the decision. Keep the explanation focused on what readers receive.</p>
          </li>
          <li className="border-t border-neutral-200 pt-6">
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M4 7h7v10H4zM15 7h5v10h-5M11 12h4" />
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold">Question about choosing an option</h3>
            <p className="mt-3 text-base text-pretty text-neutral-600">Explain the difference between the available options. Give readers a useful criterion for making their choice.</p>
          </li>
          <li className="border-t border-neutral-200 pt-6">
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M12 3 3 7v6c0 4 9 8 9 8s9-4 9-8V7zM8 12l3 3 5-6" />
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold">Question about the expected timing</h3>
            <p className="mt-3 text-base text-pretty text-neutral-600">Describe how long the process usually takes. Name the point at which readers can expect the next update.</p>
          </li>
          <li className="border-t border-neutral-200 pt-6">
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M4 7h16M4 17h16M8 4v6M16 14v6" />
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold">Question about managing access</h3>
            <p className="mt-3 text-base text-pretty text-neutral-600">Explain who can access the result and where permissions are managed. Include the detail readers need before inviting someone.</p>
          </li>
          <li className="border-t border-neutral-200 pt-6">
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M5 12l4 4L19 6" />
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold">Question about finding more help</h3>
            <p className="mt-3 text-base text-pretty text-neutral-600">Point readers to the next source of help. Say which questions belong there and what information to include.</p>
          </li>
        </ul>
        <div className="mt-12 flex flex-col gap-4 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-pretty text-neutral-600">A closing sentence that directs readers to more help.</p>
          <div className="shrink-0">
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Contact support</a>
          </div>
        </div>
      </div>
    </section>
  )
}
