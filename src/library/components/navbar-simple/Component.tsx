export default function NavbarSimple() {
  return (
    <header className="relative border-b border-zinc-200 bg-white text-zinc-950 antialiased">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <rect x="3" y="4" width="18" height="3.5" rx="1.75" />
            <rect x="3" y="10.25" width="13" height="3.5" rx="1.75" />
            <rect x="3" y="16.5" width="8" height="3.5" rx="1.75" />
          </svg>
          <span className="text-[0.9375rem] font-semibold tracking-[-0.01em]">Linea</span>
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            <li>
              <a href="#" className="relative flex h-9 items-center rounded-md px-3 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950">
                Product
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="relative flex h-9 items-center rounded-md px-3 text-sm font-medium text-zinc-950 transition-colors after:absolute after:inset-x-3 after:-bottom-[15px] after:h-px after:bg-zinc-950 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                Docs
              </a>
            </li>
            <li>
              <a href="#" className="relative flex h-9 items-center rounded-md px-3 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="relative flex h-9 items-center rounded-md px-3 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950">
                Customers
              </a>
            </li>
            <li>
              <a href="#" className="relative flex h-9 items-center rounded-md px-3 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950">
                Changelog
              </a>
            </li>
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a href="#" className="hidden h-9 items-center rounded-md px-3 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 lg:flex">
            Log in
          </a>
          <a
            href="#"
            className="flex h-9 items-center rounded-lg bg-zinc-950 px-4 text-sm font-medium text-white shadow-xs transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Start writing
          </a>

          {/* Mobile menu: a native disclosure, so it opens and closes without JavaScript */}
          <details className="group lg:hidden">
            <summary className="flex size-9 cursor-pointer list-none items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Menu</span>
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="size-4 group-open:hidden">
                <path d="M2.5 5h11M2.5 11h11" />
              </svg>
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="hidden size-4 group-open:block">
                <path d="m4 4 8 8M12 4l-8 8" />
              </svg>
            </summary>

            <nav aria-label="Main" className="absolute inset-x-0 top-full z-10 border-b border-zinc-200 bg-white px-4 pt-2 pb-5 shadow-lg sm:px-6">
              <ul className="divide-y divide-zinc-100">
                <li>
                  <a href="#" className="flex h-12 items-center text-base font-medium text-zinc-700 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950">
                    Product
                  </a>
                </li>
                <li>
                  <a href="#" aria-current="page" className="flex h-12 items-center justify-between text-base font-medium text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950">
                    Docs
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-zinc-950" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex h-12 items-center text-base font-medium text-zinc-700 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="flex h-12 items-center text-base font-medium text-zinc-700 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950">
                    Customers
                  </a>
                </li>
                <li>
                  <a href="#" className="flex h-12 items-center text-base font-medium text-zinc-700 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950">
                    Changelog
                  </a>
                </li>
              </ul>
              <a href="#" className="mt-3 flex h-10 items-center justify-center rounded-lg border border-zinc-200 text-sm font-medium transition-colors hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950">
                Log in
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
