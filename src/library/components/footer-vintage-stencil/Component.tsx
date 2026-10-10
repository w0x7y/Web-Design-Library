// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function FooterVintageStencil() {
  return (
    <footer className="bg-neutral-950 text-red-400 font-['Archivo',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b-2 border-red-400 pb-6">
          <a href="#" className="text-[1.5rem] font-bold tracking-[-0.04em] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">SECOND HANDS</a>
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">Vintage clothing / Glasgow / Since 2009</p>
        </div>
        <h2 className="max-w-4xl py-10 text-[3.75rem] leading-[0.95] font-bold tracking-[-0.05em] uppercase sm:text-[6rem]">Wear it<br />again.</h2>
        <a href="#" className="flex flex-wrap items-center justify-between gap-4 border-y-2 border-red-400 py-5 text-[1.25rem] font-bold uppercase hover:bg-red-400 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">
          <span>Shop the latest drop</span>
          <span aria-hidden="true">↗</span>
        </a>
        <nav aria-label="Vintage shopping essentials">
          <ul role="list" className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <li><span className="mb-2 block text-[0.75rem] text-neutral-300">01</span><a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">New arrivals</a></li>
            <li><span className="mb-2 block text-[0.75rem] text-neutral-300">02</span><a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Size &amp; condition guide</a></li>
            <li><span className="mb-2 block text-[0.75rem] text-neutral-300">03</span><a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Sell your wardrobe</a></li>
            <li><span className="mb-2 block text-[0.75rem] text-neutral-300">04</span><a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Find the shop</a></li>
          </ul>
        </nav>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t pt-6 text-[0.75rem] border-red-400/50 text-neutral-300">
          <p>© 2026 Second Hands / Good clothes keep going.</p>
          <nav aria-label="Shop policies" className="flex flex-wrap gap-x-6 gap-y-3 text-[0.875rem]">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Delivery &amp; returns</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
