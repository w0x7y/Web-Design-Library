export default function ProfileCardCenteredStats() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-center text-neutral-900 sm:w-80">
      <span aria-hidden="true" className="mx-auto flex size-16 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
      <h2 className="mt-3 text-lg font-semibold">Alex Rivera</h2>
      <p className="text-sm text-neutral-500">Product designer</p>
      <dl className="mt-5 grid grid-cols-3 border-y border-neutral-200 py-4">
        <div className="flex flex-col-reverse"><dt className="text-xs text-neutral-500">Followers</dt><dd className="text-base font-semibold">1,284</dd></div>
        <div className="flex flex-col-reverse"><dt className="text-xs text-neutral-500">Following</dt><dd className="text-base font-semibold">312</dd></div>
        <div className="flex flex-col-reverse"><dt className="text-xs text-neutral-500">Posts</dt><dd className="text-base font-semibold">48</dd></div>
      </dl>
      <div className="mt-5 flex gap-3">
        <button type="button" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 flex-1">Follow</button>
        <button type="button" aria-label="Message Alex Rivera" className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 w-11 shrink-0 px-0"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" /></svg></button>
      </div>
    </article>
  )
}

