export default function FaqAnswerSpotlight() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <header className="max-w-2xl">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the section</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for the most important question</h2>
        </header>
        <div className="mt-12 grid gap-8 lg:grid-cols-[256px_1fr]">
          <nav aria-label="Answer contents" className="rounded-lg border border-neutral-200 bg-white p-6">
            <p className="text-sm font-semibold">In this answer</p>
            <ul role="list" className="mt-4 grid gap-4">
              <li>
                <a href="#faq-answer-spotlight-overview" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Overview</a>
              </li>
              <li>
                <a href="#faq-answer-spotlight-requirements" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">What you need</a>
              </li>
              <li>
                <a href="#faq-answer-spotlight-next" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Next step</a>
              </li>
            </ul>
          </nav>
          <article className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
            <h3 id="faq-answer-spotlight-overview" className="scroll-mt-6 text-xl font-semibold">How does the complete process work?</h3>
            <p className="mt-4 text-base text-pretty text-neutral-600">Give a clear overview of the process, from the first request to the finished result.</p>
            <h4 id="faq-answer-spotlight-requirements" className="mt-8 scroll-mt-6 text-base font-semibold">What you need</h4>
            <ul role="list" className="mt-3 grid gap-3 text-sm text-neutral-600">
              <li>First piece of information needed to begin</li>
              <li>Second requirement that avoids delays</li>
            </ul>
            <h4 id="faq-answer-spotlight-next" className="mt-8 scroll-mt-6 text-base font-semibold">Next step</h4>
            <p className="mt-3 text-sm text-neutral-600">Explain the action readers can take when they are ready.</p>
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-5 inline-block text-sm">Get more help</a>
          </article>
        </div>
      </div>
    </section>
  )
}
