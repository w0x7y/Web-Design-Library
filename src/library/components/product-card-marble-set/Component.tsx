// Fonts: Syne
export default function ProductCardMarbleSet() {
  return (
    <article className="w-72 border-2 border-black bg-pink-50 font-['Syne',ui-sans-serif,system-ui,sans-serif] text-black sm:w-[21rem]">
      <div className="flex items-end justify-between gap-4 border-b border-black bg-pink-200 p-4">
        <p className="text-[48px] leading-none font-bold tracking-tight">12</p>
        <p className="text-right text-[10px] leading-4 font-bold uppercase">
          Marblepath
          <br />
          Collector series / 02
        </p>
      </div>
      <svg className="h-24 w-full" viewBox="0 0 280 96" aria-hidden="true">
        <defs>
          <radialGradient
            id="product-card-marble-set-blue"
            cx=".3"
            cy=".2"
            r=".8"
          >
            <stop stop-color="#cffafe" />
            <stop offset=".5" stop-color="#67e8f9" />
            <stop offset="1" stop-color="#1e40af" />
          </radialGradient>
          <radialGradient
            id="product-card-marble-set-pink"
            cx=".3"
            cy=".2"
            r=".8"
          >
            <stop stop-color="#fff1f2" />
            <stop offset=".6" stop-color="#f9a8d4" />
            <stop offset="1" stop-color="#be185d" />
          </radialGradient>
        </defs>
        <circle
          cx="61"
          cy="49"
          r="28"
          fill="url(#product-card-marble-set-blue)"
          stroke="#000"
          strokeWidth="2"
        />
        <circle
          cx="129"
          cy="55"
          r="19"
          fill="url(#product-card-marble-set-pink)"
          stroke="#000"
          strokeWidth="2"
        />
        <circle
          cx="198"
          cy="44"
          r="33"
          fill="url(#product-card-marble-set-blue)"
          stroke="#000"
          strokeWidth="2"
        />
        <path
          d="M50 40c25-17 20 42 2 24M184 29c-13 31 35 19 27 39"
          stroke="#fff"
          strokeWidth="5"
          fill="none"
          opacity=".8"
        />
      </svg>
      <div className="p-4">
        <h2 className="text-xl leading-6 font-bold">Small glass. Big orbit.</h2>
        <p className="mt-2 text-xs leading-5">
          12 swirled glass marbles, one cotton pouch. Collector set for ages 8+.
        </p>
        <a
          className="mt-4 flex h-10 items-center justify-between border-2 border-black bg-blue-800 px-3 text-xs font-bold text-white shadow-[3px_3px_0_#000] hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          href="#marblepath-series-two"
          aria-label="Shop Marblepath collector marble set, 16 pounds"
        >
          <span>CLAIM YOUR SET →</span>
          <span>£16</span>
        </a>
      </div>
    </article>
  );
}
