export default function HeroSearchBar() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the search destination</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">Headline that guides the next search</h1>
          <p className="mt-6 text-lg text-pretty text-neutral-600">Supporting copy that explains what readers can find and how to narrow their search.</p>
        </div>
        <div className="mx-auto mt-10 max-w-4xl rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
          <form action="#" method="get" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <label htmlFor="hero-search-bar-keyword" className="mb-2 block text-sm font-medium">Keyword</label>
              <input id="hero-search-bar-keyword" name="keyword" type="search" placeholder="Search term" aria-describedby="hero-search-bar-help" className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
            </div>
            <div className="min-w-0">
              <label htmlFor="hero-search-bar-location" className="mb-2 block text-sm font-medium">Location</label>
              <input id="hero-search-bar-location" name="location" type="text" placeholder="Location" aria-describedby="hero-search-bar-help" className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
            </div>
            <button type="submit" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:col-span-2 lg:col-span-1 lg:self-end">Search</button>
          </form>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <p className="text-sm text-neutral-500">Popular:</p>
          <a href="#" className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Category</a>
          <a href="#" className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Topic</a>
          <a href="#" className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Format</a>
          <a href="#" className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Type</a>
          <a href="#" className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Scope</a>
        </div>
        <p id="hero-search-bar-help" className="mt-4 text-center text-sm text-neutral-500">1,284 results available to explore</p>
      </div>
    </section>
  )
}
