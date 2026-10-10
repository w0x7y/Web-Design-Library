export default function FeaturesComparisonPanels() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the capabilities</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that explains the change</h2>
          <p className="mt-4 text-lg text-pretty text-neutral-600">A short introduction that connects these capabilities to the outcome readers need.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
            <p className="text-sm font-medium text-neutral-500">Before</p>
            <h3 className="mt-3 text-lg font-semibold">Title for the starting state</h3>
            <ul role="list" className="mt-6 grid gap-4 text-base text-neutral-600">
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900">
                  <path d="m6 6 12 12M6 18 18 6" />
                </svg>
                <span>Describe a repeated manual step</span>
              </li>
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900">
                  <path d="m6 6 12 12M6 18 18 6" />
                </svg>
                <span>Name the information that is hard to find</span>
              </li>
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900">
                  <path d="m6 6 12 12M6 18 18 6" />
                </svg>
                <span>State the choice that adds friction</span>
              </li>
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900">
                  <path d="m6 6 12 12M6 18 18 6" />
                </svg>
                <span>Describe the limit on the result</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-neutral-900 bg-white p-6">
            <p className="text-sm font-medium text-neutral-500">After</p>
            <h3 className="mt-3 text-lg font-semibold">Title for the improved state</h3>
            <ul role="list" className="mt-6 grid gap-4 text-base text-neutral-600">
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900">
                  <path d="M5 12l4 4L19 6" />
                </svg>
                <span>Describe the step readers can simplify</span>
              </li>
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900">
                  <path d="M5 12l4 4L19 6" />
                </svg>
                <span>Name the information they can see clearly</span>
              </li>
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900">
                  <path d="M5 12l4 4L19 6" />
                </svg>
                <span>State the choice that becomes easier</span>
              </li>
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900">
                  <path d="M5 12l4 4L19 6" />
                </svg>
                <span>Describe the result they can assess</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Explore the change</a>
        </div>
      </div>
    </section>
  )
}
