// Fonts: Syne (https://fonts.google.com/specimen/Syne)
export default function EmptyStateFamilyChores() {
  return (
    <section
      aria-labelledby="empty-state-family-chores-title"
      className="w-72 rounded-tr-[2.5rem] rounded-bl-[2.5rem] border-2 border-fuchsia-950 bg-pink-100 p-5 text-fuchsia-950 sm:w-96 font-['Syne',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <header className="flex items-center justify-between text-sm font-bold">
        <p>Nestshift</p>
        <span className="text-[0.625rem] tracking-wider">OUR HOUSE</span>
      </header>
      <div className="my-5 flex items-center gap-4">
        <div aria-hidden="true" className="grid flex-1 gap-4 border-2 border-fuchsia-950 bg-white p-4">
          <span className="flex items-center gap-3"><span className="size-4 border-2 border-fuchsia-950"></span><span className="h-0.5 flex-1 bg-fuchsia-950"></span></span>
          <span className="flex items-center gap-3"><span className="size-4 border-2 border-fuchsia-950"></span><span className="h-0.5 flex-1 bg-fuchsia-950"></span></span>
        </div>
        <span className="text-xs leading-4 font-bold">NOT<br />JUST<br />YOUR<br />JOB.</span>
      </div>
      <h2 id="empty-state-family-chores-title" className="text-xl leading-6 font-bold">Share the small stuff.</h2>
      <p className="mt-3 text-xs leading-5">No chores on the board yet. Add the first one, then decide who’s taking a turn.</p>
      <a href="#" className="mt-5 inline-flex min-h-11 items-center border-2 border-fuchsia-950 bg-fuchsia-950 px-3 text-xs font-bold text-pink-100 cursor-pointer hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Add a household chore →</a>
    </section>
  )
}
