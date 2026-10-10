// Fonts: Young Serif and DM Sans (https://fonts.google.com)
export default function NavbarKilnIndex() {
  return (
    <header className="bg-orange-50 font-['DM_Sans',ui-sans-serif,system-ui,sans-serif] text-red-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 md:grid-cols-[1fr_1.2fr]">
        <div>
          <a href="#" className="inline-block font-['Young_Serif',ui-serif,Georgia,serif] text-5xl leading-none tracking-tight hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">tern.</a>
          <p className="mt-4 text-xs tracking-wider uppercase">Clay objects &amp; open workshops</p>
        </div>
        <nav aria-label="Ceramics studio" className="grid grid-cols-2 gap-x-6 gap-y-2">
          <a href="#" className="flex justify-between gap-3 border-b border-red-200 py-3 text-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span>The collection</span><span aria-hidden="true">01</span></a>
          <a href="#" className="flex justify-between gap-3 border-b border-red-200 py-3 text-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span>Learn to throw</span><span aria-hidden="true">02</span></a>
          <a href="#" className="flex justify-between gap-3 border-b border-red-200 py-3 text-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span>Studio notes</span><span aria-hidden="true">03</span></a>
          <a href="#" className="flex justify-between gap-3 border-b border-red-200 py-3 text-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span>Visit the kiln</span><span aria-hidden="true">04</span></a>
          <p className="col-span-2 mt-3 text-xs text-red-800">Next firing: 24 October. Collection from the studio.</p>
        </nav>
      </div>
    </header>
  )
}
