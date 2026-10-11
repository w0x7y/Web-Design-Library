export default function FaqTwoColumnAccordion() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:gap-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for common questions</h2>
            <p className="mt-4 text-lg text-pretty text-neutral-600">A short introduction that helps readers find the answer they need.</p>
          </div>
          <aside className="rounded-lg border border-neutral-200 bg-neutral-50 p-6" aria-label="Additional support">
            <h3 className="text-base font-semibold">Label for additional support</h3>
            <p className="mt-2 text-sm text-pretty text-neutral-600">A short note that tells readers where to ask a question not covered here.</p>
            <div className="mt-4">
              <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Contact support</a>
            </div>
          </aside>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <details className="group border-b border-neutral-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                Question about getting started
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="pb-5 text-base text-pretty text-neutral-600">Describe the first step and what readers need to prepare. Explain how they know they are ready to begin.</p>
            </details>
            <details className="group border-b border-neutral-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                Question about what is included
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="pb-5 text-base text-pretty text-neutral-600">Name the main inclusions and the limits that affect the decision. Keep the explanation focused on what readers receive.</p>
            </details>
            <details className="group border-b border-neutral-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                Question about choosing an option
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="pb-5 text-base text-pretty text-neutral-600">Explain the difference between the available options. Give readers a useful criterion for making their choice.</p>
            </details>
            <details className="group border-b border-neutral-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                Question about the expected timing
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="pb-5 text-base text-pretty text-neutral-600">Describe how long the process usually takes. Name the point at which readers can expect the next update.</p>
            </details>
          </div>
          <div>
            <details className="group border-b border-neutral-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                Question about managing access
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="pb-5 text-base text-pretty text-neutral-600">Explain who can access the result and where permissions are managed. Include the detail readers need before inviting someone.</p>
            </details>
            <details className="group border-b border-neutral-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                Question about changing settings
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="pb-5 text-base text-pretty text-neutral-600">Describe where readers can review their current settings. Explain when a change takes effect and how to confirm it.</p>
            </details>
            <details className="group border-b border-neutral-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                Question about finding past records
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="pb-5 text-base text-pretty text-neutral-600">Explain where readers can find earlier records. Name the details that help them identify the item they need.</p>
            </details>
            <details className="group border-b border-neutral-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                Question about finding more help
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="pb-5 text-base text-pretty text-neutral-600">Point readers to the next source of help. Say which questions belong there and what information to include.</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
