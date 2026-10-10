export default function BadgesRoomTurnover() {
  return (
    <section aria-label="Keyfold room turnover badges" className="w-72 rounded-lg border border-neutral-400 bg-neutral-50 p-5 text-neutral-950 sm:w-[22rem]">
      <h2 className="text-xs font-medium tracking-wide">Keyfold / Housekeeping</h2>
      <div className="mt-4 flex items-center gap-4">
        <p className="flex w-24 flex-col gap-1 border border-neutral-500 p-3"><span className="text-xs uppercase">Room</span><span className="text-3xl leading-none font-medium tabular-nums">407</span></p>
        <p className="text-xs leading-5">South wing<br />Floor 04</p>
      </div>
      <p className="mt-4 inline-flex rounded bg-neutral-950 px-3 py-1 text-xs font-medium text-white">Vacant</p>
      <fieldset aria-describedby="keyfold-check-hint" className="mt-5 flex flex-col gap-2">
        <legend className="mb-2 text-xs font-medium">Inspection badges</legend>
        <label className="flex cursor-pointer items-center gap-2 rounded-md border border-neutral-500 px-3 py-2 text-xs hover:bg-neutral-200 has-[:checked]:bg-neutral-200"><input type="checkbox" aria-label="Room 407: linen checked" aria-describedby="keyfold-check-hint" className="size-3.5 accent-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" />Linen checked</label>
        <label className="flex cursor-pointer items-center gap-2 rounded-md border border-neutral-500 px-3 py-2 text-xs hover:bg-neutral-200 has-[:checked]:bg-neutral-200"><input type="checkbox" aria-label="Room 407: minibar sealed" aria-describedby="keyfold-check-hint" className="size-3.5 accent-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" />Minibar sealed</label>
      </fieldset>
      <p id="keyfold-check-hint" className="mt-3 text-xs text-neutral-600">Tick each check after inspection.</p>
    </section>
  )
}
