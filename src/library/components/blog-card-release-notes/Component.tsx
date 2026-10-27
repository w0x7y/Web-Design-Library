export default function BlogCardReleaseNotes() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-[22rem]">
      <header>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">v2.4.0</span>
          <time dateTime="2026-10-20" className="text-xs text-neutral-500">Oct 20, 2026</time>
        </div>
        <h3 className="mt-3 text-lg font-semibold">Release headline that names the main change</h3>
      </header>
      <div className="mt-4 space-y-4 border-t border-neutral-200 pt-4">
        <div>
          <h4 className="text-xs font-medium text-neutral-500">New</h4>
          <ul role="list" className="mt-2 space-y-1.5 text-sm text-neutral-600">
            <li className="flex gap-2"><span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-400" />Summary of the first new feature</li>
            <li className="flex gap-2"><span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-400" />Summary of another new feature</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-medium text-neutral-500">Fixed</h4>
          <ul role="list" className="mt-2 space-y-1.5 text-sm text-neutral-600">
            <li className="flex gap-2"><span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-400" />Summary of a resolved issue</li>
          </ul>
        </div>
      </div>
      <a href="#" aria-label="Read the full notes for version 2.4.0" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
        Read the full notes
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
      </a>
    </article>
  )
}
