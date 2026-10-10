// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function BlogCardPuppetStage() {
  return (
    <article className="w-72 rounded-[1.25rem] bg-teal-950 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-teal-50 sm:w-[22rem]">
      <header className="flex items-center justify-between gap-3 px-5 pt-5 text-xs font-bold">
        <span>Trapdoor Tiny</span>
        <span className="text-[9px] font-normal text-teal-200">Backstage / 04</span>
      </header>
      <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-center gap-4 p-5">
        <svg aria-hidden="true" viewBox="0 0 88 160" fill="none" className="h-40 w-[5.5rem]">
          <path d="M6 6h76v142H6Z" fill="#134e4a" stroke="#99f6e4" strokeWidth="2" />
          <path d="M7 7h37v42L21 69 7 49Zm74 0H44v42l23 20 14-20Z" fill="#fda4af" />
          <path d="M18 138h52M37 9v88m14-88v88" stroke="#99f6e4" strokeWidth="2" />
          <circle cx="44" cy="92" r="10" fill="#fef3c7" />
          <path d="m44 102-14 29h28Z" fill="#fda4af" />
          <path d="m33 110-13 9m35-9 13 9M39 131l-3 10m13-10 3 10" stroke="#fef3c7" strokeWidth="3" />
        </svg>
        <div className="min-w-0">
          <p className="text-[9px] text-teal-200">Making a character</p>
          <h2 className="mt-2 text-[25px] leading-[1.05] font-bold tracking-[-0.035em]">
            <a href="#trapdoor-puppet-weight" className="hover:text-rose-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-200">A little weight. A lot of life.</a>
          </h2>
          <p className="mt-3 text-xs leading-[1.4] text-teal-200">The tiny counterweight that gives a wooden puppet its walk.</p>
        </div>
      </div>
      <footer className="flex justify-between gap-3 rounded-b-[1.25rem] bg-rose-300 px-5 py-3 text-[10px] font-semibold text-teal-950">
        <span>From our workbench</span>
        <span>5 min read</span>
      </footer>
    </article>
  )
}
