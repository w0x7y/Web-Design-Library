export default function BadgesMediaOverlays() {
  return (
    <ul role="list" className="grid w-72 grid-cols-2 gap-x-4 gap-y-5 text-neutral-900 sm:w-[26rem]">
      <li>
        <div className="relative">
          <div role="img" aria-label="Video placeholder: live stream" className="flex aspect-video items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6 sm:size-8"><path d="m9 6 9 6-9 6V6Z" /></svg>
          </div>
          <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full border border-neutral-900 bg-neutral-900 px-2 py-0.5 text-xs font-medium text-white">
            <span aria-hidden="true" className="size-1.5 rounded-full border border-white bg-white" />
            Live
          </span>
        </div>
        <p className="mt-2 truncate text-sm font-medium">Stream title</p>
        <p className="text-xs text-neutral-500">1,204 watching</p>
      </li>
      <li>
        <div className="relative">
          <div role="img" aria-label="Video placeholder: recorded video" className="flex aspect-video items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6 sm:size-8"><path d="m9 6 9 6-9 6V6Z" /></svg>
          </div>
          <span className="absolute top-2 left-2 inline-flex items-center rounded-full border border-neutral-300 bg-white px-2 py-0.5 text-xs font-medium">New</span>
          <span className="absolute right-2 bottom-2 inline-flex items-center rounded-md bg-neutral-900/75 px-1.5 py-0.5 text-xs font-medium text-white tabular-nums"><span className="sr-only">Duration </span>12:48</span>
        </div>
        <p className="mt-2 truncate text-sm font-medium">Video title</p>
        <p className="text-xs text-neutral-500">3.4k views</p>
      </li>
      <li>
        <div className="relative">
          <div role="img" aria-label="Video placeholder: members episode" className="flex aspect-video items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6 sm:size-8"><path d="m9 6 9 6-9 6V6Z" /></svg>
          </div>
          <span className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-full border border-neutral-300 bg-white px-2 py-0.5 text-xs font-medium">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
            Members
          </span>
          <span className="absolute right-2 bottom-2 inline-flex items-center rounded-md bg-neutral-900/75 px-1.5 py-0.5 text-xs font-medium text-white tabular-nums"><span className="sr-only">Duration </span>24:10</span>
        </div>
        <p className="mt-2 truncate text-sm font-medium">Episode title</p>
        <p className="text-xs text-neutral-500">Season 2, episode 4</p>
      </li>
      <li>
        <div className="relative">
          <div role="img" aria-label="Video placeholder: scheduled premiere" className="flex aspect-video items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6 sm:size-8"><path d="m9 6 9 6-9 6V6Z" /></svg>
          </div>
          <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full border border-neutral-300 bg-white px-2 py-0.5 text-xs font-medium">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
            Upcoming
          </span>
        </div>
        <p className="mt-2 truncate text-sm font-medium">Premiere title</p>
        <p className="text-xs text-neutral-500">Starts Nov 12, 18:00</p>
      </li>
    </ul>
  )
}
