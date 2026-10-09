export default function ProductCardCeramic() {
  return (
    <article className="w-72 border border-stone-300 bg-[#f7f4ec] text-stone-900 sm:w-80">
      <div className="relative flex h-36 items-center justify-center bg-stone-200">
        <span className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-widest">
          Batch no. 12
        </span>
        <svg
          role="img"
          aria-label="Illustration of a terracotta vase with a narrow neck and rounded body"
          viewBox="0 0 160 130"
          className="h-32 w-40"
        >
          <ellipse cx="80" cy="118" rx="43" ry="5" fill="#c8c0b3" />
          <path
            d="M62 14h36l-3 31c1 9 22 19 24 39 2 17-9 31-39 31S39 101 41 84c2-20 23-30 24-39Z"
            fill="#aa6445"
          />
          <path
            d="M62 14h36M65 42h30"
            fill="none"
            stroke="#713f2c"
            strokeWidth="3"
          />
          <path
            d="M55 81c4-14 10-17 15-23"
            fill="none"
            stroke="#dba58b"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="p-4">
        <p className="text-[10px] uppercase tracking-[0.15em] text-stone-600">
          Objects for everyday rituals
        </p>
        <h2 className="mt-2 font-serif text-xl">The Sunday vase</h2>
        <p className="mt-1 text-xs text-stone-600">
          Wheel-thrown stoneware · Rust glaze
        </p>
        <div className="mt-4 flex items-center justify-between gap-4 border-t border-stone-300 pt-3">
          <p className="font-serif text-xl">$48</p>
          <a
            aria-label="View object: The Sunday vase"
            href="#sunday-vase"
            className="rounded-sm text-xs underline underline-offset-4 hover:text-stone-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
          >
            View object{' '}
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
        </div>
      </div>
    </article>
  )
}
