export default function FaqGlossaryAnswers() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <header className="max-w-2xl">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the section</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for terms behind the questions</h2>
        </header>
        <dl className="mt-10 border-t border-neutral-200">
          <div className="grid gap-4 border-b border-neutral-200 py-6 md:grid-cols-[48px_192px_1fr]">
            <dt className="contents"><span aria-hidden="true" className="text-3xl font-semibold text-neutral-500">A</span><span className="text-base font-semibold">Access level</span></dt>
            <dd><h3 className="text-base font-semibold">What does access level mean?</h3><p className="mt-3 text-sm text-pretty text-neutral-600">Define the term, what it controls and where readers can check their current setting.</p></dd>
          </div>
          <div className="grid gap-4 border-b border-neutral-200 py-6 md:grid-cols-[48px_192px_1fr]">
            <dt className="contents"><span aria-hidden="true" className="text-3xl font-semibold text-neutral-500">B</span><span className="text-base font-semibold">Billing period</span></dt>
            <dd><h3 className="text-base font-semibold">What is a billing period?</h3><p className="mt-3 text-sm text-pretty text-neutral-600">Define the period and explain which dates determine the next payment.</p></dd>
          </div>
          <div className="grid gap-4 border-b border-neutral-200 py-6 md:grid-cols-[48px_192px_1fr]">
            <dt className="contents"><span aria-hidden="true" className="text-3xl font-semibold text-neutral-500">C</span><span className="text-base font-semibold">Confirmation</span></dt>
            <dd><h3 className="text-base font-semibold">What counts as confirmation?</h3><p className="mt-3 text-sm text-pretty text-neutral-600">Name the confirmation readers should expect and the information it includes.</p></dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
