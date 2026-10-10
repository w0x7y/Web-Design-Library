// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function SignupChessEvenings() {
  return (
    <section className="bg-emerald-100 px-6 py-16 text-stone-950 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.15fr_1fr] md:gap-16">
        <div className="grid content-start gap-6">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase">Rookery Nine / Since 2018</p>
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">Good moves. Better company.</h2>
          <div aria-hidden="true" className="grid max-w-md grid-cols-4 overflow-hidden border-2 border-stone-950">
            <div className="grid aspect-square place-items-center bg-emerald-50"></div>
            <div className="grid aspect-square place-items-center bg-emerald-800"></div>
            <div className="grid aspect-square place-items-center bg-emerald-50"></div>
            <div className="grid aspect-square place-items-center bg-emerald-800"></div>
            <div className="grid aspect-square place-items-center bg-emerald-800"></div>
            <div className="grid aspect-square place-items-center bg-emerald-50"></div>
            <div className="grid aspect-square place-items-center bg-emerald-800"></div>
            <div className="grid aspect-square place-items-center bg-emerald-50"></div>
            <div className="grid aspect-square place-items-center bg-emerald-50"></div>
            <div className="grid aspect-square place-items-center bg-emerald-800">
              <svg aria-hidden="true" viewBox="0 0 80 80" fill="currentColor" className="h-16 w-16 text-orange-300 sm:h-24 sm:w-24">
                <path d="M20 12h8v8h8v-8h8v8h8v-8h8v18l-8 7 4 23H24l4-23-8-7Z M20 64h40v8H20Z" />
              </svg>
            </div>
            <div className="grid aspect-square place-items-center bg-emerald-50"></div>
            <div className="grid aspect-square place-items-center bg-emerald-800"></div>
            <div className="grid aspect-square place-items-center bg-emerald-800"></div>
            <div className="grid aspect-square place-items-center bg-emerald-50"></div>
            <div className="grid aspect-square place-items-center bg-emerald-800"></div>
            <div className="grid aspect-square place-items-center bg-emerald-50"></div>
          </div>
          <p
            className="text-sm leading-6"
          >
            Wednesday, 7 pm. Bring your curiosity; we have the boards. New players always get a friendly first game.
          </p>
        </div>
        <form action="#" method="post" className="grid content-start gap-5 border-2 border-stone-950 bg-white p-6 sm:p-8">
          <p className="text-2xl font-bold">Take a seat at the board</p>
          <label htmlFor="signup-chess-evenings-name" className="grid min-w-0 gap-2 text-sm font-medium">
            <span>Your name</span>
            <input
              id="signup-chess-evenings-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-transparent px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
            />
          </label>
          <label htmlFor="signup-chess-evenings-email" className="grid min-w-0 gap-2 text-sm font-medium">
            <span>Your email</span>
            <input
              id="signup-chess-evenings-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-transparent px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
            />
          </label>
          <fieldset className="min-w-0">
            <legend className="mb-3 text-sm font-medium">How do you play?</legend>
            <div className="grid gap-3">
              <label
                className="flex cursor-pointer items-start gap-3 border border-current/40 p-4 has-[:checked]:border-current has-[:checked]:bg-current/5"
              >
                <input
                  type="radio"
                  name="experience"
                  value="new"
                  defaultChecked
                  className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
                />
                <span className="grid gap-1">
                  <span className="text-sm font-semibold">I am new to chess</span>
                  <span className="text-xs leading-5">Learn the rules with a club host.</span>
                </span>
              </label>
              <label
                className="flex cursor-pointer items-start gap-3 border border-current/40 p-4 has-[:checked]:border-current has-[:checked]:bg-current/5"
              >
                <input
                  type="radio"
                  name="experience"
                  value="regular"
                  className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
                />
                <span className="grid gap-1">
                  <span className="text-sm font-semibold">I already play</span>
                  <span className="text-xs leading-5">Casual games and our monthly ladder.</span>
                </span>
              </label>
            </div>
          </fieldset>
          <button
            type="submit"
            className="flex min-h-12 cursor-pointer items-center justify-center px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950 hover:brightness-[1.12] border-2 border-stone-950 bg-orange-300 text-stone-950"
          >
            Join the Wednesday club
          </button>
          <p className="text-xs leading-5">£6 per evening. Your first visit is on us.</p>
        </form>
      </div>
    </section>
  )
}
