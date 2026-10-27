export default function SettingsTeamMembers() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <header className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Team members</h1>
            <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
              Invite people to this workspace and choose what each person can change.
            </p>
          </div>
          <p className="shrink-0 text-sm text-neutral-500">4 of 10 seats used</p>
        </header>
        <form className="mt-10 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
          <h2 className="text-base font-semibold">Invite people</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,1fr)_9rem_8rem] sm:items-end sm:gap-6">
            <div className="min-w-0">
              <label htmlFor="settings-team-members-invite-email" className="block text-sm font-medium">
                Email addresses
              </label>
              <input
                id="settings-team-members-invite-email"
                name="emails"
                type="email"
                multiple
                autoComplete="off"
                placeholder="name@example.com"
                aria-describedby="settings-team-members-invite-hint"
                className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              />
            </div>
            <div>
              <label htmlFor="settings-team-members-invite-role" className="block text-sm font-medium">
                Role
              </label>
              <select
                id="settings-team-members-invite-role"
                name="role"
                defaultValue="Member"
                className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                <option>Admin</option>
                <option>Member</option>
                <option>Viewer</option>
              </select>
            </div>
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Send invite
            </button>
          </div>
          <p id="settings-team-members-invite-hint" className="mt-3 text-sm text-neutral-500">
            Separate several addresses with commas. Invitations expire after 7 days.
          </p>
        </form>
        <div className="mt-12">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-lg font-semibold">Members</h2>
            <p className="text-sm text-neutral-500">3 members, 1 pending</p>
          </div>
          <ul role="list" className="mt-4 divide-y divide-neutral-200 rounded-lg border border-neutral-200">
            <li className="grid grid-cols-[minmax(0,1fr)_7rem] items-center gap-4 p-4 sm:grid-cols-[minmax(0,1fr)_9rem_8rem] sm:gap-x-6 sm:px-6">
              <div className="col-span-2 flex min-w-0 items-center gap-3 sm:col-span-3 md:col-span-1">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  AR
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">
                    Alex Rivera <span className="font-normal text-neutral-500">(You)</span>
                  </p>
                  <p className="break-all text-sm text-neutral-500">alex.rivera@example.com</p>
                </div>
              </div>
              <p className="text-sm text-neutral-600 sm:col-start-2 sm:px-3 md:col-start-auto">Owner</p>
            </li>
            <li className="grid grid-cols-[minmax(0,1fr)_7rem] items-center gap-4 p-4 sm:grid-cols-[minmax(0,1fr)_9rem_8rem] sm:gap-x-6 sm:px-6">
              <div className="col-span-2 flex min-w-0 items-center gap-3 sm:col-span-3 md:col-span-1">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  JL
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Jordan Lee</p>
                  <p className="break-all text-sm text-neutral-500">jordan.lee@example.com</p>
                </div>
              </div>
              <div className="sm:col-start-2 md:col-start-auto">
                <label htmlFor="settings-team-members-role-jordan" className="sr-only">
                  Role for Jordan Lee
                </label>
                <select
                  id="settings-team-members-role-jordan"
                  name="role-jordan"
                  defaultValue="Admin"
                  className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  <option>Admin</option>
                  <option>Member</option>
                  <option>Viewer</option>
                </select>
              </div>
              <button
                type="button"
                aria-label="Remove Jordan Lee"
                className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Remove
              </button>
            </li>
            <li className="grid grid-cols-[minmax(0,1fr)_7rem] items-center gap-4 p-4 sm:grid-cols-[minmax(0,1fr)_9rem_8rem] sm:gap-x-6 sm:px-6">
              <div className="col-span-2 flex min-w-0 items-center gap-3 sm:col-span-3 md:col-span-1">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  ST
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Sam Taylor</p>
                  <p className="break-all text-sm text-neutral-500">sam.taylor@example.com</p>
                </div>
              </div>
              <div className="sm:col-start-2 md:col-start-auto">
                <label htmlFor="settings-team-members-role-sam" className="sr-only">
                  Role for Sam Taylor
                </label>
                <select
                  id="settings-team-members-role-sam"
                  name="role-sam"
                  defaultValue="Member"
                  className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  <option>Admin</option>
                  <option>Member</option>
                  <option>Viewer</option>
                </select>
              </div>
              <button
                type="button"
                aria-label="Remove Sam Taylor"
                className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Remove
              </button>
            </li>
            <li className="grid grid-cols-[minmax(0,1fr)_7rem] items-center gap-4 p-4 sm:grid-cols-[minmax(0,1fr)_9rem_8rem] sm:gap-x-6 sm:px-6">
              <div className="col-span-2 flex min-w-0 items-center gap-3 sm:col-span-3 md:col-span-1">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-dashed border-neutral-300 text-neutral-500"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm18 3-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <p className="min-w-0 break-all text-sm font-semibold">casey.morgan@example.com</p>
                    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                      Pending
                    </span>
                  </div>
                  <p className="text-sm text-neutral-500">
                    Sent Mar 12, expires Mar 19.{' '}
                    <a
                      href="#"
                      aria-label="Resend invitation to casey.morgan@example.com"
                      className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      Resend
                    </a>
                  </p>
                </div>
              </div>
              <div className="sm:col-start-2 md:col-start-auto">
                <label htmlFor="settings-team-members-role-casey" className="sr-only">
                  Role for casey.morgan@example.com
                </label>
                <select
                  id="settings-team-members-role-casey"
                  name="role-casey"
                  defaultValue="Viewer"
                  className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  <option>Admin</option>
                  <option>Member</option>
                  <option>Viewer</option>
                </select>
              </div>
              <button
                type="button"
                aria-label="Revoke invitation for casey.morgan@example.com"
                className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Revoke
              </button>
            </li>
          </ul>
          <p className="mt-6 text-sm text-pretty text-neutral-500">
            Admins manage members and billing. Members edit content. Viewers can read but not change anything.
          </p>
        </div>
      </div>
    </section>
  )
}
