export default function TestimonialCardSocialPost() {
  return (
    <article className="relative w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 transition-colors hover:bg-neutral-50 sm:w-[22rem]">
      <header className="flex items-center gap-3">
        <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
        <div className="min-w-0 flex-1">
          <a href="#" aria-label="Read Alex Rivera's original post" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 after:absolute after:inset-0">Alex Rivera</a>
          <p className="mt-1 text-xs text-neutral-500">@handle</p>
        </div>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-500"><path d="M4 4h16v12H9l-5 4V4ZM8 8h8M8 12h5" /></svg>
      </header>
      <p className="mt-4 text-sm text-pretty text-neutral-600">Post text that describes the experience with <span className="font-medium text-neutral-900">@mention</span> and names a concrete benefit in the author's own words.</p>
      <footer className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-neutral-500">
        <time dateTime="2026-03-14T09:41:00">Mar 14, 9:41 AM</time>
        <span>3 replies</span>
      </footer>
    </article>
  )
}

