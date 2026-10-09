export default function LoginReadingRoom() {
  return (
    <section className="bg-[#f3efe6] px-6 py-12 text-[#342d25] sm:px-12">
      <div className="mx-auto max-w-3xl border-y border-[#342d25]/30 py-8">
        <header className="flex flex-wrap justify-between gap-3 border-b border-[#342d25]/20 pb-6">
          <h2 className="font-serif text-3xl font-normal">The Reading Room</h2>
          <p className="self-center text-[10px] tracking-[0.2em]">
            MEMBERS / EST. 2019
          </p>
        </header>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="grid content-start gap-5">
            <h2 className="font-serif text-4xl font-normal leading-tight">
              A little room for good ideas.
            </h2>
            <p className="text-sm leading-7 text-[#6c6257]">
              Your saved stories, Sunday editions and conversations are waiting.
            </p>
          </div>
          <form className="grid gap-5" action="#" method="post">
            <label
              className="grid gap-2 text-sm font-medium"
              htmlFor="login-reading-room-email"
            >
              Member email
              <input
                className="min-w-0 w-full rounded-lg border border-current/25 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                id="login-reading-room-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder=""
                required
              />
            </label>
            <label
              className="grid gap-2 text-sm font-medium"
              htmlFor="login-reading-room-password"
            >
              Password
              <input
                className="min-w-0 w-full rounded-lg border border-current/25 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                id="login-reading-room-password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder=""
                required
              />
            </label>
            <button
              className="border border-[#342d25] bg-[#342d25] px-4 py-3 text-sm font-medium text-[#f3efe6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
              type="submit"
            >
              Enter the reading room
            </button>
            <a
              className="text-xs underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              href="#"
            >
              Having trouble signing in?
            </a>
          </form>
        </div>
      </div>
    </section>
  )
}
