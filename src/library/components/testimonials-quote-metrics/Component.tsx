export default function TestimonialsQuoteMetrics() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <figure className="rounded-lg bg-neutral-50 p-6 sm:p-10">
          <div className="flex items-center gap-2 font-semibold">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-6"
            >
              <rect x="4" y="4" width="16" height="16" rx="3" />
              <path d="M8 12h8M12 8v8" />
            </svg>
            Logo
          </div>
          <blockquote className="mt-8 text-2xl font-medium text-balance">
            “A customer quote that connects the main benefit with a measurable change. Explain which part of the experience made that result possible and why
            the improvement mattered to the customer.”
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
            >
              AR
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold">Alex Rivera</p>
              <p className="mt-1 text-sm text-neutral-500">Role and organization</p>
            </div>
          </figcaption>
        </figure>
        <div>
          <p className="text-sm font-medium text-neutral-500">Customer outcome</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that names the measured outcome</h2>
          <p className="mt-4 text-lg text-pretty text-neutral-600">
            A sentence that introduces the customer’s starting point and what they wanted to improve. Follow with a sentence that connects the experience to the
            results below.
          </p>
          <dl className="mt-8 border-t border-neutral-200">
            <div className="flex items-baseline gap-6 border-b border-neutral-200 py-5">
              <dt className="order-2 min-w-0 flex-1 text-sm text-neutral-600">Improvement in the main measure</dt>
              <dd className="order-1 shrink-0 text-4xl font-semibold tracking-tight">42%</dd>
            </div>
            <div className="flex items-baseline gap-6 border-b border-neutral-200 py-5">
              <dt className="order-2 min-w-0 flex-1 text-sm text-neutral-600">Change in an important outcome</dt>
              <dd className="order-1 shrink-0 text-4xl font-semibold tracking-tight">2.4x</dd>
            </div>
            <div className="flex items-baseline gap-6 border-b border-neutral-200 py-5">
              <dt className="order-2 min-w-0 flex-1 text-sm text-neutral-600">Time saved over the period</dt>
              <dd className="order-1 shrink-0 text-4xl font-semibold tracking-tight">18 hrs</dd>
            </div>
          </dl>
          <a
            href="#"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-6 inline-block"
          >
            Read the case study
          </a>
        </div>
      </div>
    </section>
  )
}
