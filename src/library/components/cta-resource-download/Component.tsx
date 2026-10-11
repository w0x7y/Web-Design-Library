export default function CtaResourceDownload() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <div className="grid items-center gap-8 lg:grid-cols-[192px_1fr_256px]">
          <div role="img" aria-label="Image placeholder: downloadable document cover" className="flex aspect-[3/4] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><path d="M3 3h18v18H3zM3 17l6-6 4 4 3-3 5 5" /></svg>
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-500">Resource type</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that names the resource value</h2>
            <ul role="list" className="mt-6 grid gap-3 text-sm text-neutral-600">
              <li className="flex items-start gap-3"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-900"><path d="m5 12 4 4L19 6" /></svg>First topic covered in the resource</li>
              <li className="flex items-start gap-3"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-900"><path d="m5 12 4 4L19 6" /></svg>Second topic readers can apply</li>
              <li className="flex items-start gap-3"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-900"><path d="m5 12 4 4L19 6" /></svg>Third useful reference included</li>
            </ul>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
            <p className="text-lg font-semibold">Free download</p>
            <p className="mt-2 text-sm text-neutral-600">PDF · 24 pages · 2.4 MB</p>
            <a href="#" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-6 w-full">Download resource</a>
            <p className="mt-3 text-xs text-neutral-500">Short note about access and reuse</p>
          </div>
        </div>
      </div>
    </section>
  )
}
