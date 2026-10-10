// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function ButtonsDiveInspection() {
  return (
    <section
      aria-label="Keelmark dive inspection actions"
      className="border-l-4 border-cyan-200 bg-slate-950 p-5 text-slate-100 w-72 sm:w-[23rem] font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif]"
    >
      <div className="flex justify-between text-xs font-medium tracking-wider text-cyan-200 uppercase">
        <span>Keelmark</span>
        <span>DIVE / 08</span>
      </div>
      <h2 className="mt-5 text-2xl font-bold leading-tight">Below the waterline.</h2>
      <p className="mt-2 text-xs text-slate-300">Hull inspection · Berth C12</p>
      <div className="mt-5 flex flex-col items-start gap-3">
        <button
          type="button"
          className="flex h-12 w-full items-center justify-between bg-cyan-200 px-3 text-sm font-bold text-slate-950 hover:bg-white cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
        >
          <span>Open dive permit</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </button>
        <button
          type="button"
          className="flex h-10 w-5/6 items-center justify-between border border-slate-400 px-3 text-xs hover:bg-slate-800 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
        >
          <span>Upload hull scan</span>
          <span aria-hidden="true">↑</span>
        </button>
        <button
          type="button"
          className="flex h-9 w-2/3 items-center justify-between border-b border-slate-400 text-xs hover:text-cyan-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
        >
          <span>Inspection report</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </section>
  )
}
