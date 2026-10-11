export default function ProductCardIncludedDownloadList() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-80">
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <rect x="4" y="4" width="16" height="16" rx="3" />
            <path d="M4 12h16M12 4v16" />
          </svg>
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-semibold">Digital product name</h3>
          <p className="mt-1 text-xs text-neutral-500">Three files included</p>
        </div>
      </div>
      <ul
        role="list"
        className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200"
      >
        <li className="flex justify-between gap-3 py-3 text-sm">
          <span className="min-w-0 text-neutral-600">Main document</span>
          <span className="font-mono text-xs text-neutral-500">PDF</span>
        </li>
        <li className="flex justify-between gap-3 py-3 text-sm">
          <span className="min-w-0 text-neutral-600">Editable source</span>
          <span className="font-mono text-xs text-neutral-500">ZIP</span>
        </li>
        <li className="flex justify-between gap-3 py-3 text-sm">
          <span className="min-w-0 text-neutral-600">Reference guide</span>
          <span className="font-mono text-xs text-neutral-500">PDF</span>
        </li>
      </ul>
      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-lg font-semibold">$48</p>
        <a
          href="#"
          className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          View files
        </a>
      </div>
    </article>
  )
}
