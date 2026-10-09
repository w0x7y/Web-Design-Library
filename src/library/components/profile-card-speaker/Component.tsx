export default function ProfileCardSpeaker() {
  return (
    <article className="w-72 border-2 border-black bg-yellow-300 text-black sm:w-80">
      <div className="flex items-center justify-between border-b-2 border-black px-4 py-2 font-mono text-[11px] uppercase tracking-wider">
        <span>Assembly / 2026</span>
        <span>Speaker 08</span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-2xl font-black leading-none tracking-tight">
            NOOR
            <br />
            HASSAN
          </h2>
          <span aria-hidden="true" className="font-mono text-3xl">
            ↗
          </span>
        </div>
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider">
          Design director, Tandem
        </p>
        <div className="mt-3 border-t-2 border-black pt-3">
          <p className="text-base font-bold leading-5">
            Make room for the unfinished.
          </p>
          <p className="mt-2 font-mono text-xs">22 OCT · 14:30 · HALL B</p>
        </div>
        <a
          href="#noor-session"
          className="mt-3 block border-2 border-black bg-white px-3 py-2 text-center text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          View session
        </a>
      </div>
    </article>
  )
}
