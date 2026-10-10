// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function BlogCardTranslationMargin() {
  return (
    <article className="w-72 bg-neutral-50 p-5 font-['Newsreader',ui-serif,Georgia,serif] text-neutral-950 sm:w-[22rem]">
      <header className="flex items-baseline justify-between gap-3 border-b border-neutral-300 pb-3">
        <span className="text-lg leading-6 font-semibold">Interleaf</span>
        <span className="text-[10px] text-neutral-600">Translation desk</span>
      </header>
      <blockquote className="mt-5 text-[24px] leading-[1.1] tracking-[-0.02em]">One word.<br />Three possible worlds.</blockquote>
      <div className="mt-3 flex items-center gap-2 text-xs leading-4 text-red-800">
        <span className="text-xl leading-5" aria-hidden="true">↳</span>
        <p>Notes on the untranslatable</p>
      </div>
      <h2 className="mt-5 border-l-2 border-red-800 pl-3 text-lg leading-6 font-semibold">
        <a href="#interleaf-homesickness" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800">Where does homesickness live in a sentence?</a>
      </h2>
      <p className="mt-3 text-sm leading-5 text-neutral-600">Léa Martin traces a single word through two languages and a family story.</p>
      <footer className="mt-5 flex justify-between gap-3 border-t border-neutral-300 pt-3 text-[11px] text-neutral-600">
        <span>Essay 07</span>
        <span>9 min read</span>
      </footer>
    </article>
  )
}
