export default function FaqGroupedTopics() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for common questions</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for common questions</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-neutral-200 bg-white p-6">
            <p className="text-sm font-medium text-neutral-500">Basics</p>
            <h3 className="mt-2 text-lg font-semibold">Getting started</h3>
            <div className="mt-6 border-t border-neutral-200">
              <details className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  Question about getting started
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="pb-5 text-sm text-pretty text-neutral-600">Describe the first step and what readers need to prepare. Explain how they know they are ready to begin.</p>
              </details>
              <details className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  Question about what is included
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="pb-5 text-sm text-pretty text-neutral-600">Name the main inclusions and the limits that affect the decision. Keep the explanation focused on what readers receive.</p>
              </details>
              <details className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  Question about choosing an option
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="pb-5 text-sm text-pretty text-neutral-600">Explain the difference between the available options. Give readers a useful criterion for making their choice.</p>
              </details>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-white p-6">
            <p className="text-sm font-medium text-neutral-500">Choices</p>
            <h3 className="mt-2 text-lg font-semibold">Managing your choices</h3>
            <div className="mt-6 border-t border-neutral-200">
              <details className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  Question about changing settings
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="pb-5 text-sm text-pretty text-neutral-600">Describe where readers can review their current settings. Explain when a change takes effect and how to confirm it.</p>
              </details>
              <details className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  Question about managing access
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="pb-5 text-sm text-pretty text-neutral-600">Explain who can access the result and where permissions are managed. Include the detail readers need before inviting someone.</p>
              </details>
              <details className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  Question about finding more help
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="pb-5 text-sm text-pretty text-neutral-600">Point readers to the next source of help. Say which questions belong there and what information to include.</p>
              </details>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-neutral-600">A short contact note for questions beyond these topics. <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Contact support</a></p>
      </div>
    </section>
  )
}
