export default function SettingsWorkspaceAccess() {
  return (
    <section className="bg-slate-950 px-6 py-10 text-slate-100 sm:px-12">
      <form className="mx-auto max-w-3xl" action="#">
        <header className="border-b border-slate-700 pb-6">
          <p className="text-xs font-medium tracking-widest text-cyan-300">
            ADMINISTRATION
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Workspace access
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Rules for who can join and what leaves your team.
          </p>
        </header>
        <div className="mt-7 grid gap-7 md:grid-cols-[1fr_1.4fr]">
          <div className="grid content-start gap-2">
            <h3 className="text-lg font-semibold">Invitations</h3>
            <p className="text-sm leading-6 text-slate-400">
              Apply these rules to all new members.
            </p>
          </div>
          <div className="grid gap-5">
            <label
              className="flex items-start gap-3 text-sm"
              htmlFor="settings-workspace-access-invites"
            >
              <input
                className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                type="checkbox"
                name="invites"
                id="settings-workspace-access-invites"
                defaultChecked
                aria-labelledby="settings-workspace-access-invites-label"
                aria-describedby="settings-workspace-access-invites-hint"
              />
              <span className="grid gap-1">
                <span
                  id="settings-workspace-access-invites-label"
                  className="font-medium"
                >
                  Allow member invitations
                </span>
                <span
                  className="text-xs leading-5 opacity-70"
                  id="settings-workspace-access-invites-hint"
                >
                  Members can invite new collaborators.
                </span>
              </span>
            </label>
            <label
              className="flex items-start gap-3 text-sm"
              htmlFor="settings-workspace-access-approval"
            >
              <input
                className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                type="checkbox"
                name="approval"
                id="settings-workspace-access-approval"
                defaultChecked
                aria-labelledby="settings-workspace-access-approval-label"
                aria-describedby="settings-workspace-access-approval-hint"
              />
              <span className="grid gap-1">
                <span
                  id="settings-workspace-access-approval-label"
                  className="font-medium"
                >
                  Require admin approval
                </span>
                <span
                  className="text-xs leading-5 opacity-70"
                  id="settings-workspace-access-approval-hint"
                >
                  Review requests before granting access.
                </span>
              </span>
            </label>
          </div>
        </div>
        <div className="mt-7 grid gap-7 border-t border-slate-700 pt-7 md:grid-cols-[1fr_1.4fr]">
          <div className="grid content-start gap-2">
            <h3 className="text-lg font-semibold">External sharing</h3>
            <p className="text-sm leading-6 text-slate-400">
              Control public access to workspace files.
            </p>
          </div>
          <label
            className="grid gap-2 text-sm"
            htmlFor="settings-workspace-access-sharing"
          >
            Default link access
            <select
              className="min-w-0 w-full rounded-lg border border-slate-500 bg-slate-900 px-3 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              name="sharing"
              id="settings-workspace-access-sharing"
            >
              <option value="members">Workspace members only</option>
              <option value="public">Anyone with the link</option>
            </select>
          </label>
        </div>
        <footer className="mt-8 flex justify-end border-t border-slate-700 pt-6">
          <button
            className="cursor-pointer rounded-lg bg-cyan-200 px-5 py-3 text-sm font-semibold text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            type="button"
          >
            Save access rules
          </button>
        </footer>
      </form>
    </section>
  )
}
