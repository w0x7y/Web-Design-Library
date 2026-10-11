export default function CtaNumberedSteps() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-24 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the short process</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that makes the next step clear</h2>
          <p className="mt-6 text-lg text-pretty text-neutral-600">Supporting copy that explains the outcome and introduces the few steps needed to get there.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Primary action</a>
            <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Secondary action</a>
          </div>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <ol role="list" className="grid gap-6">
            <li className="flex items-start gap-4">
              <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-medium">1</span>
              <div>
                <h3 className="text-base font-semibold">Name the initial setup task</h3>
                <p className="mt-2 text-sm text-neutral-600">Explain what readers need to prepare before the first action.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-medium">2</span>
              <div>
                <h3 className="text-base font-semibold">Describe the main working step</h3>
                <p className="mt-2 text-sm text-neutral-600">Outline the central task and the support available while it is underway.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-medium">3</span>
              <div>
                <h3 className="text-base font-semibold">State the final confirmation</h3>
                <p className="mt-2 text-sm text-neutral-600">Describe how readers know the process is complete and what follows.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}
