export default function ButtonsEditorialActions() {
  return (
    <section
      aria-label="Journal actions"
      className="w-72 border border-stone-300 bg-stone-100 p-6 text-stone-900"
    >
      <p className="text-[10px] font-medium tracking-[0.2em] uppercase">
        The Common Reader
      </p>
      <h2 className="mt-4 font-serif text-2xl leading-tight">
        Keep a good story
        <br />
        close.
      </h2>
      <div className="mt-5 border-t border-stone-300">
        <button
          type="button"
          className="flex h-11 w-full items-center gap-4 border-b border-stone-300 text-sm transition-colors motion-reduce:transition-none hover:bg-stone-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          <span aria-hidden="true" className="font-mono text-xs text-stone-600">
            01
          </span>
          Save to reading list
          <span aria-hidden="true" className="ml-auto">
            +
          </span>
        </button>
        <button
          type="button"
          className="flex h-11 w-full items-center gap-4 border-b border-stone-300 text-sm transition-colors motion-reduce:transition-none hover:bg-stone-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          <span aria-hidden="true" className="font-mono text-xs text-stone-600">
            02
          </span>
          Share this story
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="ml-auto size-4 shrink-0"
          >
            <path d="M4 12 12 4M4 4h8v8" />
          </svg>
        </button>
      </div>
      <a
        href="#subscribe"
        className="mt-5 flex h-11 items-center justify-center bg-stone-900 text-xs font-semibold tracking-wider text-stone-50 uppercase transition-colors motion-reduce:transition-none hover:bg-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
      >
        Become a subscriber
      </a>
    </section>
  )
}
