// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function TestimonialCardToyBorrowing() {
  return (
    <figure className="w-72 overflow-hidden rounded-3xl bg-amber-50 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-rose-950 sm:w-[21rem]">
      <div className="flex h-16 items-center justify-between gap-3 bg-rose-100 px-5">
        <p className="text-lg font-bold tracking-tight">Play Parcel<span className="mt-0.5 block text-[10px] font-normal tracking-wider">BORROWER NOTE · 12</span></p>
        <svg aria-hidden="true" viewBox="0 0 80 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="h-12 w-20 shrink-0 text-rose-800">
          <path d="M8 24h28v20H8Z M22 24V12h28v32H36 M36 24h14 M50 30h22v14H50Z M13 19v5m12-5v5m11-17v5m10-5v5m10 13v5m10-5v5" />
        </svg>
      </div>
      <div className="p-5">
        <blockquote className="text-lg leading-[26px] font-medium">
          <p>“We borrowed the train set for a week. Now there’s room for the next big obsession.”</p>
        </blockquote>
        <details className="mt-4 border-t border-rose-200 pt-3">
          <summary className="cursor-pointer text-xs font-semibold hover:text-rose-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-800">Asha's borrowing note</summary>
          <p className="mt-2 text-xs leading-5">Wooden railway · 24 pieces · Seven-day loan.</p>
        </details>
      </div>
      <figcaption className="px-5 pb-5 text-xs">Asha Patel · Parent of two</figcaption>
    </figure>
  )
}
