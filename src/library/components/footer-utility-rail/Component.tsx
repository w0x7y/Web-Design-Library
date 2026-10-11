export default function FooterUtilityRail() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
            <a href="#" aria-label="Logo home" className="inline-flex items-center gap-2 font-semibold hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M4 4h16v16H4zM4 12h16M12 4v16" /></svg>Logo</a>
            <p className="mt-5 text-sm text-neutral-600">Short statement about the site purpose</p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><span aria-hidden="true" className="size-2 rounded-full border border-neutral-300 bg-neutral-900"></span>All systems operational</a>
            <label htmlFor="footer-utility-rail-language" className="mt-6 block text-sm font-medium">Language</label>
            <select id="footer-utility-rail-language" name="language" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
            </select>
          </aside>
          <nav aria-label="Footer directory" className="grid gap-8 sm:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold">Product</h2>
              <div className="mt-5">
                <ul role="list" className="grid gap-3">
                  <li>
                    <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Overview</a>
                  </li>
                  <li>
                    <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Pricing</a>
                  </li>
                  <li>
                    <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Updates</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-base font-semibold">Resources</h2>
              <div className="mt-5">
                <ul role="list" className="grid gap-3">
                  <li>
                    <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Documentation</a>
                  </li>
                  <li>
                    <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Guides</a>
                  </li>
                  <li>
                    <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Community</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-base font-semibold">Company</h2>
              <div className="mt-5">
                <ul role="list" className="grid gap-3">
                  <li>
                    <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">About</a>
                  </li>
                  <li>
                    <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Careers</a>
                  </li>
                  <li>
                    <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-neutral-200 pt-6">
          <p className="mr-auto text-xs text-neutral-500">© 2026 Site name</p>
          <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-xs">Privacy</a>
          <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-xs">Terms</a>
        </div>
      </div>
    </footer>
  )
}
