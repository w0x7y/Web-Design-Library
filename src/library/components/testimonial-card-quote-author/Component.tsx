export default function TestimonialCardQuoteAuthor() {
  return (
    <figure className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-[22rem] sm:p-8">
      <div className="flex items-center gap-2 font-semibold"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M12 3 3 8v8l9 5 9-5V8l-9-5ZM3 8l9 5 9-5M12 13v8" /></svg><span>Logo</span></div>
      <blockquote className="mt-5 text-base text-pretty text-neutral-600 sm:text-lg">
        Quote that describes the experience in the author's own words. Add one specific benefit and a detail that makes the recommendation useful.
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-neutral-200 pt-5">
        <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
        <div><p className="text-sm font-semibold">Alex Rivera</p><p className="mt-1 text-xs text-neutral-500">Role, Company</p></div>
      </figcaption>
    </figure>
  )
}

