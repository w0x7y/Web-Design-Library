export default function HeroDeployTerminal() {
  return (
    <section className="bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-mono text-xs tracking-widest text-emerald-300">
            CINDER / DEPLOYMENT PLATFORM
          </p>
          <h1 className="mt-6 text-5xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            Ship before your coffee cools.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-400">
            Push your code. Cinder handles builds, certificates and rollbacks,
            with a clear log of every step.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-emerald-300 px-5 font-medium text-zinc-950 hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Deploy a project{' '}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex min-h-12 items-center px-2 text-sm text-zinc-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Read the docs
            </a>
          </div>
          <p className="mt-5 text-xs text-zinc-400">
            Free for your first three projects. No credit card.
          </p>
        </div>
        <div className="min-w-0 rounded-2xl border border-zinc-700 bg-zinc-900">
          <div className="flex items-center justify-between gap-4 border-b border-zinc-700 px-5 py-4">
            <span className="font-mono text-xs text-zinc-400">
              production / main
            </span>
            <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs text-emerald-300">
              Live
            </span>
          </div>
          <div className="space-y-4 p-5 font-mono text-sm sm:p-8">
            <p className="text-zinc-400">$ cinder deploy</p>
            <p className="flex gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0 text-emerald-300"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              <span>Build completed in 8.2s</span>
            </p>
            <p className="flex gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0 text-emerald-300"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              <span>Certificate provisioned</span>
            </p>
            <p className="flex gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0 text-emerald-300"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              <span>Available in 12 regions</span>
            </p>
            <p className="border-l-2 border-emerald-300 pl-3 text-emerald-300">
              Your next idea is online.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-6 border-t border-zinc-700 px-5 py-5 sm:grid-cols-3">
            <div>
              <dt className="text-xs text-zinc-400">Build time</dt>
              <dd className="mt-1 font-mono text-lg">8.2s</dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-400">Commit</dt>
              <dd className="mt-1 font-mono text-lg">a3f921</dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-400">Environment</dt>
              <dd className="mt-1 text-lg">Production</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
