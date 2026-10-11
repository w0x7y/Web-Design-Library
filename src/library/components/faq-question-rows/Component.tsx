export default function FaqQuestionRows() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for common questions</h2>
          <p className="mt-4 text-lg text-pretty text-neutral-600">A short introduction that helps readers find the answer they need.</p>
        </div>
        <dl className="mt-12">
          <div className="grid gap-3 border-t border-neutral-200 py-8 last:border-b lg:grid-cols-12 lg:gap-8">
            <dt className="text-lg font-semibold lg:col-span-5">Question about getting started</dt>
            <dd className="text-base text-pretty text-neutral-600 lg:col-span-7">
              <p>Describe the first step and what readers need to prepare. Explain how they know they are ready to begin.</p>
              <p className="mt-4">Add a supporting detail that helps readers prepare for the first action. Keep it specific to this question.</p>
            </dd>
          </div>
          <div className="grid gap-3 border-t border-neutral-200 py-8 last:border-b lg:grid-cols-12 lg:gap-8">
            <dt className="text-lg font-semibold lg:col-span-5">Question about what is included</dt>
            <dd className="text-base text-pretty text-neutral-600 lg:col-span-7">
              <p>Name the main inclusions and the limits that affect the decision. Keep the explanation focused on what readers receive.</p>
            </dd>
          </div>
          <div className="grid gap-3 border-t border-neutral-200 py-8 last:border-b lg:grid-cols-12 lg:gap-8">
            <dt className="text-lg font-semibold lg:col-span-5">Question about choosing an option</dt>
            <dd className="text-base text-pretty text-neutral-600 lg:col-span-7">
              <p>Explain the difference between the available options. Give readers a useful criterion for making their choice.</p>
            </dd>
          </div>
          <div className="grid gap-3 border-t border-neutral-200 py-8 last:border-b lg:grid-cols-12 lg:gap-8">
            <dt className="text-lg font-semibold lg:col-span-5">Question about managing access</dt>
            <dd className="text-base text-pretty text-neutral-600 lg:col-span-7">
              <p>Explain who can access the result and where permissions are managed. Include the detail readers need before inviting someone.</p>
            </dd>
          </div>
          <div className="grid gap-3 border-t border-neutral-200 py-8 last:border-b lg:grid-cols-12 lg:gap-8">
            <dt className="text-lg font-semibold lg:col-span-5">Question about finding more help</dt>
            <dd className="text-base text-pretty text-neutral-600 lg:col-span-7">
              <p>Point readers to the next source of help. Say which questions belong there and what information to include.</p>
            </dd>
          </div>
        </dl>
        <p className="mt-8 text-sm text-neutral-500">A short contact note for questions that need more detail. <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Contact support</a></p>
      </div>
    </section>
  )
}
