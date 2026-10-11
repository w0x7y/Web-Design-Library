export default function ProfileCardIdentityDetails() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-80">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">JE</span>
        <div className="min-w-0"><h2 className="text-lg font-semibold">Jordan Ellis</h2><p className="text-sm text-neutral-500">Team coach</p></div>
      </div>
      <p className="mt-2 text-sm text-neutral-600">Short biography naming a focus and a thoughtful approach.</p>
      <dl className="mt-3 border-t border-neutral-200 text-sm">
        <div className="flex justify-between gap-3 border-b border-neutral-200 py-1"><dt className="text-neutral-500">Time zone</dt><dd className="max-w-[55%] text-right">UTC+1</dd></div>
        <div className="flex justify-between gap-3 border-b border-neutral-200 py-1"><dt className="text-neutral-500">Languages</dt><dd className="max-w-[55%] text-right">English, Spanish</dd></div>
        <div className="flex justify-between gap-3 border-b border-neutral-200 py-1"><dt className="text-neutral-500">Next available</dt><dd className="max-w-[55%] text-right">Mar 14</dd></div>
      </dl>
      <a href="#" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-3 w-full">Book a session</a>
    </article>
  )
}

