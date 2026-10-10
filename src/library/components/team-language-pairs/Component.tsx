// Fonts: Fraunces
export default function TeamLanguagePairs() {
  return (
    <section
      aria-labelledby="team-language-pairs-title"
      className="bg-amber-50 text-blue-950 font-['Fraunces',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <header className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p
              className="text-[0.75rem] leading-[1.5] font-semibold uppercase tracking-[0.16em] text-blue-800"
            >
              Verbaloom / Conference interpreting
            </p>
            <h2
              id="team-language-pairs-title"
              className="mt-4 text-[2.25rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem] font-normal"
            >
              Every voice, understood.
            </h2>
            <p
              className="mt-5 max-w-xl text-[1rem] leading-[1.75] text-stone-700"
            >
              Meet the interpreters who help a room full of different languages have one conversation.
            </p>
          </div>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=80"
              alt="Two colleagues discussing a brief across a table in a brick-walled office"
              width={1600}
              height={1067}
              className="aspect-[3/2] w-full object-cover"
            />
            <figcaption
              className="mt-3 text-[0.75rem] leading-[1.5] text-stone-600"
            >
              Good interpreting starts with the conversation before the conference.
            </figcaption>
          </figure>
        </header>
        <ul role="list" className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <li className="border-t border-blue-950 pt-6">
            <p className="text-[3rem] leading-[1] tracking-[-0.05em] text-blue-950 sm:text-[4rem]">FR / EN</p>
            <h3 className="mt-6 text-[1.75rem] leading-[1.2] font-medium">Lucie Laurent</h3>
            <p className="mt-2 text-[0.875rem] leading-[1.5] text-blue-800">French ↔ English</p>
            <p
              className="mt-4 max-w-lg text-[1rem] leading-[1.75] text-stone-700"
            >
              Lucie interprets policy and public-health conferences. She prepares the terminology with your speakers before they step on stage.
            </p>
            <a
              href="mailto:lucie@example.com"
              className="mt-5 inline-flex items-center gap-2 text-[0.875rem] leading-[1.5] underline underline-offset-4 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              <span>Discuss a brief with Lucie</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </li>
          <li className="border-t border-blue-950 pt-6">
            <p className="text-[3rem] leading-[1] tracking-[-0.05em] text-blue-950 sm:text-[4rem]">DE / EN</p>
            <h3 className="mt-6 text-[1.75rem] leading-[1.2] font-medium">Arun Weiss</h3>
            <p className="mt-2 text-[0.875rem] leading-[1.5] text-blue-800">German ↔ English</p>
            <p
              className="mt-4 max-w-lg text-[1rem] leading-[1.75] text-stone-700"
            >
              Arun works with engineering and manufacturing teams. He keeps numbers, technical terms and the pace of a discussion intact.
            </p>
            <a
              href="mailto:arun@example.com"
              className="mt-5 inline-flex items-center gap-2 text-[0.875rem] leading-[1.5] underline underline-offset-4 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              <span>Discuss a brief with Arun</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
