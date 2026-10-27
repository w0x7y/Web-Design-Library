export default function EmptyStateTeamInvite() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="text-center">
          <div aria-hidden="true" className="flex justify-center gap-2">
            <span className="flex size-10 items-center justify-center rounded-full border border-dashed border-neutral-300 text-neutral-400">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.1a7.5 7.5 0 0 1 15 0" />
              </svg>
            </span>
            <span className="flex size-10 items-center justify-center rounded-full border border-dashed border-neutral-300 text-neutral-400">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
            <span className="flex size-10 items-center justify-center rounded-full border border-dashed border-neutral-300 text-neutral-400">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.1a7.5 7.5 0 0 1 15 0" />
              </svg>
            </span>
          </div>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">No teammates yet</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-pretty text-neutral-600">Invite people to work in this workspace with you. They get access as soon as they accept.</p>
        </div>
        <div className="mt-10 rounded-lg border border-neutral-200 bg-white">
          <form className="p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
              <div className="min-w-0 flex-1">
                <label htmlFor="empty-state-team-invite-email" className="block text-sm font-medium">Email addresses</label>
                <input id="empty-state-team-invite-email" name="emails" type="email" multiple required aria-describedby="empty-state-team-invite-hint" placeholder="name@example.com" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
              </div>
              <div className="sm:w-36">
                <label htmlFor="empty-state-team-invite-role" className="block text-sm font-medium">Role</label>
                <select id="empty-state-team-invite-role" name="role" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                  <option>Member</option>
                  <option>Admin</option>
                  <option>Viewer</option>
                </select>
              </div>
              <button type="submit" className="inline-flex h-11 w-full shrink-0 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:w-auto">Send invite</button>
            </div>
            <p id="empty-state-team-invite-hint" className="mt-3 text-sm text-neutral-500">Separate several addresses with commas. Each person gets an email invitation.</p>
          </form>
          <div className="flex flex-col gap-4 border-t border-neutral-200 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-neutral-600">Or share a link that adds people as members. It expires in 7 days.</p>
            <button type="button" className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:w-auto">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                <path d="M13.19 8.69a4.5 4.5 0 0 1 1.24 7.24l-4.5 4.5a4.5 4.5 0 0 1-6.36-6.36l1.76-1.76m13.35-.62 1.76-1.76a4.5 4.5 0 0 0-6.36-6.36l-4.5 4.5a4.5 4.5 0 0 0 1.24 7.24" />
              </svg>
              Copy invite link
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
