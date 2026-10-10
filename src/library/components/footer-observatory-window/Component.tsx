// Fonts: DM Sans (https://fonts.google.com/specimen/DM+Sans)
export default function FooterObservatoryWindow() {
  return (
    <footer className="bg-cyan-950 text-cyan-50 font-['DM_Sans',ui-sans-serif,system-ui,sans-serif] antialiased bg-[radial-gradient(ellipse_at_top_right_in_oklab,#155e75_0%,#083344_45%,#020617_100%)]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a href="#" className="text-[1.25rem] font-medium tracking-[0.15em] uppercase underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">North Lens</a>
          <p className="text-[0.75rem] tracking-[0.08em] text-cyan-200">54° 17′ N / 02° 41′ W</p>
        </div>
        <div className="mt-10 grid gap-10 rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-[1fr_18rem] sm:p-10">
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">The sky has more to say</p>
            <h2 className="mt-3 text-[2.75rem] leading-[1.05] font-medium tracking-[-0.04em] sm:text-[4.25rem]">Meet us after dark.</h2>
            <p className="mt-5 max-w-md text-[0.9375rem] leading-[1.6] text-cyan-100">A small hilltop observatory. A very large universe. Public telescope evenings every clear Friday.</p>
          </div>
          <div className="border-t border-white/20 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-10">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">Next public evening</p>
            <p className="mt-3 text-[2rem] leading-[1.2]">Friday, 16 Oct<br />19:30–22:00</p>
            <p className="mt-3 text-[0.875rem] text-cyan-100">Saturn, the Moon and hot tea.<br />Weather call at 16:00.</p>
            <a href="#" className="mt-6 inline-flex min-h-12 items-center rounded-full border border-cyan-200 px-5 text-[0.875rem] font-medium hover:bg-cyan-100 hover:text-cyan-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Reserve a telescope place</a>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t pt-6 text-[0.75rem] border-white/20 text-cyan-100">
          <p>© 2026 North Lens Observatory Trust</p>
          <nav aria-label="Observatory visitor information" className="flex flex-wrap gap-x-6 gap-y-3 text-[0.875rem]">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Getting up the hill</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Cloud policy</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Access guide</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
