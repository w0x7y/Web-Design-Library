// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function ProfileCardGlass() {
  return (
    <article className="relative isolate w-72 overflow-hidden rounded-3xl bg-linear-to-tr from-emerald-950 via-emerald-900 to-teal-700 p-5 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-white antialiased sm:w-[22rem] sm:p-6">
      <div aria-hidden="true" className="absolute -top-24 -left-20 -z-10 size-64 rounded-full bg-lime-300/30 blur-3xl" />
      <div
        aria-hidden="true"
        className="absolute top-2 -right-1 -z-10 size-24 rounded-full bg-linear-to-br from-amber-200 to-orange-400 sm:right-0 sm:size-28"
      />

      <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-center shadow-[0_24px_48px_-16px_rgb(0_44_34/0.6)] backdrop-blur-xl sm:p-6">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
          alt="Clara Ibsen"
          width={400}
          height={599}
          className="mx-auto size-16 rounded-full object-cover object-top ring-2 ring-white/60"
        />

        <h2 className="mt-3 flex items-center justify-center gap-1.5 text-lg font-semibold">
          Clara Ibsen
          <svg role="img" aria-label="Verified account" viewBox="0 0 20 20" fill="currentColor" className="size-4.5 text-amber-300">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
              clipRule="evenodd"
            />
          </svg>
        </h2>
        <p className="text-sm text-emerald-100">Landscape photographer, Oslo</p>

        <dl className="mt-5 grid grid-cols-3 border-y border-white/15 py-3">
          <div className="flex flex-col-reverse">
            <dt className="text-xs text-emerald-100">Photos</dt>
            <dd className="text-lg font-semibold tabular-nums">1.2k</dd>
          </div>
          <div className="flex flex-col-reverse">
            <dt className="text-xs text-emerald-100">Followers</dt>
            <dd className="text-lg font-semibold tabular-nums">48.2k</dd>
          </div>
          <div className="flex flex-col-reverse">
            <dt className="text-xs text-emerald-100">Following</dt>
            <dd className="text-lg font-semibold tabular-nums">312</dd>
          </div>
        </dl>

        <div className="mt-5 flex gap-2.5">
          <button
            type="button"
            className="inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full bg-white text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="size-4">
              <path d="M8 3.5v9M3.5 8h9" />
            </svg>
            Follow
          </button>
          <button
            type="button"
            aria-label="Message Clara"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/30 bg-white/10 transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="size-5">
              <path d="M6.5 3h7A2.5 2.5 0 0 1 16 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-4L6 16v-3h.5A2.5 2.5 0 0 1 4 10.5v-5A2.5 2.5 0 0 1 6.5 3Z" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}
