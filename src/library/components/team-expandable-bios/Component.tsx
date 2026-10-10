export default function TeamExpandableBios() {
  const people = [
    { name: 'Quinn Adams', role: 'Team lead', initials: 'QA', email: 'quinn@example.com', bio: 'Biography that introduces this person\'s responsibilities and areas of expertise. Their approach to the work and how they support the wider team.' },
    { name: 'River Brooks', role: 'Product designer', initials: 'RB', email: 'river@example.com', bio: 'A short background explaining the experience behind this role. Working methods and the kinds of decisions this person helps make.' },
    { name: 'Blair Jordan', role: 'Engineer', initials: 'BJ', email: 'blair@example.com', bio: 'An introduction to technical focus and day-to-day responsibilities. How this person collaborates with colleagues and contributes to shared outcomes.' },
    { name: 'Ellis Gray', role: 'Researcher', initials: 'EG', email: 'ellis@example.com', bio: 'A concise biography describing methods, interests and current responsibilities. The context readers need before reaching out.' },
    { name: 'Lane Foster', role: 'Operations lead', initials: 'LF', email: 'lane@example.com', bio: 'Background on the experience and skills relevant to this role. The practical support this person brings to the team and the work they coordinate.' },
  ]
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that introduces the people</h2>
        <p className="mt-4 text-lg text-pretty text-neutral-600">A short introduction inviting readers to explore each person's background and responsibilities.</p>
        <ul role="list" className="mt-12 border-t border-neutral-200">
          {people.map((person, index) => (
            <li key={person.name} className="border-b border-neutral-200">
              <details open={index === 0} className="group">
                <summary className="flex cursor-pointer list-none items-center gap-4 py-5 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">{person.initials}</span>
                  <span className="min-w-0 flex-1"><span className="block text-base font-semibold">{person.name}</span><span className="block text-sm text-neutral-500">{person.role}</span></span>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
                </summary>
                <div className="pb-5 pl-14">
                  <p className="text-base text-pretty text-neutral-600">{person.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm">
                    <a href="#" aria-label={`${person.name}'s profile`} className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">View profile</a>
                    <a href={`mailto:${person.email}`} aria-label={`Email ${person.name}`} className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Email {person.name.split(' ')[0]}</a>
                  </div>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

