export default function CtaPriceInclusionsStrip() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <div className="rounded-lg border border-neutral-200 bg-white">
          <div className="grid items-center gap-6 p-6 md:grid-cols-[1fr_auto_auto]">
            <div>
              <p className="text-sm font-medium text-neutral-500">Offer label</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for the next commitment</h2>
            </div>
            <p className="text-4xl font-semibold tracking-tight">$29<span className="ml-2 text-sm font-normal text-neutral-500">per month</span></p>
            <a href="#" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Choose this option</a>
          </div>
          <ul role="list" className="grid gap-6 border-t border-neutral-200 p-6 sm:grid-cols-3">
            <li className="flex items-start gap-3">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0"><path d="m5 12 4 4L19 6" /></svg>
              <span className="text-sm text-neutral-600">First inclusion that sets the scope</span>
            </li>
            <li className="flex items-start gap-3">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0"><path d="m5 12 4 4L19 6" /></svg>
              <span className="text-sm text-neutral-600">Second inclusion that removes a concern</span>
            </li>
            <li className="flex items-start gap-3">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0"><path d="m5 12 4 4L19 6" /></svg>
              <span className="text-sm text-neutral-600">Third inclusion that explains support</span>
            </li>
          </ul>
          <p className="border-t border-neutral-200 bg-neutral-50 px-6 py-4 text-xs text-neutral-500">Terms summary that names the commitment and when it can change</p>
        </div>
      </div>
    </section>
  )
}
