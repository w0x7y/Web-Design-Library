// Fonts: Syne (https://fonts.google.com/specimen/Syne)
export default function TestimonialsListeningClub() {
  return (
    <section className="bg-fuchsia-950 text-orange-200 font-['Syne',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <header>
          <p className="text-xs font-semibold uppercase tracking-widest">Side B / The listening club</p>
          <h2 className="mt-4 max-w-2xl text-4xl leading-tight font-bold tracking-tight sm:text-5xl">Good records find good company.</h2>
        </header>
        <div className="mt-10 grid items-center gap-12 md:grid-cols-[1fr_1.3fr]">
          <div className="flex aspect-[1/1] flex-col items-center justify-between gap-6 bg-orange-200 p-6 text-neutral-950">
            <div className="flex w-full justify-between gap-4 text-xs font-semibold uppercase tracking-wide">
              <span>Side B</span>
              <span>Vol. 024 / 33 RPM</span>
            </div>
            <div className="relative grid size-60 shrink-0 place-items-center rounded-full border border-neutral-700 bg-neutral-950" aria-hidden="true">
              <div className="absolute size-52 rounded-full border border-neutral-700"></div>
              <div className="absolute size-44 rounded-full border border-neutral-700"></div>
              <span className="relative grid size-20 place-items-center rounded-full bg-orange-200 text-xl font-bold">B</span>
            </div>
            <p className="text-xl font-semibold">Listen all the way through.</p>
          </div>
          <div>
            <div className="border-t border-fuchsia-200/30">
              <div className="grid grid-cols-[2rem_1fr] gap-4 border-b border-fuchsia-200/30 py-6">
                <span className="text-sm text-fuchsia-200">A1</span>
                <figure>
                  <blockquote className="text-xl leading-relaxed">“I would never have found this record in the shop. The sleeve notes told me where to start, then I played both sides.”</blockquote>
                  <figcaption className="mt-4 text-sm text-fuchsia-200">Leo Finch / Member since March</figcaption>
                </figure>
              </div>
              <div className="grid grid-cols-[2rem_1fr] gap-4 border-b border-fuchsia-200/30 py-6">
                <span className="text-sm text-fuchsia-200">A2</span>
                <figure>
                  <blockquote className="text-xl leading-relaxed">“One record a month is enough. I know every track on the last three, which never happened with my playlists.”</blockquote>
                  <figcaption className="mt-4 text-sm text-fuchsia-200">Mina Foster / The Sunday listener</figcaption>
                </figure>
              </div>
              <div className="grid grid-cols-[2rem_1fr] gap-4 border-b border-fuchsia-200/30 py-6">
                <span className="text-sm text-fuchsia-200">B1</span>
                <figure>
                  <blockquote className="text-xl leading-relaxed">“The listening night is full of people who want to hear the music, then talk about it. In that order.”</blockquote>
                  <figcaption className="mt-4 text-sm text-fuchsia-200">Theo Okafor / London listening circle</figcaption>
                </figure>
              </div>
            </div>
            <a className="mt-6 inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" href="#">See this month’s selection</a>
          </div>
        </div>
      </div>
    </section>
  )
}
