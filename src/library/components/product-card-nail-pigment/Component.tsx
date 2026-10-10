// Fonts: Young Serif
export default function ProductCardNailPigment() {
  return (
    <article className="w-72 bg-yellow-50 p-5 font-['Young_Serif',ui-serif,Georgia,serif] text-stone-950 sm:w-[21rem]">
      <p className="text-[10px] uppercase tracking-widest text-stone-700">
        Lacquer Finch / Pigment study 04
      </p>
      <h2 className="mt-3 text-[26px] leading-tight">Olive, after dark.</h2>
      <div className="mt-3 grid grid-cols-[1fr_3rem] items-center gap-3">
        <svg className="h-32 w-full" viewBox="0 0 200 128" aria-hidden="true">
          <defs>
            <linearGradient
              id="product-card-nail-pigment-chrome"
              x1="15"
              y1="5"
              x2="175"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#fbcfe8" />
              <stop offset=".3" stop-color="#fef3c7" />
              <stop offset=".55" stop-color="#a3a635" />
              <stop offset=".8" stop-color="#364314" />
              <stop offset="1" stop-color="#ecfccb" />
            </linearGradient>
          </defs>
          <path
            d="M16 59C4 32 32 10 67 14c25-18 64-4 76 16 33 1 52 36 34 57-14 22-40 28-71 21-30 20-56 6-61-12-28 5-45-15-29-37Z"
            fill="url(#product-card-nail-pigment-chrome)"
          />
          <path
            d="M36 42c27-21 62-18 88-4M29 50c33-18 62-13 81-4"
            fill="none"
            stroke="#fefce8"
            strokeWidth="2"
            opacity=".65"
          />
        </svg>
        <div className="text-right">
          <p className="text-xs text-stone-700">1g pot</p>
          <p className="mt-6 text-xl leading-none">£9</p>
        </div>
      </div>
      <p className="mt-3 border-t border-stone-300 pt-3 text-xs leading-5 text-stone-700">
        Fine chrome powder with an olive shift. For a metallic finish over cured
        gel.
      </p>
      <a
        className="mt-4 inline-flex rounded-sm py-1 text-xs underline underline-offset-4 hover:text-olive-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-950"
        href="#lacquer-finch-olive"
        aria-label="Shop Lacquer Finch Olive chrome nail pigment"
      >
        Shop pigment 04 ↗
      </a>
    </article>
  );
}
