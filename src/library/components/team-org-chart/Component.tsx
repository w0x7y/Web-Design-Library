export default function TeamOrgChart() {
  const lead = { name: 'Alex Rivera', role: 'Chief executive', initials: 'AR' }
  const managers = [
    {
      name: 'Jamie Quinn', role: 'Head of design', initials: 'JQ',
      reports: [
        { name: 'Morgan Chen', role: 'Product designer', initials: 'MC' },
        { name: 'Taylor Brooks', role: 'Design researcher', initials: 'TB' },
        { name: 'Casey Park', role: 'Content designer', initials: 'CP' },
      ],
    },
    {
      name: 'Sam Patel', role: 'Head of engineering', initials: 'SP',
      reports: [
        { name: 'Riley Morgan', role: 'Frontend engineer', initials: 'RM' },
        { name: 'Drew Bennett', role: 'Platform engineer', initials: 'DB' },
        { name: 'Emery Lane', role: 'Data engineer', initials: 'EL' },
      ],
    },
    {
      name: 'Harper Cole', role: 'Head of operations', initials: 'HC',
      reports: [
        { name: 'Robin Hayes', role: 'People partner', initials: 'RH' },
        { name: 'Jordan Ellis', role: 'Finance lead', initials: 'JE' },
      ],
    },
  ]
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="max-w-2xl lg:mx-auto lg:text-center">
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading about how the team is organized</h2>
          <p className="mt-4 text-lg text-pretty text-neutral-600">A short introduction to who leads each group and who to ask about what.</p>
        </header>
        <ul role="list" className="mt-12 lg:mt-16">
          <li>
            <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-4 lg:mx-auto lg:w-80">
              <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">{lead.initials}</span>
              <div className="min-w-0">
                <p className="text-base font-semibold">{lead.name}</p>
                <p className="text-sm text-neutral-500">{lead.role}</p>
              </div>
            </div>
            <ul role="list" aria-label={`Reports to ${lead.name}`} className="relative ml-9 grid gap-6 border-l border-neutral-300 pt-6 pl-6 lg:ml-0 lg:grid-cols-3 lg:gap-8 lg:border-l-0 lg:pt-8 lg:pl-0 lg:before:absolute lg:before:top-0 lg:before:left-1/2 lg:before:h-8 lg:before:border-l lg:before:border-neutral-300">
              {managers.map((manager) => (
                <li key={manager.name} className="relative lg:pt-8 lg:before:absolute lg:before:top-0 lg:before:-right-4 lg:before:-left-4 lg:before:border-t lg:before:border-neutral-300 lg:first:before:left-1/2 lg:last:before:right-1/2 lg:after:absolute lg:after:top-0 lg:after:left-1/2 lg:after:h-8 lg:after:border-l lg:after:border-neutral-300">
                  <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-4">
                    <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">{manager.initials}</span>
                    <div className="min-w-0">
                      <p className="text-base font-semibold">{manager.name}</p>
                      <p className="text-sm text-neutral-500">{manager.role}</p>
                    </div>
                  </div>
                  <ul role="list" aria-label={`Reports to ${manager.name}`} className="ml-9 grid gap-4 border-l border-neutral-300 pt-4 pl-6">
                    {manager.reports.map((report) => (
                      <li key={report.name} className="flex items-center gap-3">
                        <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600">{report.initials}</span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold">{report.name}</p>
                          <p className="text-sm text-neutral-500">{report.role}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}
