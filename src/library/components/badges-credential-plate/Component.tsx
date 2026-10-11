export default function BadgesCredentialPlate() {
  return (
    <div className="w-72 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-80">
      <div className="flex items-start gap-4">
        <div className="flex size-16 shrink-0 flex-col items-center justify-center rounded-lg border border-neutral-900">
          <span className="text-2xl font-semibold">4</span>
          <span className="text-xs text-neutral-500">Grade</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-base font-semibold">Credential name</h2>
          <p className="mt-1 text-sm text-neutral-500">Issuer name</p>
          <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3"><path d="m5 12 4 4L19 6" /></svg>
            Verified
          </span>
        </div>
      </div>
      <ul role="list" className="mt-4 flex flex-wrap gap-1.5">
        {['Skill area', 'Level', 'Category'].map((tag) => (
          <li key={tag}><span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">{tag}</span></li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between gap-3 border-t border-neutral-200 pt-3 text-xs text-neutral-500">
        <span>Issued Mar 14</span>
        <span className="font-mono">CR-1042</span>
      </div>
    </div>
  )
}
