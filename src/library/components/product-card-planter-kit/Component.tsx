export default function ProductCardPlanterKit() {
  return (
    <article className="w-72 rounded-[1.5rem] border border-green-900 bg-yellow-50 text-green-950 sm:w-80">
      <div className="relative flex h-32 items-end justify-center rounded-t-[1.5rem] bg-lime-200 px-5 pb-3">
        <span className="absolute top-3 left-4 text-[10px] font-bold uppercase tracking-widest">
          Small space, good taste
        </span>
        <svg
          role="img"
          aria-label="Illustration of basil, mint and parsley seedlings in three terracotta pots"
          viewBox="0 0 240 100"
          className="h-24 w-60"
        >
          <path
            d="M20 64h48l-6 28H26ZM96 64h48l-6 28h-36ZM172 64h48l-6 28h-36Z"
            fill="#c46a45"
          />
          <path
            d="M17 61h54v8H17ZM93 61h54v8H93ZM169 61h54v8h-54Z"
            fill="#a84f30"
          />
          <path
            d="M44 63V28m76 35V18m76 45V32"
            stroke="#166534"
            strokeWidth="3"
          />
          <path
            d="M44 42C21 44 22 21 44 26c22-8 28 12 0 16Zm0-13C30 28 29 9 44 11c18-3 20 17 0 18Zm76 5c-22 3-26-16-2-17 22-9 28 13 2 17Zm0 15c-25 1-26-18 0-15 21-9 24 17 0 15Zm76-7c-22 8-26-9-4-14 20-14 32 6 4 14Zm0 14c-17 6-26-7-8-13 22-12 37 7 8 13Z"
            fill="#15803d"
          />
        </svg>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-base font-bold">The little herb club</h2>
          <span className="shrink-0 rounded-full bg-green-900 px-2 py-1 text-[10px] font-medium text-white">
            3 herbs
          </span>
        </div>
        <p className="mt-2 text-xs leading-5 text-green-900">
          Fresh herbs, right by the window.
        </p>
        <p className="mt-1 text-[10px] text-green-900">
          Seeds, pots &amp; a growing guide
        </p>
        <a
          aria-label="Start growing $24: The little herb club"
          href="#little-herb-club"
          className="mt-3 flex h-9 items-center justify-between rounded-full bg-green-900 px-4 text-sm font-semibold text-white hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"
        >
          Start growing{' '}
          <span>
            $24{' '}
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
          </span>
        </a>
      </div>
    </article>
  )
}
