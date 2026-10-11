export default function ButtonsWizardNavigation() {
  return (
    <div className="w-72 text-neutral-900 sm:w-[28rem]"><ol className="grid grid-cols-3 gap-2" role="list" aria-label="Progress"><li className="border-t-2 border-neutral-900 pt-2"><span className="text-xs font-medium text-neutral-500">1</span>
    <p className="mt-1 text-xs text-neutral-600">Details</p></li>
    <li className="border-t-2 border-neutral-900 pt-2" aria-current="step"><span className="text-xs font-medium text-neutral-500">2</span>
    <p className="mt-1 text-xs font-medium text-neutral-900">Review</p></li>
    <li className="border-t-2 border-neutral-200 pt-2"><span className="text-xs font-medium text-neutral-500">3</span>
    <p className="mt-1 text-xs text-neutral-600">Finish</p></li></ol>
    <div className="mt-6 flex items-center justify-between gap-3"><button className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 gap-2" type="button" ><svg className="size-4" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5m6-6-6 6 6 6" /></svg>Back</button>
    <button className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 gap-2" type="button" >Continue<svg className="size-4" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg></button></div>
    <p className="mt-4 text-center text-sm"><a className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 " href="#" >Save and exit</a></p></div>
  )
}
