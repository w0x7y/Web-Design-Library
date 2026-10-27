export default function TestimonialCardReviewSummary() {
  return (
    <section aria-labelledby="testimonial-card-review-summary-title" className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-80">
      <h2 id="testimonial-card-review-summary-title" className="text-sm font-medium text-neutral-500">Customer reviews</h2>
      <div className="mt-3 flex items-center gap-3">
        <p className="text-4xl font-semibold tracking-tight tabular-nums">4.9</p>
        <div>
          <span aria-hidden="true" className="flex gap-0.5">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m12 3 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2-5.7-3-5.7 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m12 3 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2-5.7-3-5.7 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m12 3 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2-5.7-3-5.7 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m12 3 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2-5.7-3-5.7 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m12 3 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2-5.7-3-5.7 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>
          </span>
          <p className="mt-1 text-xs text-neutral-500">Average rating out of 5</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div aria-hidden="true" className="flex -space-x-2">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white bg-neutral-200 text-xs font-medium text-neutral-600">AR</span>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white bg-neutral-200 text-xs font-medium text-neutral-600">JL</span>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white bg-neutral-200 text-xs font-medium text-neutral-600">MP</span>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white bg-neutral-200 text-xs font-medium text-neutral-600">SK</span>
        </div>
        <p className="text-sm text-neutral-600">2,140 reviews</p>
      </div>
      <figure className="mt-5 rounded-lg bg-neutral-50 p-4">
        <blockquote className="text-sm text-pretty text-neutral-900">Highlighted quote from one review that names the benefit most reviewers mention.</blockquote>
        <figcaption className="mt-3 text-xs text-neutral-500"><span className="font-semibold text-neutral-900">Alex Rivera</span>, Role</figcaption>
      </figure>
      <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Read all reviews<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M5 12h14m-5-5 5 5-5 5" /></svg></a>
    </section>
  )
}
