export default function BlogCardDesignNotes() {
  return (
    <article className="w-72 rounded-xl border border-slate-200 bg-white text-slate-950 sm:w-80">
      <div className="flex h-28 items-center justify-center rounded-t-xl bg-sky-100">
        <svg
          aria-hidden="true"
          viewBox="0 0 240 90"
          fill="none"
          className="h-24 w-60"
        >
          <path
            d="M66 45h32m44 0h32"
            stroke="#0369a1"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <circle
            cx="43"
            cy="45"
            r="23"
            fill="#e0f2fe"
            stroke="#075985"
            strokeWidth="2"
          />
          <rect
            x="98"
            y="22"
            width="44"
            height="46"
            rx="8"
            fill="#7dd3fc"
            stroke="#075985"
            strokeWidth="2"
          />
          <path d="m197 19 26 26-26 26-26-26Z" fill="#0369a1" />
          <path d="m188 45 6 6 11-12" stroke="white" strokeWidth="2" />
        </svg>
      </div>
      <div className="p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-800">
          Design process
        </p>
        <h2 className="mt-2 text-xl font-semibold leading-7 tracking-tight">
          <a
            href="#design-notes-better-handoffs"
            className="rounded-sm hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
          >
            Better handoffs start before the final file.
          </a>
        </h2>
        <p className="mt-2 text-xs leading-5 text-slate-600">
          Small habits that keep design decisions clear when a project changes
          hands.
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-200 pt-3 text-[11px] text-slate-600">
          <span>By Imani Reed</span>
          <span>6 min read</span>
        </div>
      </div>
    </article>
  )
}
