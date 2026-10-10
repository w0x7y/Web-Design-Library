// Fonts: IBM Plex Mono (https://fonts.google.com/specimen/IBM+Plex+Mono)
export default function ButtonsScrapWeighbridge() {
  return (
    <section
      aria-label="Ferric Yard weighbridge actions"
      className="border-2 border-neutral-950 bg-orange-100 text-neutral-950 w-72 sm:w-[26rem] font-['IBM_Plex_Mono',ui-sans-serif,system-ui,sans-serif]"
    >
      <div className="flex items-center justify-between border-b-2 border-neutral-950 p-4 text-xs font-semibold uppercase">
        <span>Ferric Yard</span>
        <span>WB / 02</span>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold leading-tight tracking-tight">WEIGH. SORT. PAY.</h2>
        <p className="mt-2 text-xs">Mixed copper · Load FY-184</p>
        <div className="mt-5 flex">
          <button
            type="button"
            className="flex h-14 flex-1 items-center justify-between bg-neutral-950 px-3 text-sm font-semibold text-orange-100 hover:bg-neutral-700 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
          >
            <span>Record weight</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </button>
          <button
            type="button"
            className="h-14 border-2 border-neutral-950 px-3 text-xs font-semibold hover:bg-orange-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
          >Set tare</button>
        </div>
      </div>
      <div className="flex border-t-2 border-neutral-950">
        <button
          type="button"
          className="flex h-10 flex-1 items-center justify-center border-r-2 border-neutral-950 text-xs hover:bg-orange-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
        >Print receipt</button>
        <button
          type="button"
          className="flex h-10 flex-1 items-center justify-center text-xs hover:bg-orange-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
        >Metal rates ↗</button>
      </div>
    </section>
  )
}
