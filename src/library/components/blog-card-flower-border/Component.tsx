// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function BlogCardFlowerBorder() {
  return (
    <article className="w-72 bg-stone-50 font-['Manrope',ui-sans-serif,system-ui,sans-serif] text-emerald-950 sm:w-80">
      <header className="flex items-center justify-between gap-3 px-5 py-4 text-xs font-bold">
        <span>Stemframe</span>
        <span className="text-[9px] font-medium text-stone-600">Grower journal / 12</span>
      </header>
      <figure className="grid grid-cols-[minmax(0,1fr)_2rem] px-5">
        <img
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1600&q=80"
          alt="Golden California poppies growing along a flower bed"
          width="1600"
          height="1067"
          className="h-28 w-full object-cover"
        />
        <figcaption className="[writing-mode:vertical-rl] pl-2 text-[9px] text-stone-600">The edges are part of the crop.</figcaption>
      </figure>
      <div className="p-5">
        <h2 className="text-[22px] leading-7 font-semibold tracking-[-0.03em]">
          <a href="#stemframe-wild-border" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950">A wild edge, by design.</a>
        </h2>
        <p className="mt-2 text-xs leading-5 text-stone-600">Why our cut-flower rows stop short of the fence, and what grows in the gap.</p>
        <footer className="mt-4 flex justify-between gap-3 text-[10px] text-stone-600">
          <span>Nadia Flores</span>
          <span>4 min read</span>
        </footer>
      </div>
    </article>
  )
}
