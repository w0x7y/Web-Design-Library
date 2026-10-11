export default function SettingsNotificationMatrix() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Notification preferences
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Choose how each kind of account update reaches you.
          </p>
        </div>
        <form className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div>
            <table className="w-full table-fixed text-left">
              <caption className="pb-4 text-left text-base font-semibold">
                Delivery channels
              </caption>
              <thead className="bg-neutral-50">
                <tr>
                  <th
                    scope="col"
                    className="w-1/2 px-3 py-3 text-sm font-medium"
                  >
                    Topic
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-center text-sm font-medium"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-center text-sm font-medium"
                  >
                    Push
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-neutral-200">
                  <th scope="row" className="px-3 py-4 text-sm font-medium">
                    Account activity
                  </th>
                  <td className="px-3 py-4 text-center">
                    <input
                      type="checkbox"
                      name="account-email"
                      aria-label="Email notifications for account activity"
                      defaultChecked
                      className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                  </td>
                  <td className="px-3 py-4 text-center">
                    <input
                      type="checkbox"
                      name="account-push"
                      aria-label="Push notifications for account activity"
                      className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                  </td>
                </tr>
                <tr className="border-t border-neutral-200">
                  <th scope="row" className="px-3 py-4 text-sm font-medium">
                    Team updates
                  </th>
                  <td className="px-3 py-4 text-center">
                    <input
                      type="checkbox"
                      name="team-email"
                      aria-label="Email notifications for team updates"
                      defaultChecked
                      className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                  </td>
                  <td className="px-3 py-4 text-center">
                    <input
                      type="checkbox"
                      name="team-push"
                      aria-label="Push notifications for team updates"
                      className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                  </td>
                </tr>
                <tr className="border-t border-neutral-200">
                  <th scope="row" className="px-3 py-4 text-sm font-medium">
                    Weekly summary
                  </th>
                  <td className="px-3 py-4 text-center">
                    <input
                      type="checkbox"
                      name="summary-email"
                      aria-label="Email notifications for weekly summary"
                      defaultChecked
                      className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                  </td>
                  <td className="px-3 py-4 text-center">
                    <input
                      type="checkbox"
                      name="summary-push"
                      aria-label="Push notifications for weekly summary"
                      className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Save preferences
              </button>
            </div>
          </div>
          <aside className="rounded-lg bg-neutral-50 p-6">
            <h2 className="text-base font-semibold">Delivery guidance</h2>
            <p className="mt-3 text-sm text-neutral-600">
              Explain the difference between routine and essential account
              messages.
            </p>
            <p className="mt-4 text-sm text-neutral-600">
              Essential security notices remain enabled.
            </p>
            <p className="mt-6 text-sm">
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Manage quiet hours
              </a>
            </p>
          </aside>
        </form>
      </div>
    </section>
  )
}
