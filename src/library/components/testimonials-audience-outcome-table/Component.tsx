export default function TestimonialsAudienceOutcomeTable() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <header className="max-w-2xl">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the section</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for outcomes across audiences</h2>
        </header>
        <table className="mt-10 w-full table-fixed border-collapse text-left">
          <caption className="sr-only">Customer statements and outcomes by audience</caption>
          <thead className="hidden md:table-header-group">
            <tr className="border-b border-neutral-200 text-sm text-neutral-500">
              <th scope="col" className="w-1/4 pb-4 font-medium">Audience</th>
              <th scope="col" className="w-1/2 pb-4 font-medium">Customer statement</th>
              <th scope="col" className="w-1/4 pb-4 font-medium">Outcome</th>
            </tr>
          </thead>
          <tbody>
            <tr className="grid gap-4 border-b border-neutral-200 py-6 md:table-row">
              <th scope="row" className="pr-6 text-sm font-semibold md:py-6">Audience with a first use case</th>
              <td className="pr-6 md:py-6"><figure><blockquote className="text-base text-neutral-600">Quote that connects the need to a specific benefit.</blockquote><figcaption className="mt-2 text-sm font-medium">Alex Rivera</figcaption></figure></td>
              <td className="text-lg font-semibold md:py-6">42% less time</td>
            </tr>
            <tr className="grid gap-4 border-b border-neutral-200 py-6 md:table-row">
              <th scope="row" className="pr-6 text-sm font-semibold md:py-6">Audience expanding their work</th>
              <td className="pr-6 md:py-6"><figure><blockquote className="text-base text-neutral-600">Quote that connects the need to a specific benefit.</blockquote><figcaption className="mt-2 text-sm font-medium">Jordan Lee</figcaption></figure></td>
              <td className="text-lg font-semibold md:py-6">2.4x more output</td>
            </tr>
            <tr className="grid gap-4 border-b border-neutral-200 py-6 md:table-row">
              <th scope="row" className="pr-6 text-sm font-semibold md:py-6">Audience with shared ownership</th>
              <td className="pr-6 md:py-6"><figure><blockquote className="text-base text-neutral-600">Quote that connects the need to a specific benefit.</blockquote><figcaption className="mt-2 text-sm font-medium">Sam Kim</figcaption></figure></td>
              <td className="text-lg font-semibold md:py-6">18 hours saved</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
