// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function TestimonialsPetCoverStories() {
  return (
    <section className="bg-cyan-50 text-cyan-950 font-['Manrope',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <header className="grid items-end gap-6 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-700">Pawstead / Policyholder stories</p>
            <h2 className="mt-4 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">A clear answer when pets need care.</h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed">Pet owners share how Pawstead explained their cover, handled their paperwork and kept them informed during a claim.</p>
        </header>
        <div className="mt-10">
          <p className="w-fit rounded-[.5rem_.5rem_0_0] bg-cyan-950 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white">Casebook / 03 pet owners</p>
          <div className="border border-cyan-200 bg-white">
            <details className="border-b border-cyan-200" open={true}>
              <summary className="flex cursor-pointer list-none flex-col justify-between gap-3 p-6 text-base font-semibold hover:bg-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current sm:flex-row sm:items-center">
                <span>01 / Milo, the spaniel</span>
                <span className="flex items-center gap-3">
                  <span className="text-sm font-medium text-cyan-700">Claim updates</span>
                  <svg className="size-4 shrink-0 in-open:rotate-180" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="m4 6 4 4 4-4" />
                  </svg>
                </span>
              </summary>
              <figure className="px-6 pb-8 text-2xl leading-[1.5]">
                <blockquote>“The claim page showed what was still needed from our vet. Once the notes arrived, I got an update instead of having to call again.”</blockquote>
                <figcaption className="mt-5 text-sm text-cyan-700">Erin Walsh / Milo’s owner</figcaption>
              </figure>
            </details>
            <details className="border-b border-cyan-200">
              <summary className="flex cursor-pointer list-none flex-col justify-between gap-3 p-6 text-base font-semibold hover:bg-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current sm:flex-row sm:items-center">
                <span>02 / Juniper, the tabby</span>
                <span className="flex items-center gap-3">
                  <span className="text-sm font-medium text-cyan-700">Cover explained</span>
                  <svg className="size-4 shrink-0 in-open:rotate-180" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="m4 6 4 4 4-4" />
                  </svg>
                </span>
              </summary>
              <figure className="px-6 pb-8 text-2xl leading-[1.5]">
                <blockquote>“Before I renewed, they explained the excess and the annual limit in plain words. I could compare the options without guessing what the policy meant.”</blockquote>
                <figcaption className="mt-5 text-sm text-cyan-700">Jamie Tran / Juniper’s owner</figcaption>
              </figure>
            </details>
            <details className="border-b border-cyan-200">
              <summary className="flex cursor-pointer list-none flex-col justify-between gap-3 p-6 text-base font-semibold hover:bg-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current sm:flex-row sm:items-center">
                <span>03 / Pepper, the terrier</span>
                <span className="flex items-center gap-3">
                  <span className="text-sm font-medium text-cyan-700">Direct vet payment</span>
                  <svg className="size-4 shrink-0 in-open:rotate-180" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="m4 6 4 4 4-4" />
                  </svg>
                </span>
              </summary>
              <figure className="px-6 pb-8 text-2xl leading-[1.5]">
                <blockquote>“Our vet agreed to receive the payment directly. Pawstead confirmed the covered amount and told me exactly what I still needed to pay.”</blockquote>
                <figcaption className="mt-5 text-sm text-cyan-700">Rosa Lane / Pepper’s owner</figcaption>
              </figure>
            </details>
          </div>
        </div>
        <a className="mt-6 inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" href="#">See how Pawstead handles claims</a>
      </div>
    </section>
  )
}
