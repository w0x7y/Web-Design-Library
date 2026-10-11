export default function SettingsPreviewSplit() {
  return (
    <section className="bg-white text-neutral-900">
      <form className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Appearance settings</h1>
        <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
          Explain how these choices shape the appearance of shared content.
        </p>
        <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
          <figure className="min-w-0 lg:sticky lg:top-8">
            <div
              role="img"
              aria-label="Image placeholder: live appearance preview"
              className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-10"
              >
                <path d="M3 3h18v18H3zM3 15l6-6 6 6 3-3 3 3M8 7h.01" />
              </svg>
            </div>
            <figcaption className="mt-3 text-sm text-neutral-500">
              Preview of the selected layout and display preferences.
            </figcaption>
          </figure>
          <div className="min-w-0 space-y-6">
            <fieldset>
              <legend className="text-base font-semibold">Layout density</legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-neutral-300 bg-white p-4 has-[:checked]:border-neutral-900">
                  <input
                    type="radio"
                    name="layout"
                    value="comfortable"
                    defaultChecked
                    className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <span className="min-w-0">
                    <span aria-hidden="true" className="mb-3 block h-10 rounded-md bg-neutral-100" />
                    <span className="text-sm font-medium">Comfortable</span>
                  </span>
                </label>
                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-neutral-300 bg-white p-4 has-[:checked]:border-neutral-900">
                  <input
                    type="radio"
                    name="layout"
                    value="compact"
                    className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <span className="min-w-0">
                    <span aria-hidden="true" className="mb-3 block h-10 rounded-md bg-neutral-200" />
                    <span className="text-sm font-medium">Compact</span>
                  </span>
                </label>
                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-neutral-300 bg-white p-4 has-[:checked]:border-neutral-900">
                  <input
                    type="radio"
                    name="layout"
                    value="spacious"
                    className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <span className="min-w-0">
                    <span aria-hidden="true" className="mb-3 block h-10 rounded-md bg-neutral-50" />
                    <span className="text-sm font-medium">Spacious</span>
                  </span>
                </label>
              </div>
            </fieldset>
            <div className="min-w-0">
              <label htmlFor="settings-preview-split-size" className="block text-sm font-medium">
                Text size
              </label>
              <select
                id="settings-preview-split-size"
                name="size"
                aria-describedby="settings-preview-split-size-hint"
                className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                <option>Default</option>
                <option>Larger</option>
                <option>Largest</option>
              </select>
              <p id="settings-preview-split-size-hint" className="mt-2 text-sm text-neutral-500">
                Choose the size used in content views.
              </p>
            </div>
            <div className="min-w-0">
              <label htmlFor="settings-preview-split-width" className="block text-sm font-medium">
                Content width
              </label>
              <select
                id="settings-preview-split-width"
                name="width"
                aria-describedby="settings-preview-split-width-hint"
                className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                <option>Standard</option>
                <option>Wide</option>
                <option>Full width</option>
              </select>
              <p id="settings-preview-split-width-hint" className="mt-2 text-sm text-neutral-500">
                Set the maximum width of shared content.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <input
                id="settings-preview-split-metadata"
                name="metadata"
                type="checkbox"
                aria-describedby="settings-preview-split-metadata-hint"
                defaultChecked
                className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              />
              <div className="min-w-0">
                <label htmlFor="settings-preview-split-metadata" className="text-sm font-medium">
                  Show additional information
                </label>
                <p id="settings-preview-split-metadata-hint" className="mt-1 text-sm text-neutral-600">
                  Include dates and ownership below item titles.
                </p>
              </div>
            </div>
            <footer className="flex flex-wrap gap-3 border-t border-neutral-200 pt-6">
              <button
                type="reset"
                className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Reset
              </button>
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Save changes
              </button>
            </footer>
          </div>
        </div>
      </form>
    </section>
  )
}
