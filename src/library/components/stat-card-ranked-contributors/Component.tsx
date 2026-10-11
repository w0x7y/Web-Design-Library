export default function StatCardRankedContributors() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-80">
      <header>
        <h3 className="text-sm font-medium text-neutral-500">Leading contributors</h3>
        <p className="mt-1 text-3xl font-semibold tracking-tight tabular-nums">1,284<span className="ml-2 text-xs font-normal text-neutral-500">total</span></p>
      </header>
      <ol role="list" className="mt-5 border-t border-neutral-200">
        <li className="flex items-center gap-3 border-b border-neutral-200 py-3">
          <span className="font-mono text-xs text-neutral-500">01</span>
          <span className="min-w-0 flex-1 text-sm font-medium">Alex Rivera</span>
          <span className="text-sm font-semibold tabular-nums">482</span>
        </li>
        <li className="flex items-center gap-3 border-b border-neutral-200 py-3">
          <span className="font-mono text-xs text-neutral-500">02</span>
          <span className="min-w-0 flex-1 text-sm font-medium">Jordan Lee</span>
          <span className="text-sm font-semibold tabular-nums">351</span>
        </li>
        <li className="flex items-center gap-3 border-b border-neutral-200 py-3">
          <span className="font-mono text-xs text-neutral-500">03</span>
          <span className="min-w-0 flex-1 text-sm font-medium">Sam Kim</span>
          <span className="text-sm font-semibold tabular-nums">208</span>
        </li>
      </ol>
      <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block text-xs">View all contributors</a>
    </article>
  )
}
