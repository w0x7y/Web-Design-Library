export default function BadgesProvenanceHeader() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white text-neutral-900 sm:w-96"><div className="p-4"><div className="flex items-start justify-between gap-3"><h2 className="text-base font-semibold">Document title</h2>
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 shrink-0">v2.4</span></div>
    <p className="mt-2 text-sm text-pretty text-neutral-600">Brief description of the document scope.</p>
    <div className="mt-3 flex flex-wrap items-center gap-2"><span className="text-xs text-neutral-500">Alex Rivera</span>
    <span className="text-xs text-neutral-400" aria-hidden="true">|</span>
    <span className="text-xs text-neutral-500">Updated Oct 11</span></div></div>
    <div className="flex items-center justify-between gap-3 border-t border-neutral-200 bg-neutral-50 px-4 py-3"><span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 gap-1"><svg className="size-3" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4L19 6" /></svg>Reviewed</span>
    <span className="text-xs text-neutral-600">Public</span></div></article>
  )
}
