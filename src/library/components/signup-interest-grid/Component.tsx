export default function SignupInterestGrid() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Choose what you want to follow
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Select the topics that should shape your first account view.
          </p>
        </div>
        <form className="mt-10">
          <fieldset>
            <legend className="text-base font-semibold">Your interests</legend>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-neutral-200 p-6">
                <div className="flex items-start gap-3">
                  <input
                    id="signup-interest-grid-topic"
                    name="topic"
                    value="topic"
                    type="checkbox"
                    aria-describedby="signup-interest-grid-topic-hint"
                    defaultChecked
                    className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <div className="min-w-0">
                    <label
                      htmlFor="signup-interest-grid-topic"
                      className="text-sm font-medium"
                    >
                      Topic label
                    </label>
                    <p
                      id="signup-interest-grid-topic-hint"
                      className="mt-1 text-sm text-neutral-600"
                    >
                      Describe this content preference.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-neutral-200 p-6">
                <div className="flex items-start gap-3">
                  <input
                    id="signup-interest-grid-category"
                    name="category"
                    value="category"
                    type="checkbox"
                    aria-describedby="signup-interest-grid-category-hint"
                    className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <div className="min-w-0">
                    <label
                      htmlFor="signup-interest-grid-category"
                      className="text-sm font-medium"
                    >
                      Category label
                    </label>
                    <p
                      id="signup-interest-grid-category-hint"
                      className="mt-1 text-sm text-neutral-600"
                    >
                      Describe this learning preference.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-neutral-200 p-6">
                <div className="flex items-start gap-3">
                  <input
                    id="signup-interest-grid-collection"
                    name="collection"
                    value="collection"
                    type="checkbox"
                    aria-describedby="signup-interest-grid-collection-hint"
                    className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <div className="min-w-0">
                    <label
                      htmlFor="signup-interest-grid-collection"
                      className="text-sm font-medium"
                    >
                      Collection label
                    </label>
                    <p
                      id="signup-interest-grid-collection-hint"
                      className="mt-1 text-sm text-neutral-600"
                    >
                      Describe this update preference.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-neutral-200 p-6">
                <div className="flex items-start gap-3">
                  <input
                    id="signup-interest-grid-format"
                    name="format"
                    value="format"
                    type="checkbox"
                    aria-describedby="signup-interest-grid-format-hint"
                    className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <div className="min-w-0">
                    <label
                      htmlFor="signup-interest-grid-format"
                      className="text-sm font-medium"
                    >
                      Format label
                    </label>
                    <p
                      id="signup-interest-grid-format-hint"
                      className="mt-1 text-sm text-neutral-600"
                    >
                      Describe this delivery preference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="mt-8 grid items-end gap-4 border-t border-neutral-200 pt-8 sm:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <label
                htmlFor="signup-interest-grid-email"
                className="block text-sm font-medium"
              >
                Email
              </label>
              <input
                id="signup-interest-grid-email"
                name="email"
                type="email"
                placeholder="name@example.com"
                required
                autoComplete="email"
                className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Create account
            </button>
          </div>
          <p className="mt-4 text-sm text-neutral-600">
            You can change these interests in account settings.
          </p>
        </form>
      </div>
    </section>
  )
}
