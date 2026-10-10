// Fonts: Familjen Grotesk (https://fonts.google.com/specimen/Familjen+Grotesk)
export default function EmptyStatePodcastQueue() {
  return (
    <section
      aria-labelledby="empty-state-podcast-queue-title"
      className="w-72 rounded-2xl bg-linear-to-br from-stone-950 via-amber-950 to-stone-900 p-5 text-amber-100 sm:w-96 font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <header className="flex justify-between text-xs font-medium">
        <p>Nextcast</p>
        <span>UP NEXT / 0</span>
      </header>
      <div className="mt-5 rounded-xl border border-amber-200/30 bg-white/10 p-5 backdrop-blur-md">
        <svg aria-hidden="true" viewBox="0 0 200 64" fill="none" className="h-16 w-full text-amber-200">
          <path d="m82 12 38 20-38 20V12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M18 26v12m10-19v26m10-20v14m124-14v14m10-20v26m10-19v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <h2 id="empty-state-podcast-queue-title" className="mt-4 text-2xl font-semibold tracking-tight">Nothing queued.</h2>
        <p className="mt-2 text-sm leading-5 text-amber-100">Save an episode for the walk home. It’ll be waiting right here.</p>
        <a href="#" className="mt-4 inline-flex h-10 items-center rounded-md bg-amber-200 px-3 text-xs font-semibold text-stone-950 cursor-pointer hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Find an episode →</a>
      </div>
      <p className="mt-3 text-[0.6875rem] text-amber-200">Your queue, at your pace.</p>
    </section>
  )
}
