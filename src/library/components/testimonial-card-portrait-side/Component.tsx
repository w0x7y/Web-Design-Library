export default function TestimonialCardPortraitSide() {
  return (
    <figure className="grid min-h-60 w-72 grid-cols-[5rem_minmax(0,1fr)] grid-rows-[1fr_auto] overflow-hidden rounded-lg border border-neutral-200 bg-white text-neutral-900 sm:w-[28rem] sm:grid-cols-[10rem_minmax(0,1fr)]">
      <div role="img" aria-label="Image placeholder: author portrait" className="row-span-2 flex items-center justify-center bg-neutral-100 text-neutral-400">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg>
      </div>
      <blockquote className="min-w-0 px-6 pt-6 text-sm text-pretty text-neutral-600 sm:text-base">
        Quote that describes the experience and names a benefit in the author's own words.
      </blockquote>
      <figcaption className="px-6 pt-6 pb-6">
        <p className="text-sm font-semibold">Alex Rivera</p>
        <p className="mt-1 text-xs text-neutral-500">Role, Company</p>
      </figcaption>
    </figure>
  )
}

