// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function TestimonialsTackleFieldNotes() {
  return (
    <section className="bg-neutral-950 text-neutral-100 font-['Archivo',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24 grid gap-12 md:grid-cols-[17.5rem_1fr] md:gap-16">
        <header>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">Castmark / From the riverbank</p>
          <h2 className="mt-5 text-4xl leading-[1.05] font-black uppercase sm:text-6xl">Your next cast.</h2>
          <p className="mt-6 text-sm leading-relaxed text-neutral-300">First rods, well-used reels and advice for the water you fish. Notes from customers who took our tackle out.</p>
          <a className="mt-8 inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current text-orange-400" href="#">Find your next tackle setup</a>
        </header>
        <div className="border-l-4 border-orange-400 pl-6 sm:pl-8">
          <div className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-neutral-700 py-8">
            <span className="text-3xl font-bold text-orange-400" aria-hidden="true">01</span>
            <figure>
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">First setup / Canal</p>
              <blockquote className="mt-3 text-2xl leading-[1.5] font-medium">“They asked where I would fish before recommending a rod. I left with a simple float setup and a knot I could tie on my own.”</blockquote>
              <figcaption className="mt-5 text-sm text-neutral-300">Leah Brooks / First-season angler</figcaption>
            </figure>
          </div>
          <div className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-neutral-700 py-8">
            <span className="text-3xl font-bold text-orange-400" aria-hidden="true">02</span>
            <figure>
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">Season two / River</p>
              <blockquote className="mt-3 text-2xl leading-[1.5] font-medium">“The lighter reel balanced my rod properly. They let me try both in the shop instead of selling me the most expensive one.”</blockquote>
              <figcaption className="mt-5 text-sm text-neutral-300">Tomas Silva / Weekend angler</figcaption>
            </figure>
          </div>
          <div className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-neutral-700 py-8">
            <span className="text-3xl font-bold text-orange-400" aria-hidden="true">03</span>
            <figure>
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">Back on the bank / Lake</p>
              <blockquote className="mt-3 text-2xl leading-[1.5] font-medium">“They replaced the tired line and checked the guides on my old rod. I was back at the lake on Saturday without buying a whole new kit.”</blockquote>
              <figcaption className="mt-5 text-sm text-neutral-300">Mei Carter / Returning angler</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
