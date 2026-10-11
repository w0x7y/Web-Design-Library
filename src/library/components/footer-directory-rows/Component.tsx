export default function FooterDirectoryRows() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <a href="#" aria-label="Logo home" className="inline-flex items-center gap-2 font-semibold hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M4 4h16v16H4zM4 12h16M12 4v16" /></svg>Logo</a>
        <nav aria-label="Footer directory rows" className="mt-10 border-t border-neutral-200">
          <div className="grid gap-4 border-b border-neutral-200 py-6 md:grid-cols-[160px_1fr_1fr]">
            <h2 className="text-lg font-semibold">Explore</h2>
            <p className="text-sm text-neutral-600">Destinations for learning about the offer</p>
            <ul role="list" className="flex flex-wrap gap-x-6 gap-y-3">
              <li>
                <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Overview</a>
              </li>
              <li>
                <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Features</a>
              </li>
              <li>
                <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="grid gap-4 border-b border-neutral-200 py-6 md:grid-cols-[160px_1fr_1fr]">
            <h2 className="text-lg font-semibold">Learn</h2>
            <p className="text-sm text-neutral-600">Destinations for deeper information</p>
            <ul role="list" className="flex flex-wrap gap-x-6 gap-y-3">
              <li>
                <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Documentation</a>
              </li>
              <li>
                <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Guides</a>
              </li>
              <li>
                <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Updates</a>
              </li>
            </ul>
          </div>
          <div className="grid gap-4 border-b border-neutral-200 py-6 md:grid-cols-[160px_1fr_1fr]">
            <h2 className="text-lg font-semibold">Connect</h2>
            <p className="text-sm text-neutral-600">Destinations for contacting the team</p>
            <ul role="list" className="flex flex-wrap gap-x-6 gap-y-3">
              <li>
                <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Contact</a>
              </li>
              <li>
                <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Community</a>
              </li>
              <li>
                <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Support</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="mt-8 flex flex-wrap gap-4 text-xs text-neutral-500">
          <p className="mr-auto">© 2026 Site name</p>
          <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-xs">Privacy</a>
          <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-xs">Terms</a>
        </div>
      </div>
    </footer>
  )
}
