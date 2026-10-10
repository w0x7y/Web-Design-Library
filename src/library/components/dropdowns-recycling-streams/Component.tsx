// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function DropdownsRecyclingStreams() {
  return (
    <div className="w-72 sm:w-80 border-2 border-neutral-400 bg-neutral-950 p-4 text-neutral-50 scheme-dark font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif]">
      <p className="mb-4 flex items-center justify-between text-[10px] tracking-wide uppercase"><span>SORTYARD</span><span>DEPOT / 03</span></p>
      <details open className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current border-b-2 border-green-300 pb-3 text-xl font-bold">
          <span>Intake streams</span>
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 shrink-0 group-open:rotate-180">
            <path d="m4 6 4 4 4-4" />
          </svg>
        </summary>
        <fieldset aria-describedby="dropdowns-recycling-streams-note" className="mt-3 grid gap-1">
          <legend className="sr-only">Accepted materials</legend>
          <label className="flex cursor-pointer items-center gap-3 border border-neutral-600 px-3 py-3 has-checked:bg-green-300 has-checked:text-neutral-950">
            <input type="checkbox" name="dropdowns-recycling-streams-material" value="PAP 21" aria-label="Accept paper & card" defaultChecked className="size-4 shrink-0 accent-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span className="flex-1 text-xs font-semibold">Paper & card</span><span aria-hidden="true" className="font-mono text-[10px]">PAP 21</span>
          </label>
          <label className="flex cursor-pointer items-center gap-3 border border-neutral-600 px-3 py-3 has-checked:bg-green-300 has-checked:text-neutral-950">
            <input type="checkbox" name="dropdowns-recycling-streams-material" value="GL 70" aria-label="Accept clear glass" className="size-4 shrink-0 accent-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span className="flex-1 text-xs font-semibold">Clear glass</span><span aria-hidden="true" className="font-mono text-[10px]">GL 70</span>
          </label>
          <label className="flex cursor-pointer items-center gap-3 border border-neutral-600 px-3 py-3 has-checked:bg-green-300 has-checked:text-neutral-950">
            <input type="checkbox" name="dropdowns-recycling-streams-material" value="ALU 41" aria-label="Accept aluminium" defaultChecked className="size-4 shrink-0 accent-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span className="flex-1 text-xs font-semibold">Aluminium</span><span aria-hidden="true" className="font-mono text-[10px]">ALU 41</span>
          </label>
          <label className="flex cursor-pointer items-center gap-3 border border-neutral-600 px-3 py-3 has-checked:bg-green-300 has-checked:text-neutral-950">
            <input type="checkbox" name="dropdowns-recycling-streams-material" value="PET 01" aria-label="Accept pet bottles" className="size-4 shrink-0 accent-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span className="flex-1 text-xs font-semibold">PET bottles</span><span aria-hidden="true" className="font-mono text-[10px]">PET 01</span>
          </label>
        </fieldset>
        <p id="dropdowns-recycling-streams-note" className="mt-3 text-[10px] leading-4 text-neutral-300">Clean, dry material only. Batteries and chemical containers use the separate intake desk.</p>
      </details>
    </div>
  )
}
