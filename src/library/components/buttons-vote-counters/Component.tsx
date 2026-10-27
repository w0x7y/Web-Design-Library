export default function ButtonsVoteCounters() {
  return (
    <ul role="list" className="w-72 divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white text-neutral-900 sm:w-[26rem]">
      <li className="flex items-center gap-4 p-4">
        <button type="button" aria-pressed="true" className="flex h-14 w-12 shrink-0 flex-col items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 aria-pressed:border-neutral-900 aria-pressed:bg-neutral-900 aria-pressed:text-white aria-pressed:hover:bg-neutral-700 forced-colors:aria-pressed:border-[Highlight] forced-colors:aria-pressed:bg-[Highlight] forced-colors:aria-pressed:text-[HighlightText]">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m6 15 6-6 6 6" /></svg>
          <span className="sr-only">Upvote request title that names the idea, </span>
          <span className="text-sm font-semibold tabular-nums">128</span>
          <span className="sr-only"> votes</span>
        </button>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-neutral-900">Request title that names the idea</p>
          <p className="mt-1 text-xs text-neutral-500">24 comments · Planned</p>
        </div>
      </li>
      <li className="flex items-center gap-4 p-4">
        <button type="button" aria-pressed="false" className="flex h-14 w-12 shrink-0 flex-col items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 aria-pressed:border-neutral-900 aria-pressed:bg-neutral-900 aria-pressed:text-white aria-pressed:hover:bg-neutral-700 forced-colors:aria-pressed:border-[Highlight] forced-colors:aria-pressed:bg-[Highlight] forced-colors:aria-pressed:text-[HighlightText]">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m6 15 6-6 6 6" /></svg>
          <span className="sr-only">Upvote second request title, </span>
          <span className="text-sm font-semibold tabular-nums">42</span>
          <span className="sr-only"> votes</span>
        </button>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-neutral-900">Second request title</p>
          <p className="mt-1 text-xs text-neutral-500">9 comments · Under review</p>
        </div>
      </li>
      <li className="flex items-center gap-4 p-4">
        <button type="button" aria-pressed="false" className="flex h-14 w-12 shrink-0 flex-col items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 aria-pressed:border-neutral-900 aria-pressed:bg-neutral-900 aria-pressed:text-white aria-pressed:hover:bg-neutral-700 forced-colors:aria-pressed:border-[Highlight] forced-colors:aria-pressed:bg-[Highlight] forced-colors:aria-pressed:text-[HighlightText]">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m6 15 6-6 6 6" /></svg>
          <span className="sr-only">Upvote third request title, </span>
          <span className="text-sm font-semibold tabular-nums">17</span>
          <span className="sr-only"> votes</span>
        </button>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-neutral-900">Third request title</p>
          <p className="mt-1 text-xs text-neutral-500">3 comments · Open</p>
        </div>
      </li>
    </ul>
  )
}
