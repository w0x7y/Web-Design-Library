export default function DropdownsMicrochipBins() {
  return (
    <div className="w-72 sm:w-80 relative overflow-hidden rounded-2xl bg-emerald-100 p-4 text-emerald-950">
      <span aria-hidden="true" className="pointer-events-none absolute -top-8 right-8 h-96 w-12 rotate-12 bg-emerald-300/60" />
      <p className="relative mb-3 flex items-center justify-between text-xs font-semibold"><span>DIELEDGER</span><span className="font-mono text-[10px] font-normal">TRAY / 07</span></p>
      <details open className="group relative rounded-xl border border-white bg-white/70 p-3 backdrop-blur-lg">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current text-sm font-semibold">
          <span>Select a packing bin</span>
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 shrink-0 group-open:rotate-180">
            <path d="m4 6 4 4 4-4" />
          </svg>
        </summary>
        <p className="mt-2 text-[10px] text-emerald-800">LOT C7-104 · 4 × 4 mm · Tested dies</p>
        <fieldset aria-describedby="dropdowns-microchip-bins-note" className="mt-3 grid grid-cols-2 gap-2">
          <legend className="sr-only">Packing bin</legend>
          <label className="flex cursor-pointer items-center gap-2 rounded-md border border-emerald-800/40 bg-white/60 p-2 has-checked:border-emerald-800 has-checked:bg-emerald-100">
            <input type="radio" name="dropdowns-microchip-bins-bin" value="A1" aria-label="Bin A1, 640 dies" className="size-3 shrink-0 accent-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span><span className="block font-mono text-xs font-medium">A1</span><span className="block text-[10px] text-emerald-800">640 dies</span></span>
          </label>
          <label className="flex cursor-pointer items-center gap-2 rounded-md border border-emerald-800/40 bg-white/60 p-2 has-checked:border-emerald-800 has-checked:bg-emerald-100">
            <input type="radio" name="dropdowns-microchip-bins-bin" value="A2" aria-label="Bin A2, 620 dies" defaultChecked className="size-3 shrink-0 accent-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span><span className="block font-mono text-xs font-medium">A2</span><span className="block text-[10px] text-emerald-800">620 dies</span></span>
          </label>
          <label className="flex cursor-pointer items-center gap-2 rounded-md border border-emerald-800/40 bg-white/60 p-2 has-checked:border-emerald-800 has-checked:bg-emerald-100">
            <input type="radio" name="dropdowns-microchip-bins-bin" value="B1" aria-label="Bin B1, 640 dies" className="size-3 shrink-0 accent-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span><span className="block font-mono text-xs font-medium">B1</span><span className="block text-[10px] text-emerald-800">640 dies</span></span>
          </label>
          <label className="flex cursor-pointer items-center gap-2 rounded-md border border-emerald-800/40 bg-white/60 p-2 has-checked:border-emerald-800 has-checked:bg-emerald-100">
            <input type="radio" name="dropdowns-microchip-bins-bin" value="B2" aria-label="Bin B2, 600 dies" className="size-3 shrink-0 accent-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span><span className="block font-mono text-xs font-medium">B2</span><span className="block text-[10px] text-emerald-800">600 dies</span></span>
          </label>
          <label className="flex cursor-pointer items-center gap-2 rounded-md border border-emerald-800/40 bg-white/60 p-2 has-checked:border-emerald-800 has-checked:bg-emerald-100">
            <input type="radio" name="dropdowns-microchip-bins-bin" value="C1" aria-label="Bin C1, 580 dies" className="size-3 shrink-0 accent-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span><span className="block font-mono text-xs font-medium">C1</span><span className="block text-[10px] text-emerald-800">580 dies</span></span>
          </label>
          <label className="flex cursor-pointer items-center gap-2 rounded-md border border-emerald-800/40 bg-white/60 p-2 has-checked:border-emerald-800 has-checked:bg-emerald-100">
            <input type="radio" name="dropdowns-microchip-bins-bin" value="C2" aria-label="Bin C2, 640 dies" className="size-3 shrink-0 accent-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span><span className="block font-mono text-xs font-medium">C2</span><span className="block text-[10px] text-emerald-800">640 dies</span></span>
          </label>
        </fieldset>
        <p id="dropdowns-microchip-bins-note" className="mt-3 border-t border-emerald-800/30 pt-2 text-[10px] leading-4 text-emerald-800">ESD-safe tray. Keep lot labels attached until final packing.</p>
      </details>
    </div>
  )
}
