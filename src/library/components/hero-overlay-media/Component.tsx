export default function HeroOverlayMedia() {
  return (
    <section className="relative isolate bg-neutral-950 text-white">
      <div role="img" aria-label="Image placeholder: full-width background photo" className="pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-100 text-neutral-400">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-neutral-950/70"></div>
      <div className="relative mx-auto flex min-h-[560px] max-w-3xl flex-col justify-center px-6 py-16 text-center sm:min-h-[640px] sm:py-24">
        <p className="text-sm font-medium text-neutral-300">Eyebrow that introduces the setting</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">Headline that sets the main direction</h1>
        <p className="mt-6 text-lg text-pretty text-neutral-300">Supporting copy that connects the background image to the main outcome and the next step.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors bg-white text-neutral-900 hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ">Primary action</a>
          <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors border border-white bg-transparent text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ">Secondary action</a>
        </div>
      </div>
    </section>
  )
}
