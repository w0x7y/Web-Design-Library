export default function TeamTileDirectory() {
  const people = [
    { name: 'Avery Reed', role: 'Team lead', initials: 'AR', email: 'avery@example.com', zone: 'UTC+1', bio: 'Short biography describing direction and areas of responsibility.' },
    { name: 'Casey Park', role: 'Product designer', initials: 'CP', email: 'casey@example.com', zone: 'UTC+0', bio: 'A brief introduction to expertise and working approach.' },
    { name: 'Drew Bennett', role: 'Engineer', initials: 'DB', email: 'drew@example.com', zone: 'UTC-5', bio: 'Two lines summarising experience and current focus.' },
    { name: 'Emery Lane', role: 'Researcher', initials: 'EL', email: 'emery@example.com', zone: 'UTC+2', bio: 'Background statement naming methods and interests.' },
    { name: 'Harper Cole', role: 'Operations lead', initials: 'HC', email: 'harper@example.com', zone: 'UTC-8', bio: 'A concise overview of responsibilities and collaboration.' },
    { name: 'Robin Hayes', role: 'Design engineer', initials: 'RH', email: 'robin@example.com', zone: 'UTC+5', bio: 'Short description of skills and contributions.' },
  ]
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for the people directory</h2>
          <p className="max-w-lg text-lg text-pretty text-neutral-600">A short introduction to the people, their expertise and how to reach them.</p>
        </div>
        <ul role="list" className="mt-12 grid gap-px overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <li key={person.name} className="bg-white p-6">
              <div className="flex items-center justify-between gap-3">
                <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">{person.initials}</span>
                <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">{person.zone}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold">{person.name}</h3>
              <p className="mt-1 text-sm text-neutral-500">{person.role} · {person.zone}</p>
              <p className="mt-3 text-sm text-neutral-600">{person.bio}</p>
              <a href={`mailto:${person.email}`} aria-label={`Email ${person.name}`} className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block text-sm">Email {person.name.split(' ')[0]}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
