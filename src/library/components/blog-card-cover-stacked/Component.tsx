export default function BlogCardCoverStacked() {
  return (
    <article className="group relative w-72 overflow-hidden rounded-lg border border-neutral-200 bg-white text-neutral-900 sm:w-[22rem]">
      <div role="img" aria-label="Image placeholder: article cover photograph or illustration" className="flex aspect-[4/3] h-36 w-full items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3 text-xs text-neutral-500">
          <span>Category label</span>
          <time dateTime="2026-10-10">Oct 10</time>
        </div>
        <h3 className="mt-2 text-base font-semibold"><a href="#" className="after:absolute after:inset-0 group-hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Article headline that names the topic</a></h3>
        <p className="mt-2 text-sm text-neutral-600">Two-line excerpt that explains the article value and invites readers in.</p>
      </div>
      <footer className="flex items-center justify-between gap-3 border-t border-neutral-200 px-5 py-3 text-xs">
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="flex size-6 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600">AR</span>
          <span>Alex Rivera</span>
        </div>
        <span className="text-neutral-500">6 min read</span>
      </footer>
    </article>
  )
}
