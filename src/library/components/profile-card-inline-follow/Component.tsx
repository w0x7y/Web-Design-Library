export default function ProfileCardInlineFollow() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-[22rem]">
      <div className="flex items-center gap-2">
        <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">SP</span>
        <div className="min-w-0 flex-1"><h2 className="truncate text-base font-semibold">Sam Patel</h2><p className="truncate text-xs text-neutral-500">@sampatel</p></div>
        <label className="relative block w-28 shrink-0 cursor-pointer">
          <input type="checkbox" aria-label="Follow Sam Patel" className="peer sr-only focus-visible:outline-hidden" />
          <span className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 w-28 peer-checked:hidden peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900">Follow</span>
          <span className="hidden h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 w-28 peer-checked:inline-flex peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-neutral-900">Following</span>
        </label>
      </div>
      <p className="mt-3 text-sm text-neutral-600">Short biography naming experience and interests.</p>
      <p className="mt-3 flex flex-wrap gap-3 text-xs text-neutral-500"><span><strong className="font-medium text-neutral-900">1,284</strong> followers</span><span><strong className="font-medium text-neutral-900">312</strong> following</span></p>
    </article>
  )
}

