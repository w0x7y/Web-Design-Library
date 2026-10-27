export default function InputsPasswordRequirements() {
  return (
    <div className="w-72 text-neutral-900 sm:w-[26rem]">
      <label htmlFor="password-new" className="mb-1.5 block text-sm font-medium">New password</label>
      <div className="flex h-10 items-center rounded-md border border-neutral-300 bg-white has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-neutral-900">
        <input id="password-new" name="new-password" type="password" autoComplete="new-password" defaultValue="Sample123!" aria-describedby="password-strength password-rules" className="h-full w-full min-w-0 rounded-l-md border-0 bg-white px-3 text-sm focus-visible:outline-hidden" />
        <button type="button" aria-label="Show password" className="inline-flex h-full shrink-0 items-center justify-center gap-1.5 rounded-r-md border-l border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></svg>
          Show
        </button>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <div aria-hidden="true" className="grid flex-1 grid-cols-4 gap-1">
          <span className="h-1.5 rounded-full bg-neutral-900 forced-colors:bg-[CanvasText]" />
          <span className="h-1.5 rounded-full bg-neutral-900 forced-colors:bg-[CanvasText]" />
          <span className="h-1.5 rounded-full bg-neutral-900 forced-colors:bg-[CanvasText]" />
          <span className="h-1.5 rounded-full border border-transparent bg-neutral-200 forced-colors:border-[CanvasText]" />
        </div>
        <p id="password-strength" className="text-xs font-medium text-neutral-600">Strength: Good</p>
      </div>
      <ul role="list" id="password-rules" aria-label="Password requirements" className="mt-4 grid gap-2 sm:grid-cols-2">
        <li className="flex items-center gap-2 text-sm text-neutral-500">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-400"><circle cx="12" cy="12" r="9" /></svg>
          <span><span className="sr-only">Not met: </span>At least 12 characters</span>
        </li>
        <li className="flex items-center gap-2 text-sm text-neutral-900">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></svg>
          <span><span className="sr-only">Met: </span>One uppercase letter</span>
        </li>
        <li className="flex items-center gap-2 text-sm text-neutral-900">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></svg>
          <span><span className="sr-only">Met: </span>One number</span>
        </li>
        <li className="flex items-center gap-2 text-sm text-neutral-900">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></svg>
          <span><span className="sr-only">Met: </span>One symbol</span>
        </li>
      </ul>
    </div>
  )
}
