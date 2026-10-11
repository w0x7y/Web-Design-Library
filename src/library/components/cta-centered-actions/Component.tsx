export default function CtaCenteredActions() {
  return (
    <section className="bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that names the next step</h2>
          <p className="mt-4 text-lg text-pretty text-neutral-600">Supporting copy that helps readers decide whether to take the next action.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Primary action</a>
            <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Secondary action</a>
          </div>
          <p className="mt-4 text-sm text-neutral-500">Reassurance that removes a common concern</p>
        </div>
      </div>
    </section>
  )
}
