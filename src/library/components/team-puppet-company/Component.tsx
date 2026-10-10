// Fonts: Syne
export default function TeamPuppetCompany() {
  return (
    <section
      aria-labelledby="team-puppet-company-title"
      className="bg-cyan-950 text-cyan-50 font-['Syne',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <header className="max-w-3xl">
          <p
            className="text-[0.75rem] leading-[1.5] font-semibold uppercase tracking-[0.16em] text-orange-200"
          >
            Stringbird Puppet Company
          </p>
          <h2
            id="team-puppet-company-title"
            className="mt-4 text-[2.25rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem] font-bold"
          >
            Small characters. Big personalities.
          </h2>
          <p
            className="mt-5 max-w-xl text-[1rem] leading-[1.75] text-cyan-100"
          >
            Two people, a suitcase of stories and a theatre that fits in your school hall. Meet the hands behind the strings.
          </p>
        </header>
        <ul role="list" className="mt-10 grid gap-6 md:grid-cols-2">
          <li className="overflow-hidden rounded-t-[5rem] border border-cyan-700">
            <div className="bg-orange-300 px-8 pt-6">
              <svg aria-hidden="true" viewBox="0 0 260 192" fill="none" className="mx-auto h-48 w-full max-w-xs">
                <path d="M110 0v62M178 0v88" stroke="#083344" strokeWidth="2" />
                <path d="M70 116c-1-39 45-68 84-44l34-10-7 25 28 17-36 8c-11 36-44 49-80 29l-38 11 15-36Z" fill="#083344" />
                <path d="M103 110c17-16 33-17 50-1l-36 23Z" fill="#fdba74" />
                <circle cx="159" cy="87" r="4" fill="#fdba74" />
                <path d="M114 146v23m21-23 8 23" stroke="#083344" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-[0.75rem] leading-[1.5] font-semibold uppercase tracking-[0.1em] text-orange-200">Puppet designer</p>
              <h3 className="mt-3 text-[2rem] leading-[1.2] font-semibold">Nell Osei</h3>
              <p
                className="mt-4 max-w-md text-[0.9375rem] leading-[1.8] text-cyan-100"
              >
                A sheet of paper becomes a bird. Nell makes the characters and finds the way they move.
              </p>
            </div>
          </li>
          <li className="overflow-hidden rounded-t-[5rem] border border-cyan-700">
            <div className="bg-cyan-200 px-8 pt-6">
              <svg aria-hidden="true" viewBox="0 0 260 192" fill="none" className="mx-auto h-48 w-full max-w-xs">
                <path d="M92 0v104M162 0v104M127 0v66" stroke="#083344" strokeWidth="2" />
                <circle cx="127" cy="72" r="21" fill="#083344" />
                <path d="M109 98h36l12 50H97l12-50Z" fill="#083344" />
                <path d="m111 110-31 20m64-20 30 20m-60 18-9 27m36-27 10 27" stroke="#083344" strokeWidth="9" strokeLinecap="round" />
                <circle cx="120" cy="70" r="3" fill="#a5f3fc" />
                <circle cx="134" cy="70" r="3" fill="#a5f3fc" />
              </svg>
            </div>
            <div className="p-6 sm:p-8">
              <p
                className="text-[0.75rem] leading-[1.5] font-semibold uppercase tracking-[0.1em] text-orange-200"
              >
                Performer &amp; director
              </p>
              <h3 className="mt-3 text-[2rem] leading-[1.2] font-semibold">Otto Marin</h3>
              <p
                className="mt-4 max-w-md text-[0.9375rem] leading-[1.8] text-cyan-100"
              >
                Otto gives each character a voice, a pause and a very particular way of walking.
              </p>
            </div>
          </li>
        </ul>
        <a
          href="mailto:shows@example.com"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-orange-200 px-6 py-3 text-[0.875rem] leading-[1.5] font-semibold text-cyan-950 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200"
        >
          <span>Bring Stringbird to your school</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 shrink-0"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </div>
    </section>
  )
}
