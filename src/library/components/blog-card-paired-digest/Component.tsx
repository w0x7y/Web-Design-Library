export default function BlogCardPairedDigest() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-96">
      <header className="flex items-baseline justify-between gap-3">
        <h3 className="text-sm font-semibold">Two articles to read next</h3>
        <p className="text-xs text-neutral-500">Digest</p>
      </header>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <section className="border-t border-neutral-200 pt-4">
          <p className="text-xs text-neutral-500">Category label</p>
          <h4 className="mt-2 text-base font-semibold"><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">First article title</a></h4>
          <p className="mt-2 text-xs text-neutral-600">Short note about the question answered.</p>
          <p className="mt-3 text-xs text-neutral-500">4 min read</p>
        </section>
        <section className="border-t border-neutral-200 pt-4">
          <p className="text-xs text-neutral-500">Category label</p>
          <h4 className="mt-2 text-base font-semibold"><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Second article title</a></h4>
          <p className="mt-2 text-xs text-neutral-600">Short note about the question answered.</p>
          <p className="mt-3 text-xs text-neutral-500">6 min read</p>
        </section>
      </div>
    </article>
  )
}
