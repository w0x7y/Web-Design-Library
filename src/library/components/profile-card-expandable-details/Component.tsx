export default function ProfileCardExpandableDetails() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-80">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0"><h2 className="text-lg font-semibold">Riley Morgan</h2><p className="text-sm text-neutral-500">Research lead</p></div>
        <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">RM</span>
      </div>
      <p className="mt-2 text-sm text-neutral-600">Short summary of focus and experience.</p>
      <details open className="group mt-3 border-y border-neutral-200">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 py-2 text-sm font-medium transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
          Experience and credentials <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
        </summary>
        <div className="pb-2">
          <p className="text-sm text-neutral-600">Brief background and qualifications.</p>
          <dl className="mt-2 grid gap-1 text-xs">
            <div className="flex justify-between gap-3"><dt className="text-neutral-500">Experience</dt><dd className="text-right">8 years</dd></div>
            <div className="flex justify-between gap-3"><dt className="text-neutral-500">Credentials</dt><dd className="text-right">Credential slot</dd></div>
          </dl>
        </div>
      </details>
      <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-2 inline-block text-sm">View full profile</a>
    </article>
  )
}

