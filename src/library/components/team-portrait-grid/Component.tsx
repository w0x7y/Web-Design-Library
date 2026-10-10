export default function TeamPortraitGrid() {
  const people = [
    { name: 'Avery Reed', role: 'Team lead', email: 'avery@example.com' },
    { name: 'Casey Park', role: 'Product designer', email: 'casey@example.com' },
    { name: 'Drew Bennett', role: 'Engineer', email: 'drew@example.com' },
    { name: 'Emery Lane', role: 'Researcher', email: 'emery@example.com' },
    { name: 'Harper Cole', role: 'Operations lead', email: 'harper@example.com' },
    { name: 'Robin Hayes', role: 'Design engineer', email: 'robin@example.com' },
    { name: 'Rowan Blake', role: 'Project lead', email: 'rowan@example.com' },
    { name: 'Skyler Dean', role: 'People lead', email: 'skyler@example.com' },
  ]
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="text-center">
          <p className="text-sm font-medium text-neutral-500">People behind the work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that introduces the team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-pretty text-neutral-600">A short introduction to the people, their roles and the work they share.</p>
        </div>
        <ul role="list" className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-x-6 lg:gap-x-8">
          {people.map((person) => (
            <li key={person.name}>
              <div role="img" aria-label={`Image placeholder: ${person.name} portrait`} className="flex aspect-[4/5] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg></div>
              <h3 className="mt-4 text-base font-semibold">{person.name}</h3>
              <p className="mt-1 text-sm text-neutral-500">{person.role}</p>
              <div className="mt-3 flex gap-4">
                <a href={`mailto:${person.email}`} aria-label={`Email ${person.name}`} className="inline-flex size-5 items-center justify-center text-neutral-600 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></svg></a>
                <a href="#" aria-label={`${person.name}'s profile`} className="inline-flex size-5 items-center justify-center text-neutral-600 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><circle cx="12" cy="8" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2" /></svg></a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
