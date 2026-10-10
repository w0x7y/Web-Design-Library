// Fonts: Newsreader
export default function StatCardTranslationProof() {
  return (
    <article className="w-72 bg-rose-950 p-6 font-['Newsreader',ui-serif,Georgia,serif] text-rose-100 sm:w-[22rem]">
      <header className="flex justify-between text-[11px] tracking-widest text-orange-200">
        <p>VERNALWORD</p>
        <span>DELIVERY / 10</span>
      </header>
      <div className="mt-6 border-l-2 border-rose-300 pl-5">
        <p className="text-[72px] leading-none tracking-tight tabular-nums">96<span className="text-[36px]">%</span></p>
        <h2 className="mt-3 text-xl leading-6">Approved<br />on first proof.</h2>
        <p className="mt-3 text-xs leading-5 text-rose-200">48 of 50 projects · September 2026</p>
      </div>
      <details className="mt-5 border-t border-rose-300 pt-3">
        <summary className="cursor-pointer text-sm hover:text-orange-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-200">By language pair</summary>
        <dl className="mt-3 space-y-2 text-xs">
          <div className="flex justify-between gap-2">
            <dt>French → English</dt>
            <dd>28 / 29</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt>German → English</dt>
            <dd>20 / 21</dd>
          </div>
        </dl>
      </details>
    </article>
  )
}
