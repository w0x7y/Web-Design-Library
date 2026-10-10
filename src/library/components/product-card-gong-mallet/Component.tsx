// Fonts: Space Grotesk
export default function ProductCardGongMallet() {
  return (
    <article className="w-72 bg-neutral-950 p-6 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] text-neutral-100 sm:w-[22rem]">
      <div className="flex justify-between gap-3 text-[10px] uppercase tracking-widest text-neutral-300">
        <span>Feltstrike</span>
        <span>M / 04</span>
      </div>
      <svg
        className="mt-3 h-28 w-full"
        viewBox="0 0 260 112"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="m45 95 142-67"
          stroke="#d6b58c"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="m49 94 24-11"
          stroke="#8d7153"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <ellipse
          cx="199"
          cy="24"
          rx="28"
          ry="22"
          transform="rotate(-25 199 24)"
          fill="#e7e5e4"
        />
        <path
          d="m183 17 27-10M179 27l38-15M184 36l36-15"
          stroke="#c2bcb5"
          strokeWidth="1"
        />
      </svg>
      <h2 className="mt-3 text-xl leading-6 font-medium tracking-tight">
        A softer first strike.
      </h2>
      <p className="mt-2 text-xs leading-5 text-neutral-300">
        Medium gong mallet. Dense wool felt,
        <br />
        maple shaft, 36cm reach.
      </p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-2xl leading-none">€46</p>
        <a
          className="rounded-sm py-2 text-xs font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-100"
          href="#feltstrike-m04"
          aria-label="Shop the Feltstrike M04 gong mallet"
        >
          Shop M / 04 ↗
        </a>
      </div>
    </article>
  );
}
