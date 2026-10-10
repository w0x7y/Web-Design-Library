// Fonts: Space Mono
export default function ProfileCardStageRigger() {
  return (
    <article className="w-72 border-2 border-zinc-950 bg-zinc-100 font-['Space_Mono',ui-sans-serif,system-ui,sans-serif] text-zinc-950 sm:w-80">
      <p className="border-b-2 border-zinc-950 p-3 text-[10px] font-bold uppercase tracking-wider">Loadstone Rigging</p>
      <div className="grid grid-cols-[4.5rem_1fr] border-b-2 border-zinc-950">
        <div className="flex flex-col justify-center border-r-2 border-zinc-950 px-3">
          <span className="text-4xl leading-none font-bold text-red-700">L3</span>
          <span className="mt-2 text-[9px] tracking-wider">IRATA</span>
        </div>
        <div className="p-4">
          <h2 className="text-lg leading-6 font-bold">Aya<br />Okonkwo</h2>
          <p className="mt-2 text-xs">Rigging lead</p>
        </div>
      </div>
      <dl className="px-3 text-xs">
        <div className="flex justify-between gap-2 border-b border-zinc-400 py-3 last:border-b-0">
          <dt className="text-[10px] uppercase text-zinc-600">Scope</dt>
          <dd>Arenas &amp; festivals</dd>
        </div>
        <div className="flex justify-between gap-2 border-b border-zinc-400 py-3 last:border-b-0">
          <dt className="text-[10px] uppercase text-zinc-600">Base</dt>
          <dd>Rotterdam, NL</dd>
        </div>
      </dl>
      <a href="#aya-production" aria-label="Check Aya Okonkwo's availability for a production" className="flex items-center justify-between gap-2 border-t-2 border-zinc-950 p-4 text-xs font-bold hover:bg-zinc-950 hover:text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700">
        Check crew availability
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 shrink-0">
          <path d="M4 10h12m-5-5 5 5-5 5" />
        </svg>
      </a>
    </article>
  )
}
