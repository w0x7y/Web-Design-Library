export default function FaqCategorySidebar() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_3fr] lg:gap-16">
        <nav aria-label="FAQ topics" className="self-start lg:sticky lg:top-8">
          <p className="text-sm font-medium text-neutral-500">Topics</p>
          <ul role="list" className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:items-start">
            <li>
              <a href="#faq-category-sidebar-start" className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Getting started</a>
            </li>
            <li>
              <a href="#faq-category-sidebar-included" className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Included details</a>
            </li>
            <li>
              <a href="#faq-category-sidebar-choices" className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Your choices</a>
            </li>
            <li>
              <a href="#faq-category-sidebar-help" className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">More help</a>
            </li>
          </ul>
        </nav>
        <div className="grid gap-12">
          <section id="faq-category-sidebar-start" aria-labelledby="faq-category-sidebar-start-title" className="scroll-mt-8">
            <h3 id="faq-category-sidebar-start-title" className="text-lg font-semibold">Getting started</h3>
            <div className="mt-4 border-t border-neutral-200">
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
                  Question about the requirements
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="pb-5 text-base text-pretty text-neutral-600">Name the information or materials readers need before starting. Explain where to find any missing detail.</p>
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
          </section>
          <section id="faq-category-sidebar-included" aria-labelledby="faq-category-sidebar-included-title" className="scroll-mt-8">
            <h3 id="faq-category-sidebar-included-title" className="text-lg font-semibold">Included details</h3>
            <div className="mt-4 border-t border-neutral-200">
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
                  Question about the main limits
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="pb-5 text-base text-pretty text-neutral-600">Describe the limit that most affects the choice. Explain where readers can check the full scope.</p>
              </details>
              <details className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  Question about managing access
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="pb-5 text-base text-pretty text-neutral-600">Explain who can access the result and where permissions are managed. Include the detail readers need before inviting someone.</p>
              </details>
            </div>
          </section>
          <section id="faq-category-sidebar-choices" aria-labelledby="faq-category-sidebar-choices-title" className="scroll-mt-8">
            <h3 id="faq-category-sidebar-choices-title" className="text-lg font-semibold">Your choices</h3>
            <div className="mt-4 border-t border-neutral-200">
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
                  Question about saving a choice
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="pb-5 text-base text-pretty text-neutral-600">Explain how readers save their choice. Say where they can return to review it later.</p>
              </details>
              <details className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  Question about cancelling a step
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="pb-5 text-base text-pretty text-neutral-600">Describe when readers can stop the process. Explain what happens to any work they have already completed.</p>
              </details>
            </div>
          </section>
          <section id="faq-category-sidebar-help" aria-labelledby="faq-category-sidebar-help-title" className="scroll-mt-8">
            <h3 id="faq-category-sidebar-help-title" className="text-lg font-semibold">More help</h3>
            <div className="mt-4 border-t border-neutral-200">
              <details className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  Question about finding a guide
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="pb-5 text-base text-pretty text-neutral-600">Point readers to the guide for a longer explanation. Describe the information the guide covers.</p>
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
              <details className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  Question about the next follow-up
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="pb-5 text-base text-pretty text-neutral-600">Explain when readers can expect a follow-up. Name the information they should keep ready for it.</p>
              </details>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
