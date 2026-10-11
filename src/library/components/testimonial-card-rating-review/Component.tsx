export default function TestimonialCardRatingReview() {
  return (
    <figure className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-80">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span role="img" aria-label="Rated 4 out of 5" className="flex gap-1">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m12 3 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2-5.7-3-5.7 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m12 3 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2-5.7-3-5.7 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m12 3 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2-5.7-3-5.7 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m12 3 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2-5.7-3-5.7 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m12 3 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2-5.7-3-5.7 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>
        </span>
        <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Verified purchase</span>
      </div>
      <h2 className="mt-5 text-base font-semibold">Review title</h2>
      <blockquote className="mt-2 text-sm text-pretty text-neutral-600">Review body that describes the experience, names a useful detail and explains who would find this a good fit.</blockquote>
      <figcaption className="mt-5 border-t border-neutral-200 pt-4">
        <div className="flex items-center justify-between gap-3 text-sm"><span className="font-semibold">Alex Rivera</span><time dateTime="2026-03-14" className="text-xs text-neutral-500">Mar 14</time></div>
        <p className="mt-2 text-xs text-neutral-500">Variant label · Usage duration</p>
      </figcaption>
    </figure>
  )
}

