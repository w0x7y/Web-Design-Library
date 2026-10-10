export default function BlogCardTextOnly() {
  return (
    <article className="group relative w-72 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-[22rem]">
      <div className="flex items-center justify-between gap-3 text-xs text-neutral-500">
        <time dateTime="2026-10-10">Oct 10</time>
        <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900">Category label</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold"><a href="#" className="after:absolute after:inset-0 group-hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Article headline that names the main topic</a></h3>
      <p className="mt-2 text-sm text-neutral-600">Three-line excerpt describing the reason to read and the main question the article answers.</p>
      <footer className="mt-5 flex items-center gap-2 border-t border-neutral-200 pt-4">
        <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
        <div>
          <p className="text-sm font-medium">Alex Rivera</p>
          <p className="text-xs text-neutral-500">Author role</p>
        </div>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="ml-auto size-5 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
      </footer>
    </article>
  )
}
