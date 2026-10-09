export default function TestimonialCardAudioNote() {
  return (
    <figure className="w-72 rounded-[1.5rem] bg-orange-100 p-5 text-orange-950 sm:w-80">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-orange-950/30 px-2.5 py-1 text-[10px] font-semibold">
          A note from Maya
        </span>
        <span className="font-mono text-[10px] text-orange-800">00:18</span>
      </div>
      <svg
        aria-hidden="true"
        viewBox="0 0 240 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="mt-4 h-8 w-full text-orange-700"
      >
        <path d="M4 13v6m10-11v16m10-9v2m10-13v24m10-17v10m10-21v32m10-24v16m10-11v6m10-10v14m10-22v30m10-22v14m10-10v6m10-15v24m10-18v12m10-23v32m10-24v16m10-12v8m10-17v26m10-21v16m10-10v4m10-13v22m10-15v8m10-6v4m10-10v16" />
      </svg>
      <blockquote className="mt-4 text-lg leading-7">
        <p>
          “I stopped staring at a blank page. Now I have a small writing habit I
          actually look forward to.”
        </p>
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-orange-300 text-sm font-bold"
        >
          ML
        </span>
        <div>
          <p className="text-xs font-semibold">Maya Lee</p>
          <p className="mt-1 text-[11px] text-orange-800">
            Writer, 30-day journal participant
          </p>
        </div>
      </figcaption>
    </figure>
  )
}
