export default function BlogCardMediaLeft() {
  return (
    <article className="group relative w-72 overflow-hidden rounded-lg border border-neutral-200 bg-white text-neutral-900 md:grid md:w-[40rem] md:grid-cols-[15rem_minmax(0,1fr)]">
      <div role="img" aria-label="Image placeholder: featured article cover photograph" className="flex aspect-[2/1] w-full items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 md:aspect-auto md:h-full">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
      <div className="flex min-w-0 flex-col p-5 md:p-6">
        <p className="text-xs text-neutral-500">Category label</p>
        <h3 className="mt-2 text-lg font-semibold md:text-2xl"><a href="#" className="after:absolute after:inset-0 group-hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Article headline that names the central topic</a></h3>
        <p className="mt-3 text-sm text-neutral-600">Excerpt explaining the main question and the value readers will find.</p>
        <footer className="mt-auto flex items-center gap-3 pt-5">
          <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
          <div>
            <p className="text-sm font-medium">Alex Rivera</p>
            <p className="mt-1 flex items-center gap-2 text-xs text-neutral-500"><time dateTime="2026-10-10">Oct 10</time><span aria-hidden="true">/</span><span>6 min read</span></p>
          </div>
        </footer>
      </div>
    </article>
  )
}
