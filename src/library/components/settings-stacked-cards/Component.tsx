export default function SettingsStackedCards() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Account settings</h1>
        <p className="mt-4 text-lg text-pretty text-neutral-600">Manage each part of your account separately.</p>
        <div className="mt-10 space-y-6">
          <form
            aria-labelledby="settings-stacked-cards-profile-title"
            className="rounded-lg border border-neutral-200 bg-white"
          >
            <div className="space-y-6 p-6">
              <div>
                <h2 id="settings-stacked-cards-profile-title" className="text-lg font-semibold">
                  Profile
                </h2>
                <p className="mt-2 text-sm text-neutral-600">Describe the identity shown to other members.</p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex size-16 items-center justify-center rounded-full bg-neutral-200 text-lg font-medium text-neutral-600"
                >
                  AR
                </span>
                <div>
                  <p className="text-sm font-medium">Profile photo</p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    <button
                      type="button"
                      aria-label="Change profile photo"
                      className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      Change
                    </button>
                    <button
                      type="button"
                      aria-label="Remove profile photo"
                      className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="min-w-0">
                  <label htmlFor="settings-stacked-cards-first" className="block text-sm font-medium">
                    First name
                  </label>
                  <input
                    id="settings-stacked-cards-first"
                    name="first"
                    type="text"
                    defaultValue="Alex"
                    className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </div>
                <div className="min-w-0">
                  <label htmlFor="settings-stacked-cards-last" className="block text-sm font-medium">
                    Last name
                  </label>
                  <input
                    id="settings-stacked-cards-last"
                    name="last"
                    type="text"
                    defaultValue="Rivera"
                    className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </div>
              </div>
              <div className="min-w-0">
                <label htmlFor="settings-stacked-cards-email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="settings-stacked-cards-email"
                  name="email"
                  type="email"
                  defaultValue="name@example.com"
                  className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
              </div>
              <div>
                <label htmlFor="settings-stacked-cards-bio" className="block text-sm font-medium">
                  Bio
                </label>
                <textarea
                  id="settings-stacked-cards-bio"
                  name="bio"
                  rows={3}
                  maxLength={160}
                  aria-describedby="settings-stacked-cards-bio-hint"
                  placeholder="Short personal introduction"
                  className="mt-2 min-h-24 w-full resize-y rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
                <p id="settings-stacked-cards-bio-hint" className="mt-2 text-sm text-neutral-500">
                  Keep your introduction under 160 characters.
                </p>
              </div>
            </div>
            <footer className="flex flex-col gap-4 rounded-b-lg border-t border-neutral-200 bg-neutral-50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-neutral-500">Profile changes apply to your account.</p>
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 w-full sm:w-auto"
              >
                Save profile
              </button>
            </footer>
          </form>
          <form
            aria-labelledby="settings-stacked-cards-password-title"
            className="rounded-lg border border-neutral-200 bg-white"
          >
            <div className="space-y-6 p-6">
              <div>
                <h2 id="settings-stacked-cards-password-title" className="text-lg font-semibold">
                  Password
                </h2>
                <p className="mt-2 text-sm text-neutral-600">Explain how to keep account access secure.</p>
              </div>
              <div className="min-w-0">
                <label htmlFor="settings-stacked-cards-current" className="block text-sm font-medium">
                  Current password
                </label>
                <input
                  id="settings-stacked-cards-current"
                  name="current"
                  type="password"
                  defaultValue=""
                  className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
              </div>
              <div className="min-w-0">
                <label htmlFor="settings-stacked-cards-new" className="block text-sm font-medium">
                  New password
                </label>
                <input
                  id="settings-stacked-cards-new"
                  name="new"
                  type="password"
                  defaultValue=""
                  aria-describedby="settings-stacked-cards-new-hint"
                  className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
                <p id="settings-stacked-cards-new-hint" className="mt-2 text-sm text-neutral-500">
                  Use at least 12 characters.
                </p>
              </div>
            </div>
            <footer className="flex flex-col gap-4 rounded-b-lg border-t border-neutral-200 bg-neutral-50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-neutral-500">Use a password you have not used before.</p>
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 w-full sm:w-auto"
              >
                Save password
              </button>
            </footer>
          </form>
          <form
            aria-labelledby="settings-stacked-cards-notifications-title"
            className="rounded-lg border border-neutral-200 bg-white"
          >
            <div className="space-y-6 p-6">
              <div>
                <h2 id="settings-stacked-cards-notifications-title" className="text-lg font-semibold">
                  Notifications
                </h2>
                <p className="mt-2 text-sm text-neutral-600">Choose which activity can send an alert.</p>
              </div>
              <div className="flex items-center justify-between gap-6">
                <div className="min-w-0">
                  <label htmlFor="settings-stacked-cards-mentions" className="text-sm font-medium">
                    Mentions
                  </label>
                  <p id="settings-stacked-cards-mentions-hint" className="mt-1 text-sm text-neutral-600">
                    Receive an alert when someone mentions you.
                  </p>
                </div>
                <label className="relative flex shrink-0 cursor-pointer items-center">
                  <input
                    id="settings-stacked-cards-mentions"
                    name="mentions"
                    type="checkbox"
                    role="switch"
                    aria-describedby="settings-stacked-cards-mentions-hint"
                    defaultChecked
                    className="peer sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className="h-6 w-11 rounded-full border border-transparent bg-neutral-200 transition-colors peer-checked:bg-neutral-900 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900 forced-colors:border-[ButtonText]"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1 size-4 rounded-full bg-white transition-transform peer-checked:translate-x-5 forced-colors:bg-[CanvasText]"
                  />
                </label>
              </div>
              <div className="flex items-center justify-between gap-6">
                <div className="min-w-0">
                  <label htmlFor="settings-stacked-cards-requests" className="text-sm font-medium">
                    Access requests
                  </label>
                  <p id="settings-stacked-cards-requests-hint" className="mt-1 text-sm text-neutral-600">
                    Review requests to join your workspace.
                  </p>
                </div>
                <label className="relative flex shrink-0 cursor-pointer items-center">
                  <input
                    id="settings-stacked-cards-requests"
                    name="requests"
                    type="checkbox"
                    role="switch"
                    aria-describedby="settings-stacked-cards-requests-hint"
                    defaultChecked
                    className="peer sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className="h-6 w-11 rounded-full border border-transparent bg-neutral-200 transition-colors peer-checked:bg-neutral-900 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900 forced-colors:border-[ButtonText]"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1 size-4 rounded-full bg-white transition-transform peer-checked:translate-x-5 forced-colors:bg-[CanvasText]"
                  />
                </label>
              </div>
              <div className="flex items-center justify-between gap-6">
                <div className="min-w-0">
                  <label htmlFor="settings-stacked-cards-digest" className="text-sm font-medium">
                    Weekly summary
                  </label>
                  <p id="settings-stacked-cards-digest-hint" className="mt-1 text-sm text-neutral-600">
                    Get a weekly email of recent changes.
                  </p>
                </div>
                <label className="relative flex shrink-0 cursor-pointer items-center">
                  <input
                    id="settings-stacked-cards-digest"
                    name="digest"
                    type="checkbox"
                    role="switch"
                    aria-describedby="settings-stacked-cards-digest-hint"
                    className="peer sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className="h-6 w-11 rounded-full border border-transparent bg-neutral-200 transition-colors peer-checked:bg-neutral-900 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900 forced-colors:border-[ButtonText]"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1 size-4 rounded-full bg-white transition-transform peer-checked:translate-x-5 forced-colors:bg-[CanvasText]"
                  />
                </label>
              </div>
            </div>
            <footer className="flex flex-col gap-4 rounded-b-lg border-t border-neutral-200 bg-neutral-50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-neutral-500">These preferences affect only your account.</p>
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 w-full sm:w-auto"
              >
                Save notifications
              </button>
            </footer>
          </form>
        </div>
      </div>
    </section>
  )
}
