// Fonts: Familjen Grotesk
export default function ProfileCardBowlingCaptain() {
  return (
    <article className="w-72 rounded-[20px] bg-cyan-100 p-5 font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif] text-cyan-950 sm:w-80">
      <p className="text-xs font-semibold">Tallypin / Tuesday league</p>
      <svg aria-hidden="true" viewBox="0 0 248 32" fill="none" className="mt-4 h-8 w-full">
        <path d="M0 4h248M0 28h248" className="stroke-orange-500 stroke-[4]" />
        <path d="m210 11 3 5-3 5m8-10 3 5-3 5m8-10 3 5-3 5" className="stroke-cyan-950 stroke-2" />
        <path d="M12 16h166" className="stroke-cyan-950/30 stroke-1 [stroke-dasharray:4_4]" />
      </svg>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl leading-[30px] font-bold">Remy Lane</h2>
          <p className="mt-1 text-xs">Captain, The Sidewinders</p>
        </div>
        <span aria-label="Jersey number 17" className="text-[40px] leading-none font-bold text-orange-800">17</span>
      </div>
      <dl className="mt-5 grid grid-cols-2 gap-3 rounded-lg bg-white p-3">
        <div>
          <dt className="text-[10px] uppercase tracking-wide">Season average</dt>
          <dd className="mt-1 text-xl font-semibold tabular-nums">184</dd>
        </div>
        <div>
          <dt className="text-[10px] uppercase tracking-wide">Games bowled</dt>
          <dd className="mt-1 text-xl font-semibold tabular-nums">24</dd>
        </div>
      </dl>
      <label className="mt-5 flex cursor-pointer items-center gap-2 text-xs font-medium hover:underline">
        <input type="checkbox" name="save-remy" className="size-4 cursor-pointer accent-cyan-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-950" />
        Save Remy to my roster
      </label>
    </article>
  )
}
