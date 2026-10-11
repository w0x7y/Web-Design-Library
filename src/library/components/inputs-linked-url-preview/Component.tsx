export default function InputsLinkedUrlPreview() {
  return (
    <div className="w-72 text-neutral-900 sm:w-[26rem]"><label className="mb-1.5 block text-sm font-medium" htmlFor="inputs-linked-url-preview-url">Page URL</label>
    <input className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" id="inputs-linked-url-preview-url" name="url" type="url" defaultValue="https://example.com" aria-describedby="inputs-linked-url-preview-hint" />
    <p className="mt-1.5 text-xs text-neutral-500" id="inputs-linked-url-preview-hint">Enter the full address, including https://.</p>
    <div className="mt-4 flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-3"><span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"><svg className="size-5 shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m10 13 4-2m-6 4H6a4 4 0 0 1 0-8h4m4 0h4a4 4 0 0 1 0 8h-4" /></svg></span>
    <div className="min-w-0 flex-1"><p className="truncate text-sm font-medium text-neutral-900">Linked page title</p>
    <p className="mt-0.5 truncate text-xs text-neutral-500">example.com</p></div>
    <button className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-neutral-600 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" type="button" aria-label="Remove linked page preview"><svg className="size-4" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 6 12 12M6 18 18 6" /></svg></button></div></div>
  )
}
