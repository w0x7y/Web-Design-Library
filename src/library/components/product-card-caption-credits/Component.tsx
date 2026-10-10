// Fonts: IBM Plex Sans
export default function ProductCardCaptionCredits() {
  return (
    <article className="w-72 rounded-xl border border-slate-600 bg-slate-950 p-5 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-slate-100 sm:w-[22rem]">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[10px] font-semibold uppercase tracking-widest">
          Verbatim Dock
        </span>
        <span className="rounded border border-slate-600 px-2 py-1 text-[10px] text-slate-300">
          Prepaid
        </span>
      </div>
      <div className="mt-6 flex items-end justify-between gap-5">
        <div>
          <p className="text-[56px] leading-none font-semibold tracking-tight text-cyan-200 tabular-nums">
            200
          </p>
          <p className="mt-1 text-xs text-slate-300">captioning minutes</p>
        </div>
        <p className="text-right text-xs leading-5 text-slate-300">
          SRT
          <br />
          WebVTT
          <br />
          Plain text
        </p>
      </div>
      <h2 className="mt-5 text-xl leading-6 font-semibold">
        Make every word visible.
      </h2>
      <p className="mt-2 text-xs leading-5 text-slate-300">
        Editable captions for recorded interviews and training. Credits never
        expire.
      </p>
      <div className="mt-5 flex items-center justify-between gap-4 border-t border-slate-600 pt-4">
        <div>
          <p className="text-2xl leading-none font-medium">$24</p>
          <p className="mt-1 text-[10px] text-slate-300">one-time payment</p>
        </div>
        <a
          className="inline-flex h-10 items-center rounded-lg bg-cyan-200 px-4 text-xs font-semibold text-slate-950 hover:bg-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
          href="#verbatim-200"
          aria-label="Buy 200 Verbatim Dock captioning minutes"
        >
          Buy credits →
        </a>
      </div>
    </article>
  );
}
