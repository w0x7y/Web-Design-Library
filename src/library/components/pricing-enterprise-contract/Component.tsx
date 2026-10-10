export default function PricingEnterpriseContract() {
  return (
    <section className="bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
              Plans for serious work
            </p>
            <h2 className="mt-4 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
              Grow with
              <br />
              the right controls.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              Start with your team. Add the governance your organization needs
              as your workspace grows.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold">Team</h3>
              <p className="mt-2 text-sm text-slate-600">
                For teams building a shared practice.
              </p>
              <p className="mt-7 text-4xl font-semibold tracking-tight">
                $24
                <span className="ml-1 text-sm font-normal text-slate-600">
                  / seat / month
                </span>
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Billed annually. Minimum 5 seats.
              </p>
              <ul role="list" className="my-7 flex-1 space-y-3 text-sm text-slate-600">
                <li>Unlimited workspaces</li>
                <li>Guest collaboration</li>
                <li>90-day activity history</li>
                <li>Priority email support</li>
              </ul>
              <a
                href="#"
                className="flex min-h-11 items-center justify-center rounded-lg bg-blue-700 px-4 text-sm font-semibold text-white hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                Start a team trial
              </a>
            </article>
            <article className="flex flex-col rounded-xl border-2 border-blue-700 bg-white p-6">
              <div className="flex flex-wrap justify-between gap-2">
                <h3 className="text-xl font-semibold">Enterprise</h3>
                <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                  Annual contract
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                For organizations with complex needs.
              </p>
              <p className="mt-7 text-4xl font-semibold tracking-tight">
                Let's talk
              </p>
              <p className="mt-2 text-xs text-slate-500">
                A plan scoped to your organization.
              </p>
              <ul role="list" className="my-7 flex-1 space-y-3 text-sm text-slate-600">
                <li>Everything in Team</li>
                <li>SAML SSO and SCIM provisioning</li>
                <li>Custom retention policies</li>
                <li>Dedicated success manager</li>
              </ul>
              <a
                href="#"
                className="flex min-h-11 items-center justify-center rounded-lg border border-blue-700 px-4 text-sm font-semibold text-blue-700 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                Contact our team
              </a>
            </article>
          </div>
        </div>
        <div className="mt-10 grid gap-5 border-t border-slate-200 pt-6 text-sm text-slate-600 md:grid-cols-3">
          <p className="flex gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5 shrink-0 text-blue-700"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
            Encryption in transit and at rest
          </p>
          <p className="flex gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5 shrink-0 text-blue-700"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
            Export your data at any time
          </p>
          <p className="flex gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5 shrink-0 text-blue-700"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
            EU or US data residency
          </p>
        </div>
      </div>
    </section>
  )
}
