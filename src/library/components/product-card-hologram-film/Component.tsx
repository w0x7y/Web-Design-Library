// Fonts: Familjen Grotesk
export default function ProductCardHologramFilm() {
  return (
    <article className="w-72 rounded-2xl border border-emerald-700 bg-emerald-950 p-4 font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif] text-emerald-50 sm:w-[21rem]">
      <div className="flex justify-between gap-3 text-[10px] uppercase tracking-widest">
        <span>Prismstock</span>
        <span>Film / 07</span>
      </div>
      <svg
        className="mt-3 h-28 w-full"
        viewBox="0 0 260 112"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="product-card-hologram-film-spectrum"
            x1="50"
            y1="10"
            x2="210"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fde68a" stopOpacity=".9" />
            <stop offset=".45" stopColor="#6ee7b7" stopOpacity=".8" />
            <stop offset="1" stopColor="#fda4af" stopOpacity=".9" />
          </linearGradient>
        </defs>
        <path
          d="M18 31 161 6l20 77L38 108Z"
          fill="url(#product-card-hologram-film-spectrum)"
          opacity=".5"
        />
        <path
          d="m78 6 161 26-16 73L62 79Z"
          fill="url(#product-card-hologram-film-spectrum)"
          stroke="#d1fae5"
          strokeWidth="1"
        />
        <path
          d="m90 18 112 18M88 24l70 12"
          stroke="#fff"
          strokeWidth="1"
          opacity=".5"
        />
        <path d="m211 90 12 15 4-19" fill="#d1fae5" />
      </svg>
      <h2 className="mt-3 text-xl leading-6 font-medium tracking-tight">
        A different light, daily.
      </h2>
      <p className="mt-2 text-xs leading-5 text-emerald-200">
        Gold-to-green window film. Static cling, clean removal, no adhesive.
      </p>
      <p className="mt-2 text-[10px] uppercase tracking-wide text-emerald-200">
        Sample: 20 × 30 cm · Roll: 60 × 200 cm
      </p>
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-2xl leading-none">£6</p>
        <a
          className="inline-flex h-10 items-center rounded-lg bg-emerald-100 px-4 text-xs font-semibold text-emerald-950 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-100"
          href="#prismstock-film-07"
          aria-label="Order a Prismstock Film 07 sample"
        >
          Order sample →
        </a>
      </div>
    </article>
  );
}
