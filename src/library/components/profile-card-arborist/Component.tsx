// Fonts: Bricolage Grotesque
export default function ProfileCardArborist() {
  return (
    <article className="w-72 rounded-3xl bg-lime-100 p-5 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-green-950 sm:w-80">
      <p className="text-xs font-bold">Crown & Root</p>
      <div className="mt-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold text-green-800">Consulting arborist</p>
          <h2 className="mt-2 text-[28px] leading-[1.1] font-bold">Mara<br />Ellis</h2>
          <p className="mt-2 text-xs">York, UK</p>
        </div>
        <svg aria-hidden="true" viewBox="0 0 72 112" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-28 w-[4.5rem] shrink-0">
          <path d="M31 54h10v48H31z" className="fill-green-700" />
          <path d="M36 8c-12 0-21 9-21 20C3 34 6 53 18 58c2 12 14 16 22 9 13 5 25-5 22-18 9-13 1-28-10-28C50 13 44 8 36 8Z" className="fill-lime-200" />
          <path d="M36 74V33m0 19L24 40m12 20 15-15M22 104h28" />
        </svg>
      </div>
      <p className="mt-4 text-xs leading-5">Healthy trees. Safer streets.<br />Tree surveys for homes and public spaces.</p>
      <a href="#mara-tree-survey" aria-label="Book a tree survey with Mara Ellis" className="mt-6 flex h-10 items-center justify-between rounded-tl-2xl rounded-br-2xl bg-green-700 px-4 text-xs font-semibold text-white hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950">
        Book a tree survey
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
          <path d="M4 10h12m-5-5 5 5-5 5" />
        </svg>
      </a>
    </article>
  )
}
