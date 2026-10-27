export default function BadgesReleaseNotes() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <p className="text-sm font-medium text-neutral-500">Changelog</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Headline that names what changed</h2>
        <p className="mt-4 text-lg text-pretty text-neutral-600">Lede that explains how often releases ship and where to follow them.</p>
        <ol role="list" className="mt-12 divide-y divide-neutral-200 border-t border-neutral-200">
          <li className="py-8 md:grid md:grid-cols-[10rem_1fr] md:gap-8">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 md:flex-col md:items-start">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 font-mono text-xs font-medium">v2.4.0</span>
                <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700">Latest</span>
              </div>
              <time dateTime="2026-10-21" className="text-sm text-neutral-500">Oct 21, 2026</time>
            </div>
            <div className="mt-4 md:mt-0">
              <h3 className="text-lg font-semibold">Release title that names the main change</h3>
              <ul role="list" className="mt-4 space-y-3">
                <li className="flex items-baseline gap-3">
                  <span className="inline-flex w-20 shrink-0 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 px-2.5 py-0.5 text-xs font-medium text-white">New</span>
                  <p className="text-sm text-neutral-600">Change line that describes what was added and where to find it.</p>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="inline-flex w-20 shrink-0 items-center justify-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Improved</span>
                  <p className="text-sm text-neutral-600">Change line that names what works better than before.</p>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="inline-flex w-20 shrink-0 items-center justify-center rounded-full border border-dashed border-neutral-400 px-2.5 py-0.5 text-xs font-medium">Fixed</span>
                  <p className="text-sm text-neutral-600">Change line that describes the problem that no longer occurs.</p>
                </li>
              </ul>
            </div>
          </li>
          <li className="py-8 md:grid md:grid-cols-[10rem_1fr] md:gap-8">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 md:flex-col md:items-start">
              <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 font-mono text-xs font-medium">v2.3.1</span>
              <time dateTime="2026-10-08" className="text-sm text-neutral-500">Oct 8, 2026</time>
            </div>
            <div className="mt-4 md:mt-0">
              <h3 className="text-lg font-semibold">Release title for a maintenance update</h3>
              <ul role="list" className="mt-4 space-y-3">
                <li className="flex items-baseline gap-3">
                  <span className="inline-flex w-20 shrink-0 items-center justify-center rounded-full border border-dashed border-neutral-400 px-2.5 py-0.5 text-xs font-medium">Fixed</span>
                  <p className="text-sm text-neutral-600">Change line that describes the problem that no longer occurs.</p>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="inline-flex w-20 shrink-0 items-center justify-center rounded-full border border-dashed border-neutral-400 px-2.5 py-0.5 text-xs font-medium">Fixed</span>
                  <p className="text-sm text-neutral-600">Change line that names the affected screen and the corrected behavior.</p>
                </li>
              </ul>
            </div>
          </li>
          <li className="py-8 md:grid md:grid-cols-[10rem_1fr] md:gap-8">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 md:flex-col md:items-start">
              <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 font-mono text-xs font-medium">v2.3.0</span>
              <time dateTime="2026-09-24" className="text-sm text-neutral-500">Sep 24, 2026</time>
            </div>
            <div className="mt-4 md:mt-0">
              <h3 className="text-lg font-semibold">Release title that names the main change</h3>
              <ul role="list" className="mt-4 space-y-3">
                <li className="flex items-baseline gap-3">
                  <span className="inline-flex w-20 shrink-0 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 px-2.5 py-0.5 text-xs font-medium text-white">New</span>
                  <p className="text-sm text-neutral-600">Change line that describes what was added and where to find it.</p>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="inline-flex w-20 shrink-0 items-center justify-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Improved</span>
                  <p className="text-sm text-neutral-600">Change line that names what works better than before.</p>
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}
