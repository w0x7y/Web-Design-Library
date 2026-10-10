export default function HeroCareersSearch() {
  return (
    <section className="bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="text-sm font-semibold text-blue-700">
          Good work starts with the right team
        </p>
        <h1 className="mx-auto mt-5 max-w-3xl text-[2.5rem] leading-tight font-semibold tracking-tight text-balance sm:text-6xl">
          Find a role worth
          <br className="hidden sm:block" /> getting up for.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600">
          Thoughtful companies. Transparent salaries. A smaller list of better
          opportunities, updated every morning.
        </p>
        <form
          action="#"
          method="get"
          className="mt-10 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]"
        >
          <div>
            <label
              htmlFor="hero-careers-search-keyword"
              className="mb-2 block text-xs font-semibold text-slate-600"
            >
              Role or keyword
            </label>
            <input
              id="hero-careers-search-keyword"
              name="role"
              placeholder="Designer, engineer, writer..."
              className="h-12 w-full rounded-lg border border-slate-500 px-4 text-sm placeholder:text-slate-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            />
          </div>
          <div>
            <label
              htmlFor="hero-careers-search-location"
              className="mb-2 block text-xs font-semibold text-slate-600"
            >
              Location
            </label>
            <select
              id="hero-careers-search-location"
              name="location"
              className="h-12 w-full rounded-lg border border-slate-500 bg-white px-4 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              <option>Remote, anywhere</option>
              <option>London</option>
              <option>New York</option>
              <option>Amsterdam</option>
            </select>
          </div>
          <button
            type="submit"
            className="h-12 self-end rounded-lg bg-blue-700 px-7 text-sm font-semibold text-white hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 sm:col-span-2 lg:col-span-1"
          >
            Find my next role
          </button>
        </form>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs">
          <span className="text-slate-600">Popular searches</span>
          <a
            href="#"
            className="rounded-full border border-slate-300 px-3 py-2 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Design
          </a>
          <a
            href="#"
            className="rounded-full border border-slate-300 px-3 py-2 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Engineering
          </a>
          <a
            href="#"
            className="rounded-full border border-slate-300 px-3 py-2 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Marketing
          </a>
          <a
            href="#"
            className="rounded-full border border-slate-300 px-3 py-2 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Operations
          </a>
        </div>
        <p className="mt-10 text-sm text-slate-600">
          <strong className="text-slate-950">218 open roles</strong> from 64
          teams that put people first.
        </p>
      </div>
    </section>
  )
}
