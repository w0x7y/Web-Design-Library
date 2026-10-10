export default function BadgesVariantSet() {
  return (
    <div className="grid w-72 gap-5 text-neutral-900 sm:w-[26rem]">
      <div>
        <h2 className="mb-2 text-xs text-neutral-500">Styles</h2>
        <ul role="list" className="grid grid-cols-[max-content_max-content] gap-2 sm:flex sm:flex-wrap">
          <li><span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Outline</span></li>
          <li><span className="inline-flex items-center rounded-full border border-neutral-300 bg-neutral-900 px-2.5 py-0.5 text-xs font-medium text-white">Solid</span></li>
          <li><span className="inline-flex items-center rounded-full border border-neutral-300 bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700">Subtle</span></li>
          <li><span className="inline-flex items-center rounded-full border border-dashed border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Dashed</span></li>
        </ul>
      </div>
      <div>
        <h2 className="mb-2 text-xs text-neutral-500">Indicators</h2>
        <ul role="list" className="grid grid-cols-[max-content_max-content] gap-2 sm:flex sm:flex-wrap">
          <li><span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium"><span aria-hidden="true" className="size-1.5 rounded-full border border-neutral-900 bg-neutral-900" />Dot</span></li>
          <li><span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium"><span aria-hidden="true" className="size-1.5 rounded-full border border-neutral-900" />Ring</span></li>
          <li><span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3"><path d="m5 12 4 4L19 6" /></svg>Check</span></li>
          <li><span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Count<span className="tabular-nums">12</span></span></li>
        </ul>
      </div>
      <div>
        <h2 className="mb-2 text-xs text-neutral-500">Shape and size</h2>
        <ul role="list" className="grid grid-cols-[max-content_max-content] items-center gap-2 sm:flex sm:flex-wrap">
          <li><span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Pill</span></li>
          <li><span className="inline-flex items-center rounded-md border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Square</span></li>
          <li><span className="inline-flex h-5 items-center rounded-full border border-neutral-300 px-2 text-xs font-medium">Small</span></li>
          <li><span className="inline-flex h-7 items-center rounded-full border border-neutral-300 px-3 text-sm font-medium">Large</span></li>
        </ul>
      </div>
    </div>
  )
}
