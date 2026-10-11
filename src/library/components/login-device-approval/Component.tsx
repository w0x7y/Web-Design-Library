export default function LoginDeviceApproval() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
              Approval pending
            </span>
            <div className="mt-4">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  Confirm this sign-in
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
                  Open your trusted device and review this access request.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Check approval
              </a>
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Use another method
              </a>
            </div>
            <p className="mt-4 text-sm text-neutral-500">
              Short explanation of how approval status updates.
            </p>
          </div>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-semibold">Access request</h2>
            <dl className="mt-4 divide-y divide-neutral-200">
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-sm text-neutral-600">Device</dt>
                <dd className="text-sm font-medium">Desktop browser</dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-sm text-neutral-600">Requested</dt>
                <dd className="text-sm font-medium">
                  <time dateTime="2026-10-11T09:41:00">09:41</time>
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-sm text-neutral-600">Request code</dt>
                <dd className="text-sm font-mono">482 106</dd>
              </div>
            </dl>
            <ol role="list" className="mt-6 space-y-3 text-sm text-neutral-600">
              <li>1. Open the account security screen.</li>
              <li>2. Match the request code.</li>
              <li>3. Approve access on your trusted device.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
