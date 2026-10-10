// Fonts: Familjen Grotesk (https://fonts.google.com/specimen/Familjen+Grotesk)
export default function SignupDogTraining() {
  return (
    <section className="bg-orange-100 px-6 py-16 text-[#422d22] font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
        <div className="grid content-start gap-6">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase">Goodpaw / Small-group dog classes</p>
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">Good habits. Happy walks.</h2>
          <svg aria-hidden="true" viewBox="0 0 340 220" className="h-60 w-full">
            <path d="M64 186c20-15 55-22 111-20 42 1 83 9 111 22" fill="none" stroke="#422d22" strokeWidth="3" strokeLinecap="round" />
            <path d="M138 91c-31 3-49 28-37 57l21 33h73l18-58c4-30-16-52-44-48Z" fill="#b56b3e" stroke="#422d22" strokeWidth="3" />
            <path
              d="M134 84c-7-35-24-47-39-34-11 10-5 44 11 60M177 78c23-28 40-31 48-15 7 15-8 37-24 48"
              fill="#b56b3e"
              stroke="#422d22"
              strokeWidth="3"
            />
            <path d="M131 118c6-19 45-23 55-1 5 12-7 28-25 29-24 0-36-12-30-28" fill="#ffedd5" />
            <circle cx="143" cy="105" r="4" fill="#422d22" />
            <circle cx="179" cy="101" r="4" fill="#422d22" />
            <path d="m151 120 11 1-5 8Z" fill="#422d22" />
            <path d="m157 129 1 6m0 0-8 4m8-4 9 2M123 152l69-8" fill="none" stroke="#422d22" strokeWidth="3" strokeLinecap="round" />
            <path d="M124 154l67-8" stroke="#7dd3fc" strokeWidth="9" strokeLinecap="round" />
            <path d="M131 174v16m48-16v16" stroke="#422d22" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <p
            className="text-sm leading-6"
          >
            A six-week class for the dog at the end of your lead. Practice recall, loose-lead walking and settling around other dogs.
          </p>
          <p className="text-sm font-semibold">Six dogs per class / £95 for six weeks</p>
        </div>
        <form action="#" method="post" className="grid content-start gap-5 rounded-[2rem] bg-orange-50 p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label htmlFor="signup-dog-training-name" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>Your name</span>
              <input
                id="signup-dog-training-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="min-w-0 h-11 w-full border border-current/60 rounded-xl bg-orange-50 px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              />
            </label>
            <label htmlFor="signup-dog-training-dog-name" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>Dog name</span>
              <input
                id="signup-dog-training-dog-name"
                name="dog-name"
                type="text"
                autoComplete="off"
                required
                className="min-w-0 h-11 w-full border border-current/60 rounded-xl bg-orange-50 px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              />
            </label>
          </div>
          <label htmlFor="signup-dog-training-email" className="grid min-w-0 gap-2 text-sm font-medium">
            <span>Your email</span>
            <input
              id="signup-dog-training-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 h-11 w-full border border-current/60 rounded-xl bg-orange-50 px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            />
          </label>
          <fieldset className="min-w-0">
            <legend className="mb-3 text-sm font-medium">Choose a class</legend>
            <div className="grid gap-3">
              <label
                className="flex cursor-pointer items-start gap-3 border border-current/40 p-4 has-[:checked]:border-current has-[:checked]:bg-current/5"
              >
                <input
                  type="radio"
                  name="class"
                  value="puppy"
                  defaultChecked
                  className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                />
                <span className="grid gap-1">
                  <span className="text-sm font-semibold">Puppy foundations</span>
                  <span className="text-xs leading-5">Saturdays, 09:00 · dogs under 6 months</span>
                </span>
              </label>
              <label
                className="flex cursor-pointer items-start gap-3 border border-current/40 p-4 has-[:checked]:border-current has-[:checked]:bg-current/5"
              >
                <input
                  type="radio"
                  name="class"
                  value="adult"
                  className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                />
                <span className="grid gap-1">
                  <span className="text-sm font-semibold">Everyday manners</span>
                  <span className="text-xs leading-5">Saturdays, 10:30 · dogs 6 months and older</span>
                </span>
              </label>
            </div>
          </fieldset>
          <button
            type="submit"
            className="flex min-h-12 cursor-pointer items-center justify-center px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#422d22] hover:brightness-[1.12] rounded-full bg-[#422d22] text-orange-50"
          >
            Save our place in class
          </button>
          <p className="text-xs leading-5">We will confirm the right class for your dog before taking payment.</p>
        </form>
      </div>
    </section>
  )
}
