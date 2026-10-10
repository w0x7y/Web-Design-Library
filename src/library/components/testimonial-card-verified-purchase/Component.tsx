export default function TestimonialCardVerifiedPurchase() {
  return (
    <figure className="w-72 rounded-xl border border-neutral-200 bg-white p-5 text-neutral-950 sm:w-80">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p
          role="img"
          aria-label="Rated 5 out of 5"
          className="text-lg tracking-wider text-amber-700"
        >
          <span aria-hidden="true">★★★★★</span>
        </p>
        <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-800">
          Verified purchase
        </span>
      </div>
      <blockquote className="mt-4">
        <p className="text-base font-semibold">
          Finally, a bag that stays organized.
        </p>
        <p className="mt-2 text-sm leading-6 text-neutral-700">
          “My charger, notebook and keys each have a home. I can find them
          without emptying everything onto the train seat.”
        </p>
      </blockquote>
      <figcaption className="mt-5 border-t border-neutral-200 pt-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold">Alex Martin</p>
          <time dateTime="2026-09-28" className="text-[11px] text-neutral-600">
            28 Sep 2026
          </time>
        </div>
        <p className="mt-2 text-[11px] text-neutral-600">
          Daypack 18L · Olive · Used for 3 months
        </p>
      </figcaption>
    </figure>
  )
}
