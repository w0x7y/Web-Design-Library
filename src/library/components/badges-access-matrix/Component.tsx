export default function BadgesAccessMatrix() {
  return (
    <div className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-[28rem]"><table className="w-full"><caption className="mb-3 text-left text-sm font-semibold">Access summary</caption>
    <thead><tr><th className="pb-2 pr-2 text-left text-xs font-medium text-neutral-500" scope="col">Group</th>
    <th className="px-1 pb-2 text-center text-xs font-medium text-neutral-500" scope="col">View</th>
    <th className="pl-1 pb-2 text-center text-xs font-medium text-neutral-500" scope="col">Edit</th></tr></thead>
    <tbody><tr className="border-t border-neutral-200"><th className="py-3 pr-2 text-left text-xs font-medium text-neutral-900" scope="row">Group name</th>
    <td className="px-1 py-3 text-center"><span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 ">Enabled</span></td>
    <td className="pl-1 py-3 text-center"><span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 ">Read only</span></td></tr>
    <tr className="border-t border-neutral-200"><th className="py-3 pr-2 text-left text-xs font-medium text-neutral-900" scope="row">Another group</th>
    <td className="px-1 py-3 text-center"><span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 ">Enabled</span></td>
    <td className="pl-1 py-3 text-center"><span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 ">Enabled</span></td></tr>
    <tr className="border-t border-neutral-200"><th className="py-3 pr-2 text-left text-xs font-medium text-neutral-900" scope="row">Final group</th>
    <td className="px-1 py-3 text-center"><span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 ">Unavailable</span></td>
    <td className="pl-1 py-3 text-center"><span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 ">Enabled</span></td></tr></tbody></table></div>
  )
}
