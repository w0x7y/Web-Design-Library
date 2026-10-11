export default function TeamRosterContactTable() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            A compact team directory
          </h2>
          <p className="text-lg text-pretty text-neutral-600 mt-4 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
        </header>
        <table className="mt-10 w-full table-fixed border border-neutral-200 text-xs sm:text-sm">
          <caption className="mb-3 text-left text-sm text-neutral-500">
            Names, responsibilities and direct contact routes.
          </caption>
          <thead className="bg-neutral-50">
            <tr>
              <th scope="col" className="p-3 text-left font-medium">
                Name
              </th>
              <th scope="col" className="p-3 text-left font-medium">
                Role
              </th>
              <th scope="col" className="p-3 text-left font-medium">
                Focus
              </th>
              <th scope="col" className="p-3 text-left font-medium">
                Contact
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-200">
              <th scope="row" className="p-3 text-left font-semibold">
                Alex Rivera
              </th>
              <td className="p-3 text-neutral-600">Role title</td>
              <td className="p-3 text-neutral-600">Focus area</td>
              <td className="p-3">
                <a
                  href="#"
                  aria-label="Email Alex Rivera"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Email
                </a>
              </td>
            </tr>
            <tr className="border-b border-neutral-200">
              <th scope="row" className="p-3 text-left font-semibold">
                Jamie Quinn
              </th>
              <td className="p-3 text-neutral-600">Role title</td>
              <td className="p-3 text-neutral-600">Focus area</td>
              <td className="p-3">
                <a
                  href="#"
                  aria-label="Email Jamie Quinn"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Email
                </a>
              </td>
            </tr>
            <tr className="border-b border-neutral-200">
              <th scope="row" className="p-3 text-left font-semibold">
                Morgan Chen
              </th>
              <td className="p-3 text-neutral-600">Role title</td>
              <td className="p-3 text-neutral-600">Focus area</td>
              <td className="p-3">
                <a
                  href="#"
                  aria-label="Email Morgan Chen"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Email
                </a>
              </td>
            </tr>
            <tr className="border-b border-neutral-200">
              <th scope="row" className="p-3 text-left font-semibold">
                Taylor Brooks
              </th>
              <td className="p-3 text-neutral-600">Role title</td>
              <td className="p-3 text-neutral-600">Focus area</td>
              <td className="p-3">
                <a
                  href="#"
                  aria-label="Email Taylor Brooks"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Email
                </a>
              </td>
            </tr>
            <tr className="border-b border-neutral-200">
              <th scope="row" className="p-3 text-left font-semibold">
                Sam Patel
              </th>
              <td className="p-3 text-neutral-600">Role title</td>
              <td className="p-3 text-neutral-600">Focus area</td>
              <td className="p-3">
                <a
                  href="#"
                  aria-label="Email Sam Patel"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Email
                </a>
              </td>
            </tr>
            <tr className="border-b border-neutral-200">
              <th scope="row" className="p-3 text-left font-semibold">
                Riley Morgan
              </th>
              <td className="p-3 text-neutral-600">Role title</td>
              <td className="p-3 text-neutral-600">Focus area</td>
              <td className="p-3">
                <a
                  href="#"
                  aria-label="Email Riley Morgan"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Email
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
