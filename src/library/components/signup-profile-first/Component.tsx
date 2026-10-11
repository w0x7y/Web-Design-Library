export default function SignupProfileFirst() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Set up your member profile
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Describe where your name and profile will appear.
          </p>
        </div>
        <form className="mt-10">
          <div className="grid items-start gap-6 sm:grid-cols-[auto_minmax(0,1fr)]">
            <div className="rounded-lg bg-neutral-50 p-6 text-center">
              <span
                aria-hidden="true"
                className="flex size-16 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
              >
                AR
              </span>
              <p className="mt-4 text-xs text-neutral-500">Initials preview</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="min-w-0">
                <label
                  htmlFor="signup-profile-first-name"
                  className="block text-sm font-medium"
                >
                  Display name
                </label>
                <input
                  id="signup-profile-first-name"
                  name="name"
                  type="text"
                  defaultValue="Alex Rivera"
                  required
                  aria-describedby="signup-profile-first-name-hint"
                  className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
                <p
                  id="signup-profile-first-name-hint"
                  className="mt-2 text-sm text-neutral-600"
                >
                  Shown beside your shared content.
                </p>
              </div>
              <div className="min-w-0">
                <label
                  htmlFor="signup-profile-first-handle"
                  className="block text-sm font-medium"
                >
                  Profile handle
                </label>
                <input
                  id="signup-profile-first-handle"
                  name="handle"
                  type="text"
                  placeholder="alex-rivera"
                  required
                  aria-describedby="signup-profile-first-handle-hint"
                  className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
                <p
                  id="signup-profile-first-handle-hint"
                  className="mt-2 text-sm text-neutral-600"
                >
                  Use letters, numbers and hyphens.
                </p>
              </div>
            </div>
          </div>
          <fieldset className="mt-8 rounded-lg border border-neutral-200 p-6">
            <legend className="px-2 text-base font-semibold">
              Account credentials
            </legend>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="min-w-0">
                <label
                  htmlFor="signup-profile-first-email"
                  className="block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="signup-profile-first-email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  autoComplete="email"
                  className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
              </div>
              <div className="min-w-0">
                <label
                  htmlFor="signup-profile-first-password"
                  className="block text-sm font-medium"
                >
                  Password
                </label>
                <input
                  id="signup-profile-first-password"
                  name="password"
                  type="password"
                  required
                  autoComplete="new-password"
                  aria-describedby="signup-profile-first-password-hint"
                  className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
                <p
                  id="signup-profile-first-password-hint"
                  className="mt-2 text-sm text-neutral-600"
                >
                  Use at least 12 characters.
                </p>
              </div>
            </div>
          </fieldset>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Create profile
            </button>
            <p className="text-sm">
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Sign in instead
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
