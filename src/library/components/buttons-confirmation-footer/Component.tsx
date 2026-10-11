export default function ButtonsConfirmationFooter() {
  return (
    <div className="w-72 rounded-lg border border-neutral-200 bg-white text-neutral-900 sm:w-96"><div className="p-5"><h2 className="text-base font-semibold">Decision heading</h2>
    <p className="mt-2 text-sm text-pretty text-neutral-600">Explain what this action changes and who it affects.</p></div>
    <div className="flex items-center justify-between gap-3 border-t border-neutral-200 bg-neutral-50 p-4"><button className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 " type="button" >Cancel</button>
    <button className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 " type="button" >Confirm</button></div></div>
  )
}
