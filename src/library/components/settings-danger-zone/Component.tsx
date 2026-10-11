export default function SettingsDangerZone() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Workspace actions</h1>
        <p className="mt-4 text-lg text-pretty text-neutral-600">
          Explain which actions affect everyone and need careful review.
        </p>
        <div className="mt-10 rounded-lg border border-neutral-200 bg-white">
          <div className="p-6">
            <h2 className="text-lg font-semibold">Danger zone</h2>
            <p className="mt-2 text-sm text-neutral-600">Review the consequences before changing workspace access.</p>
          </div>
          <div className="flex flex-col gap-4 border-t border-neutral-200 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <h3 className="text-base font-semibold">Transfer ownership</h3>
              <p className="mt-2 text-sm text-neutral-600">Give another member control of this workspace.</p>
            </div>
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 w-full shrink-0 sm:w-auto"
            >
              Transfer ownership
            </button>
          </div>
          <div className="flex flex-col gap-4 border-t border-neutral-200 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <h3 className="text-base font-semibold">Archive workspace</h3>
              <p className="mt-2 text-sm text-neutral-600">Make this workspace read-only for every member.</p>
            </div>
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 w-full shrink-0 sm:w-auto"
            >
              Archive workspace
            </button>
          </div>
          <details className="group border-t border-neutral-200">
            <summary className="flex cursor-pointer list-none flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
              <span className="min-w-0">
                <span className="block text-base font-semibold">Delete workspace</span>
                <span className="mt-2 block text-sm text-neutral-600">
                  Permanently remove this workspace and all its records.
                </span>
              </span>
              <span className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-md border border-neutral-900 bg-white px-5 text-sm font-medium transition-colors group-hover:bg-neutral-50 sm:w-auto">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 shrink-0"
                >
                  <path d="M3 6h18M9 6V4h6v2M5 6l1 14h12l1-14M10 10v6M14 10v6" />
                </svg>
                Delete workspace
              </span>
            </summary>
            <form className="rounded-b-lg border-t border-neutral-200 bg-neutral-50 p-6">
              <div className="flex items-start gap-3 text-sm text-neutral-900">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 shrink-0"
                >
                  <path d="m12 3 10 18H2L12 3ZM12 9v4M12 17h.01" />
                </svg>
                <p id="settings-danger-zone-warning">
                  This action cannot be undone. Every member will lose access to the workspace and its records.
                </p>
              </div>
              <div className="mt-6">
                <div className="min-w-0">
                  <label htmlFor="settings-danger-zone-confirm" className="block text-sm font-medium">
                    Type the workspace name to confirm
                  </label>
                  <input
                    id="settings-danger-zone-confirm"
                    name="confirm"
                    type="text"
                    defaultValue=""
                    aria-describedby="settings-danger-zone-confirm-hint"
                    className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                  <p id="settings-danger-zone-confirm-hint" className="mt-2 text-sm text-neutral-500">
                    Enter the exact workspace name. The example name is Workspace name.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  aria-describedby="settings-danger-zone-warning"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 w-full gap-2 sm:w-auto"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5 shrink-0"
                  >
                    <path d="M3 6h18M9 6V4h6v2M5 6l1 14h12l1-14M10 10v6M14 10v6" />
                  </svg>
                  Delete permanently
                </button>
              </div>
            </form>
          </details>
        </div>
      </div>
    </section>
  )
}
