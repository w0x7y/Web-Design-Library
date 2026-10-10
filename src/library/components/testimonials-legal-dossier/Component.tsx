// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function TestimonialsLegalDossier() {
  return (
    <section className="bg-cyan-50 text-cyan-950 font-['Manrope',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <header className="grid items-end gap-6 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-700">Clausewell / Customer files</p>
            <h2 className="mt-4 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">The work behind a clean contract.</h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed">Legal teams tell us what changed when the intake, the approvals and the renewal dates lived in one place.</p>
        </header>
        <div className="mt-10">
          <p className="w-fit rounded-[.5rem_.5rem_0_0] bg-cyan-950 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white">Dossier / 03 customer accounts</p>
          <div className="border border-cyan-200 bg-white">
            <details className="border-b border-cyan-200" open={true}>
              <summary className="flex cursor-pointer list-none flex-col justify-between gap-3 p-6 text-base font-semibold hover:bg-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current sm:flex-row sm:items-center">
                <span>01 / Westhaven Foods</span>
                <span className="flex items-center gap-3">
                  <span className="text-sm font-medium text-cyan-700">Contract review</span>
                  <svg className="size-4 shrink-0 in-open:rotate-180" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="m4 6 4 4 4-4" />
                  </svg>
                </span>
              </summary>
              <figure className="px-6 pb-8 text-2xl leading-[1.5]">
                <blockquote>“Every request arrives with the right entity and budget owner attached. I can review the contract without first interviewing the person who sent it.”</blockquote>
                <figcaption className="mt-5 text-sm text-cyan-700">Nia Desai / Head of legal</figcaption>
              </figure>
            </details>
            <details className="border-b border-cyan-200">
              <summary className="flex cursor-pointer list-none flex-col justify-between gap-3 p-6 text-base font-semibold hover:bg-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current sm:flex-row sm:items-center">
                <span>02 / Larch Health</span>
                <span className="flex items-center gap-3">
                  <span className="text-sm font-medium text-cyan-700">Renewal planning</span>
                  <svg className="size-4 shrink-0 in-open:rotate-180" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="m4 6 4 4 4-4" />
                  </svg>
                </span>
              </summary>
              <figure className="px-6 pb-8 text-2xl leading-[1.5]">
                <blockquote>“We found three renewals that were due before anyone had assigned an owner. Clausewell gave us a month to negotiate instead of a day.”</blockquote>
                <figcaption className="mt-5 text-sm text-cyan-700">Emil Bauer / Procurement director</figcaption>
              </figure>
            </details>
            <details className="border-b border-cyan-200">
              <summary className="flex cursor-pointer list-none flex-col justify-between gap-3 p-6 text-base font-semibold hover:bg-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current sm:flex-row sm:items-center">
                <span>03 / Finch Robotics</span>
                <span className="flex items-center gap-3">
                  <span className="text-sm font-medium text-cyan-700">Outside counsel</span>
                  <svg className="size-4 shrink-0 in-open:rotate-180" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="m4 6 4 4 4-4" />
                  </svg>
                </span>
              </summary>
              <figure className="px-6 pb-8 text-2xl leading-[1.5]">
                <blockquote>“I can see who approved a clause and why. When our external lawyer asks, the answer is already in the file.”</blockquote>
                <figcaption className="mt-5 text-sm text-cyan-700">Rosa Kim / General counsel</figcaption>
              </figure>
            </details>
          </div>
        </div>
        <a className="mt-6 inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" href="#">See how Clausewell handles intake</a>
      </div>
    </section>
  )
}
