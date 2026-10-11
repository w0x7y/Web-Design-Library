export default function InputsDimensionPair() {
  return (
    <fieldset className="w-72 text-neutral-900 sm:w-96"><legend className="mb-3 text-sm font-semibold">Dimensions</legend>
    <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-3"><div className="min-w-0"><label className="mb-1.5 block text-sm font-medium" htmlFor="inputs-dimension-pair-width">Width</label>
    <input className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 tabular-nums" id="inputs-dimension-pair-width" name="width" type="number" min="1" defaultValue="1280" aria-describedby="inputs-dimension-pair-hint" /></div>
    <span className="flex h-10 items-center text-sm text-neutral-500" aria-hidden="true">x</span>
    <div className="min-w-0"><label className="mb-1.5 block text-sm font-medium" htmlFor="inputs-dimension-pair-height">Height</label>
    <input className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 tabular-nums" id="inputs-dimension-pair-height" name="height" type="number" min="1" defaultValue="720" aria-describedby="inputs-dimension-pair-hint" /></div></div>
    <div className="mt-3 flex items-center justify-between gap-3"><label className="flex items-center gap-2 text-xs text-neutral-600"><input className="size-4 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" type="checkbox" name="lock-proportions" defaultChecked aria-describedby="inputs-dimension-pair-hint" />Lock proportions</label>
    <div className="flex items-center gap-2"><label className="text-xs text-neutral-500" htmlFor="inputs-dimension-pair-units">Units</label>
    <select className="h-9 w-16 rounded-md border border-neutral-300 bg-white px-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" id="inputs-dimension-pair-units" name="units" aria-describedby="inputs-dimension-pair-hint"><option>px</option>
    <option>cm</option></select></div></div>
    <p className="mt-2 text-xs text-neutral-500" id="inputs-dimension-pair-hint">Enter positive values for both dimensions.</p></fieldset>
  )
}
