export default function ProductCardStudioLamp() {
  return (
    <article className="w-72 rounded-2xl border border-neutral-200 bg-white text-neutral-950 sm:w-80">
      <div className="relative flex h-40 items-center justify-center rounded-t-2xl bg-orange-100">
        <span className="absolute top-3 right-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-medium">
          New color
        </span>
        <svg
          role="img"
          aria-label="Illustration of a burnt-orange adjustable desk lamp"
          viewBox="0 0 200 150"
          className="h-36 w-48"
        >
          <ellipse cx="105" cy="138" rx="52" ry="5" fill="#f1cba6" />
          <path d="M65 129h82c0-10-13-14-41-14s-41 4-41 14Z" fill="#9a3412" />
          <path
            d="m106 117 27-43-49-30"
            fill="none"
            stroke="#c2410c"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <circle cx="132" cy="75" r="6" fill="#7c2d12" />
          <path d="m72 27 25 16-25 40-25-16Z" fill="#ea580c" />
          <path d="m47 67 25 16" stroke="#9a3412" strokeWidth="4" />
        </svg>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-semibold">Pivot lamp</h2>
          <p className="text-lg font-medium">$129</p>
        </div>
        <p className="mt-1 text-xs text-neutral-600">
          A brighter corner. In burnt orange.
        </p>
        <p className="mt-3 flex items-center gap-2 text-xs text-neutral-600">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-emerald-600"
          />
          In stock · Ships in 2 business days
        </p>
        <a
          href="#pivot-lamp"
          className="mt-4 flex h-9 items-center justify-center rounded-lg border border-neutral-950 text-xs font-semibold hover:bg-neutral-950 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
        >
          Explore Pivot lamp
        </a>
      </div>
    </article>
  )
}
