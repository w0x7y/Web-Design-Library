export default function TogglesThemePreviews() {
  return (
    <fieldset aria-describedby="toggles-theme-previews-hint" className="w-72 text-neutral-900 sm:w-[28rem]">
      <legend className="text-sm font-semibold">Theme</legend>
      <p id="toggles-theme-previews-hint" className="mt-1 text-sm text-neutral-500">System matches the setting on your device</p>
      <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-4">
        <label className="group relative cursor-pointer rounded-lg has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900">
          <input type="radio" name="toggles-theme-previews-theme" value="light" defaultChecked className="sr-only focus-visible:outline-hidden" />
          <span aria-hidden="true" className="block aspect-[4/3] overflow-hidden rounded-lg border border-neutral-300 transition-colors group-hover:border-neutral-400 group-has-checked:border-neutral-900 group-has-checked:ring-1 group-has-checked:ring-neutral-900 forced-colors:border-[ButtonText] forced-colors:group-has-checked:border-[Highlight]">
            <span className="flex h-full flex-col gap-1.5 bg-white p-2">
              <span className="h-1.5 w-1/2 rounded-full bg-neutral-300" />
              <span className="h-1.5 rounded-full bg-neutral-200" />
              <span className="h-1.5 w-2/3 rounded-full bg-neutral-200" />
              <span className="mt-auto h-2.5 w-1/3 rounded-sm bg-neutral-900" />
            </span>
          </span>
          <span className="mt-2 flex items-center gap-2 text-sm font-medium">
            <span aria-hidden="true" className="flex size-4 shrink-0 items-center justify-center rounded-full border border-neutral-300 group-has-checked:border-neutral-900 forced-colors:border-[ButtonText]">
              <span className="size-1.5 rounded-full bg-neutral-900 opacity-0 group-has-checked:opacity-100 forced-colors:bg-[CanvasText]" />
            </span>
            Light
          </span>
        </label>
        <label className="group relative cursor-pointer rounded-lg has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900">
          <input type="radio" name="toggles-theme-previews-theme" value="dark" className="sr-only focus-visible:outline-hidden" />
          <span aria-hidden="true" className="block aspect-[4/3] overflow-hidden rounded-lg border border-neutral-300 transition-colors group-hover:border-neutral-400 group-has-checked:border-neutral-900 group-has-checked:ring-1 group-has-checked:ring-neutral-900 forced-colors:border-[ButtonText] forced-colors:group-has-checked:border-[Highlight]">
            <span className="flex h-full flex-col gap-1.5 bg-neutral-900 p-2">
              <span className="h-1.5 w-1/2 rounded-full bg-neutral-500" />
              <span className="h-1.5 rounded-full bg-neutral-700" />
              <span className="h-1.5 w-2/3 rounded-full bg-neutral-700" />
              <span className="mt-auto h-2.5 w-1/3 rounded-sm bg-white" />
            </span>
          </span>
          <span className="mt-2 flex items-center gap-2 text-sm font-medium">
            <span aria-hidden="true" className="flex size-4 shrink-0 items-center justify-center rounded-full border border-neutral-300 group-has-checked:border-neutral-900 forced-colors:border-[ButtonText]">
              <span className="size-1.5 rounded-full bg-neutral-900 opacity-0 group-has-checked:opacity-100 forced-colors:bg-[CanvasText]" />
            </span>
            Dark
          </span>
        </label>
        <label className="group relative cursor-pointer rounded-lg has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900">
          <input type="radio" name="toggles-theme-previews-theme" value="system" className="sr-only focus-visible:outline-hidden" />
          <span aria-hidden="true" className="block aspect-[4/3] overflow-hidden rounded-lg border border-neutral-300 transition-colors group-hover:border-neutral-400 group-has-checked:border-neutral-900 group-has-checked:ring-1 group-has-checked:ring-neutral-900 forced-colors:border-[ButtonText] forced-colors:group-has-checked:border-[Highlight]">
            <span className="grid h-full grid-cols-2">
              <span className="flex h-full flex-col gap-1.5 bg-white p-2">
                <span className="h-1.5 w-1/2 rounded-full bg-neutral-300" />
                <span className="h-1.5 rounded-full bg-neutral-200" />
                <span className="h-1.5 w-2/3 rounded-full bg-neutral-200" />
                <span className="mt-auto h-2.5 w-1/3 rounded-sm bg-neutral-900" />
              </span>
              <span className="flex h-full flex-col gap-1.5 bg-neutral-900 p-2">
                <span className="h-1.5 w-1/2 rounded-full bg-neutral-500" />
                <span className="h-1.5 rounded-full bg-neutral-700" />
                <span className="h-1.5 w-2/3 rounded-full bg-neutral-700" />
                <span className="mt-auto h-2.5 w-1/3 rounded-sm bg-white" />
              </span>
            </span>
          </span>
          <span className="mt-2 flex items-center gap-2 text-sm font-medium">
            <span aria-hidden="true" className="flex size-4 shrink-0 items-center justify-center rounded-full border border-neutral-300 group-has-checked:border-neutral-900 forced-colors:border-[ButtonText]">
              <span className="size-1.5 rounded-full bg-neutral-900 opacity-0 group-has-checked:opacity-100 forced-colors:bg-[CanvasText]" />
            </span>
            System
          </span>
        </label>
      </div>
    </fieldset>
  )
}
