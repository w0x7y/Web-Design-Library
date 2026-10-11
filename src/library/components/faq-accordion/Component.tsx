export default function FaqAccordion() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for common questions</h2>
          <p className="mt-4 text-lg text-pretty text-neutral-600">A short introduction that helps readers find the answer they need.</p>
        </div>
        <div className="mt-12 border-t border-neutral-200">
          <details name="faq-accordion" open className="group border-b border-neutral-200">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
              Question about the main benefit
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
            </summary>
            <p className="pb-5 text-base text-pretty text-neutral-600">Explain the main benefit in two or three sentences. Give readers enough detail to decide whether it fits their needs.</p>
          </details>
          <details name="faq-accordion" className="group border-b border-neutral-200">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
              Question about getting started
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
            </summary>
            <p className="pb-5 text-base text-pretty text-neutral-600">Describe the first step and what readers need before they begin. Link to a longer guide if the process needs more explanation.</p>
          </details>
          <details name="faq-accordion" className="group border-b border-neutral-200">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
              Question about what is included
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
            </summary>
            <p className="pb-5 text-base text-pretty text-neutral-600">Name the main inclusions and any limits that affect the decision. Keep the answer focused on the question.</p>
          </details>
          <details name="faq-accordion" className="group border-b border-neutral-200">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
              Question about changing a choice
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
            </summary>
            <p className="pb-5 text-base text-pretty text-neutral-600">Explain when a choice can change and what happens afterward. Include any timing or restrictions readers should know.</p>
          </details>
          <details name="faq-accordion" className="group border-b border-neutral-200">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
              Question about finding more help
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
            </summary>
            <p className="pb-5 text-base text-pretty text-neutral-600">Point readers to the next source of help. Say which questions belong there and what they can expect from it.</p>
          </details>
        </div>
      </div>
    </section>
  )
}
