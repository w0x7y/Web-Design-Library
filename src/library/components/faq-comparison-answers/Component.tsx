export default function FaqComparisonAnswers() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <header className="max-w-2xl">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the section</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for comparing the answers</h2>
        </header>
        <table className="mt-10 w-full table-fixed border-collapse text-left">
          <caption className="sr-only">Answers for two available options</caption>
          <thead className="hidden md:table-header-group">
            <tr className="border-b border-neutral-200">
              <th scope="col" className="w-1/3 pb-4 text-sm font-medium text-neutral-500">Question</th>
              <th scope="col" className="w-1/3 pb-4 text-sm font-semibold">First option</th>
              <th scope="col" className="w-1/3 pb-4 text-sm font-semibold">Second option</th>
            </tr>
          </thead>
          <tbody>
            <tr className="grid gap-4 border-b border-neutral-200 py-6 md:table-row">
              <th scope="row" className="pr-6 text-base font-semibold md:py-6">What is included?</th>
              <td className="pr-6 text-sm text-neutral-600 md:py-6"><span className="mb-2 block font-medium text-neutral-900 md:hidden">First option</span>Explain the core scope of the first option.</td>
              <td className="text-sm text-neutral-600 md:py-6"><span className="mb-2 block font-medium text-neutral-900 md:hidden">Second option</span>Explain the wider scope of the second option.</td>
            </tr>
            <tr className="grid gap-4 border-b border-neutral-200 py-6 md:table-row">
              <th scope="row" className="pr-6 text-base font-semibold md:py-6">Who can use it?</th>
              <td className="pr-6 text-sm text-neutral-600 md:py-6"><span className="mb-2 block font-medium text-neutral-900 md:hidden">First option</span>Describe individual access and its limits.</td>
              <td className="text-sm text-neutral-600 md:py-6"><span className="mb-2 block font-medium text-neutral-900 md:hidden">Second option</span>Describe shared access and its limits.</td>
            </tr>
            <tr className="grid gap-4 border-b border-neutral-200 py-6 md:table-row">
              <th scope="row" className="pr-6 text-base font-semibold md:py-6">How can I change it?</th>
              <td className="pr-6 text-sm text-neutral-600 md:py-6"><span className="mb-2 block font-medium text-neutral-900 md:hidden">First option</span>Explain when the first option can be changed.</td>
              <td className="text-sm text-neutral-600 md:py-6"><span className="mb-2 block font-medium text-neutral-900 md:hidden">Second option</span>Explain when the second option can be changed.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
