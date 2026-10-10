export default function TeamGroupedLabelColumn() {
  const groups = [
    {
      label: 'Leadership',
      note: 'Short note about shared responsibilities.',
      people: [
        { name: 'Avery Reed', role: 'Team lead' },
        { name: 'Harper Cole', role: 'Operations lead' },
        { name: 'Skyler Dean', role: 'People lead' },
      ],
    },
    {
      label: 'Engineering',
      note: 'One line describing the group focus.',
      people: [
        { name: 'Drew Bennett', role: 'Engineer' },
        { name: 'Robin Hayes', role: 'Design engineer' },
        { name: 'Rowan Blake', role: 'Project lead' },
      ],
    },
  ]
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid items-end gap-6 lg:grid-cols-12 lg:gap-8">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:col-span-7">Heading that introduces the team groups</h2>
          <div className="lg:col-span-5">
            <p className="text-lg text-pretty text-neutral-600">A short introduction explaining how the groups work together.</p>
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block text-sm">Open roles</a>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-200">
          {groups.map((group) => (
            <section key={group.label} aria-label={group.label} className="grid gap-8 border-b border-neutral-200 py-12 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <h3 className="text-lg font-semibold">{group.label}</h3>
                <p className="mt-2 text-sm text-neutral-600">{group.note}</p>
              </div>
              <ul role="list" className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:col-span-9">
                {group.people.map((person) => (
                  <li key={person.name}>
                    <div role="img" aria-label={`Image placeholder: ${person.name} portrait`} className="flex aspect-[4/5] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg></div>
                    <h4 className="mt-4 text-base font-semibold">{person.name}</h4>
                    <p className="mt-1 text-sm text-neutral-500">{person.role}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
