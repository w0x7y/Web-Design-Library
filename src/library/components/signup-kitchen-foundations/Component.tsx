// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function SignupKitchenFoundations() {
  return (
    <section className="bg-stone-100 px-6 py-16 text-stone-900">
      <div className="mx-auto max-w-6xl">
        <header className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div className="grid gap-6">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase">Counterlesson / Cooking school</p>
            <h2
              className="font-['Newsreader',ui-serif,Georgia,serif] text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl"
            >
              A little confidence in the kitchen.
            </h2>
            <p
              className="text-sm leading-6"
            >
              Four evenings of knife skills, sauces and meals worth repeating. Cook in pairs, then sit down to everything you have made.
            </p>
            <p className="text-xs font-semibold uppercase tracking-wide">Foundations / £180 / Ingredients included</p>
          </div>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600&q=80"
              alt="Bright kitchen counter with fresh lemons, herbs and cooking equipment"
              width={1600}
              height={959}
              className="h-64 w-full object-cover"
            />
            <figcaption className="mt-3 text-xs">Our teaching kitchen. Everything is ready for you.</figcaption>
          </figure>
        </header>
        <form action="#" method="post" className="mt-10 grid gap-8 border-t border-stone-400 pt-8 md:grid-cols-2">
          <div className="grid content-start gap-5">
            <label htmlFor="signup-kitchen-foundations-name" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>Your full name</span>
              <input
                id="signup-kitchen-foundations-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-white px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"
              />
            </label>
            <label htmlFor="signup-kitchen-foundations-email" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>Email address</span>
              <input
                id="signup-kitchen-foundations-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-white px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"
              />
            </label>
            <label htmlFor="signup-kitchen-foundations-dietary" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>Dietary or access needs</span>
              <input
                id="signup-kitchen-foundations-dietary"
                name="dietary"
                type="text"
                autoComplete="off"
                aria-describedby="signup-kitchen-foundations-dietary-hint"
                className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-white px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"
              />
              <p id="signup-kitchen-foundations-dietary-hint" className="text-xs leading-5">Optional. Tell us what would help you take part.</p>
            </label>
          </div>
          <div className="grid gap-5">
            <fieldset className="min-w-0">
              <legend className="mb-3 text-sm font-medium">Choose your four-week course</legend>
              <div className="grid gap-3">
                <label
                  className="flex cursor-pointer items-start gap-3 border border-current/40 p-4 has-[:checked]:border-current has-[:checked]:bg-current/5"
                >
                  <input
                    type="radio"
                    name="course"
                    value="tuesday"
                    defaultChecked
                    className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"
                  />
                  <span className="grid gap-1">
                    <span className="text-sm font-semibold">Tuesday evenings</span>
                    <span className="text-xs leading-5">3–24 November · 18:30–21:00</span>
                  </span>
                </label>
                <label
                  className="flex cursor-pointer items-start gap-3 border border-current/40 p-4 has-[:checked]:border-current has-[:checked]:bg-current/5"
                >
                  <input
                    type="radio"
                    name="course"
                    value="saturday"
                    className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"
                  />
                  <span className="grid gap-1">
                    <span className="text-sm font-semibold">Saturday mornings</span>
                    <span className="text-xs leading-5">7–28 November · 10:00–12:30</span>
                  </span>
                </label>
              </div>
            </fieldset>
            <button
              type="submit"
              className="flex min-h-12 cursor-pointer items-center justify-center px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900 hover:brightness-[1.12] bg-green-900 text-white"
            >
              Reserve a kitchen place
            </button>
            <p className="text-xs leading-5">Pay after we confirm your place and any dietary arrangements.</p>
          </div>
        </form>
      </div>
    </section>
  )
}
