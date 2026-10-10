// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function FooterTextileSelvedge() {
  return (
    <footer className="bg-orange-50 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] text-neutral-950 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-y-2 border-neutral-950 py-4">
          <a href="#" className="text-2xl font-bold tracking-[-0.05em] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">WARP / WEFT</a>
          <p className="text-xs font-medium uppercase tracking-widest">Lancashire woven / Since 1962</p>
        </div>
        <div className="grid gap-8 py-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <h2 className="max-w-xl text-[2.5rem] leading-[1.05] font-bold tracking-[-0.04em] sm:text-[3.5rem]">Good cloth starts<br />with a conversation.</h2>
            <p className="mt-5 max-w-md text-sm leading-6">Small-run fabrics for furniture makers and interior practices. Woven, finished and checked under one roof in Burnley.</p>
            <a href="#" className="mt-6 inline-flex min-h-12 items-center gap-8 border-2 border-neutral-950 bg-orange-300 px-5 text-sm font-bold hover:bg-neutral-950 hover:text-orange-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Request a sample book <span aria-hidden="true">↗</span></a>
          </div>
          <div>
            <div className="flex h-20 items-center justify-between gap-4 border-2 border-neutral-950 bg-[repeating-linear-gradient(90deg,#0a0a0a_0px,#0a0a0a_2px,#fff7ed_2px,#fff7ed_8px)] p-4" aria-hidden="true">
              <span className="bg-orange-50 px-2 py-1 text-xs font-bold">SAMPLE 042</span>
              <span className="bg-orange-50 px-2 py-1 text-xs font-bold">TICKING / NATURAL</span>
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 border-b-2 border-neutral-950 pb-4 text-sm">
              <dt>Weave</dt><dd className="text-right font-medium">Plain, yarn-dyed</dd>
              <dt>Composition</dt><dd className="text-right font-medium">100% linen</dd>
              <dt>Usable width</dt><dd className="text-right font-medium">140 cm</dd>
            </dl>
            <nav aria-label="Textile mill resources" className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Cloth library</a>
              <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Trade enquiries</a>
              <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Inside the mill</a>
            </nav>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t-2 border-neutral-950 pt-5 text-xs">
          <p>© 2026 Warp / Weft Textiles Ltd.</p>
          <nav aria-label="Mill policies" className="flex flex-wrap gap-5">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Privacy</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Terms of supply</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
