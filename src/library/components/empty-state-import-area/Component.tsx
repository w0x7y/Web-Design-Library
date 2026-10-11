export default function EmptyStateImportArea() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Add your first records
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Explain what content can be imported into this empty collection.
          </p>
        </div>
        <div className="mt-10 grid items-start gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <form className="rounded-lg border border-dashed border-neutral-300 bg-neutral-50 p-6 sm:p-10">
            <label
              htmlFor="empty-state-import-area-file"
              className="block text-lg font-semibold"
            >
              Choose an import file
            </label>
            <p
              id="empty-state-import-area-file-hint"
              className="mt-3 text-sm text-neutral-600"
            >
              CSV or JSON files, up to 10 MB.
            </p>
            <input
              id="empty-state-import-area-file"
              name="file"
              type="file"
              accept=".csv,.json"
              aria-describedby="empty-state-import-area-file-hint"
              className="mt-6 block w-full min-w-0 rounded-md text-sm text-neutral-600 file:mr-3 file:rounded-md file:border file:border-solid file:border-neutral-300 file:bg-white file:px-3 file:py-2 file:text-sm file:font-medium file:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Import records
              </button>
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Add manually
              </a>
            </div>
          </form>
          <aside>
            <h2 className="text-base font-semibold">Before importing</h2>
            <ul role="list" className="mt-4 space-y-4 text-sm text-neutral-600">
              <li>Use one record per row.</li>
              <li>Include a header for each field.</li>
              <li>Review required fields before uploading.</li>
            </ul>
            <p className="mt-6 text-sm">
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Download example file
              </a>
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
