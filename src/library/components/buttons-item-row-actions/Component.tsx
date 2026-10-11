export default function ButtonsItemRowActions() {
  return (
    <ul className="w-72 divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-[26rem]" role="list"><li className="py-3 first:pt-0 last:pb-0"><div className="flex items-center justify-between gap-3"><span className="text-sm font-semibold">Item title</span>
    <span className="text-xs text-neutral-500">Updated Mar 14</span></div>
    <div className="mt-2 flex flex-wrap gap-4"><button className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" type="button" aria-label="Edit item title">Edit</button>
    <button className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" type="button" aria-label="Duplicate item title">Duplicate</button>
    <button className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" type="button" aria-label="Remove item title">Remove</button></div></li>
    <li className="py-3 first:pt-0 last:pb-0"><div className="flex items-center justify-between gap-3"><span className="text-sm font-semibold">Another item title</span>
    <span className="text-xs text-neutral-500">Updated Mar 14</span></div>
    <div className="mt-2 flex flex-wrap gap-4"><button className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" type="button" aria-label="Edit another item title">Edit</button>
    <button className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" type="button" aria-label="Duplicate another item title">Duplicate</button>
    <button className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" type="button" aria-label="Remove another item title">Remove</button></div></li></ul>
  )
}
