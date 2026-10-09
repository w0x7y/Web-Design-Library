// Fonts: Host Grotesk (https://fonts.google.com/specimen/Host+Grotesk)
export default function NavbarGlass() {
  return (
    <div className="relative isolate bg-linear-to-b from-zinc-950 via-[#0a1433] to-[#1b3a8f] px-4 pt-5 pb-44 font-['Host_Grotesk',ui-sans-serif,system-ui,sans-serif] text-white antialiased sm:px-6 sm:pt-6 sm:pb-40">
      {/* Crisp shapes behind the bar, so its backdrop blur reads as frosted glass */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-24 size-96 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute top-[4.375rem] -left-1/4 h-8 w-[150%] -rotate-6 bg-linear-to-r from-transparent via-lime-300/30 to-transparent blur-xl" />
        <div className="absolute top-20 -left-1/4 h-3 w-[150%] -rotate-6 bg-linear-to-r from-transparent via-lime-300 to-transparent" />
        <div className="absolute top-28 -left-1/4 h-1.5 w-[150%] -rotate-[9deg] bg-linear-to-r from-transparent via-cyan-300/80 to-transparent" />
      </div>

      <header className="relative mx-auto max-w-5xl">
        <div className="flex h-14 items-center gap-6 rounded-full border border-white/15 bg-zinc-950/50 pr-2 pl-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_20px_40px_-16px_rgb(0_0_0/0.6)] backdrop-blur-xl">
          <a href="#" className="flex items-center gap-2 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
              <path d="M12 2 22 12 12 22 2 12Z" fill="currentColor" />
              <path d="M12 7.5 16.5 12 12 16.5" stroke="#09090b" strokeWidth="2" />
            </svg>
            <span className="text-base font-semibold tracking-[-0.01em]">Kestrel</span>
          </a>

          <nav aria-label="Main" className="hidden md:block">
            <ul role="list" className="flex items-center gap-1">
              <li>
                <a href="#" className="flex h-9 items-center rounded-full px-3.5 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white">
                  Platform
                </a>
              </li>
              <li>
                <a href="#" className="flex h-9 items-center rounded-full px-3.5 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="flex h-9 items-center rounded-full px-3.5 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="flex h-9 items-center rounded-full px-3.5 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white">
                  Docs
                </a>
              </li>
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-1.5">
            <a href="#" className="hidden h-10 items-center rounded-full px-4 text-sm text-white/75 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white md:flex">
              Sign in
            </a>
            <a
              href="#"
              className="flex h-10 items-center rounded-full bg-lime-300 px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            >
              Start deploying
            </a>

            {/* Mobile menu: a native disclosure, so it opens and closes without JavaScript */}
            <details className="group md:hidden">
              <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
                <span className="sr-only">Menu</span>
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="size-4 group-open:hidden">
                  <path d="M2.5 5.5h11M2.5 10.5h11" />
                </svg>
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="hidden size-4 group-open:block">
                  <path d="m4 4 8 8M12 4l-8 8" />
                </svg>
              </summary>

              <nav aria-label="Main" className="absolute inset-x-0 top-full z-10 mt-2 rounded-3xl border border-white/15 bg-zinc-950/60 p-2 shadow-[0_20px_40px_-16px_rgb(0_0_0/0.6)] backdrop-blur-xl">
                <ul role="list" className="grid grid-cols-2 gap-1">
                  <li>
                    <a href="#" className="flex h-11 items-center rounded-2xl px-4 text-[0.9375rem] text-white/80 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white">
                      Platform
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex h-11 items-center rounded-2xl px-4 text-[0.9375rem] text-white/80 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex h-11 items-center rounded-2xl px-4 text-[0.9375rem] text-white/80 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white">
                      Customers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex h-11 items-center rounded-2xl px-4 text-[0.9375rem] text-white/80 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white">
                      Docs
                    </a>
                  </li>
                </ul>
                <a href="#" className="mt-1 flex h-11 items-center justify-center rounded-2xl border border-white/10 text-[0.9375rem] text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white">
                  Sign in
                </a>
              </nav>
            </details>
          </div>
        </div>
      </header>
    </div>
  )
}
