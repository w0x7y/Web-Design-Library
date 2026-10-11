export default function ButtonsCommandTiles() {
  return (
    <div className="grid w-72 grid-cols-2 gap-3 text-neutral-900 sm:w-[28rem]" role="group" aria-label="Starting actions"><button className="flex min-h-28 flex-col items-start gap-2 rounded-md border border-neutral-300 bg-white p-4 text-left text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" type="button"><svg className="size-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H5v18h14V8ZM14 3v5h5M8 12h8M8 16h6" /></svg>
    <span className="text-sm font-semibold">Create item</span>
    <span className="text-xs text-neutral-600">Start from a blank item</span></button>
    <button className="flex min-h-28 flex-col items-start gap-2 rounded-md border border-neutral-300 bg-white p-4 text-left text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" type="button"><svg className="size-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h7l2-3h9v16H3Z" /></svg>
    <span className="text-sm font-semibold">Open folder</span>
    <span className="text-xs text-neutral-600">Browse saved items</span></button>
    <button className="flex min-h-28 flex-col items-start gap-2 rounded-md border border-neutral-300 bg-white p-4 text-left text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" type="button"><svg className="size-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16V3m-4 4 4-4 4 4M5 14v7h14v-7" /></svg>
    <span className="text-sm font-semibold">Import file</span>
    <span className="text-xs text-neutral-600">Bring in an existing file</span></button>
    <button className="flex min-h-28 flex-col items-start gap-2 rounded-md border border-neutral-300 bg-white p-4 text-left text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" type="button"><svg className="size-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
    <span className="text-sm font-semibold">Add collection</span>
    <span className="text-xs text-neutral-600">Group related items</span></button></div>
  )
}
