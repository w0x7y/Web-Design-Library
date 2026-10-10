// Fonts: Newsreader
export default function StatCardRpgPlaytest() {
  return (
    <article className="w-72 bg-rose-950 p-6 font-['Newsreader',ui-serif,Georgia,serif] text-rose-100 sm:w-[22rem]">
      <header className="flex justify-between text-[11px] tracking-widest text-orange-200">
        <p>DICE & QUILL</p>
        <span>PLAYTEST / 09</span>
      </header>
      <div className="mt-6 border-l-2 border-rose-300 pl-5">
        <p className="text-[72px] leading-none tracking-tight tabular-nums">92<span className="text-[36px]">%</span></p>
        <h2 className="mt-3 text-xl leading-6">Ready<br />for the table.</h2>
        <p className="mt-3 text-xs leading-5 text-rose-200">46 of 50 titles · September 2026</p>
      </div>
      <details className="mt-5 border-t border-rose-300 pt-3">
        <summary className="cursor-pointer text-sm hover:text-orange-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-200">By book format</summary>
        <dl className="mt-3 space-y-2 text-xs">
          <div className="flex justify-between gap-2">
            <dt>Campaign books</dt>
            <dd>26 / 29</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt>One-shot adventures</dt>
            <dd>20 / 21</dd>
          </div>
        </dl>
      </details>
    </article>
  )
}
