export default function ButtonsStudioTools() {
  return (
    <section
      aria-label="Recording tools"
      className="w-72 rounded-[1.25rem] bg-zinc-950 p-5 text-white"
    >
      <p className="text-xs tracking-widest text-zinc-400 uppercase">
        Studio / take 04
      </p>
      <h2 className="mt-1 text-lg font-semibold">Morning field notes</h2>
      <div className="mt-5 grid grid-cols-2 gap-2">
        <button
          type="button"
          className="flex h-16 flex-col items-center justify-center gap-1 rounded-xl border border-zinc-700 bg-zinc-900 text-xs transition-colors motion-reduce:transition-none hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="size-5"
          >
            <path d="M6 3v14M14 3v14M3 7h6M11 13h6" />
            <circle cx="6" cy="7" r="2" fill="currentColor" />
            <circle cx="14" cy="13" r="2" fill="currentColor" />
          </svg>
          Mix levels
        </button>
        <button
          type="button"
          className="flex h-16 flex-col items-center justify-center gap-1 rounded-xl border border-zinc-700 bg-zinc-900 text-xs transition-colors motion-reduce:transition-none hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="size-5"
          >
            <path d="M3 10h14M6 5v10M10 3v14M14 6v8" />
          </svg>
          Clean audio
        </button>
        <button
          type="button"
          className="flex h-16 flex-col items-center justify-center gap-1 rounded-xl border border-zinc-700 bg-zinc-900 text-xs transition-colors motion-reduce:transition-none hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="size-5"
          >
            <path d="M4 4h12v9H8l-4 3zM7 7h6M7 10h4" />
          </svg>
          Transcript
        </button>
        <button
          type="button"
          className="flex h-16 flex-col items-center justify-center gap-1 rounded-xl border border-zinc-700 bg-zinc-900 text-xs transition-colors motion-reduce:transition-none hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="size-5"
          >
            <path d="M10 3v10m-4-4 4 4 4-4M4 14v3h12v-3" />
          </svg>
          Export WAV
        </button>
      </div>
      <button
        type="button"
        className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-lime-300 text-sm font-semibold text-zinc-950 transition-colors motion-reduce:transition-none hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Send for review
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="size-4 shrink-0"
        >
          <path d="M4 12 12 4M4 4h8v8" />
        </svg>
      </button>
    </section>
  )
}
