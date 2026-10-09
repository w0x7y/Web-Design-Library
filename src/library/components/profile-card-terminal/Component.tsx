export default function ProfileCardTerminal() {
  return (
    <article className="w-72 rounded-xl border border-zinc-700 bg-zinc-950 p-4 font-mono text-zinc-100 sm:w-80">
      <div className="flex items-center justify-between gap-3">
        <span
          aria-hidden="true"
          className="flex size-8 items-center justify-center rounded-lg border border-zinc-700 text-lg text-lime-300"
        >
          &gt;_
        </span>
        <p className="text-[10px] uppercase tracking-wider text-lime-300">
          Open to collaborate
        </p>
      </div>
      <h2 className="mt-3 text-xl font-semibold tracking-tight">Eli Park</h2>
      <p className="mt-3 text-xs leading-5 text-zinc-300">
        Builds useful tools for builders.
      </p>
      <p className="mt-2 text-[10px] leading-5 text-lime-300">
        Rust · distributed systems · CLIs
      </p>
      <dl className="mt-2 flex gap-6 border-t border-zinc-800 pt-3 text-xs">
        <div>
          <dt className="text-zinc-400">Projects</dt>
          <dd className="mt-1 text-base text-zinc-100">24</dd>
        </div>
        <div>
          <dt className="text-zinc-400">Contributions</dt>
          <dd className="mt-1 text-base text-zinc-100">1,408</dd>
        </div>
      </dl>
      <a
        href="#eli-projects"
        className="mt-3 flex items-center justify-between rounded-md border border-zinc-700 px-3 py-2 text-xs text-lime-300 hover:border-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
      >
        Explore projects <span aria-hidden="true">→</span>
      </a>
    </article>
  )
}
