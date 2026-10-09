export default function BlogCardReleaseLog() {
  return (
    <article className="w-72 rounded-lg border border-zinc-700 bg-zinc-950 text-zinc-100 sm:w-80">
      <div className="border-b border-zinc-700 bg-zinc-900 p-4">
        <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">
          Waypoint / Release notes
        </p>
        <div className="mt-3 flex items-end justify-between">
          <p
            aria-hidden="true"
            className="font-mono text-4xl font-semibold tracking-tight text-lime-300"
          >
            v2.8<span className="text-xl">.0</span>
          </p>
          <span className="rounded-sm border border-lime-300/40 px-2 py-1 font-mono text-[9px] text-lime-300">
            STABLE
          </span>
        </div>
      </div>
      <div className="p-4">
        <p className="font-mono text-[10px] text-zinc-400">
          <time dateTime="2026-10-08">08 OCT 2026</time> / PRODUCT
        </p>
        <h2 className="mt-3 text-xl font-semibold leading-7">
          <a
            href="#waypoint-2-8"
            className="rounded-sm hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
          >
            A faster route from idea to deploy.
          </a>
        </h2>
        <p className="mt-2 text-xs leading-5 text-zinc-400">
          Preview branches, clearer build logs and a command line that remembers
          your project.
        </p>
        <p className="mt-4 border-t border-zinc-800 pt-3 text-[11px] text-zinc-400">
          Engineering team · 4 min read
        </p>
      </div>
    </article>
  )
}
