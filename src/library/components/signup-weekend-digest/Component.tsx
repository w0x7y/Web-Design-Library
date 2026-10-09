export default function SignupWeekendDigest() {
  return (
    <section className="bg-[#faf5ea] px-6 py-12 text-[#30281f] sm:px-12">
      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
        <div className="grid content-start gap-5">
          <p className="text-xs font-medium tracking-[0.2em]">
            THE WEEKEND LETTER
          </p>
          <h2 className="font-serif text-5xl font-normal leading-tight">
            Make room for a slower read.
          </h2>
          <p className="text-base leading-7 text-[#6f6251]">
            One letter each Saturday. Essays on making, noticing and living a
            little more deliberately.
          </p>
          <form className="grid gap-4" action="#">
            <label
              className="grid gap-2 text-sm font-medium"
              htmlFor="signup-weekend-digest-email"
            >
              Your email
              <input
                className="min-w-0 w-full rounded-lg border border-current/25 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current leading-[normal]"
                id="signup-weekend-digest-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="reader@example.com"
                required
              />
            </label>
            <button
              className="border border-[#30281f] bg-[#30281f] px-4 py-3 text-sm text-[#faf5ea] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
              type="submit"
            >
              Send me the next letter
            </button>
          </form>
          <p className="text-xs text-[#6f6251]">
            Free to read. Unsubscribe whenever you like.
          </p>
        </div>
        <aside className="rotate-1 border border-[#30281f]/20 bg-white p-6 sm:p-8">
          <p className="text-[10px] tracking-widest text-[#6f6251]">
            ISSUE 084 / A PREVIEW
          </p>
          <h2 className="mt-8 font-serif text-3xl font-normal">
            On starting before you’re ready.
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#6f6251]">
            The best first draft is often the one you stop waiting to write.
            This week, a few notes on small beginnings.
          </p>
          <div className="mt-8 border-t border-[#30281f]/20 pt-4">
            <p className="text-xs text-[#6f6251]">
              8 minute read · Saturday morning
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
