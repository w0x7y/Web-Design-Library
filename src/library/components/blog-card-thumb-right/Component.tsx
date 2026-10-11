export default function BlogCardThumbRight() {
  return (
    <article className="group relative w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-[22rem]">
      <div className="flex items-start gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-xs text-neutral-500">Category label</p>
          <h3 className="mt-1 text-base font-semibold"><a href="#" className="after:absolute after:inset-0 group-hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Article headline that names the topic</a></h3>
        </div>
        <div role="img" aria-label="Image placeholder: small article thumbnail" className="flex aspect-[4/3] size-20 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 sm:size-24">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        </div>
      </div>
      <p className="mt-3 text-sm text-neutral-600">Two-line excerpt that gives readers a reason to open the article.</p>
      <footer className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500">
        <span>Alex Rivera</span><span aria-hidden="true">/</span><time dateTime="2026-10-10">Oct 10</time><span aria-hidden="true">/</span><span>6 min read</span>
      </footer>
    </article>
  )
}
