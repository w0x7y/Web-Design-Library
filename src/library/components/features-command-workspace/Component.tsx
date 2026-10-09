export default function FeaturesCommandWorkspace() {
  return (
    <section className="bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-violet-300">
            Built for flow
          </p>
          <h2 className="mt-5 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Your next action.
            <br />
            One shortcut away.
          </h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-semibold">Find anything, instantly</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
                Search projects, notes and people from one place, without losing
                the page you are on.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Keep your hands on the keys</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
                Create a task, set a date or jump to your inbox. Familiar
                shortcuts make the everyday work feel lighter.
              </p>
            </div>
          </div>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-violet-300 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore the workspace{' '}
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="min-w-0 rounded-2xl border border-zinc-700 bg-zinc-900">
          <div className="flex items-center gap-3 border-b border-zinc-700 p-5">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="size-5 shrink-0 text-zinc-400"
            >
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m16 16 4 4" />
            </svg>
            <p className="text-sm text-zinc-400">What would you like to do?</p>
          </div>
          <div className="space-y-2 p-3">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-violet-300/10 px-4 py-4 text-sm text-violet-200">
              <span>Create a new task</span>
              <kbd className="rounded border border-violet-300/30 px-2 py-1 font-mono text-xs">
                C
              </kbd>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-4 text-sm text-zinc-300">
              <span>Go to my projects</span>
              <kbd className="rounded border border-zinc-700 px-2 py-1 font-mono text-xs">
                G P
              </kbd>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-4 text-sm text-zinc-300">
              <span>Open the weekly plan</span>
              <kbd className="rounded border border-zinc-700 px-2 py-1 font-mono text-xs">
                G W
              </kbd>
            </div>
          </div>
          <p className="border-t border-zinc-700 px-5 py-4 font-mono text-xs text-zinc-400">
            ↑ ↓ to navigate / ↵ to select / esc to close
          </p>
        </div>
      </div>
    </section>
  )
}
