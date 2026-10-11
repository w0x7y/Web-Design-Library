export default function FooterAudienceDirectories() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <div className="grid gap-6 md:grid-cols-2">
          <nav aria-label="For individual readers" className="rounded-lg border border-neutral-200 bg-white p-6 sm:p-8">
            <h2 className="text-lg font-semibold">For individual readers</h2>
            <p className="mt-3 text-sm text-neutral-600">A short introduction to destinations for personal use</p>
            <div className="mt-6">
              <ul role="list" className="grid gap-3">
                <li>
                  <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Getting started</a>
                </li>
                <li>
                  <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Guides</a>
                </li>
                <li>
                  <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Support</a>
                </li>
              </ul>
            </div>
          </nav>
          <nav aria-label="For teams" className="rounded-lg border border-neutral-200 bg-white p-6 sm:p-8">
            <h2 className="text-lg font-semibold">For teams</h2>
            <p className="mt-3 text-sm text-neutral-600">A short introduction to shared-work destinations</p>
            <div className="mt-6">
              <ul role="list" className="grid gap-3">
                <li>
                  <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Team overview</a>
                </li>
                <li>
                  <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Access management</a>
                </li>
                <li>
                  <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-6 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a href="#" aria-label="Logo home" className="inline-flex items-center gap-2 font-semibold hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M4 4h16v16H4zM4 12h16M12 4v16" /></svg>Logo</a>
            <p className="mt-2 text-xs text-neutral-500">© 2026 Site name</p>
          </div>
          <nav aria-label="Footer legal links" className="flex flex-wrap gap-6">
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Privacy</a>
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Terms</a>
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Accessibility</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
