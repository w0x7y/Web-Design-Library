export default function FaqDecisionBranches() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the section</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for finding the right answer</h2>
          <p className='mt-4 text-lg text-pretty text-neutral-600'>Start with the question that matches your situation.</p>
        </header>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border border-neutral-200 bg-white p-6">
            <h3 className="text-lg font-semibold">Are you starting for the first time?</h3>
            <p className="mt-3 text-sm text-neutral-600">Select the branch that describes your current position.</p>
            <div className="mt-6 border-t border-neutral-200">
              <details  className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">Yes, I am new<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg></summary>
                <p className="pb-5 text-sm text-pretty text-neutral-600">Explain the first action for this branch and where to find the next step.</p>
              </details>
              <details  className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">No, I have access<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg></summary>
                <p className="pb-5 text-sm text-pretty text-neutral-600">Explain the alternative action and what readers can review before continuing.</p>
              </details>
            </div>
          </article>
          <article className="rounded-lg border border-neutral-200 bg-white p-6">
            <h3 className="text-lg font-semibold">Do you need to change your access?</h3>
            <p className="mt-3 text-sm text-neutral-600">Select the branch that matches the change you need.</p>
            <div className="mt-6 border-t border-neutral-200">
              <details  className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">Yes, change access<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg></summary>
                <p className="pb-5 text-sm text-pretty text-neutral-600">Explain the first action for this branch and where to find the next step.</p>
              </details>
              <details  className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">No, keep access<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg></summary>
                <p className="pb-5 text-sm text-pretty text-neutral-600">Explain the alternative action and what readers can review before continuing.</p>
              </details>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
