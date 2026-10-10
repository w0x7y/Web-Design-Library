export default function TeamSplitRosterList() {
  const people = [
    { name: 'Avery Reed', role: 'Team lead', initials: 'AR', email: 'avery@example.com', zone: 'UTC+1' },
    { name: 'Casey Park', role: 'Product designer', initials: 'CP', email: 'casey@example.com', zone: 'UTC+0' },
    { name: 'Drew Bennett', role: 'Engineer', initials: 'DB', email: 'drew@example.com', zone: 'UTC-5' },
    { name: 'Emery Lane', role: 'Researcher', initials: 'EL', email: 'emery@example.com', zone: 'UTC+2' },
    { name: 'Harper Cole', role: 'Operations lead', initials: 'HC', email: 'harper@example.com', zone: 'UTC-8' },
    { name: 'Robin Hayes', role: 'Design engineer', initials: 'RH', email: 'robin@example.com', zone: 'UTC+5' },
  ]
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div className="self-start lg:sticky lg:top-8">
          <p className="text-sm font-medium text-neutral-500">People behind the work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that introduces the roster</h2>
          <p className="mt-4 text-lg text-pretty text-neutral-600">A short description of the shared purpose and the people who contribute.</p>
          <a href="#" className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-6">Join the team</a>
        </div>
        <ul role="list" className="border-t border-neutral-200">
          {people.map((person) => (
            <li key={person.name} className="grid grid-cols-[48px_minmax(0,1fr)_40px] items-center gap-4 border-b border-neutral-200 py-5">
              <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">{person.initials}</span>
              <div className="min-w-0"><h3 className="text-base font-semibold">{person.name}</h3><p className="text-sm text-neutral-500">{person.role}</p><p className="mt-1 text-xs text-neutral-500">{person.zone}</p></div>
              <a href={`mailto:${person.email}`} aria-label={`Email ${person.name}`} className="inline-flex h-10 items-center justify-center rounded-md border border-neutral-300 bg-white text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 w-10"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></svg></a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
