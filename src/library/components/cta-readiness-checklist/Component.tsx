export default function CtaReadinessChecklist() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the section</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for confirming readiness</h2>
          <p className='mt-4 text-lg text-pretty text-neutral-600'>Name what readers should have in place before taking the next step.</p>
        </header>
        <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-neutral-200 bg-white p-6 sm:p-8">
          <ul role="list" className="grid gap-6 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0"><path d="m5 12 4 4L19 6" /></svg>
              <p className="text-sm text-neutral-600">First prerequisite for getting started</p>
            </li>
            <li className="flex items-start gap-3">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0"><path d="m5 12 4 4L19 6" /></svg>
              <p className="text-sm text-neutral-600">Second prerequisite for a useful result</p>
            </li>
            <li className="flex items-start gap-3">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0"><path d="m5 12 4 4L19 6" /></svg>
              <p className="text-sm text-neutral-600">Third prerequisite about shared access</p>
            </li>
            <li className="flex items-start gap-3">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0"><path d="m5 12 4 4L19 6" /></svg>
              <p className="text-sm text-neutral-600">Fourth prerequisite about available time</p>
            </li>
          </ul>
          <div className="mt-8 border-t border-neutral-200 pt-6 text-center">
            <a href="#" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Begin the next step</a>
            <p className="mt-3 text-xs text-neutral-500">Short expectation for what happens next</p>
          </div>
        </div>
      </div>
    </section>
  )
}
