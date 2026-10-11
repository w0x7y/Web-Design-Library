export default function TogglesRadioCards() {
  return (
    <fieldset className="w-72 text-neutral-900 sm:w-[36rem]">
      <legend className="text-sm font-semibold">Plan selection</legend>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <label className="group relative flex cursor-pointer items-center gap-3 rounded-lg border border-neutral-300 bg-white p-4 transition-colors has-checked:border-neutral-900 has-checked:ring-1 has-checked:ring-neutral-900 has-enabled:hover:border-neutral-400 has-checked:has-enabled:hover:border-neutral-900 has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 sm:flex-col sm:items-start sm:gap-0 forced-colors:border-[ButtonText] forced-colors:has-checked:border-[Highlight]">
          <input type="radio" name="toggles-radio-cards-plan" value="1" aria-describedby="toggles-radio-cards-description-1" defaultChecked className="sr-only focus-visible:outline-hidden" />
          <span aria-hidden="true" className="flex size-4 shrink-0 items-center justify-center rounded-full border border-neutral-300 group-has-checked:border-neutral-900 forced-colors:border-[ButtonText]">
            <span className="size-1.5 rounded-full bg-neutral-900 opacity-0 group-has-checked:opacity-100 forced-colors:bg-[CanvasText]" />
          </span>
          <span className="min-w-0 sm:mt-3">
            <span className="block text-sm font-semibold">Plan name</span>
            <span id="toggles-radio-cards-description-1" className="mt-1 block text-sm text-neutral-500">Description of plan scope</span>
          </span>
          <span className="ml-auto text-base font-semibold tabular-nums sm:mt-4 sm:ml-0">$29</span>
        </label>
        <label className="group relative flex cursor-pointer items-center gap-3 rounded-lg border border-neutral-300 bg-white p-4 transition-colors has-checked:border-neutral-900 has-checked:ring-1 has-checked:ring-neutral-900 has-enabled:hover:border-neutral-400 has-checked:has-enabled:hover:border-neutral-900 has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 sm:flex-col sm:items-start sm:gap-0 forced-colors:border-[ButtonText] forced-colors:has-checked:border-[Highlight]">
          <input type="radio" name="toggles-radio-cards-plan" value="2" aria-describedby="toggles-radio-cards-description-2" className="sr-only focus-visible:outline-hidden" />
          <span aria-hidden="true" className="flex size-4 shrink-0 items-center justify-center rounded-full border border-neutral-300 group-has-checked:border-neutral-900 forced-colors:border-[ButtonText]">
            <span className="size-1.5 rounded-full bg-neutral-900 opacity-0 group-has-checked:opacity-100 forced-colors:bg-[CanvasText]" />
          </span>
          <span className="min-w-0 sm:mt-3">
            <span className="block text-sm font-semibold">Plan label</span>
            <span id="toggles-radio-cards-description-2" className="mt-1 block text-sm text-neutral-500">Summary of included access</span>
          </span>
          <span className="ml-auto text-base font-semibold tabular-nums sm:mt-4 sm:ml-0">$59</span>
        </label>
        <label className="group relative flex cursor-pointer items-center gap-3 rounded-lg border border-neutral-300 bg-white p-4 transition-colors has-checked:border-neutral-900 has-checked:ring-1 has-checked:ring-neutral-900 has-enabled:hover:border-neutral-400 has-checked:has-enabled:hover:border-neutral-900 has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 sm:flex-col sm:items-start sm:gap-0 forced-colors:border-[ButtonText] forced-colors:has-checked:border-[Highlight]">
          <input type="radio" name="toggles-radio-cards-plan" value="3" aria-describedby="toggles-radio-cards-description-3" disabled className="sr-only focus-visible:outline-hidden" />
          <span aria-hidden="true" className="flex size-4 shrink-0 items-center justify-center rounded-full border border-neutral-300 group-has-checked:border-neutral-900 forced-colors:border-[ButtonText]">
            <span className="size-1.5 rounded-full bg-neutral-900 opacity-0 group-has-checked:opacity-100 forced-colors:bg-[CanvasText]" />
          </span>
          <span className="min-w-0 sm:mt-3">
            <span className="block text-sm font-semibold">Plan title</span>
            <span id="toggles-radio-cards-description-3" className="mt-1 block text-sm text-neutral-500">Details of available options</span>
          </span>
          <span className="ml-auto text-base font-semibold tabular-nums sm:mt-4 sm:ml-0">$99</span>
        </label>
      </div>
    </fieldset>
  )
}

