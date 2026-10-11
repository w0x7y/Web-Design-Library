export default function SettingsSidebarSections() {
  return (
    <section className="bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Workspace settings</h1>
        <p className="mt-3 text-sm text-neutral-500">Manage identity, preferences and notifications.</p>
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[13rem_minmax(0,1fr)]">
          <nav aria-label="Settings sections" className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
            <a
              href="#"
              aria-current="page"
              className="flex items-center gap-3 rounded-md border border-neutral-300 bg-white px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0"
              >
                <path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h4" />
              </svg>
              General
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-md border border-transparent hover:bg-white px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0"
              >
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
              </svg>
              Notifications
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-md border border-transparent hover:bg-white px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M17 5a4 4 0 0 1 0 8M22 21v-2a4 4 0 0 0-3-3.87" />
              </svg>
              Members
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-md border border-transparent hover:bg-white px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0"
              >
                <path d="M3 5h18v14H3zM3 9h18M7 15h3" />
              </svg>
              Billing
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-md border border-transparent hover:bg-white px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0"
              >
                <path d="m12 3 8 4v5c0 5-8 9-8 9s-8-4-8-9V7l8-4Z" />
              </svg>
              Security
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-md border border-transparent hover:bg-white px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0"
              >
                <path d="M4 7h16M4 17h16M8 4v6M16 14v6" />
              </svg>
              Advanced
            </a>
          </nav>
          <form className="min-w-0 rounded-lg border border-neutral-200 bg-white">
            <div className="grid gap-8 p-6 md:grid-cols-[14rem_minmax(0,1fr)]">
              <div>
                <h2 className="text-lg font-semibold">General</h2>
                <p className="mt-2 text-sm text-neutral-600">
                  Describe the workspace identity and its default preferences.
                </p>
              </div>
              <div className="min-w-0 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="min-w-0">
                    <label htmlFor="settings-sidebar-sections-first" className="block text-sm font-medium">
                      First name
                    </label>
                    <input
                      id="settings-sidebar-sections-first"
                      name="first"
                      type="text"
                      defaultValue="Alex"
                      className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                  </div>
                  <div className="min-w-0">
                    <label htmlFor="settings-sidebar-sections-last" className="block text-sm font-medium">
                      Last name
                    </label>
                    <input
                      id="settings-sidebar-sections-last"
                      name="last"
                      type="text"
                      defaultValue="Rivera"
                      className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="settings-sidebar-sections-url" className="block text-sm font-medium">
                    Workspace URL
                  </label>
                  <div className="mt-2 flex rounded-md border border-neutral-300 bg-white">
                    <span className="flex items-center border-r border-neutral-300 bg-neutral-50 px-3 text-sm text-neutral-500">
                      /w/
                    </span>
                    <input
                      id="settings-sidebar-sections-url"
                      name="url"
                      defaultValue="workspace-name"
                      aria-describedby="settings-sidebar-sections-url-hint"
                      className="h-10 min-w-0 flex-1 rounded-md bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                  </div>
                  <p id="settings-sidebar-sections-url-hint" className="mt-2 text-sm text-neutral-500">
                    Use a short, unique workspace address.
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="min-w-0">
                    <label htmlFor="settings-sidebar-sections-language" className="block text-sm font-medium">
                      Language
                    </label>
                    <select
                      id="settings-sidebar-sections-language"
                      name="language"
                      className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                  <div className="min-w-0">
                    <label htmlFor="settings-sidebar-sections-date" className="block text-sm font-medium">
                      Date format
                    </label>
                    <select
                      id="settings-sidebar-sections-date"
                      name="date"
                      className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      <option>Mar 14, 2026</option>
                      <option>14 Mar 2026</option>
                      <option>2026-03-14</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-8 border-t border-neutral-200 p-6 md:grid-cols-[14rem_minmax(0,1fr)]">
              <div>
                <h2 className="text-lg font-semibold">Notifications</h2>
                <p className="mt-2 text-sm text-neutral-600">Explain which activity can send an alert.</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-6">
                  <div className="min-w-0">
                    <label htmlFor="settings-sidebar-sections-updates" className="text-sm font-medium">
                      Activity updates
                    </label>
                    <p id="settings-sidebar-sections-updates-hint" className="mt-1 text-sm text-neutral-600">
                      Receive a summary when shared items change.
                    </p>
                  </div>
                  <label className="relative flex shrink-0 cursor-pointer items-center">
                    <input
                      id="settings-sidebar-sections-updates"
                      name="updates"
                      type="checkbox"
                      role="switch"
                      aria-describedby="settings-sidebar-sections-updates-hint"
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
                    <label htmlFor="settings-sidebar-sections-mentions" className="text-sm font-medium">
                      Mentions
                    </label>
                    <p id="settings-sidebar-sections-mentions-hint" className="mt-1 text-sm text-neutral-600">
                      Get an alert when someone mentions you.
                    </p>
                  </div>
                  <label className="relative flex shrink-0 cursor-pointer items-center">
                    <input
                      id="settings-sidebar-sections-mentions"
                      name="mentions"
                      type="checkbox"
                      role="switch"
                      aria-describedby="settings-sidebar-sections-mentions-hint"
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
                    <label htmlFor="settings-sidebar-sections-reminders" className="text-sm font-medium">
                      Reminders
                    </label>
                    <p id="settings-sidebar-sections-reminders-hint" className="mt-1 text-sm text-neutral-600">
                      Receive a prompt before a scheduled date.
                    </p>
                  </div>
                  <label className="relative flex shrink-0 cursor-pointer items-center">
                    <input
                      id="settings-sidebar-sections-reminders"
                      name="reminders"
                      type="checkbox"
                      role="switch"
                      aria-describedby="settings-sidebar-sections-reminders-hint"
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
                    <label htmlFor="settings-sidebar-sections-digest" className="text-sm font-medium">
                      Weekly digest
                    </label>
                    <p id="settings-sidebar-sections-digest-hint" className="mt-1 text-sm text-neutral-600">
                      Review recent activity in one email.
                    </p>
                  </div>
                  <label className="relative flex shrink-0 cursor-pointer items-center">
                    <input
                      id="settings-sidebar-sections-digest"
                      name="digest"
                      type="checkbox"
                      role="switch"
                      aria-describedby="settings-sidebar-sections-digest-hint"
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
            </div>
            <footer className="flex flex-col gap-4 border-t border-neutral-200 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-neutral-500">Last saved Mar 14 at 10:24</p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="reset"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Save changes
                </button>
              </div>
            </footer>
          </form>
        </div>
      </div>
    </section>
  )
}
