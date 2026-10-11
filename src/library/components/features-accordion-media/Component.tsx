export default function FeaturesAccordionMedia() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the capabilities</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that names the key benefits</h2>
          <p className="mt-4 text-lg text-pretty text-neutral-600">A short introduction that connects these capabilities to the outcome readers need.</p>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="border-t border-neutral-200 lg:col-span-5">
            <details name="features-accordion-media" open className="group border-b border-neutral-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                Title for the main capability
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="pb-5">
                <p className="text-base text-pretty text-neutral-600">Explain the main capability in two sentences. Describe the detail readers should look for in the shared visual.</p>
                <div className="mt-4">
                  <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Explore the capability</a>
                </div>
              </div>
            </details>
            <details name="features-accordion-media" className="group border-b border-neutral-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                Title for a simpler workflow
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="pb-5">
                <p className="text-base text-pretty text-neutral-600">Describe the workflow this feature supports. Explain where it removes an unnecessary step.</p>
                <div className="mt-4">
                  <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Explore the workflow</a>
                </div>
              </div>
            </details>
            <details name="features-accordion-media" className="group border-b border-neutral-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                Title for a supporting tool
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="pb-5">
                <p className="text-base text-pretty text-neutral-600">Name the supporting tool and the task it helps complete. State what readers need to use it.</p>
                <div className="mt-4">
                  <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Explore the tool</a>
                </div>
              </div>
            </details>
            <details name="features-accordion-media" className="group border-b border-neutral-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                Title for a clearer outcome
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="pb-5">
                <p className="text-base text-pretty text-neutral-600">Describe the outcome that ties these capabilities together. Add a detail that helps readers assess the result.</p>
                <div className="mt-4">
                  <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Explore the outcome</a>
                </div>
              </div>
            </details>
          </div>
          <div role="img" aria-label="Image placeholder: shared overview of the capabilities" className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 lg:col-span-6 lg:col-start-7">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
