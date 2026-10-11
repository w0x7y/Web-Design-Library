export default function SettingsLocalePanel() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Language and region
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Choose the formats used for account dates and times.
          </p>
        </div>
        <form className="mt-10 grid items-start gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="min-w-0">
              <label
                htmlFor="settings-locale-panel-language"
                className="block text-sm font-medium"
              >
                Language
              </label>
              <select
                id="settings-locale-panel-language"
                name="language"
                aria-describedby="settings-locale-panel-language-hint"
                className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                <option>Option label</option>
                <option>Alternative label</option>
              </select>
              <p
                id="settings-locale-panel-language-hint"
                className="mt-2 text-sm text-neutral-600"
              >
                Sets labels and account messages.
              </p>
            </div>
            <div className="min-w-0">
              <label
                htmlFor="settings-locale-panel-timezone"
                className="block text-sm font-medium"
              >
                Time zone
              </label>
              <select
                id="settings-locale-panel-timezone"
                name="timezone"
                aria-describedby="settings-locale-panel-timezone-hint"
                className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                <option>Option label</option>
                <option>Alternative label</option>
              </select>
              <p
                id="settings-locale-panel-timezone-hint"
                className="mt-2 text-sm text-neutral-600"
              >
                Used for scheduled events and notifications.
              </p>
            </div>
            <fieldset>
              <legend className="text-sm font-medium">Clock format</legend>
              <div className="mt-4 flex flex-wrap gap-6">
                <div className="flex items-start gap-3">
                  <input
                    id="settings-locale-panel-twelve"
                    name="clock"
                    value="twelve"
                    type="radio"
                    className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <div className="min-w-0">
                    <label
                      htmlFor="settings-locale-panel-twelve"
                      className="text-sm font-medium"
                    >
                      12-hour
                    </label>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="settings-locale-panel-twenty-four"
                    name="clock"
                    value="twenty-four"
                    type="radio"
                    defaultChecked
                    className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <div className="min-w-0">
                    <label
                      htmlFor="settings-locale-panel-twenty-four"
                      className="text-sm font-medium"
                    >
                      24-hour
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Save regional preferences
            </button>
          </div>
          <aside className="rounded-lg border border-neutral-200 p-6">
            <h2 className="text-lg font-semibold">Format examples</h2>
            <dl className="mt-6 divide-y divide-neutral-200">
              <div className="py-4">
                <dt className="text-sm text-neutral-500">Date</dt>
                <dd className="mt-2 text-lg font-medium">
                  <time dateTime="2026-10-11">11 Oct 2026</time>
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-sm text-neutral-500">Time</dt>
                <dd className="mt-2 text-lg font-medium">
                  <time dateTime="09:41">09:41</time>
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-sm text-neutral-500">Number</dt>
                <dd className="mt-2 text-lg font-medium tabular-nums">
                  1,234.56
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-sm text-neutral-600">
              Illustrative examples for the selected default format.
            </p>
          </aside>
        </form>
      </div>
    </section>
  )
}
