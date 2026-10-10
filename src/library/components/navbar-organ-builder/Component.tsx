// Fonts: Space Mono (https://fonts.google.com/specimen/Space+Mono)
export default function NavbarOrganBuilder() {
  return (
    <header className="border-y-2 border-black bg-yellow-100 font-['Space_Mono',ui-monospace,monospace] text-black">
      <div className="mx-auto grid max-w-7xl border-x-2 border-black md:grid-cols-[1fr_1fr_auto]">
        <div className="border-b-2 border-black p-6 md:border-r-2 md:border-b-0">
          <a href="#" className="flex w-fit items-center gap-4 text-2xl font-bold leading-none hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">
            <svg aria-hidden="true" viewBox="0 0 40 40" className="size-10 shrink-0">
              <path d="M3 11h6v27H3zM17 2h6v36h-6zM31 11h6v27h-6z" fill="currentColor" />
              <path d="M4 17h4v3H4zM18 8h4v3h-4zM32 17h4v3h-4z" className="fill-orange-600" />
            </svg>
            <span>REED<br />&amp; PIPE</span>
          </a>
          <p className="mt-4 text-xs">Pipe organs / Ely CB7</p>
        </div>
        <nav aria-label="Pipe-organ builder" className="grid grid-cols-2 content-center gap-4 border-b-2 border-black p-6 text-sm md:border-r-2 md:border-b-0">
          <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">New organs</a>
          <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Restoration</a>
          <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Our builders</a>
          <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Visit the works</a>
        </nav>
        <a href="#" className="flex flex-col justify-center bg-black p-6 text-yellow-100 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><span className="text-xs">SITE VISITS / NOVEMBER</span><span className="mt-4 text-lg font-bold">Arrange a survey</span></a>
      </div>
    </header>
  )
}
