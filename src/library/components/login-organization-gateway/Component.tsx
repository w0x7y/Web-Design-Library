export default function LoginOrganizationGateway() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="max-w-3xl">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Find your organization
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
              Enter the workspace address to continue with your organization
              account.
            </p>
          </div>
        </div>
        <form className="mt-10 grid items-end gap-4 rounded-lg border border-neutral-200 p-6 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <label
              htmlFor="login-organization-gateway-domain"
              className="block text-sm font-medium"
            >
              Workspace address
            </label>
            <div className="mt-2 flex min-w-0">
              <input
                id="login-organization-gateway-domain"
                name="domain"
                type="text"
                required
                autoComplete="organization"
                aria-describedby="login-organization-gateway-hint"
                placeholder="workspace"
                className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 rounded-r-none"
              />
              <span className="flex shrink-0 items-center rounded-r-md border border-l-0 border-neutral-300 px-3 text-sm text-neutral-600">
                .example.com
              </span>
            </div>
            <p
              id="login-organization-gateway-hint"
              className="mt-2 text-sm text-neutral-600"
            >
              Use the address supplied by your administrator.
            </p>
          </div>
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Continue
          </button>
        </form>
        <dl className="mt-8 grid gap-6 sm:grid-cols-3">
          <div>
            <dt className="text-sm font-semibold">Managed access</dt>
            <dd className="mt-2 text-sm text-neutral-600">
              Short identity-provider note.
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold">Account requirements</dt>
            <dd className="mt-2 text-sm text-neutral-600">
              Short membership requirement.
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold">Need help?</dt>
            <dd className="mt-2 text-sm">
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Contact administrator
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
