export default function InputsFieldAnatomy() {
  return (
    <div className="grid w-72 gap-5 text-neutral-900 sm:w-80">
      <div>
        <div className="flex items-center justify-between text-sm">
          <label htmlFor="anatomy-name" className="font-medium">Display name</label>
          <span className="text-neutral-500">Optional</span>
        </div>
        <input id="anatomy-name" name="display-name" type="text" autoComplete="nickname" aria-describedby="anatomy-name-hint" placeholder="Enter display name" className="mt-1.5 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
        <p id="anatomy-name-hint" className="mt-1.5 text-sm text-neutral-500">Shown beside your contributions.</p>
      </div>
      <div>
        <label htmlFor="anatomy-email" className="block text-sm font-medium">Email</label>
        <input id="anatomy-email" name="email" type="email" autoComplete="email" aria-invalid="true" aria-describedby="anatomy-email-error" defaultValue="name@" placeholder="name@example.com" className="mt-1.5 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 hover:border-neutral-400 aria-invalid:border-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
        <p id="anatomy-email-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-neutral-600">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="m12 3 10 18H2L12 3Z" /><path d="M12 9v5M12 17h.01" /></svg>
          Error: enter a valid email.
        </p>
      </div>
      <div>
        <label htmlFor="anatomy-account" className="block text-sm font-medium">Account ID</label>
        <input id="anatomy-account" name="account-id" type="text" disabled defaultValue="AC-1042" aria-describedby="anatomy-account-hint" placeholder="Account ID" className="mt-1.5 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
        <p id="anatomy-account-hint" className="mt-1.5 text-sm text-neutral-500">This value cannot change.</p>
      </div>
    </div>
  )
}
