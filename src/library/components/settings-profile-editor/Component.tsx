export default function SettingsProfileEditor() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Edit your profile
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Describe which profile details are visible to other members.
          </p>
        </div>
        <form className="mt-10 grid items-start gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <aside className="rounded-lg bg-neutral-50 p-6">
            <span
              aria-hidden="true"
              className="flex size-16 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
            >
              AR
            </span>
            <h2 className="mt-4 text-lg font-semibold">Alex Rivera</h2>
            <p className="mt-2 text-sm text-neutral-600">
              Profile visibility summary.
            </p>
            <p className="mt-6 text-sm">
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                View public profile
              </a>
            </p>
          </aside>
          <div>
            <fieldset>
              <legend className="text-base font-semibold">
                Public profile
              </legend>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="min-w-0">
                  <label
                    htmlFor="settings-profile-editor-name"
                    className="block text-sm font-medium"
                  >
                    Display name
                  </label>
                  <input
                    id="settings-profile-editor-name"
                    name="name"
                    type="text"
                    defaultValue="Alex Rivera"
                    required
                    className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </div>
                <div className="min-w-0">
                  <label
                    htmlFor="settings-profile-editor-role"
                    className="block text-sm font-medium"
                  >
                    Role
                  </label>
                  <input
                    id="settings-profile-editor-role"
                    name="role"
                    type="text"
                    placeholder="Role or job title"
                    className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="settings-profile-editor-bio"
                  className="block text-sm font-medium"
                >
                  Biography
                </label>
                <textarea
                  id="settings-profile-editor-bio"
                  name="biography"
                  rows={3}
                  aria-describedby="settings-profile-editor-bio-hint"
                  className="mt-2 w-full rounded-md border border-neutral-300 bg-white p-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  placeholder="Short introduction and responsibilities"
                />
                <p
                  id="settings-profile-editor-bio-hint"
                  className="mt-2 text-sm text-neutral-600"
                >
                  Keep your introduction under 160 characters.
                </p>
              </div>
            </fieldset>
            <fieldset className="mt-8 border-t border-neutral-200 pt-8">
              <legend className="text-base font-semibold">
                Contact details
              </legend>
              <div className="mt-6">
                <div className="min-w-0">
                  <label
                    htmlFor="settings-profile-editor-email"
                    className="block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="settings-profile-editor-email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                    autoComplete="email"
                    aria-describedby="settings-profile-editor-email-hint"
                    className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <p
                    id="settings-profile-editor-email-hint"
                    className="mt-2 text-sm text-neutral-600"
                  >
                    Your email is private unless you choose to share it.
                  </p>
                </div>
              </div>
            </fieldset>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Save profile
              </button>
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Cancel
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
