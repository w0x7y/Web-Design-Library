export default function TogglesSwitchDependentOptions() {
  return (
    <div className="group w-72 text-neutral-900 sm:w-96"><div className="flex items-center justify-between gap-4"><div><label className="block cursor-pointer text-sm font-semibold" htmlFor="toggles-switch-dependent-options-enabled">Enable summaries</label>
    <p className="mt-1 text-xs text-neutral-500" id="toggles-switch-dependent-options-hint">Control summary delivery.</p></div>
    <label className="relative inline-flex shrink-0"><input className="peer sr-only focus-visible:outline-hidden" id="toggles-switch-dependent-options-enabled" name="toggles-switch-dependent-options-enabled" type="checkbox" role="switch" aria-label="Enable summaries" aria-describedby="toggles-switch-dependent-options-hint" defaultChecked />
    <span className="relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full border border-neutral-300 bg-neutral-200 p-px peer-checked:bg-neutral-900 peer-checked:[&>span]:translate-x-5 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900 forced-colors:border-[ButtonText]" aria-hidden="true"><span className="size-5 rounded-full bg-white forced-colors:bg-[CanvasText]"></span></span></label></div>
    <fieldset className="mt-4 hidden rounded-lg border border-neutral-200 bg-neutral-50 p-4 group-has-[#toggles-switch-dependent-options-enabled:checked]:block"><legend className="px-1 text-xs font-medium text-neutral-600">Delivery choices</legend>
    <div className="grid gap-3"><label className="flex cursor-pointer items-center gap-2 text-sm text-neutral-600"><input className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" type="checkbox" name="daily" aria-describedby="toggles-switch-dependent-options-hint" defaultChecked />Daily summary</label>
    <label className="flex cursor-pointer items-center gap-2 text-sm text-neutral-600"><input className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" type="checkbox" name="weekly" aria-describedby="toggles-switch-dependent-options-hint"  />Weekly summary</label></div>
    <p className="mt-3 text-xs text-neutral-500">Choose one or both delivery intervals.</p></fieldset></div>
  )
}
