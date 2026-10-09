// Fonts: Epilogue (https://fonts.google.com/specimen/Epilogue)
export default function TabsBrutalist() {
  return (
    <div className="flex w-72 flex-col gap-6 font-['Epilogue',ui-sans-serif,system-ui,sans-serif] text-black antialiased sm:w-[34rem] sm:gap-7">
      {/* Folder tabs joined to their panel */}
      <div>
        <nav aria-label="Degree show">
          <ul role="list" className="flex">
            <li>
              <a
                href="#"
                aria-current="page"
                className="relative -mb-[3px] flex h-11 items-center border-3 border-black bg-stone-200 px-3 text-[0.8125rem] font-extrabold tracking-wide uppercase hover:bg-white focus-visible:z-20 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-800 aria-[current=page]:z-10 aria-[current=page]:border-b-0 aria-[current=page]:bg-white aria-[current=page]:pb-[3px] aria-[current=page]:shadow-[inset_0_5px_0_0_var(--color-blue-800)] sm:px-4"
              >
                Works
              </a>
            </li>
            <li className="-ml-[3px]">
              <a
                href="#"
                className="relative -mb-[3px] flex h-11 items-center border-3 border-black bg-stone-200 px-3 text-[0.8125rem] font-extrabold tracking-wide uppercase hover:bg-white focus-visible:z-20 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-800 aria-[current=page]:z-10 aria-[current=page]:border-b-0 aria-[current=page]:bg-white aria-[current=page]:pb-[3px] aria-[current=page]:shadow-[inset_0_5px_0_0_var(--color-blue-800)] sm:px-4"
              >
                Artists
              </a>
            </li>
            <li className="-ml-[3px]">
              <a
                href="#"
                className="relative -mb-[3px] flex h-11 items-center border-3 border-black bg-stone-200 px-3 text-[0.8125rem] font-extrabold tracking-wide uppercase hover:bg-white focus-visible:z-20 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-800 aria-[current=page]:z-10 aria-[current=page]:border-b-0 aria-[current=page]:bg-white aria-[current=page]:pb-[3px] aria-[current=page]:shadow-[inset_0_5px_0_0_var(--color-blue-800)] sm:px-4"
              >
                Events
              </a>
            </li>
          </ul>
        </nav>
        <div className="border-3 border-black bg-white p-4 sm:p-5">
          <p className="text-[1.75rem] leading-none font-black tracking-tight">128 works</p>
          <p className="mt-2 text-sm">By 64 graduates in Halls A–D. Open daily until 14 June.</p>
        </div>
      </div>

      {/* Filter grid with counts */}
      <nav aria-label="Filter by discipline">
        <ul role="list" className="grid grid-cols-2 gap-[3px] border-3 border-black bg-black sm:grid-cols-4">
          <li>
            <a
              href="#"
              aria-current="true"
              className="relative flex h-12 items-center justify-between gap-2 bg-white px-3 text-[0.8125rem] font-extrabold tracking-wide uppercase hover:bg-stone-200 focus-visible:z-10 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-800 aria-[current=true]:bg-black aria-[current=true]:text-white"
            >
              All
              <span className="font-medium tabular-nums">128</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex h-12 items-center justify-between gap-2 bg-white px-3 text-[0.8125rem] font-extrabold tracking-wide uppercase hover:bg-stone-200 focus-visible:z-10 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-800 aria-[current=true]:bg-black aria-[current=true]:text-white"
            >
              Painting
              <span className="font-medium tabular-nums">46</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex h-12 items-center justify-between gap-2 bg-white px-3 text-[0.8125rem] font-extrabold tracking-wide uppercase hover:bg-stone-200 focus-visible:z-10 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-800 aria-[current=true]:bg-black aria-[current=true]:text-white"
            >
              Sculpture
              <span className="font-medium tabular-nums">38</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex h-12 items-center justify-between gap-2 bg-white px-3 text-[0.8125rem] font-extrabold tracking-wide uppercase hover:bg-stone-200 focus-visible:z-10 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-800 aria-[current=true]:bg-black aria-[current=true]:text-white"
            >
              Film
              <span className="font-medium tabular-nums">44</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Pressed-block view switch */}
      <nav aria-label="View">
        <ul role="list" className="flex gap-2.5 sm:gap-3">
          <li>
            <a
              href="#"
              aria-current="true"
              className="flex h-10 items-center gap-2 border-3 border-black bg-white px-3 text-[0.8125rem] font-extrabold tracking-wide uppercase shadow-[4px_4px_0_0_#000] hover:bg-stone-200 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-800 aria-[current=true]:translate-x-1 aria-[current=true]:translate-y-1 aria-[current=true]:bg-blue-800 aria-[current=true]:text-white aria-[current=true]:shadow-none sm:px-4"
            >
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M2 2h5v5H2zM9 2h5v5H9zM2 9h5v5H2zM9 9h5v5H9z" />
              </svg>
              Grid
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex h-10 items-center gap-2 border-3 border-black bg-white px-3 text-[0.8125rem] font-extrabold tracking-wide uppercase shadow-[4px_4px_0_0_#000] hover:bg-stone-200 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-800 aria-[current=true]:translate-x-1 aria-[current=true]:translate-y-1 aria-[current=true]:bg-blue-800 aria-[current=true]:text-white aria-[current=true]:shadow-none sm:px-4"
            >
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M2 2.5h12v3H2zM2 6.5h12v3H2zM2 10.5h12v3H2z" />
              </svg>
              List
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex h-10 items-center gap-2 border-3 border-black bg-white px-3 text-[0.8125rem] font-extrabold tracking-wide uppercase shadow-[4px_4px_0_0_#000] hover:bg-stone-200 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-800 aria-[current=true]:translate-x-1 aria-[current=true]:translate-y-1 aria-[current=true]:bg-blue-800 aria-[current=true]:text-white aria-[current=true]:shadow-none sm:px-4"
            >
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M1 2h6v5H1zM9 2h6v12H9zM1 9h6v5H1z" />
              </svg>
              Plan
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
