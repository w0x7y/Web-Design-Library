// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function CtaNewsletter() {
  return (
    <section className="bg-white font-['Newsreader',ui-serif,Georgia,serif] text-stone-900 antialiased">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <h2 className="max-w-4xl text-[2.75rem] leading-[1.02] tracking-[-0.025em] text-balance sm:text-6xl lg:text-7xl">
          Lessons from software companies of one, <em>every other Sunday.</em>
        </h2>

        <div className="mt-12 grid gap-16 border-t border-stone-900 pt-10 lg:mt-16 lg:grid-cols-12 lg:gap-8 lg:pt-12">
          <div className="max-w-xl lg:col-span-5">
            <p className="text-lg leading-relaxed text-pretty text-stone-600 sm:text-xl">
              Small Batch is a letter from founders who build and sell software alone: what they shipped, what it
              earned, and what they would not do again. About ten minutes to read.
            </p>

            <form action="#" className="mt-10">
              <label htmlFor="cta-newsletter-email" className="text-[0.9375rem] font-medium">
                Your email
              </label>
              <div className="mt-1 flex items-center gap-4 border-b border-stone-300 transition-colors has-[input:focus-visible]:border-stone-900 has-[input:focus-visible]:shadow-[0_1px_0_currentColor]">
                <input
                  id="cta-newsletter-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="h-12 min-w-0 flex-1 text-lg outline-hidden placeholder:text-stone-500"
                />
                <button
                  type="submit"
                  className="group flex shrink-0 cursor-pointer items-center gap-1.5 rounded-sm text-lg font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
                >
                  Subscribe
                  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 transition-transform group-hover:translate-x-1">
                    <path d="M3.5 10h12.5M11.5 5.5 16 10l-4.5 4.5" />
                  </svg>
                </button>
              </div>
              <p className="mt-3 text-[0.9375rem] text-stone-500">4,200 readers. Unsubscribe with one click.</p>
            </form>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h3 className="text-lg italic">Recent letters</h3>
            <ol className="mt-2 divide-y divide-stone-200">
              <li>
                <a href="#" className="group flex flex-col gap-1 rounded-sm py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span className="text-[1.375rem] leading-snug tracking-[-0.01em] underline decoration-transparent decoration-1 underline-offset-4 transition-colors group-hover:decoration-stone-900">
                    The pricing page I rewrote four times
                  </span>
                  <span className="shrink-0 text-[0.9375rem] text-stone-500">
                    Issue 58, <time dateTime="2026-09-27">27 Sep</time>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex flex-col gap-1 rounded-sm py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span className="text-[1.375rem] leading-snug tracking-[-0.01em] underline decoration-transparent decoration-1 underline-offset-4 transition-colors group-hover:decoration-stone-900">
                    Support inbox zero without hiring anyone
                  </span>
                  <span className="shrink-0 text-[0.9375rem] text-stone-500">
                    Issue 57, <time dateTime="2026-09-13">13 Sep</time>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex flex-col gap-1 rounded-sm py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span className="text-[1.375rem] leading-snug tracking-[-0.01em] underline decoration-transparent decoration-1 underline-offset-4 transition-colors group-hover:decoration-stone-900">
                    Why I switched off the free plan
                  </span>
                  <span className="shrink-0 text-[0.9375rem] text-stone-500">
                    Issue 56, <time dateTime="2026-08-30">30 Aug</time>
                  </span>
                </a>
              </li>
            </ol>
            <a
              href="#"
              className="mt-4 inline-block rounded-sm text-[0.9375rem] font-medium underline decoration-stone-300 underline-offset-4 transition-colors hover:decoration-stone-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              Read all 58 letters
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
