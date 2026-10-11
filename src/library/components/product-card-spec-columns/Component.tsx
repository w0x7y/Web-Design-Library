export default function ProductCardSpecColumns() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-80">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-neutral-500">Category label</p>
        <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Digital</span>
      </div>
      <div role="img" aria-label="Image placeholder: product cover or package preview" className="mt-3 flex aspect-[4/3] h-16 w-full items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
      <h3 className="mt-3 text-base font-semibold">Product name</h3>
      <p className="mt-1 text-sm text-neutral-600">Short description of what is included and how to use it.</p>
      <dl className="mt-3 grid grid-cols-3 border-y border-neutral-200 py-3">
        <div className="flex flex-col-reverse gap-1 border-r border-neutral-200 pr-3">
          <dt className="text-xs text-neutral-500">Format</dt>
          <dd className="text-sm font-semibold">24-bit</dd>
        </div>
        <div className="flex flex-col-reverse gap-1 border-r border-neutral-200 px-3">
          <dt className="text-xs text-neutral-500">Size</dt>
          <dd className="text-sm font-semibold">1.2 GB</dd>
        </div>
        <div className="flex flex-col-reverse gap-1 pl-3">
          <dt className="text-xs text-neutral-500">Files</dt>
          <dd className="text-sm font-semibold">120</dd>
        </div>
      </dl>
      <footer className="mt-3 flex items-center justify-between gap-3">
        <p className="text-xl font-semibold">$48</p>
        <button type="button" aria-label="Buy Product name" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Buy</button>
      </footer>
    </article>
  )
}
