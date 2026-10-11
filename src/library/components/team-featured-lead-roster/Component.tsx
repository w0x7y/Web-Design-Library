export default function TeamFeaturedLeadRoster() {
  const people = [
    { name: 'Finley Shaw', role: 'Product designer', initials: 'FS' },
    { name: 'Parker Wells', role: 'Engineer', initials: 'PW' },
    { name: 'Reese Carter', role: 'Researcher', initials: 'RC' },
    { name: 'Sage Miller', role: 'Operations lead', initials: 'SM' },
  ]
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that introduces the team</h2>
        <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">A short introduction to the lead and the people working alongside them.</p>
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-12">
          <article className="rounded-lg border border-neutral-200 bg-white lg:col-span-7">
            <div role="img" aria-label="Image placeholder: Alexis Turner portrait" className="flex aspect-video items-center justify-center rounded-t-lg bg-neutral-100 text-neutral-400"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg></div>
            <div className="p-6">
              <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Lead</span>
              <h3 className="mt-3 text-lg font-semibold">Alexis Turner</h3>
              <p className="mt-1 text-sm text-neutral-500">Team director</p>
              <p className="mt-3 text-sm text-neutral-600">Short biography describing the lead's background, responsibilities and approach to the team's shared work.</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <a href="#" aria-label="Alexis Turner's profile" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">View profile</a>
                <a href="mailto:alexis@example.com" aria-label="Email Alexis Turner" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Email Alexis</a>
              </div>
            </div>
          </article>
          <aside aria-label="Team roster" className="rounded-lg border border-neutral-200 bg-white p-6 lg:col-span-5">
            <h3 className="text-lg font-semibold">Team</h3>
            <ul role="list" className="mt-4 border-t border-neutral-200">
              {people.map((person) => (
                <li key={person.name} className="flex items-center gap-3 border-b border-neutral-200 py-4">
                  <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">{person.initials}</span>
                  <div className="min-w-0"><h4 className="text-base font-semibold">{person.name}</h4><p className="text-sm text-neutral-500">{person.role}</p></div>
                </li>
              ))}
            </ul>
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block text-sm">View all</a>
          </aside>
        </div>
      </div>
    </section>
  )
}

