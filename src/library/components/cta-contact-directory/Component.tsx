export default function CtaContactDirectory() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the section</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for finding the right contact</h2>
        </header>
        <ul role="list" className="mt-12 border-t border-neutral-200">
          <li className="grid gap-4 border-b border-neutral-200 py-6 md:grid-cols-[48px_1fr_auto] md:items-center">
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M4 5h16v12H8l-4 4V5Z" /></svg></span>
            <div>
              <h3 className="text-lg font-semibold">Questions before starting</h3>
              <p className="mt-2 text-sm text-neutral-600">Describe the questions this contact route can answer.</p>
            </div>
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Ask a question</a>
          </li>
          <li className="grid gap-4 border-b border-neutral-200 py-6 md:grid-cols-[48px_1fr_auto] md:items-center">
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M4 5h16v12H8l-4 4V5Z" /></svg></span>
            <div>
              <h3 className="text-lg font-semibold">Help with an existing account</h3>
              <p className="mt-2 text-sm text-neutral-600">Explain what to include when asking for account help.</p>
            </div>
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Contact support</a>
          </li>
          <li className="grid gap-4 border-b border-neutral-200 py-6 md:grid-cols-[48px_1fr_auto] md:items-center">
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M4 5h16v12H8l-4 4V5Z" /></svg></span>
            <div>
              <h3 className="text-lg font-semibold">Requests that need a conversation</h3>
              <p className="mt-2 text-sm text-neutral-600">Name the requests that benefit from a scheduled discussion.</p>
            </div>
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Book a conversation</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
