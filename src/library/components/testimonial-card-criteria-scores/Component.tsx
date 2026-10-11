export default function TestimonialCardCriteriaScores() {
  return (
    <figure className="w-72 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-80">
      <figcaption className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold">Alex Rivera</p>
        <p className="text-xs text-neutral-500">Verified reviewer</p>
      </figcaption>
      <dl className="mt-5 grid gap-3">
        <div className="flex items-baseline justify-between gap-3">
          <dt className="text-xs text-neutral-600">Ease of use</dt>
          <dd className="text-sm font-semibold tabular-nums">5 / 5</dd>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <dt className="text-xs text-neutral-600">Useful results</dt>
          <dd className="text-sm font-semibold tabular-nums">4 / 5</dd>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <dt className="text-xs text-neutral-600">Support quality</dt>
          <dd className="text-sm font-semibold tabular-nums">5 / 5</dd>
        </div>
      </dl>
      <blockquote className="mt-5 border-t border-neutral-200 pt-4 text-sm text-neutral-600">Short quote explaining the most important score.</blockquote>
    </figure>
  )
}
