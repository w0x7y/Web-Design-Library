export default function ProductCardMediaFooter() {
  return (
    <article className="w-72 overflow-hidden rounded-lg border border-neutral-200 bg-white text-neutral-900 sm:w-80">
      <div role="img" aria-label="Image placeholder: product photograph" className="flex aspect-[4/3] h-40 w-full items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
      <div className="p-4">
        <p className="text-sm font-medium text-neutral-500">Category label</p>
        <h3 className="mt-1 text-base font-semibold">Product name</h3>
        <p className="mt-2 text-sm text-neutral-600">Short description of the main benefit and what makes this item useful.</p>
      </div>
      <footer className="flex items-center justify-between gap-3 border-t border-neutral-200 px-4 py-3">
        <p className="text-lg font-semibold">$48</p>
        <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
          View details
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
        </a>
      </footer>
    </article>
  )
}
