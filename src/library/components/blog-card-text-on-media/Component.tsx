export default function BlogCardTextOnMedia() {
  return (
    <article className="group relative grid h-80 w-72 grid-cols-1 overflow-hidden rounded-lg text-white sm:w-[22rem]">
      <div role="img" aria-label="Image placeholder: full-bleed cover photograph for the featured article" className="col-start-1 row-start-1 flex aspect-[4/3] h-full w-full min-w-0 items-start justify-center rounded-lg bg-neutral-100 pt-16 text-neutral-400">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
      <span className="absolute top-4 left-4 inline-flex items-center rounded-full border border-neutral-300 bg-white px-2.5 py-0.5 text-xs font-medium text-neutral-900">Category label</span>
      <div className="z-10 col-start-1 row-start-1 min-w-0 self-end bg-neutral-950/80 p-5">
        <h3 className="text-lg font-semibold"><a href="#" className="after:absolute after:inset-0 group-hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 focus-visible:outline-white">Article headline that names the main topic</a></h3>
        <p className="mt-3 flex flex-wrap items-center gap-2 text-xs text-neutral-300"><span>Alex Rivera</span><span aria-hidden="true">/</span><span>6 min read</span></p>
      </div>
    </article>
  )
}
