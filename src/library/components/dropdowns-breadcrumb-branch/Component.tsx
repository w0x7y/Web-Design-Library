export default function DropdownsBreadcrumbBranch() {
  return (
    <div className="relative h-64 w-72 text-neutral-900 sm:w-[28rem]"><nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb"><a className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 " href="#" >Root</a>
    <span className="text-neutral-400" aria-hidden="true">/</span>
    <details open><summary className="flex h-9 cursor-pointer list-none items-center gap-1 rounded-md px-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">Collection<svg className="size-3" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></summary>
    <div className="absolute left-0 top-11 w-full rounded-lg border border-neutral-200 bg-white p-3 shadow-lg"><p className="mb-2 px-2 text-xs font-medium text-neutral-500">Collection branch</p>
    <ul role="list"><li><a className="flex h-9 items-center rounded-md px-2 text-sm text-neutral-900 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" href="#" >Collection title</a></li>
    <li><a className="flex h-9 items-center rounded-md pl-6 pr-2 text-sm text-neutral-900 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" href="#" aria-current="page">Current item</a></li>
    <li><a className="flex h-9 items-center rounded-md pl-6 pr-2 text-sm text-neutral-900 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" href="#" >Sibling item</a></li></ul></div></details>
    <span className="text-neutral-400" aria-hidden="true">/</span>
    <span className="text-neutral-500">Item</span></nav></div>
  )
}
