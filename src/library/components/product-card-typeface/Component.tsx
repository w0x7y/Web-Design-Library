export default function ProductCardTypeface() {
  return (
    <article className="w-72 border border-stone-900 bg-white text-stone-950 sm:w-80">
      <div className="border-b border-stone-900 bg-[#ece9df] px-5 py-3">
        <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest">
          <span>Type foundry / 007</span>
          <span>Serif family</span>
        </div>
        <p
          aria-hidden="true"
          className="mt-1 font-serif text-[7rem] leading-none tracking-[-0.08em]"
        >
          Ag<span className="text-5xl italic">&amp;</span>
        </p>
        <p className="mt-2 font-serif text-xs">Quiet forms. Confident words.</p>
      </div>
      <div className="p-4">
        <h2 className="font-serif text-2xl">Margin Serif</h2>
        <p className="mt-1 text-xs text-stone-600">
          A literary family for contemporary stories.
        </p>
        <dl className="mt-4 flex justify-between gap-4 border-t border-stone-200 pt-3 text-[11px]">
          <div>
            <dt className="text-stone-600">Styles</dt>
            <dd className="mt-1 font-medium">12 + italics</dd>
          </div>
          <div>
            <dt className="text-stone-600">License from</dt>
            <dd className="mt-1 font-medium">$45</dd>
          </div>
        </dl>
        <a
          aria-label="Explore the family: Margin Serif"
          href="#margin-serif"
          className="mt-4 flex items-center justify-between rounded-sm text-xs underline underline-offset-4 hover:text-stone-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
        >
          Explore the family{' '}
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
    </article>
  )
}
