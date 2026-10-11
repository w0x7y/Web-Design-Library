export default function BlogCardDocumentPreview() {
  return (
    <article className="grid w-72 grid-cols-[72px_1fr] gap-4 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-96">
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-2">
        <div role="img" aria-label="Image placeholder: document page preview" className="flex h-32 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-8"><path d="M6 3h8l4 4v14H6zM14 3v5h4M9 12h6M9 16h6" /></svg>
        </div>
      </div>
      <div>
        <p className="text-xs text-neutral-500">Document · 12 pages</p>
        <h3 className="mt-2 text-base font-semibold"><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Report title naming its central topic</a></h3>
        <p className="mt-3 text-xs text-neutral-600">Short explanation of the document value.</p>
      </div>
      <footer className="col-span-2 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 pt-4">
        <p className="text-xs text-neutral-500">Alex Rivera · Oct 10</p>
        <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-xs">Read report</a>
      </footer>
    </article>
  )
}
