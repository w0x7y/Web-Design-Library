export default function BlogCardSeriesIndex() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-80">
      <p className="text-xs text-neutral-500">Series title · 3 articles</p>
      <h3 className="mt-3 text-lg font-semibold">Heading for the article series</h3>
      <ol role="list" className="mt-5 border-t border-neutral-200">
        <li className="grid grid-cols-[24px_1fr] gap-3 border-b border-neutral-200 py-2">
          <span className="font-mono text-xs text-neutral-500">01</span>
          <div>
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">First article topic</a>
            <p className="mt-1 text-xs text-neutral-500">4 min read</p>
          </div>
        </li>
        <li className="grid grid-cols-[24px_1fr] gap-3 border-b border-neutral-200 py-2">
          <span className="font-mono text-xs text-neutral-500">02</span>
          <div>
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Second article topic</a>
            <p className="mt-1 text-xs text-neutral-500">6 min read</p>
          </div>
        </li>
        <li className="grid grid-cols-[24px_1fr] gap-3 border-b border-neutral-200 py-2">
          <span className="font-mono text-xs text-neutral-500">03</span>
          <div>
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Third article topic</a>
            <p className="mt-1 text-xs text-neutral-500">8 min read</p>
          </div>
        </li>
      </ol>
      <p className="mt-4 text-xs text-neutral-500">By Alex Rivera</p>
    </article>
  )
}
