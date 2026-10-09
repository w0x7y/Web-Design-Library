export default function StatCardSupportQueue() {
  return (
    <article className="w-72 rounded-[1.5rem] bg-violet-100 p-5 text-violet-950 sm:w-80">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold">A little help needed</h2>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="size-6"
        >
          <path d="M7 4h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-5l-5 4v-4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z" />
          <path d="M8 9h8m-8 4h5" />
        </svg>
      </div>
      <p className="mt-5 text-5xl font-semibold tracking-tight tabular-nums">
        12
      </p>
      <p className="mt-1 text-xs text-violet-800">
        Conversations waiting for a reply
      </p>
      <dl className="mt-5 space-y-2 text-xs">
        <div className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-2">
          <dt className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-rose-600"
            />
            Urgent
          </dt>
          <dd className="font-semibold">2</dd>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-2">
          <dt className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-amber-500"
            />
            Normal
          </dt>
          <dd className="font-semibold">7</dd>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-2">
          <dt className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-violet-500"
            />
            Low
          </dt>
          <dd className="font-semibold">3</dd>
        </div>
      </dl>
      <p className="mt-4 text-[11px] text-violet-800">
        <span className="font-semibold">18 min</span> average first response
        today
      </p>
    </article>
  )
}
