export default function FooterDocumentRegister() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a href="#" aria-label="Logo home" className="inline-flex items-center gap-2 font-semibold hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M4 4h16v16H4zM4 12h16M12 4v16" /></svg>Logo</a>
            <h2 className="mt-6 text-lg font-semibold">Documents and policies</h2>
          </div>
          <p className="max-w-sm text-sm text-neutral-600">Short note about where official information is published</p>
        </div>
        <table className="mt-8 w-full table-fixed border-collapse text-left">
          <caption className="sr-only">Site documents and policy updates</caption>
          <thead>
            <tr className="border-b border-neutral-200 text-xs text-neutral-500">
              <th scope="col" className="w-1/2 pb-3 font-medium">Document</th>
              <th scope="col" className="w-1/4 pb-3 font-medium">Format</th>
              <th scope="col" className="w-1/4 pb-3 font-medium">Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-200">
              <th scope="row" className="py-4 pr-4 text-sm font-medium"><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Terms</a></th>
              <td className="py-4 text-xs text-neutral-600">HTML</td>
              <td className="py-4 text-xs text-neutral-600">Oct 10</td>
            </tr>
            <tr className="border-b border-neutral-200">
              <th scope="row" className="py-4 pr-4 text-sm font-medium"><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Privacy policy</a></th>
              <td className="py-4 text-xs text-neutral-600">HTML</td>
              <td className="py-4 text-xs text-neutral-600">Sep 22</td>
            </tr>
            <tr className="border-b border-neutral-200">
              <th scope="row" className="py-4 pr-4 text-sm font-medium"><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Accessibility statement</a></th>
              <td className="py-4 text-xs text-neutral-600">PDF</td>
              <td className="py-4 text-xs text-neutral-600">Aug 14</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <p className="mr-auto text-xs text-neutral-500">© 2026 Site name</p>
          <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm">Contact about a document</a>
        </div>
      </div>
    </footer>
  )
}
