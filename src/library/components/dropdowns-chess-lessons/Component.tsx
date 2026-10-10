// Fonts: DM Mono (https://fonts.google.com/specimen/DM+Mono)
export default function DropdownsChessLessons() {
  return (
    <div className="w-72 sm:w-80 rounded-lg border border-neutral-600 bg-neutral-900 p-5 text-neutral-100 scheme-dark font-['DM_Mono',ui-sans-serif,system-ui,sans-serif]">
      <p className="mb-4 text-[10px] tracking-wide text-amber-200 uppercase">Knightpath / Coaching</p>
      <details open className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current pb-4 text-sm">
          <span>Find your lesson level</span>
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 shrink-0 group-open:rotate-180">
            <path d="m4 6 4 4 4-4" />
          </svg>
        </summary>
        <fieldset className="border-t border-neutral-600">
          <legend className="sr-only">Chess lesson level</legend>
          <label className="grid cursor-pointer grid-cols-[auto_3rem_1fr] items-center gap-3 border-b border-neutral-600 py-4 has-checked:text-amber-200">
            <input type="radio" name="dropdowns-chess-lessons-level" value="400" aria-labelledby="dropdowns-chess-lessons-400-name" aria-describedby="dropdowns-chess-lessons-400-hint" className="size-3.5 accent-amber-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" />
            <span aria-hidden="true" className="text-sm tabular-nums">400+</span>
            <span><span id="dropdowns-chess-lessons-400-name" className="block text-xs">First moves</span><span id="dropdowns-chess-lessons-400-hint" className="mt-1 block text-[10px] text-neutral-300">Piece play & mates</span></span>
          </label>
          <label className="grid cursor-pointer grid-cols-[auto_3rem_1fr] items-center gap-3 border-b border-neutral-600 py-4 has-checked:text-amber-200">
            <input type="radio" name="dropdowns-chess-lessons-level" value="900" aria-labelledby="dropdowns-chess-lessons-900-name" aria-describedby="dropdowns-chess-lessons-900-hint" defaultChecked className="size-3.5 accent-amber-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" />
            <span aria-hidden="true" className="text-sm tabular-nums">900+</span>
            <span><span id="dropdowns-chess-lessons-900-name" className="block text-xs">Club player</span><span id="dropdowns-chess-lessons-900-hint" className="mt-1 block text-[10px] text-neutral-300">Tactics & planning</span></span>
          </label>
          <label className="grid cursor-pointer grid-cols-[auto_3rem_1fr] items-center gap-3 border-b border-neutral-600 py-4 has-checked:text-amber-200">
            <input type="radio" name="dropdowns-chess-lessons-level" value="1400" aria-labelledby="dropdowns-chess-lessons-1400-name" aria-describedby="dropdowns-chess-lessons-1400-hint" className="size-3.5 accent-amber-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" />
            <span aria-hidden="true" className="text-sm tabular-nums">1400+</span>
            <span><span id="dropdowns-chess-lessons-1400-name" className="block text-xs">Tournament</span><span id="dropdowns-chess-lessons-1400-hint" className="mt-1 block text-[10px] text-neutral-300">Analysis & endings</span></span>
          </label>
        </fieldset>
        <p className="mt-4 text-[10px] leading-4 text-neutral-300">Not rated yet? Your first session includes a short skills check.</p>
      </details>
    </div>
  )
}
