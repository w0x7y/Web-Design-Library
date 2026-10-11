export default function CtaAudienceChoiceCards() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the section</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for choosing the right next step</h2>
          <p className='mt-4 text-lg text-pretty text-neutral-600'>Describe the two routes and who each one suits.</p>
        </header>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="flex flex-col rounded-lg border border-neutral-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold">Audience ready to begin</h3>
            <p className="mt-3 text-base text-neutral-600">Explain the next step for this audience and the result they can expect.</p>
            <ul role="list" className="mt-6 grid gap-3 text-sm text-neutral-600">
              <li className="flex items-start gap-3"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-900"><path d="m5 12 4 4L19 6" /></svg>First condition for this route</li>
              <li className="flex items-start gap-3"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-900"><path d="m5 12 4 4L19 6" /></svg>Second condition for this route</li>
            </ul>
            <div className="mt-auto pt-8">
              <a href="#" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Start now</a>
            </div>
          </article>
          <article className="flex flex-col rounded-lg border border-neutral-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold">Audience needing a conversation</h3>
            <p className="mt-3 text-base text-neutral-600">Explain the next step for this audience and the result they can expect.</p>
            <ul role="list" className="mt-6 grid gap-3 text-sm text-neutral-600">
              <li className="flex items-start gap-3"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-900"><path d="m5 12 4 4L19 6" /></svg>First condition for this route</li>
              <li className="flex items-start gap-3"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-900"><path d="m5 12 4 4L19 6" /></svg>Second condition for this route</li>
            </ul>
            <div className="mt-auto pt-8">
              <a href="#" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Talk to someone</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
