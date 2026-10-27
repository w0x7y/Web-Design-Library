export default function TeamAvatarWall() {
  const people = [
    'Alex Rivera', 'Jamie Quinn', 'Morgan Chen', 'Taylor Brooks', 'Sam Patel', 'Riley Morgan', 'Casey Park', 'Drew Bennett',
    'Emery Lane', 'Harper Cole', 'Robin Hayes', 'Avery Stone', 'Jordan Ellis', 'Quinn Foster', 'Parker Gray', 'Skyler Ward',
    'Logan Price', 'Reese Kim', 'Dana Ortiz', 'Blake Turner', 'Cameron Shaw', 'Finley Moss', 'Hayden Vance',
  ]
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that introduces the whole team</h2>
          <p className="mt-4 max-w-xl text-lg text-pretty text-neutral-600">A short introduction to who the team is, how it works and where its people are based.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">View open roles</a>
            <a href="#" className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Meet the leadership</a>
          </div>
        </div>
        <div className="max-w-lg lg:max-w-none">
          <ul role="list" aria-label="Team members" className="grid grid-cols-6 gap-2 sm:grid-cols-8 sm:gap-3">
            {people.map((name) => (
              <li key={name}>
                <span aria-hidden="true" className="flex aspect-square items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">{name.split(' ').map((part) => part[0]).join('')}</span>
                <span className="sr-only">{name}</span>
              </li>
            ))}
            <li>
              <span aria-hidden="true" className="flex aspect-square items-center justify-center rounded-full border border-dashed border-neutral-300 text-sm font-medium text-neutral-600">+25</span>
              <span className="sr-only">and 25 more people</span>
            </li>
          </ul>
          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-neutral-200 pt-6">
            <div>
              <dt className="text-sm text-neutral-500">People</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight">48</dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-500">Countries</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight">12</dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-500">Open roles</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight">6</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
