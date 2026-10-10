export default function BlogCardDateColumn() {
  return (
    <article className="group relative grid w-72 grid-cols-[3.5rem_minmax(0,1fr)] gap-4 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-[22rem]">
      <time dateTime="2026-10-10" aria-label="October 10, 2026" className="border-r border-neutral-200 pr-4">
        <span className="block text-3xl font-semibold">10</span>
        <span className="mt-1 block text-xs text-neutral-500">Oct</span>
      </time>
      <div className="min-w-0">
        <p className="text-xs text-neutral-500">Category label</p>
        <h3 className="mt-1 text-base font-semibold"><a href="#" className="after:absolute after:inset-0 group-hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Article headline that names the update</a></h3>
        <p className="mt-2 text-sm text-neutral-600">Excerpt explaining the main announcement.</p>
        <p className="mt-3 text-xs text-neutral-500">6 min read</p>
      </div>
    </article>
  )
}
