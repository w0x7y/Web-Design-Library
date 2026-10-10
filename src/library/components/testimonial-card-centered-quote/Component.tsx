export default function TestimonialCardCenteredQuote() {
  return (
    <figure className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-center text-neutral-900 sm:w-96 sm:p-8">
      <div className="flex items-center justify-center gap-2 font-semibold"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M12 3 3 8v8l9 5 9-5V8l-9-5ZM3 8l9 5 9-5M12 13v8" /></svg><span>Logo</span></div>
      <blockquote className="mt-5 text-base font-medium text-balance sm:text-xl">
        Quote that captures the main benefit in the author's own words.
      </blockquote>
      <figcaption className="mt-5">
        <span aria-hidden="true" className="mx-auto flex size-12 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
        <p className="mt-2 text-sm font-semibold">Alex Rivera</p>
        <p className="mt-1 text-xs text-neutral-500">Role, Company</p>
      </figcaption>
    </figure>
  )
}

