// Fonts: Bricolage Grotesque
export default function ProfileCardPuppetMaker() {
  return (
    <article className="w-72 rounded-3xl bg-orange-100 p-5 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-red-950 sm:w-80">
      <p className="text-xs font-bold">Pipkin Puppets</p>
      <div className="mt-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold text-red-800">Meet the maker</p>
          <h2 className="mt-2 text-[28px] leading-[1.1] font-bold">Otto<br />Bellamy</h2>
          <p className="mt-2 text-xs">Bristol, UK</p>
        </div>
        <svg aria-hidden="true" viewBox="0 0 72 112" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-28 w-[4.5rem] shrink-0">
          <path d="M12 6h48M36 6v13M12 6l4 53M60 6l-4 53" />
          <circle cx="36" cy="30" r="11" className="fill-orange-200" />
          <path d="M25 23h22M31 28v1m10-1v1m-9 6q4 3 8 0" />
          <path d="M26 45h20l5 28H21z" className="fill-red-700" />
          <path d="m26 48-10 11-6 10m36-21 10 11 6 10M29 73l-5 23-9 8m28-31 5 23 9 8" />
          <circle cx="16" cy="59" r="3" className="fill-orange-200" />
          <circle cx="56" cy="59" r="3" className="fill-orange-200" />
        </svg>
      </div>
      <p className="mt-4 text-xs leading-5">Small characters. Big stage presence.<br />Hand-built puppets for touring theatre.</p>
      <a href="#otto-commission" aria-label="Discuss a puppet commission with Otto Bellamy" className="mt-6 flex h-10 items-center justify-between rounded-tl-2xl rounded-br-2xl bg-red-700 px-4 text-xs font-semibold text-white hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-950">
        Make a character
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
          <path d="M4 10h12m-5-5 5 5-5 5" />
        </svg>
      </a>
    </article>
  )
}
