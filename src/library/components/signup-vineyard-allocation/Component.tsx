// Fonts: Instrument Serif (https://fonts.google.com/specimen/Instrument+Serif)
export default function SignupVineyardAllocation() {
  return (
    <section className="bg-[#faf7f0] px-6 py-16 text-[#49282c]">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#49282c]/30 pb-5">
          <p className="text-xl font-semibold tracking-[0.15em]">VALE ACRE</p>
          <p className="text-xs">Independent vineyard · Wye Valley</p>
        </header>
        <img
          src="https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=1600&q=80"
          alt="Morning sunlight across vineyard rows and the valley beyond"
          width={1600}
          height={1200}
          className="h-52 w-full object-cover sm:h-72"
        />
        <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-20">
          <div className="grid content-start gap-6">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase">Vale Acre / Members allocation</p>
            <h2
              className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl"
            >
              A place at our harvest table.
            </h2>
            <p
              className="text-sm leading-6"
            >
              Small parcels, kept for the people who follow the vineyard. Receive six bottles twice a year, with notes from our winemaker.
            </p>
            <dl className="grid grid-cols-2 gap-6 border-t border-[#49282c]/30 pt-6">
              <div>
                <dt className="text-xs uppercase">Next release</dt>
                <dd className="mt-2 text-lg">Spring 2027</dd>
              </div>
              <div>
                <dt className="text-xs uppercase">Membership</dt>
                <dd className="mt-2 text-lg">No annual fee</dd>
              </div>
            </dl>
          </div>
          <form action="#" method="post" className="grid gap-5">
            <label htmlFor="signup-vineyard-allocation-name" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>Your name</span>
              <input
                id="signup-vineyard-allocation-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-transparent px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              />
            </label>
            <label htmlFor="signup-vineyard-allocation-email" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>Email address</span>
              <input
                id="signup-vineyard-allocation-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-transparent px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              />
            </label>
            <label htmlFor="signup-vineyard-allocation-allocation" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>Your allocation</span>
              <select
                id="signup-vineyard-allocation-allocation"
                name="allocation"
                className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-transparent px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              >
                <option value="mixed">Six-bottle mixed case</option>
                <option value="red">Six-bottle red case</option>
              </select>
            </label>
            <label htmlFor="signup-vineyard-allocation-age" className="flex items-start gap-3 text-sm leading-6">
              <input
                id="signup-vineyard-allocation-age"
                type="checkbox"
                name="age"
                required
                className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              />
              <span>I am aged 18 or over.</span>
            </label>
            <button
              type="submit"
              className="flex min-h-12 cursor-pointer items-center justify-center px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#49282c] hover:brightness-[1.12] bg-[#49282c] text-[#faf7f0]"
            >
              Join the allocation list
            </button>
            <p className="text-xs leading-5">We will send release dates and case prices before you order.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
