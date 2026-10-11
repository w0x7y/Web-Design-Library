export default function FooterAccordionSitemap() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href="#" aria-label="Logo home" className="inline-flex items-center gap-2 font-semibold hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M4 4h16v16H4zM4 12h16M12 4v16" /></svg>Logo</a>
            <p className="mt-3 max-w-sm text-sm text-neutral-600">Short closing statement about the site purpose</p>
          </div>
          <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Back to top</a>
        </div>
        <nav aria-label="Footer sitemap" className="mt-10 border-t border-neutral-200">
          <details className="group border-b border-neutral-200">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">Product<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg></summary>
            <div className="pb-6">
              <ul role="list" className="flex flex-wrap gap-6">
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
          </details>
          <details className="group border-b border-neutral-200">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">Resources<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg></summary>
            <div className="pb-6">
              <ul role="list" className="flex flex-wrap gap-6">
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
          </details>
          <details className="group border-b border-neutral-200">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">Company<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg></summary>
            <div className="pb-6">
              <ul role="list" className="flex flex-wrap gap-6">
                <li>
                  <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">About</a>
                </li>
                <li>
                  <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Contact</a>
                </li>
                <li>
                  <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Careers</a>
                </li>
              </ul>
            </div>
          </details>
        </nav>
        <p className="mt-8 text-xs text-neutral-500">© 2026 Site name</p>
      </div>
    </footer>
  )
}
