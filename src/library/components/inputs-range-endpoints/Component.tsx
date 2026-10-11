export default function InputsRangeEndpoints() {
  return (
    <fieldset className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-96"><legend className="px-1 text-sm font-semibold">Item limit</legend>
    <div className="flex items-start gap-4"><div className="min-w-0 flex-1"><label className="mb-2 block text-xs text-neutral-500" htmlFor="inputs-range-endpoints-range">Adjust limit</label>
    <input className="block h-8 w-full accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" id="inputs-range-endpoints-range" name="limit-range" type="range" min="0" max="100" defaultValue="50" aria-describedby="inputs-range-endpoints-hint" />
    <div className="flex justify-between text-xs tabular-nums text-neutral-500"><span>0</span>
    <span>100</span></div></div>
    <div className="w-20 shrink-0"><label className="mb-2 block text-xs text-neutral-500" htmlFor="inputs-range-endpoints-number">Exact limit</label>
    <input className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 tabular-nums" id="inputs-range-endpoints-number" name="limit-number" type="number" min="0" max="100" defaultValue="50" aria-describedby="inputs-range-endpoints-hint" /></div></div>
    <p className="mt-3 text-xs text-neutral-500" id="inputs-range-endpoints-hint">Choose a value from 0 to 100.</p></fieldset>
  )
}
