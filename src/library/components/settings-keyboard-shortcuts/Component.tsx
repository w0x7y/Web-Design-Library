export default function SettingsKeyboardShortcuts() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Keyboard shortcuts
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Explain how shortcuts can speed up common account tasks.
          </p>
        </div>
        <div className="mt-8 rounded-lg bg-neutral-50 p-6">
          <div className="flex items-start gap-3">
            <input
              id="settings-keyboard-shortcuts-enabled"
              name="enabled"
              value="enabled"
              type="checkbox"
              aria-describedby="settings-keyboard-shortcuts-enabled-hint"
              defaultChecked
              className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            />
            <div className="min-w-0">
              <label
                htmlFor="settings-keyboard-shortcuts-enabled"
                className="text-sm font-medium"
              >
                Enable keyboard shortcuts
              </label>
              <p
                id="settings-keyboard-shortcuts-enabled-hint"
                className="mt-1 text-sm text-neutral-600"
              >
                Shortcuts are inactive while typing in form fields.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-semibold">Navigation</h2>
            <dl className="mt-4 divide-y divide-neutral-200">
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="text-sm text-neutral-600">Open search</dt>
                <dd>
                  <kbd className="rounded-md border border-neutral-300 bg-neutral-50 px-2 py-1 text-xs font-mono">
                    /
                  </kbd>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="text-sm text-neutral-600">Go to overview</dt>
                <dd>
                  <kbd className="rounded-md border border-neutral-300 bg-neutral-50 px-2 py-1 text-xs font-mono">
                    G O
                  </kbd>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="text-sm text-neutral-600">Go to settings</dt>
                <dd>
                  <kbd className="rounded-md border border-neutral-300 bg-neutral-50 px-2 py-1 text-xs font-mono">
                    G S
                  </kbd>
                </dd>
              </div>
            </dl>
          </section>
          <section className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-semibold">Editing</h2>
            <dl className="mt-4 divide-y divide-neutral-200">
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="text-sm text-neutral-600">Save changes</dt>
                <dd>
                  <kbd className="rounded-md border border-neutral-300 bg-neutral-50 px-2 py-1 text-xs font-mono">
                    Ctrl S
                  </kbd>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="text-sm text-neutral-600">Undo change</dt>
                <dd>
                  <kbd className="rounded-md border border-neutral-300 bg-neutral-50 px-2 py-1 text-xs font-mono">
                    Ctrl Z
                  </kbd>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="text-sm text-neutral-600">Add item</dt>
                <dd>
                  <kbd className="rounded-md border border-neutral-300 bg-neutral-50 px-2 py-1 text-xs font-mono">
                    N
                  </kbd>
                </dd>
              </div>
            </dl>
          </section>
        </div>
        <p className="mt-6 text-sm">
          <a
            href="#"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Restore default shortcuts
          </a>
        </p>
      </div>
    </section>
  )
}
