export default function TogglesSwitchList() {
  return (
    <div className="w-72 rounded-lg border border-neutral-200 bg-white text-neutral-900 sm:w-[26rem]">
      <div className="border-b border-neutral-200 px-4 py-3">
        <h2 className="text-sm font-semibold">Settings title</h2>
        <p className="mt-1 text-sm text-neutral-500">Short settings guidance</p>
      </div>
      <ul role="list">
        <li className="flex items-center justify-between gap-4 px-4 py-3">
          <div>
            <label htmlFor="toggles-switch-list-updates" className="flex items-center gap-1.5 text-sm font-medium cursor-pointer">Setting name</label>
            <p id="toggles-switch-list-updates-hint" className="mt-0.5 text-xs text-neutral-500">One-line setting hint</p>
          </div>
          <label className="relative inline-flex shrink-0">
            <input id="toggles-switch-list-updates" type="checkbox" role="switch" aria-label="Setting name" aria-describedby="toggles-switch-list-updates-hint" defaultChecked className="peer sr-only focus-visible:outline-hidden" />
            <span aria-hidden="true" className="cursor-pointer relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-neutral-300 bg-neutral-200 p-px transition-colors peer-checked:bg-neutral-900 peer-checked:[&>span]:translate-x-5 peer-enabled:hover:bg-neutral-300 peer-checked:peer-enabled:hover:bg-neutral-700 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 forced-colors:border-[ButtonText]"><span className="size-5 rounded-full bg-white shadow-sm transition-transform motion-reduce:transition-none forced-colors:bg-[CanvasText]" /></span>
          </label>
        </li>
        <li className="border-t border-neutral-200 flex items-center justify-between gap-4 px-4 py-3">
          <div>
            <label htmlFor="toggles-switch-list-reminders" className="flex items-center gap-1.5 text-sm font-medium cursor-pointer">Preference label</label>
            <p id="toggles-switch-list-reminders-hint" className="mt-0.5 text-xs text-neutral-500">Purpose of this preference</p>
          </div>
          <label className="relative inline-flex shrink-0">
            <input id="toggles-switch-list-reminders" type="checkbox" role="switch" aria-label="Preference label" aria-describedby="toggles-switch-list-reminders-hint" className="peer sr-only focus-visible:outline-hidden" />
            <span aria-hidden="true" className="cursor-pointer relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-neutral-300 bg-neutral-200 p-px transition-colors peer-checked:bg-neutral-900 peer-checked:[&>span]:translate-x-5 peer-enabled:hover:bg-neutral-300 peer-checked:peer-enabled:hover:bg-neutral-700 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 forced-colors:border-[ButtonText]"><span className="size-5 rounded-full bg-white shadow-sm transition-transform motion-reduce:transition-none forced-colors:bg-[CanvasText]" /></span>
          </label>
        </li>
        <li className="border-t border-neutral-200 flex items-center justify-between gap-4 px-4 py-3">
          <div>
            <label htmlFor="toggles-switch-list-summary" className="flex items-center gap-1.5 text-sm font-medium cursor-pointer">Option title</label>
            <p id="toggles-switch-list-summary-hint" className="mt-0.5 text-xs text-neutral-500">Short option description</p>
          </div>
          <label className="relative inline-flex shrink-0">
            <input id="toggles-switch-list-summary" type="checkbox" role="switch" aria-label="Option title" aria-describedby="toggles-switch-list-summary-hint" defaultChecked className="peer sr-only focus-visible:outline-hidden" />
            <span aria-hidden="true" className="cursor-pointer relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-neutral-300 bg-neutral-200 p-px transition-colors peer-checked:bg-neutral-900 peer-checked:[&>span]:translate-x-5 peer-enabled:hover:bg-neutral-300 peer-checked:peer-enabled:hover:bg-neutral-700 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 forced-colors:border-[ButtonText]"><span className="size-5 rounded-full bg-white shadow-sm transition-transform motion-reduce:transition-none forced-colors:bg-[CanvasText]" /></span>
          </label>
        </li>
        <li className="border-t border-neutral-200 flex items-center justify-between gap-4 px-4 py-3">
          <div className="opacity-50">
            <label htmlFor="toggles-switch-list-managed" className="flex items-center gap-1.5 text-sm font-medium cursor-not-allowed"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5"><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>Locked setting</label>
            <p id="toggles-switch-list-managed-hint" className="mt-0.5 text-xs text-neutral-500">Managed by an admin</p>
          </div>
          <label className="relative inline-flex shrink-0">
            <input id="toggles-switch-list-managed" type="checkbox" role="switch" aria-label="Locked setting" aria-describedby="toggles-switch-list-managed-hint" disabled className="peer sr-only focus-visible:outline-hidden" />
            <span aria-hidden="true" className="cursor-pointer relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-neutral-300 bg-neutral-200 p-px transition-colors peer-checked:bg-neutral-900 peer-checked:[&>span]:translate-x-5 peer-enabled:hover:bg-neutral-300 peer-checked:peer-enabled:hover:bg-neutral-700 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 forced-colors:border-[ButtonText]"><span className="size-5 rounded-full bg-white shadow-sm transition-transform motion-reduce:transition-none forced-colors:bg-[CanvasText]" /></span>
          </label>
        </li>
      </ul>
    </div>
  )
}

