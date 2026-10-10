export default function SettingsDescribedRows() {
  return (
    <section className="bg-white text-neutral-900">
      <form className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <p className="text-sm font-medium text-neutral-500">Workspace preferences</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Access and invitations</h1>
        <p className="mt-4 text-lg text-pretty text-neutral-600">
          Explain the scope of these preferences and who they affect.
        </p>
        <div className="mt-10">
          <div className="grid gap-6 border-t border-neutral-200 py-8 md:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="text-lg font-semibold">Permissions</h2>
              <p className="mt-2 text-sm text-neutral-600">
                Explain who can change shared content and send invitations.
              </p>
            </div>
            <div className="min-w-0">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <input
                    id="settings-described-rows-edit"
                    name="edit"
                    type="checkbox"
                    aria-describedby="settings-described-rows-edit-hint"
                    defaultChecked
                    className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <div className="min-w-0">
                    <label htmlFor="settings-described-rows-edit" className="text-sm font-medium">
                      Allow members to edit
                    </label>
                    <p id="settings-described-rows-edit-hint" className="mt-1 text-sm text-neutral-600">
                      Members can update shared items without approval.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="settings-described-rows-invite"
                    name="invite"
                    type="checkbox"
                    aria-describedby="settings-described-rows-invite-hint"
                    className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <div className="min-w-0">
                    <label htmlFor="settings-described-rows-invite" className="text-sm font-medium">
                      Allow member invitations
                    </label>
                    <p id="settings-described-rows-invite-hint" className="mt-1 text-sm text-neutral-600">
                      Members can invite someone with a workspace link.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-6 border-t border-neutral-200 py-8 md:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="text-lg font-semibold">Default access</h2>
              <p className="mt-2 text-sm text-neutral-600">
                Describe the access assigned to people joining the workspace.
              </p>
            </div>
            <div className="min-w-0">
              <div className="min-w-0">
                <label htmlFor="settings-described-rows-role" className="block text-sm font-medium">
                  Default role
                </label>
                <select
                  id="settings-described-rows-role"
                  name="role"
                  aria-describedby="settings-described-rows-role-hint"
                  className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  <option>Member</option>
                  <option>Viewer</option>
                  <option>Admin</option>
                </select>
                <p id="settings-described-rows-role-hint" className="mt-2 text-sm text-neutral-500">
                  This role applies to new members.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6 border-t border-neutral-200 py-8 md:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="text-lg font-semibold">Invitations</h2>
              <p className="mt-2 text-sm text-neutral-600">
                Describe the invitation rules and how access requests are handled.
              </p>
            </div>
            <div className="min-w-0">
              <div className="min-w-0">
                <label htmlFor="settings-described-rows-domain" className="block text-sm font-medium">
                  Email domain
                </label>
                <input
                  id="settings-described-rows-domain"
                  name="domain"
                  type="text"
                  defaultValue="example.com"
                  aria-describedby="settings-described-rows-domain-hint"
                  className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
                <p id="settings-described-rows-domain-hint" className="mt-2 text-sm text-neutral-500">
                  Leave empty to allow any email domain.
                </p>
              </div>
              <fieldset className="mt-6">
                <legend className="text-sm font-medium">Invitation approval</legend>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <input
                      id="settings-described-rows-approval-required"
                      name="approval"
                      type="radio"
                      defaultChecked
                      className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                    <div className="min-w-0">
                      <label htmlFor="settings-described-rows-approval-required" className="text-sm font-medium">
                        Require approval
                      </label>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      id="settings-described-rows-approval-auto"
                      name="approval"
                      type="radio"
                      className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                    <div className="min-w-0">
                      <label htmlFor="settings-described-rows-approval-auto" className="text-sm font-medium">
                        Approve automatically
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <footer className="flex flex-col gap-4 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">Changes apply to new activity.</p>
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Save preferences
          </button>
        </footer>
      </form>
    </section>
  )
}
