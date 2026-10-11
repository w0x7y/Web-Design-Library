export default function FeaturesNumberedLedger() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            Heading for the key benefits
          </h2>
          <p className="text-lg text-pretty text-neutral-600 mt-4 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
        </header>
        <ol role="list" className="mt-10 border-b border-neutral-200">
          <li className="grid gap-3 border-t border-neutral-200 py-6 md:grid-cols-[3rem_1fr_2fr_auto] md:items-start">
            <span className="font-mono text-sm text-neutral-500">01</span>
            <h3 className="text-lg font-semibold">Main capability</h3>
            <p className="text-base text-neutral-600">
              A concise explanation of what this capability helps someone
              accomplish.
            </p>
            <a
              href="#"
              aria-label="Explore main capability"
              className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm"
            >
              Explore
            </a>
          </li>
          <li className="grid gap-3 border-t border-neutral-200 py-6 md:grid-cols-[3rem_1fr_2fr_auto] md:items-start">
            <span className="font-mono text-sm text-neutral-500">02</span>
            <h3 className="text-lg font-semibold">Supporting workflow</h3>
            <p className="text-base text-neutral-600">
              A concise explanation of what this capability helps someone
              accomplish.
            </p>
            <a
              href="#"
              aria-label="Explore supporting workflow"
              className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm"
            >
              Explore
            </a>
          </li>
          <li className="grid gap-3 border-t border-neutral-200 py-6 md:grid-cols-[3rem_1fr_2fr_auto] md:items-start">
            <span className="font-mono text-sm text-neutral-500">03</span>
            <h3 className="text-lg font-semibold">Useful detail</h3>
            <p className="text-base text-neutral-600">
              A concise explanation of what this capability helps someone
              accomplish.
            </p>
            <a
              href="#"
              aria-label="Explore useful detail"
              className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm"
            >
              Explore
            </a>
          </li>
          <li className="grid gap-3 border-t border-neutral-200 py-6 md:grid-cols-[3rem_1fr_2fr_auto] md:items-start">
            <span className="font-mono text-sm text-neutral-500">04</span>
            <h3 className="text-lg font-semibold">Outcome assurance</h3>
            <p className="text-base text-neutral-600">
              A concise explanation of what this capability helps someone
              accomplish.
            </p>
            <a
              href="#"
              aria-label="Explore outcome assurance"
              className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm"
            >
              Explore
            </a>
          </li>
        </ol>
      </div>
    </section>
  )
}
