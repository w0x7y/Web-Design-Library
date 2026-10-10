// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function FooterSeedRegister() {
  return (
    <footer className="bg-green-50 text-green-950 font-['Newsreader',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">Living collection / Est. 1984</p>
            <a href="#" className="mt-4 text-[2rem] leading-[1.1] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Common Acre</a>
            <p className="mt-8 text-[5rem] leading-[1] tracking-[-0.05em]">1,248</p>
            <p className="mt-3 max-w-xs text-[1.125rem] leading-[1.5]">Open-pollinated varieties.<br />A future worth keeping.</p>
          </div>
          <nav aria-label="Seed bank register" className="border-t border-green-900">
            <div className="grid gap-3 border-b border-green-900/30 py-5 sm:grid-cols-[7rem_1fr]">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">01 / Grow</p>
              <div>
                <a href="#" className="text-[1.5rem] leading-[1.25] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Request seeds for your plot</a>
                <p className="mt-2 text-[0.9375rem]">Small packets, growing notes, no patents.</p>
              </div>
            </div>
            <div className="grid gap-3 border-b border-green-900/30 py-5 sm:grid-cols-[7rem_1fr]">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">02 / Return</p>
              <div>
                <a href="#" className="text-[1.5rem] leading-[1.25] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Send next season back</a>
                <p className="mt-2 text-[0.9375rem]">Learn to save, label and share your harvest.</p>
              </div>
            </div>
            <div className="grid gap-3 border-b border-green-900/30 py-5 sm:grid-cols-[7rem_1fr]">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">03 / Ask</p>
              <div>
                <a href="mailto:seeds@commonacre.example" className="text-[1.5rem] leading-[1.25] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Talk to the seed keepers</a>
                <p className="mt-2 text-[0.9375rem]">We answer the post every Tuesday and Thursday.</p>
              </div>
            </div>
          </nav>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t pt-6 text-[0.75rem] border-green-900/30">
          <p>© 2026 Common Acre Seed Trust / Registered charity 1182046</p>
          <nav aria-label="Seed bank policies" className="flex flex-wrap gap-x-6 gap-y-3 text-[0.875rem]">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Our annual report</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
