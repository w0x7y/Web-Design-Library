export default function InputsCommandSearch() {
  return (
    <section
      aria-label="Workspace search"
      className="w-72 rounded-2xl border border-zinc-700 bg-zinc-950 p-4 text-zinc-100"
    >
      <label
        htmlFor="inputs-command-search-query"
        className="text-xs font-medium text-zinc-400"
      >
        Find anything in Orbit
      </label>
      <div className="relative mt-2">
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="pointer-events-none absolute top-3.5 left-3 size-4 text-zinc-400"
        >
          <circle cx="8.5" cy="8.5" r="5" />
          <path d="m12 12 5 5" />
        </svg>
        <input
          id="inputs-command-search-query"
          type="search"
          name="query"
          placeholder="Search your workspace"
          className="h-11 w-full rounded-lg border border-zinc-600 bg-zinc-900 pr-3 pl-9 text-sm placeholder:text-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 leading-[normal]"
        />
      </div>
      <fieldset className="mt-4">
        <legend className="mb-2 text-[10px] tracking-widest text-zinc-500 uppercase">
          Search in
        </legend>
        <div className="flex gap-2">
          <label className="cursor-pointer rounded-md border border-zinc-700 px-3 py-1.5 text-xs has-checked:border-zinc-500 has-checked:bg-zinc-700 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-lime-300">
            <input
              type="radio"
              name="inputs-command-search-scope"
              value="all"
              defaultChecked
              className="sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            />
            All
          </label>
          <label className="cursor-pointer rounded-md border border-zinc-700 px-3 py-1.5 text-xs has-checked:border-zinc-500 has-checked:bg-zinc-700 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-lime-300">
            <input
              type="radio"
              name="inputs-command-search-scope"
              value="files"
              className="sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            />
            Files
          </label>
          <label className="cursor-pointer rounded-md border border-zinc-700 px-3 py-1.5 text-xs has-checked:border-zinc-500 has-checked:bg-zinc-700 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-lime-300">
            <input
              type="radio"
              name="inputs-command-search-scope"
              value="people"
              className="sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            />
            People
          </label>
        </div>
      </fieldset>
      <p className="mt-5 text-[10px] tracking-widest text-zinc-500 uppercase">
        Suggested
      </p>
      <button
        type="button"
        className="mt-2 flex h-11 w-full items-center gap-3 rounded-lg bg-zinc-900 px-3 text-left text-sm transition-colors motion-reduce:transition-none hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
      >
        <span aria-hidden="true" className="text-lg text-lime-300">
          +
        </span>
        Create a new document
        <span aria-hidden="true" className="ml-auto text-zinc-500">
          ↵
        </span>
      </button>
    </section>
  )
}
