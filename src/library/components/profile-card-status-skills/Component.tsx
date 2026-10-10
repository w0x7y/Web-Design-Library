export default function ProfileCardStatusSkills() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-80">
      <div className="flex items-center justify-between gap-2">
        <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">JQ</span>
        <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium gap-1.5"><span aria-hidden="true" className="size-1.5 rounded-full bg-neutral-900"></span>Available Mar 14</span>
      </div>
      <h2 className="mt-3 text-lg font-semibold">Jamie Quinn</h2>
      <p className="text-sm text-neutral-500">Design consultant</p>
      <p className="mt-2 text-sm text-neutral-600">Positioning statement naming a focus, an approach and the value of working together.</p>
      <ul role="list" className="mt-3 flex flex-wrap gap-2">
        <li className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Design</li><li className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Review</li><li className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">QA</li><li className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Ops</li>
      </ul>
      <a href="#" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 w-full gap-2">Contact Jamie <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M5 12h14m-6-6 6 6-6 6" /></svg></a>
    </article>
  )
}

