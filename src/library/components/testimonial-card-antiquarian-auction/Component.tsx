// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function TestimonialCardAntiquarianAuction() {
  return (
    <figure className="w-72 bg-neutral-800 p-6 text-neutral-100 sm:w-[22rem]">
      <div className="flex items-center justify-between gap-3">
        <p className="text-base font-medium tracking-tight">Lotwell</p>
        <span className="text-[10px] text-neutral-300">Seller’s perspective</span>
      </div>
      <blockquote className="mt-5 font-['Newsreader',ui-serif,Georgia,serif] text-[22px] leading-[30px]">
        <p>“The estimate was explained, the condition report was precise, and I knew what would happen next.”</p>
      </blockquote>
      <div className="mt-5 flex items-center gap-3 bg-neutral-900 p-3">
        <svg aria-hidden="true" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-10 shrink-0 text-neutral-300">
          <path d="M15 11V3h10v8m-10 18v8h10v-8" />
          <circle cx="20" cy="20" r="10" />
          <path d="M20 14v6l4 2m6-4h3v4h-3" />
        </svg>
        <p className="text-xs font-medium">Lot 114<span className="mt-1 block text-[10px] font-normal text-neutral-300">Manual-wind wristwatch, 1968</span></p>
      </div>
      <figcaption className="mt-5 text-[11px] text-neutral-300">Helen Armitage · First-time seller</figcaption>
    </figure>
  )
}
