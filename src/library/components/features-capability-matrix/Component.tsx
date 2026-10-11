export default function FeaturesCapabilityMatrix() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            Capabilities by working mode
          </h2>
          <p className="text-lg text-pretty text-neutral-600 mt-4 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
        </header>
        <table className="mt-10 w-full table-fixed border border-neutral-200 text-xs sm:text-sm">
          <caption className="mb-3 text-left text-sm text-neutral-500">
            A short comparison of capability scope by working mode.
          </caption>
          <thead className="bg-neutral-50">
            <tr className="border-b border-neutral-200">
              <th scope="col" className="p-3 text-left font-medium">
                Capability
              </th>
              <th scope="col" className="p-3 text-left font-medium">
                Personal
              </th>
              <th scope="col" className="p-3 text-left font-medium">
                Shared
              </th>
              <th scope="col" className="p-3 text-left font-medium">
                Managed
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-200">
              <th scope="row" className="p-3 text-left font-medium">
                Organize
              </th>
              <td className="p-3 text-neutral-600">Included</td>
              <td className="p-3 text-neutral-600">Included</td>
              <td className="p-3 text-neutral-600">Included</td>
            </tr>
            <tr className="border-b border-neutral-200">
              <th scope="row" className="p-3 text-left font-medium">
                Collaborate
              </th>
              <td className="p-3 text-neutral-600">Limited</td>
              <td className="p-3 text-neutral-600">Included</td>
              <td className="p-3 text-neutral-600">Included</td>
            </tr>
            <tr className="border-b border-neutral-200">
              <th scope="row" className="p-3 text-left font-medium">
                Automate
              </th>
              <td className="p-3 text-neutral-600">Basic</td>
              <td className="p-3 text-neutral-600">Extended</td>
              <td className="p-3 text-neutral-600">Extended</td>
            </tr>
            <tr className="border-b border-neutral-200">
              <th scope="row" className="p-3 text-left font-medium">
                Manage access
              </th>
              <td className="p-3 text-neutral-600">Individual</td>
              <td className="p-3 text-neutral-600">Team</td>
              <td className="p-3 text-neutral-600">Central</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
