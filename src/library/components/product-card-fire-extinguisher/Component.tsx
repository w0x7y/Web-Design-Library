// Fonts: Archivo
export default function ProductCardFireExtinguisher() {
  return (
    <article className="w-72 border-2 border-black bg-white font-['Archivo',ui-sans-serif,system-ui,sans-serif] text-black sm:w-[21rem]">
      <div className="flex justify-between gap-3 border-b border-black bg-orange-400 p-3 text-[10px] font-bold uppercase tracking-wide">
        <span>Redline Supply</span>
        <span>RS / 021</span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-4">
          <svg
            className="h-24 w-24"
            viewBox="0 0 96 112"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M37 29h28v67a9 9 0 0 1-9 9H46a9 9 0 0 1-9-9Z"
              fill="#fb923c"
              stroke="#000"
              strokeWidth="3"
            />
            <path
              d="M44 29V17h13v12M42 17h27M48 17V9h24M60 20c18 0 18 14 18 27v27"
              stroke="#000"
              strokeWidth="4"
            />
            <circle
              cx="39"
              cy="22"
              r="7"
              fill="#fff"
              stroke="#000"
              strokeWidth="3"
            />
            <path
              d="m39 22 3-3M43 59h16M43 65h16M43 71h10"
              stroke="#000"
              strokeWidth="2"
            />
          </svg>
          <div>
            <p className="text-[48px] leading-none font-bold tracking-tight">
              2<span>kg</span>
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-widest">
              Dry powder / ABC
            </p>
          </div>
        </div>
        <h2 className="mt-3 text-xl leading-6 font-bold">
          Small footprint.
          <br />
          Ready at the wall.
        </h2>
        <p className="mt-1 text-xs leading-5">
          Compact extinguisher with mounting bracket.
        </p>
        <dl className="mt-3 grid grid-cols-2 border-t border-black pt-3 text-xs">
          <div>
            <dt className="text-[10px] uppercase">Dimensions</dt>
            <dd className="mt-1 font-semibold">380 × 110 mm</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase">Included</dt>
            <dd className="mt-1 font-semibold">Wall bracket</dd>
          </div>
        </dl>
        <a
          className="mt-4 flex h-10 items-center justify-between bg-black px-3 text-xs font-bold text-white hover:bg-orange-400 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          href="#redline-compact"
          aria-label="View Redline 2 kilogram extinguisher, 34 pounds"
        >
          <span>VIEW UNIT →</span>
          <span>£34</span>
        </a>
      </div>
    </article>
  );
}
