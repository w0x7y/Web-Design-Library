export default function SignupWorkspaceSetup() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Create your workspace
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Describe what the workspace will hold and who can join.
          </p>
        </div>
        <form className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="min-w-0">
              <label
                htmlFor="signup-workspace-setup-workspace"
                className="block text-sm font-medium"
              >
                Workspace name
              </label>
              <input
                id="signup-workspace-setup-workspace"
                name="workspace"
                type="text"
                required
                aria-describedby="signup-workspace-setup-workspace-hint"
                className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              />
              <p
                id="signup-workspace-setup-workspace-hint"
                className="mt-2 text-sm text-neutral-600"
              >
                Use a name your collaborators will recognize.
              </p>
            </div>
            <div className="min-w-0">
              <label
                htmlFor="signup-workspace-setup-address"
                className="block text-sm font-medium"
              >
                Workspace URL
              </label>
              <input
                id="signup-workspace-setup-address"
                name="address"
                type="text"
                placeholder="workspace-name"
                required
                aria-describedby="signup-workspace-setup-address-hint"
                className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              />
              <p
                id="signup-workspace-setup-address-hint"
                className="mt-2 text-sm text-neutral-600"
              >
                Choose a short address with letters and numbers.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="min-w-0">
                <label
                  htmlFor="signup-workspace-setup-name"
                  className="block text-sm font-medium"
                >
                  Your name
                </label>
                <input
                  id="signup-workspace-setup-name"
                  name="name"
                  type="text"
                  defaultValue="Alex Rivera"
                  required
                  className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
              </div>
              <div className="min-w-0">
                <label
                  htmlFor="signup-workspace-setup-email"
                  className="block text-sm font-medium"
                >
                  Work email
                </label>
                <input
                  id="signup-workspace-setup-email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  autoComplete="email"
                  className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Create workspace
            </button>
          </div>
          <aside className="rounded-lg bg-neutral-50 p-6">
            <h2 className="text-lg font-semibold">Setup overview</h2>
            <ol role="list" className="mt-6 space-y-6">
              <li>
                <p className="text-xs font-mono text-neutral-500">01</p>
                <h3 className="mt-1 text-base font-semibold">
                  Name the workspace
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Current step description.
                </p>
              </li>
              <li>
                <p className="text-xs font-mono text-neutral-500">02</p>
                <h3 className="mt-1 text-base font-semibold">
                  Invite collaborators
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Next step description.
                </p>
              </li>
              <li>
                <p className="text-xs font-mono text-neutral-500">03</p>
                <h3 className="mt-1 text-base font-semibold">
                  Add first content
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Final setup description.
                </p>
              </li>
            </ol>
          </aside>
        </form>
      </div>
    </section>
  )
}
