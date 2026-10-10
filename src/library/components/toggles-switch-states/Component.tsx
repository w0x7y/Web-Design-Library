export default function TogglesSwitchStates() {
  return (
    <div className="grid w-72 grid-cols-2 gap-4 text-neutral-900 sm:w-[24rem]">
      <fieldset>
        <legend className="text-xs text-neutral-500">Default · 44×24</legend>
        <div className="mt-3 grid gap-4">
          <label className="relative flex min-h-6 items-center gap-2 text-xs">
            <input type="checkbox" role="switch" aria-label="Default switch: off" className="peer sr-only focus-visible:outline-hidden" />
            <span aria-hidden="true" className="cursor-pointer relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-neutral-300 bg-neutral-200 p-px transition-colors peer-checked:bg-neutral-900 peer-checked:[&>span]:translate-x-5 peer-enabled:hover:bg-neutral-300 peer-checked:peer-enabled:hover:bg-neutral-700 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 forced-colors:border-[ButtonText]"><span className="size-5 rounded-full bg-white shadow-sm transition-transform motion-reduce:transition-none forced-colors:bg-[CanvasText]" /></span>
            <span>Off</span>
          </label>
          <label className="relative flex min-h-6 items-center gap-2 text-xs">
            <input type="checkbox" role="switch" aria-label="Default switch: on" defaultChecked className="peer sr-only focus-visible:outline-hidden" />
            <span aria-hidden="true" className="cursor-pointer relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-neutral-300 bg-neutral-200 p-px transition-colors peer-checked:bg-neutral-900 peer-checked:[&>span]:translate-x-5 peer-enabled:hover:bg-neutral-300 peer-checked:peer-enabled:hover:bg-neutral-700 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 forced-colors:border-[ButtonText]"><span className="size-5 rounded-full bg-white shadow-sm transition-transform motion-reduce:transition-none forced-colors:bg-[CanvasText]" /></span>
            <span>On</span>
          </label>
          <label className="relative flex min-h-6 items-center gap-2 text-xs">
            <input type="checkbox" role="switch" aria-label="Default switch: disabled off" disabled className="peer sr-only focus-visible:outline-hidden" />
            <span aria-hidden="true" className="cursor-pointer relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-neutral-300 bg-neutral-200 p-px transition-colors peer-checked:bg-neutral-900 peer-checked:[&>span]:translate-x-5 peer-enabled:hover:bg-neutral-300 peer-checked:peer-enabled:hover:bg-neutral-700 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 forced-colors:border-[ButtonText]"><span className="size-5 rounded-full bg-white shadow-sm transition-transform motion-reduce:transition-none forced-colors:bg-[CanvasText]" /></span>
            <span className="opacity-50">Disabled off</span>
          </label>
          <label className="relative flex min-h-6 items-center gap-2 text-xs">
            <input type="checkbox" role="switch" aria-label="Default switch: disabled on" defaultChecked disabled className="peer sr-only focus-visible:outline-hidden" />
            <span aria-hidden="true" className="cursor-pointer relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-neutral-300 bg-neutral-200 p-px transition-colors peer-checked:bg-neutral-900 peer-checked:[&>span]:translate-x-5 peer-enabled:hover:bg-neutral-300 peer-checked:peer-enabled:hover:bg-neutral-700 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 forced-colors:border-[ButtonText]"><span className="size-5 rounded-full bg-white shadow-sm transition-transform motion-reduce:transition-none forced-colors:bg-[CanvasText]" /></span>
            <span className="opacity-50">Disabled on</span>
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-xs text-neutral-500">Small · 36×20</legend>
        <div className="mt-3 grid gap-4">
          <label className="relative flex min-h-6 items-center gap-2 text-xs">
            <input type="checkbox" role="switch" aria-label="Small switch: off" className="peer sr-only focus-visible:outline-hidden" />
            <span aria-hidden="true" className="cursor-pointer relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-neutral-300 bg-neutral-200 p-px transition-colors peer-checked:bg-neutral-900 peer-checked:[&>span]:translate-x-4 peer-enabled:hover:bg-neutral-300 peer-checked:peer-enabled:hover:bg-neutral-700 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 forced-colors:border-[ButtonText]"><span className="size-4 rounded-full bg-white shadow-sm transition-transform motion-reduce:transition-none forced-colors:bg-[CanvasText]" /></span>
            <span>Off</span>
          </label>
          <label className="relative flex min-h-6 items-center gap-2 text-xs">
            <input type="checkbox" role="switch" aria-label="Small switch: on" defaultChecked className="peer sr-only focus-visible:outline-hidden" />
            <span aria-hidden="true" className="cursor-pointer relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-neutral-300 bg-neutral-200 p-px transition-colors peer-checked:bg-neutral-900 peer-checked:[&>span]:translate-x-4 peer-enabled:hover:bg-neutral-300 peer-checked:peer-enabled:hover:bg-neutral-700 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 forced-colors:border-[ButtonText]"><span className="size-4 rounded-full bg-white shadow-sm transition-transform motion-reduce:transition-none forced-colors:bg-[CanvasText]" /></span>
            <span>On</span>
          </label>
          <label className="relative flex min-h-6 items-center gap-2 text-xs">
            <input type="checkbox" role="switch" aria-label="Small switch: disabled off" disabled className="peer sr-only focus-visible:outline-hidden" />
            <span aria-hidden="true" className="cursor-pointer relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-neutral-300 bg-neutral-200 p-px transition-colors peer-checked:bg-neutral-900 peer-checked:[&>span]:translate-x-4 peer-enabled:hover:bg-neutral-300 peer-checked:peer-enabled:hover:bg-neutral-700 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 forced-colors:border-[ButtonText]"><span className="size-4 rounded-full bg-white shadow-sm transition-transform motion-reduce:transition-none forced-colors:bg-[CanvasText]" /></span>
            <span className="opacity-50">Disabled off</span>
          </label>
          <label className="relative flex min-h-6 items-center gap-2 text-xs">
            <input type="checkbox" role="switch" aria-label="Small switch: disabled on" defaultChecked disabled className="peer sr-only focus-visible:outline-hidden" />
            <span aria-hidden="true" className="cursor-pointer relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-neutral-300 bg-neutral-200 p-px transition-colors peer-checked:bg-neutral-900 peer-checked:[&>span]:translate-x-4 peer-enabled:hover:bg-neutral-300 peer-checked:peer-enabled:hover:bg-neutral-700 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 forced-colors:border-[ButtonText]"><span className="size-4 rounded-full bg-white shadow-sm transition-transform motion-reduce:transition-none forced-colors:bg-[CanvasText]" /></span>
            <span className="opacity-50">Disabled on</span>
          </label>
        </div>
      </fieldset>
    </div>
  )
}

