export default function FaqNestedTopics() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the section</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for exploring question topics</h2>
        </header>
        <div className="mx-auto mt-10 max-w-3xl border-t border-neutral-200">
          <details className="group/topic border-b border-neutral-200">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden"><span><span className="block text-lg font-semibold">Getting started</span><span className="mt-1 block text-sm text-neutral-500">Questions about beginning and requirements</span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open/topic:rotate-180"><path d="m6 9 6 6 6-6" /></svg></summary>
            <div className="mb-6 rounded-lg border border-neutral-200 bg-neutral-50 px-6">
              <details  className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">How do I get started?<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg></summary>
                <p className="pb-5 text-sm text-pretty text-neutral-600">Explain the first action, the prerequisites and the confirmation readers should expect.</p>
              </details>
              <details  className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">What is included?<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg></summary>
                <p className="pb-5 text-sm text-pretty text-neutral-600">Name the main inclusions and any limits that affect the decision.</p>
              </details>
            </div>
          </details>
          <details className="group/topic border-b border-neutral-200">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden"><span><span className="block text-lg font-semibold">Making changes</span><span className="mt-1 block text-sm text-neutral-500">Questions about changes and support</span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open/topic:rotate-180"><path d="m6 9 6 6 6-6" /></svg></summary>
            <div className="mb-6 rounded-lg border border-neutral-200 bg-neutral-50 px-6">
              <details  className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">How can I make changes?<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg></summary>
                <p className="pb-5 text-sm text-pretty text-neutral-600">Describe where changes are made and when the result becomes available.</p>
              </details>
              <details  className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">Where can I get help?<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg></summary>
                <p className="pb-5 text-sm text-pretty text-neutral-600">Name the best route for additional questions and the details to provide.</p>
              </details>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
