export default function FooterAddressMap() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr_192px]">
          <div>
            <a href="#" aria-label="Logo home" className="inline-flex items-center gap-2 font-semibold hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M4 4h16v16H4zM4 12h16M12 4v16" /></svg>Logo</a>
            <address className="mt-6 text-sm not-italic text-neutral-600">Street address line<br />City and postal code<br />Country or region</address>
            <div className="mt-5 grid gap-3">
              <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Get directions</a>
              <a href="mailto:name@example.com" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">name@example.com</a>
            </div>
          </div>
          <div>
            <div role="img" aria-label="Image placeholder: location map" className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><path d="M3 3h18v18H3zM3 17l6-6 4 4 3-3 5 5" /></svg>
            </div>
            <p className="mt-3 text-xs text-neutral-500">Location note or arrival instructions</p>
          </div>
          <nav aria-label="Footer pages">
            <h2 className="text-base font-semibold">Useful pages</h2>
            <div className="mt-5">
              <ul role="list" className="grid gap-3">
                <li>
                  <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">About</a>
                </li>
                <li>
                  <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Contact</a>
                </li>
                <li>
                  <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Accessibility</a>
                </li>
                <li>
                  <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Privacy</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-neutral-200 pt-6 text-xs text-neutral-500">
          <p className="mr-auto">© 2026 Site name</p>
          <p>Opening hours or contact availability</p>
        </div>
      </div>
    </footer>
  )
}
