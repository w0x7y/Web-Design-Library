export default function ProfileCardCredentialTimeline() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-80">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
        >
          AR
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-semibold">Alex Rivera</h3>
          <p className="text-sm text-neutral-500">Role or specialty</p>
        </div>
      </div>
      <ol
        role="list"
        className="mt-4 space-y-3 border-t border-neutral-200 pt-4"
      >
        <li className="grid grid-cols-[3rem_minmax(0,1fr)] gap-3">
          <span className="text-xs text-neutral-500">2024</span>
          <div>
            <h3 className="text-sm font-semibold">Current role</h3>
            <p className="text-xs text-neutral-600">Short scope description</p>
          </div>
        </li>
        <li className="grid grid-cols-[3rem_minmax(0,1fr)] gap-3">
          <span className="text-xs text-neutral-500">2021</span>
          <div>
            <h3 className="text-sm font-semibold">Previous role</h3>
            <p className="text-xs text-neutral-600">
              Relevant background detail
            </p>
          </div>
        </li>
        <li className="grid grid-cols-[3rem_minmax(0,1fr)] gap-3">
          <span className="text-xs text-neutral-500">2018</span>
          <div>
            <h3 className="text-sm font-semibold">Qualification</h3>
            <p className="text-xs text-neutral-600">
              Credential or study detail
            </p>
          </div>
        </li>
      </ol>
      <a
        href="#"
        className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block text-sm"
      >
        View full profile
      </a>
    </article>
  )
}
