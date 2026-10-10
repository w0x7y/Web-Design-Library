export default function LoginPianoPractice() {
  return (
    <section className="bg-zinc-950 px-6 py-12 text-zinc-100 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          <div className="grid content-between gap-10">
            <div className="grid gap-6">
              <p className="text-xs tracking-[0.2em] text-zinc-300">CADENZA HOUSE / PIANO TUITION</p>
              <h1
                className="max-w-lg text-[2.75rem] leading-[1.1] font-normal tracking-tight sm:text-6xl"
              >
                A little practice, every day.
              </h1>
              <p
                id="login-piano-practice-hint"
                className="max-w-sm text-base leading-7 text-zinc-300"
              >
                Lesson notes, repertoire and your teacher’s feedback, ready when you sit down to play.
              </p>
            </div>
            <figure className="border-t border-zinc-600 pt-6">
              <svg viewBox="0 0 560 100" preserveAspectRatio="none" aria-hidden="true" className="h-24 w-full">
                <rect x="0" y="0" width="560" height="100" fill="#f4f4f5" />
                <path d="M80 0v100" stroke="#09090b" strokeWidth="2" />
                <path d="M160 0v100" stroke="#09090b" strokeWidth="2" />
                <path d="M240 0v100" stroke="#09090b" strokeWidth="2" />
                <path d="M320 0v100" stroke="#09090b" strokeWidth="2" />
                <path d="M400 0v100" stroke="#09090b" strokeWidth="2" />
                <path d="M480 0v100" stroke="#09090b" strokeWidth="2" />
                <rect x="65" y="0" width="30" height="62" fill="#09090b" />
                <rect x="145" y="0" width="30" height="62" fill="#09090b" />
                <rect x="305" y="0" width="30" height="62" fill="#09090b" />
                <rect x="385" y="0" width="30" height="62" fill="#09090b" />
                <rect x="465" y="0" width="30" height="62" fill="#09090b" />
              </svg>
              <figcaption className="mt-3 text-xs text-zinc-400">Your next lesson begins with the last one.</figcaption>
            </figure>
          </div>
          <div className="border-t border-zinc-600 pt-6 lg:border-t-0 lg:pt-0">
            <h2 className="text-2xl font-medium tracking-tight">Student sign-in</h2>
            <form action="#" method="post" className="mt-7 grid gap-5">
              <label htmlFor="login-piano-practice-email" className="grid gap-2 text-sm font-medium">
                Student email
                <input
                  id="login-piano-practice-email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  required
                  aria-describedby="login-piano-practice-hint"
                  className="h-12 min-w-0 w-full border border-zinc-400 bg-zinc-950 px-3 text-sm font-normal rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                />
              </label>
              <label htmlFor="login-piano-practice-password" className="grid gap-2 text-sm font-medium">
                Password
                <input
                  id="login-piano-practice-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="h-12 min-w-0 w-full border border-zinc-400 bg-zinc-950 px-3 text-sm font-normal rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                />
              </label>
              <label htmlFor="login-piano-practice-remember" className="flex items-center gap-3 text-sm text-zinc-300">
                <input
                  type="checkbox"
                  name="remember"
                  id="login-piano-practice-remember"
                  aria-describedby="login-piano-practice-device"
                  className="size-4 shrink-0 accent-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                />
                Remember this device
              </label>
              <button
                type="submit"
                className="flex min-h-12 cursor-pointer items-center justify-center gap-3 bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-950 rounded-none hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-400"
              >
                Open my lesson notes
              </button>
              <a
                href="#"
                className="w-fit text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              >
                Trouble signing in?
              </a>
            </form>
            <p
              id="login-piano-practice-device"
              className="mt-5 text-xs leading-5 text-zinc-400"
            >
              Use this option on your own device. Leave it unchecked on a shared practice-room computer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
