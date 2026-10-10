// Fonts: Fraunces (https://fonts.google.com/specimen/Fraunces)
export default function BlogCardHoneyHarvest() {
  return (
    <article className="w-72 border-y border-amber-900 bg-amber-50 p-5 font-['Fraunces',ui-serif,Georgia,serif] text-amber-950 sm:w-[22rem]">
      <header className="flex items-baseline justify-between gap-3 text-sm font-semibold">
        <span>Morrowcomb</span>
        <span className="text-[9px] font-normal text-amber-800"><time dateTime="2026-10-05">5 October 2026</time></span>
      </header>
      <div className="mt-6 grid grid-cols-[minmax(0,1fr)_5rem] items-start gap-4">
        <div className="min-w-0">
          <p className="text-[9px] uppercase tracking-[0.08em] text-amber-800">Harvest notebook</p>
          <h2 className="mt-3 text-[27px] leading-[1.1] tracking-[-0.03em]">
            <a href="#morrowcomb-last-jar" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-950">The last jar of the season.</a>
          </h2>
        </div>
        <figure className="relative pb-3">
          <img
            src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=1600&q=80"
            alt="Honey dripping from a wooden dipper into a glass jar"
            width="1600"
            height="2400"
            className="h-32 w-20 object-cover"
          />
          <figcaption className="absolute -bottom-0.5 -left-2 border border-amber-900 bg-amber-50 px-2 py-1 text-[9px]">Batch 24</figcaption>
        </figure>
      </div>
      <p className="mt-5 text-xs leading-5 text-amber-900">An amber finish, a slower pour and the story of our final autumn harvest.</p>
      <footer className="mt-5 flex justify-between gap-3 border-t border-amber-900/30 pt-3 text-[10px] text-amber-800">
        <span>By June Ashby</span>
        <span>6 min read</span>
      </footer>
    </article>
  )
}
