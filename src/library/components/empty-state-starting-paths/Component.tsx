export default function EmptyStateStartingPaths() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Choose a starting point
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Your workspace is ready. Choose how to add the first content.
          </p>
        </div>
        <ol role="list" className="mt-10 grid gap-6 md:grid-cols-3">
          <li className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <p className="text-xs font-mono text-neutral-500">01</p>
            <h2 className="mt-3 text-lg font-semibold">Create manually</h2>
            <p className="mt-3 text-sm text-neutral-600">
              Describe the fastest route for a single item.
            </p>
            <p className="mt-6 text-sm">
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Create first item
              </a>
            </p>
          </li>
          <li className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <p className="text-xs font-mono text-neutral-500">02</p>
            <h2 className="mt-3 text-lg font-semibold">Import a file</h2>
            <p className="mt-3 text-sm text-neutral-600">
              Describe how existing records can be brought in.
            </p>
            <p className="mt-6 text-sm">
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Start an import
              </a>
            </p>
          </li>
          <li className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <p className="text-xs font-mono text-neutral-500">03</p>
            <h2 className="mt-3 text-lg font-semibold">Use an example</h2>
            <p className="mt-3 text-sm text-neutral-600">
              Describe the sample data available for exploration.
            </p>
            <p className="mt-6 text-sm">
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Open example data
              </a>
            </p>
          </li>
        </ol>
        <p className="mt-8 text-center text-sm">
          <a
            href="#"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Read the getting-started guide
          </a>
        </p>
      </div>
    </section>
  )
}
