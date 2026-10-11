export default function FaqQuestionIndex() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <header className="max-w-2xl">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the section</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for finding a specific answer</h2>
        </header>
        <nav aria-label="Question index" className="mt-10 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
          <ol role="list" className="grid gap-4 sm:grid-cols-2">
            <li>
              <a href="#faq-question-index-getting-started" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">01. How do I get started?</a>
            </li>
            <li>
              <a href="#faq-question-index-included" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">02. What is included?</a>
            </li>
            <li>
              <a href="#faq-question-index-changes" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">03. How can I make changes?</a>
            </li>
            <li>
              <a href="#faq-question-index-help" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">04. Where can I get help?</a>
            </li>
          </ol>
        </nav>
        <div className="mt-12 grid gap-8">
          <article id="faq-question-index-getting-started" className="scroll-mt-6 border-b border-neutral-200 pb-8">
            <p className="text-xs font-medium text-neutral-500">Answer 01</p>
            <h3 className="mt-2 text-lg font-semibold">How do I get started?</h3>
            <p className="mt-3 max-w-3xl text-base text-pretty text-neutral-600">Explain the first action, the prerequisites and the confirmation readers should expect.</p>
          </article>
          <article id="faq-question-index-included" className="scroll-mt-6 border-b border-neutral-200 pb-8">
            <p className="text-xs font-medium text-neutral-500">Answer 02</p>
            <h3 className="mt-2 text-lg font-semibold">What is included?</h3>
            <p className="mt-3 max-w-3xl text-base text-pretty text-neutral-600">Name the main inclusions and any limits that affect the decision.</p>
          </article>
          <article id="faq-question-index-changes" className="scroll-mt-6 border-b border-neutral-200 pb-8">
            <p className="text-xs font-medium text-neutral-500">Answer 03</p>
            <h3 className="mt-2 text-lg font-semibold">How can I make changes?</h3>
            <p className="mt-3 max-w-3xl text-base text-pretty text-neutral-600">Describe where changes are made and when the result becomes available.</p>
          </article>
          <article id="faq-question-index-help" className="scroll-mt-6 border-b border-neutral-200 pb-8">
            <p className="text-xs font-medium text-neutral-500">Answer 04</p>
            <h3 className="mt-2 text-lg font-semibold">Where can I get help?</h3>
            <p className="mt-3 max-w-3xl text-base text-pretty text-neutral-600">Name the best route for additional questions and the details to provide.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
