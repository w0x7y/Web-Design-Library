export default function BlogCardFieldGuide() {
  return (
    <article className="w-72 border border-green-900 bg-[#eef0e6] text-green-950 sm:w-80">
      <div className="relative border-b border-green-900 bg-green-100">
        <span className="absolute top-3 left-4 font-mono text-[9px] uppercase tracking-wider">
          Field guide / 09
        </span>
        <svg aria-hidden="true" viewBox="0 0 280 112" className="h-28 w-full">
          <path d="M0 89 66 38l63 44 45-60 106 69v21H0Z" fill="#adc4a1" />
          <path d="m0 112 63-34 47 22 57-40 113 52Z" fill="#6e8a60" />
          <path
            d="M167 112c-13-12 0-22 23-28 21-6 22-16 5-27"
            fill="none"
            stroke="#eef0e6"
            strokeWidth="6"
          />
          <path
            d="M28 84V60m-10 12h20m-10-12-8 14m8-14 8 14"
            fill="none"
            stroke="#31513a"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="p-4">
        <p className="text-[10px] uppercase tracking-[0.16em] text-green-800">
          Nearby adventures
        </p>
        <h2 className="mt-2 font-serif text-2xl leading-7">
          <a
            href="#the-long-way-to-river"
            className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950"
          >
            The long way to the river.
          </a>
        </h2>
        <p className="mt-2 text-xs leading-5 text-green-900">
          A quiet loop, a flask of tea and no particular hurry to get home.
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-green-900/25 pt-3 text-[11px] text-green-800">
          <span>Ellis Ward</span>
          <span>8 min read</span>
        </div>
      </div>
    </article>
  )
}
