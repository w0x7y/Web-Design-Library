export default function BadgesMilestoneStrip() {
  return (
    <div className="w-72 text-neutral-900 sm:w-[28rem]"><h2 className="text-sm font-semibold">Milestones</h2>
    <ol className="mt-3 grid grid-cols-3" role="list"><li className="border-t border-neutral-200 pt-3 text-center"><span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 gap-1 bg-white"><svg className="size-3" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4L19 6" /></svg>Complete</span>
    <p className="mt-2 text-xs font-medium text-neutral-900">First milestone</p>
    <p className="mt-1 text-xs tabular-nums text-neutral-500">Oct 08</p></li>
    <li className="border-t border-neutral-200 pt-3 text-center"><span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 gap-1 bg-neutral-900 text-white border-neutral-900">Current</span>
    <p className="mt-2 text-xs font-medium text-neutral-900">Next milestone</p>
    <p className="mt-1 text-xs tabular-nums text-neutral-500">Oct 11</p></li>
    <li className="border-t border-neutral-200 pt-3 text-center"><span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 gap-1 bg-white">Pending</span>
    <p className="mt-2 text-xs font-medium text-neutral-900">Final milestone</p>
    <p className="mt-1 text-xs tabular-nums text-neutral-500">Oct 18</p></li></ol></div>
  )
}
