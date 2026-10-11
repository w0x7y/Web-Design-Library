export default function FeaturesNumberedSteps() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the capabilities</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that explains the process</h2>
        </div>
        <ol role="list" className="mt-12 grid gap-10 md:grid-cols-3">
          <li className="border-t border-neutral-200 pt-6">
            <span className="flex size-10 items-center justify-center rounded-full border border-neutral-300 font-mono text-sm font-medium">01</span>
            <h3 className="mt-6 text-lg font-semibold">Title for the first step</h3>
            <p className="mt-2 text-base text-pretty text-neutral-600">Describe what readers need to prepare before they begin. Name the action that starts the process.</p>
            <p className="mt-4 text-sm text-neutral-500">Day 1</p>
          </li>
          <li className="border-t border-neutral-200 pt-6">
            <span className="flex size-10 items-center justify-center rounded-full border border-neutral-300 font-mono text-sm font-medium">02</span>
            <h3 className="mt-6 text-lg font-semibold">Title for the next step</h3>
            <p className="mt-2 text-base text-pretty text-neutral-600">Explain the main action in the sequence. Say how readers know they are ready to continue.</p>
            <p className="mt-4 text-sm text-neutral-500">Day 2</p>
          </li>
          <li className="border-t border-neutral-200 pt-6">
            <span className="flex size-10 items-center justify-center rounded-full border border-neutral-300 font-mono text-sm font-medium">03</span>
            <h3 className="mt-6 text-lg font-semibold">Title for the final step</h3>
            <p className="mt-2 text-base text-pretty text-neutral-600">Describe the result readers review at the end. Include the follow-up that makes the outcome useful.</p>
            <p className="mt-4 text-sm text-neutral-500">Day 3</p>
          </li>
        </ol>
        <div className="mt-12 flex flex-col gap-6 rounded-lg bg-neutral-50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-pretty text-neutral-600">A short note that explains what readers need before taking the first step.</p>
          <div className="shrink-0">
            <a href="#" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Primary action</a>
          </div>
        </div>
      </div>
    </section>
  )
}
