export default function FeaturesAlternatingRows() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the capabilities</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that names the key benefits</h2>
          <p className="mt-4 text-lg text-pretty text-neutral-600">A short introduction that connects these capabilities to the outcome readers need.</p>
        </div>
        <ul role="list" className="mt-16 grid gap-16 lg:gap-24">
          <li className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div role="img" aria-label="Image placeholder: visual explaining the primary capability" className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-500">Primary capability</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-balance">Title that explains the main benefit</h3>
              <p className="mt-4 text-base text-pretty text-neutral-600">Describe the main capability and the problem it addresses. Add one detail that helps readers picture how they would use it.</p>
              <ul role="list" className="mt-6 grid gap-3 text-base text-neutral-600">
                <li className="flex items-start gap-3">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900">
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                  <span>Name the essential capability</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900">
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                  <span>Describe the supporting detail</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900">
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                  <span>State the practical result</span>
                </li>
              </ul>
              <div className="mt-6">
                <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Explore the benefit</a>
              </div>
            </div>
          </li>
          <li className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div role="img" aria-label="Image placeholder: visual explaining the supporting workflow" className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 lg:order-last">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-500">Supporting workflow</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-balance">Title that clarifies the next step</h3>
              <p className="mt-4 text-base text-pretty text-neutral-600">Explain the workflow this capability supports. Show how it connects the first action to a useful next step.</p>
              <ul role="list" className="mt-6 grid gap-3 text-base text-neutral-600">
                <li className="flex items-start gap-3">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900">
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                  <span>Name the step readers can simplify</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900">
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                  <span>Describe the choice they control</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900">
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                  <span>State what happens next</span>
                </li>
              </ul>
              <div className="mt-6">
                <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Explore the workflow</a>
              </div>
            </div>
          </li>
          <li className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div role="img" aria-label="Image placeholder: visual explaining the expected outcome" className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-500">Expected outcome</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-balance">Title that names the lasting result</h3>
              <p className="mt-4 text-base text-pretty text-neutral-600">Describe the result readers can expect after using this capability. Add the detail that makes the outcome easy to assess.</p>
              <ul role="list" className="mt-6 grid gap-3 text-base text-neutral-600">
                <li className="flex items-start gap-3">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900">
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                  <span>Name the measure of success</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900">
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                  <span>Describe the useful follow-up</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900">
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                  <span>State the assurance that matters</span>
                </li>
              </ul>
              <div className="mt-6">
                <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Explore the outcome</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
