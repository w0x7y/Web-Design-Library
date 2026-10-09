// Fonts: Red Hat Text (https://fonts.google.com/specimen/Red+Hat+Text)
export default function SettingsPanel() {
  return (
    <section className="bg-gray-50 font-['Red_Hat_Text',ui-sans-serif,system-ui,sans-serif] text-gray-950 antialiased">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="mt-1 text-sm text-gray-600">Linden Street Physiotherapy, Bristol</p>

        <div className="mt-8 lg:grid lg:grid-cols-[13rem_minmax(0,1fr)] lg:items-start lg:gap-10">
          <nav aria-label="Settings sections">
            <ul role="list" className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-1">
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="group flex h-10 items-center gap-2.5 rounded-lg px-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200/60 hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 aria-[current=page]:bg-white aria-[current=page]:font-semibold aria-[current=page]:text-gray-950 aria-[current=page]:ring-1 aria-[current=page]:ring-gray-200"
                >
                  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="size-4 shrink-0 text-gray-500 group-aria-[current=page]:text-sky-700">
                    <path d="M2.5 4.5h4M9.5 4.5h4M2.5 11.5h7M12.5 11.5h1" />
                    <circle cx="8" cy="4.5" r="1.5" />
                    <circle cx="11" cy="11.5" r="1.5" />
                  </svg>
                  General
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex h-10 items-center gap-2.5 rounded-lg px-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200/60 hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 aria-[current=page]:bg-white aria-[current=page]:font-semibold aria-[current=page]:text-gray-950 aria-[current=page]:ring-1 aria-[current=page]:ring-gray-200"
                >
                  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="size-4 shrink-0 text-gray-500 group-aria-[current=page]:text-sky-700">
                    <rect x="2.5" y="3.5" width="11" height="10" rx="1.5" />
                    <path d="M2.5 6.5h11M5.5 2v3M10.5 2v3" />
                  </svg>
                  Booking page
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex h-10 items-center gap-2.5 rounded-lg px-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200/60 hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 aria-[current=page]:bg-white aria-[current=page]:font-semibold aria-[current=page]:text-gray-950 aria-[current=page]:ring-1 aria-[current=page]:ring-gray-200"
                >
                  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-gray-500 group-aria-[current=page]:text-sky-700">
                    <path d="M4 11V7a4 4 0 0 1 8 0v4l1 1.5H3L4 11ZM6.5 14.5h3" />
                  </svg>
                  Reminders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex h-10 items-center gap-2.5 rounded-lg px-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200/60 hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 aria-[current=page]:bg-white aria-[current=page]:font-semibold aria-[current=page]:text-gray-950 aria-[current=page]:ring-1 aria-[current=page]:ring-gray-200"
                >
                  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="size-4 shrink-0 text-gray-500 group-aria-[current=page]:text-sky-700">
                    <circle cx="6" cy="5.5" r="2.5" />
                    <path d="M1.5 14a4.5 4.5 0 0 1 9 0M11 3.5a2.25 2.25 0 0 1 0 4.5M12.5 10a3.5 3.5 0 0 1 2 3.5" />
                  </svg>
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex h-10 items-center gap-2.5 rounded-lg px-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200/60 hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 aria-[current=page]:bg-white aria-[current=page]:font-semibold aria-[current=page]:text-gray-950 aria-[current=page]:ring-1 aria-[current=page]:ring-gray-200"
                >
                  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="size-4 shrink-0 text-gray-500 group-aria-[current=page]:text-sky-700">
                    <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" />
                    <path d="M1.5 6.5h13M4 10h2.5" />
                  </svg>
                  Billing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex h-10 items-center gap-2.5 rounded-lg px-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200/60 hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 aria-[current=page]:bg-white aria-[current=page]:font-semibold aria-[current=page]:text-gray-950 aria-[current=page]:ring-1 aria-[current=page]:ring-gray-200"
                >
                  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-gray-500 group-aria-[current=page]:text-sky-700">
                    <path d="M6 1.5v3M10 1.5v3M4.5 4.5h7v3a3.5 3.5 0 0 1-7 0v-3ZM8 11v3.5" />
                  </svg>
                  Integrations
                </a>
              </li>
            </ul>
          </nav>

          <form className="mt-6 overflow-hidden rounded-xl bg-white ring-1 ring-gray-200 lg:mt-0">
            <section aria-labelledby="settings-panel-profile-title" className="grid grid-cols-1 gap-6 p-5 sm:p-6 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-10 lg:p-8">
              <div>
                <h2 id="settings-panel-profile-title" className="text-base font-semibold">
                  Clinic profile
                </h2>
                <p className="mt-1 text-sm text-gray-600">Shown on your booking page and in every reminder.</p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="settings-panel-name" className="block text-sm font-medium">
                    Clinic name
                  </label>
                  <input
                    id="settings-panel-name"
                    type="text"
                    name="clinic-name"
                    autoComplete="organization"
                    defaultValue="Linden Street Physiotherapy"
                    className="mt-2 block h-10 w-full rounded-md border border-gray-500/80 bg-white px-3 text-base transition-colors hover:border-gray-600 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-sky-700 sm:text-sm"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="settings-panel-slug" className="block text-sm font-medium">
                    Booking link
                  </label>
                  <div className="mt-2 flex h-10 overflow-hidden rounded-md border border-gray-500/80 transition-colors hover:border-gray-600 has-focus-visible:outline-2 has-focus-visible:-outline-offset-1 has-focus-visible:outline-sky-700">
                    <span id="settings-panel-slug-prefix" className="flex shrink-0 items-center border-r border-gray-200 bg-gray-50 px-3 text-sm text-gray-600">
                      book.rota.health/
                    </span>
                    <input
                      id="settings-panel-slug"
                      type="text"
                      name="slug"
                      autoComplete="off"
                      spellCheck={false}
                      defaultValue="linden-street"
                      aria-describedby="settings-panel-slug-prefix settings-panel-slug-hint"
                      className="min-w-0 flex-1 bg-white px-3 text-base focus-visible:outline-hidden sm:text-sm"
                    />
                  </div>
                  <p id="settings-panel-slug-hint" className="mt-2 text-[0.8125rem] text-gray-600">
                    Lowercase letters, numbers and hyphens.
                  </p>
                </div>

                <div>
                  <label htmlFor="settings-panel-timezone" className="block text-sm font-medium">
                    Time zone
                  </label>
                  <div className="relative mt-2">
                    <select
                      id="settings-panel-timezone"
                      name="timezone"
                      defaultValue="Europe/London"
                      className="block h-10 w-full cursor-pointer appearance-none rounded-md border border-gray-500/80 bg-white pr-9 pl-3 text-base transition-colors hover:border-gray-600 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-sky-700 sm:text-sm"
                    >
                      <option value="Europe/Dublin">Dublin (GMT+01:00)</option>
                      <option value="Europe/London">London (GMT+01:00)</option>
                      <option value="Europe/Lisbon">Lisbon (GMT+01:00)</option>
                      <option value="Europe/Paris">Paris (GMT+02:00)</option>
                    </select>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none absolute top-3 right-3 size-4 text-gray-500"
                    >
                      <path d="m4 6 4 4 4-4" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label htmlFor="settings-panel-length" className="block text-sm font-medium">
                    Default visit length
                  </label>
                  <div className="relative mt-2">
                    <select
                      id="settings-panel-length"
                      name="visit-length"
                      defaultValue="45"
                      className="block h-10 w-full cursor-pointer appearance-none rounded-md border border-gray-500/80 bg-white pr-9 pl-3 text-base transition-colors hover:border-gray-600 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-sky-700 sm:text-sm"
                    >
                      <option value="30">30 minutes</option>
                      <option value="45">45 minutes</option>
                      <option value="60">60 minutes</option>
                    </select>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none absolute top-3 right-3 size-4 text-gray-500"
                    >
                      <path d="m4 6 4 4 4-4" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:col-span-2">
                  <span aria-hidden="true" className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-sky-700 text-lg font-semibold text-white">
                    LS
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <label className="flex h-9 cursor-pointer items-center rounded-md bg-white px-3 text-sm font-semibold ring-1 ring-gray-300 transition-colors ring-inset hover:bg-gray-50 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-sky-700">
                        <input
                          type="file"
                          name="logo"
                          accept="image/png, image/svg+xml"
                          aria-describedby="settings-panel-logo-hint"
                          className="sr-only"
                        />
                        Change logo
                      </label>
                      <button
                        type="button"
                        className="cursor-pointer rounded-md text-sm font-semibold text-gray-600 transition-colors hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                      >
                        Remove<span className="sr-only"> logo</span>
                      </button>
                    </div>
                    <p id="settings-panel-logo-hint" className="mt-1.5 text-[0.8125rem] text-gray-600">
                      PNG or SVG, at least 256 × 256 px.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              aria-labelledby="settings-panel-reminders-title"
              className="grid grid-cols-1 gap-6 border-t border-gray-200 p-5 sm:p-6 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-10 lg:p-8"
            >
              <div>
                <h2 id="settings-panel-reminders-title" className="text-base font-semibold">
                  Appointment reminders
                </h2>
                <p className="mt-1 text-sm text-gray-600">Sent to patients from your clinic&rsquo;s name.</p>
              </div>

              <ul role="list" className="divide-y divide-gray-200">
                <li className="flex items-center justify-between gap-6 pb-4">
                  <div>
                    <label htmlFor="settings-panel-confirm" className="cursor-pointer text-sm font-medium">
                      Booking confirmation
                    </label>
                    <p id="settings-panel-confirm-hint" className="text-sm text-gray-600">
                      Email as soon as a visit is booked.
                    </p>
                  </div>
                  <span className="relative flex h-6 w-10 shrink-0">
                    <input
                      id="settings-panel-confirm"
                      type="checkbox"
                      role="switch"
                      name="confirm"
                      defaultChecked
                      aria-describedby="settings-panel-confirm-hint"
                      className="peer absolute inset-0 z-10 cursor-pointer appearance-none rounded-full opacity-0"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-gray-500 transition-colors peer-checked:bg-sky-700 peer-hover:bg-gray-600 peer-checked:peer-hover:bg-sky-800 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sky-700"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute top-1 left-1 size-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-4"
                    />
                  </span>
                </li>

                <li className="flex items-center justify-between gap-6 py-4">
                  <div>
                    <label htmlFor="settings-panel-day-before" className="cursor-pointer text-sm font-medium">
                      Reminder the day before
                    </label>
                    <p id="settings-panel-day-before-hint" className="text-sm text-gray-600">
                      Text message 24 hours ahead.
                    </p>
                  </div>
                  <span className="relative flex h-6 w-10 shrink-0">
                    <input
                      id="settings-panel-day-before"
                      type="checkbox"
                      role="switch"
                      name="day-before"
                      defaultChecked
                      aria-describedby="settings-panel-day-before-hint"
                      className="peer absolute inset-0 z-10 cursor-pointer appearance-none rounded-full opacity-0"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-gray-500 transition-colors peer-checked:bg-sky-700 peer-hover:bg-gray-600 peer-checked:peer-hover:bg-sky-800 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sky-700"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute top-1 left-1 size-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-4"
                    />
                  </span>
                </li>

                <li className="flex items-center justify-between gap-6 py-4">
                  <div>
                    <label htmlFor="settings-panel-same-day" className="cursor-pointer text-sm font-medium">
                      Reminder on the day
                    </label>
                    <p id="settings-panel-same-day-hint" className="text-sm text-gray-600">
                      Text message 2 hours ahead.
                    </p>
                  </div>
                  <span className="relative flex h-6 w-10 shrink-0">
                    <input
                      id="settings-panel-same-day"
                      type="checkbox"
                      role="switch"
                      name="same-day"
                      aria-describedby="settings-panel-same-day-hint"
                      className="peer absolute inset-0 z-10 cursor-pointer appearance-none rounded-full opacity-0"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-gray-500 transition-colors peer-checked:bg-sky-700 peer-hover:bg-gray-600 peer-checked:peer-hover:bg-sky-800 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sky-700"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute top-1 left-1 size-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-4"
                    />
                  </span>
                </li>

                <li className="flex items-center justify-between gap-6 pt-4">
                  <div>
                    <label htmlFor="settings-panel-feedback" className="cursor-pointer text-sm font-medium">
                      Feedback request
                    </label>
                    <p id="settings-panel-feedback-hint" className="text-sm text-gray-600">
                      Email a two-question survey after the visit.
                    </p>
                  </div>
                  <span className="relative flex h-6 w-10 shrink-0">
                    <input
                      id="settings-panel-feedback"
                      type="checkbox"
                      role="switch"
                      name="feedback"
                      aria-describedby="settings-panel-feedback-hint"
                      className="peer absolute inset-0 z-10 cursor-pointer appearance-none rounded-full opacity-0"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-gray-500 transition-colors peer-checked:bg-sky-700 peer-hover:bg-gray-600 peer-checked:peer-hover:bg-sky-800 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sky-700"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute top-1 left-1 size-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-4"
                    />
                  </span>
                </li>
              </ul>
            </section>

            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-gray-200 bg-gray-50 px-5 py-4 sm:px-6 lg:px-8">
              <p className="text-sm text-gray-600">
                Last saved <time dateTime="2026-10-03T16:20">3 Oct at 16:20</time> by Priya Raman
              </p>
              <div className="flex gap-3">
                <button
                  type="reset"
                  className="h-10 cursor-pointer rounded-md bg-white px-4 text-sm font-semibold ring-1 ring-gray-300 transition-colors ring-inset hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  className="h-10 cursor-pointer rounded-md bg-sky-700 px-4 text-sm font-semibold text-white transition-colors hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                >
                  Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
