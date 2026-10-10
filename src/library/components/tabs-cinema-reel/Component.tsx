// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function TabsCinemaReel() {
  return (
    <section
      aria-label="Aisle Eleven cinema programme and visit"
      className="group w-72 sm:w-[352px] font-['Newsreader',ui-serif,Georgia,serif] border border-neutral-700 bg-neutral-950 text-orange-100"
    >
      <img
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80"
        alt="Red cinema seats beside a central aisle in a dark auditorium"
        width="800"
        height="533"
        className="h-24 w-full object-cover"
      />
      <header className="flex items-center justify-between border-b border-neutral-700 px-4 py-3">
        <h2 className="text-lg">Aisle Eleven</h2>
        <span className="text-xs text-neutral-300">10 Oct / Screen 1</span>
      </header>
      <section
        id="tabs-cinema-reel-tonight-panel"
        aria-labelledby="tabs-cinema-reel-tonight-label"
        className="hidden group-has-[#tabs-cinema-reel-tonight:checked]:block px-4 py-4"
      >
        <p className="text-xs text-orange-200">19:45 / Director Q&amp;A</p>
        <h3 className="mt-2 text-[26px] leading-7">Rooms without doors</h3>
        <p className="mt-2 text-sm text-neutral-300">A film by Inez Mora · 94 minutes</p>
        <p className="mt-3 text-xs text-orange-200">Original language · English subtitles</p>
      </section>
      <section
        id="tabs-cinema-reel-visit-panel"
        aria-labelledby="tabs-cinema-reel-visit-label"
        className="hidden group-has-[#tabs-cinema-reel-visit:checked]:block px-4 py-4"
      >
        <p className="text-xs text-orange-200">Doors open / 19:15</p>
        <h3 className="mt-2 text-[26px] leading-7">Make an evening of it</h3>
        <p className="mt-2 text-sm text-neutral-300">Café until 22:30 · 48 seats</p>
        <p className="mt-3 text-xs text-orange-200">Step-free entry · Hearing loop available</p>
      </section>
      <fieldset className="flex">
        <legend className="sr-only">Choose cinema information</legend>
        <label
          id="tabs-cinema-reel-tonight-label"
          className="flex h-11 flex-1 cursor-pointer items-center justify-between border-t border-neutral-500 px-4 text-base hover:bg-neutral-800 has-checked:bg-orange-100 has-checked:text-neutral-950 forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-orange-200"
        >
          <input
            id="tabs-cinema-reel-tonight"
            type="radio"
            name="tabs-cinema-reel-view"
            value="tonight"
            defaultChecked
            aria-controls="tabs-cinema-reel-tonight-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          <span>Tonight</span>
          <span className="text-xs">01</span>
        </label>
        <label
          id="tabs-cinema-reel-visit-label"
          className="flex h-11 flex-1 cursor-pointer items-center justify-between border-t border-neutral-500 px-4 text-base hover:bg-neutral-800 has-checked:bg-orange-100 has-checked:text-neutral-950 forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-orange-200"
        >
          <input
            id="tabs-cinema-reel-visit"
            type="radio"
            name="tabs-cinema-reel-view"
            value="visit"
            aria-controls="tabs-cinema-reel-visit-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          <span>Your visit</span>
          <span className="text-xs">02</span>
        </label>
      </fieldset>
    </section>
  )
}
