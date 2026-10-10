export default function ProductCardWaterTest() {
  return (
    <article className="w-72 rounded-xl border border-slate-300 bg-white p-5 text-slate-950 sm:w-[21rem]">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[10px] font-bold uppercase tracking-widest text-teal-800">
          Clearvial
        </span>
        <span className="rounded bg-teal-50 px-2 py-1 text-[10px] font-medium text-teal-800">
          Freshwater
        </span>
      </div>
      <h2 className="mt-4 text-xl leading-6 font-semibold tracking-tight">
        Know your tank.
      </h2>
      <div className="mt-3 rounded-lg bg-teal-50 px-4">
        <svg className="h-24 w-full" viewBox="0 0 240 96" aria-hidden="true">
          <path
            d="M47 25h26v48a13 13 0 0 1-26 0Z"
            fill="#fff"
            stroke="#334155"
            strokeWidth="2"
          />
          <path d="M50 43h20v30a10 10 0 0 1-20 0Z" fill="#2dd4bf" />
          <path
            d="M107 25h26v48a13 13 0 0 1-26 0Z"
            fill="#fff"
            stroke="#334155"
            strokeWidth="2"
          />
          <path d="M110 52h20v21a10 10 0 0 1-20 0Z" fill="#fbbf24" />
          <path
            d="M167 25h26v48a13 13 0 0 1-26 0Z"
            fill="#fff"
            stroke="#334155"
            strokeWidth="2"
          />
          <path d="M170 36h20v37a10 10 0 0 1-20 0Z" fill="#fb7185" />
          <path
            d="M45 16h30v10H45ZM105 16h30v10h-30ZM165 16h30v10h-30Z"
            fill="#0f766e"
          />
        </svg>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-600">
        Drop-based tests, three glass vials and a wipe-clean comparison card.
      </p>
      <p className="mt-2 text-[10px] font-semibold text-teal-800">
        pH · Ammonia · Nitrite · Nitrate
      </p>
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-2xl leading-none font-medium">$28</p>
        <a
          className="inline-flex h-10 items-center rounded-lg bg-teal-800 px-4 text-xs font-semibold text-white hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
          href="#clearvial-kit"
          aria-label="Shop Clearvial freshwater aquarium test kit"
        >
          Shop test kit →
        </a>
      </div>
    </article>
  );
}
