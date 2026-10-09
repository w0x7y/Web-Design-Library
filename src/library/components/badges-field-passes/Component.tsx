export default function BadgesFieldPasses() {
  return (
    <section
      aria-label="Festival access badges"
      className="w-72 border-2 border-black bg-white p-4 text-black"
    >
      <div className="flex items-end justify-between">
        <h2 className="text-xl leading-none font-black tracking-tight uppercase">
          Field / 26
        </h2>
        <span className="font-mono text-[10px]">ACCESS PASSES</span>
      </div>
      <ul role="list" className="mt-5 space-y-3">
        <li className="flex min-h-14 border-2 border-black bg-lime-300">
          <span className="flex w-10 shrink-0 items-center justify-center border-r-2 border-black font-mono text-xs">
            01
          </span>
          <div className="px-3 py-2">
            <p className="text-sm font-black uppercase">Day pass</p>
            <p className="font-mono text-[10px]">Main stage + courtyard</p>
          </div>
          <span aria-hidden="true" className="ml-auto flex items-center pr-3">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="size-4"
            >
              <path d="M4 12 12 4M4 4h8v8" />
            </svg>
          </span>
        </li>
        <li className="flex min-h-14 border-2 border-black bg-white">
          <span className="flex w-10 shrink-0 items-center justify-center border-r-2 border-black font-mono text-xs">
            02
          </span>
          <div className="px-3 py-2">
            <p className="text-sm font-black uppercase">Workshop</p>
            <p className="font-mono text-[10px]">Studio A + materials</p>
          </div>
          <span
            aria-hidden="true"
            className="ml-auto flex items-center pr-3 text-lg"
          >
            +
          </span>
        </li>
        <li className="flex min-h-14 border-2 border-black bg-pink-200">
          <span className="flex w-10 shrink-0 items-center justify-center border-r-2 border-black font-mono text-xs">
            03
          </span>
          <div className="px-3 py-2">
            <p className="text-sm font-black uppercase">All access</p>
            <p className="font-mono text-[10px]">Every space. Every day.</p>
          </div>
          <span
            aria-hidden="true"
            className="ml-auto flex items-center pr-3 text-lg"
          >
            ★
          </span>
        </li>
      </ul>
      <p className="mt-4 border-t-2 border-black pt-3 font-mono text-[10px] uppercase">
        Wear it proudly / 24–26 October
      </p>
    </section>
  )
}
