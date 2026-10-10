// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function TestimonialCardMushroomHarvest() {
  return (
    <figure className="w-72 overflow-hidden rounded-3xl bg-amber-50 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-rose-950 sm:w-[21rem]">
      <div className="flex h-16 items-center justify-between gap-3 bg-rose-100 px-5">
        <p className="text-lg font-bold tracking-tight">Mycel Yard<span className="mt-0.5 block text-[10px] font-normal tracking-wider">GROWER NOTES · 08</span></p>
        <svg aria-hidden="true" viewBox="0 0 80 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="h-12 w-20 shrink-0 text-rose-800">
          <path d="M5 29C5 9 43 9 43 29Z M21 29v14h8V29 M40 24C40 3 74 3 74 24Z M53 24v19h8V24 M9 43h62" />
        </svg>
      </div>
      <div className="p-5">
        <blockquote className="text-lg leading-[26px] font-medium">
          <p>“The oyster blocks arrived ready to fruit. We picked our first crate before the weekend.”</p>
        </blockquote>
        <details className="mt-4 border-t border-rose-200 pt-3">
          <summary className="cursor-pointer text-xs font-semibold hover:text-rose-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-800">Luis’s crop note</summary>
          <p className="mt-2 text-xs leading-5">Grey oyster · 12 blocks · First flush in 6 days.</p>
        </details>
      </div>
      <figcaption className="px-5 pb-5 text-xs">Luis Mensah · Market gardener</figcaption>
    </figure>
  )
}
