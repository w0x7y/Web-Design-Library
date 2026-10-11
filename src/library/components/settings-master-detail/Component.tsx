export default function SettingsMasterDetail() {
  return (
    <section className="bg-white text-neutral-900">
      <form className="group mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Member settings</h1>
        <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
          Select a member to review their permissions and default access.
        </p>
        <div className="mt-10 grid items-start gap-12 lg:grid-cols-[22rem_minmax(0,1fr)]">
          <fieldset className="min-w-0">
            <legend className="text-base font-semibold">Choose member</legend>
            <div className="mt-4 space-y-3">
              <label className="flex cursor-pointer items-center gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 has-[:checked]:border-neutral-900 has-[:checked]:bg-white has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  AR
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">Alex Rivera</span>
                  <span className="mt-1 block text-xs text-neutral-500">Admin · Last active Mar 14</span>
                </span>
                <input
                  id="settings-master-detail-alex"
                  type="radio"
                  name="member"
                  value="alex"
                  defaultChecked
                  aria-label="Select Alex Rivera"
                  className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
              </label>
              <label className="flex cursor-pointer items-center gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 has-[:checked]:border-neutral-900 has-[:checked]:bg-white has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  JL
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">Jordan Lee</span>
                  <span className="mt-1 block text-xs text-neutral-500">Member · Last active Mar 13</span>
                </span>
                <input
                  id="settings-master-detail-jordan"
                  type="radio"
                  name="member"
                  value="jordan"
                  aria-label="Select Jordan Lee"
                  className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
              </label>
              <label className="flex cursor-pointer items-center gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 has-[:checked]:border-neutral-900 has-[:checked]:bg-white has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  ST
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">Sam Taylor</span>
                  <span className="mt-1 block text-xs text-neutral-500">Viewer · Last active Mar 12</span>
                </span>
                <input
                  id="settings-master-detail-sam"
                  type="radio"
                  name="member"
                  value="sam"
                  aria-label="Select Sam Taylor"
                  className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
              </label>
            </div>
          </fieldset>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
            <fieldset className="hidden min-w-0 group-has-[#settings-master-detail-alex:checked]:block">
              <legend className="text-lg font-semibold">Alex Rivera</legend>
              <p className="mt-2 text-sm text-neutral-600">
                Describe the permissions and default access for this member.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-3">
                  <input
                    id="settings-master-detail-alex-edit"
                    name="alex-edit"
                    type="checkbox"
                    aria-describedby="settings-master-detail-alex-edit-hint"
                    defaultChecked
                    className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <div className="min-w-0">
                    <label htmlFor="settings-master-detail-alex-edit" className="text-sm font-medium">
                      Edit shared content
                    </label>
                    <p id="settings-master-detail-alex-edit-hint" className="mt-1 text-sm text-neutral-600">
                      Allow this member to update shared items.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="settings-master-detail-alex-invite"
                    name="alex-invite"
                    type="checkbox"
                    aria-describedby="settings-master-detail-alex-invite-hint"
                    defaultChecked
                    className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <div className="min-w-0">
                    <label htmlFor="settings-master-detail-alex-invite" className="text-sm font-medium">
                      Invite members
                    </label>
                    <p id="settings-master-detail-alex-invite-hint" className="mt-1 text-sm text-neutral-600">
                      Allow this member to send workspace invitations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="settings-master-detail-alex-export"
                    name="alex-export"
                    type="checkbox"
                    aria-describedby="settings-master-detail-alex-export-hint"
                    defaultChecked
                    className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <div className="min-w-0">
                    <label htmlFor="settings-master-detail-alex-export" className="text-sm font-medium">
                      Export records
                    </label>
                    <p id="settings-master-detail-alex-export-hint" className="mt-1 text-sm text-neutral-600">
                      Allow this member to download workspace data.
                    </p>
                  </div>
                </div>
                <div className="min-w-0">
                  <label htmlFor="settings-master-detail-alex-role" className="block text-sm font-medium">
                    Default role
                  </label>
                  <select
                    id="settings-master-detail-alex-role"
                    name="alex-role"
                    aria-describedby="settings-master-detail-alex-role-hint"
                    className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    <option>Admin</option>
                    <option>Member</option>
                    <option>Viewer</option>
                  </select>
                  <p id="settings-master-detail-alex-role-hint" className="mt-2 text-sm text-neutral-500">
                    Use this role for new shared items.
                  </p>
                </div>
              </div>
            </fieldset>
            <fieldset className="hidden min-w-0 group-has-[#settings-master-detail-jordan:checked]:block">
              <legend className="text-lg font-semibold">Jordan Lee</legend>
              <p className="mt-2 text-sm text-neutral-600">
                Describe the permissions and default access for this member.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-3">
                  <input
                    id="settings-master-detail-jordan-edit"
                    name="jordan-edit"
                    type="checkbox"
                    aria-describedby="settings-master-detail-jordan-edit-hint"
                    defaultChecked
                    className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <div className="min-w-0">
                    <label htmlFor="settings-master-detail-jordan-edit" className="text-sm font-medium">
                      Edit shared content
                    </label>
                    <p id="settings-master-detail-jordan-edit-hint" className="mt-1 text-sm text-neutral-600">
                      Allow this member to update shared items.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="settings-master-detail-jordan-invite"
                    name="jordan-invite"
                    type="checkbox"
                    aria-describedby="settings-master-detail-jordan-invite-hint"
                    className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <div className="min-w-0">
                    <label htmlFor="settings-master-detail-jordan-invite" className="text-sm font-medium">
                      Invite members
                    </label>
                    <p id="settings-master-detail-jordan-invite-hint" className="mt-1 text-sm text-neutral-600">
                      Allow this member to send workspace invitations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="settings-master-detail-jordan-export"
                    name="jordan-export"
                    type="checkbox"
                    aria-describedby="settings-master-detail-jordan-export-hint"
                    className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <div className="min-w-0">
                    <label htmlFor="settings-master-detail-jordan-export" className="text-sm font-medium">
                      Export records
                    </label>
                    <p id="settings-master-detail-jordan-export-hint" className="mt-1 text-sm text-neutral-600">
                      Allow this member to download workspace data.
                    </p>
                  </div>
                </div>
                <div className="min-w-0">
                  <label htmlFor="settings-master-detail-jordan-role" className="block text-sm font-medium">
                    Default role
                  </label>
                  <select
                    id="settings-master-detail-jordan-role"
                    name="jordan-role"
                    aria-describedby="settings-master-detail-jordan-role-hint"
                    className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    <option>Member</option>
                    <option>Viewer</option>
                    <option>Admin</option>
                  </select>
                  <p id="settings-master-detail-jordan-role-hint" className="mt-2 text-sm text-neutral-500">
                    Use this role for new shared items.
                  </p>
                </div>
              </div>
            </fieldset>
            <fieldset className="hidden min-w-0 group-has-[#settings-master-detail-sam:checked]:block">
              <legend className="text-lg font-semibold">Sam Taylor</legend>
              <p className="mt-2 text-sm text-neutral-600">
                Describe the permissions and default access for this member.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-3">
                  <input
                    id="settings-master-detail-sam-edit"
                    name="sam-edit"
                    type="checkbox"
                    aria-describedby="settings-master-detail-sam-edit-hint"
                    className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <div className="min-w-0">
                    <label htmlFor="settings-master-detail-sam-edit" className="text-sm font-medium">
                      Edit shared content
                    </label>
                    <p id="settings-master-detail-sam-edit-hint" className="mt-1 text-sm text-neutral-600">
                      Allow this member to update shared items.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="settings-master-detail-sam-invite"
                    name="sam-invite"
                    type="checkbox"
                    aria-describedby="settings-master-detail-sam-invite-hint"
                    className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <div className="min-w-0">
                    <label htmlFor="settings-master-detail-sam-invite" className="text-sm font-medium">
                      Invite members
                    </label>
                    <p id="settings-master-detail-sam-invite-hint" className="mt-1 text-sm text-neutral-600">
                      Allow this member to send workspace invitations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="settings-master-detail-sam-export"
                    name="sam-export"
                    type="checkbox"
                    aria-describedby="settings-master-detail-sam-export-hint"
                    className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <div className="min-w-0">
                    <label htmlFor="settings-master-detail-sam-export" className="text-sm font-medium">
                      Export records
                    </label>
                    <p id="settings-master-detail-sam-export-hint" className="mt-1 text-sm text-neutral-600">
                      Allow this member to download workspace data.
                    </p>
                  </div>
                </div>
                <div className="min-w-0">
                  <label htmlFor="settings-master-detail-sam-role" className="block text-sm font-medium">
                    Default role
                  </label>
                  <select
                    id="settings-master-detail-sam-role"
                    name="sam-role"
                    aria-describedby="settings-master-detail-sam-role-hint"
                    className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    <option>Viewer</option>
                    <option>Member</option>
                    <option>Admin</option>
                  </select>
                  <p id="settings-master-detail-sam-role-hint" className="mt-2 text-sm text-neutral-500">
                    Use this role for new shared items.
                  </p>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <footer className="mt-8 flex flex-col gap-4 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">Changes apply when you save member settings.</p>
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Save changes
          </button>
        </footer>
      </form>
    </section>
  )
}
