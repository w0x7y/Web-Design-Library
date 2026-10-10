// Fonts: DM Mono
export default function ProductCardMachinistSquare() {
  return (
    <article className="w-72 border border-lime-300 bg-black font-['DM_Mono',ui-monospace,SFMono-Regular,monospace] text-lime-300 sm:w-[22rem]">
      <div className="flex justify-between gap-3 border-b border-lime-300 p-3 text-[10px] uppercase tracking-wide">
        <span>Datum Works</span>
        <span>DW / 90</span>
      </div>
      <div className="p-4">
        <svg
          className="h-24 w-full"
          viewBox="0 0 256 96"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M66 14h14v56h95v14H66Z"
            fill="#a1a1aa"
            stroke="#e4e4e7"
            strokeWidth="2"
          />
          <path
            d="M45 14v70M39 14h12M39 84h12M66 93h109M66 88v8M175 88v8"
            stroke="#bef264"
          />
          <path
            d="M68 27h9M68 40h9M68 53h9M96 73v8M109 73v8M122 73v8M135 73v8M148 73v8M161 73v8"
            stroke="#27272a"
          />
          <path d="M84 66h9v-9" stroke="#bef264" />
        </svg>
        <h2 className="mt-3 text-[18px] leading-6 font-medium text-white">
          ENGINEER'S SQUARE
        </h2>
        <dl className="mt-4 text-xs leading-5">
          <div className="flex justify-between gap-3 border-t border-zinc-700 py-2">
            <dt className="text-[10px] text-zinc-300">01 / BLADE</dt>
            <dd className="tabular-nums">100 mm</dd>
          </div>
          <div className="flex justify-between gap-3 border-t border-zinc-700 py-2">
            <dt className="text-[10px] text-zinc-300">02 / MATERIAL</dt>
            <dd className="tabular-nums">Hardened steel</dd>
          </div>
        </dl>
      </div>
      <a
        className="flex h-10 items-center justify-between bg-lime-300 px-4 text-xs font-medium text-black hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
        href="#datum-square"
        aria-label="Order Datum Works 100 millimetre engineer's square, 42 pounds"
      >
        <span>ORDER DW / 90 →</span>
        <span>£42</span>
      </a>
    </article>
  );
}
