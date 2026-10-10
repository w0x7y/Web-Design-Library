export default function SettingsAppearanceStudio() {
  return (
    <section className="bg-stone-100 px-6 py-10 text-stone-950 sm:px-12">
      <form
        className="mx-auto max-w-2xl rounded-xl border border-stone-200 bg-white p-6 sm:p-8"
        action="#"
      >
        <h2 className="text-2xl font-semibold tracking-tight">
          Make it feel like yours
        </h2>
        <p className="mt-2 text-sm text-stone-600">
          Choose the look of your canvas.
        </p>
        <fieldset className="mt-7">
          <legend className="text-sm font-medium">Canvas theme</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <label className="grid cursor-pointer gap-3 rounded-lg border border-stone-500 p-3 has-[:checked]:border-stone-950">
              <div className="h-16 rounded-md bg-[#f4efe4]"></div>
              <span className="flex items-center justify-between gap-3 text-sm">
                Paper
                <input
                  className="size-4 accent-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                  type="radio"
                  name="settings-appearance-studio-theme"
                  value="paper"
                  defaultChecked
                />
              </span>
            </label>
            <label className="grid cursor-pointer gap-3 rounded-lg border border-stone-500 p-3 has-[:checked]:border-stone-950">
              <div className="h-16 rounded-md bg-neutral-950"></div>
              <span className="flex items-center justify-between gap-3 text-sm">
                Midnight
                <input
                  className="size-4 accent-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                  type="radio"
                  name="settings-appearance-studio-theme"
                  value="midnight"
                />
              </span>
            </label>
            <label className="grid cursor-pointer gap-3 rounded-lg border border-stone-500 p-3 has-[:checked]:border-stone-950">
              <div className="h-16 rounded-md bg-emerald-900"></div>
              <span className="flex items-center justify-between gap-3 text-sm">
                Moss
                <input
                  className="size-4 accent-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                  type="radio"
                  name="settings-appearance-studio-theme"
                  value="moss"
                />
              </span>
            </label>
          </div>
        </fieldset>
        <div className="mt-6 border-t border-stone-200 pt-5">
          <label
            className="flex items-start gap-3 text-sm"
            htmlFor="settings-appearance-studio-compact"
          >
            <input
              className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              type="checkbox"
              name="compact"
              id="settings-appearance-studio-compact"
              aria-labelledby="settings-appearance-studio-compact-label"
              aria-describedby="settings-appearance-studio-compact-hint"
            />
            <span className="grid gap-1">
              <span
                id="settings-appearance-studio-compact-label"
                className="font-medium"
              >
                Compact spacing
              </span>
              <span
                className="text-xs leading-5 opacity-70"
                id="settings-appearance-studio-compact-hint"
              >
                Fit more work into each view.
              </span>
            </span>
          </label>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-stone-600">
            Changes apply to your account only.
          </p>
          <button
            className="cursor-pointer rounded-lg bg-stone-950 px-4 py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
            type="button"
          >
            Save preferences
          </button>
        </div>
      </form>
    </section>
  )
}
