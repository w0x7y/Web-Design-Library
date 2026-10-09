export default function TestimonialCardCaseStudy() {
  return (
    <figure className="w-72 rounded-2xl bg-slate-950 p-5 text-white sm:w-80">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
        Harbor logistics
      </p>
      <div className="mt-4 border-b border-slate-700 pb-4">
        <p className="text-5xl font-semibold tracking-tight tabular-nums">
          42<span className="text-2xl">%</span>
        </p>
        <p className="mt-1 text-xs text-slate-300">
          less time spent planning routes
        </p>
      </div>
      <blockquote className="mt-4 text-base leading-6 text-slate-100">
        <p>
          “Our dispatchers finish the morning plan before the drivers finish
          their coffee.”
        </p>
      </blockquote>
      <figcaption className="mt-4 text-xs">
        <p className="font-semibold">Daniel Ortiz</p>
        <p className="mt-1 text-slate-400">Operations lead, Harbor</p>
      </figcaption>
      <a
        href="#harbor-case-study"
        className="mt-5 flex items-center justify-between rounded-sm text-xs font-semibold text-cyan-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
      >
        Read Harbor’s story{' '}
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
      </a>
    </figure>
  )
}
