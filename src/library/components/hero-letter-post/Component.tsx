// Fonts: Syne (https://fonts.google.com/specimen/Syne)
export default function HeroLetterPost() {
  return (
    <section className="bg-emerald-100 text-emerald-950 font-['Syne',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-2xl font-bold tracking-tight">Dear Elsewhere</p>
          <p className="text-sm">The letter-writing club</p>
        </div>
        <div className="mt-10 border-2 border-emerald-950">
          <div className="grid items-center gap-12 bg-emerald-50 p-6 sm:p-10 lg:grid-cols-[2fr_1fr]">
            <div>
              <h1 className="text-[2.5rem] leading-[1.1] font-bold tracking-tight sm:text-[3.75rem]">Some words<br />deserve a stamp.</h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed">One prompt a month. A person you have been meaning to write to. We help you turn a blank page into something worth finding on the doormat.</p>
              <form action="#" method="get" className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-end">
                <div className="min-w-0 flex-1">
                  <label htmlFor="hero-letter-post-email" className="mb-2 block text-xs font-semibold">Your email address</label>
                  <input id="hero-letter-post-email" type="email" name="email" autoComplete="email" required aria-describedby="hero-letter-post-hint" placeholder="you@somewhere.com" className="h-12 w-full min-w-0 border border-emerald-700 bg-white px-3 text-sm placeholder:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950" />
                </div>
                <button type="submit" className="min-h-12 shrink-0 rounded bg-red-800 px-5 py-3 text-sm font-semibold text-white hover:bg-red-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950">Send me a prompt</button>
              </form>
              <p id="hero-letter-post-hint" className="mt-4 text-xs leading-relaxed">Free, once a month. Your address stays with us.</p>
            </div>
            <aside className="border border-dashed border-red-800 p-5 text-red-800">
              <p className="text-xs font-bold uppercase tracking-widest">Post no. 07</p>
              <svg className="mt-4 h-36 w-full" aria-hidden="true" viewBox="0 0 240 180" fill="none">
                <path d="M10 10H230V170H10Z" fill="#fef2f2" stroke="#991b1b" strokeWidth="2" strokeDasharray="5 5" />
                <path d="M35 130H205M35 140H205M35 150H205" stroke="#991b1b" strokeWidth="2" />
                <path d="M70 119A50 50 0 0 1 170 119" fill="#991b1b" />
                <path d="M120 42V27M63 65 53 55M177 65 187 55" stroke="#991b1b" strokeWidth="2" />
              </svg>
              <p className="mt-4 text-xl leading-tight font-semibold">A small kindness,<br />sent the long way.</p>
              <p className="mt-4 text-xs leading-relaxed">October prompt<br />Write to someone who taught you something you still use.</p>
            </aside>
          </div>
          <svg className="h-28 w-full bg-emerald-100" aria-hidden="true" viewBox="0 0 1200 160" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M0 0 600 145 1200 0M0 160 420 60M1200 160 780 60" />
          </svg>
        </div>
      </div>
    </section>
  )
}
