export default function TeamBioRows() {
  const people = [
    { name: 'Cameron Bell', role: 'Team director', email: 'cameron@example.com', opening: 'Opening biography that introduces experience, responsibilities and areas of focus. Give readers the context they need to understand this person\'s role.', background: 'Supporting paragraph describing the approach to collaboration and the strengths brought to the team. Keep this section specific and relevant to the work.' },
    { name: 'Dakota Ross', role: 'Design director', email: 'dakota@example.com', opening: 'Brief background describing the path to this role and the expertise it requires. Name the kinds of decisions this person helps the team make.', background: 'Further context about current responsibilities and working methods. Explain what others can expect when collaborating with this person.' },
  ]
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for the people and their stories</h2>
        <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">A short introduction explaining why these backgrounds and perspectives matter to the team.</p>
        <ul role="list" className="mt-12 border-t border-neutral-200">
          {people.map((person) => (
            <li key={person.name} className="grid gap-8 border-b border-neutral-200 py-12 sm:grid-cols-[192px_minmax(0,1fr)] lg:grid-cols-[288px_minmax(0,1fr)] lg:gap-12">
              <div role="img" aria-label={`Image placeholder: ${person.name} portrait`} className="flex aspect-[4/5] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 w-40 self-start sm:w-full"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg></div>
              <div className="max-w-xl">
                <h3 className="text-lg font-semibold">{person.name}</h3>
                <p className="mt-1 text-sm text-neutral-500">{person.role}</p>
                <p className="mt-5 text-base text-pretty text-neutral-600">{person.opening}</p>
                <p className="mt-4 text-base text-pretty text-neutral-600">{person.background}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm">
                  <a href="#" aria-label={`${person.name}'s profile`} className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">View profile</a>
                  <a href={`mailto:${person.email}`} aria-label={`Email ${person.name}`} className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Email {person.name.split(' ')[0]}</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

