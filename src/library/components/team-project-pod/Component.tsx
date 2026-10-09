export default function TeamProjectPod() {
  return (
    <section
      aria-labelledby="team-project-pod-title"
      className="bg-white text-black"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <header className="border-t-4 border-black pt-5">
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-wider">
            <p>Northline / Delivery team</p>
            <p>Project 026</p>
          </div>
          <h2
            id="team-project-pod-title"
            className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl"
          >
            Four disciplines.
            <br />
            One clear owner.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600">
            The people accountable for getting your product from the first
            question to the first customer.
          </p>
        </header>
        <ol
          role="list"
          className="mt-10 grid border-t-2 border-l-2 border-black sm:grid-cols-2 lg:grid-cols-4"
        >
          <li className="border-r-2 border-b-2 border-black p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs">01 / DEFINE</span>
              <span aria-hidden="true" className="size-3 bg-black" />
            </div>
            <h3 className="mt-10 text-2xl font-bold">Iris James</h3>
            <p className="mt-2 text-sm font-medium">Research lead</p>
            <p className="mt-4 text-sm leading-6 text-neutral-600">
              Turns customer conversations into a problem worth solving.
            </p>
          </li>
          <li className="border-r-2 border-b-2 border-black bg-yellow-300 p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs">02 / DESIGN</span>
              <span
                aria-hidden="true"
                className="size-3 rounded-full bg-black"
              />
            </div>
            <h3 className="mt-10 text-2xl font-bold">Leo Varga</h3>
            <p className="mt-2 text-sm font-medium">Product designer</p>
            <p className="mt-4 text-sm leading-6">
              Makes the useful path feel obvious, then tests it with real
              people.
            </p>
          </li>
          <li className="border-r-2 border-b-2 border-black p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs">03 / BUILD</span>
              <span aria-hidden="true" className="size-3 rotate-45 bg-black" />
            </div>
            <h3 className="mt-10 text-2xl font-bold">Nia Grant</h3>
            <p className="mt-2 text-sm font-medium">Engineering lead</p>
            <p className="mt-4 text-sm leading-6 text-neutral-600">
              Builds a reliable system that the next team can understand.
            </p>
          </li>
          <li className="border-r-2 border-b-2 border-black p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs">04 / SHIP</span>
              <span aria-hidden="true" className="h-3 w-1 bg-black" />
            </div>
            <h3 className="mt-10 text-2xl font-bold">Tomás Ruiz</h3>
            <p className="mt-2 text-sm font-medium">Delivery partner</p>
            <p className="mt-4 text-sm leading-6 text-neutral-600">
              Keeps decisions moving and makes sure the handoff holds up.
            </p>
          </li>
        </ol>
        <a
          href="#northline-project-brief"
          className="mt-8 inline-flex items-center gap-3 border-2 border-black bg-black px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          See how we work{' '}
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="inline-block size-3.5 align-[-0.125em]"
          >
            <path d="M5 15 15 5M5 5h10v10" />
          </svg>
        </a>
      </div>
    </section>
  )
}
