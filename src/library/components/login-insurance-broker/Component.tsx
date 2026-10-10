export default function LoginInsuranceBroker() {
  return (
    <section className="bg-blue-50 px-6 py-10 text-slate-950 sm:px-10 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xl font-semibold tracking-tight">Coverbranch</p>
          <p className="text-xs font-medium text-blue-800">INDEPENDENT BROKER SERVICES</p>
        </header>
        <div className="mt-8 overflow-hidden rounded-xl border border-blue-200 bg-white">
          <header className="grid gap-3 border-b border-blue-200 p-6 sm:p-8">
            <h1 className="text-3xl font-semibold tracking-tight">Your clients. Your broker desk.</h1>
            <p className="text-sm leading-6 text-slate-600">Manage renewals, request cover and track applications for your agency.</p>
          </header>
          <div className="grid lg:grid-cols-[1fr_1.3fr]">
            <aside className="grid content-start gap-6 bg-blue-50 p-6 sm:p-8">
              <h2 className="text-xs font-semibold tracking-widest text-blue-800">AGENCY ACCESS</h2>
              <dl className="grid gap-5">
                <div className="border-b border-blue-200 pb-4">
                  <dt className="text-xs text-slate-600">Business cover</dt>
                  <dd className="mt-2 text-base font-medium">Property &amp; professional indemnity</dd>
                </div>
                <div className="border-b border-blue-200 pb-4">
                  <dt className="text-xs text-slate-600">Desk hours</dt>
                  <dd className="mt-2 text-base font-medium">Monday to Friday / 8:30–17:30</dd>
                </div>
              </dl>
              <details className="rounded-lg border border-blue-200 bg-white p-4">
                <summary
                  className="cursor-pointer text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                >
                  Joining an agency?
                </summary>
                <p
                  className="mt-3 text-sm leading-6 text-slate-600"
                >
                  Your agency principal can invite you from Team access. Invitations are sent to your work email.
                </p>
              </details>
            </aside>
            <div className="p-6 sm:p-8 lg:p-10">
              <h2 className="text-xl font-semibold">Broker sign-in</h2>
              <form action="#" method="post" className="mt-6 grid gap-5">
                <label htmlFor="login-insurance-broker-email" className="grid gap-2 text-sm font-medium">
                  Broker email
                  <input
                    id="login-insurance-broker-email"
                    name="email"
                    type="email"
                    autoComplete="username"
                    required
                    aria-describedby="login-insurance-broker-hint"
                    className="h-12 min-w-0 w-full border border-blue-700 bg-white px-3 text-sm font-normal rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  />
                </label>
                <label htmlFor="login-insurance-broker-password" className="grid gap-2 text-sm font-medium">
                  Password
                  <input
                    id="login-insurance-broker-password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="h-12 min-w-0 w-full border border-blue-700 bg-white px-3 text-sm font-normal rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  />
                </label>
                <button
                  type="submit"
                  className="flex min-h-12 cursor-pointer items-center justify-center gap-3 bg-blue-800 px-5 py-3 text-sm font-semibold text-white rounded-lg hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                >
                  Sign in to broker desk
                </button>
                <a
                  href="#"
                  className="w-fit text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                >
                  Trouble signing in?
                </a>
              </form>
              <p
                id="login-insurance-broker-hint"
                className="mt-5 text-xs leading-5 text-slate-600"
              >
                Use your individual account. Your agency code is linked to your profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
