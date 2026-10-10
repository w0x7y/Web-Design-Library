// Fonts: DM Sans (https://fonts.google.com/specimen/DM+Sans)
export default function SignupCiderShare() {
  return (
    <section
      className="relative isolate overflow-hidden bg-linear-to-br from-amber-100 via-yellow-50 to-lime-200 px-6 py-16 text-green-950 font-['DM_Sans',ui-sans-serif,system-ui,sans-serif]"
    >
      <svg aria-hidden="true" viewBox="0 0 640 384" className="pointer-events-none absolute right-0 bottom-0 -z-10 h-96 w-[40rem] text-green-800/20">
        <path
          d="M100 260c-70 0-90-90-45-130 30-25 63-8 75-8 13 0 44-17 73 8 46 40 24 130-45 130ZM345 300c-70 0-90-90-45-130 30-25 63-8 75-8 13 0 44-17 73 8 46 40 24 130-45 130ZM500 150c-55 0-70-67-34-100 22-20 45-7 56-7 10 0 34-13 56 7 36 33 18 100-34 100Z"
          fill="currentColor"
        />
        <path d="m130 124-5-46m250 88-5-46m152-72-4-35" stroke="currentColor" strokeWidth="5" />
      </svg>
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-white/80 bg-white/60 p-6 backdrop-blur-xl sm:p-10">
          <header className="grid gap-6 border-b border-green-950/30 pb-8 md:grid-cols-[1.5fr_1fr] md:items-end">
            <div className="grid gap-5">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase">Pressfold / Cider-press co-operative</p>
              <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">An orchard share. A cellar full.</h2>
            </div>
            <p
              className="text-sm leading-6"
            >
              Join the annual pressing. Members collect their share in reusable bottles at the co-op, with dry and medium blends from local apples.
            </p>
          </header>
          <form action="#" method="post" className="mt-8 grid gap-8">
            <fieldset className="min-w-0">
              <legend className="mb-3 text-sm font-medium">Choose your annual share</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                <label
                  className="flex cursor-pointer items-start gap-3 border border-current/40 p-4 has-[:checked]:border-current has-[:checked]:bg-current/5"
                >
                  <input
                    type="radio"
                    name="share"
                    value="twelve"
                    defaultChecked
                    className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950"
                  />
                  <span className="grid gap-1">
                    <span className="text-sm font-semibold">12 bottles / £54</span>
                    <span className="text-xs leading-5">One mixed case, collected in November.</span>
                  </span>
                </label>
                <label
                  className="flex cursor-pointer items-start gap-3 border border-current/40 p-4 has-[:checked]:border-current has-[:checked]:bg-current/5"
                >
                  <input
                    type="radio"
                    name="share"
                    value="twentyfour"
                    className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950"
                  />
                  <span className="grid gap-1">
                    <span className="text-sm font-semibold">24 bottles / £98</span>
                    <span className="text-xs leading-5">Two mixed cases, collected in November.</span>
                  </span>
                </label>
              </div>
            </fieldset>
            <div className="grid gap-5 md:grid-cols-3">
              <label htmlFor="signup-cider-share-name" className="grid min-w-0 gap-2 text-sm font-medium">
                <span>Member name</span>
                <input
                  id="signup-cider-share-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="min-w-0 h-11 w-full border border-current/60 rounded-md bg-white/60 px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950"
                />
              </label>
              <label htmlFor="signup-cider-share-email" className="grid min-w-0 gap-2 text-sm font-medium">
                <span>Email address</span>
                <input
                  id="signup-cider-share-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 h-11 w-full border border-current/60 rounded-md bg-white/60 px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950"
                />
              </label>
              <label htmlFor="signup-cider-share-collection" className="grid min-w-0 gap-2 text-sm font-medium">
                <span>Collection weekend</span>
                <select
                  id="signup-cider-share-collection"
                  name="collection"
                  className="min-w-0 h-11 w-full border border-current/60 rounded-md bg-white/60 px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950"
                >
                  <option value="nov14">14–15 November</option>
                  <option value="nov21">21–22 November</option>
                </select>
              </label>
            </div>
            <div className="grid gap-6 border-t border-green-950/30 pt-6 md:grid-cols-[1fr_auto] md:items-center">
              <label htmlFor="signup-cider-share-age" className="flex items-start gap-3 text-sm leading-6">
                <input
                  id="signup-cider-share-age"
                  type="checkbox"
                  name="age"
                  required
                  className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950"
                />
                <span>I am 18 or over and can collect from the co-op.</span>
              </label>
              <button
                type="submit"
                className="flex min-h-12 cursor-pointer items-center justify-center px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950 hover:brightness-[1.12] rounded-md bg-green-950 text-yellow-50"
              >
                Apply for an orchard share
              </button>
            </div>
            <p className="text-xs leading-5">No payment today. We will confirm your share and send collection details.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
