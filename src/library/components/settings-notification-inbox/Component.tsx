export default function SettingsNotificationInbox() {
  return (
    <section className="bg-slate-50 px-6 py-10 text-slate-950 sm:px-12">
      <form
        className="mx-auto max-w-3xl border border-slate-200 bg-white p-6 sm:p-8"
        action="#"
      >
        <header className="border-b border-slate-200 pb-5">
          <p className="text-xs font-semibold tracking-widest text-slate-500">
            ACCOUNT / NOTIFICATIONS
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Keep the useful updates.
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Choose what reaches you and where.
          </p>
        </header>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <fieldset className="grid content-start gap-5">
            <legend className="mb-4 text-base font-semibold">Email</legend>
            <label
              className="flex items-start gap-3 text-sm"
              htmlFor="settings-notification-inbox-email-mentions"
            >
              <input
                className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                type="checkbox"
                name="email-mentions"
                id="settings-notification-inbox-email-mentions"
                defaultChecked
                aria-labelledby="settings-notification-inbox-email-mentions-label"
                aria-describedby="settings-notification-inbox-email-mentions-hint"
              />
              <span className="grid gap-1">
                <span
                  id="settings-notification-inbox-email-mentions-label"
                  className="font-medium"
                >
                  Mentions and replies
                </span>
                <span
                  className="text-xs leading-5 opacity-70"
                  id="settings-notification-inbox-email-mentions-hint"
                >
                  When someone needs your input.
                </span>
              </span>
            </label>
            <label
              className="flex items-start gap-3 text-sm"
              htmlFor="settings-notification-inbox-email-digest"
            >
              <input
                className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                type="checkbox"
                name="email-digest"
                id="settings-notification-inbox-email-digest"
                defaultChecked
                aria-labelledby="settings-notification-inbox-email-digest-label"
                aria-describedby="settings-notification-inbox-email-digest-hint"
              />
              <span className="grid gap-1">
                <span
                  id="settings-notification-inbox-email-digest-label"
                  className="font-medium"
                >
                  Weekly project digest
                </span>
                <span
                  className="text-xs leading-5 opacity-70"
                  id="settings-notification-inbox-email-digest-hint"
                >
                  A summary every Monday.
                </span>
              </span>
            </label>
            <label
              className="flex items-start gap-3 text-sm"
              htmlFor="settings-notification-inbox-email-news"
            >
              <input
                className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                type="checkbox"
                name="email-news"
                id="settings-notification-inbox-email-news"
                aria-labelledby="settings-notification-inbox-email-news-label"
                aria-describedby="settings-notification-inbox-email-news-hint"
              />
              <span className="grid gap-1">
                <span
                  id="settings-notification-inbox-email-news-label"
                  className="font-medium"
                >
                  Product news
                </span>
                <span
                  className="text-xs leading-5 opacity-70"
                  id="settings-notification-inbox-email-news-hint"
                >
                  Occasional feature announcements.
                </span>
              </span>
            </label>
          </fieldset>
          <fieldset className="grid content-start gap-5">
            <legend className="mb-4 text-base font-semibold">In-app</legend>
            <label
              className="flex items-start gap-3 text-sm"
              htmlFor="settings-notification-inbox-app-assignments"
            >
              <input
                className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                type="checkbox"
                name="app-assignments"
                id="settings-notification-inbox-app-assignments"
                defaultChecked
                aria-labelledby="settings-notification-inbox-app-assignments-label"
                aria-describedby="settings-notification-inbox-app-assignments-hint"
              />
              <span className="grid gap-1">
                <span
                  id="settings-notification-inbox-app-assignments-label"
                  className="font-medium"
                >
                  New assignments
                </span>
                <span
                  className="text-xs leading-5 opacity-70"
                  id="settings-notification-inbox-app-assignments-hint"
                >
                  Tasks added to your queue.
                </span>
              </span>
            </label>
            <label
              className="flex items-start gap-3 text-sm"
              htmlFor="settings-notification-inbox-app-status"
            >
              <input
                className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                type="checkbox"
                name="app-status"
                id="settings-notification-inbox-app-status"
                defaultChecked
                aria-labelledby="settings-notification-inbox-app-status-label"
                aria-describedby="settings-notification-inbox-app-status-hint"
              />
              <span className="grid gap-1">
                <span
                  id="settings-notification-inbox-app-status-label"
                  className="font-medium"
                >
                  Project status changes
                </span>
                <span
                  className="text-xs leading-5 opacity-70"
                  id="settings-notification-inbox-app-status-hint"
                >
                  Milestones and delivery updates.
                </span>
              </span>
            </label>
            <label
              className="flex items-start gap-3 text-sm"
              htmlFor="settings-notification-inbox-app-reminders"
            >
              <input
                className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                type="checkbox"
                name="app-reminders"
                id="settings-notification-inbox-app-reminders"
                aria-labelledby="settings-notification-inbox-app-reminders-label"
                aria-describedby="settings-notification-inbox-app-reminders-hint"
              />
              <span className="grid gap-1">
                <span
                  id="settings-notification-inbox-app-reminders-label"
                  className="font-medium"
                >
                  Due-date reminders
                </span>
                <span
                  className="text-xs leading-5 opacity-70"
                  id="settings-notification-inbox-app-reminders-hint"
                >
                  A nudge before your deadline.
                </span>
              </span>
            </label>
          </fieldset>
        </div>
        <footer className="mt-8 flex flex-wrap justify-between gap-4 border-t border-slate-200 pt-5">
          <p className="self-center text-xs text-slate-500">
            Critical account alerts always reach you.
          </p>
          <button
            className="rounded-lg bg-blue-700 px-4 py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
            type="button"
          >
            Save notifications
          </button>
        </footer>
      </form>
    </section>
  )
}
