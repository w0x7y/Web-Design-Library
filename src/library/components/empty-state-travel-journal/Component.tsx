// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function EmptyStateTravelJournal() {
  return (
    <section
      aria-labelledby="empty-state-travel-journal-title"
      className="flex w-72 bg-sky-50 text-slate-900 sm:w-96 font-['Newsreader',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <figure className="w-20 shrink-0 border-r border-sky-200">
        <img
          className="h-48 w-full object-cover"
          src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1600&q=80"
          alt="Colorful buildings above a small Italian coastal harbor"
          width={1600}
          height={2409}
        />
        <figcaption className="px-2 py-3 text-[0.625rem] italic">Somewhere new</figcaption>
      </figure>
      <div className="px-5 py-6">
        <p className="text-[0.6875rem] text-slate-600">Roamfolio / your journal</p>
        <h2 id="empty-state-travel-journal-title" className="mt-5 text-[2rem] leading-none">No days<br />written yet.</h2>
        <p className="mt-4 text-sm leading-5 text-slate-700">A place, a small detail, a photo. Start with what you remember.</p>
        <a href="#" className="mt-5 inline-block text-sm font-semibold underline-offset-4 cursor-pointer hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Write day one →</a>
      </div>
    </section>
  )
}
