export default function ProductCardSoundKit() {
  return (
    <article className="w-72 rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-zinc-100 sm:w-80">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-violet-300">
          Tape Library / Vol. 04
        </span>
        <span className="rounded-full border border-zinc-700 px-2 py-1 text-[10px] text-zinc-300">
          Royalty free
        </span>
      </div>
      <svg
        aria-hidden="true"
        viewBox="0 0 240 64"
        className="mt-3 h-12 w-full text-violet-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <path d="M5 27v10m10-18v26m10-12v2m10-26v54m10-45v36m10-44v52m10-39v26m10-32v38m10-23v8m10-31v54m10-40v26m10-32v38m10-22v6m10-26v46m10-33v20m10-17v14m10-30v46m10-33v20m10-38v56m10-42v28m10-18v8m10-28v48m10-29v10m10-18v26" />
      </svg>
      <h2 className="mt-3 text-xl font-semibold tracking-tight">
        After-hours textures
      </h2>
      <p className="mt-2 text-xs leading-5 text-zinc-400">
        Warm tape loops for slower songs.
      </p>
      <dl className="mt-3 flex gap-5 text-xs">
        <div>
          <dt className="text-zinc-400">Loops</dt>
          <dd className="mt-1">64</dd>
        </div>
        <div>
          <dt className="text-zinc-400">Format</dt>
          <dd className="mt-1">24-bit WAV</dd>
        </div>
        <div>
          <dt className="text-zinc-400">Size</dt>
          <dd className="mt-1">1.2 GB</dd>
        </div>
      </dl>
      <a
        href="#after-hours-license"
        className="mt-3 flex h-9 items-center justify-between rounded-lg bg-violet-300 px-3 text-sm font-semibold text-zinc-950 hover:bg-violet-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
      >
        Get the pack{' '}
        <span>
          $29{' '}
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="inline-block size-3.5 align-[-0.125em]"
          >
            <path d="M5 15 15 5M5 5h10v10" />
          </svg>
        </span>
      </a>
    </article>
  )
}
