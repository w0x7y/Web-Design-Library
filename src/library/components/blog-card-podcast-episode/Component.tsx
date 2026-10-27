export default function BlogCardPodcastEpisode() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-[22rem]">
      <header className="flex items-start gap-4">
        <div role="img" aria-label="Image placeholder: square show cover art" className="flex size-20 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-xs text-neutral-500">Show name · Episode 42</p>
          <h3 className="mt-1 text-base font-semibold"><a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Episode title that names the conversation topic</a></h3>
        </div>
      </header>
      <p className="mt-4 text-sm text-neutral-600">Show-notes excerpt that names the guest and the main questions the episode covers.</p>
      <footer className="mt-5 flex items-center justify-between gap-3">
        <button type="button" aria-label="Play episode 42" className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m9 6 9 6-9 6V6Z" /></svg>
          Play episode
        </button>
        <p className="text-right text-xs text-neutral-500">
          <span className="block font-medium text-neutral-900">42 min</span>
          <time dateTime="2026-10-10">Oct 10, 2026</time>
        </p>
      </footer>
    </article>
  )
}
